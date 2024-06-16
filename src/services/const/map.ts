import { Topic } from "./enum"


export const mapSlugToTopic: Record<string, Topic> = {
  'giao-duc': Topic.EDUCATION,
  'xa-hoi': Topic.SOCIETY,
  'the-thao': Topic.SPORTS,
  'chinh-sach': Topic.POLICY,
  'dia-phuong': Topic.LOCAL,
  'dao-tao-tuyen-sinh': Topic.TRAINING_ADMISSION,
  'bon-phuong': Topic.FOUR_DIRECTIONS,
  'chuyen-dong': Topic.MOVEMENT,
  'thoi-su': Topic.NEWS,
  'giao-duc-do-thi': Topic.URBAN_EDUCATION,
  'chinh-tri': Topic.POLITICS,
  'kinh-te': Topic.ECONOMY,
  'giao-duc-phap-luat': Topic.LEGAL_EDUCATION,
  'an-ninh': Topic.SECURITY,
  'phap-dinh': Topic.LEGAL_SYSTEM,
  'ban-doc-dieu-tra': Topic.READERS_INVESTIGATION,
  'ket-noi': Topic.CONNECTION,
  'cong-doan': Topic.LABOR_UNION,
  'sang-tac': Topic.CREATION,
  'dong-hanh': Topic.COMPANION,
  'khoa-hoc-cong-nghe': Topic.SCIENCE_TECHNOLOGY,
  'trao-doi': Topic.EXCHANGE,
  'phuong-phap': Topic.METHODOLOGY,
  'goc-chuyen-gia': Topic.EXPERT_CORNER,
  'hoc-duong': Topic.SCHOOL,
  'ky-nang': Topic.SKILLS,
  'du-hoc': Topic.STUDY_ABROAD,
  'guong-mat': Topic.FACES,
  'the-gioi': Topic.WORLD,
  'nhan-ai': Topic.HUMANITY,
  'the-chat': Topic.PHYSICAL,
  'giao-duc-quoc-phong': Topic.NATIONAL_DEFENSE_EDUCATION,
  'the-gioi-do-day': Topic.WORLD_ISSUES,
  'chuyen-la': Topic.STRANGE_STORIES,
  'suc-khoe': Topic.HEALTH,
  'khoi-luoi-covid-19': Topic.COVID_19_PREVENTION,
  'gia-dinh': Topic.FAMILY,
  'khoe-dep': Topic.HEALTH_BEAUTY,
  media: Topic.MEDIA,
  infographic: Topic.INFOGRAPHIC,
  video: Topic.VIDEO,
  'nong-247': Topic.HOT_NEWS,
  'tieu-diem': Topic.HIGHLIGHTS,
  'van-hoa': Topic.CULTURE,
  'doi-song-van-hoa': Topic.CULTURAL_LIFE,
  sao: Topic.CELEBRITIES,
  'the-thao-hoc-duong': Topic.SCHOOL_SPORTS
}

export const mapNameTopicToSlug: Record<Topic, string> = {
  [Topic.SOCIETY]: 'xa-hoi',
  [Topic.SPORTS]: 'the-thao',
  [Topic.POLICY]: 'chinh-sach',
  [Topic.LOCAL]: 'dia-phuong',
  [Topic.TRAINING_ADMISSION]: 'dao-tao-tuyen-sinh',
  [Topic.FOUR_DIRECTIONS]: 'bon-phuong',
  [Topic.MOVEMENT]: 'chuyen-dong',
  [Topic.NEWS]: 'thoi-su',
  [Topic.URBAN_EDUCATION]: 'giao-duc-do-thi',
  [Topic.POLITICS]: 'chinh-tri',
  [Topic.ECONOMY]: 'kinh-te',
  [Topic.LEGAL_EDUCATION]: 'giao-duc-phap-luat',
  [Topic.SECURITY]: 'an-ninh',
  [Topic.LEGAL_SYSTEM]: 'phap-dinh',
  [Topic.READERS_INVESTIGATION]: 'ban-doc-dieu-tra',
  [Topic.CONNECTION]: 'ket-noi',
  [Topic.LABOR_UNION]: 'cong-doan',
  [Topic.CREATION]: 'sang-tac',
  [Topic.COMPANION]: 'dong-hanh',
  [Topic.SCIENCE_TECHNOLOGY]: 'khoa-hoc-cong-nghe',
  [Topic.EXCHANGE]: 'trao-doi',
  [Topic.METHODOLOGY]: 'phuong-phap',
  [Topic.EXPERT_CORNER]: 'goc-chuyen-gia',
  [Topic.SCHOOL]: 'hoc-duong',
  [Topic.SKILLS]: 'ky-nang',
  [Topic.STUDY_ABROAD]: 'du-hoc',
  [Topic.FACES]: 'guong-mat',
  [Topic.WORLD]: 'the-gioi',
  [Topic.NATIONAL_DEFENSE_EDUCATION]: 'giao-duc-quoc-phong',
  [Topic.WORLD_ISSUES]: 'the-gioi-do-day',
  [Topic.STRANGE_STORIES]: 'chuyen-la',
  [Topic.HEALTH]: 'suc-khoe',
  [Topic.COVID_19_PREVENTION]: 'khoi-luoi-covid-19',
  [Topic.MEDIA]: 'media',
  [Topic.INFOGRAPHIC]: 'infographic',
  [Topic.VIDEO]: 'video',
  [Topic.HOT_NEWS]: 'nong-247',
  [Topic.HIGHLIGHTS]: 'tieu-diem',
  [Topic.CULTURE]: 'van-hoa',
  [Topic.CULTURAL_LIFE]: 'doi-song-van-hoa',
  [Topic.CELEBRITIES]: 'sao',
  [Topic.SCHOOL_SPORTS]: 'the-thao-hoc-duong',
  [Topic.EDUCATION]: 'giao-duc',
  [Topic.PHYSICAL]: 'the-chat',
  [Topic.HUMANITY]: 'nhan-ai',
  [Topic.HEALTH_BEAUTY]: 'khoe-dep',
  [Topic.FAMILY]: 'gia-dinh',
  [Topic.HOME]: 'trang-chu',
  
}

