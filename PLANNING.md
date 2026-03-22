# Portfolio Carlos Rodriguez — Plan de Desarrollo

## 1. Resumen del Proyecto

Portfolio profesional para **Carlos Rodriguez**, Desarrollador Full Stack con orientación backend. 
El sitio está diseñado en **español** y presenta una estética "Terminal meets Editorial" que refleja 
su expertise en arquitecturas backend y sistemas.

## 2. Información del Perfil

### Datos Personales
- **Nombre:** Carlos Rodriguez
- **Título:** Desarrollador Full Stack · Backend
- **Ubicación:** Coquimbo, Chile
- **Email:** cn.rodriguez@outlook.com
- **Teléfono:** +569 55266761
- **LinkedIn:** linkedin.com/in/cn-rodriguez
- **GitHub:** github.com/cn-rodriguez

### Experiencia Laboral

#### Usercode SpA (Agosto 2024 – Actualidad)
- Desarrollo de software a medida y mantenimiento evolutivo
- Participación en **más de 10 proyectos privados** para distintos clientes
- Todos los proyectos bajo NDA, no distribuibles
- Alta complejidad técnica: sistemas de microservicios, arquitecturas enterprise
- Stack: React, Next.js 15, Angular 8, Node.js, Express, AdonisJS 6, Spring Boot 2.6, Laravel, TypeScript, Java 8, SQL Server, PostgreSQL

#### Corporación Educacional Aventura (Dic 2022 – Feb 2023)
- Plataforma web de agendamiento de citas
- Stack: React 18, TailwindCSS, Node.js, Express, MongoDB, Mongoose

### Educación
- **Analista Programador** — Centro de Formación Técnica INACAP, La Serena (2020-2023)

### Habilidades
- **Frontend:** React, Next.js, Angular, TypeScript, TailwindCSS, JavaScript
- **Backend:** Node.js, Express, AdonisJS, Spring Boot, Laravel, Java, PHP
- **Base de datos:** PostgreSQL, SQL Server, MongoDB, MySQL, Sequelize, Mongoose, LucidORM
- **Otros:** Git, arquitectura de microservicios, documentación técnica, debugging avanzado
- **Idiomas:** Español (Nativo), Inglés (C2 — Avanzado)

> Nota: Las tecnologías se muestran como tags/badges sin porcentajes, reflejando uso real en proyectos.

## 3. Stack Tecnológico

| Categoría | Tecnología |
|-----------|------------|
| Framework | Astro 4.x + React |
| UI Components | React Islands |
| Estilos | CSS Modules + CSS Variables |
| Tipografía | Syne, IBM Plex Sans, JetBrains Mono |
| Animaciones | CSS + Framer Motion |
| Deployment | Vercel / Netlify |

## 4. Arquitectura del Proyecto

```
/
├── astro.config.mjs          # Astro + React integration
├── package.json
├── tsconfig.json
├── public/
│   └── favicon.svg
└── src/
    ├── components/
    │   ├── Hero.astro        # Hero section con Terminal
    │   ├── About.astro       # Bio y estadísticas
    │   ├── Experience.astro # Timeline de experiencia
    │   ├── Skills.astro      # Tecnologías (tags)
    │   ├── Projects.astro   # Proyectos y educación
    │   ├── Contact.astro    # Información de contacto
    │   └── react/
    │       ├── Terminal.tsx    # Terminal interactiva
    │       └── ParticleField.tsx # Partículas animadas
    ├── layouts/
    │   └── Layout.astro
    ├── pages/
    │   ├── index.astro
    │   └── 404.astro
    └── styles/
        └── global.css
```

## 5. Diseño Visual

### Paleta de Colores
```css
--bg-primary: #0a0a0b        /* Negro profundo */
--bg-secondary: #111113      /* Negro suave */
--bg-tertiary: #1a1a1d       /* Gris oscuro */
--text-primary: #e8e8e8      /* Blanco cálido */
--text-secondary: #8a8a8d    /* Gris medio */
--accent-primary: #00ff88    /* Verde terminal */
--accent-secondary: #00d4aa  /* Verde azulado */
--accent-tertiary: #6366f1   /* Índigo sutil */
--border: #2a2a2e            /* Bordes sutiles */
```

