""" 
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
"""

from sys import maxsize

def find_max(root):
  if root is None:
    return -maxsize - 1
  
  res = root.value
  lres = find_max(root.left)
  rres = find_max(root.right)
  
  if lres > res:
      res = lres
  if rres > res:
      res = rres
  
  return res