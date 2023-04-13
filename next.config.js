/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
const path = require('path')
// const basePath = process.env.NODE_ENV === 'production' ? '/development/UMW' : '';

// module.exports = {
//   trailingSlash: true,
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   basePath,
//   assetPrefix: basePath,
//   images: {
//     path: `${basePath}/_next/image`,
//     unoptimized: true,
//   },
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       // This will replace all `basePath` occurrences with an empty string
//       config.output.publicPath = config.output.publicPath.replace(basePath, '');
//     }
//     return config;
//   },
// };


module.exports = {
  assetPrefix:'.',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true,
  },
}

// next.config.js

