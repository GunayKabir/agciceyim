import React from 'react';

function Statuslar() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 text-gray-800 font-sans text-sm sm:text-base">
      <h1
        className="text-3xl sm:text-4xl font-bold text-center mb-4"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        Status necə qazanılır?
      </h1>
      <div className="w-24 h-[2px] bg-cyan-500 mx-auto mb-8 rounded-full"></div>

      {/* Açıklama */}
      <p className="mb-6">
        "Ağ Çiçəyim" onlayn mağazasında müştəri statuslarını əldə etmək və daimi endirimlərdən istifadə etmək üçün aşağıdakı addımları izləməlisiniz:
      </p>

      {/* Qeydiyyat */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3 pl-3 border-l-4 border-cyan-300" style={{ fontFamily: "'Dancing Script', cursive" }}>
          Qeydiyyatdan keçin
        </h2>
        <p>
          Ağ Çiçəyim onlayn mağazasında hesab yaradın. Qeydiyyat zamanı şəxsi məlumatlarınızı düzgün formada doldurmağınız xüsusilə önəmlidir.
        </p>
      </div>

      {/* Statuslara Yüksəlin */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3 pl-3 border-l-4 border-cyan-300" style={{ fontFamily: "'Dancing Script', cursive" }}>
          Statuslara yüksəlin
        </h2>
        <div className="space-y-4">
          <div>
            <strong>SILVER status:</strong><br />
            Qeydiyyatdan dərhal sonra, SILVER statusu və bütün onlayn alış-verişlərinizdə 2% endirim əldə edəcəksiniz. Bu statusda olarkən etdiyiniz onlayn sifarişlər sizi GOLD statusuna yüksəldəcək.
          </div>
          <div>
            <strong>GOLD status:</strong><br />
            GOLD statusa yüksəlmək üçün, uğurlu onlayn sifarişlərinizin məbləği toplam 300 AZN-dən çox olmalıdır. GOLD statusunda olarkən bütün onlayn alış-verişlərinizdə 5% endirim əldə edəcəksiniz.
          </div>
          <div>
            <strong>PLATINUM status:</strong><br />
            PLATINUM statusa yüksəlmək üçün, uğurlu onlayn sifarişlərinizin məbləği toplam 650 AZN-dən çox olmalıdır. PLATINUM statusunda olarkən bütün onlayn alış-verişlərinizdə 10% endirim əldə edəcəksiniz.
          </div>
          <div>
            <strong>DIAMOND status:</strong><br />
            DIAMOND statusa yüksəlmək üçün, uğurlu onlayn sifarişlərinizin məbləği toplam 1000 AZN-dən çox olmalıdır. Bu statusda daimi bütün onlayn alış-verişlərinizdə 15% endirim əldə edəcəksiniz.
          </div>
        </div>
      </div>

      {/* Ad Günü */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3 pl-3 border-l-4 border-cyan-300" style={{ fontFamily: "'Dancing Script', cursive" }}>
          Ad gününüzü qeyd edin
        </h2>
        <p>
          "Ağ Çiçəyim" sizin üçün ad gününüzdə özəl hədiyyələr və təbriklər hazırlayır. Bu üstünlüyü əldə etmək üçün qeydiyyat zamanı doğum günü tarixinizi düzgün qeyd etməyiniz vacibdir.
        </p>
      </div>

      {/* Nəzərə almaq vacibdir */}
 
<div className="mb-8">
 <div className="text-center">
  <h2 className="text-2xl sm:text-xl font-semibold mb-6 inline-block border-b-8 border-cyan-300">
    Nəzərə almaq vacibdir
  </h2>
</div>


  <div className="border border-cyan-300 pl-4 space-y-2 mt-4 pt-4">
    <p>
      Əgər qeydiyyatdan keçib, profilinizi tam doldurmamısınızsa, hesabınıza daxil olub (sizin e-poçtunuz sizin logindir), "Tənzimləmələr" bölməsindən şəxsi məlumatlarınızı düzgün formada doldurmağınız mütləqdir. Lazımı məlumatlar doldurulduqdan sonra "Yadda Saxla" düyməsini basın.
    </p>
    <p>
      Alıcı profilində məlumatlarınız səhv olarsa (soyad, adı, telefon nömrəsi, e-poçt ünvanı), profiliniz etibarsız hesab edilə bilər. Bu səbəbdən, əmin olun ki, məlumatlarınız düzgün və tamdır.
    </p>
    <p>
      Status endirimləri yalnız qeydiyyatdan keçmiş istifadəçilər üçün nəzərdə tutulub.
    </p>
    <p>
      Əgər status endirimlərində problem yaşayırsınızsa, müştəri xidmətləri ilə əlaqə saxlayın (<strong>+99455 350 21 21</strong>).
    </p>
    <p>
      Status endirimlərindən yalnız onlayn alış-veriş zamanı faydalana bilərsiniz. Çatdırılma xidmətləri bu endirimlərə daxil deyil.
    </p>
  </div>
</div>





      {/* Bitirici qeyd */}
      <p className="mt-6 font-medium text-center">
        "Ağ Çiçəyim" onlayn mağazasından alış-veriş edərkən statusunuzdan istifadə edin və daimi endirimlərdən yararlanın!
      </p>
    </div>
  );
}

export default Statuslar;
