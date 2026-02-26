import { useState, useContext } from "react";
import { EventContext } from "../context/EventContext.jsx";

const EventForm = () => {
  const { addEvent } = useContext(EventContext);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !date || !description) {
      alert("All fields required");
      return;
    }

    addEvent({ title, date, description });
    setTitle("");
    setDate("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;