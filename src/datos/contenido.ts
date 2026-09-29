// Todo lo que dice la landing, en un solo lugar.
//
// Los componentes recorren estas listas: para cambiar un texto, agregar un
// producto o corregir un límite no hace falta tocar JSX. Los datos son los
// reales del banco; si el portal gana una función, se agrega acá.

import {
  ArrowRightLeft,
  Banknote,
  Bot,
  CreditCard,
  DollarSign,
  Landmark,
  Receipt,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

/** A dónde van los dos accesos: son las rutas reales del portal. */
export const PORTAL = {
  ingresar: "https://app.orbitalbank.com.ar/ingresar",
  registro: "https://app.orbitalbank.com.ar/registro",
};

export const SECCIONES = [
  { id: "productos", nombre: "Productos" },
  { id: "tarjetas", nombre: "Tarjetas" },
  { id: "beneficios", nombre: "Beneficios" },
  { id: "como-empezar", nombre: "Cómo empezar" },
  { id: "preguntas", nombre: "Preguntas" },
];

export interface Producto {
  icono: LucideIcon;
  titulo: string;
  texto: string;
}

export const PRODUCTOS: Producto[] = [
  {
    icono: Banknote,
    titulo: "Cuentas en pesos y en dólares",
    texto:
      "Tu caja de ahorro en pesos desde el primer día, y la de dólares cuando la quieras, con un toque. CBU y alias propios para que te transfieran de cualquier banco.",
  },
  {
    icono: ArrowRightLeft,
    titulo: "Transferencias al instante",
    texto:
      "A cualquier banco del país, por CBU o por alias. Guardás tus destinatarios frecuentes y cada operación te deja un comprobante en PDF para descargar o mandar.",
  },
  {
    icono: CreditCard,
    titulo: "Tarjetas de débito y crédito",
    texto:
      "La de débito sale al instante atada a tu cuenta. La de crédito llega con el nivel que te corresponde, y podés bloquearla vos mismo si la perdés.",
  },
  {
    icono: Landmark,
    titulo: "Préstamos personales",
    texto:
      "Simulá el crédito con las tasas del día, mirá la cuota antes de decidir y recibí el dinero en tu cuenta. Cuotas fijas, sin sorpresas.",
  },
  {
    icono: TrendingUp,
    titulo: "Plazos fijos",
    texto:
      "Hacé rendir lo que no estás usando. Elegís el plazo, ves cuánto vas a cobrar al vencimiento y lo constituís en el momento.",
  },
  {
    icono: DollarSign,
    titulo: "Dólares a un toque",
    texto:
      "Comprá y vendé al precio del día, de tu caja en pesos a la de dólares. Con un botón que carga todo el saldo disponible, para no hacer cuentas.",
  },
  {
    icono: Receipt,
    titulo: "Servicios y recargas",
    texto:
      "Pagá la luz, el gas o el cable leyendo la factura directo de la empresa, y cargá el celular sin salir del portal.",
  },
  {
    icono: Bot,
    titulo: "Asistente inteligente",
    texto:
      "Preguntale en qué gastaste el mes pasado o cuánto tenés disponible, y te contesta al instante. Sólo consulta: nunca mueve tu plata.",
  },
];

export interface Nivel {
  nivel: "standard" | "gold" | "platinum" | "black";
  nombre: string;
  limite: string;
  beneficios: string[];
}

/** Los mismos cuatro niveles que emite el banco (modules/niveles-tarjeta.js). */
export const NIVELES: Nivel[] = [
  {
    nivel: "standard",
    nombre: "Standard",
    limite: "$ 300.000",
    beneficios: ["Compras en hasta 12 cuotas", "Resumen mensual y control de consumos"],
  },
  {
    nivel: "gold",
    nombre: "Gold",
    limite: "$ 1.500.000",
    beneficios: ["Todo lo de Standard", "Seguro de viaje básico", "Asistencia automotriz"],
  },
  {
    nivel: "platinum",
    nombre: "Platinum",
    limite: "$ 5.000.000",
    beneficios: [
      "Todo lo de Gold",
      "Asistencia en viajes con cobertura global",
      "Salas VIP de aeropuertos",
      "Seguros de compra y garantía extendida",
    ],
  },
  {
    nivel: "black",
    nombre: "Black",
    limite: "$ 15.000.000",
    beneficios: [
      "Todo lo de Platinum",
      "Salas VIP sin límite de accesos",
      "Conserjería 24 horas",
      "Las coberturas más amplias del banco",
    ],
  },
];

export const BENEFICIOS = [
  {
    titulo: "Sin costo de mantenimiento",
    texto: "Abrir la cuenta, tener la tarjeta y transferir no te cuesta nada.",
  },
  {
    titulo: "Todo en el celular",
    texto: "El portal funciona igual de bien en el teléfono que en la computadora.",
  },
  {
    titulo: "Cada movimiento, documentado",
    texto: "Comprobante en PDF de tus transferencias y resumen de gastos por período.",
  },
  {
    titulo: "Vos tenés el control",
    texto: "Bloqueás y desbloqueás tu tarjeta cuando quieras, sin llamar a nadie.",
  },
  {
    titulo: "Dólares sin vueltas",
    texto: "Comprás y vendés a la cotización del día, entre tus propias cuentas.",
  },
  {
    titulo: "Seguridad de banco",
    texto: "Ingreso verificado, cada operación auditada y datos cifrados de punta a punta.",
  },
];

export const PASOS = [
  {
    titulo: "Registrate",
    texto: "Con tu correo y una contraseña. Te lleva menos de un minuto.",
  },
  {
    titulo: "Completá tus datos",
    texto: "Nombre, DNI y teléfono. Con eso queda abierta tu caja de ahorro en pesos.",
  },
  {
    titulo: "Empezá a operar",
    texto: "Pedí la tarjeta, abrí la cuenta en dólares y recibí tu primera transferencia.",
  },
];

export const PREGUNTAS = [
  {
    pregunta: "¿Cuánto cuesta abrir una cuenta?",
    respuesta: "Nada. Ni la apertura ni el mantenimiento tienen costo.",
  },
  {
    pregunta: "¿Puedo recibir transferencias de otros bancos?",
    respuesta:
      "Sí. Tu cuenta tiene CBU y alias propios, así que te pueden transferir desde cualquier banco del país y el dinero se acredita en tu cuenta.",
  },
  {
    pregunta: "¿Qué necesito para pedir una tarjeta de crédito?",
    respuesta:
      "Tener tu perfil completo y una situación crediticia en orden. El banco evalúa tu situación en la Central de Deudores y el saldo de tus cuentas, y te ofrece los niveles a los que llegás. El límite lo define el nivel, no lo pedís vos.",
  },
  {
    pregunta: "¿Cómo compro dólares?",
    respuesta:
      "Desde la sección Dólares del portal, entre tu caja en pesos y tu caja en dólares, a la cotización del momento. Si todavía no tenés cuenta en dólares, la abrís ahí mismo.",
  },
  {
    pregunta: "¿Mi plata está segura?",
    respuesta:
      "El ingreso está protegido con verificación de identidad, cada operación queda registrada en una auditoría y los datos viajan cifrados. Además podés bloquear tu tarjeta al instante desde el portal.",
  },
  {
    pregunta: "¿Necesito instalar una aplicación?",
    respuesta:
      "No. Orbital funciona desde el navegador, en la computadora o en el celular, con la misma experiencia.",
  },
];

/** Los degradados de cada nivel: los mismos que el plástico del portal. */
export const ESTILO_NIVEL: Record<Nivel["nivel"], { franja: string; chip: string; plastico: string }> = {
  standard: {
    franja: "from-[#374151] to-[#94A3B8]",
    chip: "bg-[#94A3B8]/15 text-[#CBD5E1] border-[#94A3B8]/30",
    plastico: "from-[#1F2937] via-[#374151] to-[#4B5563]",
  },
  gold: {
    franja: "from-[#6B4E0F] to-[#E8C97A]",
    chip: "bg-[#E8C97A]/15 text-[#E8C97A] border-[#E8C97A]/30",
    plastico: "from-[#6B4E0F] via-[#B08A2E] to-[#E8C97A]",
  },
  platinum: {
    franja: "from-[#3F4A5A] to-[#D7DEE8]",
    chip: "bg-[#D7DEE8]/15 text-[#E4EAF2] border-[#D7DEE8]/30",
    plastico: "from-[#3F4A5A] via-[#8C9AAD] to-[#D7DEE8]",
  },
  black: {
    franja: "from-black to-[#3A3A40]",
    chip: "bg-white/10 text-white border-white/25",
    plastico: "from-black via-[#141417] to-[#3A3A40]",
  },
};
