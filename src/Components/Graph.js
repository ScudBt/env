import React, {Component} from 'react';
var d3 = require("d3");

const data = {
    nodes: [
        {
            name: "Inception",
            group: 1,
        },
        {
            name: "WolfofWallStreet",
            group: 1
        },
        {
            name: "Titanic",
            group: 1
        },
        {
            name: "LeonardoDiCaprio",
            group: 2
        },
        {
            name: "MatthewMcConaughey",
            group: 2
        },
        {
            name: "MargotRobbie",
            group: 2
        }
    ],
    links: [
        {
            source: 0,
            target: 3,
            value: 1
        },
        {
            source: 1,
            target: 3,
            value: 2
        },
        {
            source: 2,
            target: 3,
            value: 2
        },
        {
            source: 1,
            target: 4,
            value: 2
        },
        {
            source: 1,
            target: 5,
            value: 2
        }
    ]
}

class Graph extends Component {

    drag = (simulation) => {

        function dragStarted(d) {
            if (!d3.event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        }

        function dragEnded(d) {
            if (!d3.event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }

        return d3.drag()
            .on("start", dragStarted)
            .on("drag", dragged)
            .on("end", dragEnded);
    }

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

        const color = (node) => {
            if (node.group == 1) // it's a name
                return d3.color("blue");
            return d3.color("pink");
        }

        const radius = (node) => {
            if (node.group == 1)
                return 20;
            return 40;
        }

        const simulation = d3.forceSimulation(obj_nodes)
            .force("link", d3.forceLink().links(links).id(d => { return d.index;}).distance(200))
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter(width/2, height/2));

        const node = svg.append("g")
            .attr("stroke", "#fff")
            .attr("stroke-width", 1.5)
            .selectAll("circle")
            .data(obj_nodes)
            .join("circle")
            .attr("r", radius)
            .attr("fill", color)
            .call(this.drag(simulation));

        node.append("svg:title")
            .text(function(d) {return d.name});

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