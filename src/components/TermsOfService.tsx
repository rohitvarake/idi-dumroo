import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-white">
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Effective Date: January 31, 2025 | Last Updated: January 31, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-6">1. Introduction and Acceptance</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">1.1 Agreement to Terms</h3>
            <p className="mb-4">
              By accessing or using Dumroo.ai's educational platform ("Service"), you acknowledge that you 
              have read, understood, and agree to be bound by these Terms of Service ("Terms"), along with 
              our Privacy Policy and any additional terms or policies referenced herein.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">1.2 Service Description</h3>
            <p className="mb-4">Dumroo.ai provides:</p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>AI-powered educational technology platform</li>
              <li>Personalized learning experiences</li>
              <li>Educational content delivery</li>
              <li>Assessment and progress tracking</li>
              <li>Communication tools</li>
              <li>Administrative features</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">1.3 Modifications to Terms</h3>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>We reserve the right to modify these terms</li>
              <li>30-day notice for material changes</li>
              <li>Continued use constitutes acceptance</li>
              <li>Email notification of updates</li>
              <li>Change log maintenance</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. User Eligibility and Accounts</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">2.1 Eligibility Requirements</h3>
            <p className="font-semibold mb-2">Age Requirements:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Students: Parent/guardian consent required under 13</li>
              <li>Teachers: Must be qualified educators</li>
              <li>Administrators: Must have institutional authorization</li>
              <li>Parents: Must have enrolled student</li>
            </ul>
            <p className="font-semibold mb-2">Professional Requirements:</p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Valid educational credentials (where applicable)</li>
              <li>Institutional affiliation verification</li>
              <li>Background check compliance</li>
              <li>Professional conduct agreement</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">2.2 Account Creation</h3>
            <p className="font-semibold mb-2">Required Information:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Legal name</li>
              <li>Valid email address</li>
              <li>Institutional affiliation</li>
              <li>Role designation</li>
              <li>Contact information</li>
            </ul>
            <p className="font-semibold mb-2">Account Security:</p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Strong password requirements</li>
              <li>Multi-factor authentication</li>
              <li>Regular security updates</li>
              <li>Login monitoring</li>
              <li>Suspicious activity alerts</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">2.3 Account Responsibilities</h3>
            <p className="font-semibold mb-2">User Obligations:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Maintain accurate information</li>
              <li>Protect account credentials</li>
              <li>Report unauthorized access</li>
              <li>Follow security guidelines</li>
              <li>Regular password updates</li>
            </ul>
            <p className="font-semibold mb-2">Prohibited Actions:</p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Account sharing</li>
              <li>Credential transfer</li>
              <li>False information</li>
              <li>Unauthorized access</li>
              <li>Identity misrepresentation</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">2.4 Linked Account Security (Google Integrations)</h3>
            <p className="mb-4">
              When using Google sign-in or connecting a Google account, users are responsible for maintaining the security of their linked Google credentials and permissions. Dumroo.ai never stores Google passwords but may store OAuth tokens required for service integration. These tokens must not be shared or tampered with. Revoking access through Google's security settings will disable related Dumroo.ai features. Users must also comply with Google's API Services User Data Policy and Terms of Service.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. Platform Access and Usage</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">3.1 License Grant</h3>
            <p className="font-semibold mb-2">Scope of License:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Non-exclusive use right</li>
              <li>Non-transferable access</li>
              <li>Limited to authorized purposes</li>
              <li>Subject to these Terms</li>
              <li>Revocable at our discretion</li>
            </ul>
            <p className="font-semibold mb-2">Usage Limitations:</p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Personal/institutional use only</li>
              <li>No commercial exploitation</li>
              <li>No unauthorized copying</li>
              <li>No reverse engineering</li>
              <li>No competitive use</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">3.2 Service Availability</h3>
            <p className="font-semibold mb-2">Uptime Commitment:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>99.9% availability target</li>
              <li>Scheduled maintenance windows</li>
              <li>Emergency maintenance provisions</li>
              <li>Downtime notifications</li>
              <li>Service credits (if applicable)</li>
            </ul>
            <p className="font-semibold mb-2">Access Restrictions:</p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Geographic limitations</li>
              <li>Network requirements</li>
              <li>Device compatibility</li>
              <li>Browser specifications</li>
              <li>Bandwidth recommendations</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">4. AI Features and Services</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">4.1 AI Functionality</h3>
            <p className="font-semibold mb-2">Core Features:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Personalized learning paths</li>
              <li>Automated assessments</li>
              <li>Content recommendations</li>
              <li>Progress tracking</li>
              <li>Behavioral analytics</li>
            </ul>
            <p className="font-semibold mb-2">Usage Parameters:</p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Data processing limitations</li>
              <li>Accuracy disclaimers</li>
              <li>Override procedures</li>
              <li>Human supervision requirements</li>
              <li>Update frequencies</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">4.2 AI Limitations</h3>
            <p className="font-semibold mb-2">System Boundaries:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Non-medical advice</li>
              <li>Non-diagnostic use</li>
              <li>Educational purpose only</li>
              <li>Supplementary tool</li>
              <li>Teacher oversight required</li>
            </ul>
            <p className="font-semibold mb-2">Known Limitations:</p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Accuracy ranges</li>
              <li>Processing constraints</li>
              <li>Language support</li>
              <li>Content restrictions</li>
              <li>Feature availability</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">5. User Content and Data</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">5.1 Content Creation</h3>
            <p className="font-semibold mb-2">Acceptable Content:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Educational materials</li>
              <li>Course content</li>
              <li>Assessment items</li>
              <li>Communications</li>
              <li>Administrative documents</li>
            </ul>
            <p className="font-semibold mb-2">Content Standards:</p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Age-appropriate</li>
              <li>Non-discriminatory</li>
              <li>Academically relevant</li>
              <li>Original or licensed</li>
              <li>Properly attributed</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">5.2 Content Rights</h3>
            <p className="font-semibold mb-2">User Rights:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Original content ownership</li>
              <li>Usage rights grant</li>
              <li>Distribution limitations</li>
              <li>Modification rights</li>
              <li>Removal rights</li>
            </ul>
            <p className="font-semibold mb-2">Platform Rights:</p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Content display rights</li>
              <li>Processing permissions</li>
              <li>Storage authorization</li>
              <li>Analysis capabilities</li>
              <li>Improvement usage</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">6. Intellectual Property</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">6.1 Platform IP</h3>
            <p className="font-semibold mb-2">Protected Elements:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Software code</li>
              <li>AI algorithms</li>
              <li>User interface</li>
              <li>Visual design</li>
              <li>Brand elements</li>
              <li>Documentation</li>
            </ul>
            <p className="font-semibold mb-2">Usage Restrictions:</p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>No unauthorized copying</li>
              <li>No modification</li>
              <li>No distribution</li>
              <li>No derivative works</li>
              <li>No commercial use</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">6.2 User IP</h3>
            <p className="font-semibold mb-2">User-Generated Content:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Ownership retention</li>
              <li>License grant</li>
              <li>Usage permissions</li>
              <li>Distribution rights</li>
              <li>Removal procedures</li>
            </ul>
            <p className="font-semibold mb-2">Educational Content:</p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Classroom materials</li>
              <li>Assessment items</li>
              <li>Student work</li>
              <li>Teaching resources</li>
              <li>Administrative documents</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">7. Payment Terms</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">7.1 Subscription Plans</h3>
            <p className="font-semibold mb-2">Plan Options:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Individual educator licenses</li>
              <li>Institutional subscriptions</li>
              <li>District-wide deployments</li>
              <li>Parent/student accounts</li>
              <li>Enterprise solutions</li>
            </ul>
            <p className="font-semibold mb-2">Pricing Structure:</p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Monthly billing options</li>
              <li>Annual payment discounts</li>
              <li>Volume licensing</li>
              <li>Educational discounts</li>
              <li>Trial periods</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">7.2 Payment Processing</h3>
            <p className="font-semibold mb-2">Payment Methods:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Credit/debit cards</li>
              <li>Purchase orders</li>
              <li>Bank transfers</li>
              <li>Educational vouchers</li>
              <li>Institutional billing</li>
            </ul>
            <p className="font-semibold mb-2">Billing Procedures:</p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Automatic renewals</li>
              <li>Invoice generation</li>
              <li>Payment reminders</li>
              <li>Receipt provision</li>
              <li>Account statements</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">7.3 Refund Policy</h3>
            <p className="font-semibold mb-2">Eligible Refunds:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Service unavailability</li>
              <li>Implementation failure</li>
              <li>Contract termination</li>
              <li>Billing errors</li>
              <li>Duplicate charges</li>
            </ul>
            <p className="font-semibold mb-2">Refund Process:</p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Request submission</li>
              <li>Review timeline</li>
              <li>Documentation requirements</li>
              <li>Processing period</li>
              <li>Payment method</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">8. Platform Rules and Restrictions</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">8.1 Acceptable Use</h3>
            <p className="font-semibold mb-2">Permitted Activities:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Educational instruction</li>
              <li>Content creation</li>
              <li>Student assessment</li>
              <li>Administrative tasks</li>
              <li>Communication</li>
            </ul>
            <p className="font-semibold mb-2">Required Conduct:</p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Professional behavior</li>
              <li>Academic integrity</li>
              <li>Privacy respect</li>
              <li>Data protection</li>
              <li>Policy compliance</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">8.2 Prohibited Activities</h3>
            <p className="font-semibold mb-2">Forbidden Actions:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Unauthorized access</li>
              <li>Content misuse</li>
              <li>System interference</li>
              <li>Data harvesting</li>
              <li>Service disruption</li>
            </ul>
            <p className="font-semibold mb-2">Content Restrictions:</p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>No harmful material</li>
              <li>No inappropriate content</li>
              <li>No discriminatory content</li>
              <li>No copyright infringement</li>
              <li>No malicious code</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">8.3 Third-Party Platform Compliance (Google Integrations)</h3>
            <p className="mb-4">
              Users must comply with all applicable Google API Services User Data Policies and Terms of Service when connecting Dumroo.ai with Google services, including Google Drive, Classroom, and Workspace. Unauthorized access, data scraping, or misuse of these integrated features will result in account suspension and may be reported to Google as per its developer policies.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">9. Termination</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">9.1 Termination Rights</h3>
            <p className="font-semibold mb-2">Platform-Initiated:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Policy violations</li>
              <li>Payment defaults</li>
              <li>Security threats</li>
              <li>Abuse detection</li>
              <li>Legal requirements</li>
            </ul>
            <p className="font-semibold mb-2">User-Initiated:</p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Account closure request</li>
              <li>Service cancellation</li>
              <li>Subscription ending</li>
              <li>Role change</li>
              <li>Institution transfer</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">9.2 Termination Process</h3>
            <p className="font-semibold mb-2">Procedure:</p>
            <ol className="list-decimal pl-8 mb-4 space-y-2">
              <li>Termination notice</li>
              <li>Data export period</li>
              <li>Account deactivation</li>
              <li>Final billing</li>
              <li>Access removal</li>
            </ol>
            <p className="font-semibold mb-2">Post-Termination:</p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Data retention period</li>
              <li>Archive access</li>
              <li>Record maintenance</li>
              <li>Reactivation options</li>
              <li>Final reporting</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">9.3 Third-Party Integration Violations</h3>
            <p className="mb-4">
              Dumroo.ai reserves the right to suspend or terminate any account that violates Google's API policies, OAuth consent requirements, or misuses Google-integrated features. Such violations may also be reported to Google in accordance with its API Services Terms of Use.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">10. Warranties and Disclaimers</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">10.1 Platform Warranties</h3>
            <p className="font-semibold mb-2">We Warrant:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Service functionality</li>
              <li>Security measures</li>
              <li>Data protection</li>
              <li>Legal compliance</li>
              <li>Professional delivery</li>
            </ul>
            <p className="font-semibold mb-2">Limitations:</p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>As-is provisions</li>
              <li>No guarantees</li>
              <li>Performance variations</li>
              <li>Feature availability</li>
              <li>System requirements</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">10.2 Disclaimers</h3>
            <p className="font-semibold mb-2">General Disclaimers:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>No educational outcomes guaranteed</li>
              <li>AI accuracy limitations</li>
              <li>Third-party services</li>
              <li>Internet dependencies</li>
              <li>Technical requirements</li>
            </ul>
            <p className="font-semibold mb-2">Educational Disclaimers:</p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Learning results vary</li>
              <li>Student engagement</li>
              <li>Assessment accuracy</li>
              <li>Content suitability</li>
              <li>Implementation success</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">10.3 Third-Party Service Dependencies (Google Integrations)</h3>
            <p className="mb-4">
              Dumroo.ai integrates with Google services such as Drive, Classroom, and Workspace. Dumroo.ai is not responsible for any limitation, outage, modification, or policy change by Google that affects functionality of integrated features. Users acknowledge that such integrations are governed by Google's own terms, and Dumroo.ai's obligations exclude any failures arising from those external systems.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">11. Limitation of Liability</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">11.1 Liability Caps</h3>
            <p className="font-semibold mb-2">Financial Limits:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Maximum liability amount</li>
              <li>Subscription fee basis</li>
              <li>Damage categories</li>
              <li>Exclusion types</li>
              <li>Recovery restrictions</li>
            </ul>
            <p className="font-semibold mb-2">Excluded Damages:</p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Consequential damages</li>
              <li>Lost profits</li>
              <li>Data loss</li>
              <li>Business interruption</li>
              <li>Reputation damage</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">11.2 Indemnification</h3>
            <p className="font-semibold mb-2">User Obligations:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Defense provision</li>
              <li>Cost coverage</li>
              <li>Claim notification</li>
              <li>Cooperation requirement</li>
              <li>Settlement participation</li>
            </ul>
            <p className="font-semibold mb-2">Protected Parties:</p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Company personnel</li>
              <li>Service providers</li>
              <li>Partners</li>
              <li>Affiliates</li>
              <li>Representatives</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">12. Dispute Resolution</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">12.1 Resolution Process</h3>
            <p className="font-semibold mb-2">Steps:</p>
            <ol className="list-decimal pl-8 mb-4 space-y-2">
              <li>Direct negotiation</li>
              <li>Mediation</li>
              <li>Arbitration</li>
              <li>Legal proceedings</li>
              <li>Appeals process</li>
            </ol>
            <p className="font-semibold mb-2">Timeline:</p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Notice period</li>
              <li>Response window</li>
              <li>Resolution attempt</li>
              <li>Escalation points</li>
              <li>Final determination</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">12.2 Governing Law</h3>
            <p className="font-semibold mb-2">Legal Framework:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Applicable jurisdiction</li>
              <li>Venue selection</li>
              <li>Law choice</li>
              <li>Court designation</li>
              <li>Authority recognition</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">12.3 Class Action Waiver</h3>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Individual claims only</li>
              <li>No class proceedings</li>
              <li>Representative restrictions</li>
              <li>Collective action limits</li>
              <li>Opt-out procedures</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">13. General Provisions</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">13.1 Entire Agreement</h3>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Complete understanding</li>
              <li>Prior agreements</li>
              <li>Oral representations</li>
              <li>Written modifications</li>
              <li>Integration clause</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">13.2 Severability</h3>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Provision independence</li>
              <li>Invalid terms</li>
              <li>Reformation options</li>
              <li>Continuation effect</li>
              <li>Interpretation guidance</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">13.3 Force Majeure</h3>
            <p className="font-semibold mb-2">Covered Events:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Natural disasters</li>
              <li>Technical failures</li>
              <li>Government actions</li>
              <li>Security incidents</li>
              <li>Infrastructure issues</li>
            </ul>
            <p className="font-semibold mb-2">Response Protocol:</p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Notification requirements</li>
              <li>Mitigation efforts</li>
              <li>Service continuation</li>
              <li>Recovery plans</li>
              <li>Communication procedures</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">14. Contact Information</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">14.1 Support Channels</h3>
            <p className="font-semibold mb-2">General Support:</p>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Email: support@dumroo.ai</li>
              <li>Chat: Live support</li>
              <li>Help Center: help.dumroo.ai</li>
              <li>Response time: 24 hours</li>
            </ul>
            <p className="font-semibold mb-2">Technical Support:</p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Email: tech@dumroo.ai</li>
              <li>Priority support</li>
              <li>24/7 availability</li>
              <li>SLA commitments</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">14.2 Legal Notices</h3>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Email: legal@dumroo.ai</li>
              <li>Notice requirements</li>
              <li>Document delivery</li>
              <li>Response timeline</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">15. Updates and Modifications</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">15.1 Change Process</h3>
            <ul className="list-disc pl-8 mb-4 space-y-2">
              <li>Update notification</li>
              <li>Review period</li>
              <li>Acceptance methods</li>
              <li>Rejection options</li>
              <li>Implementation timeline</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">15.2 Version Control</h3>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Change documentation</li>
              <li>Version history</li>
              <li>Modification tracking</li>
              <li>Archive access</li>
              <li>Comparison tools</li>
            </ul>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                These Terms of Service were last updated on January 31, 2025.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;