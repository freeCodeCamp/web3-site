import React from 'react';
import { useParams } from 'react-router-dom';
import { Instructions } from '../components/instructions';

export const Alpha = () => {
  const { course } = useParams();
  return (
    <main>
      <Instructions
        repo={
          (course &&
            `https://github.com/freeCodeCamp/${course}-curriculum.git`) ||
          ''
        }
        repoName={course || ''}
      />
      <section>
        <h2>Thanks for being an alpha tester 🎉</h2>
        <p>
          Please open an issue on GitHub with feedback. All feedback is welcome.
        </p>
        <p>Here are some things that would be helpful:</p>
        <ol>
          <li>Are the instructions accurate?</li>
          <li>Were you able to start the course?</li>
          <li>Was the project accurate?</li>
          <li>Did you enjoy the project?</li>
          <li>Did you struggle with any specific lessons/steps?</li>
          <li>Did you experience any bugs 🐛</li>
        </ol>
      </section>
    </main>
  );
};
