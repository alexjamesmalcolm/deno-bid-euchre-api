import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "./deps.ts";
import { userHandler } from "./user/index.ts";
import { lobbyHandler } from "./lobby/index.ts";
import { leaderboardHandler } from "./leaderboard/index.ts";
import { gameHandler } from "./game/index.ts";

export async function handler(
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> {
  const { path } = event;
  if (path.startsWith("/user")) return userHandler(event, context);
  else if (path.startsWith("/lobby")) return lobbyHandler(event, context);
  else if (path.startsWith("/leaderboard")) {
    return leaderboardHandler(event, context);
  } else if (path.startsWith("/game")) return gameHandler(event, context);
  else return { statusCode: 404, body: `No route found for ${path}` };
}
