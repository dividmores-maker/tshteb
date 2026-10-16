خطوات عمل الـ APK عن طريق GitHub Desktop
=========================================

1) افتح GitHub Desktop > File > Add local repository > اختار فولدر tashteeb-apk
   (لو قالك مش repository دوس "create a repository" وكمل).
   مهم: فولدر .github مخفي، تأكد إنه موجود جوه الفولدر (فعّل Show hidden files).

2) اكتب أي رسالة في Summary (مثلا: first) واضغط Commit to main.

3) اضغط Publish repository (ممكن تخليه Private).

4) افتح الريبو على موقع github.com > تبويب Actions
   هتلاقي Build APK شغال. استنى 4-6 دقايق لحد ما يبقى أخضر.

5) ادخل على الـ run الأخضر، وانزل لتحت لقسم Artifacts، حمّل tashteeb-apk
   (ملف zip فيه app-debug.apk).

6) فك الضغط، ابعت app-debug.apk للتليفون وثبّته
   (هيطلب تسمح بالتثبيت من مصدر غير معروف).

للتعديل بعد كده: عدّل www/index.html، اعمل Commit و Push، والـ APK الجديد هيتبني لوحده.

ملحوظة: بياناتك بتتحفظ جوه التطبيق على التليفون، فلو مسحت بيانات التطبيق
أو فكيته هتضيع.
