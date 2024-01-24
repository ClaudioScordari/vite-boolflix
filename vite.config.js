// Ci consente di definire tutta la configurazione della nostra installazione Vue tramite Vite...

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],

    // ... quindi creando una chiave css si può configurare uno stile a livello generale
    css: {

        // con preprocessorOptions ci consente di specificare una serie di parametri dei nostri preprocessori, come ad esempio scss
        preprocessorOptions: {
            scss: {
                additionalData: `
                
            `
            }
        }
    }
})
