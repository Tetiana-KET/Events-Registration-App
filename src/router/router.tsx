import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/Layout/Layout';

import NotFoundPage from '../pages/NotFoundPage';
import EventParticipantsPage from '../pages/EventParticipantsPage';
import EventRegistrationPage from '../pages/EventRegistrationPage';
import EventsBoardPage from '../pages/EventsBoardPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <EventParticipantsPage />,
      },
      {
        path: 'eventRegistrationPage',
        element: <EventRegistrationPage />,
      },
      {
        path: 'eventsBoardPage',
        element: <EventsBoardPage />,
      },
    ],
  },
]);
export default router;
