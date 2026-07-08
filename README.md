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
Estoy trabajando en un proyecto hecho con Astro, Tailwind CSS, TypeScript y Vanilla JavaScript.

Quiero que todo el código siga estas reglas:

- Usa Astro como framework.
- No utilices React, Vue, Svelte ni otros frameworks.
- Toda la interactividad debe hacerse con Vanilla JavaScript.
- Usa TypeScript cuando sea posible.
- Utiliza Tailwind únicamente para layout, espaciado, tipografía y colores base.
- No uses clases arbitrarias de Tailwind como w-[200px], h-[300px], text-[15px] o bg-[#123456].
- Si necesitas animaciones, pseudo-elementos o estilos complejos utiliza CSS.
- Usa HTML semántico.
- Todo botón o enlace que solo tenga un ícono debe incluir aria-label.
- Usa comillas simples en JavaScript y TypeScript.
- No utilices punto y coma al final de las líneas.
- Usa el alias @/ para importar archivos desde src.
- Los archivos .astro deben llamarse en PascalCase.
- Los archivos .ts y .js deben llamarse en camelCase.
- Las variables y funciones deben estar en inglés.
- Los textos de la interfaz y los datos del sistema deben estar en español.
- Los datos simulados deben estar en src/constants.
- Si detectas código que no sigue estas reglas, corrígelo automáticamente.

A partir de este momento, cada respuesta debe respetar estas reglas sin necesidad de volver a recordártelas.
```

---

## 💡 Recomendación
si averiguas como utiliza el claude.md y el agents.md para la ia, si no, con el prompt vamos más q mejor
