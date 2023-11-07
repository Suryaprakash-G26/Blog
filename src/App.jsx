import { Route,Routes } from 'react-router-dom';
import './App.css'

import Main from './pages/mainpage';
import CyberSecurity from './pages/cybersecurity';
import { useState } from 'react';
import Fullstack from './pages/fsd';
import DataScience from './pages/datascience';
import Career from './pages/career';

function App() {
  const data=[
    {
        Title:"What Is Hacking?",
        Description:"Hacking is the practice of gaining unauthorized access to computer systems or networks, typically for the purpose of discovering, exploiting, or manipulating vulnerabilities. It involves manipulating or bypassing security measures to access data, control systems, or disrupt digital operations. Hacking has evolved significantly over time. It initially emerged as a term related to clever and creative problem-solving. Early hackers were computer enthusiasts who explored and modified computer systems to better understand them. However, the term has since taken on a dual meaning, encompassing both ethical hackers who improve cybersecurity and malicious hackers who engage in criminal activities.",
        value:"Cybersecurity",
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp"
    },
    {
        Title:"Is coding required for cybersecurity?",
        Description:"So how crucial is coding for cybersecurity? Think about it this way. Just about all the tools you use in cyber security are written in code, and programming lets you write tools. So the important questions to answer first are: what are tools? and what’s the value in knowing how to build them? On a conceptual level, tools extend your ability to change the environment around you, whether in the physical or digital world. Combined with intent, they let you create action and change. So the more advanced your tools are the more leverage you have. And with this leverage, you can have a wider range of actions and change",
        value:"Cybersecurity",
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp"
    },
    {
        Title:"FullStack Development",
        Description:"Full stack development is and will be a promising and in-demand career in the upcoming years. According to Stack Overflow, there are more than 90,000 developers who responded to the tools being used, in a survey. You would be wondering how to get into this high-paying profession. Worry not, this blog will let you know about some of the best ways you can choose to get into full-stack development",
        value:"FSD",
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp"
    },
    {
        Title:"Top Skills To Become a Full-Stack Developer in 2023",
        Description:"Are you interested in becoming a great full-stack developer? If so, then you’re at the right place! In this comprehensive guide, we will explore the skills and knowledge required to excel in this multifaceted role.Everybody in the tech industry knows what full stack development is and how crucial of a skill it is to have, not to mention the attractive salary packages that await and what a great career path it is! Whether you’re a beginner or an experienced developer looking to upskill, this article will provide valuable insights to become a successful full-stack developer as we will be listing out and discussing all of the essential skills required for full-stack developers. ",
        value:"FSD",
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp"
    },
    {
        Title:"The Future & Scope of Full-Stack Developers in India",
        Description:"Have you ever wondered about the future of full stack developers in India? These talented tech wizards possess a unique skill set to handle both front-end and back-end development in web applications. They are like modern-day wizards of technology! As technology keeps advancing and businesses seek innovative solutions, full-stack developers are becoming more important than ever. They have a key role in shaping India’s digital landscape and creating exciting digital experiences for users. In this article, we’ll explore the opportunities and possibilities that await full-stack developers in India. So, let’s dive into the fascinating world of full stack development!",
        value:"FSD",
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp"
    },
    {
        Title:"DataScience",
        Description:"Today, we’re going to talk about something really cool: data science. It’s all about using data to make smart decisions and create amazing things. You know, like predicting what people want or finding new ways to help people. Now, if you want to become a data scientist, you might wonder where to start. It’s a big adventure, and we have a special secret weapon to help you on your journey: books. In this blog, we’ll recommend some great data science books that can help you get started on this exciting data science career path. Books explain everything in a way you can understand, and you can take your time reading them, make notes, and really learn the concepts.",
        value:"DataScience",
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp"
    },
    {
        Title:"Data Science Webinars and Workshops",
        Description:"In today’s world, it’s becoming increasingly important to be knowledgeable in the field of data science. With data being such an integral part of nearly every industry, staying up to date on the latest trends and techniques is crucial. So how can you keep your skills sharp and stay ahead of the curve?  One great way is by attending data science webinars and workshops. These interactive virtual events are designed to give you the knowledge and tools to tackle real-world data challenges. Whether you’re a professional or simply an enthusiast, attending these events can be invaluable in your quest to stay on top of the data science game.",
        value:"DataScience",
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/08/data-science-webinars-and-workshops-2048x1072.webp"
    },
    {
      Title:"Cybersecurity",
      Description:"Explore cybersecurity concepts and techniques. Learn to safeguard digital assets from online threats and attacks",
      value:"Cybersecurity",
      img:"data:image/jpeg;base64,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"
  },
    {
        Title:"Top 10 Data Science Tools in 2023",
        Description:"Data Science is an in-demand profession and will continue growing in the coming years. From this, you can assume its importance, and now if you want to get into data science, you must know about the tools, skills, and frameworks required. You must begin with the skills required and for that data science tools come to the top. In this blog, we’ll be talking about the top 10 and most popular data science tools that will be immensely used by data scientists in 2023. They are the most popular ones and their usage helps data scientist perform their tasks efficiently and effectively",
        value:"DataScience",
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/08/data-science-webinars-and-workshops-2048x1072.webp"
    },
    {
        Title:"Fascinating Career Opportunities in Civil Engineering in 2023 ",
        Description:"Civil Engineering: Delve into the world of infrastructure and construction. Master the art of designing, planning, and managing various structures. Study structural analysis, materials science, and sustainable construction practices. Gain expertise in project management and ensure the successful execution of engineering projects. Become proficient in creating resilient and innovative solutions for urban development. Join us to shape the future of cities and build a sustainable world.",
        value:"Career",
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Fascinating-Career-Opportunities-in-Civil-Engineering.webp"
    },
    {
        Title:"Top Product-Based Companies for Cloud Engineers 2023",
        Description:"In the fast-paced world of technology, cloud engineers are in high demand, driving innovation and efficiency across industries. As the cloud computing landscape evolves, numerous product-based companies are at the forefront, leveraging cutting-edge technologies to build scalable and robust solutions.In this blog, we’ll explore the Top 10 Product-Based Companies for Cloud Engineers that present exciting opportunities for cloud engineers, offering an environment conducive to professional growth and impactful contributions. ",
        value:"Career",
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Top-Product-Based-Companies-for-Cloud-Engineers.webp"
    },
    {
        Title:"8 Excellent Product-based Companies for UI/UX Designing",
        Description:"In today’s tech-driven world, the demand for exceptional user experiences has never been higher. From smartphones and websites to software applications and digital services, the role of UI/UX designers has become increasingly important. For Product-based companies that solely depend on their product, these user experiences are very important.In this article, we’ll explore the product-based companies that prioritize the expertise of UI/UX designers. The companies listed in this section recognize the critical importance of user-centered design in creating products that not only meet user needs but also stand out in a competitive market. Let us understand more about this in this article by first learning about the need for UI/UX designers in product-based companies and then you’ll learn about the companies that offer a prominent role for UI/UX designers.",
        value:"Career",
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Excellent-Product-based-Companies-for-UI_UX-Designing.webp"
    }
];
  const [info,setinfo]=useState("")
  return (
   <div className="app ">
    <Routes>
      <Route exact path='/'element={<Main data={data}/>}/>
      <Route path='/cybersecurity'element={<CyberSecurity data={data} info={info} setinfo={setinfo} /> }/>
      <Route path='/fullstack'element={<Fullstack data={data} info={info} setinfo={setinfo} /> }/>
      <Route path='/datascience'element={<DataScience data={data} info={info} setinfo={setinfo} /> }/>

      <Route path='/career'element={<Career data={data} info={info} setinfo={setinfo} /> }/>


    </Routes>
   </div>
  )
}

export default App
