import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'proyecto-camara',
  webDir: 'dist/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
