// posts.js

const posts = [
  {
    title: "My 2 Cents on Preparing for LeetCode-Style Coding Interviews",
    url: "posts/my-2-cents-on-preparing-for-leetcode-style-coding-interviews.html",
    snippet: "Personal insights and strategies for effectively preparing for LeetCode-style coding interviews.",
    date: "February 20, 2023",
    tags: ["Interview", "Tech"]
  }
  // Add more posts here as needed
];

function renderPosts(containerId, filterTag = null) {
  const container = document.getElementById(containerId);
  let filteredPosts = posts;
  if (filterTag) {
    filteredPosts = posts.filter(post => post.tags.includes(filterTag));
  }
  
  let html = "";
  filteredPosts.forEach(post => {
    html += `
      <article class="post">
        <a href="${post.url}">
          <h3>${post.title}</h3>
          <p class="post-date">${post.date}</p>
          <p class="post-snippet">${post.snippet}</p>
        </a>
        <div class="tags">`;
    post.tags.forEach(tag => {
      html += `<a href="tag.html?tag=${tag}" class="tag">${tag}</a>`;
    });
    html += `</div>
      </article>`;
  });
  
  container.innerHTML = html;
}
