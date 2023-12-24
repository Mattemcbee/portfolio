import { Card, CardBody, CardImg, CardText, CardImgOverlay, CardTitle, Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import ProjectDetailsPreview from './ProjectDetailsPreview';

const ProjectCard = ({ meal }) => {
    const { id, image, image2, name,technologies, time, level, calories, disc } = meal;

    return (
        <Link className='NoDecorationCardText' to={`${id}`}>

            <Card className='hoverEff' 
            style={{ marginBottom: '20px', borderRadius: '0 0 10px 10px' }}
            >
                <CardTitle className='cardStyle m-0'>{name}</CardTitle>
                <CardBody className='cardStyleDark p-50 fluid '>
                    
                    <Row className='center fluid mx-auto' style={{height:'100%'}}>
                            {/* <CardImg  style={{width:'100%', borderRadius:'8px'}} src={image} /> */}
                            <ProjectDetailsPreview meal={meal} style={{height:'10%'}}/>
                    </Row>
                    <br/>
                    <Row>
                            <CardText className='NoDecorationCardText m-0' > {disc}  </CardText>
                    </Row>
                    <br/>
                    <Row>
                            <CardText className='NoDecorationCardText m-0'> Technologies: {technologies} </CardText>
                    </Row>
                </CardBody>
            </Card>
        </Link>
    );
};

export default ProjectCard;