import SectionHero from '../components/SectionHero';
import { designTokens } from '../tokens';

const PrivacyPolicy = () => {
  return (
    <div style={{ backgroundColor: designTokens.colors.neutral.white }}>
      <SectionHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information"
      />

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" style={{ backgroundColor: designTokens.colors.neutral.white }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-500 mb-8">Last Updated: February 5, 2026</p>

          <div className="space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: designTokens.colors.sage[900] }}>Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Khan Consultants ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Fill out contact forms or request consultations</li>
                <li>Subscribe to our newsletter or communications</li>
                <li>Register for our services</li>
                <li>Contact us via email or phone</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                This information may include: name, email address, phone number, company name, mailing address, and any other information you choose to provide.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Automatically Collected Information</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                When you visit our website, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>IP address and browser type</li>
                <li>Operating system and device information</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Clickstream data</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Provide, operate, and maintain our services</li>
                <li>Respond to your inquiries and fulfill your requests</li>
                <li>Send you administrative information, updates, and marketing communications</li>
                <li>Improve and personalize your experience</li>
                <li>Analyze usage trends and optimize our website</li>
                <li>Detect, prevent, and address technical issues and fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* Sharing Your Information */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Sharing Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-3">We may share your information in the following situations:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition</li>
                <li><strong>Legal Requirements:</strong> When required by law or to respond to legal process</li>
                <li><strong>Protection of Rights:</strong> To protect our rights, property, or safety, or that of others</li>
                <li><strong>With Your Consent:</strong> When you have given explicit consent</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                We do not sell your personal information to third parties.
              </p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-3">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to or restrict processing of your information</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                To exercise these rights, please contact us at hello@khanconsultants.in
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            {/* Contact Us */}
            <div className="bg-slate-50 rounded-lg p-6 sm:p-8 border border-slate-200">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> <a href="mailto:hello@khanconsultants.in" className="text-slate-900 hover:underline">hello@khanconsultants.in</a></p>
                <p><strong>Phone:</strong> <a href="tel:+916291139691" className="text-slate-900 hover:underline">+91-6291-139-691</a></p>
                <p><strong>Address:</strong> 26/1 Rafi Ahmed Kidwai Road, Kolkata - 700016, West Bengal, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
