const wrapper = require("../../helpers/wrapper");
const Telur = require('./telur.module')

const createTelur = async (req, res) => {
  const payload = req.body;
  const telur = new Telur();
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result) : wrapper.response(res, 'success', result);
  };
  sendResponse(await telur.create(payload));
};

const updateTelur = async (req, res) => {
  const payload = req.body;
  const param = req.params.id
  const telur = new Telur();
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result) : wrapper.response(res, 'success', result);
  };
  sendResponse(await telur.update(payload, param));
};

const deleteTelur = async (req, res) => {
  const param = req.params.id
  const telur = new Telur();
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result) : wrapper.response(res, 'success', result);
  };
  sendResponse(await telur.delete(param));
};

const getTelur = async (req, res) => {
  const telur = new Telur();
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result) : wrapper.response(res, 'success', result);
  };
  sendResponse(await telur.index());
};

module.exports = {
  createTelur,
  updateTelur,
  getTelur,
  deleteTelur
}