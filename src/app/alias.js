export const copy = (obj) => JSON.parse(JSON.stringify(obj));

export const deleteDoubles = (array) => {
    return array.filter((el, idx, self) => self.indexOf(el) === idx);
}

const alias = {
    copy, deleteDoubles
}
export default alias;