const animal = {};
    animal.species = "panda";
    animal['name'] = "Bob";
    animal.noises = [];
    
   const noises = [];
    noises[0] = 'munch';
    noises.push('(yawn noise)');
    noises.unshift('twang');
    noises[noises.length] = 'awww';
    
    // console.log(noises.length);
    // console.log(noises[noises.length-1]);
    // console.log(noises);
    
   animal['noises'] = noises;
    
   animal.noises.push('baaaa');
    
   // console.log(animal);

var animals = [];
    animals.push(animal);
    
   const duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
    animals.push(duck);
    
   console.log(animals);

// array: 
// arrays are easy to hold a list of things for example a list of friends

const friends = [];

function getRandomAnimal(array) {
    return array[ Math.floor((Math.random() * array.length-1) + 1) ] ;
}

friends.push( getRandomAnimal(animals) );


function search(name) {
    for(let i = 0; i < animals.length; i++) {
        if(animals[i].name == name) {
            return animals[i];
        }
    }
    return null;
}

function edit(name, object) {
    for(let i = 0; i < animals.length; i++) {
        if(animals[i].name == name) {
            animals.splice(i, 1, object);
        }
    }
}

function remove(name) {
    for(let i = 0; i < animals.length; i++) {
        if(animals[i].name == name) {
            animals.splice(i, 1);
        }
    }
}

function create(object) {
    if(object.name !== undefined && object.name.length > 0) {
        if(object.species !== undefined && object.species.length > 0) {
            for(let i = 0; i < animals.length; i++) {
                if(animals[i].name === object.name) {
                    return;
                }
            }
            animals.push(object);
        }
    }
}

