## 🔑 What the code does
The function implements **ROT13**, a simple substitution cipher where each letter is shifted 13 places forward in the alphabet. Because the alphabet has 26 letters, applying ROT13 twice returns the original text.

---

## 🧩 Step-by-step explanation
1. **Two alphabet strings are defined:**
   ```js
   var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
   var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
   ```
   - `a` is the normal alphabet (lowercase + uppercase).
   - `b` is the alphabet rotated by 13 positions.

2. **Regex replacement:**
   ```js
   message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
   ```
   - `/[a-z]/gi` matches every letter (case-insensitive). or you can just write `/[a-zA-Z]/g`
   - For each matched character `c`, the function finds its position in `a` (`a.indexOf(c)`).
   - It then substitutes the character at the same position in `b`.

3. **Result:**
   - Every letter is replaced with its ROT13 counterpart.
   - Non-alphabetic characters (spaces, punctuation, numbers) remain unchanged.

---

## ⚖️ Trade-offs compared to other solutions
- ✅ **Readable & compact** — easy to see the mapping directly.
- ✅ **No loops needed** — relies on `replace` with a callback.
- ❌ **Less efficient** — `indexOf` searches through the string `a` for each character, which can be slower for long inputs.
- ❌ **Harder to extend** — if you wanted ROT-n with a different shift, you’d need to rebuild the `b` string.

---

