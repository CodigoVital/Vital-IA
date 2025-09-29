#  EQUIPO CÓDIGO-VITAL: Vital-IA
## Asistente Virtual para la Salud 
---

##  Propósito y Reto del Proyecto

**Vital-IA** es la respuesta al reto de desarrollar una plataforma virtual interactiva que sirva como un compañero digital enfocado en el bienestar emocional y físico para quienes exploran su salud desde un enfoque aficionado y proactivo.

### El Chatbot Vital-IA
Construido con **React** y el sistema de componentes **shadcn/ui (radix UI)**, Vital-IA es una **interfaz conversacional empática**. Su objetivo principal es ofrecer una experiencia:
* **Es una Plataforma que permite:** La transformación  al acompañamiento mediante un chat.
* **Tecnología  Robusta:** Asegurando consultas, exploración y seguimiento eficientes.

---

##  Funcionalidades Clave

Las funcionalidades combinan el soporte emocional con la información práctica de salud, utilizando un **chatbot inteligente** y mecanismos de búsqueda interactiva.

### Funcionalidades Centrales de la Plataforma (Reto Principal)

1.  **Ayuda al Usuario (Chatbot Inteligente):** Diálogo interactivo con un **enfoque asertivo, sereno y profesional**.
2.  **Preclasificación de Enfermedades:** Orientación inicial basada en signos y síntomas de alarma.
3.  **Promoción de Información de Salud:** Recomendaciones sobre hábitos de alimentación, rutinas de ejercicio y vacunación.
4.  **Logística Sanitaria:**
    * Visualización de la unidad de salud más cercana.
    * Calendario de jornadas y ferias de salud.
    * Programación de clínicas móviles.

---

##  Stack Tecnológico

El proyecto está construido sobre una arquitectura moderna y escalable, priorizando la accesibilidad (*accesible UI*).

### Tecnologías Clave

| Tecnología | Paquetes Principales | Propósito |
| :--- | :--- | :--- |
| **Frontend Base** | `react`, `react-dom`, `react-router` | Interfaz de usuario dinámica. |
| **Build Tool** | `vite`, `@vitejs/plugin-react-swc` | Compilación y rendimiento. |
| **Gestión de Estado**| `@reduxjs/toolkit`, `react-redux` | Control centralizado del estado. |
| **Diseño/UI** | `tailwindcss`, `tailwind-merge`, `radix-ui` | Estilo utilitario y componentes accesibles. |
| **Tipado** | `typescript` | Mantenibilidad y seguridad del código. |

### Dependencias Específicas

| Tipo | Paquetes Principales |
| :--- | :--- |
| **UI Accesible** | `Shadcn-UI/React` |
| **Estilo Dinámico** | `clsx`, `tailwind-merge` |
| **Iconografía y Animación** | `lucide-react`, `tw-animate-css` |
| **Linting** | `eslint`, `typescript-eslint` |

---

##  Configuración Técnica

Para levantar este proyecto en local sigue estos pasos:

### Requisitos Previos

* **Node.js** ($\ge18$)
* `npm`, `pnpm` o `yarn`

### Pasos de Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/CodigoVital/Vital-IA.git
    ```
   
2.  **Accede al directorio del proyecto:**
    ```bash
    cd Vital-IA
    ```
3. **Variables de entorno**
   ```bash
   cp .env.template .env
    ```
   en el nuevo archivo que se creo se debe establecer las variables según el valor que corresponda


4.  **Instala las dependencias (ej. usando npm):**
    ```bash
    npm install
    ```

5.  **Inicia la aplicación en modo desarrollo:**
    ```bash
    npm run dev
    ```

---

##  Filosofía del Proyecto
Humanizando la Tecnología en Salud

Vital-IA es más que un repositorio de código; es una manifestación de nuestra creencia en la **tecnología como medio del bienestar personal**.

1.  **Enfoque en la Empatía Digital:** Buscamos que el diálogo sea un **acompañamiento genuino**, donde el usuario se sienta comprendido, impulsando la **importancia** de los hábitos de autocuidado.
2.  **Diseño Centrado en la Persona (DCP):** Priorizamos la **accesibilidad** y la **intuición** en la interfaz, usando sistemas como **Shadcn/UI** para garantizar que cualquier persona, independientemente de su nivel de conocimiento tecnológico, pueda interactuar con la plataforma de manera efectiva y cómoda.
3.  **Nuestro usuario estándar:** Reconocemos y empoderamos a las personas que toman un rol **proactivo** en su salud. Vital-IA no busca reemplazar al profesional médico, sino ser un compañero de exploración, apoyo y referencia para las consultas iniciales y la promoción de la prevención.

**En resumen:** Vital-IA busca que la **tecnología se humanice**, que la conversación se transforme en un **soporte emocional**, y que cada componente en el código respire con la intención de **mejorar la calidad de vida** del usuario.
