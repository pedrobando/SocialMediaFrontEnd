import { Row, Col, Card, Container } from "react-bootstrap/";



const UserProfile = (props) => {
    return (  

        <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`http://localhost:5050/${props.user.image}`}/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            firstName:
            lastName:
            christmasPreference:
            aboutMe:
          </Card.Text>
        </Card.Body>
      </Card>
  
    );
}
 
export default UserProfile;