function doGet(){
  return HtmlService.createTemplateFromFile('index').evaluate()
  .setTitle('NAKAGAME-MIS | ระบบจัดการฐานข้อมูลผลการแข่งขัน นาคาเกมส์')
  .setFaviconUrl('https://medalrank-nakagame42.pages.dev/Nakagame.png')
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  // .addMetaTag('og:image', 'https://nakagame-webadmin-cdn.pages.dev/img/meta.png') // Set the URL of the image
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

//**ดึงไฟล์ */
function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent()
}

function getURL() {  
  var url = ScriptApp.getService().getUrl();  
  return url;
}

/** Login */
function checkLogin(username, passw){
  var ws = SpreadsheetApp.getActive().getSheetByName('Admin');
  var data = ws.getDataRange().getDisplayValues();
  var userlog = data.find(r => r[0] == username && r[1] == passw);
  
  // Log the login attempt
  logLoginAttempt(username, userlog ? 'Success' : 'Failure');
  
  return userlog;
}

function logLoginAttempt(username, status){
  var logSheet = SpreadsheetApp.getActive().getSheetByName('LoginLogs');
  var timestamp = new Date();
  logSheet.appendRow([username, status, timestamp]);
}

var ss = SpreadsheetApp.getActive().getSheetByName('DATA2');
var data = ss.getDataRange().getValues();
var id = data.map(r => r[0]);
//Logger.log(data)

//**เพิ่มข้อมูล */
function addRecord(obj){
  var index = id.indexOf(obj.input1); 
  var output = {};
  if(index > -1){
    output.result = false;
  } else {
    output.result = true;
    ss.appendRow(["'"+obj.input1, obj.input2, obj.input3, obj.input4, "'"+obj.input5, obj.input6]);
    data = ss.getRange(ss.getLastRow(), 1, 1, ss.getLastColumn()).getValues()[0];
    output.data = data;
  }
  return output;
}

//**ค้นหาข้อมูล */
function findRecord(record){
  var index = id.indexOf(record); 
  var output = {};
  if(index > -1){
    data = ss.getRange(index + 1, 1, 1, ss.getLastColumn()).getValues()[0];
    output.result = true;
    output.data = data;
  } else {
    output.result = false;
  }
  return output;
}

//**แก้ไขข้อมูล */
function updateRecord(obj) {
  var index = id.indexOf(obj.input1);
  if (index > -1) {
    var range = ss.getRange(index + 1, 3, 1, 5); // เลือกคอลัมน์ที่ 3-7
    range.setValues([["'" + obj.input3, obj.input4, obj.input5, obj.input6, "'" + obj.input7]]);
  }
  var data = ss.getRange(index + 1, 1, 1, ss.getLastColumn()).getValues()[0];
  return data;
}

//**ลบข้อมูล */
function delRecord(record){
  var index = id.indexOf(record); 
  if(index > -1){
    ss.deleteRow(index + 1);
  }
  return true;
}


