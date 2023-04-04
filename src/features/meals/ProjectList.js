import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import { selectFilteredRecipes, selectNumberOfFiltered, selectTotalNumberInRecipe, selectIngLength } from "../recipes/AddRecipeSlice";
import ProjectCard from "./ProjectsCard";
import { selectAllRecipe } from "../recipes/AddRecipeSlice";
import { INGREDIENTS } from "../../app/shared/INGREDIENTLIST";
import { PROJECTS } from "../../app/shared/PROJECTS";

const ProjectList = () => {
  
  return (
    <Row className="ms-auto">
      {PROJECTS.map((meal) => {
        return (
          <>
            <Col  className='m-20px'  xs='12' key={meal.id}>
              <ProjectCard meal={meal} />
            </Col>
            

          </>
        );
      })}
    </Row>
  );
};

export default ProjectList;