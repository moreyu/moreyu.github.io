function randomPost() {
  fetch('/js/data.json')
    .then(response => response.json())
    .then(data => {
      const posts = data.posts;
      const randomPost = posts[Math.floor(Math.random() * posts.length)];
      window.location.href = '/' + randomPost.path;
    });
} 