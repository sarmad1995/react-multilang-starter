import React from 'react'
import { Text } from 'react-native'
import { LanguageContext } from '../languages/LanguageContext';
function getString(data, text) {
    try {
        const translatedText = eval(`data.translations.${text}`);
        if (translatedText) {
            return translatedText;
        }
        console.warn(`No translations found for ${text}`);
        return text;
    }
    catch (e) {
        console.warn(`No translations found for ${text}`);
        return text;
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

