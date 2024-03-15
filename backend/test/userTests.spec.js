import * as chai from "chai";
import { should } from "chai";
import chaiHttp from "chai-http";
import app from "../server.js";

const { request } = chai.use(chaiHttp);
should();

describe("User Registration", () => {
  it("should create a new user", async function () {
    // Arrange
    const newUser = {
      username: "harrypotter",
      password: "hogwarts2001",
    };

    // Act

    const res = await request(app).post("/api/User").send(newUser);

    // Assert
    res.should.have.status(201);
    res.body.should.be.a("string");
    res.body.should.have.property("user");
  });
});
