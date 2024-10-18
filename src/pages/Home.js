import React from 'react';
import '../App.css';
import MainContent from '../components/Main';
import CardSection from '../components/CardSection';
import CardMain from '../components/CardMain';
import SectionAboutMe from '../components/SectionAboutMe';
import VerticalStepper from '../components/Stepper';


export default function Home(){
    return(
        <div className='App' >
            <MainContent></MainContent>
            <CardMain></CardMain>
            <CardSection></CardSection>
            <SectionAboutMe></SectionAboutMe>
            <VerticalStepper />
        </div>
    )
}