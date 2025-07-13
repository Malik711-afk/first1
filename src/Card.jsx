import './Card.css'

function Card() {
   return (
      <div className='card-container'>
         <div className="card">
            <h2>Welcome to Our Website</h2>
            <p>We provide simple and effective solutions for your needs.</p>
         </div>
         <div className="card">
            <h2>Our Mission</h2>
            <p>To deliver quality service with a focus on user experience.</p>
         </div>
         <div className="card">
            <h2>Get Started</h2>
            <p>Join us today and discover what we can do for you.</p>
         </div>
      </div>
   );
}

export default Card