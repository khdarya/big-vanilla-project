import React from 'react'
//@ts-ignore
const student = {
    name: "Dimych",
    age: 32,
    isActive: false,
address: {
    streetTitle: "Surganova 2",
    city: {
        title: "Minsk",
        countyTitle: "Belarus"
    }
},
technologies: [
    {id: 1, title: "CSS"},
    {id: 2 ,title: "JS"},
    {id: 3 ,title: "React"},
]

}
console.log(student.age)
console.log(student.address.city.title)
console.log(student.technologies[2].title)

const student1 = {
name: "Ala",
age: 32,
isW: true
},
    //@ts-ignore
khast: {
country: "Belarus",
    city: {
title: "Minsk",
county: "Minskaya"
    }
},
technologies1 = [
{id: 1, title: "ttt"},
{id:2, title: "mmmm"},
{id: 3, title: "ddd"}
]