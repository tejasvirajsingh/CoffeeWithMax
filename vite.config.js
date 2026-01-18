import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins:
   [
    react() ,
     tailwindcss(
      {
      theme: {
        color: {
          CoffeeYellow: "#f4c542",
          coffeeBrown: "#5c2e05",
          bgCream: "#fff8e7",
        },
      },
     },
    ) ] ,
})
