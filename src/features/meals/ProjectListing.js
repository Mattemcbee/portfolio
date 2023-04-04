import { Card, CardImg, CardText, CardBody, Col, Row, Container } from 'reactstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const ProjectListing = ({ meal }) => {

    const { image, image2, name, git, time, level, recipeOut, calories, ingredients, disc } = meal;

    return (

        <Col xs={{ size: '10', offset: '1' }} md={{ size: '6', offset: '0' }} className='mt-100'>
            <Card className='cardStyle NoDecorationCardText' style={{borderRadius:'10px', marginTop:'10px'}}>
                <CardBody className='cardStyle NoDecorationCardText text-center' style={{borderRadius:'10px 10px 0 0'}}>
                    {/* <Container> */}
                        <Row>
                            <h3 style={{color:'black'}}>About the {name} project</h3>
                        </Row>
                    {/* </Container> */}
                </CardBody>
                <CardBody style={{color:'black', borderRadius:'10px'}} className='cardRecipeStyle text-center'>
                    {disc}
                    <p className='hoverEff'>{git}</p>
                </CardBody>

            </Card>
        </Col>
    );
};

export default ProjectListing;