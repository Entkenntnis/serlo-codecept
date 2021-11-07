Feature('basic')

Scenario('test something', ({ I }) => {
  I.amOnPage('https://de.serlo-staging.dev')
  I.click('Anmelden')
  I.fillField('email', 'dal')
  I.fillField('password', '123456')
  I.click('Login')
  I.see('dal')
  I.amOnPage('/user/notifications')
  I.dontSee('Fehler')
})
