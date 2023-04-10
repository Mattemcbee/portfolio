import disposed from '../assets/img/disposed1.JPG'
import disposed2 from '../assets/img/disposed2.JPG'
import disposed3 from '../assets/img/disposed4.jpg'
import recipe from '../assets/img/recipe1.JPG'
import recipe2 from '../assets/img/recipe2.JPG'
// import disposed from '../assets/img/disposed1.jpg'
// import disposed2 from '../assets/img/disposed2.jpg'
import database from '../assets/img/database1.JPG'
import database2 from '../assets/img/database2.JPG'
import database3 from '../assets/img/database3.jpg'
import recapp1 from '../assets/img/recipeapp1.jpg'
import recapp2 from '../assets/img/recipeapp2.jpg'
import recapp3 from '../assets/img/recipeapp3.jpg'

import campapp1 from '../assets/img/campsiteapp1.jpg'
import campapp2 from '../assets/img/campsiteapp2.jpg'
import campapp3 from '../assets/img/campsiteapp3.jpg'
import campapp4 from '../assets/img/campsiteapp4.jpg'
import reactcamp from '../assets/img/reactcamp1.png'
import reactcamp2 from '../assets/img/reactcamp2.png'
import { Link } from 'react-router-dom'



export const PROJECTS = [
    {
        id: 0,
        name: 'Bootstrap',
        disc: 'Use  of HTML, JS, CSS to build a landing page for a local band to display music, merch and upcoming shows',
        technologies:'HTML, CSS, JavaScript',
        image: disposed3,
        // imageDisc:'disposed',
        image2: disposed2,
        // imageDisc2:'disposed3'
        git: <a href='https://github.com/Mattemcbee/DisposedKingsWebpage'>
            <i className='fa fa-github-square fa-2x' style={{ color: 'black' }} /></a>,
        website: <a className='unstyleLink' style={{color:'#fefae0'}} href='https://github.com/Mattemcbee/DisposedKingsWebpage'>
        Visit Website</a>

    },
    {
        id: 1,
        name: 'React',
        disc: 'A cooking website to help discover meals you can make using ingredients in your home',
        image: recipe,
        // imageDisc:'recipe',
        image2: recipe2,
        technologies:'React, CSS, JavaScript',
        // imageDisc2:'recipe2'
        git: <a href='https://github.com/Mattemcbee/cooking-website'>
            <i className='fa fa-github-square fa-2x' style={{ color: 'black' }} /></a>
    },
    {
        id: 2,
        name: 'React',
        technologies:'HTML, CSS, JavaScript',

        disc: 'A webpage promoting a campsite and allowing resevations of campsites',
        image: reactcamp,
        // imageDisc:'reactcamp',
        image2: reactcamp2,
        // imageDisc2:'reactcamp2'
        git: <a href='https://github.com/Mattemcbee/cooking-website'>
            <i className='fa fa-github-square fa-2x' style={{ color: 'black' }} /></a>
    },
    {
        id: 3,
        name: 'React Native',
        technologies:'HTML, CSS, JavaScript',

        disc: 'An app used to help discover meals you can make using ingredients in your home',
        image: recapp3,
        // imageDisc:'recapp3',
        image2: recapp2,
        // imageDisc2:'ramen'
        git: <a href='https://github.com/Mattemcbee/recipe-app'>
            <i className='fa fa-github-square fa-2x' style={{ color: 'black' }} /></a>
    },
    {
        id: 4,
        name: 'React Native',
        technologies:'HTML, CSS, JavaScript',

        disc: 'An app used to help discover and reserve campsites',
        image: campapp4,
        // imageDisc:'recapp3',
        image2: campapp1,
        // imageDisc2:'ramen'
        git: <a href='https://github.com/Mattemcbee/recipe-app'>
            <i className='fa fa-github-square fa-2x' style={{ color: 'black' }} /></a>
    },
    {
        id: 5,
        name: 'NodeJS',
        technologies:'HTML, CSS, JavaScript',

        disc: 'A database that can be used to store and share information',
        image: database3,
        // imageDisc:'database1',
        image2: database2,
        // imageDisc2:'database2'
        git: <a href='https://github.com/Mattemcbee/nucampServer'>
            <i className='fa fa-github-square fa-2x' style={{ color: 'black' }} /></a>
    }

];