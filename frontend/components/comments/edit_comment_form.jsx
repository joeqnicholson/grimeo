import React from 'react'
import { createComment } from '../../actions/comment_actions';

class EditCommentForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id: this.props.comment.id,
            user_id: this.props.userId,
            video_id: this.props.videoId,
            body: '', 
            edited : false
            }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateState = this.updateState.bind(this)
        this.edited = this.edited.bind(this)
    }
    updateState(field) {
        return (e) => {
          this.setState({ [field]: e.target.value });
        };
      }
    edited(boolean){
        this.setState(()=>({edited: boolean}))
    }
    handleSubmit(e){
        e.preventDefault();

        const comment = Object.assign({}, this.state);
        this.props.updateComment(comment).then(this.edited(true))
    }


    render(){
        return(
            <div class='edit-form-master'>
                {
                    this.state.edited === false ? 
                    <div class='comment-form-wrapper'>
                        <div class='comment-form-user-icon-box'>
                            <div class='comment-form-user-icon'></div>
                        </div>
                        <div class='comment-form-prompt-and-body'> 
                            <form onSubmit={this.handleSubmit}>
                                <input 
                                type="text" 
                                class='comment-form-body'
                                value={this.state.body}
                                onChange={this.updateState('body')} 
                                />
                                
                                    <div class='add-comment-wrapper'>
                                        <button class='edit-comment-submit'type='submit' >Edit</button>
                                        <button class='cancel-edit'onClick={()=>this.edited(true)}>Cancel</button>
                                        <div class='rememeber'>Remember to be cool and play nice!</div>
                                    </div>
                            </form>
                        </div>
                </div>
                :
                <div class='edit-instead'>
                    <div>{this.state.body}</div>
                </div>

                }
                
            </div>
        )



    }
}
export default EditCommentForm;