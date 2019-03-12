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
    headers: { Authorization: 'Token token=' + store.user.token }
  })
}

const deleteBrew = (formData) => {
  console.log('deletebrew', formData)
  return $.ajax({
    url: config.apiUrl + '/brews/' + formData.brew.brew_id,
    method: 'DELETE',
    headers: { Authorization: 'Token token=' + store.user.token }
  })
}

const updateBrew = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/brews/' + formData.brew.brew_id,
    method: 'PATCH',
    headers: { Authorization: 'Token token=' + store.user.token },
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
