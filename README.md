This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
To begin editing this project, some setup is required:
1. Install node.js from https://nodejs.org/en
2. Download the file into your local machine and in your terminal run 'npm i' to install all the required dependencies
3. To begin the server, run 'npm run dev'
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Creating a production ready folder
1. Next uses absolute paths instead of relative paths. This means that the production folder, without a basePath value or post editing of the out files will result in broken links unless you upload it into the root folder. 
2. For example, if you upload the out files into novafusion.my/development/UMW, without the basePath or post-editing, it will link all href tags to novafusion.my.
3. To overcome this issue, I have two next.config.js setups. Before you build the production file, kindly read through my comments in next.config.js and follow the instructions 
4. To read more on this issue, please refer to https://github.com/vercel/next.js/discussions/32216

## Building the files
1. Run 'npm run build' in your terminal. The production ready folder will be in out.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
