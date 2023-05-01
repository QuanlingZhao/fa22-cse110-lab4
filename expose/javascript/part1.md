1. The output for line 9 is 20. Since add is true it is calculating 10+10=20 which is stored in var result.
2. The output for line 13 is 20. Since result variable is declear via ver, it has function scope so it can be accessed even outside if block.
3. The output for line 9 is 20 for the same reason as question 1.
4. Line 13 cause an error as variable decleared using let is only visiable in the smae block, so when line 13 attempt to access this variable an error is threw.
5. Line 9 casue an erroe as it is attempting to rewrite an const variable which is not allowed.
6. Line 9 casue an erroe as const variable is also block scoped so can be be accessed outside if block.
