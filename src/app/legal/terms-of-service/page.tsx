
import LegalPageLayout from '@/components/layout/legal-page-layout';

export default function TermsOfServicePage() {
  const sections = [
    {
      title: '1. Agreement to Terms',
      content: 'By using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services. We may modify the terms at any time, and such modifications will be effective immediately upon posting.',
    },
    {
      title: '2. Our Services',
      content: 'Trionex Digital provides web development, digital marketing, and related services as described on our website. We reserve the right to modify or discontinue our services at any time without notice.',
    },
    {
      title: '3. User Responsibilities',
      content: 'You are responsible for your use of the services and for any content you provide, including compliance with applicable laws, rules, and regulations. You must provide us with accurate and complete information and keep your account information updated.',
    },
    {
      title: '4. Intellectual Property',
      content: 'All content and materials available on our website, including but not limited to text, graphics, website name, code, images, and logos are the intellectual property of Trionex Digital and are protected by applicable copyright and trademark law.',
    },
    {
      title: '5. Limitation of Liability',
      content: 'In no event shall Trionex Digital, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.',
    },
  ];

  return (
    <LegalPageLayout
      title="Terms of Service"
      lastUpdated="August 2, 2024"
    >
      {sections.map(section => (
        <div key={section.title} className="mb-8">
          <h2 className="font-headline text-2xl font-bold mb-3">{section.title}</h2>
          <p className="text-muted-foreground leading-relaxed">{section.content}</p>
        </div>
      ))}
    </LegalPageLayout>
  );
}
