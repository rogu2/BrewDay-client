'use strict'

const store = require('../store.js')
const config = require('../config.js')
const showBrewsTemplate = require('../templates/brew-index.handlebars')
const showUserBrewsTemplate = require('../templates/user-brews-show.handlebars')

const showCreateBrewSuccess = () => {
  $('#create-brew-form').show()
}

const createBrewSuccess = () => {
  $('#user-feedback').text('New brew has been created')
  $('form').trigger('reset')
  $('#create-brew-form').hide()
}

const getBrewsSuccess = (data) => {
  $('#user-feedback').text('Displaying all brews')
  const showBrewsHtml = showBrewsTemplate({ brews: data.brews })
  $('.content').html(showBrewsHtml)
  store.updateBrewId = null
}

const getBrewSuccess = (data) => {
  $('#user-feedback').text('Here is your brew')
  const showBrewsHtml = showBrewsTemplate({ brews: data.brews })
  $('.content').html(showBrewsHtml)
  $('form').trigger('reset')
}

const getUserBrewsSuccess = (data) => {
  const showUserBrewsHtml = showUserBrewsTemplate({ brews: data.brews })
  $('#content').html(showUserBrewsHtml)
}

const deleteBrewSuccess = () => {
  $('#user-feedback').text('Brew successfully deleted')
  $('form').trigger('reset')
}

const updateBrewSuccess = () => {
  $('#user-feedback').text('Brew has been updated')
  $('form').trigger('reset')
  store.updateBrewId = null
}

const onStartBrewUpdate = () => {
  $('')
}

const failure = () => {
  $('#user-feedback').text('Error. Please try again.')
  $('form').trigger('reset')
}

module.exports = {
  createBrewSuccess,
  showCreateBrewSuccess,
  getBrewsSuccess,
  getBrewSuccess,
  getUserBrewsSuccess,
  deleteBrewSuccess,
  updateBrewSuccess,
  onStartBrewUpdate,
  failure,
  store,
  config
}
