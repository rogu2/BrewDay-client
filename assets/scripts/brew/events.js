'use strict'
const store = require('../store.js')
const config = require('../config.js')
const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const addHandlers = () => {
  $('#create-brew-form').on('submit', onCreateBrew)
  $('#update-brew-form').on('submit', onUpdateBrew)
  $('.content').on('click', '.update-brew', startBrewUpdate)
  $('.content').on('click', '.delete-brew', onDeleteBrew)
  $('#get-brew-form').on('submit', onGetBrew)
  $('#get-brews-button').on('click', onGetBrews)
  $('#get-my-brews-button').on('click', onGetUserBrews)
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
  const formData = $(event.target).closest('section').data('id')
  api.getUserBrews(formData)
    .then(ui.getUserBrewsSuccess)
    .catch(ui.failure)
}

const onDeleteBrew = (event) => {
  event.preventDefault()
  const formData = $(event.target).data('id')
  api.deleteBrew(formData)
    .then(() => onGetUserBrews(event))
    .catch(ui.failure)
}

// const onUpdateBrewForm = (event) => {
//   event.preventDefault()
//   const
// }

const startBrewUpdate = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  store.updateBrewId = id
  ui.onStartBrewUpdate()
}

const onUpdateBrew = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  formData.brew.id = store.updateBrewId
  // const formData = $(event.target).data('id')
  console.log('formdata', formData)
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
  startBrewUpdate,
  addHandlers
}
