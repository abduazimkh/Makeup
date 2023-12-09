import { Container } from "../../utils";
import f from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={f.top}>
        <Container>
          <ul>
            <li>
              <h3>Free Delivery</h3>
              <p>on all orders over £20</p>
            </li>
            <li>
              <h3>All Your Beauty Favourites</h3>
              <p>1000s of products, 100s of brands</p>
            </li>
            <li>
              <h3>VIP Rewards</h3>
              <p>Earn £££ every time you shop</p>
            </li>
            <li>
              <h3>Official Retailer</h3>
              <p>100% genuine products</p>
            </li>
          </ul>
        </Container>
      </div>
      <Container>
        <div className={f.footer__recieve}>
          <div className={f.item}>
            <h2>Receive Feelunique's <span>news and offers!</span></h2>
            <strong>Subscribe to our newsletter to enjoy all the benefits.</strong>
          </div>
          <form>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Email" />
          </form>
        </div>
      </Container>
      <div className={f.footer} >
        <Container>
          <ul className={f.footer_menu}>
            <ul>
              <h3>Help & Information</h3>
              <li>Help Centre</li>
              <li>Q&A</li>
              <li>Delivery Information</li>
              <li>Returns Policy</li>
              <li>Contact Us</li>
              <li>Voucher Codes</li>
              <li>Student Beans Offers</li>
              <li>Sitemap</li>
            </ul>

            <ul>
              <h3>About</h3>
              <li>Our Stores</li>
              <li>About Feelunique</li>
              <li>Careers</li>
              <li>Privacy & Cookies</li>
              <li>Terms & Conditions</li>
              <li>Copyright & Warranties</li>
              <li>Diversity Manifesto</li>
              <li>Modern Slavery Statement</li>
              <li>Become a supplier</li>
            </ul>

            <ul>
              <h3>More From Feelunique</h3>
              <li>Feelunique Rewards</li>
              <li>Beauty Box</li>
              <li>Pick & Mix</li>
              <li>Samples</li>
              <li>Wish List</li>
              <li>Premier Delivery</li>
              <li>Affiliates</li>
              <li>Refer a Friend</li>
              <li>Gift Cards</li>
              <li>The Lounge</li>
              <li>Black Friday</li>
            </ul>
            <ul>
              <h3>Country Settings</h3>
              <input type="text" placeholder=" United Kingdom" />

              <h4>Shop With Confidence</h4>
              <p>4.1 77% Positive</p>
            </ul>
          </ul>
        </Container>
      </div>

      <Container>
        <div className={f.footer__bottom}>
          <p>Feelunique &copy; 2005-2023. All rights reserved.</p>
        </div>
      </Container>
    </footer>
    
  )
}

export default Footer