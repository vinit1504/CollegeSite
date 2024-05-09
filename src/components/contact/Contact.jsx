import React from 'react'
import './Contact.css'
import message from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "c7317d51-6883-4f18-9dc1-bd17962828eb");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    }

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a Message <img src={message} alt="" /></h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea molestiae quos recusandae id doloribus ratione non labore sed cupiditate vero fugiat aliquid itaque, ipsum libero?</p>
                <ul>
                    <li><img src={mail_icon} alt="" />vinit@123.mail</li>
                    <li><img src={phone_icon} alt="" />+91 9876543210</li>
                    <li><img src={location} alt="" />12 rewqr ahmedabad,gujrat </li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label >Your Name</label>
                    <input type="text" name='name' placeholder='Enter your Name' required />
                    <label >Phone Number</label>
                    <input type="tel" name='phone' placeholder='ENter your Mobile Number' required />
                    <label >Write your message here</label>
                    <textarea name="message" rows='6' placeholder='Enter your message here' required></textarea>
                    <button type='submit' className='btn dark-btn'> Submit Now <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>

        </div>
    )
}

export default Contact
