/**
 * Simulates a blog post with author information.
 */
const blogPost = {
  title: 'Understanding JavaScript Scopes',
  author: 'Alice',
  getAuthor: () => {
    return this.author; 
  },
  getTitle: function() {
    return this.title; 
  }
};

// Display the author of the blog post
console.log('Author: ', blogPost.getAuthor()); 
console.log('Title: ', blogPost.getTitle()); 
