import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, ArrowLeft, Lock, FileText, UserCheck, Globe, CheckCircle, Filter,
  Database, Key, Clock, AlertTriangle, Bell, Mail, ExternalLink, Download
} from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { Helmet } from 'react-helmet-async';

const Privacy: React.FC = () => {
  const [policyUrl, setPolicyUrl] = useState<string>('');

  useEffect(() => {
    const getPrivacyPolicyUrl = async () => {
      if (!isSupabaseConfigured) {
        console.warn('Supabase not configured. Privacy policy URL cannot be fetched.');
        return;
      }
      
      try {
        const { data: { publicUrl } } = supabase.storage
          .from('companyassets')
          .getPublicUrl('privacy-policy-v2.pdf');
        setPolicyUrl(publicUrl);
      } catch (error) {
        console.error('Failed to get privacy policy URL:', error);
      }
    };

    getPrivacyPolicyUrl();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-white">
      <Helmet>
        <title>Privacy Policy - Dumroo.ai</title>
        <meta name="description" content="Read Dumroo.ai's Privacy Policy outlining our data protection, compliance, and secure use of educational information." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Privacy Policy - Dumroo.ai" />
        <meta property="og:description" content="Read Dumroo.ai's Privacy Policy outlining our data protection, compliance, and secure use of educational information." />
        <meta property="og:url" content="https://dumroo.ai/privacy" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy - Dumroo.ai" />
        <meta name="twitter:description" content="Read Dumroo.ai's Privacy Policy outlining our data protection, compliance, and secure use of educational information." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://dumroo.ai/privacy" />
      </Helmet>
      {/* Hero Section */}
      <div className="bg-linear-to-r from-brand-600 to-brand-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Back Button */}
          <Link 
            to="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm rounded-xl mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy - Dumroo.ai</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Protecting student data with industry-leading security and compliance
            </p>
            {policyUrl && (
              <a
                href="https://dumrooai-my.sharepoint.com/personal/alok_dumroo_ai/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Falok%5Fdumroo%5Fai%2FDocuments%2FDumroo%2FDumroo%20AI%2FDumroo%2DDev%2FPrivacy%20Policy%20v2%2E0%2Epdf&parent=%2Fpersonal%2Falok%5Fdumroo%5Fai%2FDocuments%2FDumroo%2FDumroo%20AI%2FDumroo%2DDev&ga=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                <Download className="h-5 w-5" />
                Download Full Privacy Policy
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <p className="lead text-xl text-gray-600">
              At Dumroo.ai, we understand the critical responsibility of <strong>protecting children&apos;s data</strong> and 
              ensuring <strong>full compliance</strong> with national and international regulations governing student privacy. 
              Our platform is designed to empower <strong>teachers, students, parents, and administrators</strong> while 
              safeguarding sensitive data through <strong>state-of-the-art security measures</strong>.
            </p>

            <div className="my-8 p-4 bg-brand-50 rounded-xl border border-brand-100">
              <p className="text-brand-600 m-0">
                This document outlines how Dumroo.ai complies with <strong>FERPA, COPPA, GDPR, CIPA, and 
                other relevant regulations</strong> to ensure that school districts can confidently integrate our platform 
                into their learning environments.
              </p>
            </div>

            {/* Section 1: Compliance */}
            <h2 className="flex items-center gap-3 text-gray-900">
              <div className="p-2 bg-blue-50 rounded-lg">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              1. Compliance with Key Regulations
            </h2>

            {/* FERPA Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 my-8">
              <h3 className="flex items-center gap-3 text-gray-900 mt-0">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <Lock className="h-5 w-5 text-purple-600" />
                </div>
                Family Educational Rights and Privacy Act (FERPA)
              </h3>
              <p>
                <strong>FERPA</strong> protects student education records and gives parents control over their child&apos;s data. 
                Dumroo.ai ensures FERPA compliance by:
              </p>
              <ul className="space-y-3">
                {[
                  'Limiting access to student data to authorized school officials and educators.',
                  'Providing strict role-based access control (RBAC) to protect personally identifiable information (PII).',
                  'Allowing schools to retain ownership of student records, with no unauthorized third-party sharing.',
                  'Enabling parents and legal guardians to request access or deletion of their child&apos;s data.'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* COPPA Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 my-8">
              <h3 className="flex items-center gap-3 text-gray-900 mt-0">
                <div className="p-2 bg-green-50 rounded-lg">
                  <UserCheck className="h-5 w-5 text-green-600" />
                </div>
                Children&apos;s Online Privacy Protection Act (COPPA)
              </h3>
              <p>
                COPPA regulates the collection of personal information from children under 13. Dumroo.ai fully complies by:
              </p>
              <ul className="space-y-3">
                {[
                  'Requiring verifiable parental or school consent before collecting any student data.',
                  'Limiting data collection to only what is necessary for educational purposes.',
                  'Using transparent privacy policies that clearly outline data usage.',
                  'Ensuring that any third-party integrations do not collect or share children&apos;s personal information without compliance.'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* GDPR Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 my-8">
              <h3 className="flex items-center gap-3 text-gray-900 mt-0">
                <div className="p-2 bg-orange-50 rounded-lg">
                  <Globe className="h-5 w-5 text-orange-600" />
                </div>
                General Data Protection Regulation (GDPR - Student Data Protection for EU Schools)
              </h3>
              <p>
                For schools in the European Union, <strong>GDPR</strong> requires strict data protection controls and user rights. 
                Dumroo.ai ensures GDPR compliance by:
              </p>
              <ul className="space-y-3">
                {[
                  'Using strong encryption protocols for storing and transmitting student data.',
                  'Enabling Data Subject Rights (Access, Correction, Deletion, and Portability of student records).',
                  'Ensuring data is only used for educational purposes, with no behavioral tracking or advertising.',
                  'Appointing a Data Protection Officer (DPO) to oversee compliance.'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CIPA Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 my-8">
              <h3 className="flex items-center gap-3 text-gray-900 mt-0">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Filter className="h-5 w-5 text-blue-600" />
                </div>
                Children&apos;s Internet Protection Act (CIPA)
              </h3>
              <p>
                Since CIPA requires schools to filter harmful content on student-accessible platforms, 
                Dumroo.ai integrates the following protections:
              </p>
              <ul className="space-y-3">
                {[
                  'Real-time content filtering to ensure educational appropriateness.',
                  'AI-powered moderation to prevent inappropriate content in student-generated discussions.',
                  'Ensuring school IT admins control access to external web content.'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 2: Secure Data Management */}
            <h2 className="flex items-center gap-3 text-gray-900">
              <div className="p-2 bg-indigo-50 rounded-lg">
                <Database className="h-6 w-6 text-indigo-600" />
              </div>
              2. Secure Data Management Practices
            </h2>

            <p>
              Dumroo.ai follows industry-leading security standards to protect student data from unauthorized access, breaches, and misuse.
            </p>

            {/* Data Encryption & Storage */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 my-8">
              <h3 className="flex items-center gap-3 text-gray-900 mt-0">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <Key className="h-5 w-5 text-purple-600" />
                </div>
                Data Encryption & Storage
              </h3>
              <ul className="space-y-3">
                {[
                  'End-to-End Encryption: All student data is encrypted in transit (TLS 1.3) and at rest (AES-256).',
                  'Secure Cloud Hosting: We use Azure-based cloud storage, ensuring compliance with FERPA and GDPR.',
                  'Role-Based Access Control (RBAC): Only authorized users (teachers, school admins) can access student data.'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Privacy-First AI */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 my-8">
              <h3 className="flex items-center gap-3 text-gray-900 mt-0">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                Privacy-First AI
              </h3>
              <ul className="space-y-3">
                {[
                  'No Student Profiling: Dumroo.ai does not track or create behavioral profiles of students.',
                  'AI Transparency: Our AI models operate within strict data minimization principles.',
                  'No Advertising: We do not use student data for targeted ads or marketing.'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Data Access, Retention, and Deletion */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 my-8">
              <h3 className="flex items-center gap-3 text-gray-900 mt-0">
                <div className="p-2 bg-green-50 rounded-lg">
                  <Clock className="h-5 w-5 text-green-600" />
                </div>
                Data Access, Retention, and Deletion
              </h3>
              <ul className="space-y-3">
                {[
                  'School Ownership of Data: Schools retain full ownership and control over student records.',
                  'Customizable Retention Policies: Schools can define how long data is stored before automatic deletion.',
                  'Right to Erasure: Parents and administrators can request deletion of student data in compliance with FERPA and GDPR.'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3: Integration with Google Services (Drive & Classroom) - NEW SECTION */}
            <h2 className="flex items-center gap-3 text-gray-900">
              <div className="p-2 bg-green-50 rounded-lg">
                <Globe className="h-6 w-6 text-green-600" />
              </div>
              3. Integration with Google Services (Drive & Classroom)
            </h2>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 my-8">
              <p>
                Dumroo.ai integrates securely with Google services to enhance educational workflows while maintaining full compliance with the Google API Services User Data Policy, including the Limited Use requirements.
              </p>
              
              <h3 className="flex items-center gap-3 text-gray-900 mt-6">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Database className="h-5 w-5 text-blue-600" />
                </div>
                What Google Data We Access
              </h3>
              <ul className="space-y-3">
                {[
                  'Google Classroom courses and assignments.',
                  'Google Drive files (only those users explicitly select through Google’s file picker).'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="flex items-center gap-3 text-gray-900 mt-6">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <FileText className="h-5 w-5 text-purple-600" />
                </div>
                How We Use This Data
              </h3>
              <ul className="space-y-3">
                {[
                  'Import teaching materials from Google Classroom and Drive into Dumroo.',
                  'Export lesson plans and educational content back to the user’s Classroom and Drive.',
                  'Organize imported content into lesson collections for streamlined use.'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="flex items-center gap-3 text-gray-900 mt-6">
                <div className="p-2 bg-orange-50 rounded-lg">
                  <UserCheck className="h-5 w-5 text-orange-600" />
                </div>
                User Control
              </h3>
              <ul className="space-y-3">
                {[
                  'Users choose which files or courses to import using Google’s file picker.',
                  'Users select where to export data back to Google Classroom or Drive.',
                  'Users can revoke Dumroo.ai’s access at any time via Google Account → Security → Third-party apps → Revoke Access.',
                  'All imported Google data is permanently deleted when a user deletes their Dumroo account.'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="flex items-center gap-3 text-gray-900 mt-6">
                <div className="p-2 bg-indigo-50 rounded-lg">
                  <Key className="h-5 w-5 text-indigo-600" />
                </div>
                Data Storage & Security
              </h3>
              <ul className="space-y-3">
                {[
                  'Classroom data: Stored in Dumroo’s secure database, encrypted at rest (AES-256).',
                  'Drive files: Stored in Dumroo’s secure storage bucket, encrypted in transit (TLS 1.3) and at rest.',
                  'Dumroo.ai does not retain files indefinitely; storage duration follows each user’s or institution’s defined data retention policy.'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="flex items-center gap-3 text-gray-900 mt-6">
                <div className="p-2 bg-red-50 rounded-lg">
                  <Shield className="h-5 w-5 text-red-600" />
                </div>
                Data Sharing
              </h3>
              <ul className="space-y-3">
                {[
                  'Dumroo.ai does not sell, share, or transfer Google user data to any third party.',
                  'Dumroo.ai does not use Google data for advertising, analytics, or AI training without explicit consent.',
                  'Authorized administrators may only access Google-linked data for debugging or support when explicitly authorized by the user.'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="flex items-center gap-2 text-gray-900 font-medium">
                  <ExternalLink className="h-5 w-5 text-blue-600" />
                  Google API Services Disclosure
                </h3>
                <p className="mt-2 text-gray-700">
                  Dumroo.ai’s use of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.
                  For more information, see the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Google API Services User Data Policy</a>.
                </p>
              </div>
            </div>

            {/* Section 4: Third-Party Vendor Compliance (previously Section 3) */}
            <h2 className="flex items-center gap-3 text-gray-900">
              <div className="p-2 bg-yellow-50 rounded-lg">
                <ExternalLink className="h-6 w-6 text-yellow-600" />
              </div>
              4. Third-Party Vendor Compliance
            </h2>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 my-8">
              <p>
                Dumroo.ai carefully evaluates and audits any third-party vendors integrated with our platform to ensure they meet:
              </p>
              <ul className="space-y-3">
                {[
                  'FERPA, COPPA, and GDPR compliance requirements.',
                  'Strict data-sharing agreements that prohibit selling or misusing student data.',
                  'Annual security audits to verify compliance.'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 5: Audit, Monitoring & Incident Response (previously Section 4) */}
            <h2 className="flex items-center gap-3 text-gray-900">
              <div className="p-2 bg-red-50 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              5. Audit, Monitoring & Incident Response
            </h2>

            <p>
              We have a dedicated compliance and security team that continuously monitors system integrity.
            </p>

            {/* Regular Security Audits */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 my-8">
              <h3 className="flex items-center gap-3 text-gray-900 mt-0">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                Regular Security Audits
              </h3>
              <ul className="space-y-3">
                {[
                  'Annual FERPA & COPPA compliance audits.',
                  'Regular penetration testing to identify vulnerabilities.',
                  'Third-party security assessments to ensure best practices.'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Incident Response Plan */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 my-8">
              <h3 className="flex items-center gap-3 text-gray-900 mt-0">
                <div className="p-2 bg-orange-50 rounded-lg">
                  <Bell className="h-5 w-5 text-orange-600" />
                </div>
                Incident Response Plan
              </h3>
              <p>
                In the rare event of a data breach, Dumroo.ai follows a strict incident response protocol:
              </p>
              <ol className="space-y-3 list-none p-0">
                {[
                  'Immediate Containment – Isolate and mitigate the impact.',
                  'Investigation & Root Cause Analysis – Determine how the breach occurred.',
                  'Notification Process – Notify schools, authorities, and affected users per legal requirements.',
                  'Remediation & Future Prevention – Strengthen security measures to prevent future risks.'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 font-medium">
                      {index + 1}
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Section 6: Transparency & Accountability (previously Section 5) */}
            <h2 className="flex items-center gap-3 text-gray-900">
              <div className="p-2 bg-green-50 rounded-lg">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              6. Transparency & Accountability
            </h2>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 my-8">
              <p>
                At Dumroo.ai, we believe in full transparency when handling student and educator data.
              </p>
              <ul className="space-y-3">
                {[
                  'Easy-to-read privacy and compliance policies for administrators, teachers, and parents.',
                  'Public compliance reports available upon request.',
                  'Dedicated compliance contact for districts to address concerns or verify adherence to data protection laws.'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conclusion */}
            <div className="bg-brand-50/50 rounded-xl p-8 my-8 border border-brand-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
              <p className="text-gray-700 mb-4">
                Dumroo.ai is fully committed to ensuring compliance with FERPA, COPPA, GDPR, CIPA, and other student data protection laws, as well as Google’s API Services User Data Policy.
                By implementing advanced encryption, AI transparency, and strict data governance, Dumroo.ai provides a safe, compliant, and effective learning platform for schools and districts.
              </p>
              <p className="text-gray-700">
                We welcome the School District Board to review our compliance documentation and security policies in greater detail.
              </p>
            </div>

            {/* Contact Section */}
            <div className="bg-brand-50 rounded-xl p-8 my-8">
              <h2 className="flex items-center gap-3 text-gray-900 mt-0 mb-6">
                <div className="p-2 bg-white rounded-lg">
                  <Mail className="h-6 w-6 text-brand-600" />
                </div>
                Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                For compliance and privacy inquiries, please contact:
              </p>
              <div className="space-y-2">
                <a 
                  href="mailto:compliance@dumroo.ai"
                  className="flex items-center gap-2 text-brand-600 hover:text-brand-700 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  📧 compliance@dumroo.ai
                </a>
                <a 
                  href="https://www.dumroo.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-600 hover:text-brand-700 transition-colors"
                >
                  <Globe className="h-4 w-4" />
                  🌐 www.dumroo.ai
                </a>
              </div>
            </div>

            <div className="text-center text-gray-600">
              <p>
                We look forward to partnering with you to create a safe and secure learning environment for students. 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;