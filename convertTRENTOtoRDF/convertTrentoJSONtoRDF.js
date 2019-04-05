var config = require('../nightwatch.conf.js');
var util = require('../page-objects/utils/util.js');
var fs = require('fs');
var path = require('path');

var sourcedata_filename = 'dataTrento';
var JSONdata = fs.readFileSync('tmp/'+sourcedata_filename+'.json', { 'encoding': 'utf8'});
var data = JSON.parse(JSONdata)[0];
var download_folder = "downloads/";

var mappingTrento = require('../page-objects/utils/mappingTrento.json');
var languages = ["Italian"];

var time_pause = 1000;
var enable_screenshot = false;

module.exports = {
	'@tags': ['dataTrento'],

	'Fill data': function(browser) {

		var editor = browser.page.Editor();
		var rdfdata = browser.page.RDFData();

		for (var i=0; i < languages.length; i++) {

			for (var j=0; j < util.getLengthData(data, languages[i]); j++) {

			/*Fill the public service information*/
			editor.navigate()
				.waitForElementVisible('body')
				.set_ps_identifier(util.getPublicServiceId(data, languages[i], j))
				.set_ps_name(util.getPublicServiceName(data, languages[i], j))
				.set_ps_name_lang(languages[i])
				.set_ps_description(util.getPublicServiceDescription(data, languages[i], j))
				.set_ps_description_lang(languages[i])
				.set_ps_language(languages[i])
				.set_ps_spatial(util.getSpatialCodeByMapping(data, mappingTrento.mappings[0].SpatialCode[0], languages[i], j))
				.set_ps_status(util.getStatusByMapping(data, mappingTrento.mappings[1].Status[0], languages[i], j));
			
				
			
			var keywords = util.getPublicServiceKeywords(data, languages[i], j );
			for (var k = 0; k < keywords.length; k++) {
			    editor
			    	.set_ps_keyword(keywords[k], k+1)
			    	.set_ps_keyword_lang(languages[i], k+1)
			    	.expand_ps_keyword();
			}
			
			var sector = util.getPublicServiceSector(data, languages[i], j );
			for (var k = 0; k < sector.length; k++) {
			    editor
			    	.set_ps_sector(sector[k], k+1)
			    	.expand_ps_sector();
			}
			
			var type = util.getPublicServiceType(data, languages[i], j );
			for (var k = 0; k < type.length; k++) {
			    editor
			    	.set_ps_type(type[k], k+1)
			    	.expand_ps_type();
			}
			
			var thematicarea = util.getPublicServiceThematicArea(data, languages[i], j );
			for (var k = 0; k < thematicarea.length; k++) {
			    editor
			    	.set_ps_thematicarea(thematicarea[k], k+1)
			    	.expand_ps_thematicarea();
			}
			
			editor
				.set_ps_pt_years(util.getProcessingTimeYear(data, languages[i], j))
				.set_ps_pt_months(util.getProcessingTimeMonth(data, languages[i], j))
				.set_ps_pt_days(util.getProcessingTimeDay(data, languages[i], j))
				.set_ps_pt_hours(util.getProcessingTimeHour(data, languages[i], j))
				.set_ps_pt_minutes(util.getProcessingTimeMinute(data, languages[i], j));

			
			
			/*Fill CompetentAuthority */
			var ca_identifier = util.getCompotentAuthorityIdentifier(data, languages[i], j);
			editor
				.set_ca_identifier(ca_identifier)
				.set_ca_name(util.getCompetentAuthorityName(data, languages[i], ca_identifier))
				.set_ca_name_lang(languages[i]);
			
			
			/*Download the result*/
			editor.select();

			if(enable_screenshot){
				browser
					.saveScreenshot(config.imgpath(browser) + 'editor.png');
			}

			rdfdata
				.select();

			if(enable_screenshot){
				browser
					.pause(time_pause)
					.saveScreenshot(config.imgpath(browser) + 'rdfdata.png');
			}

			browser
				.pause(time_pause);

			rdfdata
				.download();

			browser
				.pause(time_pause*4);

			if(enable_screenshot){
				browser
					.saveScreenshot(config.imgpath(browser) + 'rdfdata-download.png');
			}

			};
			
		}	

		browser
			.end();	

	}
	
};
