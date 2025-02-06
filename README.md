# API Carros Laravel magicLog

## Descripción del Proyecto

Este proyecto es una aplicación web para la gestión de vehículos. Permite a los usuarios registrar, consultar, editar y eliminar información sobre vehículos, incluyendo marca, modelo, año, color y precio. La aplicación ofrece funcionalidades de búsqueda y filtrado para facilitar la localización de vehículos específicos.

[![Captura-de-pantalla-2025-02-06-a-la-s-4-17-28-p-m.png](https://i.postimg.cc/Nfb7rKXt/Captura-de-pantalla-2025-02-06-a-la-s-4-17-28-p-m.png)](https://postimg.cc/GH8sWhzg)
[![Captura-de-pantalla-2025-02-06-a-la-s-4-17-37-p-m.png](https://i.postimg.cc/rwmGGqGr/Captura-de-pantalla-2025-02-06-a-la-s-4-17-37-p-m.png)](https://postimg.cc/4mDhskSf)
[![Captura-de-pantalla-2025-02-06-a-la-s-4-32-06-p-m.png](https://i.postimg.cc/pdr0dDc3/Captura-de-pantalla-2025-02-06-a-la-s-4-32-06-p-m.png)](https://postimg.cc/f34720Nv)
[![Captura-de-pantalla-2025-02-06-a-la-s-4-28-33-p-m.png](https://i.postimg.cc/d326fnDZ/Captura-de-pantalla-2025-02-06-a-la-s-4-28-33-p-m.png)](https://postimg.cc/fSbYtccM)
[![Captura-de-pantalla-2025-02-06-a-la-s-4-31-02-p-m.png](https://i.postimg.cc/pLXC0fvy/Captura-de-pantalla-2025-02-06-a-la-s-4-31-02-p-m.png)](https://postimg.cc/9rKy0qrj)

[![Captura-de-pantalla-2025-02-06-a-la-s-4-32-12-p-m.png](https://i.postimg.cc/rpHfRKvs/Captura-de-pantalla-2025-02-06-a-la-s-4-32-12-p-m.png)](https://postimg.cc/WDMGQbpc)
[![Captura-de-pantalla-2025-02-06-a-la-s-4-31-53-p-m.png](https://i.postimg.cc/2SzcspQk/Captura-de-pantalla-2025-02-06-a-la-s-4-31-53-p-m.png)](https://postimg.cc/Tp4Jb4NF)
[![Captura-de-pantalla-2025-02-06-a-la-s-4-31-15-p-m.png](https://i.postimg.cc/15KMcWLL/Captura-de-pantalla-2025-02-06-a-la-s-4-31-15-p-m.png)](https://postimg.cc/RNNcvTCR)
[![Captura-de-pantalla-2025-02-06-a-la-s-4-32-34-p-m.png](https://i.postimg.cc/bw3C86gQ/Captura-de-pantalla-2025-02-06-a-la-s-4-32-34-p-m.png)](https://postimg.cc/75JMnnp6)
[![Captura-de-pantalla-2025-02-06-a-la-s-4-29-00-p-m.png](https://i.postimg.cc/RVmXtrb7/Captura-de-pantalla-2025-02-06-a-la-s-4-29-00-p-m.png)](https://postimg.cc/qgmsfFrq)


## Tecnologías Utilizadas

Este proyecto ha sido desarrollado utilizando las siguientes tecnologías principales:

### Backend

*   **Laravel 11.x:** Un framework de PHP robusto y escalable para el desarrollo de aplicaciones web. Facilita tareas comunes como el enrutamiento, la gestión de bases de datos, la autenticación y la gestión de sesiones.

    *   **Características principales:**
        *   **Arquitectura MVC (Modelo-Vista-Controlador):** Separa la lógica de la aplicación en componentes reutilizables, promoviendo la organización y el mantenimiento del código.
        *   **Sistema de plantillas Blade:** Permite crear vistas dinámicas de forma sencilla y eficiente, facilitando la creación de interfaces de usuario interactivas.
        *   **Eloquent ORM:** Simplifica la interacción con la base de datos utilizando objetos y relaciones, permitiendo escribir consultas de manera más intuitiva.
        *   **Sistema de enrutamiento:** Define las rutas de la aplicación de forma clara y organizada, facilitando la navegación y el acceso a las diferentes funcionalidades.
        *   **Seguridad:** Ofrece protección contra vulnerabilidades comunes como la inyección SQL y la falsificación de solicitudes entre sitios (CSRF), garantizando la seguridad de la aplicación.

*   **PHP 8.2 o superior:** El lenguaje de programación en el que está escrito Laravel. La versión 8.2 (o superior) ofrece mejoras de rendimiento y nuevas características en comparación con versiones anteriores, lo que se traduce en una mayor eficiencia y capacidad de la aplicación.

*   **Base de datos:** Mysql en amazon en el env encontrarás la conexión

### Frontend

*   **React:** Una biblioteca de JavaScript para construir interfaces de usuario interactivas y reutilizables. Permite crear componentes que gestionan su propio estado y se actualizan de forma eficiente cuando los datos cambian, lo que se traduce en una experiencia de usuario fluida y dinámica.

*   **Inertia.js:** Permite utilizar las características de enrutamiento y otras funcionalidades del backend (Laravel) en el frontend (React). Facilita la creación de aplicaciones de una sola página (SPA) con una experiencia de usuario fluida y sin interrupciones.

*   **Tailwind CSS:** Un framework de CSS "utility-first" que proporciona clases predefinidas para estilizar elementos HTML de forma rápida y sencilla. Permite crear diseños personalizados sin necesidad de escribir CSS personalizado en gran medida, lo que agiliza el proceso de diseño y desarrollo.

*   **Vite:** Una herramienta de construcción de frontend que ofrece un entorno de desarrollo rápido y eficiente. Permite la recarga en caliente instantánea (HMR) y la optimización del código para producción, lo que se traduce en un flujo de trabajo más ágil y una mayor eficiencia en el desarrollo.

### Documentación de la API

*   **L5-Swagger:** Un paquete de Laravel que integra Swagger, una herramienta para documentar APIs RESTful. Permite generar una documentación interactiva y fácil de usar a partir de anotaciones en el código, lo que facilita la comprensión y el uso de la API.

### Información adicional

*   **SweetAlert2:** Una librería de JavaScript para crear alertas modales (pop-ups) personalizadas y atractivas en el frontend de tu aplicación, mejorando la experiencia de usuario y la comunicación de información importante.

## Instalación

1.  **Clona el repositorio:**

    ```bash
    git clone https://github.com/sebastianlinux/autos-laravel.git
    ```

2.  **Instala las dependencias del backend:**

    ```bash
    cd autos-laravel
    composer install
    ```

3.  **Copia el archivo `.env.example` a `.env` y configura las variables de entorno:**

    ```bash
    cp .env.example .env
    ```

4.  **Genera la clave de la aplicación:**

    ```bash
    php artisan key:generate
    ```

5.  **Crea la base de datos (si es necesario) y ejecuta las migraciones:**

    ```bash
    php artisan migrate
    ```

6.  **Instala las dependencias del frontend:**

    ```bash
    npm install
    ```

## Desarrollo

1.  **Inicia el servidor de desarrollo:**

    ```bash
    npm run dev
    php artisan serve
    ```

    Este comando iniciará el servidor de desarrollo de Vite para el frontend y el servidor de Laravel para el backend.

## Documentación de la API (Swagger)

Este proyecto incluye documentación interactiva de la API utilizando L5-Swagger.

1.  **Genera la documentación:**

    ```bash
    php artisan l5-swagger:generate
    ```

2.  **Accede a la documentación:**

    Abre tu navegador y visita la siguiente URL:

    ```
    http://localhost:8000/api/documentation
    ```

    (o la ruta que este configurada en `config/l5-swagger.php`).

    Aquí encontrarás la documentación completa de la API, incluyendo las rutas, parámetros, respuestas y modelos.  Podrás probar las diferentes endpoints directamente desde la interfaz de Swagger UI.

## Scripts

*   `php artisan serve`: Inicia el servidor web local.
*   `npm run build`: Construye la aplicación para producción.
*   `npm run dev`: Inicia el servidor de desarrollo.
*   `npm run lint`: Ejecuta el linter para el código JavaScript/TypeScript.
*   `composer install`: Instala las dependencias del backend.
*   `php artisan migrate`: Ejecuta las migraciones de la base de datos.
*   `php artisan l5-swagger:generate`: Genera la documentación de Swagger.


## Licencia
MIT