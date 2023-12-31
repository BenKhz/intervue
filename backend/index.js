const express = require("express");
const app = express();
const port = 5050;
const { listPokemon, getPokemon } = require("./utils");
const cors = require('cors');
var colors = require('colors');

// Set cross origin requests policy to "Definitely not protected or secure in any way."
app.use(cors({ origin: '*'}));

app.get("/api/pokemon", (req, res) => {
  
  listPokemon(req.query).then((r) => {
    console.log(req.query)
    let isError = Math.random() * 100 > 75;
    if (isError) {
      res.status(500).send("Excessive traffic. Please try your request again.");
    } else {
      res.status(200).send(r);
    }
  });
});

app.get("/api/pokemon/:name", async (req, res) => {
    try {
        await getPokemon(req.params.name)
        .then((r) => res.status(200).send(r));
    }catch (e) {
        res.status(404).send({message: e.message})
    }
});

app.listen(port, () => {
  console.log(' *****************************************************\n'.green,
  '*                                                   *\n'.green,
 '*'.green, 'Intellective API proxy Listening on port:', `${port}.`.blue, '  *\n'.green,
 '*                                                   *\n'.green,
 '*****************************************************'.green);
});
