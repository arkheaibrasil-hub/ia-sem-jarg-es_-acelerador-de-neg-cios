import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  const isProduction = mode === 'production';

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    build: {
      // Otimizações de build para produção
      target: 'es2015',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: isProduction, // Remove console.log em produção
          drop_debugger: isProduction,
        },
      },
      // Code splitting otimizado
      rollupOptions: {
        output: {
          manualChunks: {
            // Separar vendor chunks para melhor caching
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'ai-vendor': ['@google/genai'],
          },
          // Nomes de chunk com hash para cache busting
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        },
      },
      // Chunk size warnings
      chunkSizeWarningLimit: 1000,
      // Source maps apenas para desenvolvimento
      sourcemap: !isProduction,
    },
    // Otimizações de performance
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
    },
  };
});
