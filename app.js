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

  const setUsernames = async (sockets) => {
    for (let index = 0; index < sockets.length; index++) {
      const element = sockets[index];
      element.data.username = `Stranger ${index + 1}`;
    }
  };

  io.on("connection", async (socket) => {
    const sockets = await io.fetchSockets();

    setUsernames(sockets);

    io.emit("joined", `${socket.data.username} joined the chat!`);

    socket.on("chat message", (msg) => {
      io.emit("chat message", msg);
    });

    socket.on("disconnect", () => {
      io.emit("left", "user left chat");
      setUsernames(sockets);
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
