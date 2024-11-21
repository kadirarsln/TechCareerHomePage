import React from 'react'
import './Header.css';

function Header() {
	return (
		<>
			<header className="header">
				<div className="header-container">
					<div className="logo">
						<a href="/">
							<img
								src="https://www.techcareer.net/images/logo.png"
								alt="TechCareer Logo"
							/>
						</a>
					</div>
					<nav className="nav">
						<ul>
							<li><a href="/jobs">Jobs</a></li>
							<li><a href="/courses">Courses</a></li>
							<li><a href="/companies">Companies</a></li>
							<li><a href="/about">About Us</a></li>
							<li><a href="/contact">Contact</a></li>
						</ul>
					</nav>
					<div className="actions">
						<button className="btn login">Login</button>
						<button className="btn signup">Sign Up</button>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header