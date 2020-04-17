import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
  uuid,
} from "../deps.ts";
import { log, badMethod } from "../utils.ts";
import { client } from "../client.ts";

export async function userHandler(
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> {
  const method = event.httpMethod;
  if (method === "POST") {
    const result = await client.putItem(
      { TableName: "bid-euchre-user", Item: {
        [uuid()]: {
          nickname: "Noodle",
        },
      } },
    ).catch((error) => ({ error }));
    return log(result);
  } else {
    return badMethod(method);
  }
  // const example = {
  //   "ConditionalOperator": "string",
  //   "ConditionExpression": "string",
  //   "Expected": {
  //     "string": {
  //       "AttributeValueList": [
  //         {
  //           "B": blob,
  //           "BOOL": boolean,
  //           "BS": [blob],
  //           "L": [
  //             "AttributeValue",
  //           ],
  //           "M": {
  //             "string": "AttributeValue",
  //           },
  //           "N": "string",
  //           "NS": ["string"],
  //           "NULL": boolean,
  //           "S": "string",
  //           "SS": ["string"],
  //         },
  //       ],
  //       "ComparisonOperator": "string",
  //       "Exists": boolean,
  //       "Value": {
  //         "B": blob,
  //         "BOOL": boolean,
  //         "BS": [blob],
  //         "L": [
  //           "AttributeValue",
  //         ],
  //         "M": {
  //           "string": "AttributeValue",
  //         },
  //         "N": "string",
  //         "NS": ["string"],
  //         "NULL": boolean,
  //         "S": "string",
  //         "SS": ["string"],
  //       },
  //     },
  //   },
  //   "ExpressionAttributeNames": {
  //     "string": "string",
  //   },
  //   "ExpressionAttributeValues": {
  //     "string": {
  //       "B": blob,
  //       "BOOL": boolean,
  //       "BS": [blob],
  //       "L": [
  //         "AttributeValue",
  //       ],
  //       "M": {
  //         "string": "AttributeValue",
  //       },
  //       "N": "string",
  //       "NS": ["string"],
  //       "NULL": boolean,
  //       "S": "string",
  //       "SS": ["string"],
  //     },
  //   },
  //   "Item": {
  //     "string": {
  //       "B": blob,
  //       "BOOL": boolean,
  //       "BS": [blob],
  //       "L": [
  //         "AttributeValue",
  //       ],
  //       "M": {
  //         "string": "AttributeValue",
  //       },
  //       "N": "string",
  //       "NS": ["string"],
  //       "NULL": boolean,
  //       "S": "string",
  //       "SS": ["string"],
  //     },
  //   },
  //   "ReturnConsumedCapacity": "string",
  //   "ReturnItemCollectionMetrics": "string",
  //   "ReturnValues": "string",
  //   "TableName": "string",
  // };
}
