module.exports = {
    apps: [
      {
        name: 'cloud-front',
        script: 'npx serve',
        args: '-s build -l 3000',
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
  