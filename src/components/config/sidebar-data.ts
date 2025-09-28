import {
  BookOpenText,
  Bot,
  CalendarDays,
  CircleCheck,
  MapPin,
  Truck,
} from "lucide-react";

export const data = {
  user: {
    name: "Alex",
    email: "alex@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      id: "chatbot",
      title: "Chat Inteligente",
      url: "/chat",
      icon: Bot,
      isActive: true,
    },
    {
      id: "diagnosis",
      title: "Clasificar enfermedad",
      url: "/diagnostico",
      icon: CircleCheck,
      isActive: false,
    },
    {
      id: "health-info",
      title: "Información de Salud",
      url: "/health-info",
      icon: BookOpenText,
      isActive: false,
    },
    {
      id: "events",
      title: "Eventos y Ferias",
      url: "#",
      icon: CalendarDays,
      isActive: false,
    },
    {
      id: "mobile-clinics",
      title: "Clinicas Moviles",
      url: "#",
      icon: Truck,
      isActive: false,
    },
    {
      id: "nearest-center",
      title: "Centro mas Cercano",
      url: "#",
      icon: MapPin,
      isActive: false,
    },
  ],
};
