// Authentication middleware function to protect routes
const auth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (authHeader === "Bearer mysecrettoken") {
    next(); // Call next() to pass control to the next middleware function
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

export default auth;
