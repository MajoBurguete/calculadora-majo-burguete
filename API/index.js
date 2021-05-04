//Import express and cors modules
const cors = require('cors');
const express = require('express');

//Create the express app with cors enabled
const app = express();
app.use(cors());
app.options('*', cors());

//Define port
const port = 8085;

//Define root controller (GET)
app.get('/', (req, res, next) => {
	res.send('Welcome to my API');
});

//Define get controller for suma 
app.get('/suma', (req, res, next) => {
	var value1 = req.query.value1;
	var value2 = req.query.value2;
	console.log(value1);
	console.log(value2);

	var resultado = parseInt(value1) + parseInt(value2) ;
	var objResult = {
		resultado: resultado
	}
	res.send(objResult);
});

//Define get controller for resta 
app.get('/rest', (req, res, next) => {
	var value1 = parseFloat(req.query.value1);
	var value2 = parseFloat(req.query.value2);
	console.log(value1);
	console.log(value2);

	var resultado = value1 - value2;
	console.log(resultado);
	var objResult = {
		resultado: resultado
	}
	res.send(objResult);
});

//Define get controller for multiplicación 
app.get('/mult', (req, res, next) => {
	var value1 = parseFloat(req.query.value1);
	var value2 = parseFloat(req.query.value2);
	console.log(value1);
	console.log(value2);

	var resultado = value1 * value2;
	console.log(resultado);
	var objResult = {
		resultado: resultado
	}
	res.send(objResult);
});

//Define get controller for división 
app.get('/div', (req, res, next) => {
	var value1 = parseFloat(req.query.value1);
	var value2 = parseFloat(req.query.value2);
	console.log(value1);
	console.log(value2);

	var resultado = value1 / value2;
	console.log(resultado);
	var objResult = {
		resultado: resultado
	}
	res.send(objResult);
});

//Define get controller for raiz
app.get('/raiz', (req, res, next) => {
	var value1 = parseFloat(req.query.value1);
	console.log(value1);

	var resultado = Math.sqrt(value1);
	console.log(resultado);
	var objResult = {
		resultado: resultado
	}
	res.send(objResult);
});

//Define get controller for raiz
app.get('/potencia', (req, res, next) => {
	var value1 = parseFloat(req.query.value1);
	console.log(value1);

	var resultado = value1 * value1;
	console.log(resultado);
	var objResult = {
		resultado: resultado
	}
	res.send(objResult);
});

app.listen(port, () => 
	console.log('Listening on port ' + port)
);
