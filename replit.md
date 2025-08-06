# RJR Education VSD Centre Website

## Overview

This is a full-stack web application for RJR Education VSD Centre, an educational institution offering a Diploma in Varma Massage (DVM) program. The website serves as an informational platform and lead generation tool, featuring course details, institutional information, and a contact form for prospective students. The application is built with a modern React frontend and Express.js backend, designed to showcase the institution's affiliation with Manonmaniam Sundaranar University and provide comprehensive information about their traditional healing education program.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessible, consistent design
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **State Management**: TanStack Query for server state management and caching
- **Animations**: Framer Motion for smooth page transitions and interactive elements
- **Forms**: React Hook Form with Zod validation for type-safe form handling

### Backend Architecture
- **Framework**: Express.js with TypeScript for the REST API server
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless) with connection pooling
- **Validation**: Zod schemas for request/response validation shared between client and server
- **Storage**: Abstracted storage layer with in-memory implementation for development

### Data Layer
- **Schema Design**: Relational database with separate tables for users and contact submissions
- **Type Safety**: Full end-to-end type safety using shared TypeScript types generated from database schema
- **Migration Management**: Drizzle Kit for database schema migrations and version control

### Development Environment
- **Build System**: Vite for fast development and optimized production builds
- **Development Server**: Hot module replacement with Vite middleware integration
- **Code Quality**: TypeScript strict mode with path mapping for clean imports
- **Monorepo Structure**: Shared code between client and server in `/shared` directory

### Internationalization
- **Language Support**: English and Tamil language support with custom language context
- **Content Management**: Translation keys managed through React context for dynamic language switching

### UI/UX Design Patterns
- **Design System**: Consistent spacing, typography, and color scheme using CSS custom properties
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support through Radix primitives
- **Performance**: Lazy loading, code splitting, and optimized asset delivery

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling and automatic scaling
- **Connection Management**: Environment-based database URL configuration with connection validation

### Development Tools
- **Replit Integration**: Custom Vite plugins for Replit-specific development features including error overlays and cartographer mapping
- **Runtime Error Handling**: Development-time error modal overlay for improved debugging experience

### UI Framework Dependencies
- **Radix UI**: Comprehensive set of low-level UI primitives for building accessible components
- **Lucide React**: Icon library providing consistent iconography throughout the application
- **TanStack Query**: Advanced server state management with caching, background updates, and optimistic updates

### Build and Development
- **ESBuild**: Fast JavaScript bundler for production server builds
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer plugins
- **TypeScript**: Strict type checking with custom path mapping and module resolution