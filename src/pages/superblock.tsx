import React from 'react';
import Spacer from '../components/helpers/spacer';
import Logo from '../components/helpers/logo';
import { coursesInfo } from '../static/courses';

import './superblock.css';

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

      <section id='instructions'>
        <h2>How to run the courses</h2>
        <Spacer />
        <h3>Prerequisites</h3>
        <p>
          Before you get started, make sure you have these installed on your
          computer:
        </p>
        <ul className='prerequisites'>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://docs.docker.com/engine/'
            >
              Docker Engine
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://code.visualstudio.com/download'
            >
              VS Code
            </a>{' '}
            and the{' '}
            <a
              target='_blank'
              rel='noreferrer'
              href='https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers'
            >
              Dev Containers
            </a>{' '}
            extension
          </li>
          <li>Git</li>
        </ul>
        <h3>How to Run the Courses in Docker</h3>
        <p>Follow these instructions to clone the repo and run the courses:</p>
        <ol>
          <li>
            Open a terminal and clone the{' '}
            <a target='_blank' rel='noreferrer' href={repo}>
              {repoName}
            </a>{' '}
            repo with: <code>git clone {repo}</code>
          </li>
        </ol>
        <ol start={2}>
          <li>
            Navigate to the <code>{repoName}</code> directory, and open it in a
            VS Code workspace with: <code>code .</code>
          </li>
        </ol>
        <ol start={3} className='instructions'>
          <li>
            Press <code>Ctrl / Cmd + Shift + P</code> to open the command
            palette, and run{' '}
            <code>
              Dev Containers: Rebuild Container and Reopen in Container
            </code>
            . VS Code will build the container to run the projects in, it will
            take a few minutes the first time.
          </li>
          <li>
            Once it's finished, press <code>Ctrl / Cmd + Shift + P</code> again
            and run <code>freeCodeCamp: Run Course</code> to start the courses.
            This will also take a moment.
          </li>
          <li>
            The simple browser will open when it's done. If it's a blank white
            page, use the refresh button to update it and see the courses home
            page.
          </li>
          <li>Click on one of the available projects to start a project.</li>
          <li>Follow the instructions to complete the project.</li>
        </ol>
        <p>
          If you want to switch projects, click the freeCodeCamp logo at the top
          to get back to the home page.
        </p>
      </section>
    </main>
  );
};

export default Superblock;
