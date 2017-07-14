'use strict'

const request = require('request-promise')
const Promise = require('bluebird')

class Client {
  constructor (options) {
    this.options = options || {
      endpoints: {
        pictures: 'https://api.platzigram.com/picture',
        users: 'https://api.platzigram.com/user',
        auth: 'https://api.platzigram.com/auth'
      }
    }
  }

  getPicture (id, callback) {
    let options = {
      method: 'GET',
      uri: `${this.options.endpoints.pictures}/${id}`,
      json: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  savePicture () {}

  likePicture () {}

  listPictures () {}

  listPicturesByTag () {}

  saveUser () {}

  getUser () {}

  auth () {}
}

module.exports = Client
