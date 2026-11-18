# Hoja de vida — Andrés Felipe Porras Garzón

Portafolio y hoja de vida en línea construido con React 19, Vite y Bootstrap (grid).

## Editar el contenido

Todo el contenido (perfil, experiencia, educación, proyectos, ponencias, certificaciones,
habilidades e idiomas) está en [`src/data/profile.js`](src/data/profile.js). No hace falta
tocar los componentes para actualizar la información.

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo
npm run build    # compilar a dist/
npm run preview  # previsualizar la compilación
npm run lint     # revisar el código con oxlint
```

## PDF

En la página **Sobre mí** el botón «Guardar hoja de vida en PDF» abre el diálogo de impresión
del navegador con una versión limpia (sin menú, fondo ni animaciones).

## Despliegue

La app usa `BrowserRouter`. En un hosting estático, configura que todas las rutas
(`/about`, `/projects`, `/blog`) sirvan `index.html`; si no, recargar esas páginas da 404.
