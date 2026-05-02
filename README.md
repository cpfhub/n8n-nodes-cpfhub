# n8n-nodes-cpfhub: CPFHub.io node for n8n

**CPFHub.io node for [n8n](https://n8n.io) — Brazilian CPF Lookup API**

> CPFHub.io node for [n8n](https://n8n.io) — CPF lookup API, optimized for automation workflows and AI agents.

[![npm version](https://img.shields.io/npm/v/n8n-nodes-cpfhub)](https://www.npmjs.com/package/n8n-nodes-cpfhub)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

---

## What is CPFHub.io?

CPFHub.io is a REST API that returns name, gender, and date of birth from any Brazilian CPF number — in ~300ms, with 99.9% uptime and full LGPD compliance.

Use this node to add CPF lookup and identity enrichment to any n8n workflow — without writing code.

**10M+ CPFs queried · 1,300+ active companies · 99.9% uptime**

---

## Why use the CPFHub.io n8n Node?

This n8n node is designed to offer a fluid and efficient integration of the CPFHub.io API into your automation workflows, focusing on Developer Experience (DX) and compatibility with AI Agents.

### 1. Optimized Developer Experience (DX)

*   **No-Code Integration**: Easily add CPF lookup functionalities to your n8n workflows without writing a single line of code.
*   **Intuitive Configuration**: Clear graphical interface to configure credentials and query parameters.

### 2. Native Compatibility with AI Agents

To facilitate integration with AI agents and LLMs, this n8n node and the CPFHub.io API offer:

*   **OpenAPI Specification**: The official API specification is available at [cpfhub-openapi](https://github.com/cpfhub/cpfhub-openapi), allowing agents to automatically understand its structure and typed schemas.
*   **Tool Descriptions**: The CPF lookup functionality is easily representable as "tool descriptions" for LLMs, facilitating invocation in agent frameworks.
*   **Native MCP Server**: CPFHub.io offers an MCP server that exposes the API directly to AI agents (Claude, Cursor, Windsurf), complementing its use in platforms like n8n.

---

## Installation

### Via n8n UI (recommended)

1.  Open your n8n instance
2.  Go to **Settings → Community Nodes**
3.  Click **Install**
4.  Enter `n8n-nodes-cpfhub`
5.  Click **Install**

### Via npm (self-hosted)

```bash
npm install n8n-nodes-cpfhub
```

---

## Credentials Setup

1.  In n8n, go to **Credentials → New**
2.  Search for **CPFHub API**
3.  Paste your API key in the **API Key** field
4.  Click **Save**

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

*   [simple_lookup_workflow.json](examples/simple_lookup_workflow.json)

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
|---|---|
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
- [Dashboard](https://app.cpfhub.io)
- [Status Page](https://app.cpfhub.io/status)
- [n8n Community Nodes docs](https://docs.n8n.io/integrations/community-nodes/)
- [LGPD Compliance](https://cpfhub.io/lgpd)
- [OpenAPI Specification](https://github.com/cpfhub/cpfhub-openapi/blob/main/openapi.yaml)

---

## License

MIT © [CPFHub.io](https://cpfhub.io)
