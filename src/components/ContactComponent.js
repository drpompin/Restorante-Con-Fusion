import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors} from 'react-redux-form';
import { Button } from '../shared/sharedStyles';
//The form in the ContactComponent is remade using redux-forms. The redux form takes care of 
//validations and errors as well as events. Hence, lesser code to write.

//The old contact form(without redux-forms) that did validations and event handling manually can be 
//found in the OldContactComponent component.








const rowStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '30px',
}

const AddressStyle = {
    minHeight: '140px',
    display: 'flex',
    flexDirection: 'column',
    width: '32%',
}

const AddressHeading = {
    margin: '0 0 10px',
}

const MarginZero = {
    marginTop: '0'
}

const PageTitleStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
}

const TitleLink = {
    color: '#3987d6',
    padding: '10px',
    background: '#f3f0f0',
    margin: '0',
    textDecoration: 'none'
}

const TitleName = {
    background: '#f3f0f0',
    margin: '0',
    padding: '10px',
    color: '#708090',
}

const MapStyle = {
    width: '32%',
}

const FormContainer = {
    width: '32%',
}

const formDivision = {
    border: '1px solid lightgrey',
    borderRadius: '5px',
    padding: '10px',
}

const FormStyle = {
    width: '100%'
}

const FormRow = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: '20px',
}

const FormRowLast = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
}

const FormSection = {
    width: '48%',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    // minHeight: '40px',
}

const MessageSection = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
}

export const FormLabel = {
    fontSize: '10px',
    color: 'grey',
    fontWeight: '550',
    marginBottom: '5px',
    textTransform: 'uppercase',
    margin: '0 0 2px',
    fontStyle: 'normal'
}

export const FormInput = {
    height: '24px',
    fontSize: '14px',
    borderRadius: '2px',
    padding: '0 0 0 5px',
    border: '1px solid lightgrey',
    marginTop: '5px',
    outline: 'none',
}

export const MessageInput = {
    minHeight: '50px',
    fontSize: '14px',
    borderRadius: '2px',
    padding: '0 0 0 5px',
    border: '1px solid lightgrey',
    outline: 'none',
}


export const FormFeedback = {
    color: 'red',
    fontSize: '10px',
    marginTop: '5px',
}


//we now define functions that can help us do form validation in the react-redux form
//required takes val as a parameter and checks to see that the value is greater than zero
const required = (val) => val && val.length;

//maxLength takes len and then val and endures that the length of the value entered in the input box 
//is less than a certain value
const maxLength = (len) => (val) => !(val) || (val.length  <= len);

//minLength also tests for minimum length
const minLength = (len) => (val) => (val) && (val.length >= len);

//we also have an isNumber function to check that the value is a number
const isNumber = (val) => !isNaN(Number(val));

