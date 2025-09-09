import { Book, Bot, Calendar, Clock, MapPin, Truck } from "lucide-react";

export const data = {
  user: {
    name: "Alex",
    email: "alex@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      title: "Chat Inteligente",
      url: "/chat",
      icon: Bot,
      isActive: true,
    },
    {
      title: "Clasificar enfermedad",
      url: "/diagnostico",
      icon: Clock,
      isActive: false,
    },
    {
      title: "Información de Salud",
      url: "#",
      icon: Book,
      isActive: false,
    },
    {
      title: "Eventos y Ferias",
      url: "#",
      icon: Calendar,
      isActive: false,
    },
    {
      title: "Clinicas Moviles",
      url: "#",
      icon: Truck,
      isActive: false,
    },
    {
      title: "Centro mas Cercano",
      url: "#",
      icon: MapPin,
      isActive: false,
    },
  ],
};
