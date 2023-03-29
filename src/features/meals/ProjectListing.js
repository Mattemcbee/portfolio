import { Card, CardImg, CardText, CardBody, Col, Row, Container } from 'reactstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const ProjectListing = ({ meal }) => {

    const { image, image2, name, git, time, level, recipeOut, calories, ingredients, disc } = meal;

    return (

        <Col xs={{ size: '7', offset: '1' }} md={{ size: '6', offset: '0' }} className='mt-10'>
            <Card className='cardStyle NoDecorationCardText' style={{borderRadius:'10px'}}>
                <CardBody className='cardStyle NoDecorationCardText text-center'>
                    <Container>
                        <Row>
                            <h3 style={{color:'black'}}>About the {name} project</h3>
                        </Row>
                    </Container>
                </CardBody>
                <CardBody style={{color:'black'}} className='cardRecipeStyle text-center'>
                    {disc}
                    <p className='hoverEff'>{git}</p>
                </CardBody>

            </Card>
        </Col>
    );
};

export default ProjectListing;