export const getVisualTemperatureRepresentation = ( temperature: number ): string[] => {
    const checkSign = Math.sign( temperature );
    const numberOfSymbols = Math.floor( (Math.abs( temperature ) / 5) );
    const signArray: string[] = [];
    
    if ( numberOfSymbols === 0 ) {
        signArray.push( '~' );
        return signArray;
    }
    
    for ( let i = 0; i < numberOfSymbols; i++ ) {
        checkSign === -1 ? signArray.push( '❄' ) : checkSign === 1 ? signArray.push( '☀' ) : signArray.push( '~' );
    }
    return signArray;
};
