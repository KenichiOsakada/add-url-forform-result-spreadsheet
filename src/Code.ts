function onFormSubmit(e: GoogleAppsScript.Events.SheetsOnFormSubmit): void {
  const sheet: GoogleAppsScript.Spreadsheet.Sheet = e.range.getSheet();
  const responses: string[] = e.values;
  // 編集用URL列名（Googleフォームに応じて変更すること）
  const editUrlKey = "編集用URL";
  // 回答のnamedValuesから編集用URLを取得
  const editUrl: string = (editUrlKey in e.namedValues && e.namedValues[editUrlKey][0]) ? e.namedValues[editUrlKey][0] : "";

  // 編集用URLを書き込む列（例：最後の列+1）
  const urlCol: number = sheet.getLastColumn() + 1;
  const row: number = e.range.getRow();
  sheet.getRange(row, urlCol).setValue(editUrl);
}