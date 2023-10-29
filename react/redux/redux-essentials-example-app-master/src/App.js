import React, {Fragment} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'

import {Navbar} from './app/Navbar'
import PostsList from "./features/posts/postsList";
import AddPostForm from "./features/posts/AddPostForm";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";


function App() {
    return (
        <Router>
            <Navbar/>
            <div className="App">
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <Fragment>
                                <PostsList/>
                                <AddPostForm/>
                            </Fragment>
                        )}
                    />
                    <Route exact path='/posts/:postId' component={SinglePostPage}/>
                    <Route exact path='/editPost/:postId' component={EditPostForm}/>
                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    )
}

export default App
