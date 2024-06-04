import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/RS_React_Components/',
  plugins: [react()],
});
