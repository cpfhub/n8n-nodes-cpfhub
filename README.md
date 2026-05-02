# n8n-nodes-cpfhub

🇺🇸 **English** | [🇧🇷 Português](#português)

**Official CPFHub.io node for [n8n](https://n8n.io) — Brazilian CPF Lookup API**

[![npm version](https://img.shields.io/npm/v/n8n-nodes-cpfhub)](https://www.npmjs.com/package/n8n-nodes-cpfhub)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

---

## What is CPFHub.io?

CPFHub.io is a REST API that returns name, gender, and date of birth from any Brazilian CPF number — in ~300ms, with 99.9% uptime and full LGPD compliance.

Use this node to add CPF lookup and identity enrichment to any n8n workflow — without writing code.

**10M+ CPFs queried · 1,300+ active companies · 99.9% uptime**

---

## Installation

**Via n8n UI (recommended):**

1. Open your n8n instance
2. Go to **Settings → Community Nodes**
3. Click **Install**
4. Enter `n8n-nodes-cpfhub`
5. Click **Install**

**Via npm (self-hosted):**

```bash
npm install n8n-nodes-cpfhub
```

---

## curl Example

```bash
curl -X GET "https://api.cpfhub.io/cpf/12345678909" \\
  -H "x-api-key: YOUR_API_KEY"
```

**Response:**

```json
{
  "success": true,
  "data": {
    "cpf": "12345678909",
    "name": "Fulano de Tal",
    "nameUpper": "FULANO DE TAL",
    "gender": "M",
    "birthDate": "15/06/1990",
    "day": 15,
    "month": 6,
    "year": 1990
  }
}
```

---

## Credentials Setup

1. In n8n, go to **Credentials → New**
2. Search for **CPFHub API**
3. Paste your API key in the **API Key** field
4. Click **Save**

Get your free API key at [app.cpfhub.io](https://app.cpfhub.io) — no credit card required.

---

## Operations

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

## Example Workflows

Check the `examples/` directory for sample usage:

- [simple_lookup_workflow.json](examples/simple_lookup_workflow.json)

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

## Error Handling

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

## Rate Limits

| Plan | Limit |
|------|-------|
| Free | 1 request every 2 seconds · 50 requests/month |
| Pro | 1 request per second · 1,000 requests/month |
| Corporate | Custom |

---

## Plans & Pricing

| Plan | Price | Included | Extra |
|------|-------|----------|-------|
| **Free** | R$ 0/month | 50 lookups | — |
| **Pro** | R$ 149/month | 1,000 lookups | R$ 0,15/lookup |
| **Corporate** | Custom | Custom | Custom |

[View full pricing at cpfhub.io →](https://cpfhub.io#pricing)

---

## Compatibility

- n8n `1.0.0` and above
- Self-hosted and n8n Cloud

---

## Links

- [Documentation](https://cpfhub.io/documentacao)
- [npm Package](https://www.npmjs.com/package/n8n-nodes-cpfhub)
- [Dashboard](https://app.cpfhub.io)
- [Status Page](https://app.cpfhub.io/status)
- [n8n Community Nodes docs](https://docs.n8n.io/integrations/community-nodes/)
- [LGPD Compliance](https://cpfhub.io/lgpd)
- [OpenAPI Specification](https://github.com/cpfhub/cpfhub-openapi/blob/main/openapi.yaml)
- [MCP Server (AI Agents)](https://github.com/cpfhub/cpfhub-mcp)

---

## License

MIT © [CPFHub.io](https://cpfhub.io)

---

# Português

[🇺🇸 English](#n8n-nodes-cpfhub) | 🇧🇷 **Português**

**Node oficial do CPFHub.io para [n8n](https://n8n.io) — API de Consulta de CPF Brasileiro**

---

## O que é o CPFHub.io?

O CPFHub.io é uma API REST que retorna nome, gênero e data de nascimento de qualquer CPF brasileiro — em ~300ms, com 99,9% de uptime e total conformidade com a LGPD.

Use este node para adicionar consulta de CPF e enriquecimento de identidade a qualquer workflow n8n — sem escrever código.

**10M+ CPFs consultados · 1.300+ empresas ativas · 99,9% uptime**

---

## Instalação

**Via interface do n8n (recomendado):**

1. Abra sua instância do n8n
2. Vá em **Settings → Community Nodes**
3. Clique em **Install**
4. Digite `n8n-nodes-cpfhub`
5. Clique em **Install**

**Via npm (self-hosted):**

```bash
npm install n8n-nodes-cpfhub
```

---

## Exemplo curl

```bash
curl -X GET "https://api.cpfhub.io/cpf/12345678909" \\
  -H "x-api-key: SUA_CHAVE_DE_API"
```

**Resposta:**

```json
{
  "success": true,
  "data": {
    "cpf": "12345678909",
    "name": "Fulano de Tal",
    "nameUpper": "FULANO DE TAL",
    "gender": "M",
    "birthDate": "15/06/1990",
    "day": 15,
    "month": 6,
    "year": 1990
  }
}
```

---

## Configuração de Credenciais

1. No n8n, vá em **Credentials → New**
2. Pesquise por **CPFHub API**
3. Cole sua chave de API no campo **API Key**
4. Clique em **Save**

Obtenha sua chave de API gratuita em [app.cpfhub.io](https://app.cpfhub.io) — sem cartão de crédito.

---

## Operações

### CPF — Consulta

Consulta um CPF e retorna os dados de identidade associados.

| Campo | Descrição |
|-------|----------|
| **CPF** | O número do CPF a ser consultado (com ou sem formatação) |

#### Campos de saída

| Campo | Tipo | Descrição |
|-------|------|----------|
| `cpf` | String | CPF (apenas dígitos) |
| `name` | String | Nome completo — `"Fulano de Tal"` |
| `nameUpper` | String | Nome completo em maiúsculas |
| `gender` | String | `"M"` ou `"F"` |
| `birthDate` | String | Data de nascimento — `"DD/MM/YYYY"` |
| `day` | Number | Dia de nascimento |
| `month` | Number | Mês de nascimento |
| `year` | Number | Ano de nascimento |

---

## Exemplos de Workflows

Veja o diretório `examples/` para exemplos de uso:

- [simple_lookup_workflow.json](examples/simple_lookup_workflow.json)

### Validação de onboarding

```
Webhook (recebe CPF)
  → CPFHub (Consulta CPF)
  → IF (nome corresponde ao formulário?)
      → Sim: Enviar e-mail de boas-vindas
      → Não: Sinalizar para revisão manual
```

### Prevenção de fraude em e-commerce

```
WooCommerce / Shopify (novo pedido)
  → CPFHub (Consulta CPF do comprador)
  → IF (CPF válido e nome corresponde?)
      → Sim: Aprovar pedido
      → Não: Segurar pedido + notificar equipe no Slack
```

### Pipeline KYC com sincronização de CRM

```
Envio de formulário (Typeform / Tally)
  → CPFHub (Consulta CPF)
  → HubSpot (Criar ou atualizar contato com nome verificado)
  → Enviar e-mail de confirmação via Gmail
```

---

## Tratamento de Erros

O node lança erros descritivos para cada status HTTP:

| Código | Significado |
|--------|-------------|
| `400` | Formato de CPF inválido |
| `401` | Chave de API inválida ou ausente |
| `404` | CPF não encontrado |
| `429` | Limite de requisições excedido — tente novamente em alguns segundos |
| `500` | Erro no servidor CPFHub |
| `503` | Serviço temporariamente indisponível |

Ative **Continue On Fail** nas configurações do node para tratar erros de forma elegante no seu workflow.

---

## Limites de Requisição

| Plano | Limite |
|-------|--------|
| Gratuito | 1 requisição a cada 2 segundos · 50 requisições/mês |
| Pro | 1 requisição por segundo · 1.000 requisições/mês |
| Corporativo | Personalizado |

---

## Planos e Preços

| Plano | Preço | Incluído | Extra |
|-------|-------|----------|-------|
| **Gratuito** | R$ 0/mês | 50 consultas | — |
| **Pro** | R$ 149/mês | 1.000 consultas | R$ 0,15/consulta |
| **Corporativo** | Personalizado | Personalizado | Personalizado |

[Ver preços completos em cpfhub.io →](https://cpfhub.io#pricing)

---

## Compatibilidade

- n8n `1.0.0` e superior
- Self-hosted e n8n Cloud

---

## Links

- [Documentação](https://cpfhub.io/documentacao)
- [Pacote npm](https://www.npmjs.com/package/n8n-nodes-cpfhub)
- [Dashboard](https://app.cpfhub.io)
- [Página de Status](https://app.cpfhub.io/status)
- [Docs de Community Nodes do n8n](https://docs.n8n.io/integrations/community-nodes/)
- [Conformidade LGPD](https://cpfhub.io/lgpd)
- [Especificação OpenAPI](https://github.com/cpfhub/cpfhub-openapi/blob/main/openapi.yaml)
- [Servidor MCP (Agentes de IA)](https://github.com/cpfhub/cpfhub-mcp)

---

## Licença

MIT © [CPFHub.io](https://cpfhub.io)
