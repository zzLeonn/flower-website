import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // React plugin for Vite
  css: {
    postcss: {
      plugins: [
        tailwindcss(), // Enable Tailwind CSS
        autoprefixer(), // Enable autoprefixer
      ],
    },
  },
});