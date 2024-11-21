import React from 'react'
import './Footer.css';

function Footer() {
	return (
		<footer className="footer">
			<div className="footer-container">
				{/* Footer Menüsü */}
				<div className="footer-menu">
					<div className="footer-column">
						<h4>About TechCareer</h4>
						<ul>
							<li><a href="/about">Who We Are</a></li>
							<li><a href="/careers">Careers</a></li>
							<li><a href="/press">Press</a></li>
						</ul>
					</div>
					<div className="footer-column">
						<h4>Support</h4>
						<ul>
							<li><a href="/help">Help Center</a></li>
							<li><a href="/terms">Terms of Service</a></li>
							<li><a href="/privacy">Privacy Policy</a></li>
						</ul>
					</div>
					<div className="footer-column">
						<h4>Follow Us</h4>
						<ul className="social-icons">
							<li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
							<li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
							<li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
							<li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
						</ul>
					</div>
				</div>
				{/* Footer Alt Bilgi */}
				<div className="footer-bottom">
					<p>© {new Date().getFullYear()} TechCareer. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer