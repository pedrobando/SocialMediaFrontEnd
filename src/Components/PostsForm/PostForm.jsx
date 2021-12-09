import React from "react";
import { Form, Button } from "react-bootstrap";

const PostForm = (props) => {
    const newPost = props.newPost;
    const handleAddPost = (e) => {
        e.preventDefault();
   
        const postData={
            description: e.target[0].value,
            //image: e.target[0].image
        }
      
        newPost(postData, props.user, props.jwt);

    }


    return ( 
        <div className="postForm">
        <h5> Add Post</h5>
        <Form onSubmit={handleAddPost}>
            <Form.Control as="textarea" controlId="textarea"/>
            <Form.Control controlId="image" type="file" accept=".jpg,.jpeg,.png"/>
            <Button variant="primary" size="lg" type="submit">
                    Add Post
                  </Button>
        </Form>
        </div>

     );
}
 
export default PostForm;