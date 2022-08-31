import { Link } from 'react-router-dom';

import './pages.css';

import allCourses from '../static/all-courses';

console.log(allCourses);

const Home = () => (
  <main className='main'>
    <h1>Learn Web 3</h1>
    <section>
      <p>Here's some intro text</p>
      <ul>
      {allCourses.map((course, i) => {
        const { title, name, path, showCourse } = course;

        return showCourse && (
          <li className={`btn-main btn-${name}`}>
            <Link to={path} className={name}>{title}</Link>
          </li>
        )
      })}
      </ul>
    </section>
  </main>
);

export default Home;

/*
      <Link to='/web3'>web3</Link>
      <Link to='/solana'>solana</Link>
      <Link to='/near'>near</Link>

{links.map((item, i) => (
 <li key={i}>
   <Link to={item.link}>{item.name}</Link>
 </li>
 ))}
*/
