const positive = n => n > 0 ? n : 0;

const add=(...s)=>s.reduce((a,b)=>a+b,0);

const AnyToNumber = any => {
    switch(true){
        case isEmpty(any):
        case isFun(any):
        case isArray(any):
        case isObject(any):
            return 0;
        break;
        case isString(any):
            return parseFloat(any);
        break;
        case isNumber(any):
            return any;
        break;
    }
}
