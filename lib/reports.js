const moment = require("moment");

module.exports = api => ({
  // https://api.everhour.com/team/time/export?from=2018-01-01&to=2018-01-31&fields=date%2Cuser%2Ctask
  export: (from, to, fields) => {
	  api.get(`team/time/export?from=${from}&to=${to}&fields=${fields}`)
  }
});