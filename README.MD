# API REST

Este proyecto es una API REST construida con Node.js, TypeScript, Express y MongoDB. La API permite la gestión de usuarios y roles, incluyendo operaciones CRUD (Crear, Leer, Actualizar, Eliminar).

## Requisitos

- Node.js
- MongoDB
- npm o yarn

## Instalación

1. Clona el repositorio:
  ```sh
  git clone https://github.com/alvaroofernaandez/users.apirest.git
  cd users.apirest
  ```

2. Instala las dependencias:
  ```sh
  npm install
  ```

3. Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables de entorno:
  ```env
  MONGODB_URL_STRING=your_mongodb_connection_string
  PORT=4000
  ```

4. Inicia la aplicación en modo desarrollo:
  ```sh
  npm run dev
  ```

## Endpoints

### Auth

- `POST /api/v1/auth/register`: Registrar un nuevo usuario.
- `POST /api/v1/auth/login`: Iniciar sesión de un usuario.

### Users

- `GET /api/v1/users`: Obtener todos los usuarios.
- `GET /api/v1/users/:id`: Obtener un usuario por ID.
- `POST /api/v1/users`: Crear un nuevo usuario.
- `PUT /api/v1/users/:id`: Actualizar un usuario por ID.
- `DELETE /api/v1/users/:id`: Eliminar un usuario por ID.

### Roles

- `GET /api/v1/roles`: Obtener todos los roles.
- `GET /api/v1/roles/:id`: Obtener un rol por ID.
- `POST /api/v1/roles`: Crear un nuevo rol.
- `PUT /api/v1/roles/:id`: Actualizar un rol por ID.
- `DELETE /api/v1/roles/:id`: Eliminar un rol por ID.

## Estructura del Proyecto

```plaintext
src/
├── config/
│   └── mongodb.ts
├── controllers/
│   ├── auth/
│   │   └── authControllers.ts
│   ├── rolesController.ts
│   └── usersController.ts
├── models/
│   ├── Roles.ts
│   └── Users.ts
├── repositories/
│   ├── roleRepository.ts
│   └── userRepository.ts
├── routes/
│   └── routes.ts
├── services/
│   ├── roleService.ts
│   └── userService.ts
├── types/
│   ├── RepositoryTypes.ts
│   ├── RolesTypes.ts
│   └── UserTypes.ts
├── server/
│   └── server.ts
└── app.ts
```