const wrapper = require("../../helpers/wrapper");
const Karyawan = require('./karyawan.module')

const createKaryawan = async (req, res) => {
  const payload = req.body;
  const karyawan = new Karyawan();
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result) : wrapper.response(res, 'success', result);
  };
  sendResponse(await karyawan.create(payload));
};

const updateKaryawan = async (req, res) => {
  const payload = req.body;
  const param = req.params.id
  const karyawan = new Karyawan();
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result) : wrapper.response(res, 'success', result);
  };
  sendResponse(await karyawan.update(payload, param));
};

const deleteKaryawan = async (req, res) => {
  const param = req.params.id
  const karyawan = new Karyawan();
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result) : wrapper.response(res, 'success', result);
  };
  sendResponse(await karyawan.delete(param));
};

const getKaryawan = async (req, res) => {
  const karyawan = new Karyawan();
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result) : wrapper.response(res, 'success', result);
  };
  sendResponse(await karyawan.index());
};

const loginKaryawan = async (req, res) => {
  const payload = req.body;
  const karyawan = new Karyawan();
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result) : wrapper.response(res, 'success', result);
  };
  sendResponse(await karyawan.login(payload));
};


module.exports = {
  createKaryawan,
  updateKaryawan,
  getKaryawan,
  deleteKaryawan,
  loginKaryawan
}