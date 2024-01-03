const express = require("express");
const { dbConnect } = require("./db/dbConnect")

const PORT = 3000;

const app = express();
app.use(express.json());

async function main() {
    await dbConnect()
    .then(() => {
        console.log("Connected to DB");
    });

    app.listen(PORT, () => {
        console.log("Server is listening on port", PORT);
    })
}

main();;