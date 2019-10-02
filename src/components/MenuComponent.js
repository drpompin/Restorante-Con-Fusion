import React from 'react';
import { Link } from 'react-router-dom';


const row = {
    width: '100%',
    // padding: '50px 20px',
    display: 'flex',
    flexWrap: 'wrap',
};

const spanAll = {
    border: '2px solid #baa4d1',
    margin: '17.5px',
    borderRadius: '5px',
    width: '47%',
    // minHeight: '300px',
};

const nameStyle = {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '20px',
};

const imageStyle = {
    width: '100%',
    height: '340px',
};

const liStyle = {
    display: 'flex',
    padding: '20px',
    flexDirection: 'column',
};

const dishName = {
    fontSize: '40px',
};

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
// In situations of stateless components, it is best to use functional components in react
//As such, the MenuComponent will be converted to a stateless functional component as shown below


//We are supposed to pass in props as parameter to the component but if the props are known,
//then they can be passed in directly as seen below
// function RendermenuItem ({dish, onClick}) {
//     return (
//         <li style={liStyle} onClick={() => { onClick(dish.id) }}>
//             <img src={dish.image} alt={dish.name} style={imageStyle} />

//             <div style={nameStyle}>
//                 <div style={dishName}>{dish.name}</div>
//                 <p>{dish.description}</p>
//             </div>
//         </li>
//     );
// }






//Using React Router, The code below replicates the RenderMenuItem component commented out above
//React-router-dom Link item is used to pass props down to the RenderMenuItem component so, we can 
//access the DishComponent on click of any dish in the Menu Component

function RendermenuItem({ dish }) {
    return (
        <Link to={`/menu/${dish.id}`} style={{textDecoration: 'none'}}>
            <li style={liStyle} >
                <img src={dish.image} alt={dish.name} style={imageStyle} />

                <div style={nameStyle}>
                    <div style={dishName}>{dish.name}</div>
                    {/* <p>{dish.description}</p> */}
                </div>
            </li>
        </Link>
        
    );
}


//Another method of creating a stateless component is shown below
const Menu = (props) => {
    console.log('props in menu component', props);

    // const menu = this.props.dishes.map((dish) => {

    //Instead of using this.props for const menu as shown above, only props is used as props has been passed
    //to the Menu function
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} style={spanAll} >
                {
                    //Here, the dish parameter passed to the RenderMenuItem is from d dish
                    //in the the map function applied to dishes in const menu 5lines above
                    //Similarly, onClick is passed in as props.onClick where it references the 
                    //onClick function in the MainComponent
                    //<RendermenuItem dish={dish} onClick={props.onClick} />
                }


                {
                    //The onClick function as seen above is removed from the RenderMenuItem to allow
                    //for react-render-dom Link to be used to display DishComponent
                }
                <RendermenuItem dish={dish} />
            </div>
        );
    });

    return (
        // <React.Fragment>
            <div style={{padding: '0 50px'}}>
                <div style={PageTitleStyle}>
                    <Link style={TitleLink} to={"/home"}><h3 style={{ margin: '0' }}>Home</h3></Link>
                    <h3 style={{ margin: '0', padding: '10px 5px', background: '#f3f0f0', }}>/</h3>
                    <h3 style={TitleName}>Menu</h3>
                </div>
                <h1>Menu</h1>
                <hr />
                <br />


                <div style={row}>
                    {menu}
                </div>
            </div>

            
                //<DishDetail dish={this.state.selectedDish} />
                //dish is passed to the DishDetail component here as seen above; its a parent to child to grandchild passing of props flow
                //i.e. the dishes data originally came from App/Main component, to the Menu component and now to d DishDetail component
            
        /* </React.Fragment> */
    );
}

export default Menu;