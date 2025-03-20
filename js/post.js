// 代码高亮
hljs.highlightAll();

// 图片预览
mediumZoom('img', {
  margin: 24,
  background: 'var(--bg)',
  scrollOffset: 40,
});

// 代码块复制功能
document.querySelectorAll('pre').forEach(block => {
  const button = document.createElement('button');
  button.className = 'copy-button';
  button.textContent = '复制';
  
  button.addEventListener('click', async () => {
    const code = block.querySelector('code');
    await navigator.clipboard.writeText(code.innerText);
    button.textContent = '已复制!';
    setTimeout(() => {
      button.textContent = '复制';
    }, 2000);
  });
  
  block.appendChild(button);
});

// 阅读进度
const readingProgress = document.querySelector('.reading-progress');
const content = document.querySelector('.post-content');

window.addEventListener('scroll', () => {
  const contentBox = content.getBoundingClientRect();
  const progress = Math.max(0, Math.min(1, 
    -contentBox.top / (contentBox.height - window.innerHeight)
  )) * 100;
  
  readingProgress.style.setProperty('--progress', `${progress}%`);
});

// 生成目录
const headings = document.querySelectorAll('.post-content h2, .post-content h3');
const tocContent = document.getElementById('toc-content');

headings.forEach((heading, index) => {
  const id = `heading-${index}`;
  heading.id = id;
  
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = `#${id}`;
  a.textContent = heading.textContent;
  
  if (heading.tagName === 'H3') {
    li.style.paddingLeft = '1rem';
  }
  
  li.appendChild(a);
  tocContent.appendChild(li);
});

// 目录高亮
const tocLinks = document.querySelectorAll('.toc a');

const highlightToc = () => {
  let currentSection = '';
  
  headings.forEach(heading => {
    const rect = heading.getBoundingClientRect();
    if (rect.top <= 100) {
      currentSection = `#${heading.id}`;
    }
  });
  
  tocLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === currentSection);
  });
};

window.addEventListener('scroll', highlightToc);

// 分享功能
function shareToTwitter() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(document.title);
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
}

function shareToFacebook() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

async function copyLink() {
  try {
    await navigator.clipboard.writeText(window.location.href);
    alert('链接已复制到剪贴板！');
  } catch (err) {
    alert('复制失败，请手动复制链接。');
  }
} 