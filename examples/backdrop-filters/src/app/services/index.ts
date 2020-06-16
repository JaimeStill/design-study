import { CoreService } from './core.service';
import { PeopleService } from './people.service';
import { SnackerService } from './snacker.service';
import { ThemeService } from './theme.service';

export const Services = [
  CoreService,
  PeopleService,
  SnackerService,
  ThemeService
];

export * from './core.service';
export * from './people.service';
export * from './snacker.service';
export * from './theme.service';
