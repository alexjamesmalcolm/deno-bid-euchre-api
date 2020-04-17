import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
  Doc,
} from "../deps.ts";
import { log } from "../utils.ts";
import { client } from "../client.ts";

export async function userHandler(
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> {
  const document: Doc = await client.listTables();
  const result = { document: JSON.stringify(document) };
  return log(result);
  // return {
  //   statusCode: 200,
  //   headers: { "content-type": "text/html;charset=utf8" },
  //   body: `Welcome to deno ${Deno.version.deno} 🦕 this is the index file`,
  // };
}
