import { Row, Col, Card, Button} from "react-bootstrap/";
import React from "react";
import PostForm from "../PostsForm/PostForm";

const Posts = (props) => {
  const handleLike = (e) => {
      props.like({
          like: e.like +1,
      }, props.user)
  }
    // const posts = props.posts.map((post) => (
    //         <li>
    //             <p>{posts.description}</p>
    //             <img src={`http://localhost:5050/${post.image}`}/>
    //             <Button variant="primary" onClick={() => handleLike(post)}>Like</Button>
    //         </li>
    // ))
    return ( 
        <Col md={8}>
            <PostForm newPost={props.newPost} user={props.user} jwt={props.jwt}/>
           <ul>
               {/* {posts} */}
           </ul>
           
        </Col>
     );
}
 
export default Posts;