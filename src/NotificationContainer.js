import React from "react";
import MarkWebberPhoto from "../assets/avatar-mark-webber.webp";
import AngelaGrayPhoto from "../assets/avatar-angela-gray.webp";
import JacobThompsonPhoto from "../assets/avatar-jacob-thompson.webp";
import RizkyHassanuddinPhoto from "../assets/avatar-rizky-hasanuddin.webp";
import KimberlySmithPhoto from "../assets/avatar-kimberly-smith.webp";
import NathanPetersonPhoto from "../assets/avatar-nathan-peterson.webp";
import AnnaKimPhoto from "../assets/avatar-anna-kim.webp";
import ChessClubPhoto from "../assets/image-chess.webp";

const NotificationContainer = ({ unreads = [1, 2, 3], handleUnread }) => {
  const notifications = [
    {
      id: 1,
      name: "Mark Webber",
      content: (
        <span className="simple-text">
          <span className="name-text">Mark Webber </span>reacted to your recent
          post
          <span className="special-bold"> My first tournament today!</span>
          {unreads.includes(1) && (
            <div className="notification-body__unread-badge"></div>
          )}
        </span>
      ),
      time: "1m ago",
      img: MarkWebberPhoto,
      readed: false,
    },
    {
      id: 2,

      name: "Angela gray",
      content: (
        <span className="simple-text">
          <span className="name-text">Angela gray</span> followed you
          {unreads.includes(2) && (
            <div className="notification-body__unread-badge"></div>
          )}
        </span>
      ),
      time: "5m ago",
      img: AngelaGrayPhoto,
      readed: false,
    },
    {
      id: 3,
      name: "Jacob Thompson",
      content: (
        <span className="simple-text">
          <span className="name-text">Jacob Thompson </span>
          has joined your group
          <span className="highlighted-text"> Chess Club</span>
          {unreads.includes(3) && (
            <div className="notification-body__unread-badge"></div>
          )}
        </span>
      ),
      time: "1 day ago",
      img: JacobThompsonPhoto,
      readed: false,
    },
    {
      id: 4,

      name: "Rizky Hasanuddin",
      specialContent: (
        <div className="special-content">
          Hello, thanks for setting up the Chess Club. I've been a memeber for a
          few weeks now and i'm already having lots of fun and improving my
          game.
        </div>
      ),
      content: (
        <span className="simple-text">
          <span className="name-text">Rizky Hasanuddin </span>sent you a private
          message
        </span>
      ),
      time: "5 days ago",
      img: RizkyHassanuddinPhoto,
      readed: true,
    },
    {
      id: 5,
      name: "Kimberly Smith",
      content: (
        <div className="img-container">
          <span className="simple-text">
            <div className="img-container__text">
              <span className="name-text">Kimberly Smith </span> commented on
              your picture
            </div>
          </span>
          <img
            src={ChessClubPhoto}
            alt="chess"
            height={"40px"}
            width={"40px"}
            className="absolute-img"
          />
        </div>
      ),
      time: "1 week ago",
      img: KimberlySmithPhoto,
      readed: true,
    },
    {
      id: 6,
      name: "Nathan Peterson",
      content: (
        <span className="simple-text">
          <span className="name-text">Nathan Peterson </span>
          reacted to your recent post
          <span className="special-bold">
            {" "}
            5 end-game strategies to increase your win rate
          </span>
        </span>
      ),
      time: "2 weeks ago",
      img: NathanPetersonPhoto,
      readed: true,
    },
    {
      id: 7,
      name: "Anna Kim",
      content: (
        <span className="simple-text">
          <span className="name-text">Anna Kim </span>
          left the group
          <span className="highlighted-text"> Chess Club</span>
        </span>
      ),
      time: "1m ago",
      img: AnnaKimPhoto,
      readed: true,
    },
  ];

  return (
    <article>
      {notifications.map((notification) => (
        <div
          key={notification.id}
          role="button"
          onClick={() => handleUnread(notification.id)}
          className={`notification-body ${
            unreads.includes(notification.id)
              ? "notification-unread"
              : "notification-read"
          }`}
        >
          <img
            src={notification.img}
            alt="content"
            height={"40rem"}
            className="notification-body__img"
          />
          <div className="notification-body__text">
            <div className="notification-body__paragraph">
              {notification.content}
            </div>
            <p className="notification-body__time">{notification.time}</p>
            {notification.specialContent}
          </div>
        </div>
      ))}
    </article>
  );
};

export default NotificationContainer;
