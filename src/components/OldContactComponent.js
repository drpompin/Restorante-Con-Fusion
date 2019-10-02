import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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

const MessageInput = {
    minHeight: '50px',
    fontSize: '14px',
    borderRadius: '2px',
    padding: '0 0 0 5px',
    border: '1px solid lightgrey',
    outline: 'none',
}

export const ButtonStyle = {
    width: 'fit-content',
    padding: '10px',
    color: '#fff',
    backgroundColor: '#3987d6',
    border: 'none',
    borderRadius: '5px',
    fontSize: '12px',
    fontWeight: '600',
    outline: 'none',
}

const FormFeedback = {
    color: 'red',
    fontSize: '10px',
    marginTop: '5px',
}




class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            telephone: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telephone: false,
                email: false,
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        console.log('I got here first as target', target);

        this.setState({
            //Array Destructuring is used here, Instead of writing this.state.firstname: firstname.value, 
            //this.state.lastname: lastname.value .etc., we use array destructuring by using [name] to represent the
            //selected state and value returns the value
            [name]: value,
        })

        console.log('I got here second', name, [name]);
        console.log('I got here third', target);
    }

    handleSubmit(event) {
        console.log('details in form submit', this.state);
        console.log('event in form submit', event);
        alert('Deatils in the form' + JSON.stringify(this.state));
        event.preventDefault();
    }

    //As part of validation, an handleBlur function is defined to indicate particular fields 
    //that have been modified. The function receives event also
    handleBlur = (field) => (evt) => {
        this.setState({
            //This line below identifies the particular field that has been modified. It looks in the 
            //entire this.state.touched fields; {thats why we use the all selector ...this.state.touched}, 
            //it then selects the particular field(input box) from this.state.touched that has been 
            // modified and sets the state of the field to true
            touched: { ...this.state.touched, [field]: true },
        });
    }

    //A validate function is also designed which takes in the field names as parameters
    validate(firstname, lastname, telephone, email) {
        // we create an error object containing the initial message of the parameters state which is 
        //an empty string; and if there is an error, a set error message will be displayed
        const errors = {
            firstname: '',
            lastname: '',
            telephone: '',
            email: '',
        } 

        //Below, we define set validations for different fields; taking the state of touched and combining
        //it with whatever preferences we have for our our fields; error messages are also defined
        if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname = "First Name should be >= 3 characters";
        else if (this.state.touched.firstname && firstname.length > 10)
            errors.firstname = "First Name should be <= 10 characters";

        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = "Last Name should be >= 3 characters";
        else if (this.state.touched.lastname && lastname.length > 10)
            errors.lastname = "Last Name should be <= 10 characters";

        //A regular expression will be used to check if the telephone number field contains only 
        //numbers; below, we define the regular expression as reg
        const reg = /^\d+$/;

        //A reg.test is used to check if the telephone field input meets the criteria. By using 
        //!reg.test(), the regular expression evaluates the field value and sets it to false. i.e, it 
        //does not meet the specification; in this case, the string should be all numbers
        if (this.state.touched.telephone && !reg.test(telephone))
            errors.telephone = "Telephone number should contain only numbers";
        
        //Email is also validated; Here, the email is validated to ensure that it doesn't contain more
        // than one @ character
        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = "Email should contain a single @ character";

        return errors;
    }



    render() {
        //The validate function would be invoked in the render because everytime there is a change in
        //the input field, the form will be rerendered; Hence, that woul be an appropriatw time to carry
        //out the check
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telephone,
            this.state.email);
        



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
                            <form style={FormStyle} onSubmit={this.handleSubmit}>
                                <div style={FormRow}>
                                    <div style={FormSection}>
                                        <i style={FormLabel}>First Name</i>
                                        <input type="text" id="firstname" name="firstname" 
                                            placeholder="First Name" value={this.state.firstname}
                                            style={FormInput}
                                            onChange={this.handleInputChange} 
                                            onBlur={this.handleBlur('firstname')}
                                            //Valid and Invalid here is used to set valid flag so that
                                            //if the field is not valid, the corresponding error will
                                            //be set appropriately 
                                            valid={errors.firstname === ''}
                                            invalid={errors.firstname !== ''}
                                        />
                                        <div style={FormFeedback}>{errors.firstname}</div>
                                    </div>

                                    <div style={FormSection}>
                                        <i style={FormLabel}>Last Name</i>
                                        <input type="text" id="lastname" name="lastname" 
                                            placeholder="Last Name" style={FormInput}
                                            onChange={this.handleInputChange} 
                                            onBlur={this.handleBlur('lastname')}
                                            value={this.state.lastname} 
                                            valid={errors.lastname === ''}
                                            invalid={errors.lastname !== ''}
                                        />
                                        <span style={FormFeedback}>{errors.lastname}</span>
                                    </div>
                                </div>

                                <div style={FormRow}>
                                    <div style={FormSection}>
                                        <i style={FormLabel}>Telephone</i>
                                        <input type="number" id="telephone" name="telephone" 
                                            placeholder="Telephone" style={FormInput}
                                            value={this.state.telephone} 
                                            onChange={this.handleInputChange} 
                                            onBlur={this.handleBlur('telephone')}
                                            valid={errors.lastname === ''}
                                            invalid={errors.lastname !== ''}
                                        />
                                        <span style={FormFeedback}>{errors.telephone}</span>
                                    </div>

                                    <div style={FormSection}>
                                        <i style={FormLabel}>Email</i>
                                        <input type="text" id="email" name="email" placeholder="Email"
                                             value={this.state.email} style={FormInput}
                                            onChange={this.handleInputChange} 
                                            onBlur={this.handleBlur('email')}
                                            valid={errors.email === ''}
                                            invalid={errors.email !== ''}
                                        />
                                        <span style={FormFeedback}>{errors.email}</span>
                                    </div>
                                </div>

                                <div style={FormRow}>
                                    <div style={FormSection}>
                                        <i style={FormLabel}>May we contact you?</i>
                                        <input type="checkbox" name="agree" style={{margin: '0'}}
                                            checked={this.state.agree} onChange={this.handleInputChange} />
                                    </div>

                                    <div style={FormSection}>
                                        <i style={FormLabel}>Contact Type</i>
                                        <select type="select" name="contactType" style={FormInput}
                                            value={this.state.contactType}  onChange={this.handleInputChange}>
                                            <option>Tel.</option>
                                            <option>Email</option>
                                        </select>
                                    </div>
                                </div>

                                <div style={FormRow}>
                                    <div style={MessageSection}>
                                        <i style={FormLabel}>Your Feedback</i>
                                        <textarea type="textarea" id="message" name="message"
                                            placeholder="Message" value={this.state.message} 
                                            style={MessageInput} onChange={this.handleInputChange} />
                                    </div>
                                </div>

                                <div style={FormRowLast}>
                                    <div style={MessageSection}>
                                        <button type="submit" style={ButtonStyle}>Send Feedback</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;