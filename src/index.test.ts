import request from "supertest";
import { app } from "./index";

it("Should return Josh Richards API", async () => {
  const res = await request(app).get("/");
  expect(res.text).toBe("Josh Richards API");
});
