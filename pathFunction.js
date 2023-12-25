// const PF = require('pathfinding');

// // Create a 2D grid with obstacles (0 = walkable, 1 = obstacle)
// const grid = new PF.Grid([
//     [0, 1, 1, 1, 0],
//     [0, 1, 0, 1, 0],
//     [0, 0, 0, 0, 0],
//     [0, 1, 0, 1, 0],
//     [0, 1, 1, 1, 0],
// ]);

// const findPath = (grid, start, end) => {

//     // Create a pathfinder with the A* algorithm
//     const finder = new PF.AStarFinder();

//     // Find a path from (0, 0) to (4, 0)
//     const path1 = finder.findPath(start, end, grid);

//     // Print the path
//     console.log('Path:', path1);
//     console.log('Path:', path1.length);

//     // If you want to visualize the path, you can use a custom visualization
//     const pathGrid = grid.clone(); // Make a copy to not modify the original grid

//     // Mark the path for visualization
//     for (const [x, y] of path1) {
//         pathGrid.setWalkableAt(x, y, 'P');
//     }

//     const pathGridString = pathGrid.nodes.map(row =>
//         row.map(cell => (cell.walkable === 'P' ? 'P' : cell.walkable ? '.' : 'X')).join(' ')
//     ).join('\n');

//     console.log('Path Visualization:\n', pathGridString);
// }

const PF = require('pathfinding');

function findPath(matrix, startPosition, destinations) {
    const grid = new PF.Grid(matrix);
  const finder = new PF.AStarFinder();

  let shortestPath = null;
  let shortestDistance = Infinity;

  // Iterate through destinations
  for (const destination of destinations) {
    // Find the path from the current position to the destination
    const path = finder.findPath(startPosition[0], startPosition[1], destination[0], destination[1], grid.clone());

    console.log('Length of path:', path.length);

    // Check if a valid path is found
    if (path.length > 0 && path.length < shortestDistance) {
      // Update the shortest path if the current path is shorter
      shortestDistance = path.length;
      shortestPath = path;
    }
  }

  return shortestPath;
}
  

function printPath(matrix, path) {
    const grid = new PF.Grid(matrix);
   // If you want to visualize the path, you can use a custom visualization
    const pathGrid = grid.clone(); // Make a copy to not modify the original grid

    // Mark the path for visualization
    for (const [x, y] of path) {
        pathGrid.setWalkableAt(y, x, 'P');
    }

    const pathGridString = pathGrid.nodes.map(row =>
        row.map(cell => (cell.walkable === 'P' ? 'P' : cell.walkable ? '.' : 'X')).join(' ')
    ).join('\n');

    console.log('Path Visualization:\n', pathGridString);

}


module.exports = { findPath, printPath };