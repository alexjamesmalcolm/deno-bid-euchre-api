import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "../deps.ts";

export async function lobbyHandler(
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> {
  return { statusCode: 200, body: "Lobby Handler" };
  // return {
  //   statusCode: 200,
  //   headers: { "content-type": "text/html;charset=utf8" },
  //   body: `Welcome to deno ${Deno.version.deno} 🦕 this is the index file`,
  // };
}
