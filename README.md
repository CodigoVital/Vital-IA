# CODIGO-VITAL

Reto: Asistente Virtual para la salud - Aficionado
Descripción: Desarrollar una plataforma virtual que permitirá interactuar con un modelo de inteligencia artificial para brindar información sobre recomendaciones para el cuidado de la salud, hábitos de alimentación, rutinas de ejercicio, consultas de atención, recomendaciones para vacunación, signos de alarma de enfermedades e información de la unidad de salud más cercana. Debe incorporar mecanismos de búsqueda interactiva basados en diferentes criterios para ofrecer respuestas eficientes al usuario.

### Funcionalidades 

1. Preclasificación de enfermedades.

2. Promoción de información de salud.

3. Calendario de jornadas y ferias de salud.

4. Programación de clínicas móviles.

5. Visualización de unidad de salud más cercana.

6. Ayuda al usuario a través de un chatbot inteligente.


#  Vital-IA Chatbot Interactivo para la Salud

"Vital-IA" es un compañero digital diseñado para apoyar el bienestar emocional y físico de personas que exploran la salud desde un enfoque aficionado. Este chatbot combina empatía, interacción personalizada y rituales simbólicos para acompañar procesos de autocuidado.

##  Propósito


Vital-IA es una interfaz conversacional empática construida con React y shadcn/ui radix UI. Su propósito es ofrecer una experiencia simbólica, emocionalmente resonante y técnicamente robusta para  consultas, exploración y acompañamiento.

##  Funcionalidades

- Diálogo interactivo con enfoque empático.
- Recomendaciones personalizadas según estado emocional.
- Registro simbólico de hábitos y emociones.
- Integración con proyectos como Vital-IA para seguimiento de mejoras.


##  Arquitectura del Proyecto
| vite.config.ts: Conjurador técnico del entorno.

| ChatMainView.tsx: Sección de arquitectura conversacional. 

| ChatSuggestView.tsx: Componente de sugerencias.

| ChatWindowView.tsx : Componente de mensajes.

| App.tsx : Punto de entrada.

| index.css: Sistema visual.

| .gitignore : Escudo de limpieza técnica.

| shadcn/ui config: Manifiesto estético y simbólico.

| eslint.config.ts: Código de conducta técnica.

| index.html : permite importar archivos modernos con soporte nativo en navegadores.

| package.json: abarca toda la configuración de dependencias, scripts y metadatos necesarios para ejecutar, compilar y mantener tu aplicación.Este archivo configura el entorno de desarrollo para que TypeScript compile y analice proyecto correctamente.

| tsconfig.app.json: Este archivo configura el entorno de desarrollo para que TypeScript compile y analice proyecto correctamente.

| tsconfig.json (raíz): Nexo interdimensional entre configuraciones. 

| tsconfig.node.json: Plano técnico para configuración Vite. Este archivo configura el entorno de desarrollo y build para una aplicación React + Tailwind CSS usando Vite como bundle.



###  Estructura Principal

- App.tsx: Punto de entrada de la aplicación, envuelve el sistema de rutas con BrowserRouter.

- AppRouter.tsx: Define las rutas internas del proyecto.

- ChatMainView.tsx: Muestra la experiencia conversacional con tres secciones:

  - CustomHeader: Presenta el título del proyecto.

  - ChatWindowView: Muestra los mensajes.

  - ChatSuggestView + ChatInput: Ofrece sugerencias y entrada de usuario.



##  Componentes Conversacionales


### ChatWindowView.tsx

Renderiza los mensajes simulados usando ChatMessage dentro de un ScrollArea. (Es donde fluye el diálogo).

### ChatSuggestView.tsx

Muestra botones con sugerencias predefinidas (suggestions) usando el componente Button. (Actúa como una guía de interacción).


##  Estilo y Tematización


### index.css

Define el sistema visual con OKLCH, variables CSS, y soporte para modo oscuro. Incluye:

- Paleta emocional (--color-primary, --color-accent, etc.)

- Radios simbólicos (--radius-sm, --radius-xl)

- Variables para gráficos, sidebar y popovers


### Tipografía

Usa la fuente Inter desde Google Fonts para una experiencia clara y elegante.


## Configuración Técnica


### vite.config.ts

configura Vite con:

- @vitejs/plugin-react-swc: Compilación rápida de React

- @tailwindcss/vite: Integración directa de Tailwind

- Alias @ → ./src para rutas limpias


### tsconfig.json (Raíz)

- Coordina múltiples planos de configuración con references a:

- tsconfig.app.json: Para la aplicación principal.

- tsconfig.node.json: Para vite.config.ts



### tsconfig.app.json

Optimizado para React + TypeScript:

- target: ES2022

-  Bundler mode 

- Linting estricto (noUnusedLocals, noFallthroughCasesInSwitch, etc.)


### tsconfig.node.json

Configuración especializada para vite.config.ts:

- target: ES2023

- moduleResolution: bundler

- noEmit: Solo análisis, sin generación de archivos


## Linting y Calidad

### eslint.config.ts

Usa configuración moderna con:


- typescript-eslint

- eslint-plugin-react-hooks

- eslint-plugin-react-refresh

- globals.browser

- Ignora dist con globalIgnores

##  Dependencias Clave



| Categoría        | Paquetes principales |

|------------------|---------------------------------------------------|

| UI               | shadcn/ui radix UI                                |

| Estilo           | tailwindcss, tw-animate-css, clsx, tailwind-merge |

| React            | react, react-dom, react-router ,lucide-react      |

| Herramientas     | vite, typescript, eslint, @vitejs/plugin-react-swc|


##  Filosofía del Proyecto

Vital-IA no es solo una interfaz. Es un espacio donde la tecnología se humaniza, la conversación se transforma en acompañamiento, y cada componente respira con intención.