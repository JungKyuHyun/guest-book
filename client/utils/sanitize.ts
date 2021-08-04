import DOMPurify from 'dompurify';

export function sanitizeHTML(source?: string) {
  if (source === undefined) {
    return;
  }
  return {
    __html: DOMPurify.sanitize(source, {
      ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a'],
      ALLOWED_ATTR: ['href', 'target'],
    }),
  };
}
