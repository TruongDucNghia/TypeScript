// export {}
console.log("nghia");
const a: number = 10
const b: number = 100
const c: boolean = false
const myName: string = "nghia duc truong"

type user = {
    id: number,
    name: string,
    age: number,
    marriage: boolean
}

const me: user = {
    id: 1,
    name: "Trương Đức Nghĩa",
    age: 20,
    marriage: true
}
console.log(me);



function myFunction(a: number, b: number): number{
    return a + b
}
console.log(myFunction(a, b));

type Product = {
    id: number,
    name: string
}
const getProducts = <T extends Product>(products: T[]) =>{
    const result = products
    console.log(result);
}
getProducts([{id: 1, name: "NGHIA"}, {id: 2, name: "NHUNG"}])

