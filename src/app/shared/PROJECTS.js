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
        name: 'Disposed Kings',
        disc: 'Disposed Kings is a local band, I made this page to help them engage with their fans and keep them in the loop about upcoming shows, new music and merch.',
        technologies:'HTML, CSS, JavaScript',
        image: disposed3,
        imageDisc:'Links to band members social medias',
        image2: disposed2,
        imageDisc2:'Links to music and social media',
        git: <a href='https://github.com/Mattemcbee/DisposedKingsWebpage'>
            <i className='fa fa-github-square fa-2x' style={{ color: 'black' }} /></a>,
        website: <a className='unstyleLink' style={{color:'#fefae0'}} href='https://disposedkings.netlify.app/'>
        Visit Website</a>

    },
    {
        id: 1,
        name: 'Get In My Pantry',
        disc: 'A cooking website to help discover meals you can make using ingredients in your home.',
        image: recipe,
        imageDisc:'Landing page to choose the ingredients in your pantry',
        image2: recipe2,
        technologies:'React, CSS, JavaScript',
        imageDisc2:'More information on the recipe you choose',
        git: <a href='https://github.com/Mattemcbee/cooking-website'>
            <i className='fa fa-github-square fa-2x' style={{ color: 'black' }} /></a>
    },
    {
        id: 2,
        name: 'Mock Campsite Reservation Website',
        technologies:'React, CSS, JavaScript',

        disc: 'A webpage promoting a campsite and allowing resevations of campsites',
        image: reactcamp,
        imageDisc:'A mock campsite reservation website displaying information about various campsites',
        image2: reactcamp2,
        imageDisc2:'A login form and an feedback form',
        git: <a href='https://github.com/Mattemcbee/cooking-website'>
            <i className='fa fa-github-square fa-2x' style={{ color: 'black' }} /></a>
    },
    {
        id: 3,
        name: 'Get In My Pantry App',
        technologies:'React Native, CSS, JavaScript',

        disc: 'An app used to help discover meals you can make using ingredients in your home',
        image: recapp3,
        imageDisc:'The landing page where you choose ingredients you have in your pantry ',
        image2: recapp2,
        imageDisc2:'A favorite page',
        git: <a href='https://github.com/Mattemcbee/recipe-app'>
            <i className='fa fa-github-square fa-2x' style={{ color: 'black' }} /></a>
    },
    {
        id: 4,
        name: 'Campsite Reservation App',
        technologies:'React Native, CSS, JavaScript',

        disc: 'A mock campsite reservation website displaying information about various campsites',
        image: campapp4,
        imageDisc:'A comment section',
        image2: campapp1,
        // imageDisc2:'ramen',
        git: <a href='https://github.com/Mattemcbee/recipe-app'>
            <i className='fa fa-github-square fa-2x' style={{ color: 'black' }} /></a>
    },
    {
        id: 5,
        name: 'Campsite Database',
        technologies:'NodeJS',

        disc: 'A mock database that can be used to store and add information about campsites',
        image: database3,
        imageDisc:'User input and creation',
        image2: database2,
        imageDisc2:'Add campsites and remove them',
        git: <a href='https://github.com/Mattemcbee/nucampServer'>
            <i className='fa fa-github-square fa-2x' style={{ color: 'black' }} /></a>
    }

];