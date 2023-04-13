import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/AboutPage';
// import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
// import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import './App.css';
import HomePage from './pages/HomePage';
import MealsDirectoryPage from './pages/MealsDirectory';
import MealsDetail from './features/meals/ProjectDetails';
import MealDetailPage from './pages/ProjectDetailPage';
import AddRecipePage from './pages/AddRecipePage';
import AboutPage from './pages/AboutPage';
import LandingPage from './pages/LandingPage';


function App() {
    return (
        <div className='App'>
            {/* <Header /> */}
            <Routes>
                <Route path="/HomePage" element={<HomePage />} />
                
                <Route path='/' element={<LandingPage />} />

                <Route path='addrecipe' element={<AddRecipePage />} />
                <Route path='about' element={<AboutPage />} />

                {/* <Route path='directory' element={<MealsDirectoryPage />} />  */}
                {/* <Route path='meal' element={<MealDetailPage />} /> */}
                <Route
                    path='/Homepage/:mealId'
                    element={<MealDetailPage />}
                />
            </Routes>
            {/* <Footer />  */}
        </div>
    );
}

export default App;