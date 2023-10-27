import styles from "./About.module.css";
import shop from "../assets/shop2.jpg";
function About() {
   return (
      <div className={styles.wrapper}>
         <div className={styles.about}>
            <h2> About FAKESTORE</h2>
            Welcome to FAKESTORE, your one-stop destination for all your shopping needs. Established in October 2023, FAKESTORE is a dynamic and
            innovative e-commerce platform based in the vibrant city of Sydney, Australia. We take pride in offering an extensive range of products,
            catering to a diverse clientele, with a focus on mens clothing, womens clothing, electronics, and jewelry. <br />
            <br />
            <h3>Our Story</h3>
            At FAKESTORE, we embarked on a journey with a simple yet profound vision: to redefine the online shopping experience. We understand that
            your time is precious, and that's why we've curated a selection of high-quality products that cater to your fashion, tech, and jewelry
            desires. <br />
            <br />
            <h3>What Sets Us Apart</h3>
            <ol>
               <li>
                  Fashion for Everyone: Whether you're a trendsetter or prefer timeless classics, we have a wide array of men's and women's clothing
                  to cater to your unique style.
               </li>

               <li>
                  Cutting-Edge Electronics: Stay ahead in the tech world with our top-notch electronics collection, featuring the latest gadgets and
                  devices to enhance your everyday life.
               </li>
               <li>
                  Elegant Jewelry: From statement pieces to delicate ornaments, our jewelry collection is carefully chosen to complement your outfits
                  and reflect your individuality.
               </li>
            </ol>
            <h3>Location</h3>
            <p>
               Our headquarters are situated in the heart of Sydney, Australia, a city known for its vibrant culture and diversity. We're proud to be
               part of this dynamic city and serve customers not only in Sydney but across the globe.
            </p>
            <h3>Mission</h3>
            <p>
               At FAKESTORE, our mission is to provide an effortless shopping experience that brings a smile to your face. We are dedicated to
               offering <br />
               high-quality products, exceptional customer service, and a seamless online shopping experience. Your satisfaction is our priority, and
               we are <br />
               committed to continually improving and expanding our product offerings to meet your evolving needs. Thank you for choosing FAKESTORE as
               your <br />
               go-to e-commerce platform. We look forward to being a part of your shopping journey and making your online shopping experience
               extraordinary. <br />
               Shop with us and discover a world of fashion, electronics, and jewelry right at your fingertips.
            </p>
         </div>
         <div className={styles.aboutImgDiv}>
            <img src={shop} alt="Fake Store" />
         </div>
      </div>
   );
}

export default About;
