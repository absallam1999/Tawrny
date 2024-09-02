import "./index.scss";

export default function Policy() {
  document.title = 'طورنى - سياسة الموقع'
  return (
    <div className="policy">
      <div className="container">
        <h2> سياسة موقع طورنى </h2>
        <p>
          {" "}
          عند استخدام خدماتنا، فإنك تأتمننا على معلوماتك. نحن ندرك أن هذه
          مسؤولية كبيرة ونعمل بجدية لحماية معلوماتك ونمنحك التحكم فيها. <br />{" "}
          <br />
          تهدف سياسةُ الخصوصية هذه إلى مساعدتك على فهم ماهية المعلومات التي
          نجمعها وسبب جمعنا لها، وكذلك طريقة تحديث معلوماتك وتصديرها وحذفها.
        </p>
        <p>
          {" "}
          يمكنك استخدام خدماتنا بطرق شتى لإدارة خصوصيتك. على سبيل المثال، يمكنك
          الاشتراك في حساب منصة طورنى إذا أردت إنشاء محتوى وإدارته، مثل بث
          المعلومات والمهارات التقنية والغير تقنية، أو إذا أردت عرض مزيد من
          نتائج البحث ذات الصلة. يمكنك أيضًا استخدام الكثير من خدماتنا بدون
          تسجيل الدخول إلى حسابك أو بدون إنشاء حساب من الأساس، مثل البحث عن
          التخصصات او البحث عن اشخاص ذو مهارة محددة.
        </p>
      </div>
    </div>
  );
}
