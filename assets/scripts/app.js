'use strict'

const authEvents = require('./auth/events.js')
const brewEvents = require('./brew/events.js')

$(() => {
  $('#change-password-button').hide()
  $('#change-password-form').hide()
  $('#sign-out-button').hide()
  $('#brew-forms').hide()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  authEvents.addHandlers()
  brewEvents.addHandlers()
})
