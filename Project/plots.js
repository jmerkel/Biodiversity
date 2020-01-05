function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})}

init();

function optionChanged(newSample) {
  //console.log(newSample);
  buildMetaData(newSample);
  //buildCharts(newSample);
}

function buildMetaData(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    console.log(Object.entries(result))
    var demographicInfo = Object.entries(result);
    demographicInfo.forEach(item => PANEL.append("h6").text(item[0].toUpperCase() + ": " + item[1]));
  });
}

