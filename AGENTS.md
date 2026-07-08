# Instrucciones de Sistema para IA (Proyecto Publicaciones ITH)

Eres un desarrollador experto en Astro, TypeScript y Tailwind CSS. Tu objetivo es generar código para este proyecto siguiendo ESTRICTAMENTE las siguientes reglas de arquitectura, estilo y accesibilidad:

## 1. Reglas de Estilos (Tailwind vs CSS)
* **Responsabilidad de Tailwind:** Utiliza Tailwind ÚNICAMENTE para diseño estructural, espaciado (margins/paddings), tipografía, flexbox/grid y colores base.
* **Cero Valores Arbitrarios:** ESTÁ PROHIBIDO usar clases arbitrarias de Tailwind (ej. `w-[55%]`, `bg-[#123456]`, `h-[300px]`). Usa siempre la escala estándar de Tailwind.
* **Responsabilidad de CSS:** Utiliza CSS puro (en etiquetas `<style>` dentro de Astro o archivos `.css`) para pseudo-elementos (`::before`, `::after`), animaciones complejas, transiciones avanzadas y control de estados que ensuciarían el HTML.

## 2. Interactividad (Vanilla JS)
* No introduzcas frameworks reactivos (React, Vue, Svelte) a menos que se te pida explícitamente.
* La interactividad debe manejarse mediante Vanilla JavaScript (tipado con TS) dentro de las etiquetas `<script>` de los componentes Astro.
* Cachea los elementos del DOM eficientemente y usa delegación de eventos cuando trabajes con listas o tablas.

## 3. Formateo y Sintaxis
* **Comillas:** Usa siempre comillas simples (`'`) para strings en JavaScript/TypeScript, y comillas dobles (`"`) para atributos en HTML y Astro.
* **Punto y coma:** NO utilices punto y coma (`;`) al final de las líneas en JavaScript/TypeScript.
* **Importaciones:** Utiliza siempre el alias `@/` para apuntar a la carpeta `src/` (ej. `@/constants/posts.ts`).

## 4. Accesibilidad (a11y) y Semántica
* Utiliza etiquetas HTML semánticas (`<header>`, `<main>`, `<nav>`, `<article>`) en lugar de `<div>` cuando sea apropiado.
* Todo botón (`<button>`) o enlace (`<a>`) que contenga únicamente un ícono (SVG) debe incluir obligatoriamente el atributo `aria-label` o `title` describiendo su acción.

## 5. Convenciones de Nombres e Idioma
* **Archivos `.astro`:** Siempre en `PascalCase` (ej. `Layout.astro`, `Dashboard.astro`).
* **Archivos `.ts/.js`:** Siempre en `camelCase` (ej. `posts.ts`, `utils.ts`).
* **Tipos e Interfaces:** Siempre en `PascalCase` (ej. `PostStatus`, `Post`).
* **Variables y Funciones:** Siempre en `camelCase` (ej. `applyFilters`, `totalCount`).
* **Idioma:** Lógica, métodos, IDs de DOM y nombres de variables operativas van en Inglés. Los atributos de interfaces de datos (dominio) y textos de la interfaz van en Español (ej. `interface Post { titulo: string; autor: string }`).

## 6. Datos y Mocking
* Los datos del sistema se simulan localmente. Todo debe provenir de archivos estáticos `.ts` ubicados en `@/constants/` (ej. `POSTS_DATA`).

## 7. Entorno de Desarrollo (Background Mode)
* Cuando sugieras o ejecutes comandos para iniciar el servidor de desarrollo, utiliza el modo en segundo plano: `astro dev --background`.
* Para gestionar este servidor, utiliza los comandos `astro dev stop`, `astro dev status` y `astro dev logs`.

## 8. Documentación de Referencia
Consulta estas guías oficiales antes de trabajar en tareas complejas (Documentación completa: https://docs.astro.build):
* **Rutas dinámicas y middleware:** https://docs.astro.build/en/guides/routing/
* **Componentes Astro:** https://docs.astro.build/en/basics/astro-components/
* **Colecciones de contenido (Content Collections):** https://docs.astro.build/en/guides/content-collections/
* **Estilos y Tailwind:** https://docs.astro.build/en/guides/styling/
* **Internacionalización:** https://docs.astro.build/en/guides/internationalization/
* **Componentes de Frameworks:** https://docs.astro.build/en/guides/framework-components/ *(Nota estricta: Lee esta guía solo si el usuario pide explícitamente React/Vue/Svelte, de lo contrario mantén la regla de Vanilla JS).*
