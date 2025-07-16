# Proyecto de Portafolio - Ángela Dev

Este proyecto es un portafolio personal diseñado para mostrar mis habilidades y proyectos desarrollados como desarrolladora de software. El portafolio está construido utilizando tecnologías modernas que garantizan una experiencia de usuario fluida y rápida.

## Tecnologías Utilizadas

- **React**: Para la construcción de la interfaz de usuario, proporcionando componentes reutilizables y eficientes.
- **TypeScript**: Añadiendo tipado estático para mejorar la robustez del código y la facilidad de mantenimiento.
- **Vite**: Para una configuración de desarrollo rápida y eficiente, con recarga en tiempo real (HMR).

## Características del Proyecto

- **Diseño Responsivo**: La aplicación está diseñada para funcionar bien en dispositivos de todos los tamaños.
- **Optimización del Rendimiento**: Implementando lazily loading y división de código para mejorar los tiempos de carga.
- **Accesibilidad**: Cumplimiento con las mejores prácticas para garantizar que la aplicación sea accesible para todos los usuarios.

## Instalación y Configuración

1. Clona este repositorio:
   ```bash
   git clone https://github.com/angela-dev/portfolio-angela-dev.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd portfolio-angela-dev
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia el entorno de desarrollo:
   ```bash
   npm run dev
   ```

## Servidor para Formulario de Contacto

Este proyecto incluye un servidor Express para manejar envíos de formularios de contacto. El servidor utiliza Nodemailer para enviar correos electrónicos.

### Configuración del Servidor

1. Navega al directorio del servidor:
   ```bash
   cd server
   ```
2. Crea un archivo `.env` y define las siguientes variables:
   ```env
   EMAIL_USER=tu_correo@gmail.com
   EMAIL_PASS=tu_contraseña
   PORT=5000
   ```
3. Instala las dependencias del servidor:
   ```bash
   npm install
   ```
4. Inicia el servidor:
   ```bash
   npm start
   ```

El servidor está configurado para escuchar en `/api/contact` para envíos de formularios y envía un correo a través de Gmail.

## Contacto

Si estás interesado en trabajar conmigo o tienes alguna pregunta, no dudes en contactarme:

- **Email:** angela.dev@example.com
- **LinkedIn:** [linkedin.com/in/angela-dev](https://linkedin.com/in/angela-dev)

Espero que encuentres este portafolio interesante y que refleje mi pasión y habilidad en el desarrollo de software.
