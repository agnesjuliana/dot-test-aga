const wrapper = require("../../helpers/wrapper");
const Kemasan = require('./kemasan.module')

const createKemasan = async (req, res) => {
  const payload = req.body;
  const kemasan = new Kemasan();
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result) : wrapper.response(res, 'success', result);
  };
  sendResponse(await kemasan.create(payload));
};

const updateKemasan = async (req, res) => {
  const payload = req.body;
  const param = req.params.id
  const kemasan = new Kemasan();
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result) : wrapper.response(res, 'success', result);
  };
  sendResponse(await kemasan.update(payload, param));
};

const deleteKemasan = async (req, res) => {
  const param = req.params.id
  const kemasan = new Kemasan();
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result) : wrapper.response(res, 'success', result);
  };
  sendResponse(await kemasan.delete(param));
};

const getKemasan = async (req, res) => {
  const kemasan = new Kemasan();
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result) : wrapper.response(res, 'success', result);
  };
  sendResponse(await kemasan.index());
};

module.exports = {
  createKemasan,
  updateKemasan,
  getKemasan,
  deleteKemasan
}