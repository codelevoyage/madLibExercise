
const timeOfDay = "bright morning";

const mathResult = 5 * 5;

const isMorning = timeOfDay.includes("morning");

const pirate = { name: "Captain Jack", ship: "The Black Pearl", treasure: "gold coins" };


const story = `
One ${timeOfDay}, I set sail on a pirate ship named ${pirate.ship}. The endless sea stretched endlessly before us.
Just then, we spotted a mysterious chest floating in the water. 'Could it be treasure?' 
${isMorning ? pirate.name : "Captain X"} exclaimed. 
We hauled it aboard and opened it. Did you know ${5} × ${5} = ${mathResult}? Incredible, right?
`;


document.getElementById("madlibs-output").textContent = story;


console.log(story);
