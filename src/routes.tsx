import { type FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
