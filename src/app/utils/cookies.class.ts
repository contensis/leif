import Cookies from 'js-cookie';

const COOKIE_VALID_DAYS = 1;

const _cookie = Cookies.withConverter({
  read: (val: any) => decodeURIComponent(val),
  write: (val: any) => encodeURIComponent(val),
});

export class CookieHelper {
  static GetCookie(name: string) {
    let cookie = _cookie.get(name);
    if (typeof cookie === 'undefined') {
      return null;
    }
    return cookie;
  }

  static SetCookie(name: string, val: any, maxAgeDays = COOKIE_VALID_DAYS) {
    maxAgeDays === 0
      ? _cookie.set(name, val)
      : _cookie.set(name, val, { expires: maxAgeDays });
  }
  static DeleteCookie(name: string) {
    _cookie.remove(name);
  }
}
