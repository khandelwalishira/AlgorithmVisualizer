
import primes from "./images/primes.jpg";
import queen from "./images/queen.PNG";
import binSearch from "./images/binaryTree.png";
import sortnew from "./images/sorting.png";
import sort from "./images/sorting2.png";
// import Recursion from './images/Recursion.jpg';
export function getDetails(){
   return [
       {
           id:1,
           title:"Sorting Algorithm",
           description:"Compare different sorting algorithms",
           route:"/sort",
           img:sort
       },
       {
           id:2,
           title:"Recursive Sorting",
           description:"Compare different recursive sorting algorithms",
           route:"/recursivesort",
           img:sortnew
       },
       {
           id:3,
           title:"N Queen",
           description:"The N queens puzzle is the problem of placing N chess queens on an N*N chessboard so that no two queens threaten each other",
           route:"/nqueen",
           img:queen
       },
      
       {
           id:4,
           title:"Prime Numbers",
           description:"Visualize how Sieve is better than brute force",
           route:"/prime",
           img:primes
       },
       
       {
           id:5,
           title:"Binary Search",
           description:"Binary search is an efficient algorithm for finding an item from a sorted list of item",
           route:"/binarysearch",
           img:binSearch
       }
       
   ]
}