import Style from './posts.module.css';
import React, { useRef } from 'react';
import {dispatch} from "../../store/store";

const Posts =({posts})=>{
    const Posts=posts.map(post=>{
        return(
             <div className={Style.post} key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </div>
        )
    })
    const titleRef=useRef();
    const bodyRef=useRef();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const title=titleRef.current.value;
        const body=bodyRef.current.value;
        if(title.length<1 || body.length<1) return 
        
        const action={
            type:'addPost',
            title,
            body
        }
        return dispatch(action);

    }
    return (
        <div>
            <h1>Posts Page</h1>
            <form action="#" className={Style.addPostForm}>
                <input  className={Style.addPostFormComp} type="text" name="post" placeholder="enter the title of your post" ref={titleRef} ></input>
                <textarea className={Style.addPostFormComp} type="text" rows="10" style={{resize:'none'}} placeholder="enter the body of your post" ref={bodyRef} ></textarea>
                <button className={Style.addPostFormComp} type="submit" onClick={handleSubmit}>Add</button>
            </form>
            <div className={Style.postsWrapper}>
              {Posts}
            </div>
        </div>
    )
}
export default Posts;