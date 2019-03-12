'use strict'

const store = require('../store.js')
const config = require('../config.js')

const createBrewSuccess = () => {
  $('#user-feedback').text('New brew has been created')
}

const getBrewsSuccess = () => {
  $('#user-feedback').text('Displaying all brews')
}

const getBrewSuccess = () => {
  $('#user-feedback').text('Here is your brew')
}

const deleteBrewSuccess = () => {
  $('#user-feedback').text('Brew successfully deleted')
}

const updateBrewSuccess = () => {
  $('#user-feedback').text('Brew has been updated')
}

const failure = () => {
  $('#user-feedback').text('Error. Please try again.')
  $('form').trigger('reset')
}

module.exports = {
  createBrewSuccess,
  getBrewsSuccess,
  getBrewSuccess,
  deleteBrewSuccess,
  updateBrewSuccess,
  failure,
  store,
  config
}
