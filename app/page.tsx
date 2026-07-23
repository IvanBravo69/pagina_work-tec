import Image from "next/image";
import AnimateOnScroll from "./components/AnimateOnScroll";
import StatsCounter from "./components/StatsCounter";

// ── Icons ────────────────────────────────────────────────────────────────────

function IconHardHat() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C8 3 4.5 6 4 10H3v3h18v-3h-1c-.5-4-4-7-8-7z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13v1a1 1 0 001 1h16a1 1 0 001-1v-1" />
    </svg>
  );
}
function IconBeaker() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6M9 3v8l-4 9h14l-4-9V3" />
    </svg>
  );
}
function IconRuler() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <rect x="3" y="10" width="18" height="4" rx="1" />
      <path strokeLinecap="round" d="M7 10V8M10 10V9M13 10V8M16 10V9" />
    </svg>
  );
}
function IconFire() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2c0 4-3 6-3 9a3 3 0 006 0c0-3-3-5-3-9z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a3 3 0 006 0" />
    </svg>
  );
}
function IconScale() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 8l4 8H3M17 8l4 8h-4M3 21h18" />
    </svg>
  );
}
function IconLeaf() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22C6 22 3 17 3 12c0-6 6-9 9-9 5 0 9 4 9 9-4 0-7-2-9-5 0 5-2 9 0 15z" />
    </svg>
  );
}
function IconPerson() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <circle cx="12" cy="5" r="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 21v-5H6l2-7h8l2 7h-2v5" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L4 7v5c0 5 4 9 8 10 4-1 8-5 8-10V7l-8-4z" />
    </svg>
  );
}
function IconCertificate() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <rect x="3" y="3" width="18" height="14" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6M9 20l3-3 3 3" />
    </svg>
  );
}
function IconBuilding() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4" />
    </svg>
  );
}
function IconGear() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <circle cx="12" cy="12" r="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}
function IconPlant() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22V12M12 12C12 7 7 4 4 5c0 4 3 7 8 7zM12 12c0-5 5-8 8-7-1 4-4 7-8 7z" />
    </svg>
  );
}
function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  );
}
function IconBook() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4zM4 9h16M9 4v16" />
    </svg>
  );
}

// ── Data ────────────────────────────────────────────────────────────────────


const values = [
  { title: "Compromiso", desc: "Dedicación total con la seguridad de nuestros clientes" },
  { title: "Integridad", desc: "Actuamos con honestidad y transparencia en cada proyecto" },
  { title: "Innovación", desc: "Buscamos constantemente mejores soluciones y tecnologías" },
  { title: "Colaboración", desc: "Trabajamos en equipo con nuestros clientes y partners" },
  { title: "Sostenibilidad", desc: "Comprometidos con el medio ambiente y el futuro" },
];

