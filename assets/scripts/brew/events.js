'use strict'
const store = require('../store.js')
const config = require('../config.js')
const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const addHandlers = () => {
  $('#create-brew-form').on('submit', onCreateBrew)
  $('#update-brew-form').on('submit', onUpdateBrew)
  $('#delete-brew-form').on('submit', onDeleteBrew)
  $('#get-brew-form').on('submit', onGetUserBrews)
  $('#get-brews-button').on('click', onGetBrews)
}

const onCreateBrew = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.createBrew(formData)
    .then(ui.createBrewSuccess)
    .catch(ui.failure)
}

const onGetBrews = () => {
  api.getBrews()
    .then(ui.getBrewsSuccess)
    .catch(ui.failure)
}

const onGetBrew = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.getBrew(formData)
    .then(ui.getBrewSuccess)
    .catch(ui.failure)
}

const onGetUserBrews = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.getUserBrews(formData)
    .then(ui.getUserBrewsSuccess)
    .catch(ui.failure)
}

const onDeleteBrew = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.deleteBrew(formData)
    .then(ui.deleteBrewSuccess)
    .catch(ui.failure)
}

const onUpdateBrew = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.updateBrew(formData)
    .then(ui.updateBrewSuccess)
    .catch(ui.failure)
}

module.exports = {
  onCreateBrew,
  onGetBrews,
  onGetBrew,
  onGetUserBrews,
  onDeleteBrew,
  onUpdateBrew,
  store,
  config,
  addHandlers
}
