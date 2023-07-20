function firstNonRepeated(chars: string){
    let seenTwice = new Map<string, boolean>();
    for (let c of chars){
        if (seenTwice.has(c)){
            seenTwice.set(c, true);
        }
        else{
            seenTwice.set(c, false);
        }    
    }
    for (let c of chars){
        if (seenTwice.get(c) === false){
            return c;
        }
    }
    return '';
};