import { db } from "./config.js";
import {
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// 簡易ハッシュ（PIN用）
function hashPin(pin) {
  let hash = 0;
  for (let i = 0; i < pin.length; i++) {
    hash = (hash * 31 + pin.charCodeAt(i)) % 1000000007;
  }
  return hash.toString();
}

// ユーザー作成
export async function registerUser(nickname, pin) {
  const userRef = doc(db, "users", nickname);

  const snap = await getDoc(userRef);

  if (snap.exists()) {
    throw new Error("このニックネームは既に使われています");
  }

  const data = {
    nickname,
    pin: hashPin(pin),
    stamps: [0,0,0,0,0,0,0],
    createdAt: new Date().toISOString()
  };

  await setDoc(userRef, data);

  return data;
}

// ログイン
export async function loginUser(nickname, pin) {
  const userRef = doc(db, "users", nickname);

  const snap = await getDoc(userRef);

  if (!snap.exists()) {
    throw new Error("ユーザーが存在しません");
  }

  const data = snap.data();

  if (data.pin !== hashPin(pin)) {
    throw new Error("PINが違います");
  }

  return data;
}