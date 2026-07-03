const STAFF_PASSWORD = "mofu2026";

export function checkStaffAccess() {
  const ok = sessionStorage.getItem("staff_auth");

  if (ok === "true") return true;

  const input = prompt("スタッフパスワードを入力してください");

  if (input === STAFF_PASSWORD) {
    sessionStorage.setItem("staff_auth", "true");
    return true;
  }

  alert("アクセス拒否");
  location.href = "login.html";
  return false;
}