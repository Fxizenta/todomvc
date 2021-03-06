const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]


const url =``
    ``

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

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






