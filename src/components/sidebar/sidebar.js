import React from 'react';
import './sidebar.scss';
import {Link, NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons';
import profileImage from '../../assets/images/Profile.jpeg';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';


export default function Sidebar() {
   return (
      <div className="nav-bar">
         <Link className="logo"
            to={'/'}>
            <img className="sub-logo"
               src={profileImage}
               alt="SwanHtet"/>
            <h1>Swan Htet Aung Phyo</h1>
         </Link>

         <nav>
            <NavLink exact activeClassName="active"
               to={'/'}>
               <FontAwesomeIcon icon={faHome}
                  color=" #E6E6FA"
                  style={
                     {fontSize: '30px'}
                  }/>
            </NavLink>

            <NavLink exact activeClassName="active" className="about-link"
               to={'/about'}>
               <FontAwesomeIcon icon={faUser}
                  color=" #E6E6FA"
                  style={
                     {fontSize: '30px'}
                  }/>
            </NavLink>
            <NavLink exact activeClassName="active" className="email-link"
               to={'/contact'}>
               <FontAwesomeIcon icon={faEnvelope}
                  color=" #E6E6FA"/>
            </NavLink>
         </nav>
         <div className='repo'>
            <a target='blank' href='https://github.com/SwanHtetMorgan'>
               <FontAwesomeIcon icon={faGithub}
                  color='#E6E6FA'
                  style={
                     {fontSize: '50px'}
                  }
                  className='anchor-icon'/>
            </a>
            <a target='blank' href='https://github.com/SwanHtetMorgan'>
               <FontAwesomeIcon icon={faLinkedin}
                  color='#E6E6FA'
                  style={
                     {fontSize: '50px'}
                  }
                  className='anchor-icon'/>
            </a>
         </div>
      </div>
   );
}
