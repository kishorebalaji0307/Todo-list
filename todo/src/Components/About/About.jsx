import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <h1>About This Project</h1>
      <p>
        This Todo Application was built to help users manage their daily tasks efficiently.
        You can easily add new tasks, mark them as completed to keep track of your progress,
        and delete tasks once they are no longer needed.
      </p>
      <p>
        The app uses modern React with local storage, meaning all of your tasks are
        saved directly in your browser and will persist even if you refresh or close the page!
      </p>
    </div>
  );
}