### Tipografía
- **Display:** Syne (800) — Geométrica, moderna
- **Body:** IBM Plex Sans (400, 500) — Legible, técnica
- **Code/Mono:** JetBrains Mono (400) — Terminal

### Estética
Concepto "Terminal meets Editorial" — Combina la atmósfera de terminals y sistemas 
con tipografía editorial para credibilidad profesional. Evoca arquitecturas backend.

## 6. Secciones

### Hero
- Nombre con tipografía display grande
- Subtítulo con título profesional
- Terminal interactiva con comandos
- CTA hacia proyectos y contacto
- Indicador de scroll animado

### Sobre Mí
- Bio extracted del CV
- 4 tarjetas de estadísticas (años, tecnologías, proyectos (10+), nivel inglés)
- Patrón grid decorativo animado

### Experiencia
- Timeline vertical con conectores
- Cada posición expandible con tecnologías
- Efecto hover con glow

### Habilidades
- 3 categorías: Frontend, Backend, Base de Datos
- Tags/badges para cada tecnología (sin porcentajes)
- Hover effect con glow verde
- Sección adicional de herramientas

### Proyectos
- Cards con glass morphism
- Proyecto visible: Plataforma de Agendamiento (práctica profesional)
- Nota: Resto de proyectos son privados (bajo NDA)
- Educación en tarjeta separada

### Contacto
- Links directos (Email, LinkedIn, GitHub)
- Información de idiomas
- Ubicación con zona horaria

## 7. Animaciones y Micro-interacciones

| Elemento | Animación |
|----------|-----------|
| Page Load | Staggered reveal con opacity + translateY |
| Scroll | Fade-in sections con Intersection Observer |
| Hover Cards | Scale sutil + glow en bordes |
| Terminal | Typing effect + cursor blink |
| Skills | Tags con hover effect |
| Partículas | Movimiento sutil + líneas de conexión |

## 8. Comandos de Terminal

```
help     → Muestra comandos disponibles
about    → Información personal
skills   → Stack tecnológico
contact  → Información de contacto
clear    → Limpia la terminal
```

## 9. Instrucciones de Uso

### Instalación
```bash
npm install
```

### Desarrollo
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

## 10. Despliegue en GitHub Pages

### Configuración Automática (GitHub Actions)
El proyecto incluye workflow de GitHub Actions para despliegue automático:
- Push a `main` = despliegue automático
- URL: `https://cn-rodriguez.github.io/portfolio/`

### Configuración Manual
```bash
npm install gh-pages --save-dev
npm run deploy
```

### Para usar dominio personalizado
1. Editar `public/CNAME` con tu dominio (ej: `portfolio.tudominio.com`)
2. Configurar CNAME en tu proveedor DNS apuntando a `cn-rodriguez.github.io`
3. En GitHub repo → Settings → Pages → Custom domain

### Si cambias el nombre del repositorio
Editar `astro.config.mjs`:
```javascript
base: '/nuevo-nombre/',
```

## 11. Notas de Implementación

- Los componentes React usan `client:load` o `client:visible` para hydración
- CSS Variables para theming consistente
- Glass morphism con backdrop-filter
- Noise overlay para textura sutil
- Scrollbar personalizado
- Selection color verde terminal
- Responsive design con breakpoints en 768px y 640px

## 12. Mejoras Futuras

- [ ] Menú móvil hamburguesa
- [ ] Animación de scroll suave más elaborada
- [ ] Más comandos en la terminal
- [ ] Modo claro/dark toggle
- [ ] Page transitions
- [ ] Formulario de contacto funcional
- [ ] Blog técnico
- [ ] Galeria de código con syntax highlighting
