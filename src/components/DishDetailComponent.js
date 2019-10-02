import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import { FormLabel, FormInput, ButtonStyle, FormFeedback } from './ContactComponent';
import { ModalHeader, FormForm, ModalBody, ModalRow } from '../shared/sharedStyles';


const leftStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    padding: '0 50px 50px',
    alignItems: 'center'
}

const rightStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    padding: '0 50px 50px '
}

const PageTitleStyle = {
    display: 'flex', 
    flexDirection: 'row', 
    // borderBottom: '2px solid', 
    alignItems: 'flex-start',
    padding: '0 50px',
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




    
    
function RenderDish({dish}) {
    console.log('dish in renderdish', dish);
        return (
            <div style={leftStyle}>
                <img src={dish.image} alt={dish.name} style={{ width: '100%'}} />
                <h1 style={{width: '100%', textAlign: 'left', marginBottom: '0'}}>{dish.name}</h1>
                <p style={{ textAlign: 'left'}}>{dish.description}</p>
            </div>
            
        )
    
}

function RenderComments({ props, openCommentModal }) {
        console.log('props in comments', props, openCommentModal);
        let comments = props.comments || {};

        return (
            <div style={rightStyle}>
                <h2 style={{textAlign: 'left', margin: '0'}}>Comments</h2>
                {
                    comments === undefined ?
                        <div></div>

                        :
                        
                        
                        
                        comments.map((comment, id) => {
                            return (
                                <div key={id}>
                                    <p style={{ textAlign: 'left' }}>{comment.comment}</p>

                                    <p style={{ textAlign: 'left' }}>--{comment.author}, {comment.date}</p>
                                    
                                </div>
                            );
                        })
                }
                <button onClick={openCommentModal} style={ButtonStyle}>&#9998; Submit Comment</button>                    
            </div>
        )
}








class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
            comment: '',
            rating: 1,
            username: '',
            touched: {
                username: false,
            }
        }

        this.openCommentModal = this.openCommentModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    openCommentModal() {
        this.setState({
            openModal: !this.state.openModal,
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            //Array Destructuring is used here, Instead of writing this.state.username: username.value, 
            //this.state.comment: comment.value .etc., we use array destructuring by using [name] to represent the
            //selected state and value returns the value
            [name]: value,
        })
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
    validate(username) {
        // we create an error object containing the initial message of the parameters state which is 
        //an empty string; and if there is an error, a set error message will be displayed
        const errors = {
            username: '',
        }

        //Below, we define set validations for different fields; taking the state of touched and combining
        //it with whatever preferences we have for our our fields; error messages are also defined
        if (this.state.touched.username && username.length < 3)
            errors.username = "Username should be >= 3 characters";
        else if (this.state.touched.username && username.length > 20)
            errors.username = "Username should be <= 20 characters";

        return errors;
    }

    handleSubmit(event) {
        alert('Deatils in the form' + JSON.stringify(this.state));
        event.preventDefault();

        //Additon of the openCommentModal function which toggles the modal state is to ensure that the
        //modal closes after submission
        this.openCommentModal();
    }


    render() {
        //The validate function would be invoked in the render because everytime there is a change in
        //the input field, the form will be rerendered; Hence, that would be an appropriate time to carry
        //out the check
        const errors = this.validate(this.state.username);



        //this helped when I couldn't get "let dish = this.props" to render dish object 
        // in the return statement. Then, dish.name returned undefined in the console
        console.log('new props in dishdetail', this.props);
        let props = this.props;
        let dish = props.dish || {};
        const { openModal } = this.state;
        // let comment = props.comments || {};

        console.log('props in DishDetail', props)

        return (
            <div>
                {
                    dish !== null || dish !== undefined ? 
                
                    <div style={{ width: '100%', clear: 'both', textAlign: 'center', }}>
                        <div style={PageTitleStyle}>
                            <Link style={TitleLink} to={"/menu"}><h3 style={{ margin: '0' }}>Menu</h3></Link>
                            <h3 style={{ margin: '0', padding: '10px 5px', background: '#f3f0f0', }}>/</h3>
                            <h3 style={TitleName}>{dish.name}</h3>
                        </div>

                        <h1 style={{ textAlign: 'left', padding: '0 50px' }}>
                            {dish.name}
                            <hr />
                        </h1>

                        <br />
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <RenderDish dish={dish} />
                                <RenderComments openCommentModal={this.openCommentModal} props={props} />
                        </div>
                    </div>
                    : ''
            
                }

                {
                    this.state.openModal === true ? 
                        <Modal open={openModal} onClose={this.openCommentModal} center>
                            <FormForm onSubmit={this.handleSubmit}>
                                <ModalHeader>Submit Comment</ModalHeader>
                                <ModalBody style={{width: '400px'}}>
                                    <ModalRow>
                                        <i style={FormLabel}>Rating</i>
                                        <select type="select" name="rating" value={this.state.rating}
                                            onChange={this.handleInputChange} style={FormInput}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </ModalRow>
                                    <ModalRow>
                                        <i style={FormLabel}>Your Name</i>
                                        <input type="text" id="username" name="username"
                                            placeholder="Username"
                                            style={FormInput}
                                            onChange={this.handleInputChange}
                                            onBlur={this.handleBlur('username')}
                                            //Valid and Invalid here is used to set valid flag so that
                                            //if the field is not valid, the corresponding error will
                                            //be set appropriately 
                                            valid={errors.username === ''}
                                            invalid={errors.username !== ''}
                                        />
                                        <div style={FormFeedback}>{errors.username}</div>
                                    </ModalRow>

                                    <ModalRow>
                                        <i style={FormLabel}>Comment</i>
                                        <textarea type="textarea" id="comment" name="comment"
                                            placeholder="Comment" value={this.state.comment}
                                            onChange={this.handleInputChange} style={{minHeight: '140px'}} />
                                    </ModalRow>

                                    

                                    

                                    <button style={ButtonStyle} type="submit" value="submit">Submit</button>
                                </ModalBody>
                            </FormForm>
                        </Modal>
                        : ''
                }
            </div>
        );

        
    }
}







