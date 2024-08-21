# Píldora Formativa: CRUD en JavaScript

## Introducción

Bienvenidos a esta píldora formativa sobre el manejo de operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en JavaScript. Este tutorial está diseñado para estudiantes del Bootcamp Full Stack de Factoria F5, y tiene como objetivo brindar una comprensión sólida de las operaciones CRUD utilizando tecnologías modernas como json-server para simular una API. La aplicación de ejemplo será una sencilla lista de tareas (To-Do List) que nos permitirá manipular datos en tiempo real.

## Presentación en Canva

Puedes acceder a la presentación que acompaña a esta píldora formativa en el siguiente enlace: [Enlace a la presentación en Canva](https://www.canva.com/design/DAGOaGPiZO4/vDJgOLwsyYZ20Ql2aK6xlg/view?utm_content=DAGOaGPiZO4&utm_campaign=designshare&utm_medium=link&utm_source=editor).

![Presentación en Canva](/assets/img/image_canva.png)

## Descripción del Proyecto

La aplicación es una lista de tareas donde podrás realizar las siguientes operaciones:

- Crear una nueva tarea.
- Leer las tareas existentes.
- Actualizar el estado de una tarea (marcar como completada).
- Eliminar una tarea.

![Aplicación To-Do List](/assets/capture_app.png)

## Estructura del proyecto

El proyecto está organizado de la siguiente manera:

```plaintext
PILDORA-CRUD/
│
├── node_modules/      # Dependencias del proyecto
├── server/
│   └── db.json        # Archivo que contiene la base de datos simulada (fake API)
├── src/
│   ├── services.js    # Archivo JavaScript con las funciones CRUD
│   └── style.css      # Estilos CSS para la aplicación
├── .gitignore         # Archivo para ignorar ciertos archivos/directorios en Git
├── index.html         # Página principal de la aplicación
├── package-lock.json  # Archivo de bloqueo de dependencias (generado automáticamente)
└── package.json       # Archivo de configuración del proyecto y dependencias

```

## Requisitos Previos

- **Node.js** instalado en tu máquina.
- Familiaridad básica con **JavaScript**, **HTML**, y **CSS**.

## Instalación

Para comenzar con el proyecto, sigue los siguientes pasos:

**1. Clonar el repositorio:**

```bash
git clone https://github.com/LorelizDev/pildora-CRUD.git
cd pildora-CRUD
```

**2. Instalar las dependencias:**

```bash
npm install
```

**3. Iniciar el servidor json-server:**

```bash
npm run api
```

Esto iniciará un servidor en tu localhost que servirá como nuestra API simulada.

**4. Abrir el archivo `index.html`:**

Puedes abrir `index.html` en tu navegador para ver la aplicación en funcionamiento.

## Conclusión

Este ejercicio práctico permite a los estudiantes aplicar los conceptos de CRUD en un proyecto realista, utilizando una API simulada con json-server. Al finalizar esta píldora formativa, deberías sentirte cómodo manejando operaciones CRUD en JavaScript y ser capaz de integrarlas en aplicaciones web más complejas.

#

**¡Gracias por participar en esta píldora formativa!**