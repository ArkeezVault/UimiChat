const fastify = require("fastify")({
  logger: true,
});

const path = require("path");
const { Server } = require("socket.io");
const io = new Server(fastify.server);

fastify.register(require("@fastify/static"), {
  root: path.join(__dirname, "public"),
  prefix: "/public/", // optional: default '/'
});

// Declare a route
fastify.get("/", function (request, reply) {
  return reply.sendFile("index.html");
});

fastify.ready((err) => {
  if (err) throw err;

  var randomColor = Math.floor(Math.random() * 16777215).toString(16);

  io.on("connection", async (socket) => {
    const sockets = await io.fetchSockets();
    socket.data.username = socket.id.slice(-4).toUpperCase();

    io.emit("joined", {
      username: socket.data.username,
      msg: `${socket.data.username} joined the chat!`,
    });

    socket.on("chat message", (msg) => {
      io.emit("chat message", {
        username: socket.data.username,
        msg,
      });
    });

    socket.on("disconnect", () => {
      io.emit("left", `${socket.data.username}  left chat`);
    });
  });
});

const start = async () => {
  try {
    await fastify.listen(4000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
