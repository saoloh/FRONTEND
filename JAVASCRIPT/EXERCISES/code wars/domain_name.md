- this is my first solution but id did not work well
```javascript
function domainName(url){
    let RegEx = /www\.(.+)\.|(?:http|https):\/\/(.+)\.|(?:http|https):\/\/www\.(.+)\.|(.+)\./;
    let result = url.match(RegEx);
    console.log(result)
    return (result[1] ||result[2]||result[3]);
}

domainName("http://google.com");
domainName("http://google.co.jp");
domainName("www.xakep.ru");
domainName("https://youtube.com");
```
To reliably **capture the domain name** (without protocol, `www`, or TLD) from a URL, you can use a regex like this:

```regex
^(?:https?:\/\/)?(?:www\.)?([^\.]+)
```

---

## 🔍 Explanation
- `^` → start of the string  
- `(?:https?:\/\/)?` → optional protocol (`http://` or `https://`)  
- `(?:www\.)?` → optional `www.`  
- `([^\.]+)` → capture everything up to the first dot → **this is the domain name**

---

## 🧪 Examples

| URL                                | Captured Domain |
|------------------------------------|-----------------|
| `http://google.com`                | `google`        |
| `http://google.co.jp`              | `google`        |
| `www.xakep.ru`                     | `xakep`         |
| `https://youtube.com`              | `youtube`       |
| `https://sub.domain.example.com`   | `sub` (first label) |

---

⚠️ **Note:**  
This regex captures only the **first label** of the domain (e.g., `google` from `google.co.jp`). If you want the **full domain without protocol and `www`**, you can adjust it:

```regex
^(?:https?:\/\/)?(?:www\.)?([^\/]+)
```

- Here, `([^\/]+)` captures everything up to the first `/` → so you’d get `google.co.jp` instead of just `google`.

---