// const DishDetail = (props) => {
    
//     //this helped when I couldn't get "let dish = this.props" to render dish object 
//     // in the return statement. Then, dish.name returned undefined in the console
//     let dish = props.dish || {};
//     let comment = props.comments || {};

//     console.log('props in DishDetail', props)
    
//     if (dish !== null || dish !== undefined) {
//         return (
//             <div style={{ width: '100%', clear: 'both', textAlign: 'center', }}>
//                 {/* <div style={containerStyle}>
//                     <div style={leftStyle}>
//                         <img src={dish.image} alt={dish.name} style={{ width: '70%',}} />
//                         <h1 style={{width: '100%'}}>{dish.name}</h1>
//                         <p><i>{dish.description}</i></p>
//                     </div>

//                     <div style={rightStyle}>
//                         {
//                             dish.comments === undefined ?
//                             <div></div>

//                             :
//                         dish.comments.map((comment) => {
//                             return (
//                                 <div>
//                                     <div>{comment.comment}</div>

//                                     <div>--{comment.author}, {comment.date}</div>

//                                     <br />
//                                 </div>
//                             );
//                         })
//                         }
//                     </div>
//                 </div> */}
                
                
                
//                 <div style={PageTitleStyle}>
//                     <Link style={TitleLink} to={"/menu"}><h3 style={{ margin: '0' }}>Menu</h3></Link>
//                     <h3 style={{ margin: '0', padding: '10px 5px', background: '#f3f0f0',}}>/</h3>
//                     <h3 style={TitleName}>{dish.name}</h3>
//                 </div>

//                 <h1 style={{textAlign: 'left', padding: '0 50px'}}>
//                     {dish.name}
//                     <hr />
//                 </h1>
                
//                 <br />
//                 <div style={{ display: 'flex', flexDirection: 'row'}}>
//                     <RenderDish dish={dish} />
//                     <RenderComments comments={comment} />
//                 </div>
//             </div>
//         );
//     }
// }


export default DishDetail;