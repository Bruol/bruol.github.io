export const site = {
  title: 'bruol',
  author: 'Lorin Urbantat',
  description: 'Software engineer at the ETH Chair of Education Systems, Information Security Lab teaching assistant, and computer science master student at ETH Zurich.',
  role: 'Software Engineer @ ETH Chair of Education Systems and CS Master Student @ ETH Zurich',
  teachingRole: {
    title: 'Information Security Lab Teaching Assistant',
    href: 'https://sectrs.ethz.ch/education/autumn-semester-2025-26/Information-Security-Lab-autumn2025-26.html'
  },
  cvUrl: '/other/cv.pdf',
  email: 'mailto:contact@bruol.slmail.me',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/bruol' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bruol/' },
    { label: 'Email', href: 'mailto:contact@bruol.slmail.me' }
  ]
};

// Hobby stats as of Nov 2026, updated by hand. Lifts are top working sets from Hevy.
export const hobbies = {
  marathon: { race: 'Zurich Marathon', time: '4:08:51' },
  ride: { km: 234, elevation: '3,517 m', href: 'https://www.strava.com/activities/15385635139' },
  strava: { weeks: 130, activities: 411 },
  workouts: 167,
  lifts: [
    { name: 'Deadlift', kg: 165, reps: 6 },
    { name: 'Bench press', kg: 100, reps: 6 },
    { name: 'Barbell row', kg: 115, reps: 6 },
    { name: 'Bulgarian split squat', kg: 72, reps: 16 }
  ]
};
