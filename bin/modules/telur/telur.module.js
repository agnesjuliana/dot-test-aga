const md5 = require('md5');

const wrapper = require("../../helpers/wrapper");
const { SUCCESS, ERROR } = require("../../helpers/status_code");
const models = require('../../database/models/index');
const telur = models.telur

class Telur {
  async create(payload) {
    try {
      let data = {
        ...payload
      }

      let result = await telur.create(data)
      return wrapper.data(result, 'Success to create telur', SUCCESS.CREATED);

    } catch (error) {
      console.log(error)
      return wrapper.error(error, 'Error detected while creating telur', ERROR.INTERNAL_ERROR);
    }
  }

  async update(payload, param) {
    try {
      const data = {
        ...payload
      }

      let result = await telur.update(data, { where: {id_telur:param} })
      return wrapper.data(result, 'Success to update telur', SUCCESS.OK);

    } catch (error) {
      console.log(error)
      return wrapper.error(error, 'Error detected while updating telur', ERROR.INTERNAL_ERROR);
    }
  }

  async delete(param) {
    try {

      let result = await telur.destroy({ where: { id_telur: param } })
      return wrapper.data(result, 'Success to delete telur', SUCCESS.OK);

    } catch (error) {
      console.log(error)
      return wrapper.error(error, 'Error detected while deleting telur', ERROR.INTERNAL_ERROR);
    }
  }

  async index() {
    try {

      let result = await telur.findAll()
      return wrapper.data(result, 'Success to get all telur', SUCCESS.OK);

    } catch (error) {
      console.log(error)
      return wrapper.error('error', 'Error detected while get all telur', ERROR.INTERNAL_ERROR);
    }
  }

  async show(param) {
    try {

      let result = await telur.findOne({where:param, raw: true})
      return wrapper.data(result, 'Success to get all telur', SUCCESS.OK);

    } catch (error) {
      console.log(error)
      return wrapper.error('error', 'Error detected while get all telur', ERROR.INTERNAL_ERROR);
    }
  }
}

module.exports = Telur