import type { Testimonial } from './types';

// Import all testimonial images
import t1 from '../../../assets/t1.png';
import t2 from '../../../assets/t2.png';
import t3 from '../../../assets/t3.png';
import t4 from '../../../assets/t4.png';
import t5 from '../../../assets/t5.png';
import t6 from '../../../assets/t6.png';
import t7 from '../../../assets/t7.png';
import t8 from '../../../assets/t8.png';
import t9 from '../../../assets/t9.png';
import t10 from '../../../assets/t10.png';
import t11 from '../../../assets/t11.png';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Daniel Rivera',
    role: 'STEM Program Coordinator',
    image: t1,
    quote: "Dumroo AI's lesson recommendations have streamlined our STEM curriculum planning. The insights help us identify learning gaps early and provide the right resources for our students.",
    rating: 5
  },
  {
    id: '2',
    name: 'Christopher Hayes',
    role: 'School Principal',
    image: t2,
    quote: 'The AI-powered analytics give me real-time data on student engagement and performance, enabling our teachers to adjust strategies quickly and effectively.',
    rating: 5
  },
  {
    id: '3',
    name: 'Luis Martinez',
    role: 'High School History Teacher',
    image: t3,
    quote: "With Dumroo AI's adaptive learning tools, my students are more engaged than ever. Lessons are automatically adjusted to match their progress, keeping everyone motivated.",
    rating: 5
  },
  {
    id: '4',
    name: 'James Parker',
    role: 'Mathematics Lecturer',
    image: t4,
    quote: 'The automated grading feature in Dumroo AI has saved me countless hours. Now I can focus more on mentoring students rather than paperwork.',
    rating: 5
  },
  {
    id: '5',
    name: 'Grace Chen',
    role: 'Elementary School Teacher',
    image: t5,
    quote: "Dumroo AI's personalized learning paths have made a huge difference in my classroom. Each child learns at their own pace and gains confidence faster.",
    rating: 5
  }, 
  {
    id: '6',
    name: 'Maria Garcia',
    role: 'Educational Consultant',
    quote:
      "I love how Dumroo.ai adapts resources to meet different cultural and language needs. It's truly inclusive and effective.",
    rating: 5,
    image: t6,
  },
  {
    id: '7',
    name: 'Patricia Brooks',
    role: 'Vice Principal',
    quote:
      "Our teachers have reported better engagement and improved scores since introducing Dumroo.ai. It's worth every penny.",
    rating: 5,
    image: t7,
  },
  {
    id: '8',
    name: 'Ava Patel',
    role: 'ESL Specialist',
    quote: 'The language learning tools and automatic differentiation features have revolutionized how we support our ESL students. The AI-powered translations and cultural context suggestions have helped bridge communication gaps and improve learning outcomes significantly.',
    rating: 5,
    image: t8,
  },
  {
    id: '9',
    name: 'Margaret Ellis',
    role: 'Retired Teacher & Volunteer Tutor',
    quote:
      "Even after decades in education, I'm impressed by how well Dumroo.ai blends technology with good teaching principles.",
    rating: 5,
    image: t9,
  },
  {
    id: '10',
    name: 'Samantha Wright',
    role: 'After-School Program Coordinator',
    quote:
      'The gamified quizzes keep kids coming back for more learning, even after a full day of school. Parents love the progress updates.',
    rating: 5,
    image: t10,
  },
  {
    id: '11',
    name: 'Eleanor Whitman',
    role: 'Language Arts Teacher',
    quote:
      'The writing analysis tools help me provide better feedback to my students. It\'s like having a teaching assistant that helps identify patterns in student writing and suggests targeted improvements.',
    rating: 5,
    image: t11,
  }
];