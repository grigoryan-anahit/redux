import Style from './posts.module.css';
import React from 'react';

const Posts =({posts})=>{
    const Posts=posts.map(post=>{
        return(
             <div className={Style.post} key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </div>
        )
    })
    return (
        <div>
            <h1>Posts Page</h1>
            <form action="#" className={Style.addPostForm}>
                <input type="text" name="post" placeholder="enter the title of your post"></input>
                <textarea type="text" rows="10" style={{resize:'none'}} placeholder="enter the body of your post"></textarea>
                <button type="submit">Add</button>
            </form>
            <div className={Style.postsWrapper}>
              {Posts}
            </div>
        </div>
    )
}
export default Posts;