export const rssFeed: Record<Topic, string> = {
  [Topic.EDUCATION]: 'https://giaoducthoidai.vn/rss/giao-duc-17.rss',
  [Topic.POLICY]: 'https://giaoducthoidai.vn/rss/chinh-sach-27.rss',
  [Topic.LOCAL]: 'https://giaoducthoidai.vn/rss/dia-phuong-78.rss',
  [Topic.TRAINING_ADMISSION]: 'https://giaoducthoidai.vn/rss/tuyen-sinh-du-hoc-26.rss',
  [Topic.FOUR_DIRECTIONS]: 'https://giaoducthoidai.vn/rss/giao-duc-bon-phuong-49.rss',
  [Topic.MOVEMENT]: 'https://giaoducthoidai.vn/rss/chuyen-dong-87.rss',
  [Topic.NEWS]: 'https://giaoducthoidai.vn/rss/thoi-su-1.rss',
  [Topic.URBAN_EDUCATION]: 'https://giaoducthoidai.vn/rss/giao-duc-do-thi-98.rss',
  [Topic.SOCIETY]: 'https://giaoducthoidai.vn/rss/thoi-su-xa-hoi-97.rss',
  [Topic.POLITICS]: 'https://giaoducthoidai.vn/rss/chinh-tri-34.rss',
  [Topic.ECONOMY]: 'https://giaoducthoidai.vn/rss/kinh-te-38.rss',
  [Topic.LEGAL_EDUCATION]: 'https://giaoducthoidai.vn/rss/phap-luat-phap-luat-8.rss',
  [Topic.SECURITY]: 'https://giaoducthoidai.vn/rss/an-ninh-25.rss',
  [Topic.LEGAL_SYSTEM]: 'https://giaoducthoidai.vn/rss/phap-dinh-83.rss',
  [Topic.READERS_INVESTIGATION]: 'https://giaoducthoidai.vn/rss/goc-nhin-53.rss',
  [Topic.CONNECTION]: 'https://giaoducthoidai.vn/rss/ket-noi-2.rss',
  [Topic.LABOR_UNION]: 'https://giaoducthoidai.vn/rss/cong-doan-74.rss',
  [Topic.CREATION]: 'https://giaoducthoidai.vn/rss/sang-tac-82.rss',
  [Topic.COMPANION]: 'https://giaoducthoidai.vn/rss/dong-hanh-88.rss',
  [Topic.SCIENCE_TECHNOLOGY]: 'https://giaoducthoidai.vn/rss/khoa-hoc-36.rss',
  [Topic.EXCHANGE]: 'https://giaoducthoidai.vn/rss/trao-doi-3.rss',
  [Topic.METHODOLOGY]: 'https://giaoducthoidai.vn/rss/phuong-phap-31.rss',
  [Topic.EXPERT_CORNER]: 'https://giaoducthoidai.vn/rss/goc-chuyen-gia-63.rss',
  [Topic.SCHOOL]: 'https://giaoducthoidai.vn/rss/hoc-duong-5.rss',
  [Topic.SKILLS]: 'https://giaoducthoidai.vn/rss/ky-nang-song-39.rss',
  [Topic.STUDY_ABROAD]: 'https://giaoducthoidai.vn/rss/du-hoc-72.rss',
  [Topic.FACES]: 'https://giaoducthoidai.vn/rss/guong-mat-86.rss',
  [Topic.PHYSICAL]: 'https://giaoducthoidai.vn/rss/the-chat-84.rss',
  [Topic.HUMANITY]: 'https://giaoducthoidai.vn/rss/nhan-ai-13.rss',
  [Topic.WORLD]: 'https://giaoducthoidai.vn/rss/the-gioi-10.rss',
  [Topic.NATIONAL_DEFENSE_EDUCATION]: 'https://giaoducthoidai.vn/rss/giao-duc-quoc-phong-50.rss',
  [Topic.WORLD_ISSUES]: 'https://giaoducthoidai.vn/rss/the-gioi-do-day-93.rss',
  [Topic.STRANGE_STORIES]: 'https://giaoducthoidai.vn/rss/chuyen-la-52.rss',
  [Topic.HEALTH]: 'https://giaoducthoidai.vn/rss/suc-khoe-9.rss',
  [Topic.HEALTH_BEAUTY]: 'https://giaoducthoidai.vn/rss/khoe-dep-89.rss',
  [Topic.FAMILY]: 'https://giaoducthoidai.vn/rss/gia-dinh-7.rss',
  [Topic.COVID_19_PREVENTION]: 'https://giaoducthoidai.vn/rss/day-lui-covid-91.rss',
  [Topic.MEDIA]: 'https://giaoducthoidai.vn/rss/video-media-14.rss',
  [Topic.INFOGRAPHIC]: 'https://giaoducthoidai.vn/rss/infographic-media-105.rss',
  [Topic.VIDEO]: 'https://giaoducthoidai.vn/rss/video-79.rss',
  [Topic.HOT_NEWS]: 'https://giaoducthoidai.vn/rss/247-nong-85.rss',
  [Topic.HIGHLIGHTS]: 'https://giaoducthoidai.vn/rss/tieu-diem-81.rss',
  [Topic.CULTURE]: 'https://giaoducthoidai.vn/rss/van-hoa-6.rss',
  [Topic.CULTURAL_LIFE]: 'https://giaoducthoidai.vn/rss/doi-song-van-hoa-90.rss',
  [Topic.CELEBRITIES]: 'https://giaoducthoidai.vn/rss/the-gioi-sao-43.rss',
  [Topic.SPORTS]: 'https://giaoducthoidai.vn/rss/the-thao-20.rss',
  [Topic.SCHOOL_SPORTS]: 'https://giaoducthoidai.vn/rss/the-thao-hoc-duong-75.rss',
  [Topic.HOME]: 'https://giaoducthoidai.vn/rss/home.rss',
  
}

