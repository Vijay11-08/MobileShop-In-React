import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Mobile Shop</h1>
      <Link to='/login'>Login</Link> | <Link to='/register'>Register</Link>
    </div>
  );
}
export default Home;