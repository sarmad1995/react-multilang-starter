import React, { Component } from 'react'
import { Text } from 'react-native'
import { LanguageContext } from '../languages/LanguageContext';
function getString(data, text) {
    try {
        return eval(`data.translations.${text}`);
    }
    catch (e) {
        console.warn(e);
        return '';
    }
}
export default function CustomText({ text, ...rest }) {
    return (
        <LanguageContext.Consumer>
            {(data) => (
                <Text {...rest}>
                    {getString(data, text)}
                </Text>
            )}
        </LanguageContext.Consumer>
    )
}

