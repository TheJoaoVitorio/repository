import stylesCard from '../components/Card.module.css'
import styles from '../components/CardSection.module.css'
import CardItem from './CardItem';
import { FaGoogle } from 'react-icons/fa';

export default function CardSection(){
    return(
        <div className={styles.CardSectionContainer} >
            <div className={styles.CardSectionContent} >
                <div className={styles.CardSectionCollumnLeft} >
                    <CardItem
                        icon={FaGoogle}
                        textHeader='Google'
                        textLeft='Senior'
                        textRight='Now'
                    />
                </div>
                <div className={styles.CardSectionCollumnRight} >
                    
                </div>
            </div>
        </div>
    )
}