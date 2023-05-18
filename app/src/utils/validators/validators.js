export const requiredField = value => {
    if(value){
        return undefined
    }
    return "Поле обов'язкове для введення"
}

export const priceIsHigherThan0 = value => {
    const price = Number.parseInt(value);
    if(price > 0) {
        return undefined
    }
    return "Ціна не повинна бути менше чи рівна 0"
}