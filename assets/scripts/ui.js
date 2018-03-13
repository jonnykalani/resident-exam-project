'use strict'

const store = require('./store')

const signUpSuccess = function (data) {
  console.log('signed up, data is ', data)
  $('#status-message').text('Signed up!')
  $('#sign-up').text('Signed up!')
}

const error = function () {
  console.log('something went wrong')
  $('#status-message').text('error on sign up')
}

const signInSuccess = function (data) {
  $('#status-message').text('Signed In Successfully')
  $('#status-message').css('background-color', 'green')
  $('#container-sign').hide()
  $('#change-password').show()
  $('#sign-out').show()
//  #board, #change-password, #sign-out, #create-quiz, #get-quizzes, #get-quiz
  $('#create-quiz').show()
  $('#get-quizzes').show()
  $('#get-quiz').show()

  console.log(data)
  store.user = data.user
  console.log('Signed in')
}

const signInFailure = function (error) {
  console.log(error)
  $('#status-message').text('Error on logging in')
  $('#status-message').css('font-size', '48px')
  $('#status-message').text('')
}

const changePasswordSuccess = function (data) {
  $('#status-message').text('change success!')
  console.log('change success!')
}

const changePasswordFailure = function (error) {
  $('#status-message').text('Error on change password')
  $('#status-message').css('font-size', '48px')
  $('#status-message').text('change error!')
  console.log(error)
}

const signOutSuccess = function (data) {
  $('#status-message').text('')
  $('#status-message').text('Successfully signed out!')
}

const signOutFailure = function (data) {
  $('#status-message').text('')
  $('#status-message').text('error on sign out')
  $('#status-message').css('font-size', '48px')
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
