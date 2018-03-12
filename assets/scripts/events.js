'use strict'

const appApi = require('./api.js')
const appUi = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  appApi.signUp(data)
    .then(appApi.onSignUpSuccess)
    .catch(appApi.onError)
  console.log('data is ', data)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('onSignIn is running')
  appApi.signIn(data)
    .then(appUi.onSignInSuccess)
    .catch(appUi.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  appApi.changePassword(data)
    .then(appUi.changePasswordSuccess)
    .catch(appUi.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  appApi.signOut(data)
    .then(appUi.signOutSuccess)
    .catch(appUi.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
