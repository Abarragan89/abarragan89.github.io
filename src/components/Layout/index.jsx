import { useState, useEffect, useLayoutEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Layout({ children }) {
    const [loadedElements, setLoadedElements] = useState(false)
    // useEffect(() => {
    // }, [loadedElements]);

    // refresh on scroll package to ensure attributes are added after they have been loaded
    useLayoutEffect(() => {
        if (!loadedElements) {
            Aos.init({ delay: 0, once: true })
            setLoadedElements(true)
        } else {
            Aos.init({ delay: 0, once: true })
        };
        setTimeout(() => Aos.refresh({ delay: 0, once: true }), 500)
    }, [])

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}