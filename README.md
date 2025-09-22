# TaxPro Services - Professional Tax Preparation & Accounting

A comprehensive web application for professional tax preparation services, built with React, TypeScript, and Tailwind CSS. This modern platform provides a complete client experience from initial consultation to document management and service delivery.

## Features

### Core Tax Services
- **Individual Tax Returns**: Complete Form 1040 preparation for U.S. residents
- **Nonresident Tax Services**: Specialized Form 1040-NR preparation with treaty benefits
- **FBAR & FATCA Compliance**: Foreign account reporting services (Form 114 & 8938)
- **ITIN Services**: Individual Taxpayer Identification Number assistance (Form W-7)
- **Business Tax Services**: Comprehensive accounting and tax preparation
- **Amended Returns**: Form 1040-X preparation and filing
- **Prior-Year Returns**: Back tax filing for 2022-2025

### Client Experience
- **Client Portal**: Secure document upload, status tracking, and communication
- **Appointment Booking**: Advanced scheduling system with service selection
- **Pricing Transparency**: Clear pricing structure for all services
- **Resource Center**: Tax guides, FAQs, and IRS guidance links
- **Blog & Updates**: Tax law changes, deadlines, and helpful articles
- **Contact Integration**: Multiple ways to reach our team

### Document Management
- **Secure Upload**: Drag-and-drop document upload with validation
- **Document Categories**: Organized by type (W-2, 1099, Bank Statements, etc.)
- **Status Tracking**: Real-time upload and processing status
- **File Management**: View, download, and manage uploaded documents

### Communication & Support
- **Messaging System**: Direct communication with tax professionals
- **Appointment Management**: Schedule and manage consultations
- **Service Tracking**: Monitor progress of your tax preparation
- **Resource Library**: Access to tax guides and educational content

## Technologies Used

### Core Framework
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite 5.4.19
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React 0.462.0

### State Management & Data
- **State Management**: React Query (TanStack Query) 5.83.0
- **Forms**: React Hook Form 7.61.1 with Zod 3.25.76 validation
- **Routing**: React Router DOM 6.30.1

### UI & Styling
- **Component Library**: Radix UI primitives (Accordion, Dialog, Select, etc.)
- **Styling Utilities**: Tailwind Merge, Class Variance Authority
- **Animations**: Tailwind CSS Animate
- **Themes**: Next Themes 0.3.0
- **Charts**: Recharts 2.15.4
- **Carousel**: Embla Carousel React 8.6.0

### Development Tools
- **Linting**: ESLint 9.32.0 with TypeScript support
- **Type Checking**: TypeScript 5.8.3
- **Build**: Vite with React SWC plugin
- **Package Manager**: npm with lock file support

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd secure-tax-path
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (Header, Footer, Layout)
│   ├── sections/       # Page sections (Hero, Services)
│   └── ui/             # shadcn/ui components (40+ components)
├── hooks/              # Custom React hooks (use-toast, use-mobile)
├── lib/                # Utility functions and configurations
│   ├── pricing.ts      # Service pricing configuration
│   └── utils.ts        # Common utility functions
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Services.tsx    # Services overview
│   ├── Pricing.tsx     # Pricing and payment information
│   ├── About.tsx       # About us page
│   ├── Contact.tsx     # Contact information and form
│   ├── Portal.tsx      # Client portal with document management
│   ├── Resources.tsx   # Tax resources and FAQs
│   ├── AppointmentBooking.tsx  # Appointment scheduling
│   ├── Blog.tsx        # Blog listing page
│   ├── BlogArticle.tsx # Individual blog articles
│   ├── NotFound.tsx    # 404 error page
│   └── Index.tsx       # Route index
├── App.tsx             # Main application component with routing
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

### Key Features by Page

- **Home**: Hero section, service highlights, testimonials
- **Services**: Detailed service descriptions with pricing
- **Pricing**: Comprehensive pricing table with payment methods
- **Portal**: Document upload, messaging, appointment management
- **Appointment Booking**: Calendar integration with service selection
- **Blog**: Article listing with search and filtering
- **Resources**: FAQs, tax guides, and IRS links
- **Contact**: Multiple contact methods and inquiry forms

## Development

### Available Scripts

- `npm run dev` - Start development server (runs on http://localhost:8080)
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

### Development Server

The application runs on Vite's development server with:
- Hot Module Replacement (HMR)
- TypeScript compilation
- Tailwind CSS processing
- ESLint integration

### Configuration Files

- `vite.config.ts` - Vite build configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration
- `components.json` - shadcn/ui component configuration

## Deployment

The application is a static site that can be deployed to any static hosting service:

### Build Process
1. Install dependencies: `npm install`
2. Build the project: `npm run build`
3. Deploy the `dist` folder to your hosting service

### Recommended Hosting Services
- **Vercel**: Zero-config deployment with automatic builds
- **Netlify**: Static site hosting with form handling
- **GitHub Pages**: Free hosting for public repositories
- **AWS S3 + CloudFront**: Scalable static hosting
- **Firebase Hosting**: Google's static hosting platform

### Environment Variables
No environment variables are required for the current static implementation.

## Current Status

**Version**: 1.0.0 (Development)
**Status**: Feature-complete for client requirements
**Last Updated**: January 2025

### Implemented Features
✅ All core tax services and pricing
✅ Complete client portal with document management
✅ Appointment booking system
✅ Blog and resource center
✅ Contact forms and communication
✅ Mobile-responsive design
✅ Professional UI/UX

## License

This project is proprietary software for TaxPro Services.
