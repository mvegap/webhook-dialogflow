const functions = require('firebase-functions');
const App = require('actions-on-google').DialogflowApp;


exports.helloWorld = functions.https.onRequest((request,response) => {

	let app = new App({request, response});

	function addNumbers(app)
	{
		let firstNumber = parseInt(app.getArgument('firstNumber'));
		let secondNumber = parseInt(app.getArgument('secondNumber'));
		app.tell('Respuesta: ' + (firstNumber + secondNumber));
	}


	function addMultiplicar(app)
	{
		let firstNumber = parseInt(app.getArgument('firstNumber'));
		let secondNumber = parseInt(app.getArgument('secondNumber'));
		app.tell('Respuesta: ' + (firstNumber * secondNumber));
	}

	function calcular_promedio(app)
	{
		let nota_uno = parseInt(app.getArgument('nota_uno'));
		let nota_dos = parseInt(app.getArgument('nota_dos'));
		let nota_tres = parseInt(app.getArgument('nota_tres'));

		let promedio = ((nota_uno + nota_dos + nota_tres) / 3);

		if (promedio >= 12) {
			app.tell('APROBADO\n\nTe encuentras aprobado con: ' + promedio.toFixed(2));
		}else{
			app.tell('DESAPROBADO\n\nTe encuentras desaprobado con: ' + promedio.toFixed(2));
		}


	}

	const actionMap = new Map();
	actionMap.set('sumar', addNumbers);
	actionMap.set('multiplicar', addMultiplicar);
	actionMap.set('calcular_promedio', calcular_promedio);


	app.handleRequest(actionMap);
});
