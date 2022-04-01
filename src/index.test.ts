import request from "supertest";
import { app } from "./index";

describe('GET /user', () => {
  it('responds with json', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });
});