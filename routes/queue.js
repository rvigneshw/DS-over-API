const Queue = require("../dataStructures/Queue");

module.exports = function (fastify, opts, done) {
  const queue = new Queue();
  fastify.post("/enqueue", (request, reply) => {
    const { data } = request.body;
    queue.enqueue(data);
    return { status: "success" };
  });
  fastify.get("/dequeue", (request, reply) => {
    return { data: queue.dequeue() };
  });
  fastify.get("/front", (request, reply) => {
    return { data: queue.front() };
  });
  fastify.get("/back", (request, reply) => {
    return { data: queue.back() };
  });
  fastify.get("/isEmpty", (request, reply) => {
    return { data: queue.isEmpty() };
  });
  fastify.get("/getAll", (request, reply) => {
    return { data: queue.getAll() };
  });
  done();
};
