import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/common/Header';
import Flavor from '../components/product/Flavor';

import Footer from '../components/common/Footer';

export default () => {
  return (
    <div id="page">
      <Header />
      <Head><title>Products</title></Head>
      <div id="body">
			<div class="header">
				<div>
					<h1>Products</h1>
				</div>
			</div>
			<div>
				<ul>
					<li>
						<h1>All Time Classic</h1>
						<p>This website template has been designed by freewebsitetemplates.com for you, for free.</p>
					</li>
					<Flavor image="kiwi.jpg" name="Kiwi" />
          <Flavor image="mango.jpg" name="Mango" />
          <Flavor image="cantaloupe.jpg" name="Cantaloupe" />
				</ul>
				<ul>
					<li>
						<h1>Berry Special</h1>
						<p>This website template has been designed by freewebsitetemplates.com for you, for free.</p>
					</li>
          <Flavor image="blackberry.jpg" name="Blackberry" />
          <Flavor image="strawberry.jpg" name="Strawberry"  />
          <Flavor image="blueberry.jpg" name="Blueberry" />
				</ul>
				<ul>
					<li>
						<h1>Fruit Blast</h1>
						<p>This website template has been designed by freewebsitetemplates.com for you, for free.</p>
					</li>
          <Flavor image="grapes.jpg" name="Grapes" />
          <Flavor image="green-apple.jpg" name="Green Apple" />
          <Flavor image="pineapple.jpg" name="Pineapple" />
				</ul>
			</div>
		</div>
    <Footer />
    </div>
  );
}