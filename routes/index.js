const Router = require("express").Router;
const apiRoutes = require("./apiRoutes");
const htmlRoutes = require("./htmlRoutes");
// const secretHtmlRoutes = require("./secretHtmlRoutes");

const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const authConfig = require("../auth_config.json");

const router = new Router();

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),
  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"]
});

router.use("/api", checkJwt, apiRoutes);
// router.use("/secret", checkJwt, secretHtmlRoutes);
router.use("", htmlRoutes);

module.exports = router;
