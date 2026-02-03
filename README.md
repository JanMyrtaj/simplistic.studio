# simplistic | studio

A minimalist architecture portfolio website built with React, TypeScript, and Vite.

## Features

- 🎨 Modern, minimalist design
- 🌓 Dark/Light theme toggle
- 📱 Fully responsive
- 🚀 Smooth animations and transitions
- 📧 Contact form with Supabase backend
- 🖼️ Dynamic project gallery
- ⬆️ Smooth scroll-to-top button

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion / Motion
- **Routing**: React Router
- **Backend**: Supabase (Edge Functions + Database)
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/simplistic.studio.git
cd simplistic.studio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## Deployment

### Deploy to Vercel/Netlify

1. Push your code to GitHub
2. Import the repository in Vercel or Netlify
3. The build command is: `npm run build`
4. The output directory is: `dist`

### Environment Variables

The project uses Supabase for backend services. Make sure your Supabase project is configured. See `src/SUPABASE_SETUP_GUIDE.md` for detailed setup instructions.

## Project Structure

```
src/
├── components/       # React components
├── supabase/         # Supabase Edge Functions
├── utils/           # Utility functions
├── assets/          # Static assets
└── styles/          # Global styles
```

## License

Private project - All rights reserved

## Contact

For questions or support, visit the contact section on the website.