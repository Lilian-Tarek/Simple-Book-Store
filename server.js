import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/api", router);

export default server;


if (process.env.NODE_ENV !== "production") {
  server.listen(9000, () => {
    console.log("JSON Server is running on http://localhost:9000");
  });
}
