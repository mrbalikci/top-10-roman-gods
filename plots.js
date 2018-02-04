
// sort the data based on the popularity in decending order

data.sort(function (x, y) {
    return parseFloat(x.romanSearchResults) - parseFloat(y.romanSearchResults)
});

// slice the data for top 10

data.slice(0, 10);

// trace required for Plot.Ly
trace = {
    x: data.map(row => row.romanSearchResults),
    y: data.map(row => row.romanName),
    title: data.map(row => row.romanName),
    type: "bar",
    name: "Roman",
    orientation: "h"
}

// data is part of Plot.ly
data = [trace]

// define the layouts 
layout = {
    title: "Top 10 Roman Gods",
    margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 100
    }
}

// call the plotly to plot the data
Plotly.newPlot("plot", data, layout)