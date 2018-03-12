'use strict'

const store = require('./store')

const signUpSuccess = function (data) {
  console.log('signed up, data is ', data)
  $('#sign-up-message').text('Signed up!')
  $('#sign-up').text('Signed up!')
}

const error = function () {
  console.log('something went wrong')
  $('#sign-up-message').text('error on sign up')
}

const signInSuccess = function (data) {
  $('#top-message').text('Signed In Successfully')
  $('#sign-in-message').css('background-color', 'green')
  console.log(data)
  store.user = data.user
  console.log('Signed in')
}

const signInFailure = function (error) {
  console.log(error)
  $('#sign-in-message').text('Error on logging in')
  $('#sign-in-message').css('font-size', '48px')
  $('#sign-up-message').text('')
}

const changePasswordSuccess = function (data) {
  $('#top-message').text('')
  $('#change-message').text('change success!')
  console.log('change success!')
}

const changePasswordFailure = function (error) {
  $('#change-message').text('Error on change password')
  $('#change-message').css('font-size', '48px')
  $('#bottom-message').text('change error!')
  console.log(error)
}

const signOutSuccess = function (data) {
  $('#top-message').text('')
  $('#sign-out-message').text('Successfully signed out!')
}

const signOutFailure = function (data) {
  $('#top-message').text('')
  $('#sign-out-message').text('error on sign out')
  $('#sign-out-message').css('font-size', '48px')
}

module.exports = {
  signInSuccess,
  signUpSuccess,
  signInFailure,
  error,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
