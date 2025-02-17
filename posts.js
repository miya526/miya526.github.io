// posts.js

const posts = [
  // post on deepseek
  {
    title: "Preserving Family Memories in the Digital Age with LLM",
    url: "posts/preserving-family-memories-in-the-digital-age-with-llm.html",
    snippet: "Discover how to use LLM to preserve family memories, transforming audio, text, and visuals into legacy.",
    date: "December 20, 2024",
    tags: ["LLM", "Fun"]
  },
  {
    title: "My 2 Cents on Preparing for LeetCode-Style Coding Interviews",
    url: "posts/my-2-cents-on-preparing-for-leetcode-style-coding-interviews.html",
    snippet: "Personal insights and strategies for effectively preparing for LeetCode-style coding interviews.",
    date: "September 28, 2023",
    tags: ["Interview"]
  },
  // post on more tech in ads
  {
    title: "Inside the Ad Ecosystem: How Social Platforms Serve You the Perfect Ad",
    url: "posts/inside-the-ad-ecosystem-how-social-media-ads-find-engage-and-convert.html",
    snippet: "Explore how social media ads are planned, targeted, and served to engage and convert users.",
    date: "August 15, 2022",
    tags: ["Ads", "RecSys"]
  },
  // post on dna stuff
  // post on fraud and stuff
  // post on dl
  // post on colleague paper
  // post on DIN
  {
    title: "Paper Reading: Deep Neural Networks for YouTube Recommendations",
    url: "posts/deep-neural-networks-for-youtube-recommendations.html",
    snippet: "Learnings from <em>Deep Neural Networks for YouTube Recommendations</em> paper.",
    date: "November 07, 2017",
    tags: ["RecSys", "Paper"]
  }, 
  {
    title: "Paper Reading: Wide &amp; Deep Learning for Recommender Systems",
    url: "posts/bridging-memorization-and-generalization-with-wide-&-deep-learning.html",
    snippet: "Learnings from <em>Wide &amp; Deep Learning for Recommender Systems</em> paper.",
    date: "June 19, 2017",
    tags: ["RecSys", "Paper"]
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
