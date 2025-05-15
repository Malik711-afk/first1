import './Footer.css'

function Footer(){
return(
    <footer className='footer'>
        <h3 className='h3'>
            My Website
        </h3>
       <p>&copy; {new Date() .getFullYear()} My Website</p>
    </footer>
)
}
export default Footer