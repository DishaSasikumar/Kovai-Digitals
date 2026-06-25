import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery/:slug" element={<GalleryPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}