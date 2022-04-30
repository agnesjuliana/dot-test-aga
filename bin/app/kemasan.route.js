const jwtAuth = require('../auth/jwtAuth').authVerify;
const httpHandler = require("../modules/kemasan/handler");

const routes = async (server) => {
  server.post("/api/kemasan", jwtAuth, httpHandler.createKemasan);
  server.put("/api/kemasan/:id", jwtAuth, httpHandler.updateKemasan);
  server.get("/api/kemasan", jwtAuth, httpHandler.getKemasan);
  server.delete("/api/kemasan/:id", jwtAuth, httpHandler.deleteKemasan);
}

module.exports = { routes }