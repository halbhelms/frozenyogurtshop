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
            <h1>Single Post</h1>
          </div>
        </div>
        <div class="singlepost">
          <div class="featured">
            <img src="static/images/strwberry-delights.jpg" alt="" />
            <h1>NEW CHILLS FOR SUMMER</h1>
            <span>By Admin on November 28, 2023</span>
            <p>You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the forum.</p>
            <p>You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the forum.</p>
            <Link href="/blog">
              <a class="load">back to blog</a>
            </Link>
          </div>
          <div class="sidebar">
            <h1>Recent Posts</h1>
            <img src="static/images/on-diet.png" alt="" />
            <h2>ON THE DIET</h2>
            <span>By Admin on November 28, 2023</span>
            <p>You can replace all this text with your own text. You can remove any link to our website from this website template.</p>
            <Link href="/singlepost">
              <a class="more">Read More</a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}