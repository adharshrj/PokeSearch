# Pokemon Search

# ENV
```bash
    MONGOURL = "Your mongo url"
```

## API Endpoints
```bash
    #MONGO
    POST - https://{URL}/pokemon/create
    GET - https://{URL}/pokemon/getAll
    GET - https://{URL}/pokemon/get/:id
    PATCH - https://{URL}/pokemon/update/:id
    DELETE - https://{URL}/pokemon/delete/:id
```

# Create Pokemon
```bash
curl --location --request POST 'http://localhost:3000/pokemon/create' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": 1,
    "name": {
      "english": "Bulbasaur",
      "japanese": "フシギダネ",
      "chinese": "妙蛙种子",
      "french": "Bulbizarre"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 49,
      "Defense": 49,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 45
    }
  }'
```


# Get All Pokemon
```bash
curl --location --request GET 'http://localhost:3000/pokemon/getAll' \
--data-raw ''
```

# Get Pokemon by Id
```bash
curl --location --request GET 'http://localhost:3000/pokemon/get/:id' \
--data-raw ''
```


# Update Pokemon by Id
```bash
curl --location --request PATCH 'http://localhost:3000/pokemon/update/:id' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": 1,
    "name": {
      "english": "Bulbasaur",
      "japanese": "フシギダネ",
      "chinese": "妙蛙种子",
      "french": "Bulbizarre"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 49,
      "Defense": 49,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 45
    }
  }'
```


```
# Delete Pokemon by Id
```bash
curl --location --request GET 'http://localhost:3000/pokemon/delete/:id'\
--data-raw ''
```


# Elastic Sync
```bash
curl --location --request POST 'http://localhost:3000/elastic/sync'\
--data-raw ''
```