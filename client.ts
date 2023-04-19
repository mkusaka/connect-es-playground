import { createPromiseClient } from "@bufbuild/connect"
import { createGrpcTransport } from '@bufbuild/connect-node';
import { ElizaService } from './gen/eliza_connect';
// const transport = createGrpcTransport({
//   baseUrl: "http://localhost:8443",
//   httpVersion: "2",
//   interceptors: [],
// })

const transport = createGrpcTransport({
  // Requests will be made to <baseUrl>/<package>.<service>/method
  baseUrl: "https://localhost:8443",

  // You have to tell the Node.js http API which HTTP version to use.
  httpVersion: "2",

  // Interceptors apply to all calls running through this transport.
  interceptors: [],
});

async function main() {
  const client = createPromiseClient(ElizaService, transport);
  const res = await client.say({ sentence: "Hello World!" });
  console.log(res);
}
void main();
