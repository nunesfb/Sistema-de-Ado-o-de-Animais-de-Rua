# Sistema de Adoção de Animais de Rua 🐾

Uma API para gerenciar animais de rua disponíveis para adoção, adotantes e informações sobre adoções realizadas. O sistema conecta abrigos, animais e adotantes, proporcionando uma solução completa para o processo de adoção.

## Estrutura do Banco de Dados

### 1. **Tabela: `abrigos`**

Armazena informações sobre os abrigos que acolhem os animais.

| Coluna             | Tipo         | Descrição                                             |
| ------------------ | ------------ | ----------------------------------------------------- |
| `id`               | UUID         | Identificador único do abrigo.                        |
| `nome`             | VARCHAR(100) | Nome do abrigo.                                       |
| `endereco`         | VARCHAR(200) | Endereço completo do abrigo.                          |
| `telefone`         | VARCHAR(15)  | Telefone de contato.                                  |
| `email`            | VARCHAR(100) | Email do abrigo.                                      |
| `data_criacao`     | TIMESTAMP    | Data de registro do abrigo no sistema.                |
| `data_atualizacao` | TIMESTAMP    | Data de atualização do registro do abrigo no sistema. |

---

### 2. **Tabela: `animais`**

Armazena os detalhes dos animais disponíveis para adoção.

| Coluna             | Tipo         | Descrição                                             |
| ------------------ | ------------ | ----------------------------------------------------- |
| `id`               | UUID         | Identificador único do animal.                        |
| `nome`             | VARCHAR(100) | Nome do animal.                                       |
| `especie`          | VARCHAR(50)  | Espécie (ex.: "cachorro", "gato").                    |
| `raca`             | VARCHAR(100) | Raça do animal (se conhecida).                        |
| `idade`            | INT          | Idade do animal (em anos).                            |
| `sexo`             | VARCHAR(10)  | Sexo do animal ("macho" ou "fêmea").                  |
| `descricao`        | TEXT         | Descrição adicional do animal.                        |
| `abrigo_id`        | UUID         | Relacionamento com a tabela `abrigos`.                |
| `data_criacao`     | TIMESTAMP    | Data de registro do animal no sistema.                |
| `data_atualizacao` | TIMESTAMP    | Data de atualização do registro do animal no sistema. |

---

### 3. **Tabela: `adotantes`**

Armazena os dados dos adotantes que se cadastram no sistema.

| Coluna             | Tipo         | Descrição                                               |
| ------------------ | ------------ | ------------------------------------------------------- |
| `id`               | UUID         | Identificador único do adotante.                        |
| `nome`             | VARCHAR(100) | Nome completo do adotante.                              |
| `email`            | VARCHAR(100) | Email do adotante.                                      |
| `telefone`         | VARCHAR(15)  | Telefone de contato do adotante.                        |
| `endereco`         | VARCHAR(200) | Endereço do adotante.                                   |
| `data_criacao`     | TIMESTAMP    | Data de registro do adotante no sistema.                |
| `data_atualizacao` | TIMESTAMP    | Data de atualização do registro do adotante no sistema. |

---

### 4. **Tabela: `adocoes`**

Relaciona adotantes e animais, registrando o processo de adoção.

| Coluna             | Tipo      | Descrição                                   |
| ------------------ | --------- | ------------------------------------------- |
| `id`               | UUID      | Identificador único da adoção.              |
| `adotante_id`      | UUID      | Relacionamento com a tabela `adotantes`.    |
| `animal_id`        | UUID      | Relacionamento com a tabela `animais`.      |
| `data_adocao`      | TIMESTAMP | Data de realização da adoção.               |
| `data_atualizacao` | TIMESTAMP | Data de atualização do registro no sistema. |

---

## Relacionamentos

1. **Abrigos x Animais**:

   - **1xN**: Um abrigo pode cuidar de vários animais, mas cada animal pertence a um único abrigo.

2. **Adotantes x Animais**:
   - **NxM**: Um adotante pode adotar vários animais, e cada animal pode ser adotado por vários adotantes.

---

## Funcionalidades Principais

1. **Cadastro de Abrigos**:

   - Adicionar e gerenciar os abrigos que acolhem os animais.

2. **Cadastro de Animais**:

   - Adicionar animais ao sistema, vinculando-os a um abrigo específico.

3. **Cadastro de Adotantes**:

   - Registrar adotantes interessados em adotar animais.

