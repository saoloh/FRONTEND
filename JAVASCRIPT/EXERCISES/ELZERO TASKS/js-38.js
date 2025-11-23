
//==================================================AI
let str = "i lovE elzeRO weB schOOL";

function toTitleCase(sentence) {
    // 1. توحيد الجملة إلى أحرف صغيرة
    const lowerCaseSentence = sentence.toLowerCase();

    // 2. تقسيم الجملة إلى مصفوفة من الكلمات
    const words = lowerCaseSentence.split(' ');

    // 3. تعديل كل كلمة
    const titleCaseWords = words.map(word => {
        // التحقق من أن الكلمة ليست فارغة لتجنب الأخطاء
        if (word.length === 0) {
            return '';
        }
        
        // جلب الحرف الأول وتحويله إلى حرف كبير (.toUpperCase())
        const firstLetter = word.charAt(0).toUpperCase();
        
        // جلب باقي الكلمة (بدءاً من الفهرس 1)
        const restOfWord = word.slice(1);
        
        // دمج الحرف الأول الكبير مع باقي الكلمة الصغيرة
        return firstLetter + restOfWord;
    });

    // 4. دمج الكلمات مرة أخرى في جملة بمسافات
    return titleCaseWords.join(' ');
}

let result = toTitleCase(str);

console.log(result); // Output: "I Love Elzero Web School"