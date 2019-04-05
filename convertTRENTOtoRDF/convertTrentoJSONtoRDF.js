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
			
			var requires = util.getRequires(data,languages[i],j);
			for (var k = 0; k < requires.length; k++) {
			    editor
			    	.set_ps_requires(requires[k], k+1)
			    	.expand_ps_requires();
			}
			
			var related = util.getRelated(data,languages[i],j);
			for (var k = 0; k < related.length; k++) {
			    editor
			    	.set_ps_related(related[k], k+1)
			    	.expand_ps_related();
			}
			
			browser
			.pause(time_pause*5);
					
//			/*Fill Business Event*/
//			var eventClass = String(util.getEventClassByMapping(data, mappingPortugal.mappings[1].EventClass[0], languages[i], j));
//
//			if (eventClass == "Business Event") {
//				editor
//					.be_expand()
//					.set_be_identifier("BusinessEvent")
//					.set_be_description(eventClass);
//			} else if (eventClass == "Life Event") {
//				editor
//					.le_expand()
//					.set_le_identifier("LifeEvent")
//					.set_le_description(eventClass);
//			}			
//			
//			/*Fill Evidence*/
//			
//			
//			
//			/*Fill Criterion Requirement*/
//			
//			
//			
//			/*Fill Output*/
//			
//			
//			/*Fill the Channel*/
//			editor
//				.hch_expand()
//				.set_hch_identifier(util.escapeSpecialChars(util.getChannelIdentifier(data, languages[i], j)))
//				.set_hch_type(util.getChannelTypeByMapping(data, mappingSpain.mappings[2].ChannelType[0], languages[i], j));
//			
//			/*Fill all Legal Resources */
//			var formalFrameworks = util.getFormalFrameworks(data, languages[i], j );
//			for (var f = 0; f < formalFrameworks.length; f++) {
//				if (f == 0) {
//					expand = 1
//				} else {
//					expand = f
//				}
//			    editor
//			    	.ff_expand(expand)
//			    	.set_ff_identifier(util.getFormalFrameworkIdentifier(data, languages[i], f, j), f+1)
//					.set_ff_name(util.getFormalFrameworkName(data, languages[i], f, j), f+1)
//					.set_ff_name_lang(languages[i], f+1)
//					.set_ff_description(util.getFormalFrameworkDescription(data, languages[i], f, j), f+1)
//					.set_ff_description_lang(languages[i], f+1);
//			}
//
//			/*Fill Public Organisation */
//			var ca_identifier = util.getCompotentAuthorityIdentifier(data, languages[i], j);
//			editor
//				.set_ca_identifier(ca_identifier)
//				.set_ca_name(util.getCompetentAuthorityName(data, languages[i], ca_identifier))
//				.set_ca_name_lang(languages[i]);
////				.set_ca_preflabel()
////				.set_ca_preflabel.lang(languages[i])
////				.set_ca_hasaddress();
//			
//			/*Fill the Contact Point */			
//			
//			
//			
//			/*Fill the Concept */	
			
			
			
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
