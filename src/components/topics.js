import R1 from "../assets/images/r1.jpg"
import R2 from "../assets/images/r2.jpg"
import R3 from "../assets/images/r3.jpg"
import R4 from "../assets/images/r4.jpg"
import R5 from "../assets/images/r5.jpg"
import R6 from "../assets/images/r6.jpg"
import R7 from "../assets/images/r7.jpg"
import R8 from "../assets/images/r8.jpg"

// Topics Recommended Component

function Topics()
{
  return(
    <div class="topics">
        <h1 class="topic__recommended">Topics Recommended for you</h1>
        <div class="topics__content">
            <p>Website</p>
            <p>Javascript</p>
            <p>CSS</p>
            <p>MongoDB</p>
            <p>Azure</p>
            <p>AWS</p>
            <p>Docker</p>
            <p>GitHUB</p>
            <p>React js</p>
        </div>
         
        <div class="popular">
            <h1 class="popular__title">Most Popular</h1>
            <p class="popular__subtitle">Pick the best fit</p>
            <div class="popular__container">
                <div class="course-card">
                    <img src={R1} alt="Course one"></img>
                    <h3>Web Developer Bootcamp</h3>
                    <p>Col Steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={R2} alt="Course two"></img>
                    <h3>Complete Web Developer</h3>
                    <p>Georgia</p>
                    <p>3.9 ⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={R3} alt="Course three"></img>
                    <h3>Internet and Web Development</h3>
                    <p>Laura</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={R4} alt="Course four"></img>
                    <h3>Full Stack Course</h3>
                    <p>Angelina</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={R5} alt="Course five"></img>
                    <h3>CSS, Bootstrap, Javascript</h3>
                    <p>Claura</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={R6} alt="Course six"></img>
                    <h3>Ultimate Web Designer</h3>
                    <p>Peter Parker</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={R7} alt="Course seven"></img>
                    <h3>100 Days Of Code - 2024 Web Development</h3>
                    <p>Tony Stark</p>
                    <p>3.9 ⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={R8} alt="Course eight"></img>
                    <h3>Advanced Web Developer Bootcamp</h3>
                    <p>Stephen</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Topics