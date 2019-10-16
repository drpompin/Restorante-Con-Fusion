import React, { Component } from 'react';
import { Loading } from './LoadingComponent';


const CardContainer = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '50px'
}


const CardMain = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    width: '32%',
    border: '2px solid #baa4d1',
}

const CardHeading = {
    // color: '#fff',
    fontWeight: '600',
    margin: '0',
}

const CardDescrption = {
    lineHeight: '1.5',
    fontSize: '16px',
}

const CardImageContainer = {
    width: '100%',
    marginBottom: '20px',
}

const CardImage = {
    width: '100%',
    height: '350px',
}

const CardBody = {
    textAlign: 'left',
    padding: '0 20px',
}

const CardSubHeading = {
    marginBottom: '0'
}

const HomeTop = {
    width: '100%',
    height: '350px',
    background: '#f94563',
    display: 'flex',
    flexDirection: 'column',
    padding: '30px 100px',
    color: '#fff',
    justifyContent: 'space-around',
}



const Card = ({item, isLoading, errMsg}) => {
    if (isLoading) {
        return (
            <Loading />
        );
    }
    else if (errMsg) {
        return (
            <h4>{errMsg}</h4>
        );
    }
    else
        return (
            <div style={CardMain}>
                <div style={CardImageContainer}>
                    <img style={CardImage} src={item.image} alt={item.name} />
                </div>
                <div style={CardBody}>
                    <h2 style={CardHeading}>{item.name}</h2>
                    {
                        //Here, JSX is used to verify if item.designation exists. If it does, then the 
                        //Card subheading is added as shown below, else null is returned
                        item.designation ? <h4 style={CardSubHeading}>{item.designation}</h4> : null
                    }
                    <p style={CardDescrption}>{item.description}</p>
                </div>

            </div>
        );
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
        this.toggleModal = this.toggleModal.bind(this);
    }
    

    toggleModal = () => {
        this.setState({ open: !this.state.open });
    };

    


    render() {
        const { dish, promotion, leader } = this.props;
        let props = this.props;

        return (
            <div style={{ padding: '0' }}>
                <div style={HomeTop}>
                    <p style={{ lineHeight: '1.2', fontSize: '40px', margin: '0', fontWeight: '550' }}>Welcome to the <br />Restorante Con Fusion</p>
                    <p style={{ textAlign: 'justify', width: '50%', lineHeight: '1.5', margin: '0' }}>A unique combination of assorted Pizza and Utha alongside A unique combination of
                        Utha and assorted Pizza is our special promotion meal this season for a mouth
                        watering giveaway price of $1.99. It gives you best value for money A unique
                        combination of assorted Pizza and Utha alongside A unique combination of Utha and
                    assorted Pizza.</p>
                </div>


                {
                    //Here, we are passing in the props that has been passed from the MainComponent
                    //We have named it item and as such, we are passing item to the Card function component
                }
                <div style={CardContainer}>
                    <Card item={dish}
                        isLoading={props.dishesLoading}
                        errMsg={props.dishesErrMsg}
                    />
                    <Card item={promotion} />
                    <Card item={leader} />
                </div>
            </div>
        );
    }
}



//Below is a sample functional component that was later replaced by a class component
//NB: Take not of how props is passed in the class component above as against the method of passing 
//props in functonal component
//
//
// function Home(props) {
//     return (
//         <div style={{padding: '0'}}>
//             <div style={HomeTop}>
//                 <p style={{ lineHeight: '1.2', fontSize: '40px', margin: '0', fontWeight: '550' }}>Welcome to the <br/>Restorante Con Fusion</p>
//                 <p style={{ textAlign: 'justify', width: '50%', lineHeight: '1.5', margin: '0' }}>A unique combination of assorted Pizza and Utha alongside A unique combination of 
//                     Utha and assorted Pizza is our special promotion meal this season for a mouth 
//                     watering giveaway price of $1.99. It gives you best value for money A unique 
//                     combination of assorted Pizza and Utha alongside A unique combination of Utha and 
//                     assorted Pizza.</p>
//             </div>


//             {
//                 //Here, we are passing in the props that has been passed from the MainComponent
//                 //We have named it item and as such, we are passing item to the Card function component
//             }
//             <div style={CardContainer}>
//                 <Card item={props.dish} />
//                 <Card item={props.promotion} />
//                 <Card item={props.leader} />
//             </div>
//         </div>
//     )
// }

export default Home;