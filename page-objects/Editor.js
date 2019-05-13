var util = require('util');
var utils = require('./utils/util.js');

module.exports = {
	url: function() { 
		return "http://52.50.205.146:8890/rdforms/PSDescriptionCreator_2.2.1.html"; 
	},
	getElementByXpath: function(path) {
			return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
	},
	elements: {
		tab: {
			selector: '#dijit_layout_TabContainer_0_tablist_dijit_layout_ContentPane_0'
		},
		ps_identifier: {
			selector: '(//span[text()="Identifier"])[1]/../../div[2]/div[1]/div[2]/div[1]/input',
			locateStrategy: 'xpath'
		},
		ps_name: {
			selector: '(//span[text()="Name"])[1]/../../div[2]/div[1]/div[2]/div[1]/input',
			locateStrategy: 'xpath'
		},
		ps_name_lang: {
			selector: '(//span[text()="Name"])[1]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ps_description: {
			selector: '(//span[text()="Description"])[1]/../../div[2]/div[1]/div[2]/div[1]/input',
			locateStrategy: 'xpath'
		},
		ps_description_lang: {
			selector: '(//span[text()="Description"])[1]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ps_keyword: {
			selector: '(//span[text()="Keyword"])[1]/../../div[2]/div[%d]/div[2]/div[1]/input',
			locateStrategy: 'xpath'
		},
		keyword_click: {
			selector: '//div[1]/span[1][text() = "Keyword"]/../span[2]',
			locateStrategy: 'xpath'
		},
		ps_keyword_lang: {
			selector: '(//span[text()="Keyword"])[1]/../../div[2]/div[%d]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ps_sector: {
			selector: '(//span[text()="Sector"])[1]/../../div[2]/div[%d]/div[2]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		sector_click: {
			selector: '//div[1]/span[1][text() = "Sector"]/../span[2]',
			locateStrategy: 'xpath'
		},
		ps_type: {
			selector: '(//span[text()="Type"])[1]/../../div[2]/div[%d]/div[2]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		type_click: {
			selector: '//div[1]/span[1][text() = "Type"]/../span[2]',
			locateStrategy: 'xpath'
		},
		ps_thematicarea: {
			selector: '(//span[text()="ThematicArea"])[1]/../../div[2]/div[%d]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		thematicarea_click: {
			selector: '//div[1]/span[1][text() = "ThematicArea"]/../span[2]',
			locateStrategy: 'xpath'
		},
		
		
		ps_language: {
			selector: '(//span[text()="Language"])[1]/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ps_status: {
			selector: '(//span[text()="Status"])[1]/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ps_spatial: {
			selector: '(//span[text()="Spatial"])[1]/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ps_pt_years: {
			selector: '(//span[text()="ProcessingTime"])[1]/../../div[2]/div[1]/div[2]/span[text()="Years"]/following-sibling::div[1]/div[3]/input',
			locateStrategy: 'xpath'
		},
		ps_pt_months: {
			selector: '(//span[text()="ProcessingTime"])[1]/../../div[2]/div[1]/div[2]/span[text()="Months"]/following-sibling::div[1]/div[3]/input',
			locateStrategy: 'xpath'
		},
		ps_pt_days: {
			selector: '(//span[text()="ProcessingTime"])[1]/../../div[2]/div[1]/div[2]/span[text()="Days"]/following-sibling::div[1]/div[3]/input',
			locateStrategy: 'xpath'
		},
		ps_pt_hours: {
			selector: '(//span[text()="ProcessingTime"])[1]/../../div[2]/div[1]/div[2]/span[text()="Hours"]/following-sibling::div[1]/div[3]/input',
			locateStrategy: 'xpath'
		},
		ps_pt_minutes: {
			selector: '(//span[text()="ProcessingTime"])[1]/../../div[2]/div[1]/div[2]/span[text()="Minutes"]/following-sibling::div[1]/div[3]/input',
			locateStrategy: 'xpath'
		},
		ps_requires: {
			selector: '(//span[text()="Requires"])[1]/../../div[2]/div[%d]/div[2]/div[1]/input',
			locateStrategy: 'xpath'
		},
		requires_click: {
			selector: '//div[1]/span[1][text() = "Requires"]/../span[2]',
			locateStrategy: 'xpath'
		},
		ps_related: {
			selector: '(//span[text()="Related"])[1]/../../div[2]/div[%d]/div[2]/div[1]/input',
			locateStrategy: 'xpath'
		},
		related_click: {
			selector: '//div[1]/span[1][text() = "Related"]/../span[2]',
			locateStrategy: 'xpath'
		},
		ca_identifier: {
			selector: '//div[1]/span[1][text() = "HasCompetentAuthority"]/../../div[2]/div[1]/div[1]/div[1]/span[1][text() = "Identifier"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		ca_name: {
			selector: '//div[1]/span[1][text() = "HasCompetentAuthority"]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		ca_name_lang: {
			selector: '//div[1]/span[1][text() = "HasCompetentAuthority"]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ca_preferredlabel: {
			selector: '//div[1]/span[1][text() = "HasCompetentAuthority"]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "PreferredLabel"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		ca_preferredlabel_lang: {
			selector: '//div[1]/span[1][text() = "HasCompetentAuthority"]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "PreferredLabel"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ca_spatial: {
			selector: '//div[1]/span[1][text() = "HasCompetentAuthority"]/../../div[2]/div[1]/div[4]/div[1]/span[text()="Spatial"]/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ca_hasaddress: {
			selector: '//div[1]/span[1][text() = "HasCompetentAuthority"]/../../div[2]/div[1]/div[5]/div[1]/span[1][text() = "HasAddress"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		sector_click: {
			selector: '//div[1]/span[1][text() = "Sector"]/../span[2]',
			locateStrategy: 'xpath'
		},			
		be_click: {
			selector: '(//span[text() = "IsGroupedBy: BusinessEvent"])[%d]/../span[2]',
			locateStrategy: 'xpath'
		},
		be_identifier: {
			selector: '(//div[1]/span[1][text() = "IsGroupedBy: BusinessEvent"])[%d]/../../div[2]/div[1]/div[1]/div[1]/span[1][text() = "Identifier"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		be_name: {
			selector: '(//div[1]/span[1][text() = "IsGroupedBy: BusinessEvent"])[%d]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		be_name_lang: {
			selector: '(//div[1]/span[1][text() = "IsGroupedBy: BusinessEvent"])[%d]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		be_description: {
			selector: '(//div[1]/span[1][text() = "IsGroupedBy: BusinessEvent"])[%d]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "Description"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		be_description_lang: {
			selector: '(//div[1]/span[1][text() = "IsGroupedBy: BusinessEvent"])[%d]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "Description"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		be_related: {
			selector: '(//div[1]/span[1][text() = "IsGroupedBy: BusinessEvent"])[%d]/../../div[2]/div[1]/div[4]/div[1]/span[1][text() = "RelatedService"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		be_type: {
			selector: '(//div[1]/span[1][text() = "IsGroupedBy: BusinessEvent"])[%d]/../../div[2]/div[1]/div[5]/div[1]/span[1][text() = "Type"]/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		le_click: {
			selector: '(//span[text() = "IsGroupedBy: LifeEvent"])[%d]/../span[2]',
			locateStrategy: 'xpath'
		},
		le_identifier: {
			selector: '(//div[1]/span[1][text() = "IsGroupedBy: LifeEvent"])[%d]/../../div[2]/div[1]/div[1]/div[1]/span[1][text() = "Identifier"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		le_name: {
			selector: '(//div[1]/span[1][text() = "IsGroupedBy: LifeEvent"])[%d]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		le_name_lang: {
			selector: '(//div[1]/span[1][text() = "IsGroupedBy: LifeEvent"])[%d]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		le_description: {
			selector: '(//div[1]/span[1][text() = "IsGroupedBy: LifeEvent"])[%d]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "Description"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		le_description_lang: {
			selector: '(//div[1]/span[1][text() = "IsGroupedBy: LifeEvent"])[%d]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "Description"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		le_related: {
			selector: '(//div[1]/span[1][text() = "IsGroupedBy: LifeEvent"])[%d]/../../div[2]/div[1]/div[4]/div[1]/span[1][text() = "RelatedService"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		le_type: {
			selector: '(//div[1]/span[1][text() = "IsGroupedBy: LifeEvent"])[%d]/../../div[2]/div[1]/div[5]/div[1]/span[1][text() = "Type"]/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},		
		ev_click: {
			selector: '(//span[text() = "HasInput"])[%d]/../span[2]',
			locateStrategy: 'xpath'
		},
		ev_identifier: {
			selector: '(//div[1]/span[1][text() = "HasInput"])[%d]/../../div[2]/div[1]/div[1]/div[1]/span[1][text() = "Identifier"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		ev_name: {
			selector: '(//div[1]/span[1][text() = "HasInput"])[%d]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		ev_name_lang: {
			selector: '(//div[1]/span[1][text() = "HasInput"])[%d]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		cr_click: {
			selector: '(//span[text() = "HasCriterion"])[%d]/../span[2]',
			locateStrategy: 'xpath'
		},
		cr_identifier: {
			selector: '(//div[1]/span[1][text() = "HasCriterion"])[%d]/../../div[2]/div[1]/div[1]/div[1]/span[1][text() = "Identifier"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		cr_name: {
			selector: '(//div[1]/span[1][text() = "HasCriterion"])[%d]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		cr_name_lang: {
			selector: '(//div[1]/span[1][text() = "HasCriterion"])[%d]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		cr_type: {
			selector: '(//div[1]/span[1][text() = "HasCriterion"])[%d]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "Type"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		cr_type_lang: {
			selector: '(//div[1]/span[1][text() = "HasCriterion"])[%d]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "Type"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		pr_click: {
			selector: '(//span[text() = "ServiceProvider"])[1]/../span[2]',
			locateStrategy: 'xpath'
		},
		pr_identifier: {
			selector: '//div[1]/span[1][text() = "ServiceProvider"]/../../div[2]/div[1]/div[1]/div[1]/span[1][text() = "Identifier"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		pr_name: {
			selector: '//div[1]/span[1][text() = "ServiceProvider"]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		pr_name_lang: {
			selector: '//div[1]/span[1][text() = "ServiceProvider"]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		pr_hasaddress: {
			selector: '//div[1]/span[1][text() = "ServiceProvider"]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "HasAddress"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		pa_click: {
			selector: '(//span[text() = "HasParticipation"])[1]/../span[2]',
			locateStrategy: 'xpath'
		},
		pa_identifier: {
			selector: '//div[1]/span[1][text() = "HasParticipation"]/../../div[2]/div[1]/div[1]/div[1]/span[1][text() = "Identifier"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		pa_description: {
			selector: '//div[1]/span[1][text() = "HasParticipation"]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Description"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		pa_description_lang: {
			selector: '//div[1]/span[1][text() = "HasParticipation"]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Description"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		pa_role: {
			selector: '//div[1]/span[1][text() = "HasParticipation"]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "Role"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		pa_role_lang: {
			selector: '//div[1]/span[1][text() = "HasParticipation"]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "Role"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ip_click: {
			selector: '(//span[text() = "HasInput"])[%d]/../span[2]',
			locateStrategy: 'xpath'
		},
		ip_identifier: {
			selector: '(//div[1]/span[1][text() = "HasInput"])[%d]/../../div[2]/div[1]/div[1]/div[1]/span[1][text() = "Identifier"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		ip_name: {
			selector: '(//div[1]/span[1][text() = "HasInput"])[%d]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		ip_name_lang: {
			selector: '(//div[1]/span[1][text() = "HasInput"])[%d]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ip_description: {
			selector: '(//div[1]/span[1][text() = "HasInput"])[%d]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "Description"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		ip_description_lang: {
			selector: '(//div[1]/span[1][text() = "HasInput"])[%d]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "Description"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ip_type: {
			selector: '//div[1]/span[1][text() = "HasInput"]/../../div[2]/div[1]/div[4]/div[1]/span[1][text() = "Type"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		ip_type_lang: {
			selector: '//div[1]/span[1][text() = "HasInput"]/../../div[2]/div[1]/div[4]/div[1]/span[1][text() = "Type"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ip_language: {
			selector: '//div[1]/span[1][text() = "HasInput"]/../../div[2]/div[1]/div[5]/div[1]/span[1][text() = "Language"]/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ip_related: {
			selector: '//div[1]/span[1][text() = "HasInput"]/../../div[2]/div[1]/div[6]/div[1]/span[1][text() = "RelatedDocumentation"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		lr_click: {
			selector: '(//span[text() = "HasLegalResource"])[%d]/../span[2]',
			locateStrategy: 'xpath'
		},
		lr_identifier: {
			selector: '(//div[1]/span[1][text() = "HasLegalResource"])[%d]/../../div[2]/div[1]/div[1]/div[1]/span[1][text() = "Identifier"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		lr_description: {
			selector: '(//div[1]/span[1][text() = "HasLegalResource"])[%d]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Description"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		lr_description_lang: {
			selector: '(//div[1]/span[1][text() = "HasLegalResource"])[%d]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Description"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ou_click: {
			selector: '(//span[text() = "Produces"])[%d]/../span[2]',
			locateStrategy: 'xpath'
		},
		ou_identifier: {
			selector: '(//div[1]/span[1][text() = "Produces"])[%d]/../../div[2]/div[1]/div[1]/div[1]/span[1][text() = "Identifier"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		ou_name: {
			selector: '(//div[1]/span[1][text() = "Produces"])[%d]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		ou_name_lang: {
			selector: '(//div[1]/span[1][text() = "Produces"])[%d]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ou_type: {
			selector: '(//div[1]/span[1][text() = "Produces"])[%d]/../../div[2]/div[1]/div[4]/div[1]/span[1][text() = "Type"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		ch_click: {
			selector: '(//span[text() = "HasChannel"])[%d]/../span[2]',
			locateStrategy: 'xpath'
		},
		ch_identifier: {
			selector: '(//div[1]/span[1][text() = "HasChannel"])[%d]/../../div[2]/div[1]/div[1]/div[1]/span[1][text() = "Identifier"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		ch_description: {
			selector: '(//div[1]/span[1][text() = "HasChannel"])[%d]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Description"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		ch_description_lang: {
			selector: '(//div[1]/span[1][text() = "HasChannel"])[%d]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Description"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ff_description: {
			selector: '(//div[1]/span[1][text() = "Produces"])[%d]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "Description"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		ff_description_lang: {
			selector: '(//div[1]/span[1][text() = "HasFormalFramework"])[%d]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "Description"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ff_type: {
			selector: '//div[1]/span[1][text() = "HasFormalFramework"]/../../div[2]/div[1]/div[4]/div[1]/span[1][text() = "Type"]/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ff_language: {
			selector: '//div[1]/span[1][text() = "HasFormalFramework"]/../../div[2]/div[1]/div[5]/div[1]/span[1][text() = "Language"]/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ff_status: {
			selector: '//div[1]/span[1][text() = "HasFormalFramework"]/../../div[2]/div[1]/div[6]/div[1]/span[1][text() = "Status"]/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ff_subject: {
			selector: '//div[1]/span[1][text() = "HasFormalFramework"]/../../div[2]/div[1]/div[7]/div[1]/span[1][text() = "Subject"]/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ff_application: {
			selector: '//div[1]/span[1][text() = "HasFormalFramework"]/../../div[2]/div[1]/div[8]/div[1]/span[1][text() = "TerritorialApplication"]/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		prod_click: {
			selector: '(//span[text() = "Produces"])[1]/../span[2]',
			locateStrategy: 'xpath'
		},
		prod_identifier: {
			selector: '//div[1]/span[1][text() = "Produces"]/../../div[2]/div[1]/div[1]/div[1]/span[1][text() = "Identifier"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		prod_name: {
			selector: '//div[1]/span[1][text() = "Produces"]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		prod_name_lang: {
			selector: '//div[1]/span[1][text() = "Produces"]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		prod_description: {
			selector: '//div[1]/span[1][text() = "Produces"]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "Description"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		prod_description_lang: {
			selector: '//div[1]/span[1][text() = "Produces"]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "Description"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		prod_type: {
			selector: '//div[1]/span[1][text() = "Produces"]/../../div[2]/div[1]/div[4]/div[1]/span[1][text() = "Type"]/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		fo_click: {
			selector: '(//span[text() = "Follows"])[%d]/../span[2]',
			locateStrategy: 'xpath'
		},
		fo_identifier: {
			selector: '(//div[1]/span[1][text() = "Follows"])[%d]/../../div[2]/div[1]/div[1]/div[1]/span[1][text() = "Identifier"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		fo_name: {
			selector: '(//div[1]/span[1][text() = "Follows"])[%d]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		fo_name_lang: {
			selector: '(//div[1]/span[1][text() = "Follows"])[%d]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		fo_description: {
			selector: '(//div[1]/span[1][text() = "Follows"])[%d]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "Description"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		fo_description_lang: {
			selector: '(//div[1]/span[1][text() = "Follows"])[%d]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "Description"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		fo_type: {
			selector: '//div[1]/span[1][text() = "Follows"]/../../div[2]/div[1]/div[4]/div[1]/span[1][text() = "Type"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		fo_type_lang: {
			selector: '//div[1]/span[1][text() = "Follows"]/../../div[2]/div[1]/div[4]/div[1]/span[1][text() = "Type"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		fo_language: {
			selector: '//div[1]/span[1][text() = "Follows"]/../../div[2]/div[1]/div[5]/div[1]/span[1][text() = "Language"]/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		hcp_click: {
			selector: '(//span[text() = "HasContactPoint"])[%d]/../span[2]',
			locateStrategy: 'xpath'
		},
		hcp_identifier: {
			selector: '(//div[1]/span[1][text() = "HasContactPoint"])[%d]/../../div[2]/div[1]/div[1]/div[1]/span[1][text() = "Identifier"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		hcp_hasemail: {
			selector: '(//div[1]/span[1][text() = "HasContactPoint"])[%d]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "HasEmail"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		hcp_hastelephone: {
			selector: '(//div[1]/span[1][text() = "HasContactPoint"])[%d]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "HasTelephone"]/../../div[2]/div[%d]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		hcp_telephone_click: {
			selector: '(//div[1]/span[1][text() = "HasContactPoint"])[%d]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "HasTelephone"]/following-sibling::span[1]',
			locateStrategy: 'xpath'
		},
		hcp_openinghours: {
			selector: '(//div[1]/span[1][text() = "HasContactPoint"])[%d]/../../div[2]/div[1]/div[4]/div[1]/span[1][text() = "OpeningHours"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		hcp_faxnumber: {
			selector: '(//div[1]/span[1][text() = "HasContactPoint"])[%d]/../../div[2]/div[1]/div[5]/div[1]/span[1][text() = "FaxNumber"]/../../div[2]/div[%d]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		hcp_fax_click: {
			selector: '(//div[1]/span[1][text() = "HasContactPoint"])[%d]/../../div[2]/div[1]/div[5]/div[1]/span[1][text() = "FaxNumber"]/following-sibling::span[1]',
			locateStrategy: 'xpath'
		},
		hch_click: {
			selector: '(//span[text() = "HasChannel"])[1]/../span[2]',
			locateStrategy: 'xpath'
		},
		hch_identifier: {
			selector: '//div[1]/span[1][text() = "HasChannel"]/../../div[2]/div[1]/div[1]/div[1]/span[1][text() = "Identifier"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		hch_type: {
			selector: '//div[1]/span[1][text() = "HasChannel"]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Type"]/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		hch_openinghours: {
			selector: '//div[1]/span[1][text() = "HasChannel"]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "OpeningHours"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		hc_click: {
			selector: '(//span[text() = "HasCost"])[%d]/../span[2]',
			locateStrategy: 'xpath'
		},
		hc_identifier: {
			selector: '(//div[1]/span[1][text() = "HasCost"])[%d]/../../div[2]/div[1]/div[1]/div[1]/span[1][text() = "Identifier"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		hc_description: {
			selector: '(//div[1]/span[1][text() = "HasCost"])[%d]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Description"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		hc_description_lang: {
			selector: '(//div[1]/span[1][text() = "HasCost"])[%d]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Description"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		hc_value: {
			selector: '(//div[1]/span[1][text() = "HasCost"])[%d]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "Value"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		hc_currency: {
			selector: '(//div[1]/span[1][text() = "HasCost"])[%d]/../../div[2]/div[1]/div[4]/div[1]/span[1][text() = "Currency"]/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		psd_click: {
			selector: '(//span[text() = "IsDescribedAt"])[%d]/../span[2]',
			locateStrategy: 'xpath'
		},
		psd_identifier: {
			selector: '(//div[1]/span[1][text() = "IsDescribedAt"])[%d]/../../div[2]/div[1]/div[1]/div[1]/span[1][text() = "Identifier"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		psd_name: {
			selector: '(//div[1]/span[1][text() = "IsDescribedAt"])[%d]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		psd_name_lang: {
			selector: '(//div[1]/span[1][text() = "IsDescribedAt"])[%d]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		psd_landingPage: {
			selector: '(//div[1]/span[1][text() = "IsDescribedAt"])[%d]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "LandingPage"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		psd_landingPage_lang: {
			selector: '(//div[1]/span[1][text() = "IsDescribedAt"])[%d]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "LandingPage"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		co_click: {
			selector: '(//span[text() = "IsClassifiedBy"])[%d]/../span[2]',
			locateStrategy: 'xpath'
		},
		co_identifier: {
			selector: '(//div[1]/span[1][text() = "IsClassifiedBy"])[%d]/../../div[2]/div[1]/div[1]/div[1]/span[1][text() = "Identifier"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		co_description: {
			selector: '(//div[1]/span[1][text() = "IsClassifiedBy"])[%d]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Description"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		co_description_lang: {
			selector: '(//div[1]/span[1][text() = "IsClassifiedBy"])[%d]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Description"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ida_click: {
			selector: '(//span[text() = "IsDescribedAt"])[1]/../span[2]',
			locateStrategy: 'xpath'
		},
		ida_identifier: {
			selector: '//div[1]/span[1][text() = "IsDescribedAt"]/../../div[2]/div[1]/div[1]/div[1]/span[1][text() = "Identifier"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		ida_name: {
			selector: '//div[1]/span[1][text() = "IsDescribedAt"]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		ida_name_lang: {
			selector: '//div[1]/span[1][text() = "IsDescribedAt"]/../../div[2]/div[1]/div[2]/div[1]/span[1][text() = "Name"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		},
		ida_landingpage: {
			selector: '//div[1]/span[1][text() = "IsDescribedAt"]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "LandingPage"]/../../div[2]/div[1]/div[2]/div[1]/input[1]',
			locateStrategy: 'xpath'
		},
		ida_landingpage_lang: {
			selector: '//div[1]/span[1][text() = "IsDescribedAt"]/../../div[2]/div[1]/div[3]/div[1]/span[1][text() = "LandingPage"]/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]',
			locateStrategy: 'xpath'
		}
	},
	
	commands: [{
		select() {
			return this.click('@tab');
		},
		set_ps_identifier(value) {
			return this.setValue('@ps_identifier', this.prefixNotURL(value, "http://www.provincia.tn.it/"));
		},	
		assert_ps_identifier(value){
			return this.assert.value('@ps_identifier', value);
		},
		set_ps_name(value) {
			return this.setValue('@ps_name', value);
		},
		assert_ps_name(value){
			return this.assert.value('@ps_name', value);
		},
		set_ps_name_lang(value) {
			return this.setValue('@ps_name_lang', value);
		},
		assert_ps_name_lang(value){
			return this.assert.value('@ps_name_lang', value);
		},
		set_ps_description(value) {
			return this.setValue('@ps_description', value);
		},
		assert_ps_description(value){
			return this.assert.value('@ps_description', value);
		},
		set_ps_description_lang(value) {
			return this.setValue('@ps_description_lang', value);
		},
		assert_ps_description_lang(value){
			return this.assert.value('@ps_description_lang', value);
		},
		set_ps_keyword(value) {
			var i = 1;
			var element = this.elements['@ps_keyword'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_ps_keyword(value, i) {
			var element = this.elements['@ps_keyword'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		assert_ps_keyword(value){
			return this.assert.value('@ps_keyword', value);
		},
		set_ps_keyword_lang(value) {
			var i = 1;
			var element = this.elements['@ps_keyword_lang'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_ps_keyword_lang(value, i) {
			var element = this.elements['@ps_keyword_lang'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		assert_ps_keyword_lang(value){
			return this.assert.value('@ps_keyword_lang', value);
		},
		expand_ps_keyword() {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [this.elements.keyword_click.selector]);
			this.assert.visible('@keyword_click');
			this.click('@keyword_click');
			return this;
		},
		expand_ps_sector() {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [this.elements.sector_click.selector]);
			this.assert.visible('@sector_click');
			this.click('@sector_click');
			return this;
		},
		expand_ps_type() {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [this.elements.type_click.selector]);
			this.assert.visible('@type_click');
			this.click('@type_click');
			return this;
		},
		expand_ps_thematicarea() {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [this.elements.thematicarea_click.selector]);
			this.assert.visible('@thematicarea_click');
			this.click('@thematicarea_click');
			return this;
		},
		set_ps_sector(value) {
			return this.setValue('@ps_sector', value);
		},
		set_ps_sector(value, i) {
			var element = this.elements['@ps_sector'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_ps_thematicarea(value, i) {
			var element = this.elements['@ps_thematicarea'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		assert_ps_sector(value){
			return this.assert.value('@ps_sector', value);
		},
		set_ps_sector2(value) {
			return this.setValue('@ps_sector2', value);
		},
		assert_ps_sector2(value){
			return this.assert.value('@ps_sector2', value);
		},
		set_ps_type(value) {
			return this.setValue('@ps_type', value);
		},
		set_ps_type(value, i) {
			var element = this.elements['@ps_type'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		assert_ps_type(value){
			return this.assert.value('@ps_type', value);
		},
		set_ps_language(value) {
			return this.setValue('@ps_language', value);
		},
		assert_ps_language(value){
			return this.assert.value('@ps_language', value);
		},
		set_ps_status(value) {
			return this.setValue('@ps_status', value);
		},
		assert_ps_status(value){
			return this.assert.value('@ps_status', value);
		},
		set_ps_spatial(value) {
			return this.setValue('@ps_spatial', value);
		},
		assert_ps_spatial(value){
			return this.assert.value('@ps_spatial', value);
		},
		set_ps_pt_years(value) {
			return this.setValue('@ps_pt_years', value);
		},
		assert_ps_pt_years(value){
			return this.assert.value('@ps_pt_years', value);
		},
		set_ps_pt_months(value) {
			return this.setValue('@ps_pt_months', value);
		},
		assert_ps_pt_months(value){
			return this.assert.value('@ps_pt_months', value);
		},
		set_ps_pt_days(value) {
			return this.setValue('@ps_pt_days', value);
		},
		assert_ps_pt_days(value){
			return this.assert.value('@ps_pt_days', value);
		},
		set_ps_pt_hours(value) {
			return this.setValue('@ps_pt_hours', value);
		},
		assert_ps_pt_hours(value){
			return this.assert.value('@ps_pt_hours', value);
		},
		set_ps_pt_minutes(value) {
			return this.setValue('@ps_pt_minutes', value);
		},
		assert_ps_pt_minutes(value){
			return this.assert.value('@ps_pt_minutes', value);
		},
		set_ps_pt(value) {
			return this.set_ps_pt_years(value.years)
						.set_ps_pt_months(value.months)
						.set_ps_pt_days(value.days)
						.set_ps_pt_hours(value.hours)
						.set_ps_pt_minutes(value.minutes);
		},
		assert_ps_pt(value) {
			return this.assert_ps_pt_years(value.years)
						.assert_ps_pt_months(value.months)
						.assert_ps_pt_days(value.days)
						.assert_ps_pt_hours(value.hours)
						.assert_ps_pt_minutes(value.minutes);
		},
		set_ps_requires(value) {
			return this.setValue('@ps_requires', value);
		},
		set_ps_requires(value, i) {
			var element = this.elements['@ps_requires'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), this.prefixNotURL(value, "http://www.provincia.tn.it/"));
		},
		expand_ps_requires() {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [this.elements.requires_click.selector]);
			this.assert.visible('@requires_click');
			this.click('@requires_click');
			return this;
		},
		assert_ps_requires(value){
			return this.assert.value('@ps_requires', value);
		},
		expand_ps_related() {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [this.elements.related_click.selector]);
			this.assert.visible('@related_click');
			this.click('@related_click');
			return this;
		},
		set_ps_related(value) {
			var i = 1;
			var element = this.elements['@ps_related'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_ps_related(value, i) {
			var element = this.elements['@ps_related'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), this.prefixNotURL(value, "http://www.provincia.tn.it/"));
		},
		assert_ps_related(value){
			return this.assert.value('@ps_related', value);
		},
		prefixNotURL(value, prefix) {
			var prefixed = value;
			if(!utils.isURL(value)){
				prefixed = prefix + value;
			}
			
			return utils.removespaces(prefixed);
		},
		set_ca_identifier(value) {
			return this.setValue('@ca_identifier', this.prefixNotURL(value, "ca/"));
		},
		assert_ca_identifier(value){
			return this.assert.value('@ca_identifier', value);
		},
		set_ca_name(value) {
			return this.setValue('@ca_name', value);
		},
		assert_ca_name(value){
			return this.assert.value('@ca_name', value);
		},
		set_ca_name_lang(value) {
			return this.setValue('@ca_name_lang', value);
		},
		assert_ca_name_lang(value){
			return this.assert.value('@ca_name_lang', value);
		},
		set_ca_preferredlabel(value) {
			return this.setValue('@ca_preferredlabel', value);
		},
		assert_ca_preferredlabel(value){
			return this.assert.value('@ca_preferredlabel', value);
		},
		set_ca_preferredlabel_lang(value) {
			return this.setValue('@ca_preferredlabel_lang', value);
		},
		assert_ca_preferredlabel_lang(value){
			return this.assert.value('@ca_preferredlabel_lang', value);
		},
		set_ca_spatial(value) {
			return this.setValue('@ca_spatial', value);
		},
		assert_ca_spatial(value){
			return this.assert.value('@ca_spatial', value);
		},
		set_ca_hasaddress(value) {
			return this.setValue('@ca_hasaddress', value);
		},
		assert_ca_hasaddress(value){
			return this.assert.value('@ca_hasaddress', value);
		},
		be_expand() {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [this.elements.be_click.selector]);
			this.assert.visible('@be_click');
			this.click('@be_click');
			return this;
		},
		be_expand(i) {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [util.format(this.elements['@be_click'.slice(1)].selector, i)]);
			var element = this.elements['@be_click'.slice(1)];
			this.click('xpath', util.format(element.selector, i));
			return this;
		},
		set_be_identifier(value) {
			return this.setValue('@be_identifier', this.prefixNotURL(value, "be/"));
		},
		set_be_identifier(value,i) {
		    var element = this.elements['@be_identifier'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), this.prefixNotURL(value, "be/"));
		},
		assert_be_identifier(value){
			return this.assert.value('@be_identifier', value);
		},
		set_be_name(value) {
			return this.setValue('@be_name', value);
		},
		set_be_name(value,i) {
		    var element = this.elements['@be_name'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		assert_be_name(value){
			return this.assert.value('@be_name', value);
		},
		set_be_name_lang(value) {
			return this.setValue('@be_name_lang', value);
		},
		set_be_name_lang(value, i) {
			var element = this.elements['@be_name_lang'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		assert_be_name_lang(value){
			return this.assert.value('@be_name_lang', value);
		},
		set_be_description(value) {
			return this.setValue('@be_description', value);
		},
		set_be_description(value,i) {
		    var element = this.elements['@be_description'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		assert_be_description(value){
			return this.assert.value('@be_description', value);
		},
		set_be_description_lang(value) {
			return this.setValue('@be_description_lang', value);
		},
		set_be_description_lang(value, i) {
			var element = this.elements['@be_description_lang'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		assert_be_description_lang(value){
			return this.assert.value('@be_description_lang', value);
		},
		set_be_related(value) {
			return this.setValue('@be_related', value);
		},
		assert_be_related(value){
			return this.assert.value('@be_related', value);
		},
		set_be_type(value) {
			return this.setValue('@be_type', value);
		},
		set_be_type(value,i) {
		    var element = this.elements['@be_type'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		assert_be_type(value){
			return this.assert.value('@be_type', value);
		},
		le_expand(i) {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [util.format(this.elements['@le_click'.slice(1)].selector, i)]);
			var element = this.elements['@le_click'.slice(1)];
			this.click('xpath', util.format(element.selector, i));
			return this;
		},
		set_le_identifier(value,i) {
		    var element = this.elements['@le_identifier'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), this.prefixNotURL(value, "le/"));
		},
		set_le_name(value,i) {
		    var element = this.elements['@le_name'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_le_name_lang(value, i) {
			var element = this.elements['@le_name_lang'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_le_description(value,i) {
		    var element = this.elements['@le_description'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_le_description_lang(value, i) {
			var element = this.elements['@le_description_lang'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_le_type(value,i) {
		    var element = this.elements['@le_type'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		ev_expand() {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [this.elements.ev_click.selector]);
			this.assert.visible('@ev_click');
			this.click('@ev_click');
			return this;
		},
		ev_expand(i) {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [util.format(this.elements['@ev_click'.slice(1)].selector, i)]);
			var element = this.elements['@ev_click'.slice(1)];
			this.click('xpath', util.format(element.selector, i));
			return this;
		},
		set_ev_identifier(value,i) {
		    var element = this.elements['@ev_identifier'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), this.prefixNotURL(value, "ev/"));
		},
		set_ev_name(value,i) {
		    var element = this.elements['@ev_name'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_ev_name_lang(value) {
			return this.setValue('@ev_name_lang', value);
		},
		set_ev_name_lang(value, i) {
			var element = this.elements['@ev_name_lang'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		cr_expand() {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [this.elements.cr_click.selector]);
			this.assert.visible('@cr_click');
			this.click('@cr_click');
			return this;
		},
		cr_expand(i) {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [util.format(this.elements['@cr_click'.slice(1)].selector, i)]);
			var element = this.elements['@cr_click'.slice(1)];
			this.click('xpath', util.format(element.selector, i));
			return this;
		},
		set_cr_identifier(value) {
			return this.setValue('@cr_identifier', this.prefixNotURL(value, "cr/"));
		},
		set_cr_identifier(value,i) {
		    var element = this.elements['@cr_identifier'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), this.prefixNotURL(value, "cr/"));
		},
		assert_cr_identifier(value){
			return this.assert.value('@cr_identifier', value);
		},
		set_cr_name(value) {
			return this.setValue('@cr_name', value);
		},
		set_cr_name(value,i) {
		    var element = this.elements['@cr_name'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},

		assert_cr_name(value){
			return this.assert.value('@cr_name', value);
		},
		set_cr_name_lang(value) {
			return this.setValue('@cr_name_lang', value);
		},
		set_cr_name_lang(value, i) {
			var element = this.elements['@cr_name_lang'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		assert_cr_name_lang(value){
			return this.assert.value('@cr_name_lang', value);
		},
		set_cr_type(value) {
			return this.setValue('@cr_type', value);
		},
		assert_cr_type(value){
			return this.assert.value('@cr_type', value);
		},
		set_cr_type_lang(value) {
			return this.setValue('@cr_type_lang', value);
		},
		assert_cr_type_lang(value){
			return this.assert.value('@cr_type_lang', value);
		},
		pr_expand() {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [this.elements.pr_click.selector]);
			this.assert.visible('@pr_click');
			this.click('@pr_click');
			return this;
		},
		set_pr_identifier(value) {
			return this.setValue('@pr_identifier', this.prefixNotURL(value, "pr/"));
		},
		assert_pr_identifier(value){
			return this.assert.value('@pr_identifier', value);
		},
		set_pr_name(value) {
			return this.setValue('@pr_name', value);
		},
		assert_pr_name(value){
			return this.assert.value('@pr_name', value);
		},
		set_pr_name_lang(value) {
			return this.setValue('@pr_name_lang', value);
		},
		assert_pr_name_lang(value){
			return this.assert.value('@pr_name_lang', value);
		},
		set_pr_hasaddress(value) {
			return this.setValue('@pr_hasaddress', value);
		},
		assert_pr_hasaddress(value){
			return this.assert.value('@pr_hasaddress', value);
		},
		pa_expand() {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [this.elements.pa_click.selector]);
			this.assert.visible('@pa_click');
			this.click('@pa_click');
			return this;
		},
		set_pa_identifier(value) {
			return this.setValue('@pa_identifier', this.prefixNotURL(value, "pa/"));
		},
		assert_pa_identifier(value){
			return this.assert.value('@pa_identifier', value);
		},
		set_pa_description(value) {
			return this.setValue('@pa_description', value);
		},
		assert_pa_description(value){
			return this.assert.value('@pa_description', value);
		},
		set_pa_description_lang(value) {
			return this.setValue('@pa_description_lang', value);
		},
		assert_pa_description_lang(value){
			return this.assert.value('@pa_description_lang', value);
		},
		set_pa_role(value) {
			return this.setValue('@pa_role', value);
		},
		assert_pa_role(value){
			return this.assert.value('@pa_role', value);
		},
		set_pa_role_lang(value) {
			return this.setValue('@pa_role_lang', value);
		},
		assert_pa_role_lang(value){
			return this.assert.value('@pa_role_lang', value);
		},
		ip_expand() {
			var i = 1;
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [util.format(this.elements['@ip_click'.slice(1)].selector, i)]);
			var element = this.elements['@ip_click'.slice(1)];
			this.click('xpath', util.format(element.selector, i));
			return this;
		},
		set_ip_identifier(value) {
			return this.setValue('@ip_identifier', this.prefixNotURL(value, "ip/"));
		},
		ip_expand(i) {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [util.format(this.elements['@ip_click'.slice(1)].selector, i)]);
			var element = this.elements['@ip_click'.slice(1)];
			this.click('xpath', util.format(element.selector, i));
			return this;
		},
		set_ip_identifier(value) {
			var i = 1;
			var element = this.elements['@ip_identifier'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), this.prefixNotURL(value, "ip/"));
		},
		set_ip_identifier(value, i) {
			var element = this.elements['@ip_identifier'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), this.prefixNotURL(value, "ip/"));
		},
		assert_ip_identifier(value){
			return this.assert.value('@ip_identifier', value);
		},
		set_ip_name(value) {
			var i = 1;
			var element = this.elements['@ip_name'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_ip_name(value, i) {
			var element = this.elements['@ip_name'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		assert_ip_name(value){
			return this.assert.value('@ip_name', value);
		},
		set_ip_name_lang(value) {
			var i = 1;
			var element = this.elements['@ip_name_lang'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_ip_name_lang(value, i) {
			var element = this.elements['@ip_name_lang'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		assert_ip_name_lang(value){
			return this.assert.value('@ip_name_lang', value);
		},
		set_ip_description(value) {
			var i = 1;
			var element = this.elements['@ip_description'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_ip_description(value, i) {
			var element = this.elements['@ip_description'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		assert_ip_description(value){
			return this.assert.value('@ip_description', value);
		},
		set_ip_description_lang(value) {
			var i = 1;
			var element = this.elements['@ip_description_lang'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_ip_description_lang(value, i) {
			var element = this.elements['@ip_description_lang'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		assert_ip_description_lang(value){
			return this.assert.value('@ip_description_lang', value);
		},
		set_ip_type(value) {
			return this.setValue('@ip_type', value);
		},
		assert_ip_type(value){
			return this.assert.value('@ip_type', value);
		},
		set_ip_type_lang(value) {
			return this.setValue('@ip_type_lang', value);
		},
		assert_ip_type_lang(value){
			return this.assert.value('@ip_type_lang', value);
		},
		set_ip_language(value) {
			return this.setValue('@ip_language', value);
		},
		assert_ip_language(value){
			return this.assert.value('@ip_language', value);
		},
		set_ip_related(value) {
			return this.setValue('@ip_related', value);
		},
		assert_ip_related(value){
			return this.assert.value('@ip_related', value);
		},
		lr_expand(i) {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [util.format(this.elements['@lr_click'.slice(1)].selector, i)]);
			var element = this.elements['@lr_click'.slice(1)];
			this.click('xpath', util.format(element.selector, i));
			return this;
		},
		set_lr_identifier(value,i) {
		    var element = this.elements['@lr_identifier'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), this.prefixNotURL(value, "lr/"));
		},
		set_lr_description(value,i) {
		    var element = this.elements['@lr_description'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_lr_description_lang(value, i) {
			var element = this.elements['@lr_description_lang'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		ou_expand(i) {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [util.format(this.elements['@ou_click'.slice(1)].selector, i)]);
			var element = this.elements['@ou_click'.slice(1)];
			this.click('xpath', util.format(element.selector, i));
			return this;
		},
		set_ou_identifier(value,i) {
		    var element = this.elements['@ou_identifier'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), this.prefixNotURL(value, "ou/"));
		},
		set_ou_name(value,i) {
		    var element = this.elements['@ou_name'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_ou_name_lang(value, i) {
			var element = this.elements['@ou_name_lang'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_ou_type(value,i) {
		    var element = this.elements['@ou_type'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		hc_expand(i) {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [util.format(this.elements['@hc_click'.slice(1)].selector, i)]);
			var element = this.elements['@hc_click'.slice(1)];
			this.click('xpath', util.format(element.selector, i));
			return this;
		},
		set_hc_identifier(value,i) {
		    var element = this.elements['@hc_identifier'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), this.prefixNotURL(value, "hc/"));
		},
		set_hc_description(value,i) {
		    var element = this.elements['@hc_description'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_hc_description_lang(value, i) {
			var element = this.elements['@hc_description_lang'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_hc_value(value,i) {
		    var element = this.elements['@hc_value'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_hc_currency(value,i) {
		    var element = this.elements['@hc_currency'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		psd_expand(i) {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [util.format(this.elements['@psd_click'.slice(1)].selector, i)]);
			var element = this.elements['@psd_click'.slice(1)];
			this.click('xpath', util.format(element.selector, i));
			return this;
		},
		set_psd_identifier(value,i) {
		    var element = this.elements['@psd_identifier'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), this.prefixNotURL(value, "psd/"));
		},
		set_psd_name(value,i) {
		    var element = this.elements['@psd_name'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_psd_name_lang(value, i) {
			var element = this.elements['@psd_name_lang'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_psd_landingPage(value,i) {
		    var element = this.elements['@psd_landingPage'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_psd_landingPage_lang(value, i) {
			var element = this.elements['@psd_landingPage_lang'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		co_expand(i) {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [util.format(this.elements['@co_click'.slice(1)].selector, i)]);
			var element = this.elements['@co_click'.slice(1)];
			this.click('xpath', util.format(element.selector, i));
			return this;
		},
		set_co_identifier(value,i) {
		    var element = this.elements['@co_identifier'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), this.prefixNotURL(value, "co/"));
		},
		set_co_description(value,i) {
		    var element = this.elements['@co_description'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_co_description_lang(value, i) {
			var element = this.elements['@co_description_lang'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		ch_expand(i) {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [util.format(this.elements['@ch_click'.slice(1)].selector, i)]);
			var element = this.elements['@ch_click'.slice(1)];
			this.click('xpath', util.format(element.selector, i));
			return this;
		},
		set_ch_identifier(value,i) {
		    var element = this.elements['@ch_identifier'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), this.prefixNotURL(value, "ch/"));
		},
		set_ch_description(value,i) {
		    var element = this.elements['@ch_description'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_ch_description_lang(value, i) {
			var element = this.elements['@ch_description_lang'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		ff_expand() {
			var i = 1;
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [util.format(this.elements['@ff_click'.slice(1)].selector, i)]);
			var element = this.elements['@ff_click'.slice(1)];
			this.click('xpath', util.format(element.selector, i));
			return this;
		},
		ff_expand(i) {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [util.format(this.elements['@ff_click'.slice(1)].selector, i)]);
			var element = this.elements['@ff_click'.slice(1)];
			this.click('xpath', util.format(element.selector, i));
			return this;
		},
		set_ff_identifier(value) {
			var i = 1;
			var element = this.elements['@ff_identifier'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), this.prefixNotURL(value, "ff/"));
		},
		set_ff_identifier(value, i) {
			var element = this.elements['@ff_identifier'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), this.prefixNotURL(value, "ff/"));
		},
		assert_ff_identifier(value){
			return this.assert.value('@ff_identifier', value);
		},
		set_ff_name(value) {
			var i = 1;
			var element = this.elements['@ff_name'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_ff_name(value, i) {
			var element = this.elements['@ff_name'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		assert_ff_name(value){
			return this.assert.value('@ff_name', value);
		},
		set_ff_name_lang(value) {
			var i = 1;
			var element = this.elements['@ff_name_lang'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_ff_name_lang(value, i) {
			var element = this.elements['@ff_name_lang'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		assert_ff_name_lang(value){
			return this.assert.value('@ff_name_lang', value);
		},
		set_ff_description(value) {
			var i = 1;
			var element = this.elements['@ff_description'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_ff_description(value, i) {
			var element = this.elements['@ff_description'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		assert_ff_description(value){
			return this.assert.value('@ff_description', value);
		},
		set_ff_description_lang(value) {
			var i = 1;
			var element = this.elements['@ff_description_lang'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_ff_description_lang(value, i) {
			var element = this.elements['@ff_description_lang'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		assert_ff_description_lang(value){
			return this.assert.value('@ff_description_lang', value);
		},
		set_ff_type(value) {
			return this.setValue('@ff_type', value);
		},
		assert_ff_type(value){
			return this.assert.value('@ff_type', value);
		},
		set_ff_language(value) {
			return this.setValue('@ff_language', value);
		},
		assert_ff_language(value){
			return this.assert.value('@ff_language', value);
		},
		set_ff_status(value) {
			return this.setValue('@ff_status', value);
		},
		assert_ff_status(value){
			return this.assert.value('@ff_status', value);
		},
		set_ff_subject(value) {
			return this.setValue('@ff_subject', value);
		},
		assert_ff_subject(value){
			return this.assert.value('@ff_subject', value);
		},
		set_ff_application(value) {
			return this.setValue('@ff_application', value);
		},
		assert_ff_application(value){
			return this.assert.value('@ff_application', value);
		},
		prod_expand() {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [this.elements.prod_click.selector]);
			this.assert.visible('@prod_click');
			this.click('@prod_click');
			return this;
		},
		set_prod_identifier(value) {
			return this.setValue('@prod_identifier', this.prefixNotURL(value, "prod/"));
		},
		assert_prod_identifier(value){
			return this.assert.value('@prod_identifier', value);
		},
		set_prod_name(value) {
			return this.setValue('@prod_name', value);
		},
		assert_prod_name(value){
			return this.assert.value('@prod_name', value);
		},
		set_prod_name_lang(value) {
			return this.setValue('@prod_name_lang', value);
		},
		assert_prod_name_lang(value){
			return this.assert.value('@prod_name_lang', value);
		},
		set_prod_description(value) {
			return this.setValue('@prod_description', value);
		},
		assert_prod_description(value){
			return this.assert.value('@prod_description', value);
		},
		set_prod_description_lang(value) {
			return this.setValue('@prod_description_lang', value);
		},
		assert_prod_description_lang(value){
			return this.assert.value('@prod_description_lang', value);
		},
		set_prod_type(value) {
			return this.setValue('@prod_type', value);
		},
		assert_prod_type(value){
			return this.assert.value('@prod_type', value);
		},
		fo_expand() {
			var i = 1;
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [util.format(this.elements['@fo_click'.slice(1)].selector, i)]);
			var element = this.elements['@fo_click'.slice(1)];
			this.click('xpath', util.format(element.selector, i));
			return this;
		},
		fo_expand(i) {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [util.format(this.elements['@fo_click'.slice(1)].selector, i)]);
			var element = this.elements['@fo_click'.slice(1)];
			this.click('xpath', util.format(element.selector, i));
			return this;
		},
		set_fo_identifier(value) {
			var i = 1;
			var element = this.elements['@fo_identifier'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), this.prefixNotURL(value, "fo/"));
		},
		set_fo_identifier(value, i) {
			var element = this.elements['@fo_identifier'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), this.prefixNotURL(value, "fo/"));
		},
		assert_fo_identifier(value){
			return this.assert.value('@fo_identifier', value);
		},
		set_fo_name(value) {
			var i = 1;
			var element = this.elements['@fo_name'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_fo_name(value, i) {
			var element = this.elements['@fo_name'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		assert_fo_name(value){
			return this.assert.value('@fo_name', value);
		},
		set_fo_name_lang(value) {
			var i = 1;
			var element = this.elements['@fo_name_lang'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_fo_name_lang(value, i) {
			var element = this.elements['@fo_name_lang'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		assert_fo_name_lang(value){
			return this.assert.value('@fo_name_lang', value);
		},
		set_fo_description(value) {
			var i = 1;
			var element = this.elements['@fo_description'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_fo_description(value, i) {
			var element = this.elements['@fo_description'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		assert_fo_description(value){
			return this.assert.value('@fo_description', value);
		},
		set_fo_description_lang(value) {
			var i = 1;
			var element = this.elements['@fo_description_lang'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		set_fo_description_lang(value, i) {
			var element = this.elements['@fo_description_lang'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		assert_fo_description_lang(value){
			return this.assert.value('@fo_description_lang', value);
		},
		set_fo_type(value) {
			return this.setValue('@fo_type', value);
		},
		assert_fo_type(value){
			return this.assert.value('@fo_type', value);
		},
		set_fo_type_lang(value) {
			return this.setValue('@fo_type_lang', value);
		},
		assert_fo_type_lang(value){
			return this.assert.value('@fo_type_lang', value);
		},
		set_fo_language(value) {
			return this.setValue('@fo_language', value);
		},
		assert_fo_language(value){
			return this.assert.value('@fo_language', value);
		},
		hcp_expand(i) {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [util.format(this.elements['@hcp_click'.slice(1)].selector, i)]);
			var element = this.elements['@hcp_click'.slice(1)];
			this.click('xpath', util.format(element.selector, i));
			return this;
		},
		set_hcp_identifier(value,i) {
			var element = this.elements['@hcp_identifier'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), this.prefixNotURL(value, "hcp/"));
		},
		assert_hcp_identifier(value){
			return this.assert.value('@hcp_identifier', value);
		},
		set_hcp_hasemail(value) {
			return this.setValue('@hcp_hasemail', value);
		},
		set_hcp_hasemail(value, i) {
			var element = this.elements['@hcp_hasemail'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		assert_hcp_hasemail(value){
			return this.assert.value('@hcp_hasemail', value);
		},
		set_hcp_hastelephone(value, i, j) {
			var element = this.elements['@hcp_hastelephone'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i, j), value);
		},
		expand_hcp_telephone(i) {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [util.format(this.elements['@hcp_telephone_click'.slice(1)].selector, i)]);
			var element = this.elements['@hcp_telephone_click'.slice(1)];
			this.click('xpath', util.format(element.selector, i));
			return this;
		},
		assert_hcp_hastelephone(value){
			return this.assert.value('@hcp_hastelephone', value);
		},
		set_hcp_openinghours(value) {
			return this.setValue('@hcp_openinghours', value);
		},
		set_hcp_openinghours(value, i) {
			var element = this.elements['@hcp_openinghours'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i), value);
		},
		assert_hcp_openinghours(value){
			return this.assert.value('@hcp_openinghours', value);
		},
		set_hcp_hasfax(value, i, j) {
			var element = this.elements['@hcp_faxnumber'.slice(1)];
			return this.setValue('xpath', util.format(element.selector, i, j), value);
		},
		expand_hcp_fax(i) {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [util.format(this.elements['@hcp_fax_click'.slice(1)].selector, i)]);
			var element = this.elements['@hcp_fax_click'.slice(1)];
			this.click('xpath', util.format(element.selector, i));
			return this;
		},
		assert_hcp_faxnumber(value){
			return this.assert.value('@hcp_faxnumber', value);
		},
		hch_expand() {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [this.elements.hch_click.selector]);
			this.assert.visible('@hch_click');
			this.click('@hch_click');
			return this;
		},
		set_hch_identifier(value) {
			return this.setValue('@hch_identifier', this.prefixNotURL(value, "hch/"));
		},
		assert_hch_identifier(value){
			return this.assert.value('@hch_identifier', value);
		},
		set_hch_type(value) {
			return this.setValue('@hch_type', value);
		},
		assert_hch_type(value){
			return this.assert.value('@hch_type', value);
		},
		set_hch_openinghours(value) {
			return this.setValue('@hch_openinghours', value);
		},
		assert_hch_openinghours(value){
			return this.assert.value('@hch_openinghours', value);
		},
		ida_expand() {
			this.api.execute(function(xpath) {
				function getElementByXpath(path) {
					return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
				}
				var res = getElementByXpath(xpath);
				res.scrollIntoView(true);
			}, [this.elements.ida_click.selector]);
			this.assert.visible('@ida_click');
			this.click('@ida_click');
			return this;
		},
		set_ida_identifier(value) {
			return this.setValue('@ida_identifier', this.prefixNotURL(value, "ida/"));
		},
		assert_ida_identifier(value){
			return this.assert.value('@ida_identifier', value);
		},
		set_ida_name(value) {
			return this.setValue('@ida_name', value);
		},
		assert_ida_name(value){
			return this.assert.value('@ida_name', value);
		},
		set_ida_name_lang(value) {
			return this.setValue('@ida_name_lang', value);
		},
		assert_ida_name_lang(value){
			return this.assert.value('@ida_name_lang', value);
		},
		set_ida_landingpage(value) {
			return this.setValue('@ida_landingpage', value);
		},
		assert_ida_landingpage(value){
			return this.assert.value('@ida_landingpage', value);
		},
		set_ida_landingpage_lang(value) {
			return this.setValue('@ida_landingpage_lang', value);
		},
		assert_ida_landingpage_lang(value){
			return this.assert.value('@ida_landingpage_lang', value);
		}
	}]
};