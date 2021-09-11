const fastify = require("fastify")({ logger: true });

fastify.register(require("./routes/stack"), { prefix: "/stack" });
fastify.register(require("./routes/queue"), { prefix: "/queue" });

const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
