# Sequelize Cat API
This API allows you to perform CRUD operations on a database of cats!

## Endpoints
The following section provides information on the available endpoints for this API.

### Create a Cat

**Method**: ```POST```

**Endpoint**: ```/api/cats```

**Description**: This endpoint creates a new cat with the provided information in the request body.

Request Body:
```
{
  "name": "string",
  "age": integer,
  "breed": "string"
}
```

Response:
```
{
  "id": integer,
  "name": "string",
  "age": integer,
  "breed": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Get All Cats

**Method**: GET

**Endpoint**: ```/api/cats```

**Description**: This endpoint retrieves all the cats stored in the database.

Response:
```
[
  {
    "id": integer,
    "name": "string",
    "age": integer,
    "breed": "string",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  },
]
```

### Update a Cat

**Method**: ```PUT```

**Endpoint**: ```/api/cats/:id```

**Description**: This endpoint updates the cat with the specified id using the information in the request body.

Request Body:
```
{
  "name": "string",
  "age": integer,
  "breed": "string"
}
```

Response:
```
[
  1,
  [
    {
      "id": integer,
      "name": "string",
      "age": integer,
      "breed": "string",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  ]
]
```

### Delete a Cat

**Method**: ```DELETE```

**Endpoint**: ```/api/cats/:id```

**Description**: This endpoint deletes the cat with the specified id from the database.

Response:
```
{
  "id": integer,
  "name": "string",
  "age": integer,
  "breed": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```