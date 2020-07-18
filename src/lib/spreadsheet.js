const { GoogleSpreadsheet } = require('google-spreadsheet');

async function document(id) {
  const credential = {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n')
  };

  console.log("Credential: ", credential);

  const doc = new GoogleSpreadsheet(id || '');
  await doc.useServiceAccountAuth(credential);
  await doc.loadInfo();
  return doc;
}

async function list(id) {
  const doc = await document(id);
  const sheet =  doc.sheetsByIndex[0];
  const rows = await sheet.getRows();
  return rows;
};

async function populate(id, row) {
  const doc = await document(id);
  const sheet =  doc.sheetsByIndex[0];
  const result = await sheet.addRow(row);
  return result;
};

module.exports = {
  document, list, populate
};


