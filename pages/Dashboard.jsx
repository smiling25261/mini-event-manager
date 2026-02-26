import Navbar from "../components/layout/Navbar";
import EventForm from "../components/events/EventForm";
import EventList from "../components/events/EventList";
import SearchBar from "../components/events/SearchBar";


const Dashboard = ({ setIsLoggedIn }) => {
  return (
    <div>
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      <SearchBar />
      <EventForm />
      <EventList />
    </div>
  );
};

export default Dashboard;