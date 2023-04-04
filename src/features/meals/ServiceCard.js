import { Card, CardBody, CardImg, CardText, CardImgOverlay, CardTitle, Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const ServiceCard = ({ meal }) => {
    const { id, image, name, time, level, calories, icon, disc } = meal;

    return (
        <Card className='serviceCard' style={{
            height: '150px', marginBottom: '20px',
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
                <CardText className='NoDecorationCardText m-auto'> {disc} </CardText>
            </CardBody>
        </Card>
    );
};

export default ServiceCard;