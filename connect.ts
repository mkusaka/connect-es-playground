import { ConnectError, ConnectRouter } from "@bufbuild/connect";
import { ElizaService } from "./gen/eliza_connect";

export default (router: ConnectRouter) =>
  router.service(ElizaService, {
    async say(req) {
      console.log({req})
      return {
        sentence: `You said: ${req.sentence}`,
      };
    },
  });
