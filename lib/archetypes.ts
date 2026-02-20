// Akutar Personality Archetypes

export type ArchetypeId = 
  | 'explorer'
  | 'engineer'
  | 'commander'
  | 'scientist'
  | 'dreamer'
  | 'guardian'
  | 'innovator'
  | 'pilot';

export interface Archetype {
  id: ArchetypeId;
  name: string;
  tagline: string;
  description: string;
  traits: {
    helmet: string;
    visor: string;
    hand: string;
    background: string;
    team: string;
  };
  traitMeanings: {
    helmet: string;
    visor: string;
    hand: string;
    background: string;
    team: string;
  };
  realAstronauts: Array<{
    name: string;
    achievement: string;
    quote: string;
  }>;
  qualities: string[];
  mission: string;
}

export const archetypes: Record<ArchetypeId, Archetype> = {
  explorer: {
    id: 'explorer',
    name: 'The Explorer',
    tagline: 'You venture where others haven\'t',
    description: 'You\'re driven by curiosity and the thrill of discovery. Where others see limits, you see horizons. Just like Aku, you believe anything is possible.',
    traits: {
      helmet: 'Explorer Dome',
      visor: 'Stars Reflection',
      hand: 'Navigation Tools',
      background: 'Deep Space',
      team: 'Solo Pioneer'
    },
    traitMeanings: {
      helmet: 'You face the unknown with clear vision and openness',
      visor: 'You see possibility everywhere',
      hand: 'You chart your own course',
      background: 'Your dreams have no boundaries',
      team: 'You blaze trails for others to follow'
    },
    realAstronauts: [
      {
        name: 'Mae Jemison',
        achievement: 'First Black woman in space',
        quote: 'Never be limited by other people\'s limited imaginations.'
      },
      {
        name: 'Neil Armstrong',
        achievement: 'First person on the Moon',
        quote: 'That\'s one small step for man, one giant leap for mankind.'
      }
    ],
    qualities: [
      'Curiosity-driven',
      'Comfortable with uncertainty',
      'First to try new things',
      'Inspires others through action'
    ],
    mission: 'Your Akutar explores uncharted territory, discovering what others thought impossible.'
  },
  
  engineer: {
    id: 'engineer',
    name: 'The Engineer',
    tagline: 'You build the impossible',
    description: 'Systems, solutions, and structures—you make them work when others can\'t. Your Akutar keeps the mission running.',
    traits: {
      helmet: 'Technical Headset',
      visor: 'HUD Display',
      hand: 'Repair Tools',
      background: 'Workshop Bay',
      team: 'Systems Crew'
    },
    traitMeanings: {
      helmet: 'You analyze and protect with precision',
      visor: 'You see the data others miss',
      hand: 'You fix what\'s broken, build what\'s needed',
      background: 'Your strength comes from preparation',
      team: 'You make sure everyone has what they need'
    },
    realAstronauts: [
      {
        name: 'Katherine Johnson',
        achievement: 'NASA mathematician who calculated trajectories for Apollo 11',
        quote: 'We will always have STEM with us. Some things will drop out of the public eye and go away, but there will always be science, engineering and technology.'
      }
    ],
    qualities: [
      'Problem-solver',
      'Detail-oriented',
      'Builds reliable systems',
      'Thrives on technical challenges'
    ],
    mission: 'Your Akutar builds the infrastructure that makes exploration possible.'
  },

  commander: {
    id: 'commander',
    name: 'The Commander',
    tagline: 'You lead with confidence',
    description: 'Teams trust you to make the call. You chart the course for everyone. Your Akutar leads the mission.',
    traits: {
      helmet: 'Command Visor',
      visor: 'Strategic View',
      hand: 'Mission Flag',
      background: 'Earth',
      team: 'Fleet Commander'
    },
    traitMeanings: {
      helmet: 'You protect and direct with authority',
      visor: 'You see the big picture',
      hand: 'You carry the mission forward',
      background: 'You remember where you came from',
      team: 'You coordinate the whole crew'
    },
    realAstronauts: [
      {
        name: 'Sally Ride',
        achievement: 'First American woman in space, later directed NASA programs',
        quote: 'All adventures, especially into new territory, are scary.'
      }
    ],
    qualities: [
      'Natural leader',
      'Strategic thinker',
      'Decisive under pressure',
      'Builds team cohesion'
    ],
    mission: 'Your Akutar leads the fleet, making decisions that shape the future.'
  },

  scientist: {
    id: 'scientist',
    name: 'The Scientist',
    tagline: 'Knowledge is your North Star',
    description: 'You question, test, and prove. Your Akutar expands what humanity knows.',
    traits: {
      helmet: 'Research Dome',
      visor: 'Analysis Lens',
      hand: 'Scientific Instruments',
      background: 'Laboratory',
      team: 'Research Team'
    },
    traitMeanings: {
      helmet: 'You protect your curiosity',
      visor: 'You examine everything closely',
      hand: 'You measure and understand',
      background: 'Your lab is where discoveries happen',
      team: 'You collaborate with fellow researchers'
    },
    realAstronauts: [
      {
        name: 'Ellen Ochoa',
        achievement: 'First Latina in space, director of Johnson Space Center',
        quote: 'Don\'t be afraid to reach for the stars. I believe a good education can take you anywhere on Earth and beyond.'
      }
    ],
    qualities: [
      'Methodical',
      'Knowledge-seeking',
      'Data-driven',
      'Expands understanding'
    ],
    mission: 'Your Akutar conducts experiments that change what we know about the universe.'
  },

  dreamer: {
    id: 'dreamer',
    name: 'The Dreamer',
    tagline: 'You see what could be',
    description: 'Imagination fuels your journey. You reach for stars others haven\'t imagined. Your Akutar turns dreams into reality.',
    traits: {
      helmet: 'Vision Sphere',
      visor: 'Horizon Gaze',
      hand: 'Star Compass',
      background: 'Nebula',
      team: 'Dream Collective'
    },
    traitMeanings: {
      helmet: 'Your dreams are bigger than limitations',
      visor: 'You see the future before it arrives',
      hand: 'You navigate by vision, not maps',
      background: 'Your origins are as vast as possibility',
      team: 'You inspire others to dream bigger'
    },
    realAstronauts: [
      {
        name: 'Guion Bluford',
        achievement: 'First African American in space',
        quote: 'I wanted to set the standard, do the best job possible so that other people would be comfortable with African-Americans flying in space.'
      }
    ],
    qualities: [
      'Visionary',
      'Idealistic',
      'Inspiring',
      'Future-focused'
    ],
    mission: 'Your Akutar imagines worlds that don\'t exist yet—and builds them.'
  },

  guardian: {
    id: 'guardian',
    name: 'The Guardian',
    tagline: 'You protect what matters',
    description: 'The mission, the crew, the future. Your Akutar stands watch when others rest.',
    traits: {
      helmet: 'Shield Dome',
      visor: 'Protective Scan',
      hand: 'Emergency Kit',
      background: 'Station Watch',
      team: 'Security Detail'
    },
    traitMeanings: {
      helmet: 'You safeguard against threats',
      visor: 'You spot danger before it arrives',
      hand: 'You\'re always prepared',
      background: 'Your vigilance keeps everyone safe',
      team: 'You watch over the whole crew'
    },
    realAstronauts: [
      {
        name: 'Chris Hadfield',
        achievement: 'Canadian astronaut, commander of ISS',
        quote: 'Preparation is not only about minimizing bad results, it\'s about maximizing favorable outcomes.'
      }
    ],
    qualities: [
      'Protective',
      'Reliable',
      'Prepared for emergencies',
      'Team-focused'
    ],
    mission: 'Your Akutar ensures everyone makes it home safely.'
  },

  innovator: {
    id: 'innovator',
    name: 'The Innovator',
    tagline: 'You write your own rules',
    description: 'Creativity is your superpower. You push boundaries and invent tomorrow. Your Akutar builds what\'s never been built.',
    traits: {
      helmet: 'Prototype Gear',
      visor: 'Experimental Lens',
      hand: 'Invention Tools',
      background: 'Innovation Lab',
      team: 'R&D Squad'
    },
    traitMeanings: {
      helmet: 'You test what others think is impossible',
      visor: 'You see solutions no one else imagines',
      hand: 'You create new tools for new problems',
      background: 'Your workshop is where the future begins',
      team: 'You collaborate with fellow inventors'
    },
    realAstronauts: [
      {
        name: 'Elon Musk',
        achievement: 'SpaceX founder, revolutionizing space access',
        quote: 'When something is important enough, you do it even if the odds are not in your favor.'
      }
    ],
    qualities: [
      'Creative problem-solver',
      'Risk-taker',
      'Thinks differently',
      'Builds the future'
    ],
    mission: 'Your Akutar invents technologies that change how we explore space.'
  },

  pilot: {
    id: 'pilot',
    name: 'The Pilot',
    tagline: 'You fly where others fear',
    description: 'Quick, decisive, unstoppable. You navigate chaos like second nature. Your Akutar commands the helm.',
    traits: {
      helmet: 'Flight Helm',
      visor: 'Tactical Display',
      hand: 'Control Stick',
      background: 'Cockpit View',
      team: 'Flight Crew'
    },
    traitMeanings: {
      helmet: 'You stay focused under pressure',
      visor: 'You react faster than others think',
      hand: 'You control the journey',
      background: 'Your view is always forward',
      team: 'You coordinate with precision'
    },
    realAstronauts: [
      {
        name: 'Buzz Aldrin',
        achievement: 'Lunar Module Pilot for Apollo 11',
        quote: 'I believe that space travel will one day become as common as airline travel is today.'
      }
    ],
    qualities: [
      'Action-oriented',
      'Quick-thinking',
      'Adaptable',
      'Thrives in motion'
    ],
    mission: 'Your Akutar pilots the ship through the most dangerous missions.'
  }
};
