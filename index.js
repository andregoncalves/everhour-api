module.exports = params => {
  const api = require("./lib/api")(params);
  const tasks = require("./lib/tasks")(api);
  const task = require("./lib/task")(api);
  const timer = require("./lib/timer")(api);
  const reports = require("./lib/reports")(api);

  return { api, tasks, task, timer, reports };
};
