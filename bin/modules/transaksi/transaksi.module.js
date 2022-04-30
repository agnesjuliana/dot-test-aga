const moment = require('moment')

const wrapper = require("../../helpers/wrapper");
const { SUCCESS, ERROR } = require("../../helpers/status_code");
const models = require('../../database/models/index');
const transaksi = models.transaksi
const detail = models.detail

const Telur = require('../telur/telur.module')
// const telur = models.telur

class Transaksi {
  async create(payload, user) {
    try {
      let data = payload
      let payloadTransaksi = {
        id_karyawan :user.id_karyawan,
        tgl_transaksi : moment()
      }


      let dataTransaksi = await transaksi.create(payloadTransaksi)
      let customPayload = dataTransaksi.dataValues

      let telur = new Telur

      for (let i = 0; i < data.length; i++) {
        data[i].id_transaksi = dataTransaksi.id_transaksi
        detail.create(data[i])

        let dataTelur = await telur.show({ id_telur: data[i].id_telur })
        let tempTelur = dataTelur.data
        tempTelur.stok = dataTelur.data.stok - data[i].qty
        await telur.update(tempTelur, data[i].id_telur)
      }

      customPayload = {
        ...customPayload, 
        detail: data
      }

      return wrapper.data(customPayload, 'Success to create transaksi', SUCCESS.CREATED);

    } catch (error) {
      console.log(error)
      return wrapper.error(error, 'Error detected while creating transaksi', ERROR.INTERNAL_ERROR);
    }
  }

  async delete(param) {
    try {

      let result = await transaksi.destroy({ where: { id_transaksi: param } })
      return wrapper.data(result, 'Success to delete transaksi', SUCCESS.OK);

    } catch (error) {
      console.log(error)
      return wrapper.error(error, 'Error detected while deleting transaksi', ERROR.INTERNAL_ERROR);
    }
  }

  async index() {
    try {

      let result = await transaksi.findAll({
        include: [
          'karyawan',
          'detail',
          {
            model: detail,
            as: 'detail',
            include: ['telur']
          }
        ]
      })
      return wrapper.data(result, 'Success to get all transaksi', SUCCESS.OK);

    } catch (error) {
      console.log(error)
      return wrapper.error('error', 'Error detected while get all transaksi', ERROR.INTERNAL_ERROR);
    }
  }
}

module.exports = Transaksi