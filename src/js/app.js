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

let team = (new Team());
console.log(team);
team.add(array);
console.log(team);
console.log(team.get())
for (const person of team) {
    console.log(person);
}
console.log(team[Symbol.iterator]().next().value)
