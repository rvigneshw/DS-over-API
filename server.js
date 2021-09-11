// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });

// Declare a route
fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});
fastify.register(require("./routes/stack"), { prefix: "/stack" });

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
