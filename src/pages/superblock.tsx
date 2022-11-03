import React from 'react';
import Spacer from '../components/helpers/spacer';
import Logo from '../components/helpers/logo';
import { coursesInfo } from '../static/courses';

import './superblock.css';
import { Instructions } from '../components/instructions';

interface SuperblockProps {
  superblock: string;
}

const Superblock = ({ superblock }: SuperblockProps) => {
  const superBlockInfo = coursesInfo.find(course => course.name === superblock);

  if (!superBlockInfo) {
    return null;
  }

  const { name, description, blocks, repo, repoName, title } = superBlockInfo;

  return (
    <main className='main'>
      <div className='superblock-logo-wrap'>
        <Logo name={name} jumbotron={true} />
      </div>
      <Spacer size={2} />

      <section className='section'>
        <p>{description}</p>
        <p>
          <a href='#instructions'>Jump to the instructions at the bottom</a> to
          learn how to run the courses.
        </p>
        <Spacer size={2} />
      </section>
      <section>
        <h2>{title} courses</h2>
        <Spacer />
        {blocks.map((block, i) => (
          <div key={i}>
            <div className='project-wrap'>
              <h3>{block.title}</h3>
              {block.summary.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>
        ))}
      </section>
      <Spacer size={2} />

      <Instructions repo={repo} repoName={repoName} />
    </main>
  );
};

export default Superblock;
