// components/WelcomeScreen.js
import React from 'react';

const WelcomeScreen = ({ onStartQuiz }) => {
  return (
    <div className=" bg-gray-100 p-6 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4">Welcome to the Quiz!</h2>
      <p className="text-lg">Click the button below to start the quiz.</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={onStartQuiz}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default WelcomeScreen;
