import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import { FormLabel, FormInput, FormFeedback, MessageInput } from './ContactComponent';
import { ModalHeader, ModalBody, ModalRow, Button } from '../shared/sharedStyles';
import { Control, LocalForm, Errors } from 'react-redux-form';


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
    // console.log('dish in renderdish', dish);
        return (
            <div style={leftStyle}>
                <img src={dish.image} alt={dish.name} style={{ width: '100%'}} />
                <h1 style={{width: '100%', textAlign: 'left', marginBottom: '0'}}>{dish.name}</h1>
                <p style={{ textAlign: 'left'}}>{dish.description}</p>
            </div>
            
        )
    
}

function RenderComments({ comments, addComment, dishId }) {
        
        return (
            <div style={rightStyle}>
                <h2 style={{textAlign: 'left', margin: '0'}}>Comments</h2>
                {
                    comments !== undefined ?

                        comments.map((comment, id) => {
                            return (
                                <div key={id}>
                                    <p style={{ textAlign: 'left' }}>{comment.comment}</p>

                                    <p style={{ textAlign: 'left' }}>-- {comment.author}, {comment.date}</p>
                                    
                                </div>
                            );
                        })
                        :
                        
                        <div></div>

                }
                <CommentForm 
                    dishId={dishId}
                    addComment={addComment}
                    // toggleCommentModal={this.toggleCommentModal}
                />
            </div>
        )
}

const required = (val) => val && val.length;

//maxLength takes len and then val and endures that the length of the value entered in the input box 
//is less than a certain value
const maxLength = (len) => (val) => !(val) || (val.length <= len);

//minLength also tests for minimum length
const minLength = (len) => (val) => (val) && (val.length >= len);


class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
        }

        this.toggleCommentModal = this.toggleCommentModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleCommentModal() {
        this.setState({
            openModal: !this.state.openModal,
        });
    }


    
    handleSubmit(values) {
        
        this.toggleCommentModal();
        console.log('details in form submit', values);
        alert('Details in the form' + JSON.stringify(values));
        //Additon of the toggleCommentModal function which toggles the modal state is to ensure that the
        //modal closes after submission
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
        // event.preventDefault();
    }
    

    render() {
        const { openModal } = this.state;

        return (
            <div>
                <Button onClick={this.toggleCommentModal} style={{float: 'left'}}>&#9998; Submit Comment</Button>                    

                {
                    this.state.openModal === true ?
                        <Modal open={openModal} onClose={this.toggleCommentModal} center>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <ModalHeader>Submit Comment</ModalHeader>
                                <ModalBody style={{ width: '400px' }}>
                                    <ModalRow>
                                        <i style={FormLabel}>Rating</i>
                                        <Control.select model=".rating" name="rating" style={FormInput}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                    </ModalRow>

                                    <ModalRow>
                                        <i style={FormLabel}>Your Name</i>
                                        <Control.text model=".author" id="author" name="author"
                                            style={FormInput}
                                            validators={{
                                                required,
                                                minLength: minLength(3),
                                                maxLength: maxLength(15),
                                            }}
                                        />
                                        <Errors
                                            style={FormFeedback}
                                            model=".username"
                                            show="touched"
                                            //messages below displays the messages that need to be 
                                            //displayed when the conditions on the left are true
                                            messages={{
                                                required: "Required! ",
                                                minLength: "Must be greater than 2 characters! ",
                                                maxLength: "Must be 15 characters or less! ",
                                            }}
                                        />
                                    </ModalRow>

                                    <ModalRow>
                                        <i style={FormLabel}>Comment</i>
                                        <Control.textarea model=".comment" id="comment" name="comment"
                                            style={MessageInput} />
                                    </ModalRow>





                                    <Button type="submit" value="submit">Submit</Button>
                                </ModalBody>
                            </LocalForm>
                        </Modal>
                        : ''
                }
            </div>
        );
    }
}







class DishDetail extends Component {
    
    


    render() {
        
        //this helped when I couldn't get "let dish = this.props" to render dish object 
        // in the return statement. Then, dish.name returned undefined in the console
        let props = this.props;
        let dish = props.dish || {};
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
                            <RenderComments  comments={props.comments}
                                addComment={props.addComment} dishId={props.dish.id}
                            />
                        </div>
                    </div>
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