import { useContext } from 'react';
import ThemeContext from './ThemeContext';
import './Home.css';
import { useNavigate } from 'react-router';


const Home = () => {
  const mode = useContext(ThemeContext);
  const nav  = useNavigate();

  return (
    <div
      className="home_page"
      style={{
        backgroundImage: `url('/backG.jpg.jpg')`,
        filter: mode === 'light' ? 'none' : 'brightness(0.85)',
        color:  mode === 'dark' ? '#fff' : '#121212',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',          // ⬅ column layout
        flexDirection: 'column',  // ⬅ hero first, reviews second
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '4rem',
      }}
    >
      {/* Hero section */}
      <div className="home_overlay text-center bg-black/60 p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to The Mock Store</h1>
        <p className="text-lg mb-6">
          Your Exclusive Ticket to the Latest Fashion, Accessories&nbsp;&amp; Tech Trends!
        </p>
        <button
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded"
          onClick={() => nav('/product')}
        >
          Shop Here
        </button>
      </div>

     
      
    </div>
  );
};

export default Home;
