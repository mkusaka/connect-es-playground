import { fastify } from "fastify";
import routes from "./connect";
import { fastifyConnectPlugin } from "@bufbuild/connect-fastify";
import { readFileSync } from "fs";

async function main() {
  const server = fastify({
    http2: true,
    https: {
      key: readFileSync("localhost+2-key.pem", "utf-8"),
      cert: readFileSync("localhost+2.pem", "utf-8")
    }
  });
  await server.register(fastifyConnectPlugin, {
    routes
  });
  server.get("/", (_, reply) => {
    reply.type("text/plain");
    reply.send("Hello World!");
  })
  await server.listen({ host: "localhost", port: 8443 });
  console.log(`server is listening at ${JSON.stringify(server.addresses())}}`)
}

void main();
