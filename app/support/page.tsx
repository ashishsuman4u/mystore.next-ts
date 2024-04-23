import DOMPurify from 'isomorphic-dompurify';
import data from '@/dataset/static.json';

export default function Support() {
  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(data.support.copy),
  });
  return (
    <main className="static h-auto py-12 sm:py-16 lg:py-20 px-6">
      <h1 className="text-xl font-bold pb-6">{data.support.heading}</h1>
      <div dangerouslySetInnerHTML={sanitizedData()}></div>
    </main>
  );
}
