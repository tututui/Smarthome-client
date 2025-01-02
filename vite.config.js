import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/', // เปลี่ยนเป็น '/' ถ้า deploy บน root domain
})
