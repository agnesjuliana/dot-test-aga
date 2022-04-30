const jwtAuth = require('../auth/jwtAuth').authVerify;
const httpHandler = require("../modules/transaksi/handler");

const routes = async (server) => {
  server.post("/api/transaksi", jwtAuth, httpHandler.createTransaksi);
  server.get("/api/transaksi", jwtAuth, httpHandler.getTransaksi);
  server.delete("/api/transaksi/:id", jwtAuth, httpHandler.deleteTransaksi);
}

module.exports = { routes }