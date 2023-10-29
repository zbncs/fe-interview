import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postUpdate} from "./postsSlice";
import {useHistory} from "react-router-dom";

export default function EditPostForm({match}) {
    const {postId} = match.params

    const post = useSelector(state => state.posts.find(p => p.id === postId))

    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const dispatch = useDispatch()
    const history = useHistory()

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postUpdate({
                id: postId,
                title,
                content
            }))

            history.push(`/posts/${postId}`)
        }
    }

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button type="button" onClick={onSavePostClicked}>Save Post</button>
            </form>
        </section>
    )
}
