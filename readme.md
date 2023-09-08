Olá Analistas, desenvolvedores e recrutadores. Este readme irá apresentar a estrutura deste projeto cypress de portfólio pessoal.
Meu conhecimento base foi oriundo do curso Playwright pela Udemy onde consegui aprender como realizar testes web e api rest utilizando cypress. Espero que vocês gostem ;)

* Projeto para fazer os testes automatizados aplicação Web e também api rest.
  - url da aplicação WEB testada: https://practice.automationtesting.in/my-account/

### Setup necessário ###


* Instalar o playwright

  ```
  npm init playwright@1.17.123
  ```

### Estrutura do projeto ###

* tests - Local onde são armazenados todos as classes de testes.
* integration - Local onde ficam nossas classes de testes automatizados.
* plugins - Arquivo de configuração dos nossos puglins
* support - Local onde ficam salvos nossas classes de suporte:
          - classe de identificação dos elementos das páginas
          - classe que contém as funções de cada page do projeto (commands)
          - index.js que contém nosso caminho default de commands, inserir dependência do xpath para utilização (require)
* node_modules - pasta contendo os arquivos da instalação cypress

### Rodando o projeto ###

* Acessa a pasta do projeto
* Rode todas as suites de testes com GUI interface:

```
npm run test
```

* Rode todas as suites de testes em modo headless:

```
npm run test-headless
```

### Gerando report HTML ###

* Executar o comando abaixo após execução da suíte dos testes:

```
npx playwright show-report
```

### Repositório github ###

* Consulte meu repositório de diversos projetos no github através da url

```
https://github.com/israfaioli?tab=repositories
```