'use strict';
const excelToJson = require('convert-excel-to-json');
const glob = require("glob");

const glob_jsonlocation = "source-data/dataTrento/*.xlsx";
const glob_options = {};

glob(glob_jsonlocation, glob_options, function (er, filelist) {
  if (er) {
    console.log(er);
  }

  var resultsArray = [];

  for (var i = 0; i < filelist.length; i++) {

      const result = excelToJson({
          sourceFile: filelist[i],
          header:{
              // Is the number of rows that will be skipped and will not be present at our result object. Counting from top to bottom
              rows: 1
          },
          sheets: [{
            name: 'Public Service',
            range: 'A1:Z43',
            columnToKey: {
              A: 'PublicService_id',
              B: 'PublicService_name',
              C: 'PublicService_description',
              D: 'PublicService_hasCompetentAuthority',
              E: 'PublicService_keywords',
              F: 'PublicService_sector',
              G: 'PublicService_thematicArea',
              H: 'PublicService_type',
              I: 'PublicService_language',
              J: 'PublicService_status',
              K: 'PublicService_isGroupedBy',
              L: 'PublicService_requires',
              M: 'PublicService_related',
              N: 'PublicService_hasCriterion',
              O: 'PublicService_hasParticipation',
              P: 'PublicService_hasInput',
              Q: 'PublicService_hasLegalResource',
              R: 'PublicService_produces',
              S: 'PublicService_follows',
              T: 'PublicService_spatial',
              U: 'PublicService_hasContactPoint',
              V: 'PublicService_hasChannel',
              W: 'PublicService_processingTime',
              X: 'PublicService_hasCost',
              Y: 'PublicService_isDescribedAt',
              Z: 'PublicService_isClassifiedBy'
            }
          },
          {
              name: 'Business Event',
              range: 'A1:E13',
              columnToKey: {
                A: 'BusinessEvent_id',
                B: 'BusinessEvent_name',
                C: 'BusinessEvent_description',
                D: 'BusinessEvent_type',
                E: 'BusinessEvent_relatedService'
              }
          },
          {
              name: 'Life Event',
              range: 'A1:E14',
              columnToKey: {
                A: 'LifeEvent_id',
                B: 'LifeEvent_name',
                C: 'LifeEvent_description',
                D: 'LifeEvent_type',
                E: 'LifeEvent_relatedService'
              }
          },
          {
              name: 'PS Dataset',
              range: 'A1:D43',
              columnToKey: {
                A: 'PublicServiceDataset_id',
                B: 'PublicServiceDataset_publisher',
                C: 'PublicServiceDataset_name',
                D: 'PublicServiceDataset_landingPage'
              }
          },
          {
              name: 'Evidence',
              range: 'A1:F40',
              columnToKey: {
                A: 'Evidence_id',
                B: 'Evidence_name',
                C: 'Evidence_description',
                D: 'Evidence_type',
                E: 'Evidence_relatedDocumentation',
                F: 'Evidence_language'
              }
          },
          {
              name: 'Criterion Requirement',
              range: 'A1:C31',
              columnToKey: {
                A: 'CriterionRequirement_id',
                B: 'CriterionRequirement_name',
                C: 'CriterionRequirement_type'
              }
          },
          {
              name: 'Output',
              range: 'A1:D6',
              columnToKey: {
                A: 'Output_id',
                B: 'Output_name',
                C: 'Output_description',
                D: 'Output_type'
              }
          },
          {
              name: 'Cost',
              range: 'A1:D3',
              columnToKey: {
                A: 'Cost_id',
                B: 'Cost_value',
                C: 'Cost_currency',
                D: 'Cost_description'
              }
          },
	      {
	           name: 'Channel',
	           range: 'A1:G13',
	           columnToKey: {
	             A: 'Channel_id',
	             B: 'Channel_description',
	             C: 'Channel_ownedBy',
	             D: 'Channel_type',
	             E: 'Channel_hasInput',
		         F: 'Channel_openingHours',
		         G: 'Channel_availabilityRestriction'
	           }
	      },
          {
              name: 'Legal Resource',
              range: 'A1:C42',
              columnToKey: {
                A: 'LegalResource_id',
                B: 'LegalResource_description',
                C: 'LegalResource_related'
              }
           },
            {
	          name: 'Public Organisation',
	          range: 'A1:F2',
	          columnToKey: {
	             A: 'PublicOrganisation_id',
	             B: 'PublicOrganisation_name',
	             C: 'PublicOrganisation_preferredLabel',
	             D: 'PublicOrganisation_spatial',
	             E: 'PublicOrganisation_playsRole',
	             F: 'PublicOrganisation_hasAddress'
	           }
            },
            {
                name: 'Contact Point',
                range: 'A1:J6',
                columnToKey: {
                   A: 'ContactPoint_id',
                   B: 'ContactPoint_email',
                   C: 'ContactPoint_telephone',
                   D: 'ContactPoint_hoursAvailable',
                   E: 'ContactPoint_faxnumber',
                }
            },
            {
                name: 'Concept',
                range: 'A1:B6',
                columnToKey: {
                   A: 'Concept_id',
                   B: 'Concept_description'
                }
            }
          ]
      });

    resultsArray.push(result);

    }

      const fs = require('fs');
      var content = JSON.stringify(resultsArray);
      content = replaceAll(content, "Public Service", "PublicService");
      content = replaceAll(content, "Business Event", "BusinessEvent");
      content = replaceAll(content, "Life Event", "LifeEvent");
      content = replaceAll(content, "PS Dataset", "PublicServiceDataset");
      content = replaceAll(content, "Public Organisation", "PublicOrganisation");
      content = replaceAll(content, "Criterion Requirement", "CriterionRequirement");
      content = replaceAll(content, "Legal Resource", "LegalResource");
      content = replaceAll(content, "Contact Point", "ContactPoint");
      content = content.replace(/\\n/g, "\\n")
                                            .replace(/\\'/g, "\\'")
                                            .replace(/\\"/g, '\\"')
                                            .replace(/\\&/g, "\\&")
                                            .replace(/\\r/g, "\\r")
                                            .replace(/\\t/g, "\\t")
                                            .replace(/\\b/g, "\\b")
                                            .replace(/\\f/g, "\\f")
                                            .replace(/<(?:.|\n)*?>/gm, ' ')
											.replace(/\&nbsp;/g, ' ');

      fs.writeFile("./tmp/dataTrento.json", content, 'utf8', function (err) {
          if (err) {
              return console.log(err);
          }

          console.log("The file was saved!");
      });


});


function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}


