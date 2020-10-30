const express = require("express");
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })

const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express();

    server.get("*", (req, res) => handle(req, res));

    server.listen(process.env.PORT || 3000, process.env.HOST || "localhost", () => {
        console.log(`
Server started with arguments:
    HOST: ${process.env.HOST || "localhost"}
    PORT: ${process.env.PORT || 3000}`)
    })
})