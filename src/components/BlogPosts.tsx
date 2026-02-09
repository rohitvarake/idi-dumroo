import React from 'react';
import { Calendar, ChevronLeft, Clock, User } from 'lucide-react';
import { cn, slugify } from '../lib/utils';
import PublicLayout from './layout/PublicLayout';
import { useNavigate } from 'react-router-dom';

// Define the blog post type
interface BlogPost {
  id: number;
  title: string;
  date?: string;
  author?: string;
  readTime?: string;
  category?: string;
  image: string;
  excerpt: string;
}

// Sample blog data - in a real app this would come from an API
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Teacher Burnout Prevention Strategies: Comprehensive Solutions to Support Educators',
    date: '2024-03-20',
   // author: 'Dr. Sarah Johnson',
  //  readTime: '5 min read',
    //category: 'Education Technology', 
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Explore effective teacher burnout prevention methods with practical tools, support systems, and wellness strategies for thriving educators.',
   
  },
  {
    id: 2,
    title: 'Why Teacher Genie Is the Most Teacher-Friendly AI Tool in 2025? ',
    date: '2024-03-15',
    //author: 'Michael Chen',
    //readTime: '4 min read',
    //category: 'Teaching Tips',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Check out why teacher Teacher Genie ai lesson plan generator Is the Most Teacher-Friendly AI Tool in 2025.',
  },
  {
    id: 3,
    title: 'Teacher Report Card Comments for K–12: 200+ Examples and Tips ',
   // date: '2024-03-10',
    //author: 'Dr. Amanda Rodriguez',
    //readTime: '6 min read',
    //category: 'Data & Analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Writing report card comments can be one of the most challenging tasks for teachers. You need to capture each student’s progress, strengths, and areas for improvement in just a few sentences. It’s not always easy to find the right words, especially when you have many report cards to fill out at once. ',
   
  },
  {
    id: 4,
    title: 'How AI Is Transforming K–12 Education in 2025 ',
    //date: '2024-03-05',
    //author: 'James Wilson',
   // readTime: '5 min read',
   // category: 'Best Practices',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    excerpt: 'AI is reshaping K–12 education through personalized learning, data-driven teaching, and smarter classrooms while addressing key challenges and opportunities. '
  },
  {
    id: 5,
    title: 'How to Make a Lesson Plan as a Student Teacher',
    //date: '2024-03-25',
    //author: 'Dumroo AI Team',
    //readTime: '6 min read',
    //category: 'Education Technology', 
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Learning how to make a lesson plan is one of the most important skills a student teacher can develop. A lesson plan acts as a roadmap that guides instruction, ensures learning objectives are met, and helps teachers manage classroom time effectively.'
  }
];

const BlogPosts: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PublicLayout>
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-white">
        {/* Header */}
        <div className="bg-brand-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => navigate('/blog')}
              className="inline-flex items-center text-white/90 hover:text-white mb-6 group"
            >
              <ChevronLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </button>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">All Blog Posts</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Explore our complete collection of articles, insights, and updates from the forefront of AI in education
            </p>
          </div>
        </div>

        {/* Blog Posts List */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className={cn(
                  "bg-white rounded-xl shadow-lg border border-gray-100",
                  "transform transition-all duration-300 cursor-pointer",
                  "hover:shadow-xl hover:-translate-y-1"
                )}
                onClick={() => navigate(`/blog-post/${slugify(post.title)}`)}
              >
                <div className="aspect-[16/9] overflow-hidden rounded-t-xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className={cn(
                      "w-full h-full object-cover",
                      "transform transition-transform duration-300",
                      "hover:scale-110"
                    )}
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-sm font-medium",
                      "bg-brand-50 text-brand-600"
                    )}>
                      {post.category || 'Uncategorized'}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      {post.date ? new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      }) : 'Date not available'}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <User className="h-4 w-4" />
                        {post.author || 'Author not specified'}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        {post.readTime || 'N/A'}
                      </div>
                    </div>
                    <span className="text-brand-600 font-medium text-sm">Read More →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default BlogPosts;