export const log = (a: any) => ({
  statusCode: 200,
  headers: { "content-type": "application/json" },
  body: JSON.stringify(a, null, 2),
});
