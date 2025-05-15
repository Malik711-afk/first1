import Image from './assets/sukuna.png'
import './Card.css'

function Card(){
   return(
      <>
      <div className='card-container'>
      <div className="card">
         <img className="Image" src={Image} alt="Random image"></img>
         <h2 className='h2'>Saad</h2>
         <p>I am a dev. </p>
      </div>
      <div className="card">
         <img className="Image" src={Image} alt="Random image"></img>
         <h2 className='h2'>Saad</h2>
         <p>I am a dev. </p>
      </div>
      <div className="card">
         <img className="Image" src={Image} alt="Random image"></img>
         <h2 className='h2'>Saad</h2>
         <p>I am a dev. </p>
      </div>
      </div>
      </>
   );
}
export default Card