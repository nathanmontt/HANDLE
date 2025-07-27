# HANDLE

Um experimento _fashionista_.

### ÍNDICE

* [Sobre o Projeto](#about)
* [Linguagens](#langs)
* [Setup](#setup)
* [Créditos](#credits)

<h1 id="about">Sobre o Projeto</h1>

*HANDLE* foi criado com o intuito de estudo. Inicialmente, o "estudar a _framework_ **ReactJS**" foi (e está sendo) feito. Agora, colocando a prova desses estudos, surge o projeto. Ele trás em si uma simples _landing page_ que conta a história de uma empresa de roupas experimentais.


<h1 id="langs">Linguagens</h1>

Tendo o intuito de treinar o uso da _framework_ **ReactJS**, outra linguagem usada para estilos foi **TailwindCSS**.


<h1 id="setup">Setup do Projeto</h1>

#### Instalação

```sh
npm install
npm run dev
```

#### Instalação de Dependências
```sh
npm install tailwindcss @tailwindcss/vite
```

#### Configurando o Vite Plugin
```sh
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

#### Importando TailwindCSS
Colocar em um arquivo ```.css``` para utilizar
```sh
@import "tailwindcss";
```

#### Compilação e _"Minify"_  Production

```sh
npm run build
```


<h1 id="credits"> Créditos </h1>

Copyright © 2025, Nathan Monteiro
