// import { createServer } from 'node:http'

// const server = createServer((request, response)=> {
//     response.write('Hello World')

//     return response.end()
// })

// server.listen(3333);

// servidor feito manualmente 

import { fastify } from "fastify";

const server = fastify();

server.get('/', () => {
    return 'Node com Fastify'
})

server.listen({
    port: 3333,
    
})