const services = [
  {
    icon: <IconBook />,
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
    title: "Capacitación y Formación",
    desc: "Inducción de personal, uso de EPP, procedimientos de emergencia y trabajos en altura.",
    items: ["Inducción con normativas de seguridad","Capacitación en uso correcto de EPP","Evacuación y primeros auxilios","Trabajos en altura y espacios confinados"],
    extraGroups: [
      { title: "Tipos de capacitación", items: ["Inducción general y específica por puesto","Uso y mantenimiento de EPP","Procedimientos de emergencia y evacuación","Primeros auxilios básicos","Trabajos en altura con arnés antitrauma","Espacios confinados y maquinaria peligrosa"] },
      { title: "Aspectos clave", items: ["Obligatorio según Ley 19.587 y Dec. 351/79","Registros firmados por el personal capacitado","Capacitaciones adaptadas a cada sector productivo","Certificados de asistencia disponibles"] },
    ],
  },
  {
    icon: <IconHardHat />,
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    title: "Programas de Seguridad para Obras",
    desc: "Planes preventivos y programas según resoluciones SRT vigentes.",
    items: ["Planes preventivos Res. SRT 51/97, 35/98 y 319/99","Complementarias: SRT 550/11, 503/14 y 61/2023","Trabajos en altura: arnés antitrauma","Marco normativo Decreto 911/96"],
    extraGroups: [
      { title: "Documentación requerida", items: ["Programa de Seguridad (PS) ante la SRT","Aviso de inicio de obra","Legajo técnico del responsable de seguridad","Plan de rescate para trabajos en altura","Registro de capacitaciones y simulacros"] },
      { title: "Normativa aplicable", items: ["Decreto 911/96 — Industria de la construcción","Res. SRT 51/97, 35/98, 319/99, 550/11","Res. SRT 503/14, 905/15 y 61/2023","Ley 19.587 de Higiene y Seguridad"] },
    ],
  },
  {
    icon: <IconRuler />,
    img: "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=600&q=80",
    title: "Mediciones Laborales",
    desc: "Monitoreos técnicos que evalúan agentes de riesgo físicos, químicos o ergonómicos, asegurando el cumplimiento normativo (Dec. 351/79, Res. 295/03).",
    items: ["Ruido, iluminación y vibraciones","Carga térmica y material particulado","Compuestos Orgánicos Volátiles (COV / VOCs)","Puesta a tierra y termografías","Espesores por ultrasonido"],
    extraGroups: [
      { title: "Principales mediciones", items: ["Nivel Sonoro (Ruido): Sonómetro o dosímetro, validez anual","Iluminación: Medición de luxes (Res. SRT 84/2012)","Carga Térmica: Estrés por calor o frío","Vibraciones: Cuerpo entero o mano-brazo","Contaminantes Químicos y Polvo: Calidad de aire","Puesta a Tierra (PAT): Resistencia y continuidad eléctrica"] },
      { title: "Aspectos clave", items: ["Obligatoriedad: Cumplimiento obligatorio para prevenir riesgos","Periodicidad: Validez anual o ante cambios en puestos","Protocolos: Instrumentos calibrados (Res. 295/03, SRT 84/12)","Objetivo: Identificar, evaluar y controlar riesgos laborales"] },
    ],
  },
  {
    icon: <IconFire />,
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    title: "Calderas y Vapor",
    desc: "Habilitación, reparación, medición de espesores y calibración de válvulas.",
    items: ["Habilitación Decreto Córdoba 851/2021","Reparación con reparador registrado","Medición de espesores (ultrasónico)","Calibración de válvulas de seguridad"],
    extraGroups: [
      { title: "Servicios incluidos", items: ["Habilitación inicial y renovación periódica","Inspección técnica de recipientes a presión","Medición de espesores por ultrasonido","Calibración y prueba de válvulas de seguridad","Termografía de superficies y conexiones","Análisis termográfico de tableros asociados"] },
      { title: "Normativa", items: ["Decreto Provincial Córdoba 851/2021","Normas IRAM aplicables a calderas y recipientes","Registro ante Secretaría de Industria","Reparador habilitado por autoridad competente"] },
    ],
  },
  {
    icon: <IconBeaker />,
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80",
    title: "Laboratorio de Análisis",
    desc: "Análisis bacteriológicos, fisicoquímicos de agua, aceites y líquidos refrigerantes.",
    items: ["Análisis bacteriológicos y fisicoquímicos","Toma de muestras con cadena de custodia","Análisis de aceites y gasoil","Análisis de líquidos refrigerantes"],
    extraGroups: [
      { title: "Tipos de análisis", items: ["Agua potable: bacteriológico y fisicoquímico","Agua de proceso y efluentes industriales","Aceites: viscosidad, acidez, humedad, índice de saponificación","Gasoil: contaminantes y degradación","Líquidos refrigerantes: concentración y pH","Muestras ambientales: aire, suelo"] },
      { title: "Aspectos clave", items: ["Cadena de custodia certificada en todas las muestras","Informes con resultados y límites normativos","Cumplimiento Código Alimentario Argentino (CAA)","Plazo de entrega de resultados en 5-10 días hábiles"] },
    ],
  },
  {
    icon: <IconScale />,
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
    title: "Asesoría Legal en Seguridad",
    desc: "Ingeniería en planta, monitoreo técnico y acompañamiento en inspecciones.",
    items: ["Asistencia de ingeniería en planta","Monitoreo técnico de equipos","Inspecciones: Ministerio, CyMAT, ART","Programas PRS, PAI y PRAM"],
    extraGroups: [
      { title: "Servicios de asesoría", items: ["Servicio de higiene y seguridad en planta permanente","Confección y actualización del legajo técnico","Acompañamiento en inspecciones ministeriales y de ART","Gestión de notificaciones y descargos ante organismos","Implementación de programas de reducción de siniestralidad"] },
      { title: "Programas especiales", items: ["PRS: Programa de Reducción de Siniestralidad","PAI: Plan de Acción Inmediata","PRAM: Programa de Reducción de Altas en Medicare","Estadísticas e índices de siniestralidad mensual"] },
    ],
  },
  {
    icon: <IconLeaf />,
    img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=600&q=80",
    title: "Gestión Ambiental",
    desc: "Evaluación de impacto ambiental, sistemas de gestión y monitoreo de emisiones.",
    items: ["Evaluación de impacto ambiental (EIA)","Sistemas de gestión ambiental (SGA)","Monitoreo de emisiones atmosféricas","Decreto Provincial 847/19"],
    extraGroups: [
      { title: "Servicios ambientales", items: ["Evaluación de Impacto Ambiental (EIA)","Implementación de Sistema de Gestión Ambiental ISO 14001","Monitoreo de emisiones gaseosas y material particulado","Gestión de residuos peligrosos y no peligrosos","Auditorías ambientales internas y externas","Planes de contingencia ambiental"] },
      { title: "Normativa", items: ["Ley Nacional 25.675 — Política Ambiental","Decreto Provincial Buenos Aires 847/19","Ley 24.051 — Residuos Peligrosos","ISO 14001:2015 — Sistema de Gestión Ambiental"] },
    ],
  },
  {
    icon: <IconPerson />,
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    title: "Ergonomía",
    desc: "Plan integral de ergonomía, análisis por puesto y capacitación musculoesquelética.",
    items: ["Plan integral Res. SRT 886/15","Análisis detallado por puesto","Medición de fuerzas y vibraciones","Prevención trastornos musculoesqueléticos"],
    extraGroups: [
      { title: "Evaluaciones ergonómicas", items: ["Análisis de posturas forzadas por puesto de trabajo","Medición de fuerzas y esfuerzos repetitivos","Evaluación de vibraciones mano-brazo y cuerpo entero","Estudio de carga mental y organización del trabajo","Diseño y mejora de puestos de trabajo"] },
      { title: "Normativa", items: ["Res. SRT 886/15 — Ergonomía","Res. SRT 3345/15 — Protocolo de ergonomía","Res. 295/03 — Especificaciones técnicas","Capacitación en prevención de TME (trastornos musculoesqueléticos)"] },
    ],
  },
  {
    icon: <IconShield />,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    title: "Sistemas de Incendio",
    desc: "Inspección de rociadores, alarmas, sistema eléctrico y certificación de puertas.",
    items: ["Inspección de rociadores e hidrantes","Sistema eléctrico y termografías","Inspección y pruebas del sistema de alarma","Certificación de puertas cortafuego"],
    extraGroups: [
      { title: "Inspecciones incluidas", items: ["Rociadores automáticos: caudal, presión y cobertura","Hidrantes internos y externos","Sala de bombas: arranque y presión de trabajo","Sistema de detección y alarma de incendio","Matafuegos: tipo, carga y señalización","Puertas cortafuego: sellado y cierre automático"] },
      { title: "Normativa", items: ["Res. SRT 900/2015 — Prevención de incendios","Decreto 351/79 Anexo VII — Protección contra incendios","Certificación ante Bomberos Voluntarios","NFPA 13, 14, 72 para sistemas especiales"] },
    ],
  },
  {
    icon: <IconCertificate />,
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    title: "Normas ISO",
    desc: "ISO 9001, 14001 y 45001 — auditorías internas y preparación para certificación.",
    items: ["ISO 9001 — Gestión de Calidad","ISO 14001 — Gestión Ambiental","ISO 45001 — Seguridad Ocupacional","Auditorías internas y certificación"],
    extraGroups: [
      { title: "Normas que implementamos", items: ["ISO 9001:2015 — Sistema de Gestión de Calidad","ISO 14001:2015 — Sistema de Gestión Ambiental","ISO 45001:2018 — Seguridad y Salud en el Trabajo","Implementación de sistemas integrados de gestión (SIG)"] },
      { title: "Proceso de certificación", items: ["Diagnóstico inicial y análisis de brechas","Diseño e implementación del sistema de gestión","Capacitación del equipo interno","Auditorías internas previas a la certificación","Acompañamiento durante la auditoría de certificación"] },
    ],
  },
  {
    icon: <IconBuilding />,
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80",
    title: "Construcción y Obras",
    desc: "Habilitación de negocios, informes técnicos, extintores y señalización.",
    items: ["Decreto 911/96 y avisos de obra","Habilitación e informes de incendio","Extintores, señalización y emergencia","Investigación de accidentes"],
    extraGroups: [
      { title: "Servicios para construcción", items: ["Aviso de inicio de obra ante autoridades competentes","Informe técnico de incendio para habilitación","Provisión e instalación de extintores","Señalización de seguridad y vías de evacuación","Luces de emergencia y sistemas de iluminación de escape","Investigación y análisis de accidentes laborales"] },
      { title: "Normativa", items: ["Decreto 911/96 — Industria de la construcción","Ley 19.587 y Dec. 351/79","Resoluciones municipales de habilitación","Normas IRAM de señalización de seguridad"] },
    ],
  },
  {
    icon: <IconGear />,
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    title: "Montajes Industriales",
    desc: "Supervisión mecánica y de seguridad en cerealeras, cementeras, minería y más.",
    items: ["Cerealeras, aceiteras, cementeras, minería","Supervisión mecánica y de seguridad","Fabricación: tanques, tolvas, piping","Mantenimiento mecánico"],
    extraGroups: [
      { title: "Sectores que atendemos", items: ["Cerealeras y aceiteras","Cementeras y canteras","Minería y petróleo","Obra civil y montajes electromecánicos","Fabricación de estructuras metálicas"] },
      { title: "Servicios de supervisión", items: ["Supervisión de seguridad en montajes y desmontajes","Control de calidad en fabricación de tanques y tolvas","Supervisión de piping, soportería y equipos a presión","Mantenimiento mecánico preventivo y correctivo","Gestión de permisos de trabajo (altura, espacio confinado)"] },
    ],
  },
  {
    icon: <IconPlant />,
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
    title: "Actividad Agraria",
    desc: "Asesoramiento mensual y cronograma anual para el sector agropecuario.",
    items: ["Asesoramiento Decreto 617/97","Cronograma anual agropecuario","Controles maquinaria y fitosanitarios","Capacitaciones en ergonomía rural"],
    extraGroups: [
      { title: "Servicios agrarios", items: ["Asesoramiento mensual en higiene y seguridad rural","Cronograma anual de capacitaciones y controles","Control de maquinaria agrícola y equipos","Gestión de productos fitosanitarios y agroquímicos","Evaluación de riesgos eléctricos en instalaciones rurales","Capacitación en ergonomía rural y prevención de accidentes"] },
      { title: "Normativa", items: ["Decreto 617/97 — Higiene y seguridad para el agro","Ley 19.587 aplicada al sector rural","Normativa SENASA para productos fitosanitarios","Resoluciones MTEYSS para trabajadores rurales"] },
    ],
  },
  {
    icon: <IconBolt />,
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80",
    title: "Eficiencia Energética",
    desc: "Análisis de consumo, optimización del factor de potencia y auditorías energéticas.",
    items: ["Análisis de consumo de potencia","Optimización del factor de potencia","Plan de eficientización energética","Auditorías energéticas integrales"],
    extraGroups: [
      { title: "Servicios energéticos", items: ["Auditoría energética integral de instalaciones","Análisis de consumo eléctrico y térmico","Medición y corrección del factor de potencia","Plan de eficientización y reducción de costos","Monitoreo de equipos y detección de ineficiencias","Informe con recomendaciones y retorno de inversión"] },
      { title: "Beneficios", items: ["Reducción de la factura eléctrica","Cumplimiento de penalizaciones por bajo factor de potencia","Prolongación de vida útil de equipos","Contribución a la sostenibilidad ambiental"] },
    ],
  },
];

