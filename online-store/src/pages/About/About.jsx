import TotalPrice from "../../components/TotalPrice/TotalPrice";
import { Figure } from "react-bootstrap";
import "./About.css";

const About = ({ totalPrice, showTotalPrice }) => {
  return (
    <div className="about-container">
      <div className="total-price">
        {showTotalPrice && <TotalPrice totalPrice={totalPrice} />}
      </div>
      <Figure>
        <Figure.Image
          className="logo"
          width={200}
          height={200}
          alt="171x180"
          src="https://play-lh.googleusercontent.com/NkxWu25AQq3es6oaOvemDualZeS-rTc9NYcZjbHLdACDHH5SPQwFCoxCj6V9Gxu7rA=w526-h296-rw"
        />
        <Figure.Caption className="about-caption">
          <h3 className="title">Welcome to Our Store</h3>
          <p className="text">
            It`s your ultimate destination for all things pets! Our store is
            dedicated to providing a loving home for a variety of animals,{" "}
            <br /> ensuring they find the perfect family to care for them.
          </p>
        </Figure.Caption>
      </Figure>

      <Figure className="about-images">
        <Figure.Image
          className="about-image"
          width={300}
          height={200}
          alt="300x200"
          src="https://www.parksideredmondapts.com/uploads/posts/images/original/18511/father_and_daughter_in_a_pet_store.jpg"
        />
        <Figure.Image
          width={300}
          height={200}
          alt="300x200"
          src="https://cdn-bpjch.nitrocdn.com/dNysYbgQZWBmnHZAxlFXybtMFCiUKYro/assets/images/optimized/rev-57390ac/wp-content/uploads/cute-dog-with-owner-pet-shop-696x464.jpg"
        />
      </Figure>

      <div className="contact">
        <h3 className="title">Contact Us</h3>
        <ul className="contact-list">
          <li>
            <a className="contact-item" href="mailto:example@example.com">
              email: example@example.com
            </a>
          </li>
          <li>
            <a className="contact-item" href="tel:+1234567890">
              tel: +1 (234) 567-890
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
