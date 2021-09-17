export default function (str: string) {
  if (typeof window === 'undefined') {
    return Buffer.from(str).toString('base64');
  } else {
    return window.btoa(str);
  }
}
