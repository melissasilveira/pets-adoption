Desafio Final Formação Front-End
Criar um sistema de adoção de pets. Nesse sistema é possível listar, cadastrar, deletar, editar e adotar pets. Para realizar as ações de admin é preciso estar logado no sistema. O sistema consiste em uma página inicial e uma dashboard.

Figma - https://www.figma.com/file/AFKBizK1godlg7RCbUqQ8r/Otterwise?node-id=77%3A239

Página inicial:
Consiste em uma barra de navegação, um cabeçalho, uma galeria com os pets, um formulário de contato e um rodapé.
A barra de navegação possui três itens: Login, Galeria e Contato.
Ao clicar em Login, deve aparecer um modal na tela com os campos de email e senha para que uma pessoa admin consiga logar e gerenciar os dados.
Ao clicar em Galeria, uma rolagem automática para a área de galeria deve acontecer.
Ao clicar em Contato, uma rolagem automática para a área de contato deve acontecer.
A galeria deve conter uma listagem de pets que é uma informação fornecida pela API em uma rota aberta e cada card de pet tem um botão de adotar, onde, ao clicar, o campo Mensagem do formulário de contato deve ser preenchido com "Oi, quero muito adotar o(a) [nome_do_pet]!" e realizar a rolagem da página para o formulário de contato.
O formulário de contato deve ser enviado para o servidor via chamada na API.

Dashboard
É uma página autenticada, onde só pessoas admin podem acessar.
A página contém dois contadores, uma tabela de pets cadastrados e dois botões ('Entrada de Pet' e 'Sair').
Os contadores mostram quantos pets cadastrados e quantos adotados o sistema possui (e devem ser atualizados quando um novo pet for cadastrado ou adotado).
A tabela mostra as informações do pet e possui uma coluna de Ações com ícones onde é possível adotar, editar e excluir o pet.
Ao clicar no ícone de adoção, um modal de confirmação deve ser exibido com as opções Sim e Não.
Ao clicar no ícone de editar, um modal com o formulário e os campos preenchidos, possibilitando a alteração deles e no final dois botões: Salvar e Cancelar.
Ao clicar no ícone de exclusão, um modal de confirmação deve ser exibido com as opções Sim e Não.

Geral
As interações do usuário devem ter feedback visual (Envio do contato, Login, Sair, Cadastro, Exclusão, Adoção, etc.)
As rotas da API estão documentadas em uma coleção no Postman.
https://www.getpostman.com/collections/d3ee09d56bbc97512742

Link API - http://otterwise-fake-api.herokuapp.com/

email: melissaasilveira@gmail.com
senha: 12345

Opções para o select espécie: Gato, Cachorro.

** UTILIZANDO A FAKE API **

POST - http://otterwise-fake-api.herokuapp.com/pets/<apiCode>/

GET LIST - http://otterwise-fake-api.herokuapp.com/pets/<apiCode>/

GET PET - http://otterwise-fake-api.herokuapp.com/pets/<apiCode>/<petId>

PUT- http://otterwise-fake-api.herokuapp.com/pets/<apiCode>/<petId>

DELETE - http://otterwise-fake-api.herokuapp.com/pets/<apiCode>/<petId>
