import { Card, CardBody, CardImg, CardText, CardImgOverlay, CardTitle, Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProjectCard = ({ meal }) => {
    const { id, image, name, time, level, calories, disc } = meal;

    return (
        <Link className='NoDecorationCardText' to={`${id}`}>

            <Card className='hoverEff' 
            style={{ marginBottom: '20px', borderRadius: '0 0 10px 10px' }}
            >
                <CardTitle className='cardStyle m-0'>{name}</CardTitle>
                <CardBody className='cardStyleDark '>
                    <Row className=''>
                            <CardImg  style={{width:'100%', borderRadius:'8px'}} src={image} />
                    </Row>
                    <Row>
                            <CardText className='NoDecorationCardText m-0'> {disc} </CardText>
                    </Row>
                </CardBody>
            </Card>
        </Link>
    );
};

export default ProjectCard;