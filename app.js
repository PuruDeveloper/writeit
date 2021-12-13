const express = require("express");
const http = require("http");
// const socketio = require("socket.io");

const userRoute = require("./routes/userRoutes");

const app = express();
app.use(express.json());
const server = http.createServer(app);
// const io = socketio(server);

app.use(express.static(`${__dirname}/public`));

app.use("/", userRoute);

module.exports = app;
