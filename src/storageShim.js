import { ref, get, set } from 'firebase/database';
import { db } from './firebase.js';

// Claude Artifacts provides window.storage. Real websites do not.
// This shim lets the existing RSVP code keep working, but stores data in Firebase.
window.storage = {
  async get(key) {
    const snapshot = await get(ref(db, key));
    if (!snapshot.exists()) return null;
    return { value: JSON.stringify(snapshot.val()) };
  },
  async set(key, value) {
    await set(ref(db, key), JSON.parse(value));
  },
};
