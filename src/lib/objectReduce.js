export default function objectReduce(obj, cb, acc) {
    let idx = 0 ;

    for (let key in obj) {
        acc = cb(acc, { key, value : obj[key] }, idx++);
    }

    return acc;
}
