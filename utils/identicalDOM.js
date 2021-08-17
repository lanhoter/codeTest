const findCorrespondingNode = (rootA, rootB, nodeA) => {
    // to get the path from rootA to nodeA
    const pathToNodeA = getPath(rootA, nodeA);

    // get to nodeB by iterating over pathToNodeA
    return getNodeFromPath(rootB, pathToNode);
}



const getPath = (root, node) => {
    const path = [];

    // going from bottom to top
    while (node !== root) {
        const parent = node.parentElement;
        const children = Array.from(parent.children);
        // finding the index of the current node wrt its parent
        const nodeIndex = children.indexOf(node);
        path.push(nodeIndex);
        node = parent;
    }

    return path;
}


const getNodeFromPath = (node, path) => {
    const pathToWalk = [...path];

    while (pathToWalk.length > 0) {
        // using pop, we made up for the reverse order of path
        node = node.children[pathToWalk.pop()];
    }

    return node;
}