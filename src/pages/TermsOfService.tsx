import SectionHero from '../components/SectionHero';
import { designTokens } from '../tokens';

const TermsOfService = () => {
  return (
    <div style={{ backgroundColor: designTokens.colors.neutral.white }}>
      <SectionHero
        title="Terms of Service"
        subtitle="Terms and conditions for using our services"
      />

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" style={{ backgroundColor: designTokens.colors.neutral.white }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-500 mb-8">Last Updated: February 5, 2026</p>

          <div className="space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms of Service ("Terms") govern your access to and use of Khan Consultants' website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you do not agree to these Terms, you may not access or use our services.
              </p>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Our Services</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Khan Consultants provides professional consulting services including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>GST registration and compliance services</li>
                <li>Trademark and legal consultation</li>
                <li>Import and export consultation</li>
                <li>Visa and immigration services</li>
                <li>Kolkata Corporation services</li>
                <li>Government ID assistance</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
              </p>
            </div>

            {/* User Responsibilities */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">User Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-3">When using our services, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not misuse or abuse our services</li>
                <li>Not interfere with the proper functioning of our website</li>
                <li>Not use our services for any illegal or unauthorized purpose</li>
              </ul>
            </div>

            {/* Service Fees and Payment */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Service Fees and Payment</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Our services are provided on a fee basis as outlined in our service packages. By engaging our services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Pay all fees associated with the services you select</li>
                <li>Provide valid payment information</li>
                <li>Pay fees in accordance with the payment terms provided</li>
                <li>Pay any applicable taxes</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                All fees are non-refundable unless otherwise stated in writing or required by law.
              </p>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Intellectual Property Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                All content on our website, including text, graphics, logos, images, and software, is the property of Khan Consultants or its content suppliers and is protected by intellectual property laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any of our content without our prior written permission.
              </p>
            </div>

            {/* Professional Services */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Professional Services Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                While we strive to provide accurate and timely services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Service timelines are subject to government processing times</li>
                <li>We cannot guarantee specific outcomes or approvals</li>
                <li>Government fees are separate from our service fees</li>
                <li>Clients must provide accurate and complete documentation</li>
                <li>We are not responsible for delays caused by government agencies</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                To the maximum extent permitted by law, Khan Consultants shall not be liable for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Indirect, incidental, special, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Damages resulting from government rejections or delays</li>
                <li>Unauthorized access to or alteration of your data</li>
                <li>Third-party conduct or content</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                Our total liability shall not exceed the amount you paid for the specific service.
              </p>
            </div>

            {/* Warranties */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Warranties and Disclaimers</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Our services are provided "as is" and "as available." We disclaim all warranties, express or implied, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Warranties of merchantability or fitness for a particular purpose</li>
                <li>Warranties regarding accuracy, reliability, or availability</li>
                <li>Warranties that services will be uninterrupted or error-free</li>
              </ul>
            </div>

            {/* Indemnification */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Indemnification</h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Khan Consultants and its officers, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your use of our services, violation of these Terms, or infringement of any third-party rights.
              </p>
            </div>

            {/* Confidentiality */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Confidentiality</h2>
              <p className="text-gray-700 leading-relaxed">
                We maintain strict confidentiality of all client information. We will not disclose your personal or business information to third parties except as necessary to provide our services, comply with legal obligations, or with your explicit consent.
              </p>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to terminate or suspend your access to our services at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Governing Law and Jurisdiction</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Kolkata, West Bengal.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of our services after any changes constitutes acceptance of the new Terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-slate-50 rounded-lg p-6 sm:p-8 border border-slate-200">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
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

export default TermsOfService;
