import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    target: 'es2022',
    sourcemap: true,
    chunkSizeWarningLimit: 1000
  },
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', '/img/icons/ios/180.png'],
      manifest: {
        name: 'Unfair Spin Wheel',
        short_name: 'Unfair Spin Wheel',
        description: 'The world is unfair, and so is our spin wheel.',
        theme_color: '#212f56',
        icons: [
          {
            src: 'img/icons/maskable_icon.png',
            sizes: '743x743',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: 'img/icons/windows11/SmallTile.scale-100.png',
            sizes: '71x71'
          },
          {
            src: 'img/icons/windows11/SmallTile.scale-125.png',
            sizes: '89x89'
          },
          {
            src: 'img/icons/windows11/SmallTile.scale-150.png',
            sizes: '107x107'
          },
          {
            src: 'img/icons/windows11/SmallTile.scale-200.png',
            sizes: '142x142'
          },
          {
            src: 'img/icons/windows11/SmallTile.scale-400.png',
            sizes: '284x284'
          },
          {
            src: 'img/icons/windows11/Square150x150Logo.scale-100.png',
            sizes: '150x150'
          },
          {
            src: 'img/icons/windows11/Square150x150Logo.scale-125.png',
            sizes: '188x188'
          },
          {
            src: 'img/icons/windows11/Square150x150Logo.scale-150.png',
            sizes: '225x225'
          },
          {
            src: 'img/icons/windows11/Square150x150Logo.scale-200.png',
            sizes: '300x300'
          },
          {
            src: 'img/icons/windows11/Square150x150Logo.scale-400.png',
            sizes: '600x600'
          },
          {
            src: 'img/icons/windows11/Wide310x150Logo.scale-100.png',
            sizes: '310x150'
          },
          {
            src: 'img/icons/windows11/Wide310x150Logo.scale-125.png',
            sizes: '388x188'
          },
          {
            src: 'img/icons/windows11/Wide310x150Logo.scale-150.png',
            sizes: '465x225'
          },
          {
            src: 'img/icons/windows11/Wide310x150Logo.scale-200.png',
            sizes: '620x300'
          },
          {
            src: 'img/icons/windows11/Wide310x150Logo.scale-400.png',
            sizes: '1240x600'
          },
          {
            src: 'img/icons/windows11/LargeTile.scale-100.png',
            sizes: '310x310'
          },
          {
            src: 'img/icons/windows11/LargeTile.scale-125.png',
            sizes: '388x388'
          },
          {
            src: 'img/icons/windows11/LargeTile.scale-150.png',
            sizes: '465x465'
          },
          {
            src: 'img/icons/windows11/LargeTile.scale-200.png',
            sizes: '620x620'
          },
          {
            src: 'img/icons/windows11/LargeTile.scale-400.png',
            sizes: '1240x1240'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.scale-100.png',
            sizes: '44x44'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.scale-125.png',
            sizes: '55x55'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.scale-150.png',
            sizes: '66x66'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.scale-200.png',
            sizes: '88x88'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.scale-400.png',
            sizes: '176x176'
          },
          {
            src: 'img/icons/windows11/StoreLogo.scale-100.png',
            sizes: '50x50'
          },
          {
            src: 'img/icons/windows11/StoreLogo.scale-125.png',
            sizes: '63x63'
          },
          {
            src: 'img/icons/windows11/StoreLogo.scale-150.png',
            sizes: '75x75'
          },
          {
            src: 'img/icons/windows11/StoreLogo.scale-200.png',
            sizes: '100x100'
          },
          {
            src: 'img/icons/windows11/StoreLogo.scale-400.png',
            sizes: '200x200'
          },
          {
            src: 'img/icons/windows11/SplashScreen.scale-100.png',
            sizes: '620x300'
          },
          {
            src: 'img/icons/windows11/SplashScreen.scale-125.png',
            sizes: '775x375'
          },
          {
            src: 'img/icons/windows11/SplashScreen.scale-150.png',
            sizes: '930x450'
          },
          {
            src: 'img/icons/windows11/SplashScreen.scale-200.png',
            sizes: '1240x600'
          },
          {
            src: 'img/icons/windows11/SplashScreen.scale-400.png',
            sizes: '2480x1200'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.targetsize-16.png',
            sizes: '16x16'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.targetsize-20.png',
            sizes: '20x20'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.targetsize-24.png',
            sizes: '24x24'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.targetsize-30.png',
            sizes: '30x30'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.targetsize-32.png',
            sizes: '32x32'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.targetsize-36.png',
            sizes: '36x36'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.targetsize-40.png',
            sizes: '40x40'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.targetsize-44.png',
            sizes: '44x44'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.targetsize-48.png',
            sizes: '48x48'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.targetsize-60.png',
            sizes: '60x60'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.targetsize-64.png',
            sizes: '64x64'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.targetsize-72.png',
            sizes: '72x72'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.targetsize-80.png',
            sizes: '80x80'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.targetsize-96.png',
            sizes: '96x96'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.targetsize-256.png',
            sizes: '256x256'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-unplated_targetsize-16.png',
            sizes: '16x16'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-unplated_targetsize-20.png',
            sizes: '20x20'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-unplated_targetsize-24.png',
            sizes: '24x24'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-unplated_targetsize-30.png',
            sizes: '30x30'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-unplated_targetsize-32.png',
            sizes: '32x32'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-unplated_targetsize-36.png',
            sizes: '36x36'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-unplated_targetsize-40.png',
            sizes: '40x40'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-unplated_targetsize-44.png',
            sizes: '44x44'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-unplated_targetsize-48.png',
            sizes: '48x48'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-unplated_targetsize-60.png',
            sizes: '60x60'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-unplated_targetsize-64.png',
            sizes: '64x64'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-unplated_targetsize-72.png',
            sizes: '72x72'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-unplated_targetsize-80.png',
            sizes: '80x80'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-unplated_targetsize-96.png',
            sizes: '96x96'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-unplated_targetsize-256.png',
            sizes: '256x256'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png',
            sizes: '16x16'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png',
            sizes: '20x20'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png',
            sizes: '24x24'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png',
            sizes: '30x30'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png',
            sizes: '32x32'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png',
            sizes: '36x36'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png',
            sizes: '40x40'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png',
            sizes: '44x44'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png',
            sizes: '48x48'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png',
            sizes: '60x60'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png',
            sizes: '64x64'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png',
            sizes: '72x72'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png',
            sizes: '80x80'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png',
            sizes: '96x96'
          },
          {
            src: 'img/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png',
            sizes: '256x256'
          },
          {
            src: 'img/icons/android/android-launchericon-512-512.png',
            sizes: '512x512'
          },
          {
            src: 'img/icons/android/android-launchericon-192-192.png',
            sizes: '192x192'
          },
          {
            src: 'img/icons/android/android-launchericon-144-144.png',
            sizes: '144x144'
          },
          {
            src: 'img/icons/android/android-launchericon-96-96.png',
            sizes: '96x96'
          },
          {
            src: 'img/icons/android/android-launchericon-72-72.png',
            sizes: '72x72'
          },
          {
            src: 'img/icons/android/android-launchericon-48-48.png',
            sizes: '48x48'
          },
          {
            src: 'img/icons/ios/16.png',
            sizes: '16x16'
          },
          {
            src: 'img/icons/ios/20.png',
            sizes: '20x20'
          },
          {
            src: 'img/icons/ios/29.png',
            sizes: '29x29'
          },
          {
            src: 'img/icons/ios/32.png',
            sizes: '32x32'
          },
          {
            src: 'img/icons/ios/40.png',
            sizes: '40x40'
          },
          {
            src: 'img/icons/ios/50.png',
            sizes: '50x50'
          },
          {
            src: 'img/icons/ios/57.png',
            sizes: '57x57'
          },
          {
            src: 'img/icons/ios/58.png',
            sizes: '58x58'
          },
          {
            src: 'img/icons/ios/60.png',
            sizes: '60x60'
          },
          {
            src: 'img/icons/ios/64.png',
            sizes: '64x64'
          },
          {
            src: 'img/icons/ios/72.png',
            sizes: '72x72'
          },
          {
            src: 'img/icons/ios/76.png',
            sizes: '76x76'
          },
          {
            src: 'img/icons/ios/80.png',
            sizes: '80x80'
          },
          {
            src: 'img/icons/ios/87.png',
            sizes: '87x87'
          },
          {
            src: 'img/icons/ios/100.png',
            sizes: '100x100'
          },
          {
            src: 'img/icons/ios/114.png',
            sizes: '114x114'
          },
          {
            src: 'img/icons/ios/120.png',
            sizes: '120x120'
          },
          {
            src: 'img/icons/ios/128.png',
            sizes: '128x128'
          },
          {
            src: 'img/icons/ios/144.png',
            sizes: '144x144'
          },
          {
            src: 'img/icons/ios/152.png',
            sizes: '152x152'
          },
          {
            src: 'img/icons/ios/167.png',
            sizes: '167x167'
          },
          {
            src: 'img/icons/ios/180.png',
            sizes: '180x180'
          },
          {
            src: 'img/icons/ios/192.png',
            sizes: '192x192'
          },
          {
            src: 'img/icons/ios/256.png',
            sizes: '256x256'
          },
          {
            src: 'img/icons/ios/512.png',
            sizes: '512x512'
          },
          {
            src: 'img/icons/ios/1024.png',
            sizes: '1024x1024'
          }
        ]
      }
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'README.md',
          dest: ''
        },
        {
          src: 'LICENSE',
          dest: ''
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
