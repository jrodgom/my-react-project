import "./HeaderComponent.css"

function HeaderComponent() {
  return (
    <header className="header">
        <h1 className="title">Bienvenidos</h1>
        <nav>
            <ul className="header-list">
                <li><a className="link" href="#">Home</a></li>
                <li><a className="link" href="#">Blog</a></li>
                <li><a className="link" href="#">News</a></li>
                <li><a className="link" href="#">Contact Us</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default HeaderComponent