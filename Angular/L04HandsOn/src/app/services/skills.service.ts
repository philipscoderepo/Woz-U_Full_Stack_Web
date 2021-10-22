import { Injectable } from '@angular/core';

import { Skill } from '../models/skill';
import { Level } from '../types/level.enum';

@Injectable({
    providedIn: 'root'
})
export class SkillsService {
    skills: Skill[] = [
        {
            id: 0,
            name: 'Abstract Mathematics',
            level: Level.Expert
        },
        {
            id: 1,
            name: 'Philosophy',
            level: Level.Advanced
        },
        {
            id: 2,
            name: 'Developing Software',
            level: Level.Expert
        }
    ];

    constructor() {}
}
