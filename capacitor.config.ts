import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Kidlandia',
  webDir: 'www',
  plugins: {
    Filesystem: {
      directory: 'DOCUMENTS',
    },
  },
};

export default config;
