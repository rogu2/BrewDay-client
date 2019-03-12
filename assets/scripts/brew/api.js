'use strict'
const store = require('../store.js')
const config = require('../config.js')

// if user is logged in, hide login/signup, show signout and change password

// Try using formdata?
const createBrew = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/brews',
    method: 'POST',
    headers: { Authorization: 'Token token=' + store.user.token },
    data: formData
  })
}

const getBrews = () => {
  return $.ajax({
    url: config.apiUrl + '/brews',
    method: 'GET',
    headers: { Authorization: 'Token token=' + store.user.token }
  })
}

const getBrew = (brewId) => {
  return $.ajax({
    url: config.apiUrl + '/brews/',
    method: 'GET',
    headers: { Authorization: 'Token token=' + store.user.token }
  })
}

const deleteBrew = (brewId) => {
  return $.ajax({
    url: config.apiUrl + '/brews',
    method: 'DELETE',
    headers: { Authorization: 'Token token=' + store.user.token }
  })
}

// Try using formdata?
const updateBrew = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/brews',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  createBrew,
  getBrews,
  getBrew,
  deleteBrew,
  updateBrew,
  store,
  config
}
