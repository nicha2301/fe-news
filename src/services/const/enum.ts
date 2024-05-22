export interface NewsTopic {
  name: Topic
  subTopics?: NewsTopic[]
}
export enum Topic {
  EDUCATION = 'Giáo dục',
  POLICY = 'Chính sách',
  LOCAL = 'Địa phương',
  TRAINING_ADMISSION = 'Đào tạo - Tuyển sinh',
  FOUR_DIRECTIONS = 'Bốn phương',
  MOVEMENT = 'Chuyển động',
  NEWS = 'Thời sự',
  URBAN_EDUCATION = 'Giáo dục Đô thị',
  SOCIETY = 'Xã hội',
  POLITICS = 'Chính trị',
  ECONOMY = 'Kinh tế',
  LEGAL_EDUCATION = 'Giáo dục pháp luật',
  SECURITY = 'An ninh',
  LEGAL_SYSTEM = 'Pháp đình',
  READERS_INVESTIGATION = 'Bạn đọc - Điều tra',
  CONNECTION = 'Kết nối',
  LABOR_UNION = 'Công đoàn',
  COMPANION = 'Đồng hành',
  SCIENCE_TECHNOLOGY = 'Khoa học - Công nghệ',
  EXCHANGE = 'Trao đổi',
  METHODOLOGY = 'Phương pháp',
  EXPERT_CORNER = 'Góc chuyên gia',
  SCHOOL = 'Học đường',
  SKILLS = 'Kỹ năng',
  STUDY_ABROAD = 'Du học',
  FACES = 'Gương mặt',
  PHYSICAL = 'Thể chất',
  HUMANITY = 'Nhân ái',
  WORLD = 'Thế giới',
  NATIONAL_DEFENSE_EDUCATION = 'Giáo dục Quốc phòng',
  WORLD_ISSUES = 'Thế giới đó đây',
  STRANGE_STORIES = 'Chuyện lạ',
  HEALTH = 'Sức khỏe',
  HEALTH_BEAUTY = 'Khoẻ đẹp',
  FAMILY = 'Gia đình',
  COVID_19_PREVENTION = 'Đẩy lùi Covid-19',
  MEDIA = 'Media',
  INFOGRAPHIC = 'Infographic',
  VIDEO = 'Video',
  HOT_NEWS = 'Nóng 247',
  HIGHLIGHTS = 'Tiêu điểm',
  CULTURE = 'Văn hóa',
  CREATION = 'Sáng tác',
  CULTURAL_LIFE = 'Đời sống văn hoá',
  CELEBRITIES = 'Sao',
  SPORTS = 'Thể thao',
  SCHOOL_SPORTS = 'Thể thao học đường'
}

export const newsTopics: NewsTopic[] = [
  {
    name: Topic.EDUCATION,
    subTopics: [
      { name: Topic.POLICY },
      { name: Topic.LOCAL },
      { name: Topic.TRAINING_ADMISSION },
      { name: Topic.FOUR_DIRECTIONS },
      { name: Topic.MOVEMENT }
    ]
  },
  {
    name: Topic.NEWS,
    subTopics: [
      { name: Topic.URBAN_EDUCATION },
      { name: Topic.SOCIETY },
      { name: Topic.POLITICS },
      { name: Topic.ECONOMY }
    ]
  },
  {
    name: Topic.LEGAL_EDUCATION,
    subTopics: [
      { name: Topic.SECURITY }, 
      { name: Topic.LEGAL_SYSTEM }, 
      { name: Topic.READERS_INVESTIGATION }
    ]
  },
  {
    name: Topic.CONNECTION,
    subTopics: [
      { name: Topic.LABOR_UNION }, 
      { name: Topic.COMPANION }, 
      { name: Topic.SCIENCE_TECHNOLOGY }
    ]
  },
  {
    name: Topic.EXCHANGE,
    subTopics: [
      { name: Topic.METHODOLOGY }, 
      { name: Topic.EXPERT_CORNER }
    ]
  },
  {
    name: Topic.SCHOOL,
    subTopics: [
      { name: Topic.SKILLS }, 
      { name: Topic.STUDY_ABROAD }, 
      { name: Topic.FACES }, 
      { name: Topic.PHYSICAL }
    ]
  },
  {
    name: Topic.HUMANITY,
    subTopics: []
  },
  {
    name: Topic.WORLD,
    subTopics: [
      { name: Topic.NATIONAL_DEFENSE_EDUCATION },
      { name: Topic.WORLD_ISSUES },
      { name: Topic.STRANGE_STORIES }
    ]
  },
  {
    name: Topic.HEALTH,
    subTopics: [
      { name: Topic.HEALTH_BEAUTY }, 
      { name: Topic.FAMILY }, 
      { name: Topic.COVID_19_PREVENTION }
    ]
  },
  {
    name: Topic.MEDIA,
    subTopics: [
      { name: Topic.INFOGRAPHIC },
      { name: Topic.VIDEO },
      { name: Topic.HOT_NEWS },
      { name: Topic.HIGHLIGHTS }
    ]
  },
  {
    name: Topic.CULTURE,
    subTopics: [
      { name: Topic.SKILLS }, 
      { name: Topic.CULTURAL_LIFE }, 
      { name: Topic.CELEBRITIES }
    ]
  },
  {
    name: Topic.SPORTS,
    subTopics: [{ name: Topic.SCHOOL_SPORTS }]
  }
]
