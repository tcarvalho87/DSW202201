# DSW202201
Trabalho da disciplina de Desenvolvimento de Sistemas Web

## Conteúdo Atividade 1
### Layout
- Um layout com cabeçalho, menu, conteúdo e rodapé
- Deve ser utilizados as etiquetas HTML para layouts
- A formatação deve ser construída com a folha de estilo (CSS)
- O layout deve estar acessível tanto para Desktop quanto para dispositivos móveis.

Menu
- O menu deve ser construído com lista de links (etiqueta âncora)
- Ter um submenu dropdown é um extra (sem uso de javascript, apenas CSS)
- Cada página deve estar acessível principalmente por links neste menu.

Conteúdo
- Deve ter uma página inicial
- Deve ter uma página com texto informacional. Deve conter pelo menos parágrafos, imagens e preferencialmente um vídeo embutido (pode ser do youtube)
- Deve ter uma página com formulário para cadastro de algo.
- Deve ter uma página com dados já cadastrados mostrado em tabela com ícones para alterar e remover. (Neste momento não há banco de dados)
- Uma página para login. Apenas a interface.


# Conteúdo Atividade 2
Validação de formulário
- Campos obrigatórios devem ser preenchidos
- Campo email deve ser válido
- Campo CPF, CNPJ deve ser válido
- Campo telefone deve estar correto
- Se todos campos estiverem corretos, o formulário pode ser enviado.

AJAX
- O conteúdo da página deve ser assíncrono, ou seja, o conteúdo deve ser inserido na página sem a necessidade do navegador web redesenhar a tela.
- A postagem do formulário com AJAX é obrigatória.

# Conteúdo Atividade 3
O Website deve realizar CRUD (Create, Retrieve, Update and Delete). O Login deve ser validado com consulta ao banco de dados e sessão.

O website deve ter os seguintes aspectos:
- Os dados do formulário devem ser postados para um script PHP para verificar novamente os dados postados, e se estiver tudo certo, o script deve cadastrá-lo no banco de dados;
- Os dados cadastrados devem ser recuperado e mostrado na forma de tabela com link para editar e remover;
- Os dados podem ser atualizados ou removidos;
- O login deve ser validado em PHP com consulta ao usuário e senha no banco de dados e se estiver correto deve ser iniciado uma sessão. A criptografia é opcional;
- Cada operação realizada deve retornar uma mensagem de sucesso ou erro;