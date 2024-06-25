// This script is used to handle the form submission and store the data in the Google sheet.

const sheets = SpreadsheetApp.openByUrl(
  "https://docs.google.com/spreadsheets/d/1u9idxLRvSlHCnPbd2Os_wlFUgzOj6VNYPIiNGDpfsdY/edit?gid=0#gid=0" // Add your Google sheet URL here
);
const sheet = sheets.getSheetByName("Sheet1");
function doPost(e) {
  let data = e.parameter;
  let date = new Date();
  sheet.appendRow([
    data.name,
    data.age,
    data.email,
    data.subject,
    data.additionalInfo,
    date,
  ]);
  return ContentService.createTextOutput(
    "Your message was successfully sent to the Googlesheet database!"
  );
}

/* 

// 1:1 Tutoring
const sheets = SpreadsheetApp.openByUrl(
  'https://docs.google.com/spreadsheets/d/1u9idxLRvSlHCnPbd2Os_wlFUgzOj6VNYPIiNGDpfsdY/edit?gid=0#gid=0' // Add your Google sheet URL here
);
const sheet = sheets.getSheetByName('Sheet1');

function doPost(e) {
  let data = e.parameter;
  let date = new Date();

  sheet.appendRow([
    data.parentName,
    data.childName,
    data.childAge,
    data.contactNumber,
    data.email,
    data.additionalInfo,
    data.subject,
    date,
  ]);

  return ContentService.createTextOutput(
    'Your message was successfully sent to the Google Sheet database!'
  );
}

*/

/* 

// Other Services
const sheets = SpreadsheetApp.openByUrl(
  'https://docs.google.com/spreadsheets/d/1mf8shRFzHRmHZ987axd-AA-s_YaI-UbmDLfeu6_ubOc/edit?gid=0#gid=0' // Add your Google sheet URL here
);
const sheet = sheets.getSheetByName('Sheet1');

function doPost(e) {
  let data = e.parameter;
  let date = new Date();

  sheet.appendRow([
    data.parentName,
    data.contactNumber,
    data.email,
    data.service,
    data.description,
    date,
  ]);

  return ContentService.createTextOutput(
    'Your message was successfully sent to the Google Sheet database!'
  );
}

*/
