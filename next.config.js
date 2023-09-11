/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
}

 
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.rapidpestcontrolmelbourne.com.au',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
}