import cssBlank from '../../app/assets/img/cssBlank.png';
import reactBlank from '../../app/assets/img/logoBlank.png';
import jsBlank from '../../app/assets/img/jsBlank.png';
import expressBlank from '../../app/assets/img/expressBlank.png';
import nodeBlank from '../../app/assets/img/nodeBlank.jpg';
import mongoBlank from '../../app/assets/img/mongoBlank.png';
import gitBlank from '../../app/assets/img/gitBlank.png';



export const SKILLS = [
    {
        id: 0,
        name: 'Front End Development',
        disc: 'Front development building an aesthictally pleasing, engaging and user friendly website using React, React Native, JS, CSS, and HTML',
        icon:"fa fa-desktop fa-md iconColor",
        image: reactBlank,
        image2: cssBlank,
        image3: jsBlank,

        pantry: true
    },
    {
        id: 1,
        name: 'Backend Development',
        disc: 'Database development and organization using programs such as Mongo, Node, and Express',
        icon:"fa fa-server fa-md iconColor",
        image: mongoBlank,
        image2: nodeBlank,
        image3: expressBlank,
        pantry: true
    },
    {
        id: 2,
        name: 'GitHub',
        disc: 'Able to manage, upload and fork projects on GitHub to allow smooth collaboration within a team',
        icon:"fa fa-github-square fa-md iconColor",
        image2: gitBlank,
        pantry: true
    },
    {
        id: 3,
        name: 'App Design',
        disc: 'App design and creation using programs such as React Native to allow for code use in both web and mobile formats',
        icon:"fa fa-mobile fa-md iconColor",
        image2: reactBlank,
        pantry: true
    }

];