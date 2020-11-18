import { Bowerman } from '../hero'
import { Swordsman } from '../hero'
import { Magician } from '../hero'
import { Daemon } from '../hero'
import { Undead } from '../hero'
import Team from '../Team'
import { describe, test } from "@jest/globals"

describe('test iterator', () => {
    test('team{Symbol.iterator]', () => {
        let array = [
            new Bowerman('Nick'),
            new Swordsman('Nick'),
            new Magician('Nick'),
            new Daemon('Nick'),
            new Undead('Nick'),
        ]
        const team = new Team();
        team.add(array);
        const expected = [];
        for (const person of team) {
            expected.push(person);
        }
        expect(expected).toEqual(team.get());
    });
});

