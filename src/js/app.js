'use strict'

import { Bowerman } from './hero'
import { Swordsman } from './hero'
import { Magician } from './hero'
import { Daemon } from './hero'
import { Undead } from './hero'
import Team from './Team'

let array = [
    new Bowerman('Nick'),
    new Swordsman('Nick'),
    new Magician('Nick'),
    new Daemon('Nick'),
    new Undead('Nick'),
]

let person = (new Team(array)).getPerson()
console.log(person.next().value);
console.log(person.next().value);
console.log(person.next().value);
console.log(person.next().value);
console.log(person.next().value);
