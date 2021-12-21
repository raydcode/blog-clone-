import posts from './posts.js';

let template = '';

const blogPosts = (posts) => {
  posts.forEach((post) => {
    template += `
       <section id=${post.id}>
 
       <div class="container box">
    
         <h2>${post.title}</h2>
         
         <div class="post">
           <img src=${post.imgUrl} />
           <p>
           ${post.content}
           </p>
         </div>
        
       
       </div>
   
      </section>
       `;
  });

  document.body.innerHTML += template;
};

blogPosts(posts);

window.addEventListener('scroll', () => {
  const header = document.querySelector('.navbar');
  header.classList.toggle('sticky', window.scrollY > 0);
});

const navList = document.querySelector('.nav-list');

navList.addEventListener('click', (e) => {
  const navLink = e.target.parentElement;
  if (navLink.classList.contains('link')) {
    navList.querySelector('.active').classList.remove('active');
    navLink.classList.add('active');
  }
});

const backToTop = document.querySelector('.top');

const rootElement = document.documentElement;

document.addEventListener('scroll', showBacktoTop);

function showBacktoTop() {
  const scrollHeight = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollHeight > 0.2) {
    backToTop.classList.add('show-btn');
  } else {
    backToTop.classList.remove('show-btn');
  }
}

const scrollTop = () => {
  rootElement.scrollTo({
    top: 0,
  });
};

backToTop.addEventListener('click', scrollTop);

const scrollProgress = () => {
  const currentState = document.body.scrollTop || rootElement.scrollTop;

  const pageHeight = rootElement.scrollHeight - rootElement.clientHeight;

  const scrollPercentage = (currentState / pageHeight) * 100;

  const progressBar = document.querySelector('.progress');

  progressBar.style.visibility = 'visible';
  progressBar.style.width = `${scrollPercentage}%`;
};

window.onscroll = () => scrollProgress();
