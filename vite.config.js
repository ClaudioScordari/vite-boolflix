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
        scss:{

            // con additionalData possiamo scrivere quella roba scss che deve essere globale (prende come valore una stringa), come il RESET
            // si possono inserire anche variabili a livello globale come anche i mixins
            additionalData: `
              
            `
        }
    }
  }
})
