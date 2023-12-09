describe('Login Tests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Deve realizar o login com sucesso quando informar as credenciais validas', async () => {
    let validUser = "user1";
    let validPass = "password1";

    await element(by.id(usernameLoginEl)).typeText(validUser)
    await element(by.id(passLoginEl)).typeText(validPass)
    await element(by.id(signingToTapEl)).tap()
    await expect(element(by.id(logoutEl))).toBeVisible();
  });


  it('Deve retornar uma mensagem de erro e nao realizar login quando os dados de login estiverem invalidos', async () => {
    let invalidUser = "INVALID-USER";
    let invalidPass = "invalid-pass";

    await element(by.id(usernameLoginEl)).typeText(invalidUser)
    await element(by.id(passLoginEl)).typeText(invalidPass)
    await element(by.id(signingToTapEl)).tap()
    await expect(element(by.text('Invalid username or password'))).toBeVisible();
    await expect(element(by.id(signingToTapEl))).toBeVisible();
  });

  it('Deve retornar para tela de login apos realizar o login com sucesso e o logout em seguida', async () => {
    let validUser = "user1";
    let validPass = "password1";

    await element(by.id(usernameLoginEl)).typeText(validUser)
    await element(by.id(passLoginEl)).typeText(validPass)
    await element(by.id(signingToTapEl)).tap()
    await element(by.id(logoutEl)).tap();

    await expect(element(by.id(usernameLoginEl))).toBeVisible();
    await expect(element(by.id(passLoginEl))).toBeVisible();
    await expect(element(by.id(signingToTapEl))).toBeVisible();
  });

});
