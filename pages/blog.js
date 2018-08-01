import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/common/Header';

import Footer from '../components/common/Footer';

export default () => {
  return (
    <div>
      <Header />
      <div id="body">
        <div class="header">
          <div>
            <h1>Blog</h1>
          </div>
        </div>
        <div class="blog">
          <div class="featured">
            <ul>
              <li>
                <img src="static/images/new-chills.png" alt="" />
                <div>
                  <h1>NEW CHILLS FOR SUMMER</h1>
                  <span>By Admin on November 28, 2023</span>
                  <p>You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template.</p>
                  <Link href="/singlepost"><a class="more">Read More</a></Link>
                </div>
              </li>
              <li>
                <img src="static/images/berries.png" alt="" />
                <div>
                  <h1>BERRIES ON THE GROVE</h1>
                  <span>By Admin on November 28, 2023</span>
                  <p>You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template.</p>
                  <Link href="/singlepost"><a class="more">Read More</a></Link>
                </div>
              </li>
            </ul>
            <Link href="/blog"><a class="load">Load More</a></Link>
          </div>
          <div class="sidebar">
            <h1>Recent Posts</h1>
            <img src="static/images/on-diet.png" alt="" />
            <h2>ON THE DIET</h2>
            <span>By Admin on November 28, 2023</span>
            <p>You can replace all this text with your own text. You can remove any link to our website from this website template.</p>
            <Link href="/singlepost"><a class="more">Read More</a></Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}