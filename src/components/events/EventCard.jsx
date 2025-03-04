import React from "react";
import style from "../../styles/event/EventCard.module.css";
function EventCard({ event, isExpanded }) {
  const { EventName, EventPhoto, About, EventLink } = event;

  return (
    <div className={style.eventCardRectangular}>
      <img src={EventPhoto} alt={EventName} className={style.eventcardimage} />
      <h2 className={`${style.eventcardtitle} ${isExpanded ? style.expandedTitle : ''}`}>{EventName}</h2>
      {isExpanded && (
        <>
          <p className={`${style.eventcarddescription} ${style.expandedDescription}`}>{About}</p>
          {EventLink && (
            <a href={EventLink} className={style.eventCardButton}>
              Register
            </a>
          )}
        </>
      )}
    </div>
  );
}

export default EventCard;
