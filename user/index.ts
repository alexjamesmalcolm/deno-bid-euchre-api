import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "../dependencies.ts";

const log = (a: any) => ({
  statusCode: 200,
  headers: { "content-type": "application/json" },
  body: JSON.stringify(a, null, 2),
});

export async function userHandler(
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> {
  // return {
  //   statusCode: 200,
  //   headers: { "content-type": "text/html;charset=utf8" },
  //   body: `Welcome to deno ${Deno.version.deno} 🦕 this is the index file`,
  // };
}
