export {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "https://deno.land/x/lambda/mod.ts";

export {
  chooseOption,
  startGame,
  getOptions,
} from "https://raw.githubusercontent.com/alexjamesmalcolm/deno-bid-euchre-engine/master/index.ts";

export {
  createClient,
  Doc,
  DynamoDBClient,
} from "https://deno.land/x/dynamodb@v0.3.1/mod.ts";

import { v4 } from "https://deno.land/std@v0.41.0/uuid/mod.ts";
export const uuid = v4.generate;
