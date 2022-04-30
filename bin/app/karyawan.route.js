const jwtAuth = require('../auth/jwtAuth').authVerify;
const httpHandler = require("../modules/karyawan/handler");

const routes = async (server) => {
  server.post("/api/karyawan/register", httpHandler.createKaryawan);
  server.post("/api/karyawan/login", httpHandler.loginKaryawan);
  server.put("/api/karyawan/:id", jwtAuth, httpHandler.updateKaryawan);
  server.get("/api/karyawan",jwtAuth, httpHandler.getKaryawan);
  server.delete("/api/karyawan/:id",jwtAuth, httpHandler.deleteKaryawan);
}

module.exports = {routes}