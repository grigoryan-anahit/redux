import Style from './post.module.css';
import {dispatch} from "../../../store/store";

const Post =({post})=>{
    const deleteAction={
                    type:'deletePost',
                    id:post.id
            }
        return(
           
             <div className={Style.post} key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <i className={`fa fa-times ${Style.tiimesIcon}`} onClick={()=>dispatch(deleteAction)}></i>
                    <i className={`fa fa-pencil-alt ${Style.pencilIcon}`} onClick={()=>dispatch({type:'openModal'})}></i>
                </div>
        )

}
export default Post;