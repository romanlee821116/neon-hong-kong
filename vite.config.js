import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/neon-hong-kong/',
    plugins: [vue()],
    build: {
		outDir: 'docs',
    },
})
