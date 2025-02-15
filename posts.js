// posts.js

const posts = [
  {
    title: "Preserving Family Memories in the Digital Age with LLM",
    url: "posts/preserving-family-memories-in-the-digital-age-with-llm.html",
    snippet: "Discover how to use LLM to preserve family memories, transforming audio, text, and visuals into legacy.",
    date: "February 4, 2025",
    tags: ["LLM", "Tech"]
  },
  {
    title: "My 2 Cents on Preparing for LeetCode-Style Coding Interviews",
    url: "posts/my-2-cents-on-preparing-for-leetcode-style-coding-interviews.html",
    snippet: "Personal insights and strategies for effectively preparing for LeetCode-style coding interviews.",
    date: "February 20, 2023",
    tags: ["Interview", "Tech"]
  },
  {
    title: "Inside the Ad Ecosystem: How Social Media Ads Find, Engage, and Convert",
    url: "posts/inside-the-ad-ecosystem-how-social-media-ads-find-engage-and-convert.html",
    snippet: "Learn how social media ads are targeted, bid, optimized, and measured to convert audiences.",
    date: "August 15, 2022",
    tags: ["Ads", "Tech"]
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
        </a>
        <div class="tags">`;
    post.tags.forEach(tag => {
      html += `<a href="tag.html?tag=${tag}" class="tag">${tag}</a>`;
    });
    html += `</div>
        <p class="post-snippet">${post.snippet}</p>
      </article>`;
  });
  
  container.innerHTML = html;
}
