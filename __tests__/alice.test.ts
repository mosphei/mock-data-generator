import { aliceSentence } from "../src";

test('pick a sentence', () => {
    let s = aliceSentence(10, 20);
    expect(s.length).toBeGreaterThan(9);
    expect(s.length).toBeLessThan(21);
})