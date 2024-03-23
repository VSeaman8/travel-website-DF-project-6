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

// Tests for Favourite Locations

describe("GET /favouriteLocations", () => {
  it("GET all favourite locations of the user", async () => {
    // Arrange
    const user = await User.findOne({ username: userCredentials.username });
    user.favouriteLocations = ["Rivendale", "Shire"];
    await user.save();

    // Act
    const res = await request(app)
      .get("/api/favouriteLocations")
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
