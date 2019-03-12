'use strict'

const authEvents = require('./auth/events.js')
const brewEvents = require('./brew/events.js')

$(() => {
  $('#change-password-form').hide()
  $('#sign-out-button').hide()
  $('#brew-forms').hide()
  authEvents.addHandlers()
  brewEvents.addHandlers()
})
