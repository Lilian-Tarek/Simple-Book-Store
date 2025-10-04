const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/api", router); // مهم يكون /api عشان يمشي مع routes في vercel.json

module.exports = server;
