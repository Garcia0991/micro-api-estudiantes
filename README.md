# Micro-API de Registro de Estudiantes

## Descripción
Este proyecto es una API RESTful sencilla que permite registrar y listar estudiantes.  
La información se almacena en memoria, sin usar base de datos.

## Tecnologías utilizadas
- Node.js
- Express.js

## Justificación
Se eligió Node.js con Express debido a su simplicidad, rapidez de desarrollo y facilidad para crear servicios REST livianos.

## Instalación
Ejecutar el siguiente comando para instalar las dependencias:

## Instalación
npm install

## Ejecucion
node index.js
## El servidor se levanta en el entorno local en la siguiente dirección:
http://localhost:3000


## Modelo de datos
La API maneja una única entidad llamada Estudiante, la cual tiene la siguiente estructura en formato JSON:
{
  "id": "000156364",
  "nombre": "Cristiano Ronaldo",
  "carrera": "Ingeniería de Sistemas e Informatica"
}

## Endpoints
POST /estudiantes

Permite registrar un nuevo estudiante en el sistema.

Método: POST

Ruta: /estudiantes

Body: JSON con los campos id, nombre y carrera

Validación: No permite registrar estudiantes con el mismo ID

Respuesta exitosa: Código HTTP 201 (Created)

GET /estudiantes

Permite listar todos los estudiantes registrados hasta el momento.

Método: GET

Ruta: /estudiantes

No requiere parámetros

Respuesta exitosa: Código HTTP 200 (OK)

Retorna un arreglo JSON con los estudiantes registrados


