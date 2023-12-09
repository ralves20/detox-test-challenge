# Going2 SignIn Example

A descricao deste desafio esta detalhada em: [Desafio](DESAFIO.md)

## Início Rápido

Para rodar o projeto, siga os passos abaixo:

1. Clone o repositório para sua máquina local

2. Navegue até a pasta do projeto e instale as dependências:

```bash
yarn install
```

3. Inicie o servidor Metro:

```bash
yarn start
```

4. Em um novo terminal, rode a aplicação no emulador/dispositivo:

```bash
yarn android
# ou
yarn ios
```

## Usuários de Teste

O aplicativo possui um conjunto de usuários fixos (hardcoded) para fins de teste e demonstração. Esses usuários são usados para simular o processo de autenticação. Abaixo estão as credenciais desses usuários de teste:

| Username | Password   |
|----------|------------|
| user1    | password1  |
| user2    | password2  |



## Cenários Gherkin

Os cenários em Gherkin solicitados pelo desafio, estao no arquivo [testesDesafio](testesDesafio.feature).

## Testes com Detox

Os testes com Detox, tem diversas configuracoes no projeto, as quais estao detalhadas abaixo:

* diretorio e2e/ -> Diretório onde estao contidos os testes desenvolvidos para este desafio
* .detoxrc.js -> Arquivo contendo as configuracos dos detox no projeto
* package.json -> Foram adicionados scripts para execucao dos testes com detox
* Dentro dos componentes de tela, também foram adicionados testID nos elementos para que estes fossem identificados pelo detox.


## Executando os testes

### IOS
1. O primeiro passo é buildar o app para a plataforma escolhida, neste caso, iOS:
```bash
detox build --configuration ios.debug
```

2. Em seguida, execute os testes:
```bash
detox test --configuration ios.debug
```


### Android
1. O primeiro passo é buildar o app para a plataforma escolhida, neste caso, Android:
```bash
detox build --configuration android.emu.debug
```

2. Em seguida, execute os testes:
```bash
detox test --configuration android.emu.debug
```
