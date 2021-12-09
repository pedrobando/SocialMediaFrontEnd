import { Row, Col, Card, Container } from "react-bootstrap/";



const UserProfile = (props) => {
    return (  

        <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`http://localhost:5050/${props.user.image}`}/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            First Name: {`${props.user.firstName}`}<br/>
            Last Name: {`${props.user.lastName}`}<br/>
            Christmas Preference: {`${props.user.christmasPreference}`}<br/>
            About Me: {`${props.user.aboutMe}`}
          </Card.Text>
        </Card.Body>
      </Card>
  
    );
}
 
export default UserProfile;