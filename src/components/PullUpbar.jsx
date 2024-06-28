import React, { useState } from 'react';

const PullUpbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedQuestion1, setSelectedQuestion1] = useState(null);
  const [selectedQuestion2, setSelectedQuestion2] = useState(null);
  const [selectedQuestion3, setSelectedQuestion3] = useState(null);
  const [selectedQuestion4, setSelectedQuestion4] = useState(null);
  const [selectedQuestion5, setSelectedQuestion5] = useState(null);
  const [selectedQuestion6, setSelectedQuestion6] = useState(null);
  const [selectedQuestion7, setSelectedQuestion7] = useState(null);
  const [selectedQuestion8, setSelectedQuestion8] = useState(null);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleQuestionClick = (questionSetter, answer) => {
    questionSetter(answer);
  };

  return (
    <div className="relative w-[75rem] mx-auto">
      <div className="fixed w-[75rem] bottom-0 bg-white shadow-lg">
        <div
          className="cursor-pointer p-4 border-t border-gray-300"
          onClick={toggleVisibility}
        >
          <div className="w-full flex justify-center items-center">
            <div className="w-8 h-1 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
      {isVisible && (
        <div className="fixed bottom-0 bg-blue-900 shadow-lg p-4 w-[75rem]">
          <div
            className="cursor-pointer py-5 border-gray-300"
            onClick={toggleVisibility}
          >
            <div className="w-full flex justify-center items-center">
              <div className="w-8 h-1 bg-gray-400 rounded-full"></div>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { question: 'Question 1', selected: selectedQuestion1, setSelected: setSelectedQuestion1 },
              { question: 'Question 2', selected: selectedQuestion2, setSelected: setSelectedQuestion2 },
              { question: 'Question 3', selected: selectedQuestion3, setSelected: setSelectedQuestion3 },
              { question: 'Question 4', selected: selectedQuestion4, setSelected: setSelectedQuestion4 },
              { question: 'Question 5', selected: selectedQuestion5, setSelected: setSelectedQuestion5 },
              { question: 'Question 6', selected: selectedQuestion6, setSelected: setSelectedQuestion6 },
              { question: 'Question 7', selected: selectedQuestion7, setSelected: setSelectedQuestion7 },
              { question: 'Question 8', selected: selectedQuestion8, setSelected: setSelectedQuestion8 },
            ].map((q, index) => (
              <div key={index}>
                <div className="relative w-full min-w-[200px] h-11">
                  <input
                    className="w-full h-full px-3 py-4 font-sans text-lg font-normal transition-all bg-white border rounded-md peer text-red-500	 outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 border-t-transparent focus:border-t-transparent border-blue-gray-200 focus:border-gray-900"
                    placeholder=" "
                  />
                  <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                    {q.question}
                  </label>
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    className={`text-black text-lg font-semibold flex items-center justify-center p-3 rounded-lg mx-2 w-64 ${
                      q.selected === 'yes' ? 'bg-red-700' : 'bg-red-500'
                    } `}
                    onClick={() => handleQuestionClick(q.setSelected, 'yes')}
                  >
                    Yes
                  </button>
                  <button
                    className={`text-black text-lg font-semibold flex items-center justify-center p-3 rounded-lg mx-2 w-64 ${
                      q.selected === 'no' ? 'bg-green-700' : 'bg-green-500'
                    } `}
                    onClick={() => handleQuestionClick(q.setSelected, 'no')}
                  >
                    No
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PullUpbar;
