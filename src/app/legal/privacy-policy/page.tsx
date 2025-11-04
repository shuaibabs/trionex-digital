
import LegalPageLayout from '@/components/layout/legal-page-layout';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: 'Introduction',
      content: 'Welcome to Trionex Digital’s Privacy Policy. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.',
    },
    {
      title: 'Information We Collect',
      content: 'We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows: Identity Data (includes first name, last name, username), Contact Data (includes billing address, email address, and telephone numbers), and Technical Data (includes internet protocol (IP) address, your login data, browser type and version).',
    },
    {
      title: 'How We Use Your Information',
      content: 'We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to perform the contract we are about to enter into or have entered into with you, to process and deliver your order, or where it is necessary for our legitimate interests.',
    },
    {
      title: 'Data Security',
      content: 'We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.',
    },
    {
      title: 'Your Legal Rights',
      content: 'Under certain circumstances, you have rights under data protection laws in relation to your personal data. These include the right to request access, correction, erasure, or transfer of your personal data.',
    },
  ];

  return (
    <LegalPageLayout
      title="Privacy Policy"
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
