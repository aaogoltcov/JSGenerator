import { Bowerman } from '../hero'
import { Swordsman } from '../hero'
import { Magician } from '../hero'
import { Daemon } from '../hero'
import { Undead } from '../hero'
import Team from '../Team'
import { test } from "@jest/globals"

test('should be iterator', () => {
    let array = [
        new Bowerman('Nick'),
        new Swordsman('Nick'),
        new Magician('Nick'),
        new Daemon('Nick'),
        new Undead('Nick'),
    ]

    let person = (new Team(array)).getPerson()

    expect(person.next().value).toEqual({
        name: 'Nick',
        type: 'Bowerman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    });

    expect(person.next().value).toEqual({
        name: 'Nick',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    });

    expect(person.next().value).toEqual({
        name: 'Nick',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    });

    expect(person.next().value).toEqual({
        name: 'Nick',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    });

    expect(person.next().value).toEqual({
        name: 'Nick',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    });

    expect(person.next().value).toEqual(undefined);

})

