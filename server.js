const http = require("http");
const mongodb = require("mongodb")

let db;
const connectionString = "mongodb+srv://farukhtukhtamishev1:p4T0DqFdudft1aSr@cluster0.mxgwges.mongodb.net/Reja"

mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}, 
(err, client) => {
  if (err) console.log("ERROR on connection MongoDB");
  else {
    console.log("MongoDb conncetion succeed");
    module.exports = client
    const app = require("./app");
    const server = http.createServer(app);
    let PORT = 3000;
    server.listen(PORT, function () {
        console.log(
        `The server is running successfuly on port: ${PORT}, http://localhost:${PORT}`
        );
     });
    } 
  }
);

