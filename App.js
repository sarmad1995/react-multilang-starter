import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import LanguageProvider, { LanguageContext } from './src/languages/LanguageContext';
import Card from './src/components/Card';
export default class App extends React.Component {

  changeLanguage = (language, data) => () => {
    /**
     * Confused? It is just a simple function which returns another function
     * I use this pattern to minimize the use of anonymous arrow functions.
     * Why? For better performance as they are made on every render.  
     */
    data.changeLanguage(language);
  }
  render() {
    return (
      // Here is our customer Provider
      <LanguageProvider>
        <View style={styles.container}>
          <Card />
          <LanguageContext.Consumer>
            {/* The Language Consumer which recieves the providers ...state, and changeLanguage.  */}
            {(data) => {
              return (
                <Button
                  title='Change to Spanish'
                  onPress={this.changeLanguage('spanish', data)}
                />
              );
            }}
          </LanguageContext.Consumer>
        </View>
      </LanguageProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
