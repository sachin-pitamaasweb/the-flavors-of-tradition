import React from "react";
import '../style/WhyChooseUs.css';

const WhyChooseUs = () => (
    <>
        <section className="why-choose-us">
            <div className="why-choose-us-container">
              <div className="why-choose-us-content">
             <div className="why-choose-us-title-div"> <h2 className="why-choose-us-title">Why Choose Us?</h2></div>
                <p className="why-choose-us-p">
                    "MRMC FOODS: Quality Assurance, Global<br />
                    Reach. Exporting the Finest Basmati Rice<br />
                    Worldwide, Trusted by Infinite Customers."
                </p>
              </div>
              <div className="why-choose-us-image">
                <img src="images/why-choose-us.png" alt="MRMC FOODS" className="img-fluid-why" />
              </div>
            </div>
        </section>
    </>
)

export default WhyChooseUs;