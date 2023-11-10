import styles from "./Footer.module.css";
function Footer() {
   return (
      <div className={styles.wrapper}>
         <div className={styles.storeInfo}>
            <div className="account">
               <p>My Account</p>
               <p>My Orders</p>
               <p>Order History</p>
            </div>
            <div className="policy">
               <p>Privacy Policy</p>
               <p>Shipping Policy</p>
               <p>Refund Policy</p>
               <p>Warraty Policy</p>
               <p>Security policy</p>
            </div>
         </div>
         <div className={styles.location}>
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13250.188059021824!2d151.19675677914682!3d-33.87556325628208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae21fbe9427d%3A0xbb76db2be5ce88ab!2sAcademy%20Xi!5e0!3m2!1sen!2sau!4v1698384121430!5m2!1sen!2sau"
               width="400"
               height="300"
               style={{ border: "0" }}
               allowFullScreen=""
               loading="lazy"
               title="google maps"
               referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="locationInfo">
               <p>
                  Address: Fakestore Company <br />
                  111 Sample St. <br />
                  Sydney City, NSW, 4310 <br />
               </p>
               <p>Mobile / Phone: +61 000 0000</p>
               <small>© FakeStore 2023. All Rights Reserved</small>
            </div>
         </div>
      </div>
   );
}

export default Footer;
