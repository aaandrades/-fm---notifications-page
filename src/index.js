import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import React from "react";
import "./styles.css";
import NotificationContainer from "./NotificationContainer";

const App = () => {
  const [counter, setCounter] = React.useState(3);

  return (
    <main className="notifications-container">
      <section className="notifications-container__body">
        <div className="notifications-container__header">
          <h2 className="notifications-container__header--title">
            Notifications{" "}
            <span className="notifications-container__header--counter">
              {counter}
            </span>
          </h2>
          <span className="notifications-container__header--help">
            Mark all as read
          </span>
        </div>
        <NotificationContainer />
      </section>
      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">aaandrades</a> with ❤
      </footer>
    </main>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App tab="home" />);
