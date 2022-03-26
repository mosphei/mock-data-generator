import { nameGenerator, pickRandomItems, theQuickBrownFox } from '../src/index';

test('Pick random items from list', () => {
    const originList = ['a', 'b', 'c'];
    let result = pickRandomItems(originList);
    // by default just return one item
    expect(result.length).toBe(1);
    expect(originList.includes(result[0])).toBeTruthy();
    // ask for multiple items
    result = pickRandomItems(originList, 2);
    expect(result.length).toBe(2);
    expect(result.reduce((acc,curr)=>{
        return acc && originList.includes(curr);
    }, true)).toBeTruthy();
});

test('Generate a random name', () => {
    const names = nameGenerator(11);
    const tester = /[A-Z][a-z]+/;
    let i = names.length;
    expect(i).toBe(11);
    while (i--) {
        let name = names.pop();
        expect(tester.test(name!.Firstname)).toBeTruthy();
        expect(tester.test(name!.Lastname)).toBeTruthy();
    }
});

test('the quick brown fox', () => {
    expect(theQuickBrownFox(2)).toBe('The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog.');
});