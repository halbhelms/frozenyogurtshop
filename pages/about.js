import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/common/Header';

import Footer from '../components/common/Footer';

export default () => {
  return (
    <div id="page">
      <Header />
      <Head><title>About Us</title></Head>
      <div id="body">
        <div class="header">
          <div>
            <h1>About</h1>
          </div>
        </div>
        <div class="body">
          <img src="static/images/bg-header-about.jpg" alt="" />
        </div>
        <div class="footer">
          <div class="sidebar">
            <h1>Be Part of Our Community</h1>
            <p>If you’re experiencing issues or having concerns about this website template, join the discussion <a href="http://www.freewebsitetemplates.com/forums/">on our forum</a> and meet other people in the community who share the same interests.</p>
          </div>
          <div class="article">
            <h1>We Have Free Templates For Everyone</h1>
            <p>Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What’s more, they’re absolutely free! You can do a lot with them. You can modify them.</p>
            <p>You can use them to design websites for clients, so long as you agree with the <a href="http://www.freewebsitetemplates.com/about/terms/">Terms of Use</a>. You can even remove all our links if you want to.</p>
            <h1>We Have More Templates For You</h1>
            <p>Looking for more templates? Just browse through all our <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a>. But if you can’t find any website templates you can use, try our <a href="http://www.freewebsitetemplates.com/freewebdesign/">Free Web Design</a> service and tell us all about it. We love a good challenge!</p>
            <h1>Template Details</h1>
            <span>Design Version 2.</span>
            <span>Code Version 1.</span>
            <p>Website Template details, discussion and updates for this <a href="http://www.freewebsitetemplates.com/discuss/frozenyogurtshop/">Frozen Yogurt Shop Website Template</a>.</p>
            <p>Website Template design by  <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a>.</p>
          </div>
        </div>
      </div>
      <div id="footer">
        <div>
          <div class="connect">
            <a href="http://freewebsitetemplates.com/go/facebook/" class="facebook">facebook</a>
            <a href="http://freewebsitetemplates.com/go/twitter/" class="twitter">twitter</a>
            <a href="http://freewebsitetemplates.com/go/googleplus/" class="googleplus">googleplus</a>
            <a href="http://pinterest.com/fwtemplates/" class="pinterest">pinterest</a>
          </div>
          <p>&copy; 2023 Freeeze. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}