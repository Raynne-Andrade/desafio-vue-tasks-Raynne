# Gerenciador de Tarefas - Vue 3 + Pinia

Aplicação desenvolvida em Vue3 + Pinia + Tailwind

## Funcionalidades Implementadas

- **Adicionar Tarefas**: Crie novas tarefas com título e descrição opcional
- **Editar Tarefas**: Modifique o título e descrição de tarefas existentes
- **Remover Tarefas**: Delete tarefas com confirmação
- **Marcar como Concluída**: Alterne o status de conclusão das tarefas
- **Persistência Local**: Todas as tarefas são salvas automaticamente no `localStorage`
- **Filtros de Tarefas**: Visualize todas, apenas concluídas ou apenas pendentes
- **Feedback Visual**: Loading spinner durante operações assíncronas
- **Responsividade**: Layout adaptável para dispositivos móveis e desktop
- **Interface Moderna**: Estilização com Tailwind CSS

## Estrutura do Projeto

```
vue-task/
├── src/
│   ├── components/
│   │   ├── TodoForm.vue        # Modal de formulário para adicionar/editar tarefas
│   │   ├── TodoItem.vue        # Componente individual de tarefa
│   │   └── TodoList.vue        # Lista de tarefas 
│   │   └── Filter.vue          # Filtros de concluidos, pendentes e todos
│   │   └── ModalDeleteTodo.vue # Modal de confirmação para deletar todo
│   │   └── loading.vue         # Loading reutilizavel em todas as páginas
│   ├── stores/
│   │   └── todoStore.js       # Store Pinia para gerenciamento de estado
│   ├── App.vue                # Componente raiz
│   └── main.js               
│   └── main.css               # Style global
├── index.html
├── vite.config.js
└── package.json
```

## Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|------------|--------|----------|
| **Vue.js** | 3.5.22 | Framework JavaScript progressivo |
| **Pinia** | 3.0.3 | Gerenciamento de estado global |
| **Tailwind CSS** | 4.1.16 | Framework CSS utilitário |
| **Vite** | 7.1.12 | Build tool e dev server |

## Como Executar

### Pré-requisitos

- Node.js 18+ instalado
- npm ou pnpm

### Instalação

```bash
# Clonar ou acessar o projeto
git clone https://github.com/Raynne-Andrade/vue-task.git

# Instalar dependências
npm install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev
```

O servidor estará disponível em `http://localhost:5173/`

### Build para Produção

```bash
# Compilar para produção
npm run build

# Visualizar build de produção
npm run preview
```

## Guia de uso

### Adicionar uma Tarefa

1. Preencha o campo "Título" com o nome da tarefa
2. (Opcional) Adicione uma descrição no campo "Descrição"
3. Clique em "Adicionar Tarefa"

### Editar uma Tarefa

1. Clique no ícone de lápis (✏️) na tarefa desejada
2. Modifique o título e/ou descrição no modal que aparecerá
3. Clique em "Salvar Edição"

### Marcar como Concluída

1. Clique no checkbox ao lado da tarefa
2. A tarefa será marcada como concluída (com fundo verde e texto riscado)

### Remover uma Tarefa

1. Clique no ícone de lixeira (🗑️) na tarefa desejada
2. Confirme a remoção no modal de confirmação

### Filtrar Tarefas

Use os botões de filtro na seção "Minhas Tarefas":

- **Todas**: Exibe todas as tarefas
- **Pendentes**: Exibe apenas tarefas não concluídas
- **Concluídas**: Exibe apenas tarefas concluídas

## Persistência de Dados

As tarefas são automaticamente salvas no **localStorage** do navegador. 
