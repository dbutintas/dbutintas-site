# D&Bu Tintas — Site Institucional

Site institucional da **D&Bu Tintas**, loja especializada em tintas automotivas, vernizes, primers, massas, lixas, acessórios para pintura e acerto de cor personalizado, localizada no Jardim Ester Yolanda, em São Paulo.

O site apresenta a empresa, seus diferenciais, categorias de produtos, marcas trabalhadas, serviço especializado de acerto de cor e canais de atendimento, com foco em funilarias, oficinas mecânicas, pintores automotivos, empresas e clientes particulares.

Construído com **React 18 + TypeScript + Vite**, estilizado com **Tailwind CSS**, animado com **Framer Motion** e utilizando **Lucide React** para ícones — sem bibliotecas prontas de componentes.

---

## Índice

- [Entrega e credenciais de acesso](#entrega-e-credenciais-de-acesso)
- [Stack técnica](#stack-técnica)
- [Como rodar o projeto](#como-rodar-o-projeto)
- [Scripts disponíveis](#scripts-disponíveis)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Identidade visual](#identidade-visual)
- [Responsividade](#responsividade)
- [Seções do site](#seções-do-site)
- [Navegação e arquitetura](#navegação-e-arquitetura)
- [Formulário e canais de contato](#formulário-e-canais-de-contato)
- [Catálogo, marcas e promoções](#catálogo-marcas-e-promoções)
- [Fotos e imagens](#fotos-e-imagens)
- [Manutenção comum](#manutenção-comum-como-alterar-o-quê)
- [Deploy pela Hostinger](#deploy-pela-hostinger)

---

## Entrega e credenciais de acesso

Projeto desenvolvido para a D&Bu Tintas. As credenciais de acesso são entregues separadamente ao cliente e, por segurança, não ficam registradas neste repositório.

| Acesso | O que é | Status |
|---|---|---|
| **GitHub** | Acesso ao repositório do código-fonte do site | ✅ Enviado |
| **Hostinger** | Acesso ao painel de hospedagem, gerenciamento dos arquivos e domínio | ✅ Enviado |
| **Domínio** | Endereço utilizado para acessar o site | ✅ Enviado |

**Canal de envio:** grupo do WhatsApp com o cliente.  
**Data de envio:** 11/11/2026

> ⚠️ Nunca registre senhas, tokens ou outras credenciais diretamente neste repositório. Recomenda-se que o cliente altere as senhas após receber os acessos e habilite autenticação em duas etapas (2FA), quando disponível.

---

## Stack técnica

| Camada | Tecnologia |
|---|---|
| Framework | React 18 |
| Linguagem | TypeScript |
| Build tool | Vite 8 |
| Estilização | Tailwind CSS 3 |
| Roteamento | React Router DOM 7 |
| Animações | Framer Motion 11 |
| Ícones | Lucide React |
| Tipografia | Sora (títulos) + Inter (corpo) — fontes locais via `@fontsource` |
| Pós-processamento CSS | PostCSS + Autoprefixer |
| Lint | Oxlint |

**Pré-requisitos:** Node.js e npm instalados na máquina.

As dependências e suas versões estão registradas em `package.json` e `package-lock.json`.

## Como rodar o projeto

Após clonar o repositório, entre na pasta do projeto e execute:

```bash
# instalar as dependências
npm install

# iniciar o ambiente de desenvolvimento
npm run dev

# gerar o build de produção
npm run build

# visualizar o build de produção localmente
npm run preview

# executar a análise estática do código
npm run lint
```

O ambiente de desenvolvimento é disponibilizado pelo Vite em:

`http://localhost:5173`

Caso a porta esteja ocupada, o Vite poderá utilizar a próxima porta disponível.

**Observação sobre Windows:** os scripts do `package.json` chamam os executáveis do Vite, TypeScript e Oxlint diretamente pelo Node.js. Essa configuração evita problemas com os atalhos `.cmd` do npm quando o caminho da pasta contém o caractere especial `&`, como em `d&bu`.

Se a pasta for renomeada para remover o `&`, os scripts também poderão ser revisados futuramente.

## Scripts disponíveis

| Script | O que faz |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento do Vite com atualização automática durante a edição |
| `npm run build` | Executa a checagem de tipos do TypeScript (`tsc -b`) e gera o build otimizado de produção em `dist/` |
| `npm run preview` | Disponibiliza localmente o conteúdo já compilado em `dist/`, permitindo conferir a versão de produção |
| `npm run lint` | Executa o Oxlint para análise estática do código |

## Estrutura de pastas

```text
src/
├── assets/
│   └── images/
│       ├── loja/             # Fotos da loja e do serviço de acerto de cor
│       ├── produtos/         # Imagens de produtos e marcas
│       └── logo.jpeg         # Logo da empresa
│
├── components/
│   ├── layout/               # Header, menu mobile, Footer e botão flutuante do WhatsApp
│   ├── sections/             # Seções que compõem a página inicial
│   └── ui/                   # Componentes reutilizáveis de interface
│       └── icons/            # Ícones personalizados
│
├── data/                     # Conteúdos centralizados do site
│   ├── brands.ts             # Marcas trabalhadas
│   ├── catalog.ts            # Categorias de produtos
│   ├── contact.ts            # Dados de contato
│   ├── differentials.ts      # Diferenciais da empresa
│   ├── navigation.ts         # Links de navegação
│   └── promotions.ts         # Destaques e condições comerciais
│
├── hooks/                    # Hooks personalizados
│   └── useScrollToHash.ts    # Gerenciamento de rolagem por âncoras
│
├── layouts/
│   └── MainLayout.tsx        # Estrutura compartilhada: Header, conteúdo, Footer e WhatsApp
│
├── pages/
│   ├── Home.tsx              # Página principal
│   └── NotFound.tsx          # Página de erro 404
│
├── routes/
│   └── AppRouter.tsx         # Configuração das rotas com React Router
│
├── services/
│   ├── contactForm.ts        # Construção das mensagens do formulário
│   └── whatsapp.ts           # Geração dos links de WhatsApp
│
├── types/                    # Tipos compartilhados do TypeScript
│   ├── navigation.ts
│   └── product.ts
│
├── utils/                    # Funções auxiliares
│   ├── cn.ts                 # Concatenação de classes CSS
│   └── icons.tsx             # Resolução de ícones
│
├── App.tsx                   # Componente principal
├── index.css                 # Estilos globais e diretivas Tailwind
└── main.tsx                  # Ponto de entrada da aplicação

index.html                    # HTML principal e metadados
package.json                  # Dependências e scripts
package-lock.json             # Registro das versões instaladas
postcss.config.js             # Configuração do PostCSS
tailwind.config.js            # Configuração do Tailwind
tsconfig.json                 # Configuração geral do TypeScript
tsconfig.app.json             # Configuração TypeScript da aplicação
tsconfig.node.json            # Configuração TypeScript para Node
vite.config.ts                # Configuração do Vite
```

A organização separa responsabilidades: os componentes visuais ficam em `components/`, os conteúdos editáveis ficam em `data/` e as funções de integração e montagem de links ficam em `services/`.

Essa divisão facilita a manutenção sem precisar modificar diretamente a estrutura visual das páginas.

## Identidade visual

A identidade visual do site foi construída a partir de uma proposta moderna, profissional e alinhada ao segmento automotivo, combinando tons escuros, neutros e cores de destaque.

A paleta está centralizada em `tailwind.config.js`.

**Paleta principal:**

| Cor | Código | Aplicação |
|---|---|---|
| Ink | `#0F1115` | Fundos escuros e identidade principal |
| Paper | `#FAF9F6` | Fundos claros |
| Ember | `#E8461F` | Cor de destaque e chamadas de ação |
| Cobalt | `#1B4CE0` | Elementos secundários e detalhes |

**Tipografia:**

- **Sora:** utilizada em títulos, chamadas e elementos de destaque.
- **Inter:** utilizada em textos, descrições e elementos de interface.

As fontes são carregadas localmente pelo npm, por meio do `@fontsource`, sem depender de carregamento de fontes externas por CDN.

**Elementos visuais adicionais:**

- Gradientes personalizados.
- Sombras e profundidade nos cards.
- Animações de entrada e interação.
- Efeitos de zoom em imagens.
- Transições suaves entre elementos.

## Responsividade

O site utiliza uma abordagem mobile-first, com breakpoints personalizados no Tailwind CSS:

```ts
screens: {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  '2xl': '1440px',
}
```

| Dispositivo | Largura |
|---|---|
| Mobile | Abaixo de 576px |
| Tablet | A partir de 576px |
| Desktop pequeno | A partir de 768px |
| Desktop | A partir de 992px |
| Telas grandes | A partir de 1200px |
| Telas extra grandes | A partir de 1440px |

O layout adapta menus, grids, espaçamentos, imagens, tipografia e disposição dos elementos conforme o tamanho da tela.

O menu de navegação desktop é substituído por um menu expansível em dispositivos menores que `lg` (992px).

## Seções do site

A página inicial é composta pelas seguintes seções, organizadas em `src/pages/Home.tsx`:

1. **Hero** — apresentação principal da D&Bu Tintas, com imagem de destaque, mensagem institucional e botões de contato e navegação para o catálogo.
2. **About (Sobre)** — apresentação da empresa, especialidades e públicos atendidos.
3. **Differentials (Diferenciais)** — apresentação dos principais diferenciais, como atendimento personalizado, qualidade dos produtos, precisão no acerto de cor e agilidade.
4. **CatalogPreview (Catálogo)** — apresentação das categorias de produtos trabalhadas pela loja, com acesso direto ao WhatsApp para consultas.
5. **ColorMatchService (Acerto de Cor)** — explicação do serviço especializado, apresentando as etapas de análise, comparação, ajuste e validação da tonalidade.
6. **Brands (Marcas)** — apresentação das marcas trabalhadas pela empresa.
7. **Promotions (Promoções)** — destaques comerciais, condições para parceiros e direcionamento para o Instagram e WhatsApp.
8. **Location (Localização)** — apresentação da região de atendimento e mapa integrado do Google Maps.
9. **ContactSection (Contato)** — canais de atendimento e formulário para envio de mensagens pelo WhatsApp.

Além dessas seções, o projeto possui:

- **Header:** navegação principal, links para as seções e acesso ao WhatsApp.
- **Footer:** informações institucionais, navegação, contatos e região de atuação.
- **WhatsApp Float Button:** botão flutuante para contato rápido.
- **NotFound:** página 404 para endereços não reconhecidos.

## Navegação e arquitetura

O projeto utiliza React Router DOM com `BrowserRouter`.

Embora o site seja composto por uma única página principal, o roteamento está configurado para permitir navegação por URLs e âncoras.

A configuração está em `src/routes/AppRouter.tsx`:

- `/` → página inicial (`Home.tsx`).
- `*` → página não encontrada (`NotFound.tsx`).

A navegação interna utiliza identificadores de seção, como:

- `#inicio`
- `#sobre`
- `#catalogo`
- `#acerto-de-cor`
- `#marcas`
- `#localizacao`
- `#contato`

O hook `useScrollToHash.ts` gerencia a rolagem até a seção correspondente, inclusive quando a navegação ocorre por meio de uma URL com hash.

O layout principal (`MainLayout.tsx`) centraliza os elementos compartilhados entre as páginas, evitando repetição de código.

## Formulário e canais de contato

O site possui três canais principais de contato:

- **WhatsApp:** direcionamento para a conversa com a empresa.
- **E-mail:** abertura do aplicativo de e-mail padrão por meio de um link `mailto:`.
- **Instagram:** direcionamento para o perfil oficial da empresa.

Os dados de contato estão centralizados em:

`src/data/contact.ts`

Atualmente, estão cadastrados:

| Informação | Valor |
|---|---|
| WhatsApp | (11) 95085-4276 |
| E-mail | debutintas@gmail.com |
| Instagram | @dbutintas |
| Endereço | Av. Prof. José Maria Alkimin, 334, Jardim Ester Yolanda, São Paulo - SP, 05366-000 |

### Funcionamento do formulário

O formulário (`components/sections/ContactSection.tsx`) solicita:

- Nome;
- Telefone;
- Mensagem.

A validação verifica se o nome possui pelo menos dois caracteres e se a mensagem possui pelo menos quatro caracteres.

Ao enviar, a função `buildContactWhatsAppLink`, localizada em `services/contactForm.ts`, organiza as informações preenchidas e monta um link para abrir uma conversa no WhatsApp.

**Importante:** o formulário não utiliza backend, banco de dados ou serviço externo de envio. A mensagem é encaminhada ao WhatsApp por meio de um link, e o usuário precisa confirmar o envio dentro do próprio aplicativo.

O contato por e-mail funciona separadamente, por meio de `mailto:`.

## Catálogo, marcas e promoções

Os conteúdos comerciais foram separados em arquivos próprios para facilitar futuras atualizações.

**Categorias de produtos — `src/data/catalog.ts`:**

- Tintas automotivas;
- Vernizes;
- Primers;
- Massas, lixas e acabamento;
- Acessórios para pintura.

O catálogo apresentado no site é uma prévia das categorias trabalhadas, não um sistema de vendas ou estoque online.

Cada categoria direciona o visitante ao WhatsApp com uma mensagem relacionada ao produto selecionado.

**Marcas — `src/data/brands.ts`:**

As marcas apresentadas atualmente são:

- Anjo Tintas;
- Sherwin-Williams;
- Nexus;
- NSW;
- PDR.

As imagens e descrições de cada marca estão cadastradas no mesmo arquivo.

**Promoções — `src/data/promotions.ts`:**

A seção apresenta três destaques institucionais:

- Condições para funilarias e oficinas;
- Consultoria de acerto de cor;
- Novidades no Instagram.

Os conteúdos atuais não representam campanhas com datas de validade ou percentuais específicos de desconto. São destaques comerciais que podem ser atualizados conforme as condições reais oferecidas pela empresa.

## Fotos e imagens

As imagens do projeto estão organizadas em `src/assets/images/`.

A estrutura está dividida em:

- `loja/` — imagens relacionadas à loja e ao serviço de acerto de cor.
- `produtos/` — imagens de produtos, equipamentos e marcas.
- `logo.jpeg` — logotipo utilizado na identidade visual.

As imagens são importadas diretamente pelos componentes e arquivos de dados, permitindo que o Vite faça o processamento e a otimização dos caminhos durante o build.

Para adicionar uma imagem:

1. Coloque o arquivo na pasta correspondente.
2. Importe a imagem no componente ou arquivo de dados em que será utilizada.
3. Atualize o conteúdo correspondente.
4. Confira a exibição em dispositivos mobile e desktop.

## Manutenção comum (como alterar o quê)

| Quero mudar... | Onde mexer |
|---|---|
| WhatsApp e telefone | `src/data/contact.ts` |
| E-mail | `src/data/contact.ts` |
| Instagram | `src/data/contact.ts` |
| Região de atendimento | `src/data/contact.ts` |
| Links do menu | `src/data/navigation.ts` |
| Categorias de produtos | `src/data/catalog.ts` |
| Marcas e descrições | `src/data/brands.ts` |
| Diferenciais da empresa | `src/data/differentials.ts` |
| Destaques e promoções | `src/data/promotions.ts` |
| Texto e apresentação principal | Componentes em `src/components/sections/` |
| Imagem principal do banner | `src/components/sections/Hero.tsx` |
| Imagem da seção Sobre | `src/components/sections/About.tsx` |
| Imagem do acerto de cor | `src/components/sections/ColorMatchService.tsx` |
| Cores da identidade visual | `tailwind.config.js` |
| Tipografia | `tailwind.config.js` e `src/index.css` |
| Metadados, título e descrição do site | `index.html` |
| Estrutura das rotas | `src/routes/AppRouter.tsx` |
| Links e mensagens do WhatsApp | `src/services/whatsapp.ts` e `src/services/contactForm.ts` |

### Pontos de atenção para futuras atualizações

**Localização:** o mapa utiliza o endereço da loja: Av. Prof. José Maria Alkimin, 334, Jardim Ester Yolanda, São Paulo - SP, 05366-000. A variável `mapQuery`, em `src/components/sections/Location.tsx`, centraliza o endereço utilizado tanto no mapa incorporado quanto no botão "Como chegar".

**Horários de atendimento:** o site orienta o visitante a consultar os horários pelo WhatsApp, pois não há horários específicos cadastrados.

**Promoções:** atualizar `src/data/promotions.ts` sempre que houver novas condições comerciais ou campanhas confirmadas pela empresa.

**Contato:** ao alterar qualquer informação de contato, atualizar `src/data/contact.ts`, pois esse arquivo centraliza os dados utilizados em diferentes partes do site.

---

## Deploy pela Hostinger

O projeto gera um build estático de produção por meio do Vite.

Ao executar:

```bash
npm run build
```

O Vite realiza a compilação da aplicação e gera a pasta:

```text
dist/
```

Essa pasta contém os arquivos finais necessários para disponibilizar o site na hospedagem.

### Publicação automatizada

A publicação é realizada automaticamente por meio do **GitHub Actions**, utilizando uma integração via FTPS com a Hostinger.

O workflow está configurado em:

`.github/workflows/deploy.yml`

O processo é iniciado automaticamente sempre que ocorre um `push` na branch `main`. Também é possível iniciar a publicação manualmente pela aba **Actions** do GitHub, utilizando a opção `workflow_dispatch`.

**Etapas executadas pelo workflow:**

1. Obtém a versão mais recente do código-fonte da branch `main`.
2. Configura o ambiente com Node.js 20.
3. Instala as dependências utilizando `npm ci`.
4. Executa `npm run build`, gerando os arquivos de produção na pasta `dist/`.
5. Envia os arquivos gerados para a Hostinger por meio de uma conexão FTPS.

**Configuração de publicação:**

| Configuração | Valor |
|---|---|
| Plataforma de automação | GitHub Actions |
| Arquivo do workflow | `.github/workflows/deploy.yml` |
| Branch de publicação | `main` |
| Versão do Node.js | 20 |
| Instalação de dependências | `npm ci` |
| Comando de build | `npm run build` |
| Diretório gerado | `dist/` |
| Protocolo de transferência | FTPS |
| Diretório de publicação | `domains/dbutintas.com.br/public_html/` |

### Credenciais de publicação

As credenciais utilizadas para estabelecer a conexão com a Hostinger ficam armazenadas nos **GitHub Actions Secrets**, vinculados ao repositório.

| Secret | Finalidade |
|---|---|
| `FTP_SERVER` | Endereço do servidor FTP |
| `FTP_USERNAME` | Usuário de autenticação |
| `FTP_PASSWORD` | Senha de autenticação |

Por segurança, essas informações não ficam registradas diretamente no código-fonte ou no arquivo de configuração do workflow.

### Atualização do site

Sempre que houver alterações no projeto:

1. Realize as modificações necessárias no código.
2. Faça o commit das alterações.
3. Envie as alterações para a branch `main` por meio de um `push`.
4. O GitHub Actions iniciará automaticamente o processo de publicação.
5. Acompanhe a execução pela aba **Actions** do GitHub.
6. Após a conclusão do workflow, acesse o domínio e confira se a atualização foi aplicada corretamente.

Também é possível iniciar uma publicação manualmente pela aba **Actions**, selecionando o workflow `Deploy to Hostinger` e executando a opção **Run workflow**.

> ⚠️ Recomenda-se manter backups periódicos dos arquivos publicados e do código-fonte. Antes de realizar alterações importantes, verifique se existe uma versão anterior recuperável.

### Observação sobre o roteamento

O projeto utiliza `BrowserRouter`. Caso futuramente sejam adicionadas rotas internas independentes, será necessário configurar uma regra de fallback na hospedagem para direcionar as requisições dessas rotas ao `index.html`.

Atualmente, a aplicação possui a página inicial e uma rota curinga para a página 404. O funcionamento das rotas deve ser validado também após a publicação.

---

**D&Bu Tintas — Site Institucional**  
Desenvolvido por AP2 Quantum Solutions.