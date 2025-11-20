// function reversing(str) {
//     // Write Your Code Here
//     let signIndex = str.indexOf('@');
//     let signIndexTwo = str.lastIndexOf('@');
//     console.log(signIndex);
//     console.log(signIndexTwo);

//     let result =str.split('').reverse().join('');
//     console.log(result);

//     let arrResult = result.split(',');
//     console.log(arrResult);
    
//     let arr = ['',''];
//     arr[0] = [...arrResult[0].slice(0,signIndex),'@',...arrResult[0].slice(signIndex)];
//     arr[1] = [...arrResult[1].slice(0,signIndexTwo),'@',...arrResult[1].slice(signIndexTwo)];
//     console.log(arr)
//   }
  
//   console.log(reversing(",@Hello, E@lzero")); // ,@olleH, E@orezl

//================================
// ffffffffffffffffuck
//================================
/*AI solution*/
 /**
 * تعكس حروف كل كلمة في السلسلة النصية (str)، مع الحفاظ على موقع جميع الأحرف غير الأبجدية (مثل العلامات، @، والمسافات).
 * يتم تعريف "الكلمة" هنا كتسلسل متصل من الأحرف الأبجدية الإنجليزية (A-Z, a-z).
 *
 * @param {string} str - السلسلة النصية الأصلية.
 * @returns {string} - السلسلة النصية بعد عكس حروف الكلمات.
 */
function reversing(str) {
    // 1. تقسيم السلسلة النصية إلى مصفوفة من الأجزاء.
    // التعبير النمطي /([a-zA-Z]+)/ يقوم بمطابقة أي تسلسل من حرف أو أكثر (الكلمات).
    // استخدام الأقواس () هنا يضمن أن الكلمات المطابقة (الأجزاء المراد عكسها) يتم تضمينها أيضاً في مصفوفة النتائج، متناوبة مع الأحرف الفاصلة.
    // مثال: ",@Hello, E@lzero".split(/([a-zA-Z]+)/) ينتج:
    // [",@", "Hello", ", ", "E", "@", "lzero", ""]
    const parts = str.split(/([a-zA-Z]+)/);
  
    // 2. المرور على كل جزء في المصفوفة.
    const result = parts.map((part, index) => {
      // بسبب طريقة عمل .split() مع المجموعات الملتقطة، تكون:
      // - الأحرف الفاصلة في الفهارس الزوجية (0, 2, 4, ...).
      // - الكلمات (المطلوب عكسها) في الفهارس الفردية (1, 3, 5, ...).
      
      // التحقق مما إذا كان الجزء هو كلمة (في فهرس فردي).
      if (index % 2 !== 0) {
        // عكس الكلمة:
        // - split('') : تحويل الكلمة إلى مصفوفة من الحروف.
        // - reverse() : عكس ترتيب هذه الحروف.
        // - join('')  : ضم الحروف المعكوسة لتكوين الكلمة الجديدة.
        return part.split('').reverse().join('');
      }
      
      // إذا كان الجزء حرفاً فاصلاً (في فهرس زوجي)، يتم إعادته كما هو.
      return part;
    });
  
    // 3. ضم جميع الأجزاء المعكوسة وغير المعكوسة لتكوين السلسلة النهائية.
    return result.join('');
  }
  
  // اختبار الدالة مع المثال المقدم
  console.log(`الإدخال: ",@Hello, E@lzero"`);
  console.log(`الناتج: ${reversing(",@Hello, E@lzero")}`); // الناتج المتوقع: ,@olleH, E@orezl
  
  // مثال إضافي
  console.log(`الإدخال: "123-Code@Test."`);
  console.log(`الناتج: ${reversing("123-Code@Test.")}`); // الناتج المتوقع: 123-edoC@tseT.