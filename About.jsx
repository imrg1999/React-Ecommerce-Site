import React from 'react'
import { useContext, useState, useEffect } from 'react'
import ThemeContext from './ThemeContext'


const About = () => {
  const mode = useContext(ThemeContext);
  const [reviews, setReviews] = useState([]);
  
    async function fetchReviews() {
      try {
        const res = await fetch('https://fakestoreapiserver.reactbd.org/api/reviews');
        const data = await res.json();
        setReviews(data.data); 
      } catch (e) {
        console.log(e);
      }
    }
  
    useEffect(() => {
      fetchReviews();
    }, []);
  return (
    <div
      style={{
        backgroundColor: mode === 'dark' ? '#121212' : '#f4f4f4',
        color: mode === 'dark' ? '#ffffff' : '#121212',
        padding: '2rem',
        minHeight: '100vh',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="w-3/4 m-auto">
      <div className="mt-20">
        {Array.isArray(reviews)? (
          reviews.map((message) => (
            <div key={message._id} className="bg-black text-white p-6 mb-6 rounded flex flex-col gap-4">
              <h1 className="text-xl font-bold">Ratings: {message.rating} ⭐</h1>
              <p className="mt-2 italic text-center">{message.comment}</p>
            </div>
          ))
        ) : (
          <h1 className="text-center text-gray-600">No reviews</h1>
        )}
      </div>
    </div>
    </div>
  )
}

export default About