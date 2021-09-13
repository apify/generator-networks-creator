const Apify = require('apify');
const GeneratorNetworksCreator = require("./src/generator-networks-creator.js");

Apify.main(async () => {
    console.log("Generating header generator files");
    const generatorNetworksCreator = new GeneratorNetworksCreator();
    await generatorNetworksCreator.prepareHeaderGeneratorFiles();
    console.log("Done");
});