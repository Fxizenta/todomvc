require('dotenv').config()
const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to',url)


mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connection successful!'))
    .catch(error => {
        console.log('Connection Failed!',error.message)
    })

const personSchema = new mongoose.Schema({
    name: String,
    phone: String,
})

const Person = mongoose.model('Person', personSchema);
if(process.argv[3]&&process.argv[4])
{
    const name=process.argv[3];
    const phone=process.argv[4];
    const person = new Person({
        name: name,
        phone: phone,
    })
    person.save().then(result => {
        console.log(`added ${name} number ${phone} to phonebook`);
        mongoose.connection.close();
    })
}else{
    Person.find({}).then(result => {
        console.log('phonebook:');
        result.forEach(person => console.log(person.name,person.phone));
        mongoose.connection.close();
    })
}

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Person', personSchema)