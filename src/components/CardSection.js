import stylesCard from '../components/Card.module.css';
import styles from '../components/CardSection.module.css';
import CardItem from './CardItem';
import { FaGoogle, FaPython } from 'react-icons/fa';
import DelphiLogo from '../img/icon-delphi.png';
import { SiDjango } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";


export default function CardSection(){
    return(
        <div className={styles.CardSectionContainer} >
            <div className={styles.CardSectionContent} >
                <div className={styles.CardSectionCollumnLeft} >
                    <CardItem
                        icon={DelphiLogo}
                        styleItemPhoto='CardItemStyleDelphi'
                        textHeader='Delphi'
                        textLeft='Junior'
                        textRight='Now'
                    />
                    <CardItem
                        icon={SiDjango}
                        styleItemPhoto='CardItemStyleDjango'
                        textHeader='Django'
                        textLeft='Framework'
                        textRight='2023'    
                    />
                    
                </div>
                <div className={styles.CardSectionCollumnRight} >
                    <CardItem
                        icon={IoLogoJavascript}
                        styleItemPhoto='CardItemStyleJavascript'
                        textHeader='Javascript'
                        textLeft='Language'
                        textRight='2024'
                    />
                    <CardItem
                        icon={FaPython}
                        styleItemPhoto='CardItemStylePython'
                        textHeader='Python'
                        textLeft='Language'
                        textRight='2023'    
                    />
                </div>
            </div>
        </div>
    )
}