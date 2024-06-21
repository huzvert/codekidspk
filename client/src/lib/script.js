// This script is used to handle the form submission and store the data in the Google sheet.

const sheets = SpreadsheetApp.openByUrl(
  'https://docs.google.com/spreadsheets/d/1u9idxLRvSlHCnPbd2Os_wlFUgzOj6VNYPIiNGDpfsdY/edit?gid=0#gid=0' // Add your Google sheet URL here
);
const sheet = sheets.getSheetByName('Sheet1');
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
    'Your message was successfully sent to the Googlesheet database!'
  );
}
