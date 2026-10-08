# AgendaFácil — tela inicial e login

Versão-base do projeto para o grupo: contém somente a página inicial responsiva e a tela de login, pronta para receber a integração de autenticação.

## Executar

Abra `index.html` em um navegador ou sirva esta pasta com um servidor HTTP estático:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

A autenticação ainda não está conectada a um serviço. O formulário valida e-mail e senha vazia e informa que a integração está pendente; não armazena credenciais.