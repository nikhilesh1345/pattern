//  no of component
//  count=0
//  node 1 2 3 4  5 6 7 8 9 0 //// diagrams //// count:3
connectedComponentsCout({
    0:[8,1,5],
    1:[0],
    5:[0,8],
    8:[0,5],
    2:[3,4],
    3:[2,4],
    4:[3,2]
}) // -> 2
const connectedComponentsCount=(graph)=>{
    const visited = new Set();
    let count=0;
    for(let node in graph){
        if(explore(graph,node,visited)===true){
            count+=1;
        }
    }
    return count;
}
const explore =(graph,current,visited)=>{
    if(visited.has(String(current))) return false;
    visited.add(String(current));
    for(let neighbor of graph[current]){
        explore(graph,neighbor,visited);
    }
    return true;
}