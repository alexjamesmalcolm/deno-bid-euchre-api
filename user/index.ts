import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "../deps.ts";
import { log } from "../utils.ts";
import { client } from "../client.ts";

export async function userHandler(
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> {
  return log(client.listTables());
  // return {
  //   statusCode: 200,
  //   headers: { "content-type": "text/html;charset=utf8" },
  //   body: `Welcome to deno ${Deno.version.deno} 🦕 this is the index file`,
  // };
}
