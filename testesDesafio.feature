Feature: Acesso ao app Going2 Mobile
    Como um usuario de aplicativos Mobile
    Rodrigo deseja acessar o aplicativo da going2 
    Para que ele possa realizar todas as suas tarefas necessarias


Contexto:
    Dado que Rodrigo acessa a area de login do app da going2


Cenario: Login com sucesso a aplicacao
    E ele preenche os campos de login utilizando credenciais validas
    Quando ele realiza a acao de executar o login
    Entao ele deve ver que a tela home do going2 mobile deve ser apresentaa

Esquema de Cenario: Tentativa de login utilizando dados invalidos
    E ele preenche os campos de login com o usuario "<user>" juntamente com a senha "<pass>"
    Quando ele realiza a acao de executar o login
    Entao ele deve ver que o login nao deve ser realizado pois a tela e mantida na tela atual
    E um erro com a mensagem "<errorMsg>" deve ser apresentada na tela

    Exemplos:
    |   user        |   pass            |       errorMsg                   |
    |   user1       |   senhaInvalida   |   Invalid username or password   |
    |   userInvalido|   password1       |   Invalid username or password   |
    |               |                   |   Invalid username or password   |

Cenario: Acessar a aplicacao e realizar o logout
    E ele preenche os campos de login utilizando credenciais validas
    E ele realiza a acao de executar o login
    Quando na tela de home ele realiza a acao de logout
    Entao ele deve ver que a tela de login 'e apresentada novamente


