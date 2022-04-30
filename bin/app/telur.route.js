const jwtAuth = require('../auth/jwtAuth').authVerify;
const httpHandler = require("../modules/telur/handler");

const routes = async (server) => {
  server.post("/api/telur", jwtAuth, httpHandler.createTelur);
  server.put("/api/telur/:id", jwtAuth, httpHandler.updateTelur);
  server.get("/api/telur", jwtAuth, httpHandler.getTelur);
  server.delete("/api/telur/:id", jwtAuth, httpHandler.deleteTelur);
}

module.exports = { routes }