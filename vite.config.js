import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-data-files',
      buildStart() {
        // This ensures the data directory exists in the watch list
        this.addWatchFile(resolve('src/assets/data/experiences.json'));
        this.addWatchFile(resolve('src/assets/data/vendors.json'));
        this.addWatchFile(resolve('src/assets/data/map.json'));
        this.addWatchFile(resolve('src/assets/data/schedule.json'));
      },
      generateBundle() {
        // Read and copy the JSON files
        const experiencesJson = fs.readFileSync(resolve('src/assets/data/experiences.json'), 'utf-8');
        const vendorsJson = fs.readFileSync(resolve('src/assets/data/vendors.json'), 'utf-8');
        const mapJson = fs.readFileSync(resolve('src/assets/data/map.json'), 'utf-8');
        const scheduleJson = fs.readFileSync(resolve('src/assets/data/schedule.json'), 'utf-8');
        
        this.emitFile({
          type: 'asset',
          fileName: 'assets/data/experiences.json',
          source: experiencesJson
        });
        this.emitFile({
          type: 'asset',
          fileName: 'assets/data/vendors.json',
          source: vendorsJson
        });
        this.emitFile({
          type: 'asset',
          fileName: 'assets/data/map.json',
          source: mapJson
        });
        this.emitFile({
          type: 'asset',
          fileName: 'assets/data/schedule.json',
          source: scheduleJson
        });
      }
    }
  ],
  base: process.env.NODE_ENV === 'production' ? '/TechFamilyFunFair/' : '/',
  build: {
    // Enable minification and other optimizations
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true
      }
    },
    // Split chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          heroicons: ['@heroicons/react'],
          headless: ['@headlessui/react']
        }
      }
    },
    // Generate smaller chunks
    chunkSizeWarningLimit: 600,
    sourcemap: false
  },
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})
