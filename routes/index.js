const Router = require("express").Router;
const apiRoutes = require("./apiRoutes");
const htmlRoutes = require("./htmlRoutes");

const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const router = new Router();

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0Domain}/.well-known/jwks.json`
  }),
  audience: process.env.AUDIENCE,
  issuer: `https://${process.env.AUTH0Domain}/`,
  algorithm: ["RS256"]
});

router.use("/api", checkJwt, apiRoutes);
router.use("", htmlRoutes);

module.exports = router;
