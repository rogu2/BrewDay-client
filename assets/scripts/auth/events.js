'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const addHandlers = () => {
  $('#sign-up-toggle').on('click', showSignUp)
  $('#sign-in-toggle').on('click', showSignIn)
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#sign-out-button').on('click', onSignOut)
  $('#change-password-button').on('click', showPassword)
  $('#change-password-form').on('submit', onChangePassword)
}

const showSignUp = () => {
  ui.showSignUpSuccess()
}

const onSignUp = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

const showSignIn = () => {
  ui.showSignInSuccess()
}

const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.failure)
}

const showPassword = () => {
  ui.showPasswordSuccess()
}

const onChangePassword = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = (event) => {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  showPassword,
  addHandlers
}
