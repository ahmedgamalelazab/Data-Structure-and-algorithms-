/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  //model the problem

  let preqMap = {};

  for (let i = 0; i < prerequisites.length; i++) {
    if (preqMap[prerequisites[i][0]]) {
      preqMap[prerequisites[i][0]].push(prerequisites[i][1]);
    } else {
      preqMap[prerequisites[i][0]] = [prerequisites[i][1]];
    }
  }

  let visitSet = new Set();

  for (let i = 0; i < numCourses; i++) {
    if (DFS(i, preqMap, visitSet) === false) return false;
  }

  return true;
};

/**
 *@param {number} vertice
 *@param {Set} visitSet
 */
function DFS(vertice, preqMap, visitSet) {
  if (visitSet.has(vertice)) {
    return false;
  }

  if (!preqMap[vertice]) {
    preqMap[vertice] = [];
  }

  if (preqMap[vertice].length === 0) {
    return true;
  }

  visitSet.add(vertice);

  for (let val of preqMap[vertice]) {
    if (DFS(Number.parseInt(val), preqMap, visitSet) === false) return false;
  }

  preqMap[vertice] = [];
  visitSet.delete(vertice);

  return true;
}

module.exports = { canFinish };
