import { Character } from '../hero'
import { Bowerman } from '../hero'
import { Swordsman } from '../hero'
import { Magician } from '../hero'
import { Daemon } from '../hero'
import { Undead } from '../hero'
import { Zombie } from '../hero'
import { test } from "@jest/globals";

test('should mistake', () => {

    expect(function() {
        new Zombie('')
    }).toThrow(new Error('Name is too short / long...'));

    expect(function() {
        new Character('Monster', '')
    }).toThrow(new Error('Wrong type of Hero...'));

});

test('should objects', () => {

    expect(new Character('Monster', 'Daemon')).toEqual({
        name: 'Monster',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: undefined,
        defence: undefined
    });

    expect(new Bowerman('Nick')).toEqual({
        name: 'Nick',
        type: 'Bowerman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    });

    expect(new Swordsman('Nick')).toEqual({
        name: 'Nick',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    });

    expect(new Magician('Nick')).toEqual({
        name: 'Nick',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    });

    expect(new Daemon('Nick')).toEqual({
        name: 'Nick',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    });

    expect(new Undead('Nick')).toEqual({
        name: 'Nick',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    });

    expect(new Zombie('Nick')).toEqual({
        name: 'Nick',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    });

});
