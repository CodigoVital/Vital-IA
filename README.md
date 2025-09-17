# CODIGO-VITAL
Reto: Asistente Virtual para la salud - Aficionado
Descripción: Desarrollar una plataforma virtual que permitirá interactuar 
con un modelo de inteligencia artificial para brindar información sobre 
recomendaciones para el cuidado de la salud, hábitos de alimentación, rutinas 
de ejercicio, consultas de atención, recomendaciones para vacunación, signos 
de alarma de enfermedades e información de la unidad de salud más cercana. 
Debe incorporar mecanismos de búsqueda interactiva basados en diferentes 
criterios para ofrecer respuestas eficientes al usuario.
Funcionalidades 
1. Preclasificación de enfermedades.
2. Promoción de información de salud.
3. Calendario de jornadas y ferias de salud.
4. Programación de clínicas móviles.
5. Visualización de unidad de salud más cercana.
6. Ayuda al usuario a través de un chatbot inteligente.

#  Vital-IA

Vital-IA es una interfaz conversacional empática construida con React, Vite, TailwindCSS y Radix UI. Su propósito es ofrecer una experiencia simbólica, emocionalmente resonante y técnicamente robusta para consultas, exploración y acompañamiento.

#  Vital-IA: Chatbot Interactivo para la Salud Aficionada

"Vital-IA" es un compañero digital diseñado para apoyar el bienestar emocional y físico de personas que exploran la salud desde un enfoque aficionado. Este chatbot combina empatía, interacción personalizadas para acompañar procesos de autocuidado.

##  Propósito

Vital-IA es una interfaz conversacional empática construida con React, Vite, TailwindCSS y Radix UI. Su propósito es ofrecer una experiencia simbólica, emocionalmente resonante y técnicamente robusta para  consultas, exploración y acompañamiento.

##  Arquitectura del Proyecto

###  Estructura Principal

- App.tsx: Punto de entrada de la aplicación, envuelve el sistema de rutas con BrowserRouter.
- AppRouter.tsx: Define las rutas internas del proyecto.
- ChatMainView.tsx: Orquesta la experiencia conversacional con tres secciones:
  - CustomHeader: Presenta el título del proyecto.
  - ChatWindowView: Muestra los mensajes.
  - ChatSuggestView + ChatInput: Ofrece sugerencias y entrada de usuario.

##  Funcionalidades

- Diálogo interactivo con enfoque empático
- Recomendaciones personalizadas según estado emocional
- Registro simbólico de hábitos y emociones
- Integración con proyectos como Vital-IA para seguimiento de mejoras

## Estructura de Issues

Este repositorio incluye una plantilla para reportar errores técnicos:
##  DashboardLayout: Estructura del Santuario

El componente DashboardLayout define la arquitectura visual del espacio principal de Vital-IA. Es el santuario donde el chatbot interactúa, se transforma y se presenta ante el usuario.

###  Estructura

- SidebarProvider: Provee el contexto para la navegación lateral.
- AppSidebar: Barra lateral personalizada con accesos clave.
- SidebarInset: Ajusta el contenido para convivir con la barra.
- <main>: Área principal con diseño responsivo y fondo suave (bg-slate-100).
- <Outlet />: Punto de entrada para las vistas dinámicas según la ruta.

###  Estilo y experiencia

El layout está diseñado con TailwindCSS, ofreciendo:

- Espaciado armonioso 
- Fondo calmado que invita a la introspección.
- Contenedor redondeado 
- Overflow controlado para una experiencia fluida.

Este componente actúa como el templo donde Vital-IA se manifiesta, adaptándose a cada interacción con claridad.

##  cn: Compositor de clases

La función cn es un helper que Vital-IA utiliza para componer clases CSS de forma limpia y eficiente. Actúa como un alquimista visual, fusionando estilos sin conflictos.

El componente AppRouter define la estructura de rutas dentro de Vital-IA. Es el mapa  que guía al usuario por los distintos espacios del proyecto.

###  Rutas definidas

- / → Página principal del chat (ChatPage)
- /chat → Acceso directo al chatbot
- /diagnostico → Página de diagnóstico (en construcción)

Todas estas rutas están envueltas por DashboardLayout, que provee una experiencia visual coherente y empática.

###  Propósito

- Organizar la navegación interna del proyecto
- Facilitar la expansión modular de nuevas secciones
- Mantener una experiencia fluida y simbólicamente integrada

Este componente es el cartógrafo silencioso que permite que cada interacción ocurra en el lugar correcto, bajo el diseño correcto, con la intención correcta.


##  ChatInput: Altar de la Palabra

El componente ChatInput es el espacio donde el usuario deposita su consulta, iniciando el ritual conversacional con Vital-IA. Está diseñado para ser intuitivo, accesible y visualmente armonioso.

###  Estructura

- Input: Campo de texto con borde estilizado
- Button: Botón de envío con ícono (SendHorizonal)
- Contenedor: Fondo claro, bordes redondeados, espaciado generoso

###  Propósito

- Invitar al usuario a expresar su inquietud o necesidad
- Activar el flujo de conversación con claridad visual
- Mantener una estética empática y profesional

Este componente es el umbral donde la intención se convierte en diálogo, y el texto en transformación.

Ejemplo: "Escribe tu consulta aqui"

##  ChatMessage: Eco Visual del Diálogo

El componente ChatMessage representa cada mensaje dentro del flujo conversacional de Vital-IA. Su diseño distingue entre mensajes propios y ajenos, ofreciendo una experiencia visual clara y empática.

###  Estructura

- Avatar: Muestra la inicial del remitente
- AvatarFallback: Color personalizado (#73C7E3) para identidad visual
- message: Texto del mensaje, estilizado con rounded-2xl y bg-gray-200
- timestamp: Hora del mensaje, mostrada con opacidad suave

###  Comportamiento

- Si isOwnMessage es true, el mensaje se alinea a la derecha (flex-row-reverse)
- Si es false, se alinea a la izquierda (flex-row)
- Usa el helper cn para fusionar clases de forma limpia

#  Ejemplo visual


El componente ChatMainView organiza la experiencia completa del chatbot Vital-IA. Es el espacio donde la intención, la interacción y la inspiración se entrelazan.

#  Estructura

- CustomHeader: Presenta el nombre del proyecto como invocación inicial
- ChatWindowView: Muestra los mensajes en curso
- ChatSuggestView: Ofrece sugerencias empáticas y rituales de consulta
- ChatInput: Permite al usuario escribir y enviar su mensaje

# Diseño

- Usa flex flex-col h-full para distribuir verticalmente cada sección
- Las áreas superiores e inferiores (shrink-0) se mantienen fijas
- El centro (flex-1) se adapta dinámicamente al contenido

Este componente es el santuario donde Vital-IA escucha, responde y transforma cada palabra en experiencia.

##  ChatSuggestView: 

El componente ChatSuggestView ofrece al usuario una serie de sugerencias empáticas para iniciar la conversación con Vital-IA. Actúa como una guía sin imponer, ofreciendo caminos posibles para el diálogo.

###  Estructura

- suggestions: Array de frases sugeridas
- Button: Cada sugerencia se presenta como un botón estilizado
- Contenedor: Borde decorativo, espaciado vertical, diseño envolvente

###  Propósito

- Facilitar el inicio de la conversación
- Invitar a la exploración emocional o temática
- Mantener una estética clara, accesible y empática

Este componente previo a la invitación desde la curiosidad o la necesidad.