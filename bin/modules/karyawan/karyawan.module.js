const jsonwebtoken = require('jsonwebtoken');
const md5 = require('md5');

const wrapper = require("../../helpers/wrapper");
const { SUCCESS, ERROR } = require("../../helpers/status_code");
const models = require('../../database/models/index');
const karyawan = models.karyawan
const SECRET_KEY = "inisecret"

class Karyawan {
  async login(payload) {
    try {
      let data = {
        ...payload,
        password: md5(payload.password)
      }

      let findKaryawan = await karyawan.findOne({ where: data })
      if (findKaryawan === undefined) {
        return wrapper.error('error', 'Username and Password doesnt match', ERROR.NOT_FOUND);
      }

      // generate jwt token
      let tokenPayload = {
        id_karyawan: findKaryawan.id_karyawan,
        username: findKaryawan.username,
      }
      tokenPayload = JSON.stringify(tokenPayload)
      let token = await jsonwebtoken.sign(tokenPayload, SECRET_KEY)

      // let result
      return wrapper.data(token, 'Success login', SUCCESS.OK);

    } catch (error) {
      console.log(error)
      return wrapper.error('error', 'Error detected while updating karyawan', ERROR.INTERNAL_ERROR);
    }
  }

  async create(payload) {
    try {
      let data = {
        ...payload,
        password: md5(payload.password)
      }

      let result = await karyawan.create(data)
      return wrapper.data(result, 'Success to create karyawan', SUCCESS.CREATED);

    } catch (error) {
      return wrapper.error('error', 'Error detected while creating karyawan', ERROR.INTERNAL_ERROR);
    }
  }

  async update(payload, param) {
    try {
      const data = {
        ...payload,
        password: md5(payload.password)
      }

      let result = await karyawan.update(data, { where: {id_karyawan:param} })
      return wrapper.data(result, 'Success to update karyawan', SUCCESS.OK);

    } catch (error) {
      console.log(error)
      return wrapper.error('error', 'Error detected while updating karyawan', ERROR.INTERNAL_ERROR);
    }
  }

  async delete(param) {
    try {

      let result = await karyawan.destroy({ where: { id_karyawan: param } })
      return wrapper.data(result, 'Success to delete karyawan', SUCCESS.OK);

    } catch (error) {
      console.log(error)
      return wrapper.error('error', 'Error detected while deleting karyawan', ERROR.INTERNAL_ERROR);
    }
  }

  async index() {
    try {

      let result = await karyawan.findAll()
      return wrapper.data(result, 'Success to get all karyawan', SUCCESS.OK);

    } catch (error) {
      console.log(error)
      return wrapper.error('error', 'Error detected while get all karyawan', ERROR.INTERNAL_ERROR);
    }
  }
}

module.exports = Karyawan