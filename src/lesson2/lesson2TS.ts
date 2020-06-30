export default 'lesson2';
console.log('lesson2TS works');

type UserType = {
    name: string,
    age: number,
    city: string
};
type UsersType = Array<UserType>;

const user: UserType = {
    name: 'Ivan',
    age: 34,
    city: 'Minsk'
};

function helloUser(user: UserType): number{
    return user.age;
}

type PropsType = {
    user: UserType,
    sayHello: (name: string) => void
}

function hello(name: string){
    console.log(name)
}

const user1: UserType = {
    name: 'Ivan',
    age: 34,
    city: 'Minsk'
};

const props = {
    user: user1,
    sayHello: (name: string) => console.log(name)
}


function tadam(props: PropsType){

    return `<div>props</div>`
}

type autoType = {
    name: string,
    age: number,
    power: number,
    byKm: number,
    range: number
}

type Props1Type = {
    user: UserType,
    auto: autoType,
    id: string;
    sayHello: (user: UserType) => void,
    getName: (user: UserType) => string,
    getAge: (user: UserType) => number,
    getAverage: (byKm: number, range: number) => number
}



const obj: Props1Type = {
    user: {
        name: 'Vlad',
        age: 34,
        city: 'Minsk'
    },
    auto: {
        name: 'Lada',
        age: 20,
        byKm: 10,
        power: 110,
        range: 300000,
    },
    id: 'q242425',
    sayHello(user) {
        console.log(this.user.name)
    },
    getAge: (user) => user.age,
    getName: (user) => user.name,
    getAverage: (byKm, range) => range / byKm,
}

function component(props: Props1Type){
    console.log('props: ', props);
    console.log('user: ', props.user);
    console.log('auto: ', props.auto);

    const result = props.getAverage(props.auto.byKm, props.auto.range);
    console.log('average: ', result)
    return `<div>props</div>`
}

component(obj);

const a = 15;
let message: string = ''

if(a < 5){
    console.log('hello');
} else {
    console.log('hello from else');
}

let number = 40;

function exampleFunction(num: number){
    let age: number = 100;
    switch(num){
        case 20: {
        }
        case 30: {
        }
        case 40: {
        }
        case 50: {
            age = num + 20;
            break;
        }
        default: {
            age = num;
        }
    }

    return age * 2;
}

console.log(exampleFunction(40))
