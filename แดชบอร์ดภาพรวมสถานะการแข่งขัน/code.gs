function doGet() {
  return HtmlService.createTemplateFromFile('index')
  .evaluate()
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}

function setAutomatically(){

  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('STATUS');

  let stat_1 = sheet.getRange('B2').getValue(); //0
  let stat_2 = sheet.getRange('B3').getValue(); //1
  let stat_3 = sheet.getRange('B4').getValue(); //2
  let stat_4 = sheet.getRange('B5').getValue(); //3

  let stat_s1 = sheet.getRange('D2').getValue(); //4
  let stat_s2 = sheet.getRange('D3').getValue(); //5
  let stat_s3 = sheet.getRange('D4').getValue(); //6
  let stat_s4 = sheet.getRange('D5').getValue(); //7

  let stat_b1 = sheet.getRange('F2').getValue(); //8
  let stat_b2 = sheet.getRange('F3').getValue(); //9
  let stat_b3 = sheet.getRange('F4').getValue(); //10
  let stat_b4 = sheet.getRange('F5').getValue(); //11

  let print_1 = sheet.getRange('H2').getValue();
  let print_2 = sheet.getRange('H3').getValue();
  let print_3 = sheet.getRange('H4').getValue();
  let print_4 = sheet.getRange('H5').getValue();
  let print_5 = sheet.getRange('H6').getValue();

  let sport_1 = sheet.getRange('J2').getValue();
  let sport_2 = sheet.getRange('J3').getValue();
  let sport_3 = sheet.getRange('J4').getValue();
  let sport_4 = sheet.getRange('J5').getValue();
  let sport_5 = sheet.getRange('J6').getValue();
  let sport_6 = sheet.getRange('J7').getValue();
  let sport_7 = sheet.getRange('J8').getValue();
  let sport_8 = sheet.getRange('J9').getValue();
  let sport_9 = sheet.getRange('J10').getValue();
  let sport_10 = sheet.getRange('J11').getValue();

  let sport_s1 = sheet.getRange('L2').getValue();
  let sport_s2 = sheet.getRange('L3').getValue();
  let sport_s3 = sheet.getRange('L4').getValue();
  let sport_s4 = sheet.getRange('L5').getValue();
  let sport_s5 = sheet.getRange('L6').getValue();
  let sport_s6 = sheet.getRange('L7').getValue();
  let sport_s7 = sheet.getRange('L8').getValue();
  let sport_s8 = sheet.getRange('L9').getValue();
  let sport_s9 = sheet.getRange('L10').getValue();
  let sport_s10 = sheet.getRange('L11').getValue();

  let sport_b1 = sheet.getRange('N2').getValue();
  let sport_b2 = sheet.getRange('N3').getValue();
  let sport_b3 = sheet.getRange('N4').getValue();
  let sport_b4 = sheet.getRange('N5').getValue();
  let sport_b5 = sheet.getRange('N6').getValue();
  let sport_b6 = sheet.getRange('N7').getValue();
  let sport_b7 = sheet.getRange('N8').getValue();
  let sport_b8 = sheet.getRange('N9').getValue();
  let sport_b9 = sheet.getRange('N10').getValue();
  let sport_b10 = sheet.getRange('N11').getValue();

  let run_s1 = sheet.getRange('P2').getValue();
  let run_s2 = sheet.getRange('P3').getValue();
  let run_s3 = sheet.getRange('P4').getValue();
  let run_s4 = sheet.getRange('P5').getValue();
  let run_s5 = sheet.getRange('P6').getValue();
  let run_s6 = sheet.getRange('P7').getValue();

  let run_b1 = sheet.getRange('R2').getValue();
  let run_b2 = sheet.getRange('R3').getValue();
  let run_b3 = sheet.getRange('R4').getValue();
  let run_b4 = sheet.getRange('R5').getValue();
  let run_b5 = sheet.getRange('R6').getValue();
  let run_b6 = sheet.getRange('R7').getValue();

  let compet_s1 = sheet.getRange('T2').getValue();
  let compet_s2 = sheet.getRange('T3').getValue();
  let compet_s3 = sheet.getRange('T4').getValue();
  let compet_s4 = sheet.getRange('T5').getValue();

  let compet_b1 = sheet.getRange('V2').getValue();
  let compet_b2 = sheet.getRange('V3').getValue();
  let compet_b3 = sheet.getRange('V4').getValue();
  let compet_b4 = sheet.getRange('V5').getValue();

  let values = [
    stat_1, stat_2, stat_3, stat_4,
    stat_s1, stat_s2, stat_s3, stat_s4,
    stat_b1, stat_b2, stat_b3, stat_b4,
    print_1, print_2, print_3, print_4, print_5,
    sport_1, sport_2, sport_3, sport_4, sport_5, sport_6, sport_7, sport_8, sport_9, sport_10,
    sport_s1, sport_s2, sport_s3, sport_s4, sport_s5, sport_s6, sport_s7, sport_s8, sport_s9, sport_s10,
    sport_b1, sport_b2, sport_b3, sport_b4, sport_b5, sport_b6, sport_b7, sport_b8, sport_b9, sport_b10,
    run_s1, run_s2, run_s3, run_s4, run_s5, run_s6,
    run_b1, run_b2, run_b3, run_b4, run_b5, run_b6,
    compet_s1, compet_s2, compet_s3, compet_s4,
    compet_b1, compet_b2, compet_b3, compet_b4
  ];

  Logger.log(values);

  return[stat_1,stat_2,stat_3,stat_4,
          stat_s1,stat_s2,stat_s3,stat_s4,
          stat_b1,stat_b2,stat_b3,stat_b4,
          print_1,print_2,print_3,print_4,print_5,
          sport_1,sport_2,sport_3,sport_4,sport_5,sport_6,sport_7,sport_8,sport_9,sport_10,
          sport_s1,sport_s2,sport_s3,sport_s4,sport_s5,sport_s6,sport_s7,sport_s8,sport_s9,sport_s10,
          sport_b1,sport_b2,sport_b3,sport_b4,sport_b5,sport_b6,sport_b7,sport_b8,sport_b9,sport_b10,
          run_s1,run_s2,run_s3,run_s4,run_s5,run_s6,
          run_b1,run_b2,run_b3,run_b4,run_b5,run_b6,
          compet_s1,compet_s2,compet_s3,compet_s4,
          compet_b1,compet_b2,compet_b3,compet_b4];
}