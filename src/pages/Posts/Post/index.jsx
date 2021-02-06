import React, { memo } from 'react';
import style from '../posts.module.css';

const Post = ({ post, setEditablePost, deletePostById }) => {
    // console.log('Remder Post');
    return (
        <div className={style.post} key={post.id}>
            <i className={`fa fa-times ${style.timesIcon}`} onClick={() => deletePostById(post.id)}></i>
            <i className={`fas fa-pencil-alt ${style.pancilIcon}`} onClick={() => setEditablePost(post)} ></i>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
        </div>
    )
}

export default memo(Post);