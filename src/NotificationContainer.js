import React from "react";
import MarkWebberPhoto from "../assets/avatar-mark-webber.webp";
import AngelaGrayPhoto from "../assets/avatar-angela-gray.webp";
import JacobThompsonPhoto from "../assets/avatar-jacob-thompson.webp";
import RizkyHassanuddinPhoto from "../assets/avatar-rizky-hasanuddin.webp";
import KimberlySmithPhoto from "../assets/avatar-kimberly-smith.webp";
import NathanPetersonPhoto from "../assets/avatar-nathan-peterson.webp";
import AnnaKimPhoto from "../assets/avatar-anna-kim.webp";

const NotificationContainer = () => {
  const notifications = [
    {
      name: "Mark Webber",
      content: (
        <span>
          <strong>Mark Webber </strong>reacted to your recent post
          <strong> My first tournament today!</strong>
        </span>
      ),
      time: "1m ago",
      img: MarkWebberPhoto,
      readed: false,
    },
    {
      name: "Angela gray",
      content: (
        <span>
          <strong>Angela gray</strong> followed you
        </span>
      ),
      time: "5m ago",
      img: AngelaGrayPhoto,
      readed: false,
    },
    {
      name: "Jacob Thompson",
      content: (
        <span>
          <strong>Jacob Thompson </strong>
          has joined your group
          <strong> Chess Club</strong>
        </span>
      ),
      time: "1 day ago",
      img: JacobThompsonPhoto,
      readed: false,
    },
    {
      name: "Rizky Hasanuddin",
      content: (
        <span>
          <strong>Rizky Hasanuddin </strong>sent you a private message
        </span>
      ),
      time: "5 days ago",
      img: RizkyHassanuddinPhoto,
      readed: true,
    },
    {
      name: "Kimberly Smith",
      content: (
        <span>
          <strong>Kimberly Smith </strong>commented on your picture
        </span>
      ),
      time: "1 week ago",
      img: KimberlySmithPhoto,
      readed: true,
    },
    {
      name: "Nathan Peterson",
      content: (
        <span>
          <strong>Nathan Peterson </strong>
          reacted to your recent post
          <span> 5 end-game strategies to increase your win rate</span>
        </span>
      ),
      time: "2 weeks ago",
      img: NathanPetersonPhoto,
      readed: true,
    },
    {
      name: "Anna Kim",
      content: (
        <span>
          <strong>Anna Kim </strong>
          left the group
          <strong> Chess Club</strong>
        </span>
      ),
      time: "1m ago",
      img: AnnaKimPhoto,
      readed: true,
    },
  ];

  return (
    <article>
      {notifications.map((notification) => {
        return (
          <div
            key={notification.name}
            className={`notification-body ${
              notification.readed ? "notification-read" : "notification-unread"
            }`}
          >
            <img src={notification.img} alt="content" height={"40rem"} />
            <div className="notification-body__text">
              <div className="notification-body__paragraph">
                {notification.content}
                {!notification.readed && (
                  <div className="notification-body__unread-badge"></div>
                )}
              </div>
              <p className="notification-body__time">{notification.time}</p>
            </div>
          </div>
        );
      })}
    </article>
  );
};

export default NotificationContainer;
