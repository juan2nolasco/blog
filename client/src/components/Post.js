import React, { Component } from 'react'
import { createPost } from './functions'
// Vista para crear un nuevo post
class Post extends Component {
    constructor() {
        super()
        this.state = {
            post_content: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    // Se invoca cuando se crea el formulario.
    onSubmit (e) {
        e.preventDefault()

        const post = {
            post_content: this.state.post_content
        }
        // createPost crea un nuevo post.
        createPost(post).then(res => {
            if (res.status == 'success') {
                alert('Se creo de forma correcta el post');
            } else {
                alert('Ocurrio un error al crear el post.');
            }
        })
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Create a new post</h1>
                            <div className="form-group">
                                <label htmlFor="post_content">Post content</label>
                                <input type="text"
                                    className="form-control"
                                    name="post_content"
                                    placeholder="Enter post content"
                                    value={this.state.post_content}
                                    onChange={this.onChange}
                                />
                            </div>
                            <button type="submit"
                                className="btn btn-lg btn-primary btn-block">
                                Create
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post