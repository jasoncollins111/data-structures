var BinarySearchTree = function(value){

  var tree = Object.create(BinarySearchTree.prototype)

  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree
};

BinarySearchTree.prototype.insert = function(value){
  console.log(this)


}

BinarySearchTree.prototype.contains = function(){

}

BinarySearchTree.prototype.depthFirstLog = function(){

}
/*
 * Complexity: What is the time complexity of the above functions?
 */
