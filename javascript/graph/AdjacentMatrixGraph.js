/**
 *@description Modeling graph data structure and applying the BFS on it , using Matrix representation
 */

let { GraphNode } = require("./GraphNode");

/**
 * @type {[[]]}
 */
let adjacentMatrixGraph = [
  new Array(5).fill(0),
  new Array(5).fill(0),
  new Array(5).fill(0),
  new Array(5).fill(0),
  new Array(5).fill(0),
];

class Graph {
  /**
   *@type {[GraphNode]}
   */
  #graphVertices;
  /**
   *
   * @param {[GraphNode]} graphVertices
   */
  constructor(graphVertices) {
    this.#graphVertices = graphVertices;
  }

  printGraphModel() {
    let arrtext = "";
    for (let i = 0; i < adjacentMatrixGraph.length; i++) {
      for (let j = 0; j < adjacentMatrixGraph[i].length; j++) {
        arrtext += adjacentMatrixGraph[i][j] + " ";
      }
      console.log(arrtext);
      arrtext = "";
    }
  }

  /**
   *
   * @param {[GraphNode]} vertices
   */
  bsf() {
    this.#graphVertices.forEach((v) => {
      if (!v.isVisited()) {
        this.visitBFS(v);
      }
    });
  }

  dfs() {
    this.#graphVertices.forEach((v) => {
      if (!v.isVisited()) {
        this.visitDFS(v);
      }
    });
  }

  /**
   *
   * @param {GraphNode} vertice
   */
  visitDFS(vertice) {
    //setup the base case
    if (!vertice.isVisited()) {
      vertice.setVisited(true);
      console.log(`Node ${vertice.getName()} is being visited`);
      let neighbors = this.getGraphVerticeNeighbors(vertice);
      neighbors.forEach((nv) => {
        this.visitDFS(nv);
      });
    } else {
      return;
    }
  }

  reset() {
    this.#graphVertices.forEach((v) => {
      v.setVisited(false);
    });
  }

  addUndirectedEdge(i, j) {
    adjacentMatrixGraph[i][j] = 1;
    adjacentMatrixGraph[j][i] = 1;
  }

  /**
   *
   * @param {GraphNode} vertice
   */
  getGraphVerticeNeighbors(vertice) {
    let neighbors = [];

    for (let i = 0; i < this.#graphVertices.length; i++) {
      if (adjacentMatrixGraph[vertice.getIndex()][i] === 1) {
        neighbors.push(this.#graphVertices[i]);
      }
    }

    return neighbors;
  }
  /**
   *
   * @param {GraphNode} vertice
   */
  visitBFS(vertice) {
    /**
     * @type {[GraphNode]}
     */
    let queue = [];
    if (!vertice.isVisited()) {
      queue.push(vertice);
      while (queue.length !== 0) {
        let currentV = queue.shift(); // running time o(N) for shifting the elements , i will fix that later
        if (!currentV.isVisited()) {
          currentV.setVisited(true);
          console.log(`Node : ${currentV.getName()} is being visited`);
        }
        let verticeNeighbors = this.getGraphVerticeNeighbors(currentV);
        verticeNeighbors.forEach((nv) => {
          if (!nv.isVisited()) {
            queue.push(nv);
          }
        });
      }
    }
  }
}

/**
 *
 * @param {GraphNode} vertice
 */

module.exports = { Graph };
