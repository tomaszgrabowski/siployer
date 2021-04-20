import { getVisualTemperatureRepresentation } from './helpers';

describe( 'helpers.ts', () => {
    
    describe( 'when temperature is within 5 to 9 degrees', () => {
        it( 'should return array of 1 suns sign', () => {
            testFunction(5, 9, 1, '☀');
        } );
    } );
    
    describe( 'when temperature is within 10 to 14 degrees', () => {
        it( 'should return array of 2 suns sign', () => {
            testFunction(10, 14, 2, '☀');
        } );
    } );
    
    describe( 'when temperature is within 15 to 19 degrees', () => {
        it( 'should return array of 3 suns sign', () => {
            testFunction(15, 19, 3, '☀');
        } );
    } );
    
    describe( 'when temperature is within 20 to 24 degrees', () => {
        it( 'should return array of 4 suns sign', () => {
            testFunction(20, 24, 4, '☀');
        } );
    } );
    
    describe( 'when temperature is within 25 to 29 degrees', () => {
        it( 'should return array of 5 suns sign', () => {
            testFunction(25, 29, 5, '☀');
        } );
    } );
    
    describe( 'when temperature is within -4 to 4 degrees', () => {
        it( 'should return array with one ~ element', () => {
            testFunction(-4, 4, 1, '~');
        } );
    } );

    describe( 'when temperature is within -9 to -5 degrees', () => {
        it( 'should return array of 1 snow sign', () => {
            testFunction(-9, -5, 1, '❄');
        } );
    } );
    
    describe( 'when temperature is within -14 to -10 degrees', () => {
        it( 'should return array of 1 snow sign', () => {
            testFunction(-14, -10, 2, '❄');
        } );
    } );
    
    describe( 'when temperature is within -19 to -15 degrees', () => {
        it( 'should return array of 1 snow sign', () => {
            testFunction(-19, -15, 3, '❄');
        } );
    } );
    
    describe( 'when temperature is within -24 to -20 degrees', () => {
        it( 'should return array of 1 snow sign', () => {
            testFunction(-24, -20, 4, '❄');
        } );
    } );
} );

const testFunction = (temp1: number, temp2: number, expectedLength: number, expectedSign: string) => {
    const result1 = getVisualTemperatureRepresentation(temp1);
    expect(result1.length).toEqual(expectedLength);
    expect(result1[0]).toEqual(expectedSign);
    
    const result2 = getVisualTemperatureRepresentation(temp2);
    expect(result2.length).toEqual(expectedLength);
    expect(result1[0]).toEqual(expectedSign);
}
