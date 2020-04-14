import { TextTransformPipe } from './text-transform.pipe';

describe('Text Transform', () => {
    let transformPipe: TextTransformPipe;
    beforeEach(() => {
        transformPipe = new TextTransformPipe();
    });

    it('Should return empty', () => {
        expect(transformPipe.transform('')).toEqual('');
    });

    it('Should return null', () => {
        expect(transformPipe.transform(null)).toBeNull();
    });

    it('Should return undefined', () => {
        expect(transformPipe.transform(undefined)).toBeUndefined();
    });

    it('Should return same string as provided', () => {
        expect(transformPipe.transform('abcdef')).toEqual('abcdef');
    });

    it('Should trim string length to 10 words if length greater than 10', () => {
        expect(transformPipe.transform('abcdefghijkl')).toEqual('abcdefghij...');
    });
});
