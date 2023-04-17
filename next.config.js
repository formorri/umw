/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
const path = require('path')

// ? Uncomment this to upload to filezilla as a test-link or if you're certain of the final file path. Be sure to change the filepath of /development/UMW to whichever path that you choose to test this on
// ? If this use case is suitable for the client requirements, you can delete the following files 'out/fonts', '404.html', 'next.svg', 'thirteen.svg', 'vercel.svg'
// ? You can also delete all the images inside of 'out/assets' that aren't imported from constants/images.js
// ? Do comment this section again if your use case fits the below config setup
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

// ? Uncomment this for the final production files and be sure to do some post editing on the out file
// ? Go to out>_next>static>css and find all instances of _next/static/media/ and replace with ../media/
// ? You can delete the following files 'out/fonts', '404.html', 'next.svg', 'thirteen.svg', 'vercel.svg'
// ? You can also delete all the images inside of 'out/assets' that aren't imported from constants/images.js
// ? The reason why this needs to happen instead of using the above basePath config is because sometimes clients will upload the files into an unexpected folder
// ? For example, if the client needs to serve in both www.client.com/2022 and www.client.com, the basePath will not account for both. Next exports are NOT portable by default, which is why we need to manually change absolute filepaths to relative filepaths in out
// ? You may ignore this if you are 100% sure the client will upload to a specific folder in cPanel/Filezilla/etc. For example if you know the client will upload to www.client.com/2022 and this location will never change in the future
// ? Do comment this section again if your use case fits the above config setup
module.exports = {
  assetPrefix:'.',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true,
  },
}


