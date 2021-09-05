import React from 'react';
import { View, ActivityIndicator } from 'react-native'


interface CustomSpinnerProps {
    isLoading: boolean;
    loadingIndicatorColor?: string,
    size?: 'small | large'
}
const CustomSpinner = (props: CustomSpinnerProps) => {

    const {
        isLoading = false,
        loadingIndicatorColor = 'black',
        size = 'small | large',
    } = props;

    return (
        <>
            <ActivityIndicator
                animating={isLoading}
                color={loadingIndicatorColor}
                size={size}>
            </ActivityIndicator>
        </>
    )
}

export default CustomSpinner;