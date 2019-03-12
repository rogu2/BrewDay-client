'use strict'
const store = require('../store.js')
const config = require('../config.js')
const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const addHandlers = () => {
  $('#create-brew-form').on('submit', onCreateBrew)
  $('#update-brew-form').on('submit', onUpdateBrew)
  $('#delete-brew-form').on('click', onDeleteBrew)
  $('#get-brew-form').on('submit', onGetBrew)
  $('#get-brews-button').on('submit', onGetBrews)
}

const onCreateBrew = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.createBrew(formData)
    .then(ui.createBrewSuccess)
    .catch(ui.failure)
}

const onGetBrews = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.getBrews(formData)
    .then(ui.getBrewsSuccess)
    .catch(ui.failure)
}

const onGetBrew = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.getBrew(formData)
    .then(ui.getBrewSuccess)
    .catch(ui.failure)
}

const onDeleteBrew = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.deleteBrew(formData)
    .then(ui.deleteBrewSuccess)
    .catch(ui.failure)
}

const onUpdateBrew = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.updateBrew(formData)
    .then(ui.updateBrewSuccess)
    .catch(ui.failure)
}

module.exports = {
  onCreateBrew,
  onGetBrews,
  onGetBrew,
  onDeleteBrew,
  onUpdateBrew,
  store,
  config,
  addHandlers
}
