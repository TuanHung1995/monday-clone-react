/**
 * ---
 * Order an array of objects based on another array & return new Ordered Array
 * The original array will not be modified.
 * ---
 * @param {*} originalArray
 * @param {*} orderArray
 * @param {*} key = Key to order
 * @return new Ordered Array
 * 
 */
interface IOriginalArray<T> extends Array<T> {}
interface IOrderArray<V> extends Array<V> {}

const mapOrder = <T, K extends keyof T>(
    originalArray?: IOriginalArray<T>,
    orderArray?: IOrderArray<T[K]>,
    key?: K
): IOriginalArray<T> => {
    if (!originalArray || !orderArray || !key) return [] as IOriginalArray<T>
    return [...originalArray].sort((a, b) => orderArray.indexOf(a[key]) - orderArray.indexOf(b[key]))
}

export { mapOrder }