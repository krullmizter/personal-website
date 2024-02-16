let prevScroll = 0;

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScroll > prevScroll && (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10)) {
    document.getElementById("topBtn").style.visibility = "visible";
    document.getElementById("topBtn").style.opacity = "1";
  } else {
    document.getElementById("topBtn").style.visibility = "hidden";
    document.getElementById("topBtn").style.opacity = "0";
  }
  prevScroll = currentScroll <= 0 ? 0 : currentScroll;
}

function topTheTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.querySelectorAll('.tag').forEach(tagButton => {
  tagButton.addEventListener('click', function() {
    const tag = this.getAttribute('data-tag');
    document.querySelectorAll('.blog-posts-post').forEach(post => {
      if (post.getAttribute('data-tags').includes(tag)) {
        post.style.display = 'block';
      } else {
        post.style.display = 'none';
      }
    });
  });
});