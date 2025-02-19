// posts.js

const posts = [
  // post on deepseek
  {
    title: "Preserving Family Memories in the Digital Age with LLM",
    url: "posts/preserving-family-memories-in-the-digital-age-with-llm.html",
    snippet: "Discover how to use LLM to preserve family memories, transforming audio, text, and visuals into legacy.",
    date: "December 20, 2024",
    tags: ["LLM", "ML", "Fun"]
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
  // post on fraud and stuff
  {
    title: "Predicting Disease Risk with Machine Learning and 23andMe Data",
    url: "posts/predicting-disease-risk-with-machine-learning-and-23andme-data.html",
    snippet: "Leveraging 23andMe genetic data and machine learning to predict individual disease risks.",
    date: "December 28, 2020",
    tags: ["ML", "Fun"]
  }, 
  {
    title: "Paper Reading: Deep Learning Recommendation Model for Personalization and Recommendation Systems",
    url: "posts/deep-learning-recommendation-model-for-personalization-and-recommendation-systems.html",
    snippet: "Learnings from <em>Deep Learning Recommendation Model for Personalization and Recommendation Systems</em> paper from Facebook.",
    date: "January 03, 2020",
    tags: ["RecSys", "ML"]
  }, 
  {
    title: "StackOverflow Tag Generation Using Asymmetric Seq2Seq with Attention and Copy Mechanisms",
    url: "posts/stackoverflow-tag-generation-using-asymmetric-seq2seq-with-attention-and-copy-mechanisms.html",
    snippet: "Asymmetric Seq2Seq with attention, copy mechanisms, and depthwise pooling for better StackOverflow tag generation",
    date: "June 11, 2019",
    tags: ["NLP", "ML"]
  }, 
  {
    title: "Paper Reading: Deep Interest Network for Click-Through Rate Prediction",
    url: "posts/deep-interest-network-for-click-through-rate-prediction.html",
    snippet: "Learnings from <em>Deep Interest Network for Click-Through Rate Prediction</em> paper for Alibaba.",
    date: "October 02, 2018",
    tags: ["RecSys", "ML"]
  }, 
  {
    title: "Paper Reading: Deep Neural Networks for YouTube Recommendations",
    url: "posts/deep-neural-networks-for-youtube-recommendations.html",
    snippet: "Learnings from <em>Deep Neural Networks for YouTube Recommendations</em> paper from Google.",
    date: "November 07, 2017",
    tags: ["RecSys", "ML"]
  }, 
  {
    title: "Paper Reading: Wide &amp; Deep Learning for Recommender Systems",
    url: "posts/bridging-memorization-and-generalization-with-wide-&-deep-learning.html",
    snippet: "Learnings from <em>Wide &amp; Deep Learning for Recommender Systems</em> paper from Google.",
    date: "June 19, 2017",
    tags: ["RecSys", "ML"]
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
