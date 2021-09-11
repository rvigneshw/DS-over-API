const Stack = require("../dataStructures/Stack");

module.exports = function (fastify, opts, done) {
  const stack = new Stack();
  fastify.post("/push", (request, reply) => {
    const { data } = request.body;
    stack.push(data);
    return { status: "success" };
  });
  fastify.get("/pop", (request, reply) => {
    return { data: stack.pop() };
  });
  fastify.get("/peek", (request, reply) => {
    return { data: stack.peek() };
  });
  fastify.get("/isEmpty", (request, reply) => {
    return { data: stack.isEmpty() };
  });
  fastify.get("/getAll", (request, reply) => {
    return { data: stack.getAll() };
  });
  done();
};
