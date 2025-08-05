import { PageMeta } from "@lib/types"

const myImage = "/images/davee.jpg"
const blogImage = "https://i.postimg.cc/dVQkjgxp/blog.png"


const pageMeta: PageMeta = {
  home: {
    title: "Daichi Saito",
    description: "Hey, I am Daichi Saito. I'm a Full Stack & Blockchain Developer who enjoys developing innovative software solutions that are tailored to customer desirability and usability.",
    image: myImage,
    keywords: "Daichi Saito's Portfolio, daichi's blog, top blog sites, top 10 blog sites, best blog sites, best portfolio template, best programming blogs",
  },


  blogs: {
    title: "Blogs",
    description: "Here, you will find a collection of insightful and informative articles that I have written on various topics. As a passionate writer and avid learner, I believe in the power of sharing knowledge and experiences through the written word.",
    image: blogImage,
    keywords: "daichi saito blog, daichi blog, blog, webdev, react, react blog application, django blog applicaiton, programming blogs, top 10 programming blogs, top programming blogs",
  },

  projects: {
    title: "Projects",
    description: "I've been making various types of projects some of them were basics and some of them were complicated.",
    image: myImage,
    keywords: "projects, work, side project, numan projects, mazid projects, portfolio projects, blog projects, projects page template",
  },
  about: {
    title: "About",
    description: "Hey, I am Daichi Saito. Experienced professional Full Stack & Blockchain Developer who enjoys developing innovative software solutions that are tailored to customer desirability and usability.",
    image: myImage,
    keywords: "about, about me, about daichi, who is daichi, saito, about saito, portfolio about page",
  },

  contact: {
    title: "Contact",
    description: "Do you have something on your mind that you'd like to discuss? Whether it's work-related or simply a casual conversation, I'm here and eager to lend an ear. Please don't hesitate to get in touch with me at any time.",
    image: myImage,
    keywords: "contact, contact page, daichi saito contact, contact daichi",
  },
  snippets: {
    title: "Snippets",
    description: "These are a collection of snippets I've used in the past and saved. These could be useful to you as well.",
    image: myImage,
    keywords: "Code, Code Snippets, Snippets, daichi saito code snippets, daichi code snippets, snippets code, daichi snippets, daichi saito snippets",
  },
}

export default pageMeta
