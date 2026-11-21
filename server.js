const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

app.get('/', (request, response) => {
    response.status(200).send('Jairish Dacquel');
});

app.post('/greetings', (request, response) => {
	const { name, course, section } = request.body;
	response.status(200).json({
		name: name,
		course: course,
		section: section,
		message: `Hello ${name}, welcome to the ${course}, section ${section}!`
	});
});

app.listen(8000, error => {
    if(error) {
        console.error("Error Starting Server: ", error);
        process.exit(1);
	};
	console.log("Server running on port: ", 8000);
})

app.put('/greetings', (request, response) => {
    const { name, course, section } = request.body;

    response.status(200).json({
        name: name,
        course: course,
        section: section,
        message: `Greeting successfully updated! Hello ${name}, welcome to the ${course}, section ${section}!`
    });
});

app.post('/login', (request, response) => {
    const { username, password } = request.body;

    if (username === 'admin' && password === '1234') {
        return response.status(200).json({
            message: 'Welcome, admin!'
        });
    }

    response.status(401).json({
        message: 'Invalid username or password!'
    });
});