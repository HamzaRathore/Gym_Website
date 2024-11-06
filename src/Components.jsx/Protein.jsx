import React, { useState } from "react";
import "../styles.css";
import p1 from "../assets/Protein/p_1.jpg";
import p2 from "../assets/Protein/p_2.png";
import p3 from "../assets/Protein/p_3.png";
import p4 from "../assets/Protein/p_4.jpg";
import p5 from "../assets/Protein/p_5.jpg";
import p6 from "../assets/Protein/p_6.jpg";
export default function Protein() {
  const [category, setCategory] = useState("Weight-gainer");
  const [cartItems, setCartItems] = useState([]);
  const handleLevelChange = (e) => {
    setCategory(e.target.value);
  };
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <>
      <div className="cart-icon">
        <span className="cart-count">{cartItems.length}</span>
        🛒
        <div className="cart-dropdown">
          {cartItems.length === 0 ? (
            <p className="ul-p">Your cart is empty</p>
          ) : (
            <ul className="cart-ul">
              {cartItems.map((item, index) => (
                <li className="ul-p" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="protein-head">
        <h1 className="exer_heading">Protein Supplements</h1>
        <h4>
          If you are in search of highly nutritious weight gain protein shakes,
          you are at the right place here. Made with premium quality
          ingredients, our mass gainer protein shakes are perfect for people who
          want rapid mass and muscle growth.
        </h4>
        <div className="level-selector">
          <label>
            <b>Select Type: </b>
          </label>
          <select value={category} onChange={handleLevelChange}>
            <option value="Weight-gainer">Weight Gainer</option>
            <option value="Weight_loss">Weight Loss</option>
          </select>
        </div>
      </div>
      {category === "Weight-gainer" && (
        <div>
          <h1 className="protein_head">Weight Gainers</h1>
          <div className="exer_con">
            <div className="box-exer">
              <button className="btn-mem_prot">
                <h4>Sale</h4>
              </button>
              <img src={p1} className="bic_img" />
              <h3>Total Mass Matrix</h3>
              <br />
              <ul className="exer_list">
                <li>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                </li>
                <li>
                  <span>
                    <s>Rs12,000.00</s>
                  </span>
                  <span>
                    {" "}
                    <b>Rs9000</b>
                  </span>
                </li>
              </ul>
              <button
                className="btn-mem-prot-2"
                onClick={() => addToCart("Total Mass Matrix")}
              >
                Buy
              </button>
            </div>
            <div className="box-exer">
              <button className="btn-mem_prot">
                <h4>Sale</h4>
              </button>
              <img src={p2} className="bic_img" />
              <h3>All in One Recovery</h3>
              <br />
              <ul className="exer_list">
                <li>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </li>
                <li>
                  <span>
                    <s>Rs9,549.00</s>
                  </span>
                  <span>
                    {" "}
                    <b>Rs6,000</b>
                  </span>
                </li>
              </ul>
              <button
                className="btn-mem-prot-2"
                onClick={() => addToCart("All in One Recovery")}
              >
                Buy
              </button>
            </div>
            <div className="box-exer">
              <button className="btn-mem_prot">
                <h4>Sale</h4>
              </button>
              <img src={p3} className="bic_img" />
              <h3>Protein Porridge </h3>
              <br />
              <ul className="exer_list">
                <li>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star "></span>
                  <span className="fa fa-star "></span>
                </li>
                <li>
                  <span>
                    <s>Rs10,000.00</s>
                  </span>
                  <span>
                    {" "}
                    <b>Rs8,000</b>
                  </span>
                </li>
              </ul>
              <button
                className="btn-mem-prot-2"
                onClick={() => addToCart("Protein Porridge")}
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      )}
      {category === "Weight_loss" && (
        <div>
          <h1 className="protein_head">Weight Loss</h1>
          <div className="exer_con">
            <div className="box-exer">
              <button className="btn-mem_prot">
                <h4>Sale</h4>
              </button>
              <img src={p4} className="bic_img" />
              <h3>Thermopro (Fat Destroyer)</h3>
              <br />
              <ul className="exer_list">
                <li>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                </li>
                <li>
                  <span>
                    <s>Rs5,000.00</s>
                  </span>
                  <span>
                    {" "}
                    <b>Rs3,149.00</b>
                  </span>
                </li>
              </ul>
              <button
                className="btn-mem-prot-2"
                onClick={() => addToCart("Thermopro")}
              >
                Buy
              </button>
            </div>
            <div className="box-exer">
              <button className="btn-mem_prot">
                <h4>Sale</h4>
              </button>
              <img src={p5} className="bic_img" />
              <h3>CLA </h3>
              <br />
              <ul className="exer_list">
                <li>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </li>
                <li>
                  <span>
                    <s>Rs6,000.00</s>
                  </span>
                  <span>
                    {" "}
                    <b>Rs3,149.00</b>
                  </span>
                </li>
              </ul>
              <button
                className="btn-mem-prot-2"
                onClick={() => addToCart("CLA")}
              >
                Buy
              </button>
            </div>
            <div className="box-exer">
              <button className="btn-mem_prot">
                <h4>Sale</h4>
              </button>
              <img src={p3} className="bic_img" />
              <h3>Diet Meal Replacement </h3>
              <br />
              <ul className="exer_list">
                <li>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star "></span>
                  <span className="fa fa-star "></span>
                </li>
                <li>
                  <span>
                    <s>Rs10,000.00</s>
                  </span>
                  <span>
                    {" "}
                    <b>Rs8,250</b>
                  </span>
                </li>
              </ul>
              <button
                className="btn-mem-prot-2"
                onClick={() => addToCart("Diet Meal Replacement")}
              >
                Buy
              </button>
            </div>
            <div className="document-protein">
              <p>
                At The Protein Factory, we understand how important it is to
                access effective fat-burning supplements; that’s why we import
                these products from a UK-based brand, The Protein Works ™, known
                for its high-quality supplements worldwide.
              </p>
              <br />
              <p>
                By boosting your energy levels and reducing fat stores of the
                body, our supplements can help you smash your weight loss goals
                without going on a very strict diet.
              </p>
              <br />
              <h1>Our Top Picks for Fat Burner Products</h1>
              <p>
                We offer a broad range of fat burning supplements. If you’re
                searching for weight loss tablets in Pakistan, then The Protein
                Factory is your store. We have products for all your needs.
              </p>
              <br />
              <p>
                Here is a list of our top-selling fat-reducing supplements
                mentioned below:
              </p>
              <br />
              <h1>Thermopro (Fat Destroyer)</h1>
              <br />
              <p>
                Our Thermopro (Fat Destroyer) is the top-selling fat burner in
                Pakistan that supports your weight loss journey while reducing
                fatigue and tiredness. This product is prepared with a
                combination of caffeine, green tea extract, vitamin B5, vitamin
                B12, N-Acetyl, L-Carnitine, and Chromium that help you feel
                fresh and sharpen your mental focus as well.
              </p>
              <br />
              <p>
                So, just take this best weight loss supplement before your
                workout and get the most out of it. It is available at a very
                affordable price of Rs 2,699/-.
              </p>
              <br />
              <h1>CLA (For A Lean and Shredded Body)</h1>
              <p>
                Everyone wants a toned body, but reaching that is not an easy
                task. The Protein Factory supports you by offering CLA (For A
                Lean And Shredded Body), one of the best-selling weight loss
                tablets in Pakistan, imported from a well-reputable brand, “The
                Protein Works™ .”
              </p>
              <br />
              <p>
                This product is prepared using Conjugated Linoleic Acid, which
                makes it the best weight loss supplement by increasing the
                body's metabolism and burning fats.
              </p>
              <br />
              <p>
                We take pride in offering this great fat burner in Pakistan at a
                very low price of Rs 2299/- so that everyone can access this
                healthy and fast-acting product.
              </p>
              <br />
              <h1>Diet Meal Replacement</h1>
              <p>
                As the name suggests, our Diet Meal Replacement is an excellent
                fat burner and a perfect alternative to diet meals for those who
                want tasty yet nutrient-rich weight loss supplements in
                Pakistan.
              </p>
              <br />
              <p>
                Diet Meal Replacement is a very high protein and nutrient dense
                supplement designed to contribute to weight loss. At only 250
                calories per shake, it is packed with 20g of protein and slow
                digesting carbohydrates. This combination helps increase the
                feeling of fullness while keeping your calories low which makes
                it the best weight loss supplement.
              </p>
              <br />
              <p>
                Start your journey to a healthier you with our Diet Meal
                Replacement - now available for only Rs 6,999!
              </p>

              <br />
              <h1>Why Choose the Fat Burning Supplements?</h1>
              <br />
              <p>
                The Protein Factory offers UK-imported high-quality weight loss
                supplements in Pakistan that delivers fast results.
              </p>
              <br />
              <br />
              <p>
                Here are the reasons why we are the best weight loss supplements
                provider:
              </p>
              <br />
              <h1>High-End Quality </h1>
              <br />
              <p>
                At The Protein Factory, we are committed to offering
                high-quality fat-burning supplements that promise results
                without negatively impacting your health. All our weight-loss
                tablets in Pakistan are imported from The Protein Works ™. This
                worldwide brand produces high-quality health supplements with
                all the accreditation, including HACCP, STS, and Halal
                Certification.
              </p>
              <br />
              <h1>Effective Formulas</h1>
              <br />
              <p>
                We are the official distributor of The Protein Works ™. The
                Protein Works ™ uses advanced technology to create effective
                formulas to help customers lose weight quickly and safely. Their
                formulas are designed to stimulate the body’s metabolism and
                reduce fat levels. These formulas are also designed to help
                increase energy levels, improve digestion, and suppress
                appetite.
              </p>
              <br />
              <h1>Affordable Prices</h1>
              <br />
              <p>
                We offer competitive prices on our fat-burning products, which
                makes them an accessible and affordable option for those looking
                to lose weight. Our products are also available in different
                sizes, so customers can find the perfect product for their needs
                and budget.
              </p>
              <br />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
