# Documentacion API
Es necesario configurar una base de datos mediante el archivo .env
El proyecto corre en typescript y utilizando nodemon 
## Listar todas las tareas por el id del usuario

### Metodo GET

url a peiticionar `/tasks/user/:createdBy`

Respuesta esperada

Nos lista todas las tareas creadas por un usuario

```
{
  "success": true,
  "message": "Tasks found successfully",
  "data": [
    {
      "id": 20,
      "title": "Titulo de prueba 3",
      "description": "Descripcion de prueba",
      "status": "pending",
      "deliveryDate": "2023-12-30T06:00:00.000Z",
      "comments": "Comentarios",
      "createdBY": 2,
      "tags": [
        {
          "tag": "Primer tag"
        }
      ]
    }
  ],
  "statusCode": 200
}
```

# Obtener una tarea por id

### Metodo GET

url a peticionar: `/tasks/:id`

Respuesta esperada

```
{
  "success": true,
  "message": "Task found successfully",
  "data": [
    {
      "id": 18,
      "title": "Title actualizado",
      "description": "Descripcion de prueba actualizada",
      "status": "pending",
      "deliveryDate": "2023-12-30T06:00:00.000Z",
      "comments": "Comentarios",
      "createdBY": 1,
      "tags": null
    }
  ],
  "statusCode": 200
}
```

# Actualizar una tarea

### Metodo PUT

url a peticionar `/tasks/19`

### Body

```json
{
  "title": "Title actualizado",
  "description": "Descripcion de prueba actualizada",
  "deliveryDate": "2023-12-30",
  "createdBy": 1,
  "comments": "Comentarios"
}
```

Respuesta esperada

```
{
  "success": true,
  "message": "Task updated successfully",
  "data": {
    "title": "Title actualizado",
    "description": "Descripcion de prueba actualizada",
    "deliveryDate": "2023-12-30",
    "createdBy": 1,
    "comments": "Comentarios"
  },
  "statusCode": 200
}
```

# Crear una tarea

url a peticionar `/tasks`

### Metodo POST

### Body

```json
{
  "title": "Titulo de prueba 3",
  "description": "Descripcion de prueba",
  "deliveryDate": "2023-12-30",
  "createdBy": 2,
  "comments": "Comentarios",
  "tags": [
    {
      "tag": "Primer tag"
    }
  ]
}
```

Respuesta esperada

```
{
  "success": true,
  "message": "Task deleted successfully",
  "data": null,
  "statusCode": 200
}
```

# Eliminar una tarea

url a peticionar `/tasks/:id`

### Metodo DELETE

Respuesta esperada

```
{
  "success": true,
  "message": "Task deleted successfully",
  "data": null,
  "statusCode": 200
}
```
