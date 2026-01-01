# Premium Developer Portfolio

A next-level, accessible, and high-performance portfolio built with Next.js 14+, TailwindCSS, and shadcn/ui.

## Features
- **Next.js App Router**: Optimized for performance and SEO.
- **TypeScript**: Type-safe codebase.
- **Tailwind CSS + Shadcn UI**: Premium design implementation.
- **Framer Motion**: Subtle, improved micro-interactions.
- **Responsive**: Mobile-first design.
- **Serverless**: Contact form via EmailJS, no backend required.

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Environment Setup**:
   Copy `.env.example` to `.env.local` (create it if needed) and add your keys:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

3. **Content Customization**:
   - Edit `data/profile.ts` for bio, skills, and timeline.
   - Edit `data/projects.ts` for your portfolio items.
   - Place your CV PDF in `public/cv.pdf`.
   - Add images to `public/projects/`.

4. **Run Development Server**:
   ```bash
   npm run dev
   ```

5. **Build for Production**:
   ```bash
   npm run build
   ```

## Deployment
This project is optimized for deployment on [Vercel](https://vercel.com).
Simply import the repository and deploy.
