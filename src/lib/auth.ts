const KEY = "gsos.auth";

export function isAuthed(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(KEY) === "1";
}

export function signIn(user: string, pass: string): boolean {
  if (user.trim().toLowerCase() === "admin" && pass === "admin") {
    localStorage.setItem(KEY, "1");
    return true;
  }
  return false;
}

export function signOut() {
  localStorage.removeItem(KEY);
}
