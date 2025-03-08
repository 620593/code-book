// const jsonServer = require("json-server");
// const auth = require("json-server-auth");
// const cors = require("cors");
import jsonServer from "json-server";
import auth from "json-server-auth";
import cors from "cors";

const server = jsonServer.create();
const router = jsonServer.router("Data/db.json"); // Your JSON DB
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(cors()); // Fix CORS issues
server.use(jsonServer.bodyParser); // Needed for POST requests

// Bind `router.db` to make authentication work
server.db = router.db;

// Add authentication routes
server.use(auth);
server.use(router);

// Start server on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🚀 JSON Server is running on http://localhost:${PORT}`);
});
