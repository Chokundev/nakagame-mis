function doGet(){
  return HtmlService.createTemplateFromFile('index').evaluate()
  .setTitle('NAKAGAME-MIS | ระบบจัดการฐานข้อมูลผลการแข่งขัน นาคาเกมส์')
  .setFaviconUrl('https://medalrank-nakagame42.pages.dev/Nakagame.png')
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  // .addMetaTag('og:image', 'https://nakagame-webadmin-cdn.pages.dev/img/meta.png') // Set the URL of the image
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
function webAppUrl() {
  return ScriptApp.getService().getUrl();
}

// function logLogin(email, status) {
//   var sheet = SpreadsheetApp.openById('1OYRM6kv5bFsIlP0YUXnTJ3SeRmmxAVoNCz-syfjGRSM').getSheetByName('LoginLogs');
//   var timestamp = new Date();
//   sheet.appendRow([timestamp, email, status]);
// }

//**ดึงไฟล์ */
function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent()
}