// pages/_app.js
import '../styles/globals.css';  // your existing styles
import 'aos/dist/aos.css';       // import AOS styles
import { useEffect } from 'react';
import AOS from 'aos';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      easing: 'ease-in-out',
      once: true,    // whether animation should happen only once - while scrolling down
    });
  }, []);

  return <Component {...pageProps} />;
}
