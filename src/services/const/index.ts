import { Topic } from './enum'
import { mapNameTopicToSlug } from './map'

export const listTopicShowInHeaders = Object.values(Topic).map((topic, index) => ({
  id: index + 1,
  name: topic,
  slug: mapNameTopicToSlug[topic]
}));

