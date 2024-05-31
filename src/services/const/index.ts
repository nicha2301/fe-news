import { Topic } from './enum'
import { mapNameTopicToSlug } from './map'

export interface NewsTopic {
  name: Topic
  link: string
  subTopics?: NewsTopic[]
}

export const newsTopics: NewsTopic[] = [
  {
    name: Topic.EDUCATION,
    subTopics: [
      {
        name: Topic.POLICY,
        link: mapNameTopicToSlug[Topic.POLICY]
      },
      {
        name: Topic.LOCAL,
        link: mapNameTopicToSlug[Topic.LOCAL]
      },
      {
        name: Topic.TRAINING_ADMISSION,
        link: mapNameTopicToSlug[Topic.TRAINING_ADMISSION]
      },
      {
        name: Topic.FOUR_DIRECTIONS,
        link: mapNameTopicToSlug[Topic.FOUR_DIRECTIONS]
      },
      {
        name: Topic.MOVEMENT,
        link: mapNameTopicToSlug[Topic.MOVEMENT]
      }
    ],
    link: mapNameTopicToSlug[Topic.EDUCATION]
  },
  {
    name: Topic.NEWS,
    subTopics: [
      {
        name: Topic.URBAN_EDUCATION,
        link: mapNameTopicToSlug[Topic.URBAN_EDUCATION]
      },
      {
        name: Topic.SOCIETY,
        link: mapNameTopicToSlug[Topic.SOCIETY]
      },
      {
        name: Topic.POLITICS,
        link: mapNameTopicToSlug[Topic.POLITICS]
      },
      {
        name: Topic.ECONOMY,
        link: mapNameTopicToSlug[Topic.ECONOMY]
      }
    ],
    link: mapNameTopicToSlug[Topic.NEWS]
  },
  {
    name: Topic.LEGAL_EDUCATION,
    subTopics: [
      {
        name: Topic.SECURITY,
        link: mapNameTopicToSlug[Topic.SECURITY]
      },
      {
        name: Topic.LEGAL_SYSTEM,
        link: mapNameTopicToSlug[Topic.LEGAL_SYSTEM]
      },
      {
        name: Topic.READERS_INVESTIGATION,
        link: mapNameTopicToSlug[Topic.READERS_INVESTIGATION]
      }
    ],
    link: mapNameTopicToSlug[Topic.LEGAL_EDUCATION]
  },
  {
    name: Topic.CONNECTION,
    subTopics: [
      {
        name: Topic.LABOR_UNION,
        link: mapNameTopicToSlug[Topic.LABOR_UNION]
      },
      {
        name: Topic.COMPANION,
        link: mapNameTopicToSlug[Topic.COMPANION]
      },
      {
        name: Topic.SCIENCE_TECHNOLOGY,
        link: mapNameTopicToSlug[Topic.SCIENCE_TECHNOLOGY]
      }
    ],
    link: mapNameTopicToSlug[Topic.CONNECTION]
  },
  {
    name: Topic.EXCHANGE,
    subTopics: [
      {
        name: Topic.METHODOLOGY,
        link: mapNameTopicToSlug[Topic.METHODOLOGY]
      },
      {
        name: Topic.EXPERT_CORNER,
        link: mapNameTopicToSlug[Topic.EXPERT_CORNER]
      }
    ],
    link: mapNameTopicToSlug[Topic.EXCHANGE]
  },
  {
    name: Topic.SCHOOL,
    subTopics: [
      {
        name: Topic.SKILLS,
        link: mapNameTopicToSlug[Topic.SKILLS]
      },
      {
        name: Topic.STUDY_ABROAD,
        link: mapNameTopicToSlug[Topic.STUDY_ABROAD]
      },
      {
        name: Topic.FACES,
        link: mapNameTopicToSlug[Topic.FACES]
      },
      {
        name: Topic.PHYSICAL,
        link: mapNameTopicToSlug[Topic.PHYSICAL]
      }
    ],
    link: mapNameTopicToSlug[Topic.SCHOOL]
  },
  {
    name: Topic.HUMANITY,
    subTopics: [],
    link: mapNameTopicToSlug[Topic.HUMANITY]
  },
  {
    name: Topic.WORLD,
    subTopics: [
      {
        name: Topic.NATIONAL_DEFENSE_EDUCATION,
        link: mapNameTopicToSlug[Topic.NATIONAL_DEFENSE_EDUCATION]
      },
      {
        name: Topic.WORLD_ISSUES,
        link: mapNameTopicToSlug[Topic.WORLD_ISSUES]
      },
      {
        name: Topic.STRANGE_STORIES,
        link: mapNameTopicToSlug[Topic.STRANGE_STORIES]
      }
    ],
    link: mapNameTopicToSlug[Topic.WORLD]
  },
  {
    name: Topic.HEALTH,
    subTopics: [
      {
        name: Topic.HEALTH_BEAUTY,
        link: mapNameTopicToSlug[Topic.HEALTH_BEAUTY]
      },
      {
        name: Topic.FAMILY,
        link: mapNameTopicToSlug[Topic.FAMILY]
      },
      {
        name: Topic.COVID_19_PREVENTION,
        link: mapNameTopicToSlug[Topic.COVID_19_PREVENTION]
      }
    ],
    link: mapNameTopicToSlug[Topic.HEALTH]
  },
  {
    name: Topic.MEDIA,
    subTopics: [
      {
        name: Topic.INFOGRAPHIC,
        link: mapNameTopicToSlug[Topic.INFOGRAPHIC]
      },
      {
        name: Topic.VIDEO,
        link: mapNameTopicToSlug[Topic.VIDEO]
      },
      {
        name: Topic.HOT_NEWS,
        link: mapNameTopicToSlug[Topic.HOT_NEWS]
      },
      {
        name: Topic.HIGHLIGHTS,
        link: mapNameTopicToSlug[Topic.HIGHLIGHTS]
      }
    ],
    link: mapNameTopicToSlug[Topic.MEDIA]
  },
  {
    name: Topic.CULTURE,
    subTopics: [
      {
        name: Topic.SKILLS,
        link: mapNameTopicToSlug[Topic.SKILLS]
      },
      {
        name: Topic.CULTURAL_LIFE,
        link: mapNameTopicToSlug[Topic.CULTURAL_LIFE]
      },
      {
        name: Topic.CELEBRITIES,
        link: mapNameTopicToSlug[Topic.CELEBRITIES]
      }
    ],
    link: mapNameTopicToSlug[Topic.CULTURE]
  },
  {
    name: Topic.SPORTS,
    subTopics: [
      {
        name: Topic.SCHOOL_SPORTS,
        link: mapNameTopicToSlug[Topic.SCHOOL_SPORTS]
      }
    ],
    link: mapNameTopicToSlug[Topic.SPORTS]
  }
]
