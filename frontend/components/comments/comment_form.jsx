import React from 'react'
import { createComment } from '../../actions/comment_actions';

class CommentForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user_id: this.props.userId,
            video_id: this.props.videoId,
            body: '' 
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateState = this.updateState.bind(this)
    }
    updateState(field) {
        return (e) => {
          this.setState({ [field]: e.target.value });
        };
      }
    handleSubmit(e){
        e.preventDefault();
        debugger
        const comment = Object.assign({}, this.state);
        this.props.createComment(comment).then(()=>this.setState({body: ''}));
        
    }


    render(){
        return(
            <div class='comment-form-wrapper'>
                <div class='comment-index-user-icon-wrapper'><i class="far fa-user-circle comment-index-user-icon"></i></div>
                <div class='comment-form-prompt-and-body'> 
                    <div class='add-a-new-comment'>Add a new comment</div>
                        <form onSubmit={this.handleSubmit}>
                            <textarea 
                            class='comment-form-body'
                            value={this.state.body}
                            placeholder='Add a comment'
                            onChange={this.updateState('body')} 
                            />
                            {
                                this.state.body !== '' ?
                                <div class='add-comment-wrapper'>
                                    <button class='submit-comment'type='submit'>Add Comment</button>
                                    <div class='remember'>Remember to be cool and play nice!</div>
                                </div>
                                :
                                <div></div>
                            }
                        </form>
                </div>

            </div>
        )



    }
}
export default CommentForm;