import * as events from "events";
import {Link} from "react-router-dom";

const DUMMY_EVENTS = [
  {
  id: 'e1',
  title: 'Some evnet',
  },  
  {
  id: 'e2',
  title: 'Another envet',
  },
]
function EventsPage() {
  return (
      <>
      <h1>EventsPage</h1>
      <ul>
        {DUMMY_EVENTS.map(event => <li key={event.id}>
          <Link to={event.id}></Link>
            </li>)}
      </ul>
      </>
  );
}

export default EventsPage;
