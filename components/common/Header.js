import Link from 'next/link';
import Head from 'next/head';

export default () => {
  return (
    <div id="header">
      <Head>    
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Frozen Yogurt Shop</title>
        <link rel="stylesheet" href="static/css/style.css" type="text/css" />
        <link rel="stylesheet" type="text/css" href="static/css/mobile.css" />
        <script src="static/js/mobile.js" type="text/javascript"></script>
      </Head>
      <div>
        <Link href="/index"><a class="logo"><img src="static/images/logo.png" alt="" /></a></Link>
        <ul id="navigation">
          <li class="selected">
            <Link href="/index"><a>Home</a></Link>
          </li>
          <li class="menu">
            <Link href="/about"><a>About</a></Link>
            <ul class="primary">
              <li>
                <Link href="/product"><a>Product</a></Link>
              </li>
            </ul>
          </li>
          <li class="menu">
            <Link href="/blog"><a>Blog</a></Link>
            <ul class="secondary">
              <li>
                <Link href="/singlepost"><a>Single post</a></Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact"><a>Contact</a></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}