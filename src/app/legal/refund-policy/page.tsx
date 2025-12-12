
import LegalPageLayout from '@/components/layout/legal-page-layout';

export default function RefundPolicyPage() {
  const sections = [
    {
      title: 'General Policy',
      content: 'We strive to ensure our clients are satisfied with our services. However, due to the nature of digital services, we have a clear policy on refunds.',
    },
    {
      title: 'Web Development Projects',
      content: 'For web development projects, the initial deposit is non-refundable once work has begun. Refunds for subsequent payments are considered on a case-by-case basis and are only issued if we fail to deliver the agreed-upon scope of work.',
    },
    {
      title: 'Marketing & SEO Services',
      content: 'Services such as SEO, PPC, and Social Media Marketing are non-refundable. These services require significant resources and time, and results are not guaranteed. We do not offer refunds based on performance.',
    },
    {
      title: 'Processing Refunds',
      content: 'Any approved refunds will be processed within 14 business days to the original method of payment.',
    },
  ];

  return (
    <LegalPageLayout
      title="Refund Policy"
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
