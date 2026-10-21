import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
   /* config options here */
   images: {
      // Next 16 only allows quality 75 by default; logo and hero use 100
      qualities: [75, 100],
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'images.pexels.com',
            port: '',
            pathname: '/photos/**',
         },
      ],
   },
};

export default nextConfig;
