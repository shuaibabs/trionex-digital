
import LegalPageLayout from '@/components/layout/legal-page-layout';

export default function CancellationPolicyPage() {
  const sections = [
    {
      title: 'Project-Based Services',
      content: 'For project-based services like website development, cancellation requests must be submitted in writing. If the project is cancelled before work begins, a full refund of the deposit will be issued. If work has already commenced, the deposit is non-refundable and charges may apply for work completed up to the cancellation date.',
    },
    {
      title: 'Monthly Retainer Services',
      content: 'For monthly retainer services such as SEO or Social Media Marketing, you may cancel your service with a 30-day written notice. Services will continue to be rendered and billed for the final 30-day period.',
    },
    {
      title: 'How to Cancel',
      content: 'All cancellation requests must be sent via email to support@trionexdigital.com. Your request will be confirmed within two business days.',
    },
  ];

  return (
    <LegalPageLayout
      title="Cancellation Policy"
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
