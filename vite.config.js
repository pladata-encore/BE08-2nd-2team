import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/team2-react-clone/', // ⚠️ 반드시 본인의 레포지토리 이름으로 수정!
});
