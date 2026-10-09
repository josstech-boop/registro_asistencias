# Sistema de Registro de Asistencia Estudiantil - Frontend

## Descripción General

Este proyecto corresponde al frontend del sistema de registro de asistencia estudiantil, desarrollado con React y Vite. Su objetivo es centralizar la gestión de asistencia escolar para tres tipos de usuarios con permisos y funcionalidades específicas:

- Administrador: gestión de usuarios, grados, asignaciones y reportes.
- Docente: visualización de grados asignados, registro de asistencia y edición de registros.
- Alumno: consulta de su historial personal, porcentaje de asistencia y resumen académico.

La aplicación está diseñada para ofrecer una experiencia clara, segura y modular, con rutas protegidas por rol, manejo de estado global con Redux Toolkit y una interfaz moderna con Tailwind CSS + DaisyUI.

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- Node.js 18 o superior
- npm
- Git

> Recomendación: usa una terminal bash o PowerShell actualizada para una mejor experiencia con los comandos de instalación y ejecución.

---

## Guía de Instalación para Colaboradores

### Paso 1: Clonar el repositorio

```bash
git clone git@github.com:josstech-boop/registro_asistencias.git
```

### Paso 2: Entrar a la carpeta del proyecto

```bash
cd registro_asistencias
```

Si la carpeta raíz tiene otro nombre, reemplázala por el nombre correcto del proyecto.

### Paso 3: Instalar todas las dependencias

Ejecuta únicamente este comando:

```bash
npm install
```

Este comando leerá el archivo `package.json` y descargará automáticamente todas las librerías necesarias para el proyecto, incluyendo:

- React
- Vite
- React Router DOM
- Redux Toolkit
- React Hook Form
- Zod
- Tailwind CSS v4
- DaisyUI

### Paso 4: Ejecutar el servidor de desarrollo

```bash
npm run dev
```

Luego abre la URL local que indique la terminal, normalmente algo como:

```text
http://localhost:5173
```

Si la terminal muestra otra dirección local, úsala en lugar de la anterior.

---

## Stack de Tecnologías Utilizadas

Este frontend utiliza las siguientes tecnologías principales:

- React + Vite
- Redux Toolkit para la gestión del estado global
- React Router DOM para navegación y protección de rutas por roles
- React Hook Form + Zod para formularios y validación de datos
- Tailwind CSS v4 + DaisyUI para diseño visual y componentes UI

---

## Estructura Modular del Proyecto

La aplicación está organizada por módulos dentro de la carpeta `src`, con una separación funcional por dominio y rol.

### `src/features/`

Esta carpeta es el corazón del proyecto y se organiza por áreas funcionales:

- `auth`: autenticación, login, registro y recuperación de contraseña
- `admin`: administración general de usuarios, grados, asignaciones y reportes
- `docente`: módulos de gestión de asistencia y seguimiento de alumnos
- `alumno`: historial personal, porcentajes y visualización de asistencia

Cada módulo cuenta con su estructura local de componentes, páginas y estado, lo que permite que cada equipo o colaborador trabaje de forma ordenada según su rol y responsabilidad.

---

## Flujo de Trabajo con Git (Buenas Prácticas)

Para mantener el proyecto ordenado y evitar conflictos, es importante seguir estas buenas prácticas:

1. No subir cambios directamente a `main`.
2. Crear una rama de trabajo antes de comenzar cambios:

```bash
git checkout -b feature/nombre-modulo
```

Ejemplo:

```bash
git checkout -b feature/admin-usuarios
```

3. Antes de enviar cambios, actualizar la rama local con la última versión de `main`:

```bash
git pull origin main
```

4. Luego de terminar tu trabajo, hacer commit y push a tu rama correspondiente.
5. Crear un pull request para revisión antes de integrar los cambios a `main`.

---

## Resumen

Este proyecto está pensado para facilitar la gestión de la asistencia escolar con una arquitectura modular, roles diferenciados, seguridad en rutas y una base tecnológica moderna para desarrollo rápido y mantenible.

Si eres parte del equipo, sigue la estructura propuesta, trabaja siempre desde ramas nuevas y mantén tus cambios organizados por módulo funcional.
