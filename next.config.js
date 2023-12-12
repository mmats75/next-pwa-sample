/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  // suppress 'GenerateSW has been called multiple times' in dev mode
  disable: process.env.NODE_ENV === 'development',
})

module.exports = withPWA({
  //next.js config
  reactStrictMode: true,
})
