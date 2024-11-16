// App.js
import { useState } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {

  const [page, setPage] = useState('home');

  // TODO: How does the Layout component know which page to render?
  // It checks the content vairable of the page by using a 'Strick Equality' and 'Logical And'. If it is true then the accordin page is returned.

  return (
    <Layout selectedPage={page} onSetPage={setPage}>

      {page === 'home' && <HomePage />}
      {page === 'about' && <AboutPage />}
      {page === 'contact' && <ContactPage />}

    </Layout>
  );
}

export default App;
