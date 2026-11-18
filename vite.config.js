import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// En producción el sitio vive en https://calavera202007.github.io/Perfil/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/Perfil/' : '/',
}))
