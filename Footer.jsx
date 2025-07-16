import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
<div className="footer">
	<div className="container">		
		<div className="row text-center">						
			<div className="col-lg-12 col-sm-12 col-xs-12">
				<div className="footer_menu">
					<ul>
						<li><a href="/">Home</a></li>
						<li><a href="/about">About</a></li>
						<li><a href="/product">Product</a></li>
						<li><a href="/signin">Sign In</a></li>
						<li><a href="/contact">Contact</a></li>
					</ul>
				</div>						
				<div class="footer_copyright">
					<p>© 2025 Rupankar. All Rights Reserved.</p>
			</div>						
			</div>						
		</div>				
	</div>
</div>
  )
}

export default Footer