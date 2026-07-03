import { db } from "./config.js";
import {
  doc,
  getDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// スタンプ取得
export async function getStamps(nickname) {
  const ref = doc(db, "users", nickname);
  const snap = await getDoc(ref);

  if (!snap.exists()) throw new Error("ユーザーなし");

  return snap.data().stamps;
}

// スタンプ追加
export async function addStamp(nickname, index) {
  const ref = doc(db, "users", nickname);
  const snap = await getDoc(ref);

  if (!snap.exists()) throw new Error("ユーザーなし");

  const data = snap.data();
  const stamps = data.stamps;

  stamps[index] = 1;

  await updateDoc(ref, {
    stamps
  });

  return stamps;
}