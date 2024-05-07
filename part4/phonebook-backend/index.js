const express = require('express')
const app = express()

let phonebook = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
];

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
    response.json(phonebook)
})

app.get('/api/persons/:id', (request, response) => {
    const resource = phonebook.find(number => number.id === parseInt(request.params.id));
    if (resource != undefined) {
        response.json(resource);
    } else {
        response.status(404).end();
    }
})
app.delete('/api/persons/:id', (request, response) => {
    phonebook = phonebook.filter(number => number.id !== parseInt(request.params.id));
    response.status(204).end();

})

app.get('/info', (request, response) => {
    const date = new Intl.DateTimeFormat("pl-PL", {
        dateStyle: "full",
        timeStyle: "full"
    }).format(new Date());
    response.send("Phonebook has info for " + phonebook.length + " people<br>" + date);
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})