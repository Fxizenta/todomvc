const express =require('express')
var morgan=require("morgan");
const app=express()
const cors = require('cors')
const Person=require('./models/Person')

app.use(cors())
app.use(express.json());
app.use(morgan("tiny"));

const requestLogger = (request, response, next) => {
    console.log("Method:", request.method);
    console.log("Path:  ", request.path);
    console.log("Body:  ", request.body);
    console.log("---");
    next();
};

app.use(requestLogger);
morgan.token("body", req => JSON.stringify(req.body))

let persons=[
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    },
    {
        "name": "kai",
        "number": "23333",
        "id": 5
    }
]

app.get('/api/persons',(request,response)=>{
    Person.find({}).then(notes => {
        response.json(notes)
    })
})

app.get('/info',(request,response)=>{
    const date=new Date();
    response.send(`<p>Phonebook has info for ${persons.length} people</p> `+date)

})

app.get('/api/persons/:id',(request,response)=>{
    Person.findById(request.params.id).then(note => {
        if(person){
            response.json(person);
        }else{
            response.status(404).end()
        }
    })


})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    if(persons.filter(person=>person.id===body.id).length===0){
        return response.status(400).json({
            error: "don\'t have this id"
        })
    }
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

app.post('/api/persons',(request,response)=>{

    const body=request.body;
    if(body.name===undefined){
        return response.status(400).json({
            error: "you must write name"
        })
    }
    if(body.number===undefined){
        return response.status(400).json({
            error: "you must write number"
        })
    }
    if(persons.filter(person=>person.name==body.name).length>=1){
        return response.status(400).json({
            error: "name must be unique"
        })
    }
    //console.log(body)

    if (body.content === undefined) {
        return response.status(400).json({ error: 'content missing' })
    }

    const person = new Person({
        name: body.name,
        phone: body.phone,
    })

    person.save().then(savedNote => {
        response.json(savedNote)
    })
})

const PORT=3001;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})