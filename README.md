# Dumroo.ai Public Pages

A modern, responsive public-facing website for Dumroo.ai built with React, TypeScript, and Vite. This application showcases Dumroo.ai's educational AI platform, including product pages, portals, blog, events, and more.

## 🚀 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Supabase** - Backend services (optional)
- **Zustand** - State management
- **Lucide React** - Icon library
- **Framer Motion** - Animation library
- **React Helmet Async** - SEO and meta tags

## 📋 Prerequisites

- Node.js 18+ and npm
- Git

## 🛠️ Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd public-pages
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
   
   > **Note:** Supabase credentials are optional. The app will work without them but certain features (contact form, newsletter) will be disabled with a warning.

4. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── landing/        # Landing page components
│   ├── portals/        # Portal pages (Teachers, Students, etc.)
│   ├── products/       # Product detail pages
│   └── ...             # Other page components
├── lib/                # Utility libraries
│   ├── supabase.ts     # Supabase client configuration
│   └── utils.ts        # Helper functions
├── services/           # API services
│   ├── contact/        # Contact form service
│   └── newsletter/     # Newsletter subscription service
├── stores/             # Zustand stores
├── ui/                 # Reusable UI components
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── App.tsx             # Main app component with routing
└── main.tsx            # Application entry point
```

## 🎯 Key Features

- **Landing Page** - Hero section, features, testimonials, and call-to-action
- **Product Pages** - Detailed pages for each AI product (Content AI, Progression AI, etc.)
- **Portal Pages** - Dedicated pages for Teachers, Students, Parents, Admins, and Homeschooling Educators
- **Blog** - Blog posts and detail pages
- **Events** - Event listings and details
- **Contact Form** - Form submission with Supabase integration
- **Newsletter** - Email subscription functionality
- **SEO Optimized** - Meta tags, Open Graph, and Twitter cards
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Lazy Loading** - Code splitting for optimal performance

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_SUPABASE_URL` | Supabase project URL | No |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous key | No |

### Supabase Setup

If you want to enable Supabase features:

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Create the following tables:
   - `contact_submissions` - For contact form submissions
   - `newsletter_subscriptions` - For newsletter subscriptions
3. Add your credentials to `.env`

The app gracefully handles missing Supabase credentials by showing warnings and disabling related features.

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory, ready to be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

### Preview Production Build

```bash
npm run preview
```

## 📝 Development Notes

- **Type Safety**: The project uses TypeScript with strict mode enabled
- **Code Splitting**: Portal and product pages are lazy-loaded for better performance
- **Error Handling**: Supabase operations include retry logic and graceful error handling
- **Accessibility**: Components follow accessibility best practices
- **SEO**: All pages include proper meta tags and structured data

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run linting: `npm run lint`
4. Test your changes
5. Submit a pull request

## 📄 License

Private project - All rights reserved

## 🔗 Links

- [Dumroo.ai](https://dumroo.ai)
- [Documentation](https://docs.dumroo.ai)
