import DOMPurify from 'isomorphic-dompurify';
import data from '@/dataset/static.json';

export default function Privacy() {
  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(data.privacy.copy),
  });
  return (
    <main className="static h-auto py-12 sm:py-16 lg:py-20 px-6">
      <h1 className="text-xl font-bold pb-6">{data.privacy.heading}</h1>
      <div dangerouslySetInnerHTML={sanitizedData()}></div>
    </main>
  );
}
