import { APIGatewayProxyResult } from "./deps.ts";

export const log = (a: any) => ({
  statusCode: 200,
  headers: { "content-type": "application/json" },
  body: JSON.stringify(a, null, 2),
});

export const badMethod = (
  method: string,
): APIGatewayProxyResult => ({
  statusCode: 405,
  body: `The ${method} is not supported`,
});
