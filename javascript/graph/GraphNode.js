/**
 * @description graph model that we will use in the AdjacentMatrixGraph
 */

class GraphNode {
  /**
   * @type {boolean}
   */
  #visited;
  /**
   * @type {string}
   */
  #name;
  /**
   * @type {number}
   */
  #index;
  /**
   * @type {[GraphNode]}
   */
  #neighbors;

  /**
   *
   * @param {string} name
   * @param {number} index
   */
  constructor(name, index) {
    this.#name = name;
    this.#index = index;
    this.#visited = false;
    this.#neighbors = [];
  }

  getName() {
    return this.#name;
  }

  getIndex() {
    return this.#index;
  }

  /**
   *
   * @returns {[GraphNode]}
   */
  getNeighbors() {
    return this.#neighbors;
  }

  /**
   *
   * @param {[GraphNode]} neighbors
   */
  setNeighbors(neighbors) {
    this.#neighbors = neighbors;
  }

  /**
   *
   * @returns {boolean}
   */
  isVisited() {
    return this.#visited === true;
  }

  /**
   *
   * @param {boolean} visited
   */
  setVisited(visited) {
    this.#visited = visited;
  }
}

module.exports = { GraphNode };
