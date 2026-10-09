import { socialLinks } from "./links";

export interface LeetCodeTopic {
  name: string;
  focus: string;
  description: string;
  keyConcepts: string[];
}

export const leetCodeData = {
  totalSolved: "200+",
  primaryLanguage: "Java",
  methodology: "Data Structures & Algorithmic Problem Solving",
  profileUrl: socialLinks.leetcode,
  summary:
    "Consistent focus on algorithm efficiency, memory allocation, and Java Collections framework. Practicing core computer science paradigms to build high-performance backend systems.",
  topics: [
    {
      name: "Arrays & Strings",
      focus: "Two Pointers, Sliding Window, Prefix Sum",
      description: "Optimizing in-place mutations, sliding window algorithms, and constant space techniques.",
      keyConcepts: ["Two-pointer traversal", "Sliding window bounds", "Frequency mapping"],
    },
    {
      name: "Trees & Binary Search Trees",
      focus: "DFS, BFS, Tree Traversal, Inversion",
      description: "Recursive and iterative traversals, binary search tree validation, and lowest common ancestor.",
      keyConcepts: ["In-order/Pre-order traversal", "Level-order BFS", "Subtree validation"],
    },
    {
      name: "Recursion & Backtracking",
      focus: "State Trees, Permutations, Subsets",
      description: "Formulating subproblems, recursive base cases, and state-space pruning.",
      keyConcepts: ["Base case formulation", "Call stack management", "Combinatorial exploration"],
    },
    {
      name: "Dynamic Programming",
      focus: "Memoization, Tabulation, Optimal Substructure",
      description: "Breaking complex overlapping subproblems into optimal substructures with cached states.",
      keyConcepts: ["Overlapping subproblems", "Top-down memoization", "Bottom-up state tables"],
    },
  ] as LeetCodeTopic[],
};

