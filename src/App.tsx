import { FaInstagram, FaTiktok } from 'react-icons/fa6';

function App() {
  return (
    <div className={'flex flex-col gap-4'}>
      <h1>ITSMZ</h1>
      <a href={'https://www.tiktok.com/@itsmz_dani'}>
        <FaTiktok />
        TikTok
      </a>
      <a href={'https://www.instagram.com/itsmz_dani/#'}>
        <FaInstagram />
        Instagram
      </a>
      <h2>Latest Content</h2>
    </div>
  );
}

export default App;
