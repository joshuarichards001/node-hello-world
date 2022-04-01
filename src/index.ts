import express from "express";

export const app: express.Application = express();

if (process.env.NODE_ENV !== "test") {
  app.listen(process.env.PORT, () => console.log("Listening on port 8888!"));
}

app.get("/", (req: any, res: any) => res.send("Josh Richards API"));