4. **Registro de Adoções**:

   - Vincular adotantes e animais no processo de adoção.

5. **Listagem de Animais**:

   - Exibir todos os animais disponíveis para adoção, com filtros por abrigo, espécie, raça e idade.

6. **Histórico de Adoções**:
   - Listar todas as adoções realizadas, incluindo informações sobre os adotantes e animais adotados.

---

## Rotas da API

### Abrigos

**Listar todos os abrigos**

Retorna uma lista de todos os abrigos cadastrados.

```http
GET /api/abrigos
```

**Obter informações de um abrigo específico**

Retorna os detalhes de um abrigo com base no ID fornecido.

```http
GET /api/abrigos/:id
```

**Criar um novo abrigo**

Adiciona um novo abrigo ao sistema.

```http
POST /api/abrigos

Body:
  {
    "nome": "Abrigo Amor Animal",
    "endereco": "Rua das Flores, 123, São Paulo - SP",
    "telefone": "(11) 99999-9999",
    "email": "contato@amoranimal.org"
  }
```

**Atualizar um abrigo**

Atualiza as informações de um abrigo existente.

```http
PUT /api/abrigos/:id

Body:
  {
    "nome": "Abrigo Esperança Animal",
    "endereco": "Rua das Palmeiras, 456, Campinas - SP"
  }
```

**Excluir um abrigo**

Remove um abrigo do sistema.

```http
DELETE /api/abrigos/:id
```

### Animais

**Listar todos os animais**

Retorna uma lista de todos os animais cadastrados.

```http
GET /api/animais
```

**Listar animais disponíveis para adoção**

Retorna uma lista de todos os animais que estão disponíveis para adoção.

```http
GET /api/animais/disponiveis
```

**Obter informações de um animal específico**

Retorna os detalhes de um animal com base no ID fornecido.

```http
GET /api/animais/:id
```

**Criar um novo animal**

Adiciona um novo animal ao sistema.

```http
POST /api/animais

Body:
  {
    "nome": "Rex",
    "especie": "cachorro",
    "raca": "Labrador",
    "idade": 3,
    "sexo": "macho",
    "descricao": "Muito dócil e brincalhão.",
    "abrigo_id": "uuid-do-abrigo"
  }
```

**Atualizar informações de um animal**

Atualiza os dados de um animal específico.

```http
PUT /api/animais/:id

Body:
  {
    "nome": "Rex",
    "idade": 4,
    "descricao": "Cachorro muito amigável, ideal para crianças."
  }
```

**Excluir um animal**

Remove um animal do sistema.

```http
DELETE /api/animais/:id
```

### Adotantes

**Listar todos os adotantes**

Retorna uma lista de todos os adotantes cadastrados.

```http
GET /api/adotantes
```

**Obter informações de um adotante específico**

Retorna os detalhes de um adotante com base no ID fornecido.

```http
GET /api/adotantes/:id
```

**Criar um novo adotante**

Adiciona um novo adotante ao sistema.

```http
POST /api/adotantes

Body:
  {
    "nome": "Maria Silva",
    "email": "maria.silva@email.com",
    "telefone": "(11) 91234-5678",
    "endereco": "Rua das Magnólias, 789, Belo Horizonte - MG"
  }
```

**Atualizar informações de um adotante**

Atualiza os dados de um adotante específico.

```http
PUT /api/adotantes/:id

Body:
{
  "telefone": "(11) 98765-4321"
}
```

**Excluir um adotante**

Remove um adotante do sistema.

```http
DELETE /api/adotantes/:id
```

### Adoções

**Listar todas as adoções**

Retorna uma lista de todas as adoções realizadas.

```http
GET /api/adocoes
```

**Obter informações de uma adoção específica**

Retorna os detalhes de uma adoção com base no ID fornecido.

```http
GET /api/adocoes/:id
```

**Registrar uma nova adoção**

Registra uma nova adoção no sistema.

```http
POST /api/adocoes

Body:
  {
    "adotante_id": "uuid-do-adotante",
    "animal_id": "uuid-do-animal"
  }
```

**Atualizar informações de uma adoção**

Atualiza os dados de uma adoção específica.

```http
PUT /api/adocoes/:id

Body:
  {
    "adotante_id": "novo-uuid-do-adotante"
  }
```

**Excluir uma adoção**

Remove uma adoção do sistema.

```http
DELETE /api/adocoes/:id
```
