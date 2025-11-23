// Message Needed In Output


// متغير لتتبع ما إذا كانت الرسالة قد ظهرت بالفعل
const message = "You Pressed Ctrl + Alt + Shift";

document.addEventListener('keydown', (e) => {
    // 1. التحقق من الضغط على المفاتيح المطلوبة
    const isComboPressed = e.ctrlKey && e.altKey && e.shiftKey;

    // 2. التحقق من المفاتيح وعدم تكرار الرسالة
    if (isComboPressed ) {
        
        // منع السلوك الافتراضي (إذا كان هناك أي سلوك مرتبط بهذا التوليفة)
        // e.preventDefault(); 
        
        console.log(message);
        
        // تعيين العلامة إلى true لمنع الطباعة مرة أخرى
    }
});