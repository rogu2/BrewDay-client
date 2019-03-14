'use strict'

const store = require('../store.js')

const signUpSuccess = () => {
  $('#user-feedback').text('Brewer successfully created, please sign in to proceed')
  $('form').trigger('reset')
}

const showSignUpSuccess = () => {
  $('#sign-up-form').show()
  $('#sign-in-form').hide()
}

const showSignInSuccess = () => {
  $('#sign-in-form').show()
  $('#sign-up-form').hide()
}

const signInSuccess = (responseData) => {
  $('#user-feedback').text('Successfully signed in. Time to brew!')
  $('form').trigger('reset')
  store.user = responseData.user
  $('#change-password-button').show()
  $('#sign-out-button').show()
  $('#brew-forms').show()
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('.auth-toggle').hide()
  $('header').show()
  $('#change-password-form').hide()
}

const signOutSuccess = () => {
  $('#user-feedback').text('Successfully logged out')
  $('form').trigger('reset')
  store.user = null
  $('#change-password-button').hide()
  $('#sign-out-button').hide()
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('.auth-toggle').show()
  $('#brew-forms').hide()
  $('#content').hide()
  $('header').hide()
}

const showPasswordSuccess = () => {
  $('#change-password-form').show()
  $('#change-password-button').hide()
}

const changePasswordSuccess = () => {
  $('#user-feedback').text('Password successfully updated')
  $('form').trigger('reset')
  $('#change-password-form').hide()
  $('#change-password-button').show()
}

const changePasswordFailure = () => {
  $('#user-feedback').text('Password did not update, please try again')
  $('form').trigger('reset')
}

const failure = () => {
  $('#user-feedback').text('Something went wrong, please try again')
  $('form').trigger('reset')
  store.user = null
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  showPasswordSuccess,
  showSignUpSuccess,
  showSignInSuccess,
  failure
}
