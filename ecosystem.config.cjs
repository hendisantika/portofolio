module.exports = {
  apps: [
    {
      name: "PORTOFOLIO WEB APP",
      port: "3000",
      exec_mode: "cluster",
      instances: 1,
      script: "./.output/server/index.mjs"
    }
  ]
};
