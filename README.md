# Javascript I

### O objetivo desse módulo é apresentar às alunas conceitos básicos de javascript, tais como variáveis, condicionais, loops, objetos e funções e manipulação do DOM.

![javascript](images/javascript.gif)

***

* [Primeira aula (15/04)](#primeira-aula---1504)
  * [Variáveis](#variáveis)
  * [Comentários](#comentários)
  * [Operadores aritméticos](#operadores-aritméticos)
  * [Operadores de atribuição](#operadores-de-atribuição)
  * [Operadores de comparação](#operadores-de-comparação)
  * [Operadores lógicos](#operadores-lógicos)
  * [Data types](#data-types)
  * [Palavras reservadas](#palavras-reservadas)
  * [Case sensitive](#case-sensitive)
  * [Nomenclatura](#nomenclatura)
  * [Chamando o JS dentro do HTML](#chamando-o-js-dentro-do-html)
  * [Manipulação do DOM](#manipulação-do-dom)
    - [DOM](#dom)
    - [getElementById()](#getelementbyid)
    - [getElementsByClassName()](#getelementsbyclassname)
    - [getElementsByTagName()](#getelementsbytagname)
    - [querySelector()](#queryselector)
    - [querySelectorAll()](#queryselectorall)
  * [console.log() e alert()](#consolelog-e-alert)
  * [if/else if/else](#ifelse-ifelse)
  * [Exercícios](#)

***

* [Segunda aula (16/04)](#segunda-aula---1604)
  * [Switch case](#switch-case)
  * [Do while](#do-while)
  * [For](#for)
  * [addEventListener()](#addeventlistenerclick)
    - [click](#click)
    - [mouseover](#mouseover)
  * [removeEventListener()](#removeeventlistener)
  * [Exercícios](#exercícios-1)

***

* [Terceira aula (17/04)](#terceira-aula---1704)
  * [Arrays](#arrays)
  * [Objetos](#objetos)
  * [Funções](#funções)
  * [Exercícios](#exercícios-2)

***

* [Quarta aula (18/04)](#quarta-aula---1804)
  * [Projeto: Pedra, papel, tesoura, lagarto e spock](#exercícioprojeto)

***

### Primeira aula - 15/04


#### Mundo real e mundo Javascript
(exemplo do semáforo de trânsito)


#### Variáveis
No computador, uma variável é um espaço de memória que vai ser preenchido por algum valor variável. Na maioria dos casos, o valor variável vai ser definido pelo usuário.

Exemplo: Você faz o cadastro em um site, preenchendo um formulário com seu {nome} e depois quando você está logado na página você visualiza seu nome na página.

![sem variavel](images/var-1.png)

![cadastro](images/var-3.png)

![variavel](images/var-2.png)



#### Comentários
Comentar o código serve para deixar mensagens importantes para você e para outro programador que vai ler seu código.

Em JavaScript você pode fazer comentários de duas formas:

- Comentário em uma linha

```js
// Comentário simples de uma linha
```

- Comentário de múltiplas linhas

```js
/* Comentário
 de múltiplas
 linhas */
```

#### Operadores aritméticos

- Soma `+`
- Subtração `-`
- Multiplicação `*`
- Divisão `/`
- Exponenciação `**`
- Módulo (resto da divisão) `%`
- Incremento `++`
- Decremento `--`


#### Operadores de atribuição

- Igual `=`
- Adiciona valor `+=`
- Subtrai valor `-=`
- Multiplica valor `*=`
- Divide valor `/=`


#### Operadores de comparação

- Igual a `==` `===` (mesmo valor e mesmo tipo)
- Não é igual a `!=` `!==` (mesmo valor e mesmo tipo)
- Maior que `>`
- Menor que `<`
- Maior ou igual que `>=`
- Menor ou igual que `<=`
- Operador ternário `?`
-

#### Operadores lógicos
- E `&&`
- Ou `||`
- Não/negação `!`

#### Data types
- String
- Number
- Boolean
- Function
- Array
- Object
- Undefined
- Null


#### Palavras reservadas

```js
let let = 'nome da variável';
```


#### Case sensitive
Palavras que começam com letra maiúscula e minúscula são consideradas diferentes pelo JavaScript.

```js
let primeiroNome = 'Patricia';
let primeironome = 'Fernanda';
```

#### Nomenclatura

É importante seguir um padrão para nomemclatura de nomes de variáveis.
Existem 3 padrões de nomemclatura:

- underscore, com todas as letras minúsculas

```js
let primeiro_nome = 'Patricia';
```

- upper camelcase, todas inicias maiúsculas

```js
let PrimeiroNome = 'Patricia';
```

- lower camelcase, primeira letra minúscula e todas as inicias das próximas palavras maiúsculas

```js
let primeiroNome = 'Patricia';
```

```
**Importante:**
Não utilizar hífen, nem espaços e nem caracteres especiais para separar nomes de variáveis.
```

***

### Chamando o JS dentro do HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/script.js"></script>
  </head>
  <body>
    <h1>Título</h1>
    <p>Parágrafo</p>
  </body>
</html>
```

***

### Manipulação do DOM

#### DOM

DOM = Document Object Model

O DOM é uma interface que representa como os documentos HTML e XML são lidos pelo seu browser. Após o browser ler seu documento HTML, ele cria um objeto que faz uma representação estruturada do seu documento e define meios de como essa estrutura pode ser acessada. Nós podemos acessar e manipular o DOM com JavaScript.

![variavel](images/dom.png)



#### getElementById()

Esse método retorna o elemento que estiver contendo o nome do ID passado. Como os IDs devem ser únicos, é um método muito útil para pegar apenas o elemento desejado.

```html
<div>
  <input type="text" id="textInput" class="text-input"  />
</div>
```

```js
let getInputId = document.getElementsById('textInput');
```

#### getElementsByClassName()

```html
<div>
  <input type="text" id="textInput" class="text-input"  />
</div>
```

```js
let getInputClass = document.getElementsByClassName('text-input');
```


#### getElementsByTagName()

```html
<div>
  <input type="text" id="textInput" class="text-input" />
</div>
```

```js
let getInputTag = document.getElementsByTagName('input');
```


#### querySelector()
```html
<div>
  <input type="text" id="textInput" class="text-input" />
</div>
```

```js
let getInputId = document.querySelector('textInput');
let getInputTag = document.querySelector('input');
let getInputClass = document.querySelector('text-input');
```


#### querySelectorAll()
```html
<div>
  <input type="text" id="textInput" class="text-input" />
</div>
```

```js
let getInputId = document.querySelector('textInput');
let getInputTag = document.querySelector('input');
let getInputClass = document.querySelector('text-input');
```


#### console.log() e alert()

```js
let getInputId = document.getElementsById('textInput');
console.log(getInputId)
```

```js
let getInputId = document.getElementsById('textInput');
alert(getInputId)
```

#### if/else if/else

```js
if (condição) {
  // se a condição for verdadeira, o código aqui dentro será executado
}
```

```js
if (condição) {
  // se a condição for verdadeira, o código aqui dentro será executado
} else {
  // se a primeira condição não for verdadeira, o código aqui dentro será executado
}
```

```js
if (condição) {
  // se a condição for verdadeira, o código aqui dentro será executado
} else if (condição) {
  // se a condição anterior não for verdadeira, o código aqui dentro será executado
} else {
  // se a condição anterior não for verdadeira, o código aqui dentro será executado
}
```

#### Exercícios

https://github.com/reprograma/T7-javascript-I/blob/master/Exercicios-primeira-aula/exercicios.md

***


### Segunda aula - 16/04

#### Switch case

```js
switch(expressão) {
  case x:
    // se a condição for verdadeira, o código aqui dentro será executado
    break;
  case y:
    // se a condição anterior não for verdadeira, o código aqui dentro será executado
    break;
  default:
    // se a condição anterior não for verdadeira, o código aqui dentro será executado
}
```

#### Do while

```js
while (condição) {
  // enquanto a condição for verdadeira, o código aqui dentro será executado
}
```

#### For
https://gomakethings.com/looping-through-arrays-the-es6-way/

for (var i = 0; i < sandwiches.length; i++) {
	console.log(i); // index
	console.log(sandwiches[i]); // value
}

sandwiches.forEach(function (sandwich, index) {
	console.log(index); // index
	console.log(sandwich); // value
});


#### addEventListener()
Os elementos DOM além de possuirem métodos também possuem eventos. São eles que fazem a interatividades dos elementos no documento.


##### click

```html
<div>
  <button id="button" />
</div>
```

```js
let getButtonId = document.getElementsById('button');

getButtonId.addEventListener('click', function(event) {
    // quando o botão for clicado esse código será executado
  }, false);
```

##### mouseover

```html
<div>
  <button id="button" />
</div>
```

```js
let getButtonId = document.getElementsById('button');

getButtonId.addEventListener('mouseover', function(event) {
    // quando o mouse passar por cima do botão esse código será executado
  }, false);
```


#### Exercícios

https://github.com/reprograma/T7-javascript-I/blob/master/Exercicios-segunda-aula/exercicios.md

***

### Terceira aula - 17/04

#### Arrays

```js
let sanduicheMortadela = "Mortadela";
let sanduicheRosbife = "Rosbife";
let sanduicheVegetariano = "Vegetariano";
```

```js
let sanduiches = ["Mortadela", "Rosbife", "Vegetariano"];
```

```js
sanduiches[0]; // retorna "Mortadela"
```


#### Objetos

```js
let sanduiche = {
    nome: "Mortadela",
    estilo: "carnivoro",
    preco: "5",
    disponibilidade: true
};
```

#### Funções

```js
function nomeDaFuncao (parametros) {
  // código que vai ser executado quando a função for chamada
}

nomeDaFuncao();
```

#### Exercícios

https://github.com/reprograma/T7-javascript-I/blob/master/Exercicios-terceira-aula/exercicios.md

***

### Quarta aula - 18/04

#### Exercício/projeto: Pedra, papel, tesoura, lagarto e spock

https://github.com/reprograma/T7-javascript-I/blob/master/Exercicios-quarta-aula/exercicio.md
