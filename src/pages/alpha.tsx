import React from 'react';
import { useParams } from 'react-router-dom';
import { coursesInfo, courseTitles } from '../static/courses';
import { FourZeroFour } from './404';

type ParamType = {
  course: keyof typeof courseTitles;
};

export const Alpha = () => {
  const { course } = useParams<ParamType>();
  const courseInfo = coursesInfo.find(c => c.name === course);

  if (!courseInfo) {
    return (
      <>
        <FourZeroFour path={course || ''} />
      </>
    );
  }

  return (
    <main className='main'>
      <section id='instructions'>
        <p>
          To test the unreleased {courseInfo.title} courses, follow the
          instructions at <a href={`/${course}`}>/{course}</a>.
        </p>
        <p>
          After cloning the repo, checkout the <code>next</code> branch to work
          with the alpha content.
        </p>
      </section>
      <section>
        <h2>Thanks for being an alpha tester 🎉</h2>
        <p>
          Please{' '}
          <a href={`${courseInfo.repo}/issues/new`} target='_blank'>
            open an issue on GitHub
          </a>{' '}
          with feedback. All feedback is welcome.
        </p>
        <p>Here are some things that would be helpful:</p>
        <ol>
          <li>Was the project accurate?</li>
          <li>Did you enjoy the project?</li>
          <li>Did you struggle with any specific lessons/steps?</li>
          <li>Did you experience any bugs 🐛?</li>
        </ol>
      </section>
    </main>
  );
};
