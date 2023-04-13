import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectRecipeById } from '../features/meals/MealsSlice';
import ProjectDetails from '../features/meals/ProjectDetails';
import RecipeListFormat from '../features/recipes/RecipeList';
import { selectMealById } from '../features/meals/MealsSlice';
import ProjectListing from '../features/meals/ProjectListing';
import Header from '../components/Header';
import { useState } from "react";
import { useSpring, animated } from 'react-spring'
import { useEffect } from 'react';
import SideNav from '../features/meals/Sidebar';

const ProjectDetailPage = () => {
    const { mealId } = useParams();
    const meal = selectMealById(mealId);
    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
      opacity: toggle ? 1 : 0,
      from: { opacity: "0" },
      
      to: [
        { opacity: "1" },
      ],
      config: { duration: 1000 }
    });
    const animatedStyle2 = useSpring({
      from: { transform: "translateY(100%)" },
      to: [
        { transform: "translateY(0%)" },
      ],
      config: { duration: 500 }
  });
    
    useEffect(() => {
      setToggle(true);
    }, []);
    return(
        <Container fluid  className='homeBackground3'>
            <Header />
            <Row>
                <h1>{meal.name}</h1>
                <ProjectDetails meal={meal} />
                <ProjectListing meal={meal} />
              
            </Row>
        </Container>
    );
};

export default ProjectDetailPage;