const wrapper = require("../../helpers/wrapper");
const Transaksi = require('./transaksi.module')

const createTransaksi = async (req, res) => {
  const payload = req.body;
  const user = req.userData;

  const transaksi = new Transaksi();
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result) : wrapper.response(res, 'success', result);
  };
  sendResponse(await transaksi.create(payload, user));
};

const deleteTransaksi = async (req, res) => {
  const param = req.params.id
  const transaksi = new Transaksi();
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result) : wrapper.response(res, 'success', result);
  };
  sendResponse(await transaksi.delete(param));
};

const getTransaksi = async (req, res) => {
  const transaksi = new Transaksi();
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result) : wrapper.response(res, 'success', result);
  };
  sendResponse(await transaksi.index());
};

module.exports = {
  createTransaksi,
  getTransaksi,
  deleteTransaksi
}