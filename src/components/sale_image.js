// Sale Image Component
import Sale from "../assets/images/sale-image.jpg"
function SaleImage()
{
  return(
    <div class="sale-image">
        <img src={Sale} alt="SaleImage"></img>
        <div class="sale-image__offer">
            <h2>Udemy Flash Sale! 24 hours to save.</h2>
            <p>Get the top courses for just 499. Just one day to save but a lifetime to learn</p>
        </div>
    </div>
  )
}

export default SaleImage