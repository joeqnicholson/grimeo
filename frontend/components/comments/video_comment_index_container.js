import { connect } from 'react-redux'
import deleteComment from '../../comment_actions'
import CommentIndex from './video_comment_index'


const msp=state=>({
    comments: state.entities.comments
})
const mdp=dispatch=>({
    deleteComment: comment=>dispatch(deleteComment(comment))
})
export default connect(msp,mdp)(CommentIndex)