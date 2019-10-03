import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Modal from 'react-responsive-modal';
import { HeaderStyle } from '../shared/headerComponent';
import { FormLabel, FormInput } from './ContactComponent';
import { LoginDiv, ModalHeader, FormForm, ModalBody, ModalRow, Button  } from '../shared/sharedStyles';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            open: false,
            remember: false,
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

        //the line below is an example of how to use ref in react
        this.UsernameReference = React.createRef();
        this.PasswordReference = React.createRef();
        this.InputReference = React.createRef();
    }

    toggleModal() {
        this.setState({ open: !this.state.open });
    };

    handleLogin(e) {
        this.toggleModal();
        console.log('eeeeeeeee', e);
        alert('Username: ' + this.UsernameReference.current.value + 
        'Password: ' + this.PasswordReference.current.value + 
        'Remember: ' + this.InputReference.current.checked);

        e.preventDefault();
    }

    
    
    
    render() {
        const { open } = this.state;

        

        const HomeButton = {
            color: '#fff',
            fontWeight: '700',
            fontSize: '65px',
            width: '5%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginRight: '50px',
            textDecoration: 'none',
        }

        const LinkStyle = {
            minWidth: '5%',
            marginRight: '25px',
            fontSize: '20px',
            color: '#000',
        }
        

        const LinkButton = styled.span`
            color: #fff;
            font-weight: 600;

            &:hover {
                color: purple;
            }

            &.active {
                color: orange;
            }
        `

        

        const links = [
            {
                address: '/home',
                title: 'Home',
                icon: 'fa fa-home',
                id: 0,
            },

            {
                address: '/aboutus',
                title: 'About Us',
                icon: 'fa fa-info',
                id: 1,
            },

            {
                address: '/menu',
                title: 'Menu',
                icon: 'fa fa-list',
                id: 2,
            },

            {
                address: '/contactus',
                title: 'Contact Us',
                icon: 'fa fa-address-card',
                id: 3,
            }
        ]

        

        



        return (
            <div style={HeaderStyle}>
                <NavLink to='/home' style={HomeButton}>
                    <span style={{fontSize: '60px'}}>&#127858;</span>
                    {/* <img src='assets/images/delivery-guy.png' style={LogoImageStyle} /> */}
                </NavLink>

                {
                    links.map((link) => {
                        return (
                            <div style={LinkStyle} key={link.id} id={link.id}>
                                <NavLink to={link.address} style={{ textDecoration: 'none' }} activeClassName="&.active">
                                    {/* <span style={LinkIconStyle} onMouseOut={this.onHover} onMouseEnter={(id) => this.onHover(id)} className={link.icon}>{link.title}</span> */}
                                    <LinkButton className={link.icon}><span style={{ marginRight: '5px' }}></span><span style={{fontFamily: 'serif'}}>{link.title}</span></LinkButton>
                                </NavLink>
                            </div>
                        )
                    })
                }

                <LoginDiv onClick={this.toggleModal} className={"fa fa-sign-in"}><span style={{ marginRight: '5px' }}></span><span style={{ fontFamily: 'serif' }}>Login</span></LoginDiv>
                

                {
                    //uncontrolled forms are used in a situation where one has a simple form with less 
                    //interaction with the react component doesnt want to go through 
                    //the stress of crrating forms in controlled components. It takes advantage of the
                    // fact that the DOM has access to the data captured by a form, since html DOM 
                    //element states are always tracked by the DOM. Hence, the use of refs. All DOM elements
                    //have a ref associated with them. SO, instead of writing an event handler for every 
                    //form update, we use DOM refs to get the form values.
                    
                    //NB: This approach is usually used and is easier in situations of integrating React with
                    //non-React code
                }
                <Modal open={open} onClose={this.toggleModal} center>
                    <FormForm onSubmit={this.handleLogin}>
                        <ModalHeader>Login Form</ModalHeader>
                        <ModalBody>
                            <ModalRow>
                                <i style={FormLabel}>Username</i>
                                <input type="text" id="username" name="username"
                                    placeholder="Username"
                                    style={FormInput}
                                    ref={this.UsernameReference}
                                    //Since we are using uncontrolled form and which and not using state
                                    //to pick the input values, we have to use ref to reference the input
                                    //values as done below
                                    
                                    
                                />
                            </ModalRow>

                            <ModalRow>
                                <i style={FormLabel}>Password</i>
                                <input type="password" id="password" name="password"
                                    placeholder="Password"
                                    style={FormInput}
                                    ref={this.PasswordReference}
                               />
                            </ModalRow>

                            <ModalRow>
                                <i style={FormLabel}>Remember Me</i>
                                <input type="checkbox" name="remember" style={{ margin: '0' }}
                                    ref={this.InputReference}
                                    />
                            </ModalRow>

                            <Button type="submit" value="submit">Login</Button>
                        </ModalBody>
                    </FormForm>
                </Modal>


                {/* <div style={LinkStyle}>
                    <NavLink to="/home">
                        <span style={LinkIconStyle} onMouseOut={this.onHover} onMouseEnter={this.onHover} className="fa fa-home">Home</span>
                    </NavLink>
                </div>

                <div style={LinkStyle}>
                    <NavLink to="/aboutus">
                        <span style={LinkIconStyle} onMouseOut={this.onHover} onMouseEnter={this.onHover} className="fa fa-info">About Us</span>
                    </NavLink>
                </div>

                <div style={LinkStyle}>
                    <NavLink to="/menu">
                        <span style={LinkIconStyle} onMouseOut={this.onHover} onMouseEnter={this.onHover} className="fa fa-list">Menu</span>
                    </NavLink>
                </div>

                <div style={LinkStyle}>
                    <NavLink to="/contactus">
                        <span style={LinkIconStyle} onMouseOut={this.onHover} onMouseEnter={this.onHover} className="fa fa-address-card">Contact Us</span>
                    </NavLink>
                </div> */}
            </div>
        );
    }
}

export default Header;