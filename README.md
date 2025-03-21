### URL do Figma

[Lorem Ipsum](https://www.figma.com/file/JRDDc3aN6uiBS3yvjbkk0s/Lorem-ipsum?node-id=0%3A1&t=cLtQmBowNmb4V0jP-1)

Acesse o projeto no Figma

Passos para Implementação

### 1. Explorar os Dados

Acesse o arquivo data.js e explore o array disponível.

### 2. Criar o Estado count

No arquivo App.jsx, configure um estado count utilizando o hook useState. Defina o valor inicial como 1.

### 3. Criar o Formulário

Configure um elemento <form> contendo um campo de entrada numérica e um botão de envio.

Atribua o estado count ao campo de entrada usando a propriedade value.

Crie uma função handleChange para atualizar o estado count sempre que o valor do campo for alterado.

Defina os seguintes limites para o campo:

Mínimo: 1

Máximo: 8

Passo: 1

### 4. Importar o Texto e Criar Estado

Importe o array text do arquivo data.js.

Configure um estado text utilizando useState.

Defina o valor inicial como um array vazio [].

### 5. Implementar a Função handleSubmit

Associe um evento onSubmit ao formulário.

Crie a função handleSubmit para gerenciar o envio do formulário.

Dentro da função:

Utilize event.preventDefault() para evitar o recarregamento da página.

Recupere o valor do estado count.

Use array.slice() para extrair os primeiros n parágrafos do array text (onde n é o valor do estado count).

Atualize o estado text com o novo array gerado.

Dica: A função array.slice() será útil para isso.

### 6. Renderizar o Texto

Exiba os parágrafos armazenados no estado text logo abaixo do formulário.

Utilize o método .map() para iterar sobre o array e renderizar cada parágrafo.

Use a biblioteca nanoid para gerar identificadores únicos para cada parágrafo (veja mais detalhes abaixo).

Fluxo Geral da Aplicação

Configurar o estado count no App.jsx.

Criar um formulário contendo um campo numérico e um botão de envio.

Importar o array text do data.js e configurar o estado text.

Criar a função handleSubmit para processar o envio do formulário.

Renderizar os parágrafos abaixo do formulário, utilizando map() e nanoid.

Informações Adicionais

array.slice()

O método slice() do JavaScript cria uma cópia parcial de um array e retorna um novo array. Ele recebe dois parâmetros: o índice inicial (inclusivo) e o índice final (exclusivo) dos elementos a serem copiados.

Exemplo:

No exemplo acima, slice(1, 4) copia os elementos do índice 1 ao 3 (o índice 4 não é incluído).

nanoid

A nanoid é uma biblioteca pequena, rápida e segura para gerar IDs únicos em JavaScript.

Instalação:

Uso:

A nanoid é útil para garantir que cada elemento tenha um identificador único, evitando colisões mesmo quando muitos IDs são gerados.

