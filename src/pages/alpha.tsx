import React from 'react';
import { useParams } from 'react-router-dom';

export const Alpha = () => {
  const { course } = useParams();
  return (
    <main className='main'>
      <section id='instructions'>
        <p>
          Follow the instructions at <a href={`/${course}`}>/{course}</a>.
        </p>
        <p>
          After cloning the repo, checkout the <code>next</code> branch to work
          with the alpha content.
        </p>
      </section>
      <section>
        <h2>Thanks for being an alpha tester 🎉</h2>
        <p>
          Please open an issue on GitHub with feedback. All feedback is welcome.
        </p>
        <p>Here are some things that would be helpful:</p>
        <ol>
          <li>Was the project accurate?</li>
          <li>Did you enjoy the project?</li>
          <li>Did you struggle with any specific lessons/steps?</li>
          <li>Did you experience any bugs 🐛</li>
        </ol>
      </section>
    </main>
  );
};
