import disposed from '../assets/img/disposed1.JPG'
import disposed2 from '../assets/img/disposed2.JPG'
import disposed3 from '../assets/img/disposed4.jpg'
import recipe from '../assets/img/recipe1.JPG'
import recipe2 from '../assets/img/recipe2.JPG'
import dead from '../assets/img/dead1.png'
import dead2 from '../assets/img/dead2.png'
import car1 from '../assets/img/carillon1.png'
import car2 from '../assets/img/carillon2.png'
import fort1 from '../assets/img/fortnite1.png'
import fort2 from '../assets/img/fortnite2.png'
import river1 from '../assets/img/river1.png'
import river2 from '../assets/img/river2.png'
import gagic from '../assets/img/gagic1.png'
import gagic2 from '../assets/img/gagic2.png'

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
import pokemon1 from '../assets/img/pokemon1.png'
import pokemon2 from '../assets/img/pokemon2.png'
import roam from '../assets/img/roamingBack.jpg'
import roam1 from '../assets/img/roamingBack2.jpg'



export const PROJECTS = [
    
    {
        id: 0,
        name: 'Roaming Eyes Band Site',
        technologies: 'React, API, useState',

        disc: 'A website for a band that displays merch, shows and social media sites allowing them to connect and communicate with their fans',
        image: roam,
        imageDisc: '',
        image2: roam1,
        imageDisc2: '',
        git: <a href='https://github.com/Mattemcbee/RoamingEyes'>
            <i className='fa fa-github-square fa-2x' style={{ color: 'black' }} /></a>,
                  website: <a className='unstyleLink' style={{ color: '#fefae0' }} href='https://roamingeyes.netlify.app/'>
                  Visit Website</a>,
        skill: 'Display information in an aesthetically pleasing way, connects to an external API to email the band (EmailJS), displayed background at a different scroll speed than information'
    },
    {
        id: 1,
        name: 'James River Interactive Map',
        disc: 'An interactive map to help friends find new locations along the James River',
        technologies: 'React, API, JavaScript, Maps',
        image: river1,
        // imageDisc: 'Links to band members social medias',
        image2: river2,
        // imageDisc2: 'Links to music and social media',
        git: <a href='https://github.com/Mattemcbee/jamesRiverMap'>
            <i className='fa fa-github-square fa-2x' style={{ color: 'black' }} /></a>,
        website: <a className='unstyleLink' style={{ color: '#fefae0' }} href='https://666b674c30c660ba5f6b3ac7--jamesrivermap.netlify.app/'>
            Visit Website</a>,
        skill: 'Engaging user interface, connecting to outside websites'
    },
    {
        id: 2,
        name: 'Fortnite Team Update',
        technologies: 'React, API, noSQL database',

        disc: 'A simple website that pulls stats from the Fortnite API allowing teammates to know how they are performing that season. Utilizes Firebase database to store previous K/D to compare to level to track progress.',
        image: fort1,
        // imageDisc: 'User input and creation',
        image2: fort2,
        // imageDisc2: 'Add campsites and remove them',
        git: <a href='https://github.com/Mattemcbee/fortniteAPIPull'>
            <i className='fa fa-github-square fa-2x' style={{ color: 'black' }} /></a>,
            website: <a className='unstyleLink' style={{ color: '#fefae0' }} href='https://fortnitewiththeboys.netlify.app/'>
            Visit Website</a>,
        skill: 'Communication between a React front end and an online API. Firebase noSQL database management'
    },
    {
        id: 3,
        name: 'Magic The Gathering Score and Hand Tracker',
        technologies: 'React, API, noSQL database',
        image: gagic,

        disc: 'A simple website tracks wins and kills for a group of players. Utilizes Firebase database to allow players to share and track their current hands and see other players hands.',
        // imageDisc: 'User input and creation',
        image2: gagic2,
        // imageDisc2: 'Add campsites and remove them',
        git: <a href='https://github.com/Mattemcbee/magicTheGatheringScores'>
            <i className='fa fa-github-square fa-2x' style={{ color: 'black' }} /></a>,
            website: <a className='unstyleLink' style={{ color: '#fefae0' }} href='https://magicwiththeboys.netlify.app/'>
            Visit Website</a>,
        skill: 'Communication between a React front end and an online API. Firebase noSQL database management'
    },
    {
        id: 4,
        name: 'Carillion Civic Association',
        disc: 'Recently I moved into a home in the Carillon Civic Association and we had a conversation with the block captain about how we use our talents to contribute to their lively community. From this conversation I create this, a reimagined version of the neighborhoods website from scratch using React. I also added a practical touch by enabling Mailchimp to simplify their newsletter updates.',
        technologies: 'React, API, JavaScript',
        image: car1,
        // imageDisc: 'Links to band members social medias',
        image2: car2,
        // imageDisc2: 'Links to music and social media',
        git: <a href='https://github.com/Mattemcbee/carilloncivic'>
            <i className='fa fa-github-square fa-2x' style={{ color: 'black' }} /></a>,
        website: <a className='unstyleLink' style={{ color: '#fefae0' }} href='https://carilloncivic.netlify.app/'>
            Visit Website</a>,
        skill: 'Engaging user interface, connecting to outside websites'
    },
    {
        id: 5,
        name: 'Dead Run Band Page',
        technologies: 'React, API',

        disc: 'A website for a band that displays merch, shows and social media sites allowing them to connect and communicate with their fans',
        image: dead,
        // imageDisc: 'User input and creation',
        image2: dead2,
        // imageDisc2: 'Add campsites and remove them',
        git: <a href='hhttps://github.com/Mattemcbee/DeadRun'>
            <i className='fa fa-github-square fa-2x' style={{ color: 'black' }} /></a>,
            website: <a className='unstyleLink' style={{ color: '#fefae0' }} href='https://deadrun.netlify.app/'>
            Visit Website</a>,
        skill: 'Display information in an aesthetically pleasing way, connects to an external API to email the band (EmailJS)'
    },
    {
        id: 6,
        name: 'Disposed Kings',
        disc: 'Disposed Kings is a metal band based out of Waynesboro, VA. I made this page to help them engage with their fans and keep fans informed about upcoming shows, new music and merchandise.',
        technologies: 'HTML, CSS, JavaScript',
        image: disposed,
        imageDisc: 'Links to band members social medias',
        image2: disposed2,
        imageDisc2: 'Links to music and social media',
        git: <a href='https://github.com/Mattemcbee/DisposedKingsWebpage'>
            <i className='fa fa-github-square fa-2x' style={{ color: 'black' }} /></a>,
        website: <a className='unstyleLink' style={{ color: '#fefae0' }} href='https://disposedkings.netlify.app/'>
            Visit Website</a>,
        skill: 'Connecting to outside websites, optimized for mobile'

    },
    {
        id: 7,
        name: 'Pokemon API Call',
        technologies: 'React, API',

        disc: 'A simple website that allows the user to choose their favorite pokemon and find the base stats pulled in from an online API',
        image: pokemon1,
        // imageDisc: 'User input and creation',
        image2: pokemon2,
        // imageDisc2: 'Add campsites and remove them',
        git: <a href='https://github.com/Mattemcbee/pokemon'>
            <i className='fa fa-github-square fa-2x' style={{ color: 'black' }} /></a>,
            website: <a className='unstyleLink' style={{ color: '#fefae0' }} href='https://frolicking-sprite-170be7.netlify.app/'>
            Visit Website</a>,
        skill: 'Communication between a React front end and an online API'
    },
    
    
    {
        id: 8,
        name: 'Campsite Reservation App',
        technologies: 'React Native, CSS, JavaScript',

        disc: 'A mock campsite reservation website displaying information about various campsites',
        image: campapp4,
        imageDisc: 'A comment section',
        image2: campapp1,
        // imageDisc2:'ramen',
        git: <a href='https://github.com/Mattemcbee/recipe-app'>
            <i className='fa fa-github-square fa-2x' style={{ color: 'black' }} /></a>,
        skill: 'Creating and maintaining a favorites section on an app, transforming React website into an app'


    },
    {
        id: 9,
        name: 'Campsite Database',
        technologies: 'NodeJS',

        disc: 'A mock database that can be used to store and add information about campsites',
        image: database3,
        imageDisc: 'User input and creation',
        image2: database2,
        imageDisc2: 'Add campsites and remove them',
        git: <a href='https://github.com/Mattemcbee/nucampServer'>
            <i className='fa fa-github-square fa-2x' style={{ color: 'black' }} /></a>,
        skill: 'Creating a database that allows users to access information and add or delete information, adding security to allow only priveledged users to access parts of the database'
    }
];