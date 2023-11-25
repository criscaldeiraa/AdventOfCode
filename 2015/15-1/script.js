const fs = require('fs');

//? 1 - What floor does Santa end up on?

function question1() {
    // Set up a variable to read the file
    fs.readFile('./instructions.txt', (err, data) => {
        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce((acc, currentValue) => {
            // Set up to go a level up or to go a level down
            if (currentValue === '(') {            
                return acc += 1
            } else if (currentValue === ')') {
                return acc -= 1
            }
        }, 0); //set the first floor to 0
        console.log('floor:', answer)
    })
}

question1()


//? 2 - When does Santa first enter the basement

function question2() {
    // Set up a variable to read the file
    fs.readFile('./instructions.txt', (err, data) => {
        const directions = data.toString();
        const directionsArray = directions.split('');
        let accumulator = 0;
        let counter = 0;
        const answer = directionsArray.some((currentItem) => {
            if (currentItem === '(') {            
                accumulator += 1
            } else if (currentItem === ')') {
                accumulator -= 1
            }
            counter ++
            return accumulator < 0;
        }); 
        console.log('Basement entered at:', counter)
    })
}

question2()