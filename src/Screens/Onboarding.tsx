import React from "react";
import { Image } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';
import Images from "../Themes/Images";

const OnboardingScreen: React.FC=()=>{
    return(

        <Onboarding
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={Images.On1} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={Images.On2} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={Images.On3} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
            ]}
        />

    );
}
export default OnboardingScreen;