import Style from './post.module.css';


const Post =({ post, setEditablePost, deletePost })=>{
   
        return(
           
             <div className={Style.post} >
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <i className={`fa fa-times ${Style.tiimesIcon}`} onClick={() => deletePost(post.id)}></i>
                    <i className={`fa fa-pencil-alt ${Style.pencilIcon}`} onClick={() => setEditablePost(post)} ></i>
                </div>
        )

}
export default Post;