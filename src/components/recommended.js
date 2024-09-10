// Recommended Component
import C1 from "../assets/images/c1.jpg"
import C2 from "../assets/images/c2.jpg"
import C3 from "../assets/images/c3.jpg"
import C4 from "../assets/images/c4.jpg"

function Recommended() 
{
  return(
    <div class="recommended">
        <h1 class="recommended__title">Recommended for you</h1>
        <p>Pick the best fit</p>
        <div class="recommended__container">
            <div class="course-card">
                <img src={C1} alt="Course one"></img>
                <h3>2023 Python Data Visualisation Masterclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={C2} alt="Course two"></img>
                <h3>Web Development Bootcamp 2023 | Advance</h3>
                <p>Ryan</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={C3} alt="Course three"></img>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>John Mckency</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={C4} alt="Course four"></img>
                <h3>Basic to Advance Java Core Training</h3>
                <p>Adam</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
        </div>
    </div>
  )
}

export default Recommended