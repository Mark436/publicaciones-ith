# Publicaciones ITH 🎓

Proyecto para la materia de Ingeniería de Software.

## 🚀 Tecnologías

- Astro
- Tailwind CSS
- TypeScript
- JavaScript

---

## 📁 Estructura

```text
src/
├── assets/
├── components/
├── constants/
├── layouts/
└── pages/

public/
package.json
```

---

## ▶️ Cómo iniciar el proyecto

Instala las dependencias:

```bash
pnpm install
```

Inicia el servidor:

```bash
pnpm dev
```

Abre:

```
http://localhost:4321
```

---

## 💻 Comandos

| Comando | Acción |
|----------|--------|
| `pnpm install` | Instala las dependencias |
| `pnpm dev` | Inicia el servidor de desarrollo |
| `pnpm build` | Compila el proyecto |
| `pnpm preview` | Ejecuta la versión compilada |
| `pnpm astro ...` | Ejecuta comandos de Astro |

---

## 🌿 Git

- Crea una rama para tu trabajo.
- Haz tus cambios en esa rama.
- Envía un Pull Request a `dev`.
- **No hagas push directo a `main`.**

---

## 📌 Reglas del proyecto

- Usa `@/` para importar archivos de `src`.
- Los datos de prueba van en `src/constants/`.
- Código (variables, funciones, lógica) en **inglés**.
- Textos de la aplicación y datos en **español**.
- No agregues frameworks como React, Vue o Svelte.

---

# 🤖 Uso con ChatGPT, Claude, Gemini, Copilot, Cursor, etc.

Si vas a utilizar una IA para ayudarte con el proyecto, copia este prompt al inicio de la conversación.

> **Prompt recomendado**

```text
Estoy trabajando en el proyecto "Publicaciones ITH" (para la materia de Ingeniería de Software) hecho con Astro, Tailwind CSS, TypeScript y Vanilla JavaScript.

Quiero que todo el código que generes, sugieras o modifiques siga ESTRICTAMENTE estas reglas:

**1. Stack y Arquitectura**
- Usa Astro como framework principal. Renderizado estático por defecto.
- No utilices React, Vue, Svelte ni otros frameworks reactivos.
- Toda la interactividad debe hacerse exclusivamente con Vanilla JavaScript dentro de etiquetas `<script>`.
- Usa TypeScript cuando sea posible (interfaces, aserciones de tipos del DOM, etc.).

**2. Estilos (Tailwind y CSS)**
- Utiliza Tailwind ÚNICAMENTE para layout, espaciado, tipografía y colores base.
- PROHIBIDO usar clases arbitrarias de Tailwind (como `w-[200px]`, `h-[300px]`, `text-[15px]` o `bg-[#123456]`). Usa siempre la escala estándar.
- Si necesitas animaciones, pseudo-elementos (`::before`, `::after`) o estilos/estados complejos, utiliza CSS puro.

**3. Buenas Prácticas y Sintaxis**
- Usa HTML semántico (`<main>`, `<article>`, `<nav>`, etc.).
- Todo botón o enlace que solo tenga un ícono debe incluir `aria-label` o `title`.
- Usa comillas simples en JavaScript y TypeScript.
- No utilices punto y coma (`;`) al final de las líneas en JavaScript/TypeScript.
- Usa el alias `@/` para importar archivos estáticos desde `src` (ej. `import { data } from '@/constants/posts.ts'`).

**4. Convenciones de Nombres e Idioma (Spanglish Controlado)**
- Los archivos `.astro` deben llamarse en PascalCase.
- Los archivos `.ts` y `.js` deben llamarse en camelCase.
- La lógica operativa (variables, funciones, métodos, IDs de DOM) debe estar en inglés (ej. `applyFilters`, `toastTimer`).
- Los textos de la interfaz gráfica y el modelo de datos (propiedades de objetos, interfaces) deben estar en español (ej. `titulo`, `autor`, `PostStatus`).

**5. Datos y Entorno**
- Los datos simulados del sistema deben estar tipados y alojados en `src/constants/`.
- Al sugerir comandos de consola para iniciar el servidor de desarrollo, utiliza el modo en segundo plano: `astro dev --background` (para gestionarlo sugiere `astro dev stop`, `status` o `logs`).

**6. Documentación Oficial de Referencia**
Si tienes dudas sobre la API de Astro, básate en estas guías oficiales antes de responder:
- Rutas: https://docs.astro.build/en/guides/routing/
- Componentes: https://docs.astro.build/en/basics/astro-components/
- Colecciones: https://docs.astro.build/en/guides/content-collections/
- Estilos: https://docs.astro.build/en/guides/styling/

Si detectas código en mis peticiones que no sigue estas reglas, corrígelo automáticamente. A partir de este momento, cada respuesta tuya debe respetar estas directrices al 100% sin necesidad de volver a recordártelas ni mencionarlas.
```

---

## 💡 Recomendación
si averiguas como utiliza el claude.md y el agents.md para la ia, si no, con el prompt vamos más q mejor
