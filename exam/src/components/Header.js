import "./css/Header.css";


function Header() {
    return (
        <header className="head container">
            <div className="headerimage">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.9979 0V13.716L11.9979 20.573L-0.0020752 13.715L23.9979 0Z" fill="#431F5A" />
                    <path d="M12 20.572L24 27.429V41.143L12 34.286L0 27.429V13.714L12 20.572Z" fill="#722ED1" />
                    <path d="M35.999 34.2859V47.9989L23.999 41.1429V27.429L35.999 34.2859Z" fill="#722ED1" />
                    <path d="M23.9979 0V13.714L35.9979 20.57L47.9979 27.426V13.715L23.9979 0Z" fill="#722ED1" />
                    <path d="M47.9969 13.714V27.43L35.9969 34.287L23.9969 27.429L35.9969 20.571L47.9969 13.714Z" fill="#431F5A" />
                    <path d="M35.999 34.2859L23.999 41.1429V27.429L35.999 34.2859Z" fill="#431F5A" />
                </svg>
            </div>
            <div className="componentsofheader">
                <div className="headerlinks">
                    <a href="#" className="weight">About<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="12px" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg></a>
                    <a href="#" className="weight">Pricing</a>
                    <a href="#" className="weight">Contact Us</a>
                    <a href="#" className="weight">Login</a>

                    <div className="freetrial">
                        <a href="#">Start free trial</a>
                    </div>
                    <svg className="svgofheader" width="26px" height="26px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                </div>
            </div>
        </header>
    );
}

export default Header;