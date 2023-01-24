let likeCount = 0;

function handleLikePost() {
  likeCount += 1;  // take likeCount and add 1 to it
}

handleLikePost();
console.log('like count:', likeCount); // functions can access variables outside of them

// global variables likeCount and handleLikePost are in the global scope