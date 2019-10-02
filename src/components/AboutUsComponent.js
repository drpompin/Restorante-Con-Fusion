import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LEADERS } from '../shared/leaders';


const rowStyle = {
    display: 'flex',
    flexDirection: 'row',

}

const MarginZero = {
    margin: '0',
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

const AboutLeft = {
    width: '50%',
    padding: '0px 50px',
    lineHeight: '1.5',
    textAlign: 'justify',
}

const AboutRight = {
    width: '50%',
    padding: '0px 50px',
}

const FactsDetails = {
    display: 'flex',
    flexDirection: 'row',
}

const FactsItems = {
    width: '50%',
    fontWeight: '600',
    listStyleType: 'none',
    padding: '20px',
    paddingBottom: '0',
}

const FactsItemsSecond = {
    width: '50%',
    listStyleType: 'none',
    padding: '20px',
    paddingBottom: '0',
}

const FactsHeading = {
    margin: '0',
    padding: '20px',
    backgroundColor: '#3987d6',
    borderRadius: '5px 5px 0 0',
}

const MarbleWords = {
    width: '100%',
    padding: '30px',
    border: '1px solid lightgrey',
    borderRadius: '10px',
    margin: '30px 0 100px',
}

const LeaderRowStyle = {
    display: 'flex',
    flexDirection: 'row',
    margin: '30px 0',
}

const LeaderItems = {
    margin: '3px 0',
    lineHeight: '1.5'
}

const LeaderDetail = {
    width: '20%',
    padding: '20px'
}

const LeaderDetailSecond = {
    width: '40%',
    display:'flex',
    flexDirection: 'column',
    // padding: '30px 0',
}





class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leaders: LEADERS,
        }
    }


    render() {
        return (
            <React.Fragment>
                <div style={{ padding: '0 50px 50px' }}>
                    <div style={PageTitleStyle}>
                        <Link style={TitleLink} to={"/home"}><h3 style={{ margin: '0' }}>Home</h3></Link>
                        <h3 style={{ margin: '0', padding: '10px 5px', background: '#f3f0f0', }}>/</h3>
                        <h3 style={TitleName}>About Us</h3>
                    </div>
                    <h1>About Us</h1>
                    <hr />
                    <br />

                    <div style={rowStyle}>
                        <div style={AboutLeft}>
                            <h2 style={MarginZero}>Our History</h2>
                            <p>Started in 1900, Restorante Con Fusion quickly established itself as a culinary icon par excellence in
                                in Kaduna. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys
                                patronage from A-list clientelle in Kaduna. Featuring four of the best 3-start Michelin chefs in the world,
                                you never know what will arrive on your plate the next time you visit us.
                            <br />
                                <br />

                                Featuring four of the best 3-start Michelin chefs in the world,
                                you never know what will arrive on your plate the next time you visit us.
                        </p>
                        </div>

                        <div style={AboutRight}>
                            <h3 style={FactsHeading}>Facts At a Glance</h3>

                            <div style={FactsDetails}>
                                <li style={FactsItems}>Started</li>
                                <li style={FactsItemsSecond}>3 Feb, 2013</li>
                            </div>

                            <div style={FactsDetails}>
                                <li style={FactsItems}>Major Stake Holder</li>
                                <li style={FactsItemsSecond}>Ayodele Foods Inc.</li>
                            </div>

                            <div style={FactsDetails}>
                                <li style={FactsItems}>Last Year's Turnover</li>
                                <li style={FactsItemsSecond}>$1, 250, 365</li>
                            </div>

                            <div style={FactsDetails}>
                                <li style={FactsItems}>Employees</li>
                                <li style={FactsItemsSecond}>80</li>
                            </div>
                        </div>

                    </div>

                    <div style={MarbleWords}>
                        <h3 style={{ marginTop: '0' }}>You better cut the pizza in four pieces because I am not hungry enough to eat six</h3>
                        <p style={{ color: 'grey', margin: '0' }}>- Marcelo Pompin, The Wit and Wisdom of Marcelo Pompin, P.Pepe, Fusion books, 2019.</p>
                    </div>

                    <div>
                        <h1>Corporate Leadership</h1>
                        
                            {
                                this.state.leaders.map((leader) => {
                                    return (
                                        <div style={LeaderRowStyle}>
                                            <div style={LeaderDetail}>
                                                <img src={leader.image} alt='leader' style={{ width: '80%', }} />
                                            </div>

                                            <div style={LeaderDetailSecond}>
                                                <h2 style={LeaderItems}>{leader.name}</h2>
                                                <h4 style={LeaderItems}>{leader.designation}</h4>
                                                <p style={LeaderItems}>{leader.description}</p>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default About;