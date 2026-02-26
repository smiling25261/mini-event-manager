import { useContext, useState } from "react";
import { EventContext } from "../context/EventContext.jsx";
import EventCard from "./EventCard.jsx";

const EventList = () => {
  const { events } = useContext(EventContext);
  const [sortOrder, setSortOrder] = useState("asc");

  const sortedEvents = [...events].sort((a, b) =>
    sortOrder === "asc"
      ? new Date(a.date) - new Date(b.date)
      : new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="event-list">
      <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
        Sort by Date ({sortOrder})
      </button>

      {sortedEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;