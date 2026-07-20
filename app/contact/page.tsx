import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import ContactForm from './ContactForm';

const ContactPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Contact</PageHeaderHeading>
      </PageHeader>

      <div className="mt-4">
        <ContactForm />
      </div>

          </>
  );
};
export default ContactPage;
