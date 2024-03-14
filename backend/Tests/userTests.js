const chai = require("chai");
const chaiHttp = require("chair-http");
const app = require("../server");
const should = chai.should();

chai.use(chaiHttp);

describe("User Registration", () => {
  it("should create a new user", (done) => {
    // Arrange
    const newUser = {
      username: "harrypotter",
      password: "hogwarts2001",
    };

    // Act

    chai
      .request(app)
      .post("/api/users")
      .send(newUser)
      .end((err, res) => {
        // Assert
        res.should.have.status(201);
        res.body.should.be.a("object");
        res.body.should.have.property("user");
        done();
      });
  });
});
