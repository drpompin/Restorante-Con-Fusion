import React, { Component } from 'react';
import Menu from './MenuComponent';
// import { DISHES } from '../shared/dishes';
// import { COMMENTS } from '../shared/comments';
// import { PROMOTIONS } from '../shared/promotions';
// import { LEADERS } from '../shared/leaders';
import Contact from './ContactComponent';
import Home from './HomeComponent';
import DishDetail from './DishDetailComponent';
import AboutUsComponent from './AboutUsComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
//withRouter imported as above functions to connect the react component with redux.
//we are using it because we are using react-router
import Header from './HeaderComponent';
import { connect } from 'react-redux';
import Footer from './FooterComponent';
import { addComment, fetchDishes } from '../redux/ActionCreators';

//Before the introduction of redux, the state was managed from the mainComponent here.
//DISHES, COMMENTS, PROMOTIONS, LEADERS were imported from their respective locations, initialized in 
//the constructor as seen below and then, passed down as props.



//This mapStateToProps function functions to map the state of the redux store into props which will
//then become available to the components. We use connect also; (used at the bottom) to provide the 
//the mapStateToProps content to the Main component
const mapStateToProps = state => {
    //state above is the state coming from the store
    return {
        dishes: state.dishes,
        promotions: state.promotions,
        comments: state.comments,
        leaders: state.leaders
    };
}

//This dispatch function is responsible for the update to the state that was originally introduced 
//by the mapStateToProps function. This mapDispatchToProps function is also added to connect at the 
//bottom of this file to make it available to the MainComponent
const mapDispatchToProps = (dispatch) => ({
    //addComment action function below takes in the parameters to be updated and dispatch dispatches an update 
    //of the corresponding parameters. This function will be passed in as an attribute to DishDetail
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    
    //fetchDishes used here is a Thunk; hence, d reason it can be dispatched
    fetchDishes: () => {dispatch(fetchDishes())},
});





class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // dishes: DISHES,
            // promotions: PROMOTIONS,
            // comments: COMMENTS,
            // leaders: LEADERS, 
        };
    }

    // onDishSelect(dishId) {
    //     this.setState({
    //         selectedDish: dishId,
    //     });
    //     console.log('selectedDish========>', this.state.selectedDish);
    // }

    
    //componentDidMount is the perfect location to invoke the fetch dishes; as the lifecycle method is
    // is invoked just immediately after the component mounts
    componentDidMount() {
        this.props.fetchDishes();
    }




    render() {

        

        // console.log('dishes in maincomponent', this.state.dishes);
        // console.log('comments in maincomponent', this.state.comments);


        //Because of the introduction of redux, all appearances of this.state just like the one used in
        //this HomePage component below are changed to this.props as shown in the new Homepage component
        //Same thing is done for other components that use this.state; such as those un the routesprops
        // const HomePage = () => {
        //     return (
        //         <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        //             promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        //             leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        //         />
        //     );
        // }

        const HomePage = () => {
            return (
                <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMsg={this.props.dishes.ErrMsg}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }


        //In react-router, a component can accept match, location and history as params
        //We'll be using match here to match the exact dishId
        //The number 10 used in the parseInt syntax is just to specify base 10
        const DishWithId = ({match}) => {
            console.log('paramsparamsparams=====', match);
            return (
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMsg={this.props.dishes.ErrMsg}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                    addComment={this.props.addComment}  
                />
            );
        }
        

        return (

            <div >
                <Header />
                <div style={{ marginTop: '70px', width: '100% !important' }}>
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        {
                            //When using React router route, below is one way to pass components to 
                            //be routed to into the route component; Here, the props is passed directly.
                            //The other method which is used at the top by passing HomePage to the 
                            //component requires query requires HomePage to be created @ the top before being
                            //passed into the Route component


                            //Also, in order to display the dishdetail, another route is used just below 
                            //the route with path="/menu". This new path contains the dishdetail Id and does
                            //not have exact. This ensures that it gets rendered differently from the Route with
                            //path="/menu" as both Routes have /menu in their path
                        }
                        <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                        <Route path="/menu/:dishId" component={DishWithId} />}/>
    
    
    
                        <Route exact path="/aboutus" component={AboutUsComponent} />}/>
                        <Route exact path="/contactus" component={Contact} />}/>
                    {
                            //Redirect here is used to set a default location in the case where a 
                            //route cannot be found or rendered
                        }
                        <Redirect to="/home" />
                    </Switch>
                </div>
                <Footer />

                {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0] } /> */}
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

//array notation [0] is used above to denote the first occurence of dish.id == selectedDish;
//Although, there's only one occurence of it from d filter fxn, it helps ensure there are no errors
