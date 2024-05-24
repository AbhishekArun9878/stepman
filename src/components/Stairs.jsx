import React, { useState, useEffect } from "react";
import "../styles/Stairs.css";
import { IoWomanSharp } from "react-icons/io5";
import "animate.css";
import Confetti from "react-confetti";

const Stairs = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [points, setPoints] = useState(0);
  const [lastStepCompleted, setLastStepCompleted] = useState(false);
  const [lastStepPointsAdded, setLastStepPointsAdded] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const tasks = [
    { description: "Start by using meaningful and descriptive variable names.", status: "ontime" },
    { description: "Break your code into modular, reusable functions.", status: "ontime" },
    { description: "Document your code with clear comments and comprehensive documentation.", status: "ontime" },
    { description: "Follow established style guidelines and code conventions.", status: "ontime" },
    { description: "Write and run unit tests for your code.", status: "delay" },
    { description: "Implement robust error handling and logging.", status: "ontime" },
    { description: "Optimize your code for performance and efficiency.", status: "ontime" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep < 7) {
        setPoints((prevPoints) => prevPoints + 10);
        setCurrentStep((prevStep) => {
          const nextStep = prevStep + 1;
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 3000); // Hide confetti after 3 seconds
          return nextStep;
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentStep]);

  useEffect(() => {
    if (currentStep === 7 && !lastStepPointsAdded) {
      setTimeout(() => {
        setPoints((prevPoints) => prevPoints + 10);
        setLastStepCompleted(true);
        setLastStepPointsAdded(true);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000); // Hide confetti after 3 seconds
      }, 5000);
    }
  }, [currentStep, lastStepPointsAdded]);

  return (
    <div>
      {showConfetti && <Confetti />}
      <div className="points" style={{ position: 'absolute', top: 10, right: 10 }}>Points: {points}</div>
      <div className="task" style={{ position: 'absolute', top: 10, left: 10 }}>Task: {tasks[currentStep - 1].description}</div>
      <div className="stairs-container">
        <div
          style={{ position: "relative" }}
          className={`step step-1 ${currentStep > 1 ? "passed" : ""} ${
            currentStep === 1 ? "character" : ""
          }`}
        >
          {currentStep === 1 ? (
            <div style={{ position: "absolute", bottom: "0px", left: "60px" }}>
              <h1 style={{ color: "white" }}>
                <IoWomanSharp />
              </h1>
            </div>
          ) : (
            ""
          )}
          {currentStep === 2 ? (
            <div
              className=" animate__animated animate__fadeOutTopRight"
              style={{ position: "absolute", bottom: "0px", left: "60px" }}
            >
              <h1 style={{ color: "white" }}>
                <IoWomanSharp />
              </h1>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className={`step step-2 ${currentStep > 2 ? "passed" : ""} ${
            currentStep === 2 ? "character" : ""
          }`}
        >
          {currentStep === 2 ? (
            <div
              className=" animate__animated animate__fadeInTopLeft"
              style={{ position: "absolute", bottom: "0px", left: "60px" }}
            >
              <h1 style={{ color: "white" }}>
                <IoWomanSharp />
              </h1>
            </div>
          ) : (
            ""
          )}
          {currentStep === 3 ? (
            <div
              className=" animate__animated animate__fadeOutTopRight"
              style={{ position: "absolute", bottom: "0px", left: "60px" }}
            >
              <h1 style={{ color: "white" }}>
                <IoWomanSharp />
              </h1>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className={`step step-3 ${currentStep > 3 ? "passed" : ""} ${
            currentStep === 3 ? "character" : ""
          }`}
        >
          {currentStep === 3 ? (
            <div className="animate__animated animate__fadeInTopLeft" style={{ position: "absolute", bottom: "0px", left: "60px" }}>
              <h1 style={{ color: "white" }}>
                <IoWomanSharp />
              </h1>
            </div>
          ) : (
            ""
          )}
          {currentStep === 4 ? (
            <div className="animate__animated animate__fadeOutTopRight" style={{ position: "absolute", bottom: "0px", left: "60px" }}>
              <h1 style={{ color: "white" }}>
                <IoWomanSharp />
              </h1>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className={`step step-4 ${currentStep > 4 ? "passed" : ""} ${
            currentStep === 4 ? "character" : ""
          }`}
        >
          {currentStep === 4 ? (
            <div className="animate__animated animate__fadeInTopLeft" style={{ position: "absolute", bottom: "0px", left: "60px" }}>
              <h1 style={{ color: "white" }}>
                <IoWomanSharp />
              </h1>
            </div>
          ) : (
            ""
          )}
          {currentStep === 5 ? (
            <div className="animate__animated animate__fadeOutTopRight" style={{ position: "absolute", bottom: "0px", left: "60px" }}>
              <h1 style={{ color: "white" }}>
                <IoWomanSharp />
              </h1>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className={`step step-5 ${currentStep > 5 ? "passed" : ""} ${
            currentStep === 5 ? "character" : ""
          }`}
        >
          {currentStep === 5 ? (
            <div className="animate__animated animate__fadeInTopLeft" style={{ position: "absolute", bottom: "0px", left: "60px" }}>
              <h1 style={{ color: "white" }}>
                <IoWomanSharp />
              </h1>
            </div>
          ) : (
            ""
          )}
          {currentStep === 6 ? (
            <div className="animate__animated animate__fadeOutTopRight" style={{ position: "absolute", bottom: "0px", left: "60px" }}>
              <h1 style={{ color: "white" }}>
                <IoWomanSharp />
              </h1>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className={`step step-6 ${currentStep > 6 ? "passed" : ""} ${
            currentStep === 6 ? "character" : ""
          }`}
        >
          {currentStep === 6 ? (
            <div className="animate__animated animate__fadeInTopLeft" style={{ position: "absolute", bottom: "0px", left: "60px" }}>
              <h1 style={{ color: "white" }}>
                <IoWomanSharp />
              </h1>
            </div>
          ) : (
            ""
          )}
          {currentStep === 7 ? (
            <div className="animate__animated animate__fadeOutTopRight" style={{ position: "absolute", bottom: "0px", left: "60px" }}>
              <h1 style={{ color: "white" }}>
                <IoWomanSharp />
              </h1>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className={`step step-7 ${
            currentStep > 7 || lastStepCompleted ? "passed" : ""
          } ${currentStep === 7 ? "character" : ""}`}
        >
          {currentStep === 7 ? (
            <div className="animate__animated animate__fadeInTopLeft" style={{ position: "absolute", bottom: "0px", left: "60px" }}>
              <h1 style={{ color: "white" }}>
                <IoWomanSharp />
              </h1>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Stairs;
