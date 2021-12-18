import posts from './posts.js';


let template = ''

const blogPosts = (posts) => {
  
   posts.forEach(post => {
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
       `

     
   })


   document.body.innerHTML += template;


}




blogPosts(posts);




// for (link of links) {
//     link.addEventListener('click', smoothScroll);
//   }
  
//   const smoothScroll = (e) => {
   
//        e.preventDefault();
//        const anchor = this.getAttribute("href")
//        document.querySelector(anchor).scrollIntoView({
//            behavior:"smooth",
//        });
  
  
//   };