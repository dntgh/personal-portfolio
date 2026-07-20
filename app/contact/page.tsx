import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import ContactForm from './ContactForm';

const ContactPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Contact</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Get in touch before I write another line of code!
        </PageHeaderHeading>
      </PageHeader>

      <div className="mt-4">
        <ContactForm /> 
      </div>

          </>
  );
};
export default ContactPage;
