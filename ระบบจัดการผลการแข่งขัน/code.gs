function doGet() {
  return HtmlService.createTemplateFromFile('index')
  .evaluate()
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}

//**DataTable */
// function getData(){
//   data.shift()
//   return data
// }

//**ดึงไฟล์ */
function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent()
}

var ss = SpreadsheetApp.getActive().getSheets()[0]
var data = ss.getDataRange().getValues()
var id = data.map(r => r[0])
//Logger.log(data)

//**เพิ่มข้อมูล */
// function addRecord(obj){
//  var index = id.indexOf(obj.input1) 
//  var output = {}
//    if(index > -1){
//      output.result = false
//    }else{
//      output.result = true
//      ss.appendRow(["'"+obj.input1, obj.input2, obj.input3, obj.input4, "'"+obj.input5, obj.input6])
//      data = ss.getRange(ss.getLastRow(),1,1,ss.getLastColumn()).getValues()[0]
//      output.data = data
//   }
//   return output
// }

//**ค้นหาข้อมูล */
function findRecord(record){
  var index = id.indexOf(record) 
  var output = {}
  if(index > -1){
    data = ss.getRange(index+1,1,1,ss.getLastColumn()).getValues()[0]
    output.result = true
    output.data = data
  }else{
    output.result = false
  }
  return output
}

//**แก้ไขข้อมูล */

function updateRecord(obj){
  var index = id.indexOf(obj.input1) 
  if(index > -1){
    ss.getRange(index+1,1,1, ss.getLastColumn()).setValues
    ([["'"+obj.input1, obj.input2
    , obj.name1_1, obj.name1_2, "'"+obj.score1_1, obj.score1_2
    , obj.name2_1, obj.name2_2, "'"+obj.score2_1, obj.score2_2
    , obj.name3_1, obj.name3_2, "'"+obj.score3_1, obj.score3_2
    , obj.name4_1, obj.name4_2, "'"+obj.score4_1, obj.score4_2
    , obj.name5_1, obj.name5_2, "'"+obj.score5_1, obj.score5_2, obj.status]])
  }
  data = ss.getRange(index+1,1,1,ss.getLastColumn()).getValues()[0]
  return data
}

//**ลบข้อมูล */
// function delRecord(record){
//  var index = id.indexOf(record) 
//  if(index >-1){
//    ss.deleteRow(index+1)
//  }
//  return true
// }
