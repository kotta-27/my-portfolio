// components/Contact.jsx
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { translations } = useLanguage();

  return (
    <div className="mx-auto max-w-sm py-10 flex flex-col justify-center items-center">
      <h2 className="contact-title"><span className="text-red-600">C</span>ontact</h2>
      <p className="text-lg text-bold mb-5 "> {translations.contact.description}</p>
      <a href="mailto:al20013@shibaura-it.ac.jp" className="bg-blue-500 px-5 py-2 text-bold rounded hover:bg-blue-700">
        Meil to:
      </a>
    </div>
  );
};

export default Contact;
