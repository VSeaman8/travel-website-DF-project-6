import * as chai from "chai";
import { should } from "chai";
import chaiHttp from "chai-http";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

import User from "../Models/User.js";
import app from "../server.js";

const { request } = chai.use(chaiHttp);
should();

// Set up for having existing user in DB before each test
let userCredentials = {
  username: "ronweasley",
  password: "hogwarts2002",
};

before(async () => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userCredentials.password, salt);

    const user = new User({
      username: userCredentials.username,
      password: hashedPassword,
    });

    const savedUser = await user.save();
    console.log(savedUser);
  } catch (error) {
    console.error(error);
  }
});

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
    res.body.should.be.a("object");
    res.body.should.have.property("user");
  });
});

describe("User Login", () => {
  it("Should Log in a user", async function () {
    // Arrange
    const userCredentials = {
      username: "ronweasley",
      password: "hogwarts2002",
    };

    // Act

    const res = await request(app)
      .post("/api/User/login")
      .send(userCredentials);

    // Assert
    res.should.have.status(200);
    res.body.should.be.a("object");
    res.body.should.have.property("user");
  });
});

describe("Password Change", () => {
  it("should change the user's password", async function () {
    // Arrange
    const newPassword = "newpassword";

    // Act
    const res = await request(app)
      .post("/api/User/changePassword")
      .send({ username: userCredentials.username, password: newPassword });

    // Assert
    res.should.have.status(200);
    res.body.should.be.a("object");
    res.body.should.have
      .property("message")
      .eql("Password changed successfully");
  });
});

after(() => {
  mongoose.connection.close();
});
