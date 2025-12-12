
import LegalPageLayout from '@/components/layout/legal-page-layout';

export default function CookiePolicyPage() {
  const sections = [
    {
      title: 'What Are Cookies?',
      content: 'Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.',
    },
    {
      title: 'How We Use Cookies',
      content: 'We use cookies for several purposes. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our website. For example, we use cookies to track usage statistics via Google Analytics.',
    },
    {
      title: 'Your Choices Regarding Cookies',
      content: 'You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your web browser. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.',
    },
  ];

  return (
    <LegalPageLayout
      title="Cookie Policy"
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
