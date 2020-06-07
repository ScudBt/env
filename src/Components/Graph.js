import React, {Component} from 'react';
var d3 = require("d3");

const data = {
    nodes: [
        {
            name: "a",
            group: 1
        },
        {
            name: "b",
            group: 2
        }
    ],
    links: [
        {
            source: 1,
            target: 0,
            value: 1
        }
    ]
}

class Graph extends Component {

    chart(nodes,links) {
        const width = 1920;
        const height = 1080;

        const obj_nodes = nodes.map(d => Object.create(d));
        const obj_links = links.map(d => Object.create(d));

        const svg = d3.create("svg")
            .attr("viewBox", [0,0,width,height]);

        const link = svg.append("g")
            .attr("stroke", "#999")
            .attr("stroke-width", 0.6)
            .selectAll("line")
            .data(obj_links)
            .join("line")
            .attr("stroke-width", d => Math.sqrt(d.value));

        const node = svg.append("g")
            .attr("stroke", "#fff")
            .attr("stroke-width", 1.5)
            .selectAll("circle")
            .data(obj_nodes)
            .join("circle")
            .attr("r", 20)
            .attr("fill", d3.color("steelblue"));

        const simulation = d3.forceSimulation(obj_nodes)
            .force("link", d3.forceLink().links(links).id(d => { return d.index;}).distance(200))
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter(width/2, height/2));

        simulation.on("tick", () => {
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);
            node
                .attr("cx", d => d.x)
                .attr("cy", d => d.y);
        });

        return svg.node();
    }

    componentDidMount() {
       const elem = document.getElementById("mysvg");

       elem.appendChild(this.chart(data.nodes, data.links));
    }

    render() {
        return (
            <div id={"mysvg"}>
                
            </div>
        );
    }
}

export default Graph;