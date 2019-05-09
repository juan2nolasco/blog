import axios from 'axios'

// Crea un nuevo post
export const createPost = newPost => {
    return axios.post('post/', {
        post_content: newPost.post_content
    }).then(res => {
        return res.data;
    });
}

// Crea un nuevo response
export const createResponse = newResponse => {
    return axios.post('response/', {
        post_id: newResponse.post_id,
        response_content: newResponse.response_content
    }).then(res => {
        return res.data;
    });
}

// Obtiene todos los post
export const getPosts = () => {
    return axios.get('post/').then(res => {
        return res.data;
    });
}