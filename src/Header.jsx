import './Header.css'

function Header(){
    return(
        <header className='Header'>
            <h2>
                NeuraNote
            </h2>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header