/**
 * @description adjacent list graph modeling
 */

let { GraphNode } = require("./GraphNode");

class AdjacentListGraph {
  /**
   * @type {[GraphNode]}
   */
  #vertices;
  /**
   *
   * @param {[GraphNode]} vertices
   */
  constructor(vertices) {
    this.#vertices = vertices;
  }

  bfs() {
    this.#vertices.forEach((v) => {
      if (!v.isVisited()) {
        this.visitBFS(v);
      }
    });
  }

  dfs() {
    this.#vertices.forEach((v) => {
      if (!v.isVisited()) {
        this.visitDFS(v);
      }
    });
  }

  reset() {
    this.#vertices.forEach((v) => {
      v.setVisited(false);
    });
  }

  /**
   *
   * @param {GraphNode} v
   */
  visitBFS(v) {
    /**
     * @type {[GraphNode]}
     */
    let queue = [];
    queue.push(v);
    while (queue.length !== 0) {
      let cv = queue.shift();
      if (!cv.isVisited()) {
        cv.setVisited(true);
        console.log(
          `Node : ${cv.getName()} is being visited [Adjacent graph model]`
        );
        cv.getNeighbors().forEach((nv) => {
          if (!nv.isVisited()) {
            queue.push(nv);
          }
        });
      }
    }
  }

  /**
   *
   * @param {GraphNode} v
   */
  visitDFS(v) {
    //basecase
    if (!v.isVisited()) {
      v.setVisited(true);
      console.log(
        `Node : ${v.getName()} is being visited [Adjacent graph model]`
      );
      v.getNeighbors().forEach((nv) => {
        if (!nv.isVisited()) {
          this.visitDFS(nv);
        }
      });
    } else {
      return;
    }
  }

  printGraphModel() {
    let consoleText = "";
    this.#vertices.forEach((v) => {
      consoleText += ` ${v.getIndex()} `;
      v.getNeighbors().forEach((nv) => {
        consoleText += ` ${nv.getIndex()} `;
      });
      console.log(consoleText);
      consoleText = "";
    });
  }

  setUndirectedEdge(i, j) {
    let first = this.#vertices[i];
    let second = this.#vertices[j];
    //connect the first with the second and connect the second with the first
    first.getNeighbors().push(second);
    second.getNeighbors().push(first);
  }
}

module.exports = { AdjacentListGraph };