export const topicsWithoutRSS: Record<string, string> = {
  "day-hoc-lich-su-trong-truong-pho-thong": "https://giaoducthoidai.vn/chu-de/day-hoc-lich-su-trong-truong-pho-thong-125.html",
  "meo-vat-cuoc-song": "https://giaoducthoidai.vn/chu-de/meo-vat-cuoc-song-70.html",
  "phong-chong-dich-covid-19-trong-truong-hoc": "https://giaoducthoidai.vn/chu-de/phong-chong-dich-covid-19-trong-truong-hoc-128.html",
  "day-hoc-truc-tuyen": "https://giaoducthoidai.vn/chu-de/day-hoc-truc-tuyen-101.html",
  "dong-su-kien" : "https://giaoducthoidai.vn/dong-su-kien.html",
  "xay-dung-luat-nha-giao" : "https://giaoducthoidai.vn/chu-de/xay-dung-luat-nha-giao-183.html",
  "thoat-ly-van-mau" : "https://giaoducthoidai.vn/chu-de/thoat-ly-van-mau-122.html",
  "pv-gas" : " https://giaoducthoidai.vn/chu-de/pv-gas-10.html",
  "hoi-dap-chinh-sach-doi-voi-nha-giao": "https://giaoducthoidai.vn/chu-de/hoi-dap-chinh-sach-doi-voi-nha-giao-186.html",
  "phong-chong-bao-luc-hoc-duong" : "https://giaoducthoidai.vn/chu-de/phong-chong-bao-luc-hoc-duong-180.html",
  "tuyen-dung-va-boi-duong-giao-vien" : "https://giaoducthoidai.vn/chu-de/tuyen-dung-va-boi-duong-giao-vien-189.html",
  "70-nam-chien-thang-dien-bien-phu" : " https://giaoducthoidai.vn/chu-de/70-nam-chien-thang-dien-bien-phu-203.html",

}


export const slides = [
  { path: '/chu-de/meo-vat-cuoc-song', label: '#Mẹo vặt cuộc sống' },
  { path: '/chu-de/day-hoc-truc-tuyen', label: '#Dạy-Học trực tuyến' },
  { path: '/chu-de/day-hoc-lich-su-trong-truong-pho-thong', label: '#Dạy-Học lịch sử trong trường phổ thông' },
  { path: '/chu-de/phong-chong-dich-covid-19-trong-truong-hoc', label: '#Phòng chống dịch Covid-19 trong trường học' },
  { path: '/chu-de/xay-dung-luat-nha-giao', label: '#Xây dựng luật nhà giáo' },
  { path: '/chu-de/thoat-ly-van-mau', label: '#Thoát ly văn mẫu' },
  { path: '/chu-de/pv-gas', label: '#PV GAS' },
  { path: '/chu-de/hoi-dap-chinh-sach-doi-voi-nha-giao', label: '#Hỏi đáp chính sách đối với nhà giáo' },
  { path: '/chu-de/phong-chong-bao-luc-hoc-duong', label: '#Phòng chông bạo lực học đường' },
  { path: '/chu-de/tuyen-dung-va-boi-duong-giao-vien', label: '#Tuyển dụng và bồi dưỡng giáo viên' },
  { path: '/chu-de/70-nam-chien-thang-dien-bien-phu', label: '#70 năm chiến thắng điện biên phủ' },
];

