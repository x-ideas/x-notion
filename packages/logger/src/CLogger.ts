import debug from "debug";

interface ICLogger extends debug.Debug {
  log: debug.Debugger;
  warn: debug.Debugger;
  error: debug.Debugger;
}

export const CLogger: ICLogger = Object.assign({}, debug.debug, {
  log: debug("log"),
  warn: debug("warn"),
  error: debug("error"),
});
