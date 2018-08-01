import Link from 'next/link';
import Header from '../components/common/Header';
import Main from '../components/index/Main';
import Footer from '../components/common/Footer';

export default () => {
  return (
    <div id="page">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}