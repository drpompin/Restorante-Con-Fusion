import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { NavLink } from 'react-router-dom';



const FooterContainer = {
    padding: '50px 100px 0',
    backgroundColor: '#f94563',
    borderTop: '#e41e40'
}

const FooterRow = {
    display: 'flex',
    flexDirection: 'row',
}

const FooterHeading = {
    fontSize: '30px',
    fontWeight: '600',
    color: '#000',
    // fontStyle: 'italic',
    padding: '0',
    marginTop: '0',
}

const FooterLeft = {
    width: '10%',
    display: 'flex',
    flexDirection: 'column'
}

const FooterMiddle = {
    width: '60%',
    color: '#000',
    display: 'flex',
    flexDirection: 'column',
}

const FooterRight = {
    width: '30%',
    color: '#000',
    paddingLeft: '50px',
}

const FooterRightUl = {
    listStyleType: 'none',
    color: '#000',
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '0',
}

const DetailsDiv = {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '10px'
}

const SocialLabel = {
    marginLeft: '10px',
}

const DetailsLeft = {
    marginBottom: '10px',
    textDecoration: 'none',
    fontWeight: '600',
}

const DetailsMiddle = {
    width: '30px',
}

const CopyRightDiv = {
    color: '#000',
    fontSize: '12px',
    textAlign: 'center',
    margin: '50px 0 0',
    paddingBottom: '10px',
}



function Footer(props) {
    return (
        <div style={FooterContainer}>
            <p style={FooterHeading}>Ristorante Con Fusion</p>

            <div style={FooterRow}>
                <div style={FooterLeft}>
                    <NavLink style={DetailsLeft} to="/home">
                        <span >Home</span>
                    </NavLink>

                    <NavLink style={DetailsLeft} to="/aboutus">
                        <span >About</span>
                    </NavLink>

                    <NavLink style={DetailsLeft} to="/menu">
                        <span >Menu</span>
                    </NavLink>

                    <NavLink style={DetailsLeft} to="/contactus">
                        <span >Contact</span>
                    </NavLink>
                </div>

                <div style={FooterMiddle}>
                    <div style={DetailsDiv}>
                        <span className="fa fa-home" style={DetailsMiddle}></span>
                        <div>Nigerian Defence Academy, Postgraduate School, Kaduna, Nigeria. </div>
                    </div>

                    <div style={DetailsDiv}>
                        <span className="fa fa-phone" style={DetailsMiddle}></span>
                        <div>+2347064990334</div>
                    </div>

                    <div style={DetailsDiv}>
                        <span className="fa fa-envelope" style={DetailsMiddle}></span>
                        <div>ayo4oyo@gmail.com</div>
                    </div>
                </div>

                <div style={FooterRight}>
                    <ul style={FooterRightUl}>
                        <li><SocialIcon network='facebook' style={{ height: '25px', width: '25px' }} /> <span style={SocialLabel}>facebook</span></li>
                        <li><SocialIcon network='linkedin' style={{ height: '25px', width: '25px' }} /> <span style={SocialLabel}>linkedin</span> </li>
                        <li><SocialIcon network='instagram' style={{ height: '25px', width: '25px' }} /> <span style={SocialLabel}>instagram</span> </li>
                        <li><SocialIcon network='twitter' style={{ height: '25px', width: '25px' }} /> <span style={SocialLabel}>twitter</span> </li>
                        <li><SocialIcon network='tumblr' style={{ height: '25px', width: '25px' }} /> <span style={SocialLabel}>tumblr</span> </li>
                    </ul>
                </div>
            </div>
            <div style={CopyRightDiv}>&copy; Copyright 2019, Ristorante Con Fusion.</div>
        </div>
    );
}


export default Footer;