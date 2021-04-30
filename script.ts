console.log('Detta är en TypeScript app');

let x = 15;  // datatypen Number

// x = 'Hallå';   <- inte okej! x får bara vara ett Number

let y: boolean;


// let dataFromApi = "nisse"  // hoppsan! en bug i koden
let dataFromApi = [
	{ name: 'Nisse', loves: 'sågspån' },
	{ name: 'Stina', loves: 'citron' }
]

// Dags att använda datan
dataFromApi.forEach(hamster => {
	console.log('Hamster: ', hamster.name);

})
