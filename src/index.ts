/**
 * returns an array of names
 * @param length number of names to return
 */
export function nameGenerator(length: number): {Lastname: string, Firstname: string}[] {
    const lastnames = [
        'Smith','Johnson','Williams','Brown','Jones','Miller','Davis','Garcia','Rodriguez','Wilson',
        'Martinez','Anderson','Taylor','Thomas','Hernandez','Moore','Martin','Jackson','Thompson','White'
    ];
    const firstnames = [
        'James','John','Robert','Michael','William','David','Richard','Charles','Joseph','Thomas',
        'Emma','Olivia','Ava','Isabella','Sophia','Taylor','Charlotte','Amelia','Evelyn','Abigail'
    ];
    const retval = [];
    for (let i = 0; i < length; i++) {
        retval.push({
            Lastname: pickRandomItems(lastnames)[0],
            Firstname: `${pickRandomItems(firstnames)[0]} ${randomLetter()}.`
        });
    }
    return retval;
}
function randomLetter():string { return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')[Math.floor(Math.random()*26)];}
function pickRandomItems(_items: any[], _count = 1) {
    if (!_count) { _count = 1; }
    const retval = _items.slice();
    while (retval.length > _count && retval.length > 0) {
        retval.splice(Math.floor(Math.random() * retval.length),1);
    }
    return retval;
}