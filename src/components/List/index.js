import React from 'react';
import axios from 'axios';

import { Wrapper, Container }  from '../List/style';


export default class List extends React.Component {
    state = {
        Posts: [],
        Comments: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const Posts = response.data;
                this.setState({Posts});
            })
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(res => {
                const Comments = res.data;
                this.setState({Comments});
            })    
    }

    render() {
        return (
            <Wrapper>
                <Container>
                    {this.state.Posts.map((Posts,id) =>
                        <div key={id}>
                            <div>
                                <h1>{Posts.title}</h1>
                                <p>{Posts.body}</p>
                            </div>
                        </div>
                    )}
                    {this.state.Comments.map((Comments,postId) =>
                        <div key={postId}>
                            <h2>{Comments.name}</h2>
                            <h3>{Comments.email}</h3>
                            <p>{Comments.body}</p>
                        </div>
                    )}
                </Container>
            </Wrapper>  
        )
    }
}