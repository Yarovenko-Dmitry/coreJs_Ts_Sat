console.log('lesson2JS works');

const example = [{ name: 'Petia' },{ name: 'Ivan' },{ name: 'Sasha'}];

const copy = example.map(function(elem){
    return 'Hello ' + elem.name + '1';
});
console.log('copy: ', copy);

const copy2 = [ ...example ];

const example3 = [];
for(let i = 0; i < example.length; i++){
    example3.push(example[i]);
}

console.log('example: ', example);
console.log('example3: ', example3);

const user = {
    name: 'Petia',
    age: 32,
    place: {
        city: 'Minsk'
    }
};

const user2 = { ...user};

user2.place.city = 'Kiev';

console.log('user: ', user);
console.log('user2: ', user2);
