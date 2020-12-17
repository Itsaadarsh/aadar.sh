import {
  DiJavascript1,
  DiReact,
  DiRedis,
  DiNodejs,
  DiPostgresql,
  DiMongodb,
  DiDocker,
  DiGit,
  DiPython,
} from 'react-icons/di';

import { SiGraphql, SiTypescript } from 'react-icons/si';

export default [
  {
    name: 'JavaScript',
    color: '#f0db4f',
    icon: DiJavascript1,
  },
  {
    name: 'Typescript',
    color: '#2F74C0',
    icon: SiTypescript,
  },
  {
    name: 'React',
    color: '#61dbfb',
    icon: DiReact,
  },
  {
    name: 'NodeJS',
    color: '#68a063',
    icon: DiNodejs,
  },
  {
    name: 'GraphQL',
    color: '#e535ab',
    icon: SiGraphql,
    size: '1.05rem',
  },
  {
    name: 'PostgreSQL',
    color: '#30648c',
    icon: DiPostgresql,
  },
  {
    name: 'MongoDB',
    color: '#4db33d',
    icon: DiMongodb,
  },
  {
    name: 'Redis',
    color: '#d82c20',
    icon: DiRedis,
  },
  {
    name: 'Git',
    color: '#dd4814',
    icon: DiGit,
  },
  {
    name: 'Docker',
    color: '#2391E6',
    icon: DiDocker,
  },
];
