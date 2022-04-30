const assert = require("assert");
const { expect } = require("chai");
const sinon = require("sinon");
const Karyawan = require('../../../../bin/modules/karyawan/karyawan.module')
// const karyawan = new Karyawan

describe("Karyawan", () => {
  const payload = {
    "username": 'karyawan3',
    "password": 'rahasia'
  }

  describe("create", () => {
    it("Create karyawan success", async()=>{

      const data = {
        "success": true,
        "data": {
          "id_karyawan": 3,
          "username": "karyawan3",
          "password": "ac43724f16e9241d990427ab7c8f4228",
          "updatedAt": "2022-04-30T03:48:28.942Z",
          "createdAt": "2022-04-30T03:48:28.942Z"
        },
        "message": "Success to create karyawan",
        "code": 201
      }

      // sinon.stub(Karyawan.prototype, 'create').resolves(data)
      const karyawan = new Karyawan
      const response = await karyawan.create(payload)
      assert.equal(response.code, 201)
      // Karyawan.prototype.create.restore()
    })

    it("Create karyawan failed", async () => {

      const data = {
        "success": false,
        "data": null,
        "message": "Error detected while creating karyawan",
        "code": 500
      }

      // sinon.stub(Karyawan.prototype, 'create').resolves(data)
      const karyawan = new Karyawan
      const response = await karyawan.create({})
      assert.equal(response.code, 500)
      // Karyawan.prototype.create.restore()
    })
  })


})