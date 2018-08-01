import Link from 'next/link';

export default () => {
  return (
		<div id="body" class="home">
			<div class="header">
				<img src="static/images/bg-home.jpg" alt="" />
				<div>
					<Link href="/product"><a>Freeze Delight</a></Link>
				</div>
			</div>
			<div class="body">
				<div>
					<div>
						<h1>NEW PRODUCT</h1>
						<h2>The Twist of Healthy Yogurt</h2>
						<p>This website template has been designed by freewebsitetemplates.com for you, for free. You can replace all this text with your own text.</p>
					</div>
					<img src="static/images/yogurt.jpg" alt="" />
				</div>
			</div>
			<div class="footer">
				<div>
					<ul>
						<li>
							<Link href="/product"><a class="product"></a></Link>
							<h1>PRODUCTS</h1>
						</li>
						<li>
							<Link href="/about"><a class="about"></a></Link>
							<h1>OUR STORY</h1>
						</li>
						<li>
							<Link href="/product"><a class="flavor"></a></Link>
							<h1>FLAVORS</h1>
						</li>
						<li>
							<Link href="/contact"><a class="contact"></a></Link>
							<h1>OUR LOCATION</h1>
						</li>
					</ul>
				</div>
			</div>
		</div>
  );
};