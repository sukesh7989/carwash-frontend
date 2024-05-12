import React, { useEffect } from 'react';
import '../privacy_Policy/Privacy_policy.css'
import { FaCircle } from "react-icons/fa6";
import Header from '../Header'
import Footer from '../Footer';
 

const Privacy_policy = () => {
    useEffect(()=>{
        const scrollToTop = () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth' // smooth scrolling
          });
        };
      
        scrollToTop()
       },[])
    return (
        <div>
            <div style={{ background: "black" }}>
                <Header />
            </div>
            <div className='policy'>
                <h5>Privacy Policy</h5>
                <ul>
                    <li><h6><FaCircle /></h6>     WHAT DO WE DO WITH YOUR INFORMATION?</li>
                    <p>When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address. When you browse our store, we also automatically receive your computers internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system. Email marketing (if applicable): With your permission, we may send you emails about our store, new products and other updates.</p>
                    <li><h6><FaCircle /></h6> CONSENT</li>
                    <p>How do you get my consent? When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only. If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.

                        How do I withdraw my consent? If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at contact@dailycarwash.in.</p>
                    <li> <h6><FaCircle /></h6> DISCLOSURE</li>
                    <p>We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.</p>
                    <li><h6><FaCircle /></h6> PAYMENT</li>
                    <p>We use Razorpay for processing payments. We/Razorpay do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved. Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard,UPI, American Express and Discover. PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers. For more insight, you may also want to read terms and conditions of razorpay.</p>
                    <li> <h6><FaCircle /></h6> THIRD-PARTY SERVICES</li>
                    <p>In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us. However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions. For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers. In particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located. Once you leave our stores website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our websites Terms of Service. Links When you click on links on our store, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.</p>
                    <li> <h6><FaCircle /></h6> SECURITY</li>
                    <p>To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.</p>
                    <li> <h6><FaCircle /></h6> COOKIES</li>
                    <p>We use cookies to maintain session of your user. It is not used to personally identify you on other websites.</p>
                    <li><h6><FaCircle /></h6> AGE OF CONSENT</li>
                    <p>By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</p>
                    <li><h6><FaCircle /></h6> CHANGES TO THIS PRIVACY POLICY</li>
                    <p>We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it. If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.</p>
                    <li><h6><FaCircle /></h6> QUESTIONS AND CONTACT INFORMATION</li>
                    <p>If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer at contact@dailycarwash.in.

                    </p>
                </ul>
            </div>
            <div className='disclaimer'>
                <h4>Disclaimer</h4>
                <h5>This Web site contains proprietary services and copyright information,the terms of which must be observed and followed.</h5>
                <h5>2021 © - Digital Talent Private Limited. All rights reserved.</h5>
            </div>
            <Footer/>
        </div>
    )
}

export default Privacy_policy