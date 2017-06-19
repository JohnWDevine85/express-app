const express = require ('express');
const path = require ('path');
const app = express();
var loremIpsum = require('lorem-ipsum')

app.get('/lorem/:num', function (req, res) {
  let num = req.params.number;
  html = "";
  var output = loremIpsum({
      count: req.params.number                      // Number of words, sentences, or paragraphs to generate.
    , units: 'paragraphs'           // Generate words, sentences, or paragraphs.
    , sentenceLowerBound: 5         // Minimum words per sentence.
    , sentenceUpperBound: 15        // Maximum words per sentence.
    , paragraphLowerBound: 3        // Minimum sentences per paragraph.
    , paragraphUpperBound: 7        // Maximum sentences per paragraph.
    , format: 'html'                // Plain text or html
    , words: []                     // Custom word dictionary. Uses dictionary.words (in lib/dictionary.js) by default.
    , random: Math.random           // A PRNG function. Uses Math.random by default
    , suffix: EOL                   // The character to insert between paragraphs. Defaults to default EOL for your OS.
  });;

  res.send(output);
});



app.listen(3000, function () {
  console.log('Successfully started express application!')
});
