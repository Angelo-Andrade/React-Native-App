# Introducão

React-Native-App trata-se de uma aplicacão mobile, desenvolvida com o Framework React. Seu intuito foi praticar o desenvolvimento com JavaScript e aprender sobre desenvolvimento mobile. Foi utilizado o site https://dash.filess.io para hospedar um banco MongoDB que está servindo para armazenar os dados dos valores cadastrados e a configuracão do perfil do usuário. Para comunicacão entre a aplicacão e o banco, foi desenvolvida uma API com NodeJS, utilizando o framework Express, além do uso da biblioteca 'axios' para controle das requisicões.

Esse sistema mobile propõem ser um sistema de controle financeiro pessoal, onde é possível cadastrar gastos e receitas que são exibidos de forma fácil e clara para o usuário. Além de também conter uma página para exibir o histórico das transacões cadastrada e uma tela final para personalizar o perfil do usuário.


# Testando a aplicacão

Para instalar as dependências do projeto rode no diretório raiz:
```
npm install
```

Para testar a aplicacão com eficiência, deve ser acionada a API de integracão com o banco de dados, que fica em /src/services/api. Utilize o comando abaixo, no diretório raiz do projeto, para inciar a API localmente:

```
node /src/services/api.js
```

Em outro prompt, para iniciar o projeto, rode o comando abaixo no diretório Raiz:
```
npm start
```

Agora basta pressionar a tecla conforme o modo que deseja iniciar o programa. Para maior agilidade, recomenda-se o modo web, basta digitar no prompt w e o programa será carregado.