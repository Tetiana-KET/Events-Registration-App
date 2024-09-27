import { RouterProvider } from 'react-router-dom';

import './assets/styles/normalize.css';
import './App.css';
import router from './router/router';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
