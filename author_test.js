const secrets = require('./secrets.js')

Feature('Author')

Scenario('Login', ({ I }) => {
  I.amOnPage('/')
  I.click('Anmelden')
  I.fillField('email', 'inyono')
  I.fillField('Passwort', secrets.userPassword)
  I.click('Login')
  I.see('inyono')
})
