# MigrApp - Planificación de Proyectos de Migración

MigrApp es una plataforma de planificación, seguimiento y control de proyectos de migración tecnológica, construida con HTML, CSS y JavaScript, y utilizando Bootstrap 5 para el diseño de la interfaz.

## Cómo Empezar

1.  Clona o descarga este repositorio.
2.  Abre el archivo `index.html` en tu navegador web.

No se requiere ninguna instalación adicional, ya que todas las dependencias (Bootstrap) se cargan a través de CDN.

## Estructura de Carpetas

El proyecto sigue una arquitectura Modelo-Vista-Controlador (MVC) para organizar el código de forma clara y escalable.

-   `index.html`: Es el punto de entrada principal de la aplicación. Contiene la estructura HTML de todos los módulos, organizados en pestañas.
-   `App.js`: Actúa como el gestor de estado central de la aplicación. Centraliza los datos (proyectos, tareas, etc.) para que los controladores puedan acceder a ellos de forma consistente.
-   `controllers/`: Contiene la lógica de la aplicación. Cada controlador se encarga de manejar las interacciones del usuario para un módulo específico (ej. `ProjectController.js` maneja la creación y eliminación de proyectos).
-   `models/`: Define la estructura de los datos. Cada archivo de modelo representa una entidad de la aplicación (ej. `Project.js`, `Task.js`).
-   `views/`: Se encarga de la presentación de los datos al usuario. Las vistas manipulan el DOM para mostrar la información y los formularios.
    -   `css/`: Contiene los archivos de estilos personalizados.

## Módulos Implementados

-   **Dashboard**: Muestra un resumen de los proyectos y KPIs.
-   **Gestión de Proyectos**: Permite crear, editar y eliminar proyectos.
-   **Planificación de Etapas**: Permite añadir y eliminar etapas a un proyecto.
-   **Gestión de Tareas**: Visualiza las tareas en un tablero Kanban.
-   **Matriz de Riesgos**: Muestra una tabla con los riesgos del proyecto.
-   **Documentación y Evidencias**: Permite subir y listar documentos.
-   **Indicadores y Reportes**: Muestra gráficos de avance y permite exportar reportes.
-   **Configuración y Seguridad**: Permite gestionar usuarios y roles.

## Arquitectura

La aplicación utiliza un patrón MVC del lado del cliente. La clase `App.js` es fundamental, ya que centraliza el estado y evita que los datos se dispersen entre los diferentes controladores. Esto facilita la comunicación entre módulos y asegura la consistencia de los datos.
