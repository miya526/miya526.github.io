---
layout: post
title: "My 2 Cents on Preparing for LeetCode-Style Coding Interviews"
categories: tech
---
## Introduction
During a recent lunchtime conversation with my colleagues, the topic of coding interviews came up. We discussed the questions we typically ask and how we assess candidates. This piqued my interest in contemplating how to prepare effectively for coding interviews. In this post, I will share insights on how to excel in coding interviews, drawing from my experiences as both an interviewer and a candidate.

## Preparing for Coding Interviews
The ultimate goal of interview preparation is to reach a point where you can confidently tackle any algorithms and data structures questions that may come your way. To achieve this, we must determine the most effective path. I recommend thinking of yourself as a [wide and deep model](https://arxiv.org/abs/1606.07792). In other words, you should not only memorize various algorithms and data structures but also generalize your knowledge to tackle unfamiliar problems. Let's break down my recommendations into three key points.

### 1. Make a Plan, Stay Motivated, and Have Fun
Preparing for coding interviews can be an enjoyable experience if you maintain a positive mindset. Consider the preparation process as a journey. You are like a craftsman with a toolbox filled with different algorithms and data structures. Initially, your toolbox may seem empty, and you might not know how to use the tools effectively. However, with each new challenge you encounter, you learn and improve. Remember, no one is born with the ability to implement union-find with rank and path compression in less than 5 minutes. Preparation is a personal journey, so cultivate a healthy growth mindset and leave your ego behind.

Creating a simple plan tailored to your needs is essential. Decide when you want to begin your interviewing journey and structure your plan accordingly. For example, you might set a goal to focus on core graph problems for this week. The plan can be based on the next section. 

### 2. Do the Right Questions in the Right Way
While the internet offers an abundance of coding questions, you likely have limited time and mental bandwidth. To optimize your preparation, focus on selecting the right questions and solving them effectively. Instead of attempting to tackle every available question, prioritize the following categories:

**Core Problems:** These are like building blocks for your coding foundation. They exemplify various algorithms and data structures. While you may not encounter these exact problems in interviews due to their popularity, mastering them equips you with essential tools. I recommend exploring resources like [Neetcode 150](https://neetcode.io/roadmap) for a comprehensive list of core problems. Aim to know these questions so well that you can recognize and implement them swiftly, with occasional revisits to the challenging ones.

**Random Problems:** Think of these as your improvisational exercises. These are problems you haven't encountered before, but you can likely solve them using your existing knowledge. The real challenge lies in figuring out how to apply your knowledge effectively. By doing these problems, you are challenging yourself to generalize your approaches instead to only memorize the solutions from the core problems. I recommend participating in the weekly Leetcode contest or just find random questions you haven't find before. Majority of your time should be spent on core problems and relevant problems, the next type. 

**Relevant Problems:** Research problems that companies you are interviewing with have asked in the past. Think of this step as fine-tuning your knowledge. Different companies have distinct preferences in question types and approaches, so it's beneficial to familiarize yourself with their tendencies.

To approach questions effectively, consider these tips:
- Resist the urge to immediately seek answers. Embrace the discomfort of not knowing; it enhances your learning. If you find yourself stuck on a problem for about 30 minutes, consider looking at the solution. Remember, growth often stems from struggles.
- Regardless of whether you can solve the question, always explore/look at different solutions. Think critically about their advantages and disadvantages in terms of time and space complexity, as well as scalability. Determine when to use one approach over another. Each approach is a valuable tool in your toolkit, and you can test them out by solving similar problems. This helps you generalize. 
- When approaching a problem, analyze it thoroughly. Try to distill it down to a problem you've encountered before. Examine different approaches, and if the solution isn't immediately clear, manually run through an example and ask yourself this: 'how would a human solve this problem?'
- Create a system to document the problems you've tackled. After each problem, add it to your system and jot down some notes. You can find a simple example in the appendix. 

### 3. Be Mentally Ready
At the end of the day, we are not machines; we are humans with feelings and emotions that can affect our performance. It's perfectly normal to experience performance anxiety, whether in coding interviews or other aspects of life. The key is acknowledging these emotions and proactively working on managing them. One effective approach is to gain more coding interview experience. Practice with companies that you may care less about, or do mock interviews with your friends.

## After the Preparation
Upon completing your intensive preparation, take pride in your hard work and newfound confidence in tackling algorithms and data structures questions during interviews. If you stumble in an interview, simply say, "Wow, that was a tough one!" Learn from the experience and move forward with more skills and knowledge. Remember, growth is a continuous journey.

## During the Interview
When I interview candidates, I evaluate them based on four dimensions: problem solving, communication, coding, and testing. Here are some strategies to help you shine during your coding interviews:

**1. Stay Calm and Positive**: Interviews can be nerve-wracking, but remember, coding anxiety won't help. Take a deep breath, have a sip of imaginary tea, and remind yourself that you've got this! Maintain a good attitude throughout the interview. You can't control the interviewer's character, but you can control your own. Be nice.

**2. Communicate Clearly:** Effective communication is key. Before you start writing code, discuss your thought process with the interviewer. Explain your approach, ask clarifying questions if necessary, and outline your plan. This not only demonstrates your problem-solving skills but also helps you receive valuable feedback.  There is a human interviewer on the other side for a reason. 

**3. Break Down the Problem:** Divide complex problems into smaller, manageable parts. Solve these smaller subproblems one at a time and gradually build up to the complete solution. This approach makes the problem-solving process less overwhelming. Look at the problem from the lens of different approaches, evaluate the approaches, and select one to code while communicating with the interviewer.

**4. Don't Write Shitty Code:** Simple. Just follow the right coding practice (naming conventions, concise comments, code reusability, etc). 

**5. Test Your Code:** After (or during) writing your code, proactively test it thoroughly with sample inputs. Debug any errors you encounter. Consider edge cases and additional assumptions on the inputs with your interviewer. A good coder is committed to produce correct and reliable code.

**6. Review and Optimize:** Spend time to review your code further and discuss potential places to optimize.

**7. Other stuff:** Keep track of time. If you are stuck, ask your interviewer questions. Ask 'how's your day' at the beginning. Be interested in what the interview does for work. 


## Appendix

### Array & Hashing (6 problems)

| Problem | Difficulty | Notes
| ------ | ------ | ------ | 
| [Group Anagrams](https://leetcode.com/problems/group-anagrams/) | Medium | dictionary with tuple of letter counter as key
| [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) | Medium | bucket sort, max heap, quick select
| [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) | Medium | keep prefix/suffix sum in single pass
| [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/) | Medium | set to store if element is seen i in row, column, or box
| [	Encode and Decode Strings](https://leetcode.com/problems/encode-and-decode-strings/) | Medium | encode by adding len(str)/
| [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) | Medium | use set and check for consecutive whenever reaching start of a sequence

### Two Pointers (4 problems)

| Problem | Difficulty | Notes
| ------ | ------ | ------ | 
| [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) | Medium | basic two pointers
| [3Sum](https://leetcode.com/problems/3sum/) | Medium | sort to pick a num and then two pointers, skip duplicates
| [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) | Medium | two pointers and shift the shorter side
| [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) | Hard | two pointers and keeping max height for left and right sides and shift the shorter side

### Stack (6 problems)

| Problem | Difficulty | Notes
| ------ | ------ | ------ | 
| [Min Stack](https://leetcode.com/problems/min-stack/) | Medium | deque with element and current min
| [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/) | Medium | use stack for numbers and pop numbers when operator is reached
| [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) | Medium | keep track of number of open and close brackets left, recursion or stack
| [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) | Medium | monotonic (decreasing) stack to store index and temperature, when higher temperature is reached, start popping
| [Car Fleet](https://leetcode.com/problems/car-fleet/) | Medium | sort by position, find fleet by time needed 
| [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) | Hard | monotonic (increasing) stack to store index and height, when height decrease, start popping and get area (left side is index on the top of stack)

### Binary Search (6 problems)

| Problem | Difficulty | Notes
| ------ | ------ | ------ | 
| [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) | Medium | simple binary search on whole matrix where index of mid is(mid//n, mid%n)
| [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) | Medium | bisect left on bananas per hour eating speed k, calculate hours needed for each k
| [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) | Medium | binary search comparing mid to right (start right = n-1)
| [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | Medium | binary search and check if either left half or right half is sorted and if target is in left half or right half 
| [Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/) | Medium | bisect right, get timestamp idx - 1 from bisect right if idx != 0 
| [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) | Hard | binary search with the smalleer of the two arrays, get max left 1, max left 2, min right 1, and min right 2. If odd the median is in the left side. Get mid2 based on mid1.

### Sliding Window (5 problems)

| Problem | Difficulty | Notes
| ------ | ------ | ------ | 
| [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Medium | sliding window keep track of character frequency and move left whenever right character is seen before
| [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) | Medium | sliding window to check if window need k+ replacement, if so move left. Note to store max_count and it does not need to be reduced when left moves, global max count is suffice by logic
| [Permutation in String](https://leetcode.com/problems/permutation-in-string/) | Medium | sliding window keep track of frequency and if all s1 characters are covered and move left whenever current window cannot be a permutation
| [Minimum Insertions to Balance a Parentheses String](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/description/) | Medium | sliding window but keep track of when it ")" or "))", add number of inserations along the way
| [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) | Hard | sliding window keep track of frequency and if all characters are covered move left until not covered. Note frequency can dip under 0 for t
| [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/) | Hard | iterate and keep monotonic decreasing deque, popleft if no longer in the window
| [Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/description/) | Hard | sliding window left to right and then right to left keeping track of open and close brackets, or stack of indices, starting with -1 and whenever empty pad with cur index


### Trees (9 problems)

| Problem | Difficulty | Notes
| ------ | ------ | ------ | 
| [Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) | Medium | simple tree traversal to decide left or right subtree
| [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) | Medium | deque for nodes in each level and traverse
| [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/) | Medium | deque for nodes in each level and append last in deque to ans
| [Count Good Nodes in Binary Tree](https://leetcode.com/problems/count-good-nodes-in-binary-tree/) | Medium | deque for nodes and max in path and add one if node is good
| [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) | Medium | deque for nodes and lower and upper bound 
| [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) | Medium | inorder traversal and count until kth node, keep appending to stack left side until reaching child, then go to right side and proceed
| [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) | Medium | dictionary for val to index for inorder, popleft from preorder and use pivot to split left and right, for iterative, iterate through preorder and attach node based on inorder index
| [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) | Hard | get left max, right max, left path, right path and calculate max path, be careful of edge cases like negative vs 0, for iterative, do postorder, and watch out last_visited != node.right
| [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) | Hard | level order list turn to string split by , where None is just '', use deque for both, keep i for deserialize to know the index for left and right child

### Tries (3 problems)

| Problem | Difficulty | Notes
| ------ | ------ | ------ | 
| [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/) | Medium | basic trie implementatino, TrieNode with children dictionary and is_word boolean
| [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/) | Medium | basic trie implementation, but search takes care of '.' case by trying out all, use helper function, like dfs
| [Word Search II](https://leetcode.com/problems/word-search-ii/) | Hard | build trie and when dfs to search for word, dfs pass index, node, and word list, modify board, pop char from word list

### Heap/Priority Queue (5 problems)

| Problem | Difficulty | Notes
| ------ | ------ | ------ | 
| [K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) | Medium | minheap, maxheap, or quickselect
| [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) | Medium | minheap with k, quickselect
| [Task Scheduler](https://leetcode.com/problems/task-scheduler/) | Medium | closed form equation and for loop of n while going through heap, use pending to store resting task
| [Design Twitter](https://leetcode.com/problems/design-twitter/) | Medium | dictionary of sets for following and dictionary of deque for posts (with timestamp), use heap for geting news feed, can also just have list of posts (with userid), and get latest posts user follows
| [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) | Hard | keep left max heap and right min heap and pass numbers around

### Intervals (5 problems)

| Problem | Difficulty | Notes
| ------ | ------ | ------ | 
| [Insert Interval](https://leetcode.com/problems/insert-interval/) | Medium | Keep track of when interval should combine with new interval
| [Merge Intervals](https://leetcode.com/problems/merge-intervals/) | Medium | same as above
| [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/) | Medium | sort and keep track of prev end
| [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/) | Medium | sort start and end and if no end for start, plus 1 meeting room
| [Minimum Interval to Include Each Query](https://leetcode.com/problems/minimum-interval-to-include-each-query/) | Hard | sort intervals and queries, add intervals where s is less than query to heap, and order based on size, pop heap until there are no e less than q, choose the next item in heap


### Backtracking (9 problems)

| Problem | Difficulty | Notes
| ------ | ------ | ------ | 
| [Subsets](https://leetcode.com/problems/subsets/) | Medium | add new number to every subset so far
| [Combination Sum](https://leetcode.com/problems/combination-sum/) | Medium | coin change dp or backtrack
| [Permutations](https://leetcode.com/problems/permutations/) | Medium | backtrack with visited list to determine if element is visited already to prevent list slicing
| [Subsets II](https://leetcode.com/problems/subsets-ii/) | Medium | sort and if num is the same as previous, just add num to the subset that added previous
| [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/) | Medium | knapsack with set+tuple or backtrack
| [Word Search](https://leetcode.com/problems/word-search/) | Medium | dfs and modify board to keep track of visited 
| [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/) | Medium | backtrack or dp 
| [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) | Medium | keep mapping from digit to character and then traverse and append
| [N-Queens](https://leetcode.com/problems/n-queens/) | Hard | keep a visited set containing verticel and slope info while iterating to check if queen can be put


### Graphs (13 problems)

| Problem | Difficulty | Notes
| ------ | ------ | ------ | 
| [Number of Islands](https://leetcode.com/problems/number-of-islands/) | Medium | classic dfs and union find with rank and compression
| [Clone Graph](https://leetcode.com/problems/clone-graph/) | Medium | queue with newly created node with dictionary to store new node
| [Max Area of Island](https://leetcode.com/problems/max-area-of-island/) | Medium | classic dfs and union find with rank and compression (need to set rank to 1 for union find)
| [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/) | Medium | classic dfs from all edges and separate visited for different ocean 
| [Surrounded Regions](https://leetcode.com/problems/surrounded-regions/) | Medium | dfs from the edges to determine the non surrounded regions
| [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) | Medium | bfs and change grid
| [Walls and Gates](https://leetcode.com/problems/walls-and-gates/) | Medium | bfs and change grid
| [Course Schedule](https://leetcode.com/problems/course-schedule/) | Medium | dag bfs with set
| [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) | Medium | dag bfs with set
| [Redundant Connection](https://leetcode.com/problems/redundant-connection/) | Medium | union find with rank and path compression
| [Number of Connected Components in an Undirected Graph](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/) | Medium | union find with rank and path compression
| [Graph Valid Tree](https://leetcode.com/problems/graph-valid-tree/) | Medium | bfs, dfs, union find all work
| [Word Ladder](https://leetcode.com/problems/word-ladder/) | Hard | bfs with deque and iterate through word length and replacement to find next potential states

### Advanced Graphs (6 problems)

| Problem | Difficulty | Notes
| ------ | ------ | ------ | 
| [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/) | Medium | minimal spanning tree, use kruskal or prim (heap)
| [Network Delay Time](https://leetcode.com/problems/network-delay-time/) | Medium | dijkstra's algorithm with heap
| [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) | Medium | dijkstra's algorithm with heap and check k 
| [Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/) | Hard | euler path with dfs/stack. Write whenever node has no outgoing edge
| [Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/) | Hard | dijkstra's algorithm and keep track of max water depth so far
| [Alien Dictionary](https://leetcode.com/problems/alien-dictionary/) | Hard | like course schedule, first build indegree and edge ds and then do topological sort

### 1-D Dynamic Programming (10 problems)

| Problem | Difficulty | Notes
| ------ | ------ | ------ | 
| [House Robber](https://leetcode.com/problems/house-robber/) | Medium | greedy algorithm by keeping track of max for choosing current element and max for not choosing current element. 
| [House Robber II](https://leetcode.com/problems/house-robber-ii/) | Medium | same algorithm as house robber twice, each time excluding either first or last element
| [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) | Medium | 2d dp or expand from center, not even going to try manacher's
| [Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/) | Medium | same as above
| [Decode Ways](https://leetcode.com/problems/decode-ways/) | Medium | 1d dp
| [Coin Change](https://leetcode.com/problems/coin-change/) | Medium | simple 1d dp
| [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) | Medium | store current max and min, and when negative num is encountered, flip
| [Word Break](https://leetcode.com/problems/word-break/) | Medium | 1d dp or 1d dp with trie for efficient word search
| [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) | Medium | keep a list of strictly increasing subsequence, append when num is larger than [-1], otherwise binary search to add the num
| [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) | Medium | basically coin change, target is total // 2


### 2-D Dynamic Programming (11 problems)

| Problem | Difficulty | Notes
| ------ | ------ | ------ | 
| [Unique Paths](https://leetcode.com/problems/unique-paths/) | Medium | permutation calculation
| [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) | Medium | 2d dp and check whether left, top, diag has the max subsequence if text1 and text2 are not equal
| [Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/) | Medium | finite state with sell, buy, cooldown
| [Coin Change II](https://leetcode.com/problems/coin-change-ii/) | Medium | simple coin change
| [Target Sum](https://leetcode.com/problems/target-sum/) | Medium | dictionary storing frequency for all possible results
| [Interleaving String](https://leetcode.com/problems/interleaving-string/) | Medium | 2d dp (can simplify to 1d), first load how much of prefix of s1 or s2 are equal to s3, and then do normal nested for loop
| [Edit Distance](https://leetcode.com/problems/edit-distance/) | Medium | 2d array (can be simplified) and check whether insert, delete, replace is the cheaper option at each position if word1 and word2 not equal
| [Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) | Hard | dfs with memory that saves path length
| [Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/) | Hard | 2d dp add dp[i-1][j-1] to dp[i][j] if s[i-1] t[j-1] are equal, trace example
| [Burst Balloons](https://leetcode.com/problems/burst-balloons/) | Hard | 2d dp, for each left and right, try different balloons to burst in range, but burst it last, dp[i][j] = max(dp[i][j], dp[i][k] + dp[k][j] + nums[i] * nums[j] * nums[k]) for k between i and j 
| [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/) | Hard | 2d dp with, load dp[0][j] based on pattern match with empty string (#*#*#*#* would match), if s[i] and p[j] are equal or p[j] is ., then simple, if p[j] is *, then check if s[i] equal to p[j-1], if so can either include * or ignore (dp[i-1][j] or dp[i][j-2]), if not equl, can only ignore (dp[i][j-2])
