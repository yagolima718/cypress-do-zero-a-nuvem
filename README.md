# 🐾 CAC TAT – Testes E2E com Cypress

Projeto de testes end-to-end (E2E) da aplicação Central de Atendimento ao Cliente TAT, desenvolvido com Cypress.

O objetivo é validar funcionalidades de formulário, seleção de produtos, upload de arquivos e links da política de privacidade de forma modular, escalável e reutilizável.

  

## 📂 Estrutura do Projeto

  

cypress/

├─ e2e/

│ ├─ forms/

│ │ └─ form_spec.cy.js # Testes do formulário

│ ├─ products/

│ │ └─ product_spec.cy.js # Testes de seleção de produtos

│ ├─ file_upload/

│ │ └─ file_upload_spec.cy.js # Testes de upload de arquivos

│ ├─ privacy/

│ │ └─ privacy_spec.cy.js # Testes da política de privacidade

│ └─ misc/

│ └─ misc_spec.cy.js # Testes diversos e experimentais

├─ support/

│ ├─ commands.js # Comandos customizados

│ └─ selectors.js # Seletores centralizados

└─ fixtures/

└─ example.json # Arquivo de teste para upload

  

## 🧪 Funcionalidades Testadas

#### Forms

Preenchimento e envio de formulário.

Validação de campos obrigatórios e e-mails inválidos.

Comportamento do campo telefone.

Limpeza de campos após preenchimento.

#### Products

Seleção de produtos por texto, valor ou índice.

File Upload

Upload de arquivo via fixture.

Drag-and-drop.

Uso de alias para fixtures.

#### Privacy

Validação do link da política de privacidade.

Remoção de target="_blank" para navegação direta.

#### Misc

Radio buttons e checkboxes.

Mostrar/ocultar mensagens usando .invoke().

Requisições HTTP (cy.request) e validação de retorno.

Manipulação de elementos escondidos.

## ⚡ Comandos Customizados

|**Comando: /Descrição** |

1.| `cy.fillForm({ firstName, lastName, email, phone, message })` |

|*Preenche o formulário com os campos fornecidos |*

2.| `cy.submitForm()` |

|*Clica no botão de envio do formulário |*

3.| `cy.fillMandatoryFieldsAndSubmit()` |

|*Preenche os campos obrigatórios e envia o formulário automaticamente |*

  

## 🚀 Configuração do Projeto

1. Clonar repositório:
```bash
git clone <URL_DO_REPOSITORIO>

cd <NOME_DO_PROJETO>
``` 
2. Instalar dependências:
```bash 
 npm install
 ````
 3. Instalar Cypress (se ainda não estiver):
```bash
npm install cypress --save-dev
``` 
4. Scripts disponíveis no `package.json`:
```bash
"scripts": {
  "cypress:open": "cypress open",
  "cypress:run": "cypress run"
}
```

`npm run cypress:open` → abre interface gráfica para rodar testes individualmente.
`npm run cypress:run` → executa todos os testes em modo headless no terminal.

## 🎯 Boas Práticas
-   Usar **seletores centralizados** (`selectors.js`).
-   Evitar duplicação de código com **comandos customizados** (`commands.js`).
-   Testes curtos e claros, separados por funcionalidade.
-   Separar **UI tests** e **API tests** quando necessário.

## 📌 Observações
-   Os arquivos antigos foram removidos e o projeto atualizado.
-   Subir no GitHub com `git add . && git commit -m "estrutura nova"` vai deletar os testes antigos do repositório remoto. 
## 📝 License
MIT