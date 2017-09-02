const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send({ text: "logged out", user: req.user });
  });

  app.get("/api/current_user", (req, res) => {
    res.send({
      text: "current user",
      loggedUser: req.user,
      session: req.session
    });
  });

  app.get("/", (req, res) => {
    console.log("welcome to the console");
    res.send({
      hi: "there, a fourth version, to get MLAB to work"
    });
  });

  // app.get('/greet', (req, res) => {
  //   res.send({ hi: 'greeetssss' });
  // });

  // app - the express app to register
  // get - watch for HTTP request on GET method
  // '/' - watch for '/' ROUTE access on the GET rest call
  // req - fucntion attrtibute for the incoming
  // res - funciton objet for outgoing
  // res.send - return on the incoming res object
};