const whyUs = [
  { icon: "01", title: "Enfoque al Cliente", desc: "Escucha activa y soluciones personalizadas para cada empresa" },
  { icon: "02", title: "Actualización Continua", desc: "Al día con normativas, resoluciones SRT y tendencias del sector" },
  { icon: "03", title: "Equipo Profesional", desc: "Expertos especializados y comprometidos con la excelencia" },
  { icon: "04", title: "Soluciones Integrales", desc: "De la asesoría a la implementación completa en campo" },
  { icon: "05", title: "Cumplimiento Total", desc: "Todas las resoluciones SRT vigentes y actualizadas" },
  { icon: "06", title: "Certificaciones ISO", desc: "Certificaciones en calidad, ambiente y seguridad ocupacional" },
];

const clients = [
  { src: "/empresas/logo1 (1).jpeg", alt: "Empresa cliente 1" },
  { src: "/empresas/logo1 (2).jpeg", alt: "Empresa cliente 2" },
  { src: "/empresas/logo1 (3).jpeg", alt: "Empresa cliente 3" },
  { src: "/empresas/logo1 (4).jpeg", alt: "Empresa cliente 4" },
  { src: "/empresas/logo1 (5).jpeg", alt: "Empresa cliente 5" },
];

// ── Component ────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" aria-label="Work-tec inicio">
            <Image
              src="/logo_nuevo2.png"
              alt="Work-tec logo"
              width={90}
              height={32}
              className="object-contain"
              priority
            />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#nosotros" className="hover:text-[#1d3461] transition-colors">Nosotros</a>
            <a href="#servicios" className="hover:text-[#1d3461] transition-colors">Servicios</a>
            <a href="#por-que-elegirnos" className="hover:text-[#1d3461] transition-colors">¿Por qué elegirnos?</a>
            <a href="#clientes" className="hover:text-[#1d3461] transition-colors">Clientes</a>
            <a
              href="#contacto"
              className="bg-[#4db6a9] text-white px-5 py-2 rounded-md hover:bg-[#3a9c90] transition-colors"
            >
              Contacto
            </a>
          </nav>
          {/* Mobile menu button placeholder */}
          <button className="md:hidden p-2 text-gray-600" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="relative text-white overflow-hidden min-h-[580px] flex items-center">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1d3461]/95 via-[#1d3461]/75 to-[#1d3461]/50" />
          </div>
          <div className="relative w-full max-w-6xl mx-auto px-6 py-28 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <span className="hero-badge inline-block bg-[#4db6a9]/20 text-[#4db6a9] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
                Seguridad · Salud · Medio Ambiente
              </span>
              <h1 className="hero-title text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Tu empresa más segura,<br />
                <span className="text-[#4db6a9]">tu equipo más protegido</span>
              </h1>
              <p className="hero-subtitle text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
                Asesoría y consultoría integral en seguridad e higiene laboral. Cumplimiento normativo,
                mediciones, capacitaciones y mucho más.
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#servicios"
                  className="bg-[#4db6a9] hover:bg-[#3a9c90] text-white font-semibold px-8 py-3 rounded-md transition-colors"
                >
                  Ver servicios
                </a>
                <a
                  href="#contacto"
                  className="border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-md transition-colors"
                >
                  Contactar ahora
                </a>
              </div>
            </div>
            <div className="hero-logo flex-shrink-0">
              <Image
                src="/logo_nuevo3.png"
                alt="Work-tec"
                width={280}
                height={100}
                className="object-contain"
                style={{ mixBlendMode: "multiply" }}
                priority
              />
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <StatsCounter />

        {/* ── Quiénes Somos ── */}
        <section id="nosotros" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimateOnScroll direction="left">
                <span className="text-[#4db6a9] text-xs font-bold uppercase tracking-widest">
                  Quiénes somos
                </span>
                <h2 className="text-3xl font-bold text-[#1d3461] mt-3 mb-6 leading-snug">
                  Tu socio estratégico en seguridad, salud y medio ambiente
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Work-tec es una empresa líder en asesoría y consultoría en seguridad, salud y medio
                  ambiente, comprometida con la excelencia en la prestación de servicios que garantizan
                  un entorno laboral seguro y saludable.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Ofrecemos soluciones integrales adaptadas a las necesidades específicas de cada
                  cliente, asegurando el cumplimiento de normativas vigentes y promoviendo la mejora
                  continua en las condiciones de trabajo.
                </p>
                <div className="border-l-4 border-[#4db6a9] pl-5 py-1">
                  <p className="text-[#1d3461] italic leading-relaxed font-medium">
                    Nos esforzamos por ser un socio estratégico, ayudando a identificar y gestionar
                    riesgos mientras fomentamos una cultura de seguridad en el trabajo.
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll direction="right">
              <div className="relative rounded-2xl overflow-hidden h-[420px] shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80"
                  alt="Equipo de profesionales Work-tec"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d3461]/95 via-[#1d3461]/60 to-[#1d3461]/30" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-2 gap-3">
                    {values.slice(0, 4).map((v) => (
                      <div key={v.title} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                        <h3 className="font-bold text-[#4db6a9] text-xs mb-0.5">{v.title}</h3>
                        <p className="text-[#4db6a9] text-xs leading-tight">{v.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── Sectores ── */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-[#4db6a9] text-xs font-bold uppercase tracking-widest">Industrias</span>
              <h2 className="text-3xl font-bold text-[#1d3461] mt-3">Sectores que atendemos</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Construcción e Industria",
                  desc: "Obras civiles, montajes industriales, cerealeras, cementeras y minería.",
                  img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Laboratorio y Análisis",
                  desc: "Análisis de agua, aceites, materiales y monitoreo de emisiones atmosféricas.",
                  img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Medio Ambiente y Agraria",
                  desc: "Gestión ambiental, impacto ecológico y sector agropecuario Decreto 617/97.",
                  img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Asesoría Legal en Seguridad",
                  desc: "Ingeniería en planta, monitoreo técnico y acompañamiento en inspecciones ministeriales y ART.",
                  img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Sistemas de Incendio",
                  desc: "Inspección de rociadores, hidrantes, alarmas y certificación de puertas cortafuego.",
                  img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Eficiencia Energética",
                  desc: "Análisis de consumo, optimización del factor de potencia y auditorías energéticas integrales.",
                  img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
                },
              ].map((sector, i) => (
                <AnimateOnScroll key={sector.title} direction="up" delay={i * 150}>
                <div className="relative rounded-2xl overflow-hidden h-64 group shadow-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={sector.img}
                    alt={sector.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1d3461]/90 via-[#1d3461]/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">{sector.title}</h3>
                    <p className="text-white/75 text-sm leading-relaxed">{sector.desc}</p>
                  </div>
                </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── Misión y Visión ── */}
        <section className="bg-[#1d3461] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[#4db6a9] text-xs font-bold uppercase tracking-widest">Nuestro propósito</span>
              <h2 className="text-3xl font-bold text-white mt-3">Misión y Visión</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#4db6a9] flex items-center justify-center font-bold text-white text-lg mb-6">
                  M
                </div>
                <h3 className="text-xl font-bold text-[#4db6a9] mb-4">Misión</h3>
                <p className="text-white/75 leading-relaxed mb-4">
                  Proporcionar servicios de asesoría y consultoría en seguridad, salud y medio
                  ambiente que permitan a las organizaciones cumplir con las normativas legales y
                  mejorar sus prácticas laborales.
                </p>
                <p className="text-white/75 leading-relaxed">
                  Ser un socio estratégico para nuestros clientes, ayudándoles a identificar y
                  gestionar riesgos de manera proactiva y eficiente.
                </p>
              </div>
              <div className="bg-[#4db6a9] rounded-2xl p-10">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center font-bold text-white text-lg mb-6">
                  V
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Visión</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  Ser reconocidos como la empresa de referencia en el sector de la seguridad y salud
                  ocupacional, destacando por nuestra capacidad de innovación, calidad en el servicio
                  y compromiso con la sostenibilidad.
                </p>
                <p className="text-white font-semibold leading-relaxed">
                  Contribuir activamente al bienestar de los trabajadores y al desarrollo de entornos
                  laborales más seguros y sostenibles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Servicios ── */}
        <section id="servicios" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[#4db6a9] text-xs font-bold uppercase tracking-widest">Lo que ofrecemos</span>
              <h2 className="text-3xl font-bold text-[#1d3461] mt-3 mb-4">Nuestros Servicios</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Soluciones integrales en seguridad, salud y medio ambiente adaptadas a cada industria y sector productivo.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <AnimateOnScroll key={service.title} direction="up" delay={(i % 3) * 100}>
                <article className="group bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg hover:border-[#4db6a9] transition-all duration-200">
                  <div className="w-11 h-11 rounded-lg bg-[#1d3461]/5 text-[#1d3461] flex items-center justify-center mb-4 group-hover:bg-[#4db6a9] group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-[#1d3461] mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
                  <details className="mt-4">
                    <summary className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#4db6a9] hover:bg-[#3a9c90] transition-colors cursor-pointer px-4 py-2 rounded-full select-none">
                      Ver detalle ▾
                    </summary>
                    <div className="mt-3 space-y-3 text-xs text-gray-500 border-t border-gray-100 pt-3">
                      {service.extraGroups.map((group) => (
                        <div key={group.title}>
                          <p className="font-semibold text-[#1d3461] mb-1">{group.title}:</p>
                          <ul className="space-y-1">
                            {group.items.map((item) => (
                              <li key={item} className="flex gap-1.5 items-start">
                                <span className="text-[#4db6a9] font-bold shrink-0">›</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </details>
                </article>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── Banner intermedio ── */}
        <section className="relative py-24 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=1600&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1d3461]/80" />
          <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Cumplimiento normativo garantizado
            </h2>
            <p className="text-white/75 text-lg max-w-2xl mx-auto mb-8">
              Garantizamos el cumplimiento integral de todas las resoluciones SRT vigentes, asegurando el respaldo legal que su empresa necesita.
            </p>
            <a
              href="#contacto"
              className="inline-block bg-[#4db6a9] hover:bg-[#3a9c90] text-white font-semibold px-10 py-4 rounded-md transition-colors"
            >
              Consultá sin cargo
            </a>
          </div>
        </section>

        {/* ── Por qué elegirnos ── */}
        <section id="por-que-elegirnos" className="bg-gray-50 py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[#4db6a9] text-xs font-bold uppercase tracking-widest">Nuestras ventajas</span>
              <h2 className="text-3xl font-bold text-[#1d3461] mt-3">¿Por qué elegirnos?</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyUs.map((item, i) => (
                <AnimateOnScroll key={item.title} direction="up" delay={i * 100}>
                <div className="flex gap-5">
                  <span className="text-5xl font-black text-[#4db6a9]/15 leading-none shrink-0 select-none">
                    {item.icon}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-bold text-[#1d3461] mb-1.5">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── Clientes ── */}
        <section id="clientes" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[#4db6a9] text-xs font-bold uppercase tracking-widest">Confían en nosotros</span>
              <h2 className="text-3xl font-bold text-[#1d3461] mt-3">Empresas que nos acompañan</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {clients.map((client) => (
                <div
                  key={client.src}
                  className="bg-gray-50 rounded-xl border border-gray-100 h-24 w-44 flex items-center justify-center hover:border-[#4db6a9] hover:shadow-sm transition-all p-4"
                >
                  <Image
                    src={client.src}
                    alt={client.alt}
                    width={140}
                    height={70}
                    className="object-contain max-h-16"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contacto ── */}
        <section id="contacto" className="bg-[#1d3461] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#4db6a9] text-xs font-bold uppercase tracking-widest">Hablemos</span>
                <h2 className="text-3xl font-bold text-white mt-3 mb-4">
                  ¿Listo para proteger a tu equipo?
                </h2>
                <p className="text-white/65 leading-relaxed mb-8">
                  Contanos las necesidades de tu empresa y preparamos una propuesta integral a medida.
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:seguridad.laboral@work-tec.ar"
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#4db6a9] transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
                      </svg>
                    </div>
                    <span className="text-sm">seguridad.laboral@work-tec.ar</span>
                  </a>
                  <a
                    href="tel:+5493512150808"
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#4db6a9] transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <span className="text-sm">+54 9 3512 15-0808</span>
                  </a>
                  <a
                    href="https://wa.me/5493512150808"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.092.537 4.057 1.475 5.775L0 24l6.448-1.435A11.947 11.947 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.213-3.724.828.852-3.624-.234-.372A9.774 9.774 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
                      </svg>
                    </div>
                    <span className="text-sm">WhatsApp</span>
                  </a>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-white font-bold text-lg mb-6">Envianos un mensaje</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/50 mb-1.5 uppercase tracking-wider">Nombre</label>
                      <input
                        type="text"
                        placeholder="Tu nombre"
                        className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#4db6a9] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/50 mb-1.5 uppercase tracking-wider">Empresa</label>
                      <input
                        type="text"
                        placeholder="Tu empresa"
                        className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#4db6a9] transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 mb-1.5 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      placeholder="tu@empresa.com"
                      className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#4db6a9] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 mb-1.5 uppercase tracking-wider">Mensaje</label>
                    <textarea
                      rows={4}
                      placeholder="Contanos sobre tu empresa y qué necesitás..."
                      className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#4db6a9] transition-colors resize-none"
                    />
                  </div>
                  <a
                    href="mailto:seguridad.laboral@work-tec.ar"
                    className="block w-full bg-[#4db6a9] hover:bg-[#3a9c90] text-white font-semibold text-center py-3 rounded-lg transition-colors text-sm"
                  >
                    Enviar mensaje
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-[#111e35]">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <Image
                src="/logo_nuevo.png"
                alt="Work-tec"
                width={120}
                height={42}
                className="object-contain opacity-70"
              />
              <p className="text-xs text-white/30">Protección Laboral y Sostenibilidad</p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-1 text-xs text-white/30">
              <span>seguridad.laboral@work-tec.ar</span>
              <span>+54 9 3512 15-0808</span>
              <span className="mt-2">© {new Date().getFullYear()} Work-tec · Todos los derechos reservados</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ── WhatsApp flotante ── */}
      <a
        href="https://wa.me/5493512150808"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center hover:bg-[#20bd5a] transition-colors hover:scale-110 transform"
      >
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.092.537 4.057 1.475 5.775L0 24l6.448-1.435A11.947 11.947 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.213-3.724.828.852-3.624-.234-.372A9.774 9.774 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
        </svg>
      </a>

    </div>
  );
}
