import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import { selectFilteredRecipes, selectNumberOfFiltered, selectTotalNumberInRecipe, selectIngLength } from "../recipes/AddRecipeSlice";
import ServiceCard from "./ServiceCard";
import { selectAllRecipe } from "../recipes/AddRecipeSlice";
import { INGREDIENTS } from "../../app/shared/INGREDIENTLIST";
import { SKILLS } from "../../app/shared/SKILLS";

const ServiceList = () => {
  
  return (
    <Row className="m-auto text-center">
      {SKILLS.map((meal) => {
        return (
          <>
            <Col md='6' xs='12' className="center" key={meal.id}>
              <ServiceCard meal={meal} />
            </Col>
          </>
        );
      })}
    </Row>
  );
};

export default ServiceList;