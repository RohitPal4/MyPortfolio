import React from 'react'
import ContactForm from './Contactform'



function Contact() {
    return (
        <div className='container' style={{
            marginTop: "150px",
            marginBottom: '100px',
            
        }}>
            <div className="row" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: '20px 70px'

            }}>
                <div className="col" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin:'20px 70px'
                    
                }}>
                    <h2>I'm always lookout work with new clients. Please get in touch in on of the following ways.</h2>
                    <p><img src="/assets/location.png" alt="location" /> Galgotias University, Noida Uttar Pradesh</p>
                    <div className="row">
                        <div className="col"><p><a href="tel:+918738809862"><img src="/assets/call.png" alt="call" /></a> Phone</p></div>
                        <div className="col"><p><a href="mailto:mohitpalgyondi@gmail.com"><img src="assets/email.png" alt="email" /></a> Email</p></div>
                    </div>
                    <div className="row" style={{
                        marginTop: '20px',
                        marginBottom: '20px'
                    }}>
                        <h4>Social Media Links</h4>
                        <div className="col">

                            <a className="icon-link" href="https://www.facebook.com"><img src="/assets/facebook.png" alt="facebook" /></a>


                        </div>
                        <div className="col" style={{}}>
                            <a className="icon-link" href="https://www.twitter.com"><img src="/assets/twitter.png" alt="twitter" /></a>
                        </div>
                        <div className="col"><a className="icon-link" href="https://www.github.com"><img src="/assets/github.png" alt="github" /></a></div>
                        <div className="col">
                            <a className="icon-link" href="https://www.telegram.com"><img src="/assets/telegram.png" alt="telegram" /></a>
                        </div>
                    </div>

                </div>
                <div className="col" style={{
                    margin:'20px 70px'
                }}>
                    <ContactForm />
                </div>
            </div>

        </div>
    )
}

export default Contact
