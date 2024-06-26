/* 
You are given a binary tree. Implement the method findMax which returns the maximal node value in the tree.

For example, maximum in the following Tree is 11.

              7
            /   \ 
           /     \
          5       2
           \       \
           6        11          
           /\      /
          1  9   4
Note:

Tree node values any integer value.
Tree can unbalanced and unsorted.
The root argument is never an empty tree.
You are given a tree node class as follows:

class TreeNode:
    def __init__(self, value, left = None, right = None):
        self.left = left
        self.right = right
        self.value = value
*/

const findMax = root => {
  if (root == null) return Number.MIN_VALUE;

  let res = root.value;
  const lres = findMax(root.left);
  const rres = findMax(root.right);

  if (lres > res) res = lres;
  if (rres > res) res = rres;
  return res;
};
