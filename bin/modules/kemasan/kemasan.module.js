const wrapper = require("../../helpers/wrapper");
const { SUCCESS, ERROR } = require("../../helpers/status_code");
const models = require('../../database/models/index');
const kemasan = models.kemasan

class Kemasan {
  async create(payload) {
    try {
      let data = {
        ...payload
      }

      let result = await kemasan.create(data)
      return wrapper.data(result, 'Success to create kemasan', SUCCESS.CREATED);

    } catch (error) {
      console.log(error)
      return wrapper.error(error, 'Error detected while creating kemasan', ERROR.INTERNAL_ERROR);
    }
  }

  async update(payload, param) {
    try {
      const data = {
        ...payload
      }

      let result = await kemasan.update(data, { where: {id_kemasan:param} })
      return wrapper.data(result, 'Success to update kemasan', SUCCESS.OK);

    } catch (error) {
      console.log(error)
      return wrapper.error(error, 'Error detected while updating kemasan', ERROR.INTERNAL_ERROR);
    }
  }

  async delete(param) {
    try {

      let result = await kemasan.destroy({ where: { id_kemasan: param } })
      return wrapper.data(result, 'Success to delete kemasan', SUCCESS.OK);

    } catch (error) {
      console.log(error)
      return wrapper.error('error', 'Error detected while deleting kemasan', ERROR.INTERNAL_ERROR);
    }
  }

  async index() {
    try {

      let result = await kemasan.findAll()
      return wrapper.data(result, 'Success to get all kemasan', SUCCESS.OK);

    } catch (error) {
      console.log(error)
      return wrapper.error(error, 'Error detected while get all kemasan', ERROR.INTERNAL_ERROR);
    }
  }
}

module.exports = Kemasan