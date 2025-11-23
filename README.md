# Loja-de-Carros-Angular-

LuxuryCars: Simulação de E-commerce de Veículos Premium

Luxury Estilizado é uma plataforma de e-commerce para aluguel de carros de luxo, desenvolvida com Angular. O projeto foi criado para demonstrar habilidades em desenvolvimento front-end, implementando uma aplicação completa com vitrine de produtos, autenticação de usuário, carrinho de compras e um painel administrativo protegido para gerenciamento.

Este projeto **simula um ambiente de produção real** de uma plataforma de aluguel de carros de luxo. Ele foi desenvolvido com foco estrito em **Arquitetura de Software Sólida**, **Padrões de Projeto** e o uso de **Programação Reativa (RxJS)** para demonstrar proficiência no desenvolvimento **Front-End com Angular** e suas melhores práticas.

A aplicação utiliza um **Mock Server** para simular uma API RESTful completa, permitindo o desenvolvimento e testes em um ambiente totalmente controlado e desacoplado.

-----
 Destaques Técnicos para Recrutadores

O projeto é uma vitrine para as seguintes competências:

- Arquitetura Orientada a Componentes:** Estrutura modular e coesa seguindo o padrão **Single Responsibility Principle (SRP)**, facilitando a manutenção e escalabilidade.
- Gestão de Estado com Programação Reativa (RxJS):** Uso de *Observables* e *Subjects* para gerenciar o estado da aplicação (como o carrinho de compras e dados do usuário) de forma assíncrona, robusta e eficiente.
- Proteção de Rotas com *Guards*:** Implementação de **Guardas de Autenticação (`CanActivate`)** para proteger rotas administrativas, garantindo que apenas usuários com o perfil de `admin` tenham acesso.
- Separação de Preocupações (*Separation of Concerns*):** A lógica de negócio e a comunicação com a API estão totalmente isoladas em **Serviços** dedicados, mantendo os componentes "burros" e focados apenas na interface.
- Simulação de Ambiente de *Back-End*:** Utilização de **JSON Server** para construir rapidamente um *mock* da API, incluindo rotas, autenticação e operações **CRUD**, imitando um ambiente real.

-----

##  Principais Funcionalidades Implementadas

- Sistema de Autenticação Completo:** Login e *logout* para perfis de **Cliente** e **Administrador**.
- Catálogo Dinâmico de Veículos:** Busca e exibição de dados de veículos consumidos de forma **assíncrona** a partir da API simulada.
- Gestão de Carrinho de Compras:** Funcionalidade completa de adição, remoção e visualização dos itens selecionados.
- Painel Administrativo Restrito:**
- Módulo CRUD de Veículos: Permite que o administrador crie, visualize, atualize e exclua carros do catálogo (`POST`, `GET`, `PUT`, `DELETE`).
- Gestão de Clientes: Visualização e manipulação dos dados de clientes cadastrados.
- Design Responsivo (*Mobile First*):Interface totalmente adaptável a qualquer dispositivo, garantindo uma experiência de usuário consistente.

-----

##  Stack Tecnológica

| Categoria | Tecnologia | Versão | Notas Técnicas |
| :--- | :--- | :--- | :--- |
| **Framework** | **Angular** | ^20.2.0 | Base para a arquitetura Front-End. |
| **Linguagem** | **TypeScript** | | Essencial para tipagem estática e detecção de erros em tempo de compilação. |
| **Reatividade** | **RxJS** | | Utilizado para fluxos de dados assíncronos e reativos. |
| **API Mock** | **JSON Server** | | Simulação de API RESTful para ambiente de desenvolvimento. |
| **Build Tools** | **Angular CLI** / **Node.js** | | Ferramentas padrão para desenvolvimento e *bundling* de aplicações Angular. |

-----

 Como Iniciar o Projeto Localmente

Siga estas instruções para colocar o ambiente para rodar em sua máquina.

### Pré-requisitos

[Node.js](https://nodejs.org/en/) (Versão LTS recomendada)
[Angular CLI](https://angular.io/cli) (Instalado globalmente via npm)

### Instalação e Configuração

1.  **Clone o repositório:**

    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    ```

2.  **Acesse o diretório do projeto:**

    ```bash
    cd OficialPI/Luxury Estilizad/ProjetoPI
    ```

3.  **Instale todas as dependências:**

    ```bash
    npm install
    ```

### Execução

O projeto requer que o *Mock Server* e a aplicação Angular rodem em terminais separados:

1.  **Inicie o Mock Server (API):**
    *Abra o **primeiro** terminal e execute:*

    ```bash
    npm run json-server
    ```

    > O servidor da API estará ativo em `http://localhost:3000`.

2.  Inicie a Aplicação Angular:
    *Abra o **segundo** terminal e execute:*

    ```bash
    npm start
    ```

    > A aplicação estará acessível em seu navegador em `http://localhost:4200`.

-----
 Estrutura de Diretórios (Visão de Arquitetura)

A organização das pastas foi planejada para refletir a **Separação de Preocupações**, uma prática crucial para projetos de médio a grande porte:

```
src/app/
├── admin/          # Módulos e Componentes Exclusivos da Área Administrativa (Protegida)
├── guards/         # Lógica de Proteção de Rotas (AuthGuard)
├── services/       # Lógica de Negócio e Interação com a API (Ex: AuthService, CarService)
├── shared/         # Componentes Reutilizáveis (Header, Footer, Inputs padronizados)
└── types/          # Definições de Tipagem com TypeScript (Interfaces para Carro, Cliente, etc.)
```

Essa estrutura garante que a aplicação seja coesa, onde cada diretório tem uma responsabilidade bem definida.

-----

 👤 Desenvolvedor

**Gustavo Santos Ferreira**

LinkedIn: www.linkedin.com/in/gustavo-santos-104877315
Email: gu.santos251@gmail.com


