import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/devforges.github.io/',   // 👈 this must be your repo name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
