const _ = require('lodash');
const spreadsheet = require('../lib/spreadsheet');

exports.handler = (event, context, callback) => {
  const body = JSON.parse(event.body);

  const id = _.get(body, 'id', false); // spreadsheet id
  if (!_.isString(id)) {
    callback(new Error("invalid spreadsheet id"));
    return
  }

  const data = _.get(body, 'row', false);
  if (!_.isObject(data)) {
    callback(new Error("invalid spreadsheet row data"));
    return
  }

  const d = new Date();
  const row = { date: d.toUTCString(), ...data };

  spreadsheet
    .populate(id, row)
    .then(() => {
      console.log("Row added:", row);
      callback(null, { statusCode: 204 });
    })
    .catch((err) => {
      callback(err);
    })
}
