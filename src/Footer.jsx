import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h3>My Website</h3>
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer