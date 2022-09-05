import React from 'react';
import { Link } from 'react-router-dom';
import Spacer from '../components/helpers/spacer';
import Logo from '../components/helpers/logo';

import './pages.css';
import './home.css';

import { coursesInfo } from '../static/courses';

// keep web3 first, randomize the rest
const web3Course = coursesInfo.shift();
coursesInfo.sort(() => Math.random() - 0.5);
if (web3Course) {
  coursesInfo.unshift(web3Course);
}

const Home = () => (
  <main className='main'>
    <h1>Learn Web 3</h1>
    <Spacer />

    <section className='section'>
      <p className='text-center'>
        Click one of the modules below to see its courses
      </p>
      <Spacer />
      <ul className='ul-main'>
        {coursesInfo.map((course, i) => {
          const { name, path, showCourse } = course;
          return (
            showCourse && (
              <li key={i} className={`li-main li-main-${name}`}>
                <Link to={path} className={`btn-main btn-main-${name}`}>
                  <div className='home-logo-wrap'>
                    <Logo name={name} />
                  </div>
                </Link>
              </li>
            )
          );
        })}
      </ul>
    </section>
  </main>
);

export default Home;
