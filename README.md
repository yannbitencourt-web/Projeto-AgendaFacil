# AgendaFácil

Projeto com a tela de login existente reorganizada e uma tela isolada para agendamento de serviço.

## Estrutura

- `index.html`: entrada que direciona para o login.
- `pages/login.html`: tela de login.
- `pages/agendar-servico.html`: tela de agenda (corte de cabelo, manutenção ou consultoria).
- `css/`: estilos separados por tela.
- `js/`: scripts separados por tela.

## Executar

Abra `index.html` em um navegador ou sirva esta pasta com um servidor HTTP estático:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

A agenda pode ser aberta em `pages/agendar-servico.html`. Em `js/agendar-servico.js`, configure a constante `PROXIMA_PAGINA` com o endereço de destino quando a próxima tela estiver pronta. Até lá, o botão valida a escolha e permanece nesta tela.

A autenticação não está conectada a um serviço. O formulário de login valida e-mail e senha vazia e não armazena credenciais.
