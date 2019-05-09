import React, { Component } from 'react'
import { getPosts } from './functions'
import { createResponse } from './functions'

class Response extends Component {
    constructor() {
        super()
        this.state = {
            response_content: '',
            post_id: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const response = {
            post_id: this.state.post_id,
            response_content: this.state.response_content
        }

        createResponse(response).then(res => {
            if (res.status == 'success') {
                alert('Se creo de forma correcta la respuesta.')
            } else {
                alert('Ingresa un post id valido.')
            }
        })
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Create a new response</h1>
                            <div className="form-group">
                                <label htmlFor="post_id">Post id</label>
                                <input type="text"
                                    className="form-control"
                                    name="post_id"
                                    placeholder="Enter a post id"
                                    value={this.state.post_id}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="response_content">Response</label>
                                <input type="text"
                                    className="form-control"
                                    name="response_content"
                                    placeholder="Enter a response"
                                    value={this.state.response_content}
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

export default Response