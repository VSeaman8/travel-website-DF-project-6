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
  email: "ron@hogwarts.com",
  firstName: "Ron",
  lastName: "Weasley",
};

beforeEach(async () => {
  try {
    // Delete all users
    await User.deleteMany({});

    // Create a new user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userCredentials.password, salt);

    const user = new User({
      username: userCredentials.username,
      password: hashedPassword,
      email: userCredentials.email,
      firstName: userCredentials.firstName,
      lastName: userCredentials.lastName,
    });

    await user.save();
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
      email: "harry@hogwarts.com",
      firstName: "Harry",
      lastName: "Potter",
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

// Tests for Favourite Locations

describe("GET /favouriteLocations", () => {
  it("GET all favourite locations of the user", async () => {
    // Arrange
    const user = await User.findOne({ username: userCredentials.username });
    user.favouriteLocations = ["Rivendale", "Shire"];
    await user.save();

    // Act
    const res = await request(app)
      .get("/api/User/FavouriteLocations")
      .set("username", userCredentials.username);

    // Assert
    res.should.have.status(200);
    res.body.should.be.a("array");
    res.body.length.should.be.eql(2);
  });
});

after(() => {
  mongoose.connection.close();
});
