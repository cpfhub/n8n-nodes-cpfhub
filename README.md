# n8n-nodes-cpfhub: Nó n8n para Consulta de CPF (AI-Native)

**CPFHub.io node for [n8n](https://n8n.io) — Brazilian CPF Lookup API**

> Nó CPFHub.io para [n8n](https://n8n.io) — API de consulta de CPF, otimizado para workflows de automação e agentes de IA.

[![npm version](https://img.shields.io/npm/v/n8n-nodes-cpfhub)](https://www.npmjs.com/package/n8n-nodes-cpfhub)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

---

## O que é CPFHub.io?

CPFHub.io é uma API REST que retorna nome, gênero e data de nascimento a partir de qualquer CPF brasileiro — em ~300ms, com 99.9% de uptime e total conformidade com a LGPD.

Use este nó para adicionar consulta de CPF e enriquecimento de identidade a qualquer workflow do n8n — sem escrever código.

> CPFHub.io é uma API REST que retorna nome, gênero e data de nascimento a partir de qualquer CPF brasileiro. Use este nó para adicionar consulta de CPF em qualquer workflow do n8n — sem escrever código.

**10M+ CPFs consultados · 1.300+ empresas ativas · 99.9% uptime**

---

## Por que usar o Nó n8n do CPFHub.io?

Este nó n8n foi projetado para oferecer uma integração fluida e eficiente da API do CPFHub.io em seus workflows de automação, com foco em Developer Experience (DX) e compatibilidade com Agentes de IA.

### 1. Developer Experience (DX) Otimizada

*   **Integração Sem Código**: Adicione funcionalidades de consulta de CPF aos seus workflows n8n com facilidade, sem a necessidade de escrever uma única linha de código.
*   **Configuração Intuitiva**: Interface gráfica clara para configurar credenciais e parâmetros de consulta.

### 2. Compatibilidade Nativa com Agentes de IA

Para facilitar a integração com agentes de IA e LLMs, este nó n8n e a API do CPFHub.io oferecem:

*   **OpenAPI Specification**: Um arquivo `openapi.yaml` está disponível para descrever a API subjacente, permitindo que agentes entendam automaticamente sua estrutura e schemas tipados.
*   **Tool Descriptions**: A funcionalidade de consulta de CPF é facilmente representável como "tool descriptions" para LLMs, facilitando a invocação em frameworks de agentes.
*   **MCP Server Nativo**: O CPFHub.io oferece um servidor MCP que expõe a API diretamente para agentes de IA (Claude, Cursor, Windsurf), complementando o uso em plataformas como n8n.

---

## Installation / Instalação

### Via n8n UI (recommended)

1.  Open your n8n instance
2.  Go to **Settings → Community Nodes**
3.  Click **Install**
4.  Enter `n8n-nodes-cpfhub`
5.  Click **Install**

> Abra sua instância n8n → **Configurações → Nós da Comunidade** → **Instalar** → digite `n8n-nodes-cpfhub`.

### Via npm (self-hosted)

```bash
npm install n8n-nodes-cpfhub
```

---

## Credentials Setup / Configuração de Credenciais

1.  In n8n, go to **Credentials → New**
2.  Search for **CPFHub API**
3.  Paste your API key in the **API Key** field
4.  Click **Save**

Get your free API key at [app.cpfhub.io](https://app.cpfhub.io) — no credit card required.

> Obtenha sua chave gratuita em [app.cpfhub.io](https://app.cpfhub.io) — sem cartão de crédito.

---

## Operations / Operações

### CPF — Lookup

Looks up a CPF number and returns the associated identity data.

| Field | Description |
|-------|-------------|
| **CPF** | The CPF number to look up (with or without formatting) |

#### Output fields

| Field | Type | Description |
|-------|------|-------------|
| `cpf` | String | CPF number (digits only) |
| `name` | String | Full name — `"Fulano de Tal"` |
| `nameUpper` | String | Full name in uppercase |
| `gender` | String | `"M"` or `"F"` |
| `birthDate` | String | Date of birth — `"DD/MM/YYYY"` |
| `day` | Number | Birth day |
| `month` | Number | Birth month |
| `year` | Number | Birth year |

---

## Example Workflows / Workflows de Exemplo

### Onboarding validation

```
Webhook (receives CPF)
  → CPFHub (Lookup CPF)
  → IF (name matches form input?)
      → True: Send welcome email
      → False: Flag for manual review
```

### E-commerce fraud prevention

```
WooCommerce / Shopify (new order trigger)
  → CPFHub (Lookup CPF from billing data)
  → IF (CPF valid and name matches?)
      → True: Approve order
      → False: Hold order + notify team on Slack
```

### KYC pipeline with CRM sync

```
Form submission (Typeform / Tally)
  → CPFHub (Lookup CPF)
  → HubSpot (Create or update contact with verified name)
  → Send confirmation email via Gmail
```

---

## Error Handling / Tratamento de Erros

The node throws descriptive errors for each HTTP status:

| Code | Meaning |
|------|---------|
| `400` | Invalid CPF format |
| `401` | Invalid or missing API key |
| `404` | CPF not found |
| `429` | Rate limit exceeded — retry after a few seconds |
| `500` | CPFHub server error |
| `503` | Service temporarily unavailable |

Enable **Continue On Fail** in the node settings to handle errors gracefully in your workflow.

---

## Rate Limits / Limites de Requisição

| Plan / Plano | Limit / Limite |
|---|---|
| Free / Grátis | 1 request every 2 seconds · 50 requests/month |
| Pro | 1 request per second · 1,000 requests/month |
| Corporate / Corporativo | Custom / Personalizado |

---

## Plans & Pricing / Planos e Preços

| Plan | Price | Included | Extra |
|------|-------|----------|-------|
| **Free** | R$ 0/month | 50 lookups | — |
| **Pro** | R$ 149/month | 1,000 lookups | R$ 0,15/lookup |
| **Corporate** | Custom | Custom | Custom |

[View full pricing at cpfhub.io →](https://cpfhub.io#pricing)

---

## Compatibility / Compatibilidade

- n8n `1.0.0` and above
- Self-hosted and n8n Cloud

---

## Links

- [Documentation / Documentação](https://cpfhub.io/documentacao)
- [Dashboard / Painel](https://app.cpfhub.io)
- [Status Page](https://app.cpfhub.io/status)
- [n8n Community Nodes docs](https://docs.n8n.io/integrations/community-nodes/)
- [LGPD Compliance](https://cpfhub.io/lgpd)
- [OpenAPI Specification](openapi.yaml)

---

## License / Licença

MIT © [CPFHub.io](https://cpfhub.io)
