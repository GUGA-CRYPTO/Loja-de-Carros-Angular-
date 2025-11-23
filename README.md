# Luxury Estilizado - Plataforma de Aluguel de Carros

Luxury Estilizado é uma plataforma de e-commerce para aluguel de carros de luxo, desenvolvida com Angular. O projeto foi criado para demonstrar habilidades em desenvolvimento front-end, implementando uma aplicação completa com vitrine de produtos, autenticação de usuário, carrinho de compras e um painel administrativo protegido para gerenciamento.

Este projeto simula um ambiente de produção real, utilizando um mock server para a API e seguindo as melhores práticas de arquitetura de software, como componentização, serviços e roteamento com guardas de autenticação.

---

## ✨ Funcionalidades

- **Autenticação de Usuário:** Sistema de login seguro para clientes e administradores.
- **Catálogo Dinâmico de Veículos:** Exibição dos carros de luxo, com dados consumidos a partir de uma API REST simulada.
- **Carrinho de Compras:** Adicione e gerencie os veículos selecionados para aluguel.
- **Painel de Administração Protegido:**
  - Acesso restrito apenas a usuários autenticados com perfil de administrador.
  - **Gerenciamento de Veículos (CRUD):** Crie, edite e remova veículos do catálogo.
  - **Gerenciamento de Clientes:** Visualize e gerencie os clientes cadastrados na plataforma.
- **Design Responsivo:** Interface moderna e adaptável a diferentes tamanhos de tela.

---

💻 Tecnologias Utilizadas

- **Front-End:**
  - **Angular** (^20.2.0)
  - **TypeScript**
  - **RxJS** (Programação Reativa)
  - HTML5 e CSS3

- **Back-End (Simulado):**
  - **JSON Server** para simular uma API RESTful.

- **Ferramentas de Desenvolvimento:**
  - **Angular CLI**
  - **Node.js**

---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para rodar o projeto em seu ambiente local.

**Pré-requisitos:**
- [Node.js](https://nodejs.org/en/) (versão LTS recomendada)
- [Angular CLI](https://angular.io/cli)

**Instalação:**

1.  Clone o repositório:
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    ```

2.  Navegue até o diretório do projeto:
    ```bash
    cd OficialPI/Luxury Estilizad/ProjetoPI
    ```

3.  Instale as dependências:
    ```bash
    npm install
    ```

**Execução:**

1.  Inicie o mock server (API):
    *Em um terminal, execute o comando:*
    ```bash
    npm run json-server
    ```
    *O servidor da API estará disponível em `http://localhost:3000`.*

2.  Inicie a aplicação Angular:
    *Em **outro** terminal, execute o comando:*
    ```bash
    npm start
    ```
    *A aplicação estará disponível em `http://localhost:4200`.*

---

## 🏛️ Estrutura do Projeto

A estrutura de pastas segue o padrão do Angular CLI, com algumas adições para organizar a lógica da aplicação:

```
src/app/
├── admin/          # Componentes do painel administrativo
├── guards/         # Guardas de rota (auth.guard.ts)
├── services/       # Serviços para lógica de negócio (auth, car, cart, client)
├── shared/         # Componentes compartilhados (header, footer)
└── types/          # Tipagem de dados (car.ts, client.ts)
```

- **`admin/`**: Contém os módulos e componentes exclusivos da área administrativa, como formulários de carros e gerenciamento de clientes.
- **`guards/`**: Implementa a lógica de proteção de rotas, garantindo que apenas usuários autorizados acessem o painel de administração.
- **`services/`**: Centraliza a comunicação com a API e a lógica de negócio, desacoplando os componentes da fonte de dados.
- **`shared/`**: Armazena componentes reutilizáveis em toda a aplicação.

---

## 👤 Autor

**[Seu Nome Completo]**

- LinkedIn: [https://www.linkedin.com/in/seu-usuario/](https://www.linkedin.com/in/seu-usuario/)
- GitHub: [https://github.com/seu-usuario](https://github.com/seu-usuario)
- Email: seu.email@exemplo.com