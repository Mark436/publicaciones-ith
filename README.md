# Publicaciones ITH

Proyecto para la materia de ingeniería de software

## Estructura del proyecto

Este es un proyecto de astro con las siguientes carpetas y archivos:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

## Comandos

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Instala dependencias                             |
| `pnpm dev`             | Inicia servidor local en `localhost:4321`        |
| `pnpm build`           | Compila para producción en `./dist/`             |
| `pnpm preview`         | Revisa tu compilación para ver cómo queda        |
| `pnpm astro ...`       | Comandos de astro como `astro add`,`astro check` |
| `pnpm astro -- --help` | Ayuda con los comandos de astro                  |
