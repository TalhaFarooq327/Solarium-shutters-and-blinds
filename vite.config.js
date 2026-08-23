import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve the project root from this config file's location — survives Vite's .vite-temp copy
const __dirname = path.dirname(fileURLToPath(import.meta.url));

function apiDevPlugin() {
  return {
    name: 'api-dev-server',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if ((req.url === '/api/contact.php' || req.url === '/api/send-email') && (req.method === 'POST' || req.method === 'OPTIONS')) {
          if (req.method === 'OPTIONS') {
            res.statusCode = 200;
            res.end();
            return;
          }
          let body = '';
          req.on('data', (chunk) => { body += chunk; });
          req.on('end', () => {
            let parsed = {};
            try { parsed = body ? JSON.parse(body) : {}; } catch { parsed = {}; }
            console.log('[LOCAL DEV SIMULATION] Contact form submission:', parsed);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true, message: "Enquiry received successfully." }));
          });
          return;
        }
        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), apiDevPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
