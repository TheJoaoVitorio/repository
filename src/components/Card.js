import styles from '../components/Card.module.css';
import 'animate.css/animate.min.css'; 

export default function Card() {
    return (
        <div className={styles.Card}>
            <div className={`${styles.CardHeader} animate__animated animate__flash animate__infinite animate__delay-5s animate__slower `}>
                <div className={styles.CardHeaderContent}>
                    <h1>Projetos</h1>
                </div>                
            </div>
        </div>
    );
}
