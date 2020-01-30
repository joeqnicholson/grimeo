import React from 'react'
import { createComment } from '../../actions/comment_actions';

class EditCommentForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id: this.props.comment.id,
            user_id: this.props.userId,
            video_id: this.props.videoId,
            body: this.props.comment.body, 
            closeForm : false
            }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateState = this.updateState.bind(this)
        this.closeForm = this.closeForm.bind(this)
    }
    updateState(field) {
        return (e) => {
          this.setState({ [field]: e.target.value });
        };
      }
    closeForm(boolean){
        this.setState(()=>({closeForm: boolean}))
    }
    handleSubmit(e){
        e.preventDefault();
        const comment = Object.assign({}, this.state);
        this.props.updateComment(comment).then(this.closeForm(true)).then(this.props.editSwitch(false))
    }


    render(){
        return(
            <div class='edit-form-master'>
                {
                    this.state.closeForm === false ? 
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
                                        <button class='edit-comment-submit'type='submit'>Edit</button>
                                        <button class='cancel-edit'onClick={()=>this.closeForm(true)}>Cancel</button>
                                    </div>
                            </form>
                        </div>
                </div>
                :
                <div class='comment-body'>
                    <div class='comment-body'>{this.state.body}</div>
                </div>

                }
                
            </div>
        )



    }
}
export default EditCommentForm;