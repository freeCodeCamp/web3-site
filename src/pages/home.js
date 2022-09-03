import { Link } from 'react-router-dom';
import Spacer from '../components/helpers/spacer';

import Web3Logo from '../components/icons/web3-logo';
import SolanaLogo from '../components/icons/solana-logo';
import NearLogo from '../components/icons/near-logo';

import './pages.css';
import './home.css';

import { coursesInfo, courseNames } from '../static/courses';

// keep web3 first, randomize the rest
const web3Course = coursesInfo.shift();
coursesInfo.sort(() => Math.random() - 0.5);
coursesInfo.unshift(web3Course);

const renderLogo = name => {
  switch (name) {
    case courseNames.web3:
      return <Web3Logo />;
    case courseNames.solana:
      return <SolanaLogo />;
    case courseNames.near:
      return <NearLogo />;
    default:
      return <Web3Logo />;
  }
};

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
                  <div className='btn-logo-wrap'>{renderLogo(name)}</div>
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
