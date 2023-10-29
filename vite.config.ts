import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [tsconfigPaths(), svgrPlugin(), react()],
    server: {
        open: true,
        port: 3000,
    },
});
