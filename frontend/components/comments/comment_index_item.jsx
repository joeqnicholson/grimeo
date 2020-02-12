import React from 'react';
import { Link } from 'react-router-dom';
import EditCommentForm from './edit_comment_form'


// comment={comment}
// deleteComment = {this.props.deleteComment}
// currentUser = {this.props.user}
// video = {this.props.video}/>

class CommentIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            edit: false
        }
        this.editSwitch = this.editSwitch.bind(this)
    }
    editSwitch(boolean){
        this.setState(()=>({edit: boolean}))
    }
    

    render(){
        return(
            <div class='comment-index-item'>
            <div class='comment-index-user-icon-wrapper'><i class="far fa-user-circle comment-index-user-icon"></i></div>
            <div class='comment-index-name-and-body'>
                <div class='name-and-buttons'>
                <Link class='comment-username' to={`/user/${this.props.comment.user_id}`}>{this.props.user.username}</Link>
                {
                    this.props.comment.user_id === this.props.currentUser.id ?
                    <div class='logged-in-comment-buttons'>
                        <div ><button class='edit-comment' onClick={()=>this.editSwitch(true)}>Edit </button></div>
                        <div class='thingy'>|</div>
                        <div ><button class='delete-comment' onClick={()=>this.props.deleteComment(this.props.comment.id)}> Delete</button></div>
                    </div> :
                    <div></div>
                }
                </div>
                {
                    this.state.edit === false ? 
                        <div class='comment-body'>{this.props.comment.body}</div> :
                        <div>
                            <EditCommentForm
                                comment={this.props.comment}
                                videoId ={this.props.video.id}
                                userId = {this.props.currentUser.id}
                                updateComment = {this.props.updateComment}
                                editSwitch = {this.editSwitch}
                                key={this.props.comment.id}/>
                        </div>
                }
                
            </div>
        </div>
        )

    }

    
}
export default CommentIndexItem;