//validEmail function uses regular expression to check that the email entered is a valid email address
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Contact extends Component {

    constructor(props) {
        super(props);
       
        this.handleSubmit = this.handleSubmit.bind(this);
    }

   

    handleSubmit(values) {
        console.log('details in form submit', values);
        alert('Details in the form' + JSON.stringify(values));
    }

   

   

    render() {
        //The validate function would be invoked in the render because everytime there is a change in
        //the input field, the form will be rerendered; Hence, that woul be an appropriatw time to carry
        //out the check
        


        return (
            <div style={{ padding: '0 50px 30px' }}>
                <div style={PageTitleStyle}>
                    <Link style={TitleLink} to={"/home"}><h3 style={{ margin: '0' }}>Home</h3></Link>
                    <h3 style={{ margin: '0', padding: '10px 5px', background: '#f3f0f0', }}>/</h3>
                    <h3 style={TitleName}>Contact Us</h3>
                </div>
                <h1>Contact Us</h1>
                <hr />
                <br />


                <h2 style={MarginZero}>Location Information</h2>

                <div style={rowStyle}>
                    <div style={AddressStyle}>
                        <h4 style={AddressHeading}>Our Address</h4>
                        <span style={{lineHeight: '1.5'}}>Nigerian Defence Academy, <br />Postgraduate School,<br /> Kaduna, Nigeria.</span><br />
                        <i className="fa fa-phone"><i style={{fontStyle: 'normal'}}>: +2347064990334</i></i><br />
                        <i className="fa fa-envelope"><i style={{fontStyle: 'normal'}}>: ayo4oyo@gmail.com</i></i>
                    </div>

                    <div style={MapStyle}>
                        <h4 style={AddressHeading}>Map of Our Location</h4>
                        <img src="assets/images/map.jpg" alt="map" style={{width: '80%', height: '250px'}} />
                    </div>

                    <div style={FormContainer}>
                        <div>
                            <h4 style={AddressHeading}>Send Us Your Feedback</h4>
                        </div>

                        <div style={formDivision}>
                            <LocalForm style={FormStyle} onSubmit={(values) => this.handleSubmit(values)}>
                                <div style={FormRow}>
                                    <div style={FormSection}>
                                        <i style={FormLabel}>First Name</i>
                                        {
                                            //Input field is replaced with redux-form's default inputfield
                                            //element represented by Control and the type of th input field
                                            //is specified by using dot notation
                                        }
                                        <Control.text model=".firstname" id="firstname" name="firstname" 
                                            placeholder="First Name"
                                            style={FormInput}
                                            validators = {{
                                                required,
                                                minLength: minLength(3),
                                                maxLength: maxLength(15),
                                            }}
                                        />
                                        <Errors 
                                            style={FormFeedback}
                                            model=".firstname"
                                            show="touched"
                                            //messages below displays the messages that need to be 
                                            //displayed when the conditions on the left are true
                                            messages= {{
                                                required: "Required! ",
                                                minLength: "Must be greater than 2 characters! ",
                                                maxLength: "Must be 15 characters or less! ",
                                            }}
                                        />
                                    </div>

                                    <div style={FormSection}>
                                        <i style={FormLabel}>Last Name</i>
                                        <Control.text model=".lastname" id="lastname" name="lastname" 
                                            placeholder="Last Name" 
                                            style={FormInput}
                                            validators={{
                                                required,
                                                minLength: minLength(3),
                                                maxLength: maxLength(15),
                                            }}
                                        />
                                        <Errors
                                            style={FormFeedback}
                                            model=".lastname"
                                            show="touched"
                                            messages={{
                                                required: "Required! ",
                                                minLength: "Must be greater than 2 characters! ",
                                                maxLength: "Must be 15 characters or less! ",
                                            }}
                                        />
                                    </div>
                                </div>

                                <div style={FormRow}>
                                    <div style={FormSection}>
                                        <i style={FormLabel}>Telephone</i>
                                        <Control.text model=".telephone" id="telephone" name="telephone" 
                                            placeholder="Telephone" 
                                            style={FormInput}
                                            validators={{
                                                required,
                                                minLength: minLength(3),
                                                maxLength: maxLength(15),
                                                isNumber,
                                            }}
                                        />
                                        <Errors
                                            style={FormFeedback}
                                            model=".telephone"
                                            show="touched"
                                            messages={{
                                                required: "Required! ",
                                                minLength: "Must be greater than 2 numbers! ",
                                                maxLength: "Must be 15 numbers or less! ",
                                                isNumber: "Must be a number! "
                                            }}
                                        />
                                    </div>

                                    <div style={FormSection}>
                                        <i style={FormLabel}>Email</i>
                                        <Control.text model=".email" id="email" name="email" placeholder="Email"
                                            style={FormInput} 
                                            validators={{
                                                required,
                                                validEmail
                                            }}
                                        />
                                        <Errors
                                            style={FormFeedback}
                                            model=".email"
                                            show="touched"
                                            messages={{
                                                required: "Required! ",
                                                validEmail: "Invalid Email Address! "
                                            }}
                                        />
                                    </div>
                                </div>

                                <div style={FormRow}>
                                    <div style={FormSection}>
                                        <i style={FormLabel}>May we contact you?</i>
                                        <Control.checkbox model=".agree" name="agree" 
                                            style={{margin: '0'}}
                                            />
                                    </div>

                                    <div style={FormSection}>
                                        <i style={FormLabel}>Contact Type</i>
                                        <Control.select model=".contactType" name="contactType" style={FormInput}>
                                            <option>Tel.</option>
                                            <option>Email</option>
                                        </Control.select>
                                    </div>
                                </div>

                                <div style={FormRow}>
                                    <div style={MessageSection}>
                                        <i style={FormLabel}>Your Feedback</i>
                                        <Control.textarea model=".message" id="message" name="message"
                                            placeholder="Message" 
                                            style={MessageInput} />
                                    </div>
                                </div>

                                <div style={FormRowLast}>
                                    <div style={MessageSection}>
                                        <Button type="submit" >Send Feedback</Button>
                                    </div>
                                </div>
                            </LocalForm>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;