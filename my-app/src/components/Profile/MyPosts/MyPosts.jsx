import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    return <div className={s.content}>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Add post</button>

        <div className={s.posts}>

          <Post message='hi my first post' />
          <Post message='hi my second post' />


        </div>
    </div>
}

export default MyPosts;
