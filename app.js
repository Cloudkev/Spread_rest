function findMin(...vals){
    return vals.reduce(function(sum,val){
        return sum < val ? sum : val;
    })
};

function mergeObjects(obj1,obj2){
    return {...obj1,...obj2};
};

function doubleAndReturnArgs(arr,...vals){
 return [...arr, ...vals.map(v => v*2)]
};


function removeRandom(items) {
    console.log(items.length)
    const idx = Math.floor(Math.random() * items.length);
    console.log(idx);
    const newArr = [...items];
    return newArr.filter(val => newArr[idx] != newArr[idx]);
};

function extend(array1, array2) {
    return [...array1,...array2]

};

function addKeyVal(obj, key, val) {
    const newObj = { ...obj }
    console.log(newObj)
    newObj[key] = val;
    return newObj;
};

function removeKey(obj, key) {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
};

function combine(obj1, obj2) {
return {...obj1,...obj2}
};

const update = (obj, key, val) => {
    const newObj = { ...obj }
  newObj[key] = val;
  return newObj;
};