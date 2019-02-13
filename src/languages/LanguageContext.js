import React from 'react';
import translations from './translations';

export const LanguageContext = React.createContext();

class LanguageProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'english',
            translations: translations.english
        }
    }
    changeLanguage = (language) => {
        this.setState({ language, translations: translations[language] })
    }
    render() {
        return (
            <LanguageContext.Provider
                value={{
                    ...this.state,
                    changeLanguage: this.changeLanguage
                }}
            >
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}
export default LanguageProvider;