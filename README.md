# Gallery Plus 📸

Uma aplicação moderna de gerenciamento de galeria de fotos construída com React e Fastify. Gerencie suas fotos, organize-as em álbuns e explore sua coleção com uma interface intuitiva e responsiva.

## 🚀 Características

- **Gerenciamento de Fotos**: Crie, edite, visualize e exclua fotos
- **Gerenciamento de Álbuns**: Organize suas fotos em álbuns personalizados
- **Upload de Imagens**: Faça upload de imagens com suporte a arquivos de até 50MB
- **Associação de Fotos a Álbuns**: Adicione fotos a múltiplos álbuns
- **Busca de Fotos**: Busque fotos por título
- **Filtro por Álbuns**: Filtre fotos por álbum específico
- **Visualização Detalhada**: Visualize fotos em tela cheia com navegação
- **Interface Moderna**: UI construída com TailwindCSS e componentes reutilizáveis
- **API RESTful**: Backend robusto com Fastify e validação com Zod

## 🛠️ Tecnologias

### Frontend
- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **TailwindCSS** - Framework CSS
- **React Router** - Roteamento
- **TanStack Query** - Gerenciamento de estado do servidor
- **React Hook Form** - Formulários
- **Zod** - Validação de schemas
- **Radix UI** - Componentes acessíveis
- **Sonner** - Notificações toast
- **Axios** - Cliente HTTP

### Backend
- **Fastify** - Framework web rápido
- **TypeScript** - Tipagem estática
- **Zod** - Validação de dados
- **@fastify/multipart** - Upload de arquivos
- **@fastify/static** - Servir arquivos estáticos
- **@fastify/cors** - CORS

### Ferramentas
- **pnpm** - Gerenciador de pacotes
- **tsup** - Bundler para o servidor
- **ESLint** - Linter
- **TypeScript** - Compilador

## 📋 Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **pnpm** (gerenciador de pacotes)

### Instalando o pnpm

Se você ainda não tem o pnpm instalado:

```bash
npm install -g pnpm
```

## 🏃 Como Executar

### 1. Instalar Dependências

```bash
pnpm install
```

### 2. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
VITE_API_URL=http://localhost:5799
PORT=5799
```

### 3. Executar o Servidor Backend

Em um terminal, execute:

```bash
pnpm dev-server
```

O servidor será iniciado em `http://localhost:5799` por padrão.

### 4. Executar o Frontend

Em outro terminal, execute:

```bash
pnpm dev
```

O frontend será iniciado em `http://localhost:5173` (ou outra porta disponível).

## 📁 Estrutura do Projeto

```
gallery-plus/
├── data/                    # Dados do banco (JSON) e imagens
│   ├── db.json             # Banco de dados JSON
│   └── images/             # Imagens armazenadas
├── public/                 # Arquivos públicos estáticos
│   └── images/             # Imagens de exemplo
├── server/                 # Backend (Fastify)
│   ├── albums/            # Rotas e serviços de álbuns
│   ├── photos/            # Rotas e serviços de fotos
│   ├── services/          # Serviços (database, image)
│   ├── dist/              # Build do servidor
│   └── main.ts            # Ponto de entrada do servidor
├── src/                    # Frontend (React)
│   ├── assets/            # Assets (ícones, imagens)
│   ├── components/        # Componentes reutilizáveis
│   ├── context/           # Contextos e hooks
│   │   ├── albums/        # Lógica de álbuns
│   │   └── photos/        # Lógica de fotos
│   ├── helpers/           # Funções auxiliares
│   ├── pages/             # Páginas da aplicação
│   └── main.tsx           # Ponto de entrada do frontend
├── package.json
├── vite.config.ts         # Configuração do Vite
├── tsup.config.ts         # Configuração do tsup
└── tsconfig.json          # Configuração do TypeScript
```

## 🔌 API Endpoints

### Fotos

- `GET /photos` - Lista todas as fotos (com filtros opcionais: `?albumId=xxx&q=termo`)
- `GET /photos/:id` - Obtém uma foto específica
- `POST /photos` - Cria uma nova foto (apenas título)
- `POST /photos/:id/image` - Faz upload de imagem para uma foto
- `PATCH /photos/:id` - Atualiza o título de uma foto
- `DELETE /photos/:id` - Exclui uma foto
- `PUT /photos/:id/albums` - Gerencia os álbuns de uma foto

### Álbuns

- `GET /albums` - Lista todos os álbuns
- `GET /albums/:id` - Obtém um álbum específico
- `POST /albums` - Cria um novo álbum
- `DELETE /albums/:id` - Exclui um álbum

### Outros

- `GET /health` - Health check do servidor
- `GET /images/:filename` - Serve imagens estáticas

## 📝 Scripts Disponíveis

- `pnpm dev` - Inicia o servidor de desenvolvimento do frontend
- `pnpm build` - Compila o servidor e o frontend para produção
- `pnpm preview` - Visualiza o build de produção do frontend
- `pnpm dev-server` - Inicia o servidor backend em modo watch
- `pnpm build-server` - Compila apenas o servidor backend
- `pnpm run-server` - Executa o servidor backend compilado
- `pnpm lint` - Executa o linter

## 🗄️ Banco de Dados

O projeto utiliza um banco de dados JSON simples localizado em `data/db.json`. A estrutura é:

```json
{
  "photos": [...],           // Array de fotos
  "albums": [...],           // Array de álbuns
  "photosOnAlbums": [...]    // Relacionamento muitos-para-muitos
}
```

As imagens são armazenadas fisicamente na pasta `data/images/`.

## 🎨 Componentes Principais

### Componentes Base
- `Button` - Botão reutilizável
- `Card` - Card para exibição de conteúdo
- `Dialog` - Modal/diálogo
- `Input` - Campos de entrada
- `Icon` - Componente de ícone SVG
- `Skeleton` - Loading skeleton
- `Alert` - Mensagens de alerta

### Componentes de Contexto
- `AlbumsFilter` - Filtro de álbuns
- `AlbumsListSelectable` - Lista selecionável de álbuns
- `PhotosList` - Lista de fotos
- `PhotoNavigator` - Navegação entre fotos
- `PhotoWidget` - Widget de foto

## 🔒 Validação

O projeto utiliza **Zod** para validação tanto no frontend quanto no backend, garantindo:
- Validação de tipos
- Validação de dados de entrada
- Mensagens de erro consistentes
- Type-safety em tempo de compilação

## 🚢 Build para Produção

Para criar um build de produção:

```bash
pnpm build
```

Isso irá:
1. Compilar o servidor backend em `server/dist/`
2. Compilar o frontend em `dist/`

Para executar em produção:

```bash
# Terminal 1 - Backend
pnpm run-server

# Terminal 2 - Frontend (servir a pasta dist com um servidor estático)
# Ou use o preview do Vite:
pnpm preview
```

## 🧪 Testes

A coleção Postman está disponível em `Gallery+.postman_collection.json` para testar a API.

## 📄 Licença

Este projeto é privado.

## 👥 Contribuindo

Este é um projeto privado. Para contribuições, entre em contato com os mantenedores.

## 📞 Suporte

Para questões ou problemas, abra uma issue no repositório.

---

Desenvolvido com ❤️ usando React e Fastify
