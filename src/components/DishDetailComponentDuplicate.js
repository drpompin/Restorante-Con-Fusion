import React, { Component } from 'react';


const leftStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    padding: '50px',
    alignItems: 'center'
}

const rightStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    padding: '50px '
}






class DishDetail extends Component {

    componentDidMount() {
        console.log('Componentdidmount in DishDetailComponent');
    }

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    
    
    
    renderDish(dish) {
        console.log('dish in renderdish', dish);
        if (dish !== null || dish !== undefined) {
            return (
                <div style={leftStyle}>
                    <img src={dish.image} alt={dish.name} style={{ width: '70%', }} />
                    <h1 style={{width: '100%', textAlign: 'left', marginBottom: '0'}}>{dish.name}</h1>
                    <p style={{ textAlign: 'left'}}>{dish.description}</p>
                </div>
                
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    renderComments(dish) {
    if (dish !== null || dish !== undefined) {
        return (
            <div style={rightStyle}>
                {
                    dish.comments === undefined ?
                        <div></div>

                        :
                        dish.comments.map((comment, id) => {
                            return (
                                <div key={id}>
                                    <p style={{ textAlign: 'left' }}>{comment.comment}</p>

                                    <p style={{ textAlign: 'left' }}>--{comment.author}, {comment.date}</p>
                                    {/* <p style={{ textAlign: 'left' }}>--{comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p> */}

                                    <br />
                                </div>
                            );
                        })
                }
            </div>
        )
    }
}

    render() {
        console.log('render in DishDetailComponent');
        
        //this helped when I couldn't get "let dish = this.props" to render dish object 
        // in the return statement. Then, dish.name returned undefined in the console
        let dish = this.props.dish || {}; 

        
        return (
            <div style={{ width: '100%', clear: 'both', textAlign: 'center', display: 'flex', flexDirection: 'row'}}>
                {/* <div style={containerStyle}>
                    <div style={leftStyle}>
                        <img src={dish.image} alt={dish.name} style={{ width: '70%',}} />
                        <h1 style={{width: '100%'}}>{dish.name}</h1>
                        <p><i>{dish.description}</i></p>
                    </div>

                    <div style={rightStyle}>
                        {
                            dish.comments === undefined ?
                            <div></div>

                            :
                        dish.comments.map((comment) => {
                            return (
                                <div>
                                    <div>{comment.comment}</div>

                                    <div>--{comment.author}, {comment.date}</div>

                                    <br />
                                </div>
                            );
                        })
                        }
                    </div>
                </div> */}
                {this.renderDish(dish)}
                {this.renderComments(dish)}
            </div>
        );
    }
}

export default DishDetail;