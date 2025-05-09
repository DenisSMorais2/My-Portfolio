# Skills Carousel - React Component

Este repositório contém um componente React chamado `Skills`, que exibe um carrossel de habilidades de programação, representadas por ícones de linguagens de programação. O componente utiliza a biblioteca `react-multi-carousel` para criar um carrossel responsivo e interativo, com animações e navegação personalizada.

## Visão Geral

O componente `Skills` é projetado para exibir as habilidades do desenvolvedor, apresentando ícones que representam diferentes linguagens de programação e suas respectivas descrições. O carrossel é responsivo, adaptando-se a vários tamanhos de tela (desktop, tablet, mobile), e é visualmente apelativo, com transições animadas para uma experiência de usuário aprimorada.

### Funcionalidades Principais:

- Exibição de habilidades com ícones.
- Carrossel responsivo que se ajusta automaticamente a diferentes tamanhos de tela.
- Navegação personalizada com setas.
- Animação de entrada para a seção de habilidades.
- Texto explicativo sobre o desenvolvedor e suas habilidades.

## Tecnologias Utilizadas

Este projeto é construído com as seguintes tecnologias:

- **React.js**: Biblioteca JavaScript para construir interfaces de usuário interativas.
- **react-multi-carousel**: Biblioteca para criar carrosséis altamente customizáveis e responsivos.
- **CSS/SCSS**: Usado para estilização do componente e da página.
- **React Icons** (opcional, se for necessário adicionar ícones de fontes específicas).


## Como Rodar o Projeto

### Pré-requisitos

Antes de rodar o projeto, certifique-se de ter o Node.js e o npm (ou Yarn) instalados em sua máquina. Você pode baixar o Node.js em [https://nodejs.org/](https://nodejs.org/).

### Instalar as Dependências

1. Clone o repositório para sua máquina local:

```bash
   git clone https://github.com/DenisSMorais2/My-Portfolio.git
```
Acesse o diretório do projeto:

```bash
    cd seu-repositorio
``` 
Instale as dependências necessárias:

Usando npm:

````bash
    npm install
````
Rodar o Projeto
Após instalar as dependências, você pode rodar o servidor de desenvolvimento:

Usando npm:

```bash
    npm start
```

O aplicativo será executado em `http://localhost:3000` no seu navegador.

## Como Funciona o Componente Skills
O componente Skills exibe um carrossel de habilidades com ícones representando diferentes linguagens de programação. Cada ícone tem um título e é exibido dentro de um carousel responsivo. O carrossel é configurado para exibir 1 item por vez em dispositivos móveis, 2 itens em tablets, 3 itens em desktops e até 5 itens em telas grandes.

## Estrutura do Componente Skills:
Carousel: Utiliza o componente Carousel da biblioteca `react-multi-carousel` para exibir as habilidades de forma `interativa` e `responsiva`.

`Imagens`: Cada habilidade é representada por uma imagem SVG que é carregada da pasta assets.

`Animação`: O componente aplica animações utilizando a biblioteca wow.js para adicionar efeito de zoom à entrada da seção.

`Responsividade`: A configuração responsive do carrossel ajusta o número de itens visíveis conforme o tamanho da tela.

## Props:
O componente Skills não requer props externas, pois as habilidades estão predefinidas diretamente no código. Contudo, o carrossel é configurado para se ajustar automaticamente ao tamanho da tela com a propriedade responsive.


