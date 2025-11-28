
## 🔎 Regex:

```javascript
/^(?=.*[a-z])(?=.*[A-Z]).+$/
```
🧩 Explanation Step by Step
^

Anchors the regex at the start of the string.

(?=.*[a-z])

This is a positive lookahead.

It means: “From here, there must be at least one lowercase letter (a–z) somewhere in the string.”

It doesn’t consume characters, it just checks.

(?=.*[A-Z])

Another positive lookahead.

It means: “From here, there must be at least one uppercase letter (A–Z) somewhere in the string.”

.+

After the lookaheads succeed, this matches one or more of any character (except line breaks).

Ensures the string isn’t empty.

$

Anchors the regex at the end of the string.



// assign your RegExp to REGEXP:
```javascript
const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,}$/;
```
Explanation
^ → start of string

(?=.*[a-z]) → must contain at least one lowercase

(?=.*[A-Z]) → must contain at least one uppercase

(?=.*[0-9]) → must contain at least one digit

.{6,} → match any character, at least 6 times (this enforces minimum length)

$ → end of string