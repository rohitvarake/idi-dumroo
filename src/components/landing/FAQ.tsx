import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData: FAQItem[] = [
    {
      question: "What is \"AI for teachers,\" and how does it help?",
      answer: "AI for teachers refers to intelligent tools that automate routine tasks and provide insights to support instruction. Dumroo.ai offers features like AI-powered lesson planning, a real-time classroom voice assistant, smart grading and assessments, personalized learning paths, and instant analytics.\n\nBy automating planning and grading, teachers save hours and can focus more on student engagement. External platforms designed for educators also note that time-saving lesson planning tools allow teachers to spend less time preparing and more time teaching."
    },
    {
      question: "How do AI teacher tools make classroom management easier?",
      answer: "AI teacher tools automate repetitive tasks like attendance tracking, grading, and content creation while offering real-time feedback and lesson suggestions.\n\nThey help teachers focus more on engaging with students, improving learning outcomes, and maintaining better classroom flow through data-driven insights and predictive analytics."
    },
    {
      question: "How does Dumroo.ai protect student data?",
      answer: "Dumroo.ai emphasizes privacy and security. The platform complies with FERPA, COPPA, GDPR, CIPA, and other regulations. It limits access to student data through strict role-based access controls, uses end-to-end encryption in transit and at rest and secure cloud hosting, and allows schools to retain ownership of data with clear deletion policies.\n\nThe privacy policy outlines secure data management practices, third-party vendor compliance, and transparent incident response procedures."
    },
    {
      question: "Can Dumroo.ai integrate with our existing systems?",
      answer: "Yes. Dumroo.ai promotes seamless integration, positioning itself as an all-in-one platform compatible with existing school systems. This reduces the number of tools schools need to manage and simplifies onboarding and maintenance for IT teams."
    },
    {
      question: "How does AI improve student outcomes?",
      answer: "Research on AI-powered education platforms indicates that AI tools can significantly boost attendance, reduce dropout rates, and increase test scores. By providing predictive analytics, these platforms identify at-risk students early and enable proactive interventions. Decision intelligence software also helps administrators allocate resources effectively and monitor progress."
    },
    {
      question: "Can teachers personalize learning with Dumroo.ai?",
      answer: "Yes. Dumroo.ai offers tools for personalized learning paths and differentiated instruction. The AI adapts content to each learner's needs and pace, ensuring that every student receives appropriate support. Other educator tools note that AI assistants make differentiation easier by generating custom activities tailored to diverse learners."
    },
    {
      question: "Is Dumroo.ai helpful for parents?",
      answer: "Absolutely. Dumroo.ai includes parent-facing features like staying connected with the learning journey, seamless communication with teachers, and tools to monitor grades, goals, and growth. Parents also receive activity suggestions to support learning at home."
    },
    {
      question: "Can we try Dumroo.ai before committing?",
      answer: "The site invites educators to sign up early and \"Get Started Now,\" suggesting there is an early access program or demo available. Prospective users can contact the team or sign up to explore the platform's capabilities."
    },
    {
      question: "Does Dumroo.ai support special education and IEPs?",
      answer: "Yes. The platform offers \"Dynamic IEPs\" that use AI to create adaptive, individualized education plans and track progress. This feature helps teachers and support staff monitor goals, suggest interventions, and adjust plans as needed."
    },
    {
      question: "How does AI assist administrators in decision-making?",
      answer: "AI analytics tools in the education process can analyze complex datasets quickly and highlight trends that traditional methods might overlook. Predictive analytics can identify at-risk learners and forecast enrollment or resource needs, enabling administrators to make proactive decisions. AI platforms also unify fragmented data, giving administrators a comprehensive view of attendance, performance, and behavior for effective strategic planning."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Frequently Asked Questions - AI for Teachers & Decision Intelligence
        </h2>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="text-lg font-medium text-gray-800 pr-4">{item.question}</span>
                <span className="shrink-0 text-2xl text-blue-600 font-bold w-8 h-8 flex items-center justify-center rounded-full bg-blue-50">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 whitespace-pre-line border-t border-gray-100">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;