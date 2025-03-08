import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  const base = isProd ? '/TechFamilyFunFair/' : '/';
  
  return {
    plugins: [
      react(),
      {
        name: 'copy-data-files',
        buildStart() {
          // This ensures the data directory exists in the watch list
          this.addWatchFile(resolve('public/assets/data/experiences.json'));
          this.addWatchFile(resolve('public/assets/data/vendors.json'));
          this.addWatchFile(resolve('public/assets/data/map.json'));
          this.addWatchFile(resolve('public/assets/data/schedule.json'));
        },
        generateBundle() {
          try {
            // Read and copy the JSON files from public/assets/data
            const experiencesJson = fs.readFileSync(resolve('public/assets/data/experiences.json'), 'utf-8');
            const vendorsJson = fs.readFileSync(resolve('public/assets/data/vendors.json'), 'utf-8');
            const mapJson = fs.readFileSync(resolve('public/assets/data/map.json'), 'utf-8');
            const scheduleJson = fs.readFileSync(resolve('public/assets/data/schedule.json'), 'utf-8');
            
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
          } catch (error) {
            console.error('Error copying data files:', error);
            // Don't fail the build if files are missing
          }
        }
      }
    ],
    base: base,
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
          // Ensure all chunks are placed in the assets directory
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]',
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
    // Ensure public directory is properly handled
    publicDir: 'public',
    // Optimize dependency pre-bundling
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom']
    }
  }
})
