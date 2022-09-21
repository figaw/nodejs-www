const urlReq = require("@mistware/http-lib").urlReq;

const action = process.argv[process.argv.length - 2];
const envelope = JSON.parse(process.argv[process.argv.length - 1]);

if (action === "greet") {
  urlReq(process.env.RAPID + "/reply", "POST", {
    msg: `Hello ${envelope.payload.name}`,
  });
} else {
  // Perform smoke test, to validate a deployment
}
