import { useEffect } from 'react';
import styles from '../components/Header.module.css';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Header() {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(`.${styles.header}`);
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${styles.header} ${styles.headerTextColor}`}>
            <div className={styles.headerContent}>
                <div className={styles.text1Em}>
                    João Vitório
                </div>
                <div className={styles.headerIcons}>
                    <a href='https://www.linkedin.com/in/jo%C3%A3o-vit%C3%B3rio/' className={`${styles.icon} ${styles.headerTextColor}`}>
                        <FaLinkedin />
                    </a>
                    <a href='mailto:joaovtr999x@gmail.com' className={`${styles.icon} ${styles.headerTextColor}`}>
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </header>
    );
}
