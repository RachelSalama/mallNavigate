const { findPath, printPath } = require("./pathFunction");



const matrix = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ];
  
  const startPosition = [0, 0];
  const destinations = [
    [3,4], [2,2], 
    
  ];
  
  const shortestPath = findPath(matrix, startPosition, destinations);
  
  console.log('Shortest Path to Closest Destination:', shortestPath);

  printPath(matrix, shortestPath)