import React from 'react'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {PostAuthor} from "./PostAuthor";
import {TimeAgo} from "./TimeAgo";
import {} from 'date-fns'
import {ReactionButtons} from "./ReactionButtons";

export default function PostsList() {
    const posts = useSelector(state => state.posts)

    /**
     * 注意：由于会改变现有数组，我们需要 array.sort() 对该副本进行 state.posts 复制和排序。
     * posts.slice()
     */
    const sortPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = posts.map(post => {
        return (
            <article className="post-excerpt" key={post.id}>
                <h3>{post.title}</h3>
                <p className="post-content">{post.content.substring(0, 100)}</p>
                <Link to={`posts/${post.id}`} className="button muted-button">
                    View Post
                </Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
                <ReactionButtons post={post} />
            </article>
        )
    })

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}
