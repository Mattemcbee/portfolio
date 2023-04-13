import { Card, CardBody, CardImg, CardText, CardImgOverlay, CardTitle, Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const ServiceCard = ({ meal }) => {
    const { id, image, image2, image3, name, time, level, calories, icon, disc } = meal;

    return (
        <Card className='serviceCard' style={{
            // height: '150px',
             marginBottom: '20px',
            borderRadius: '10px', border: '20px', borderColor: '#EAC7C7'
        }} >

            <CardTitle className='cardStyle m-0'>
                <Row className=' m-auto'>
                    <Col xs='2' className='m-auto textCenter' style={{ height: '100%', margin: 'none' }}>
                        <i className={icon} style={{ color: 'black' }} />
                    </Col>
                    <Col className='text-center  m-auto' xs='10'>
                        <CardTitle>{name}</CardTitle>

                    </Col>
                </Row>
            </CardTitle>
            <CardBody className='cardStyleDark' >
            <Row className='center'>

                <CardText className='NoDecorationCardText m-auto'> {disc} </CardText>
                </Row>
                <Row className='center' style={{marginTop:'10px'}}>

            <CardImg  style={{width:'20%', borderRadius:'8px'}} src={image} />
            <CardImg  style={{width:'20%', borderRadius:'8px'}} src={image2} />
            <CardImg  style={{width:'20%', borderRadius:'8px'}} src={image3} />

            </Row>
            </CardBody>
            
        </Card>
    );
};

export default ServiceCard;