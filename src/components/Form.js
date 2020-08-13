import React from 'react'

export const Form = () => (
    <div className="form-flex">
        <div className="container">
            <div className="form-title">
                <h2>Contact Us</h2>
            </div>
            <div className="row100">
                <div className="col">
                    <div className="inputBox">
                        <input type="text" required="required"/>
                        <span className="text">First Name</span>
                    </div>
                </div>
                <div className="col">
                    <div className="inputBox">
                        <input type="text" required="required"/>
                        <span className="text">Last Name</span>
                    </div>
                </div>
            </div>
            <div className="row100">
                <div className="col">
                    <div className="inputBox">
                        <input type="text" required="required"/>
                        <span className="text">Email</span>
                    </div>
                </div>
                <div className="col">
                    <div className="inputBox">
                        <input type="text" required="required"/>
                        <span className="text">Mobile</span>
                    </div>
                </div>
            </div>
            <div className="row100">
                <div className="col">
                    <div className="inputBox textarea" style={{"height": "100px"}}>
                        <textarea required="required"></textarea>
                        <span className="text">Type your message Here...</span>
                    </div>
                </div>
            </div>
            <div className="row100">
                <div className="col">
                    <input type="submit" value="Send" className="form-btn"/>
                </div>
            </div>
        </div>
    </div>
);