import React from 'react'
import stylee from './card.module.css'
const Card=()=> 
{
    return(
        <>
       <div className={stylee.card}>
        <div className={stylee.main}>
          <a href="#" >
            <img src="https://edyoda.s3.amazonaws.com/media/blog-images/understanding-devops.jpg" alt="image"/><br/>
    
            <h1 >Understanding DevOps</h1>
            <span >Edyoda</span>
            <span>|23 Jul 2019</span>
            <p >
              DevOps is a term derived after combining development and operation for a common purpose- driving
              the development of operational processes.<br/> It automates the processes between the...
            </p>
          </a>
        </div>

        <div className={stylee.main}>
      <a href="#1">
        <img src="https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview.png" alt="image"/><br/>
        <h1>Automation Testing: An Overview</h1>
        <span >Edyoda</span>
        <span>|23 Jul 2019</span>
        <p >
          Software is all around us and it shapes<br/> the world differently. It shapes how the <br/>objects
          are designed, what information <br/> we receive, how and where we work,<br/> who we meet and
          communicate.Each...
        </p>
      </a>
  
        </div>
        <div className={stylee.main}>
        <a href="#2">
        <img src="https://edyoda.s3.amazonaws.com/media/blog-images/react-native-vs-flutter.png" alt="image"/><br/>

        <h1 >React Native Vs Flutter<br/>:Breaking the confusion...</h1>
        <span>Edyoda</span>
        <span>|23 Jul 2019</span>
        <p>
          The two biggest social platforms have created a buzz in the application development industry.
          React Native by Facebook and Flutter by Google are the latest two cross-platforms for mobile...
        </p>
      </a>
    </div>
      
        <div className={stylee.main}>
        <a href="#3">
        <img src="https://edyoda.s3.amazonaws.com/media/blog-images/6.png" alt="image"/><br/>

        <h1>LAMP Stack Vs MEAN stack:Choosing the right...</h1>
        <span>Edyoda</span>
        <span>|23 Jul 2019</span>
        <p>
          In today’s dynamic world, rapid web application development with a smooth user interface that
          can adapt to specific features is the main business requireme-<br/>nt.Many organizations around
          the...
        </p>
      </a>
        </div>
        <div className={stylee.main}>
        <a href="#4">
        <img src="https://edyoda.s3.amazonaws.com/media/blog-images/3.png" alt="image"/><br/>

        <h1>Challenges of Machine Learning in Big Data...</h1>
        <span>Edyoda</span>
        <span>|23 Jul 2019</span>
        <p>
          Machine Learning is a subset of artificial intelligence which is an important part of computer
          science. The revolution of Big Data promises to transform the way we work, live and think by
          enabling the...
        </p>
      </a>
      </div>
      <div className={stylee.main}>
      <a href="#5">
        <img src="https://edyoda.s3.amazonaws.com/media/blog-images/4_eSRlqfD.png" alt="image"/><br/>

        <h1>Impact of Cloud Compu-<br/>ting in various industries.</h1>
        <span>Edyoda</span>
        <span>|23 Jul 2019</span>
        <p>
          Cloud computing has been rapidly gaining pace in the world of information technology. It has
          been observed that over 90% of global enterprises are using cloud technology as part of their...
        </p>
      </a>
        </div>
        <div className={stylee.main}>
        <a href="#6">
        <img src="https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2_Ctzrh0e.png" alt="image"/><br/>

        <h1>What is Web Scraping?</h1>
        <span>Zac Clancya</span>
        <span>|23 Jul 2019</span>
        <p>
          Simply put, web scraping is one of the tools developers use to gather and analyze information
          from the Internet.

          Some websites and platforms offer application programming interfaces...
        </p>
      </a>
        </div>
        <div className={stylee.main}>
        <a href="#8">
        <img src="https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png" alt="image"/><br/>

        <h1>Practical Machine Lear<br/>ning with Python and Keras</h1>
        <span>Daniel Pyrathon </span>
        <span>|23 Jul 2019</span>
        <p>
          Machine learning is a field of artificial intelligence that uses statistical techniques to give
          computer systems the ability to “learn” (e.g., progressively improve performance on a
          specific...
        </p>
      </a>
        </div>
        <div className={stylee.main}>
        <a href="#9">
        <img src="https://edyoda.s3.amazonaws.com/media/blog-images/EdYoda_Admission_Test_Image_wFfao4c.png" alt="image"/><br/>

        <h1>Your Guide to EdYoda Admission Test</h1>
        <span>Edyoda</span>
        <span>|23 Jul 2019</span>
        <p>
          Ever since 2019, after a solid hit from the falling rate of economic growth, the job market
          seems to be challenging. With the technology-enabled disruption continuing to play its part,
          companies...
        </p>
      </a>
        </div>
        
    
        </div>
      </>
    )
}
export default Card;