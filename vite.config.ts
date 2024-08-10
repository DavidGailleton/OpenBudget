import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { configDefaults } from 'vitest/config';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    ...configDefaults,
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',  // Fichier pour configurer le testing library
    include: ['src/**/*.test.{ts,tsx}'], // Inclut tous les fichiers de test se terminant par .test.ts ou .test.tsx
  },
})
