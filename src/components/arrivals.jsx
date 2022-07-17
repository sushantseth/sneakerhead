
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function NewArrival(props) {

   
  return (
    <Card style={{ width: '21rem'}}>
      <Card.Img style={{height: '15rem'}} variant="top" src={props.src}/>
      <Card.Body>
        <Card.Title>{props.brand}</Card.Title>
        <Card.Text>
        &#x20b9; {props.cost}
        </Card.Text>
        <Button variant="dark">Add to  Cart</Button>
      </Card.Body>
    </Card>
    
  );
}
    
export default NewArrival;