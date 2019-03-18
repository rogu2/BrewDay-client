'use strict'
const store = require('../store.js')
const config = require('../config.js')

// if user is logged in, hide login/signup, show signout and change password

const createBrew = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/brews',
    method: 'POST',
    headers: { Authorization: 'Token token=' + store.user.token },
    data: formData
  })
}

const getUserBrews = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/user-brews',
    method: 'GET',
    headers: { Authorization: 'Token token=' + store.user.token },
    data: formData
  })
}

const getBrews = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/brews',
    method: 'GET',
    headers: { Authorization: 'Token token=' + store.user.token }
  })
}

const getBrew = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/brews/' + formData.brew.brew_id,
    method: 'GET',
    headers: { Authorization: 'Token token=' + store.user.token },
    data: formData
  })
}

const deleteBrew = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/brews/' + formData,
    method: 'DELETE',
    headers: { Authorization: 'Token token=' + store.user.token }
  })
}

const updateBrew = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/brews/' + formData.brew.id,
    method: 'PATCH',
    headers: { Authorization: 'Token token=' + store.user.token },
    data: formData
  })
}

module.exports = {
  createBrew,
  getBrews,
  getBrew,
  getUserBrews,
  deleteBrew,
  updateBrew,
  store,
  config
}
