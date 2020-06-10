module.exports = {
  apps: [
    {
      watch: ".",
      name: "APQ",
      script: "./app.js",
      instances: "1",
      autorestart: true,
      exec_mode: 'cluster',
      max_memory_restart: '1G',
      env: {
        NODE_ENV: "development",
        DB_NAME: "customer",
      },
      env_production: {
        NODE_ENV: "production",
        DB_NAME: "customer",
      }
    },
  ],
};
