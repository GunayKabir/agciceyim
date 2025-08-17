import React from 'react';

function Catdirilma() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 text-gray-800 font-sans text-sm sm:text-base">
      <h1
        className="text-3xl sm:text-4xl font-bold text-center mb-4"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        Şərtlər və qaydalar
      </h1>
      <div className="w-20 h-[2px] bg-cyan-500 mx-auto mb-8 rounded-full"></div>

      {/* Çatdırılma */}
      <div className="mb-8">
        <h2
          style={{ fontFamily: "'Dancing Script', cursive" }}
          className="text-2xl sm:text-3xl text-black font-bold mb-3 pl-3 border-l-4 border-cyan-300"
        >
          Çatdırılma
        </h2>
        <p className="mb-4">
          Çatdırılma kuryer vasitəsi ilə 24/7 həyata keçirilir.
        </p>
        <p className="mb-4">
          Bakının mərkəzi rayonlarına (Nərimanov, Səbail, Nəsimi, Xətai, Yasamal, Nizami, Binəqədi) 100 AZN-dən yuxarı sifarişlər üçün çatdırılma ödənişsizdir. Sifarişin məbləği 100 AZN-dən aşağıdırsa çatdırılma 10 AZN təşkil edir.
        </p>
        <p className="mb-4">
          Bakının mərkəz ətrafı rayonlarına (Sabunçu, Qaradağ, Suraxanı, Xəzər) və kəndlərinə (Mərdəkan, Bilgəh, Maştağa, Novxanı və s.) çatdırılma məbləğdən asılı olmayaraq 25 AZN-dir.
        </p>
        <p>
          Abşeron yarımadasına, Sumqayıt və Xırdalan şəhərlərinə çatdırılma məbləğdən asılı olmayaraq 25 AZN-dir.
        </p>
      </div>

      {/* Ödəniş */}
      <div className="mb-8">
        <h2
          style={{ fontFamily: "'Dancing Script', cursive" }}
          className="text-2xl sm:text-3xl font-semibold mb-3 pl-3 border-l-4 border-cyan-300"
        >
          Ödəniş
        </h2>
        <p className="mb-4">
          Ağ Çiçəyim mağazasından alış aşağıdakı ödəniş üsulları ilə həyata keçirilir:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Sifarişinizi qəbul etdiyiniz zaman kuryerə nağd ödəmə;</li>
          <li>Sifarişinizi yaxınlaşıb mağazadan özünüz götürdüyünüz halda nağd şəkildə və ya beynəlxalq ödəmə sistemlərinin ödəniş kartı ilə;</li>
          <li>Veb saytımızdan MasterCard və ya Visa Beynəlxalq ödəmə sistemlərinin ödəniş kartı ilə onlayn şəkildə ödəyə bilərsiniz.</li>
        </ul>
        <p>
          Mağazamız İnternet ödənişlərinin tam təhlükəsizliyinə zəmanət verən <strong>“3-D Secure”</strong> texnologiyasından istifadə edir.
        </p>
      </div>

      {/* Zəmanət */}
      <div className="mb-8">
        <h2
          style={{ fontFamily: "'Dancing Script', cursive" }}
          className="text-2xl sm:text-3xl font-semibold mb-3 pl-3 border-l-4 border-cyan-300"
        >
          Zəmanət
        </h2>
        <p className="mb-4">
          Biz çiçəklərimizin, kompozisiyalarımızın təravətinə və keyfiyyətinə zəmanət veririk, lakin hər hansı səbəbdən sifarişinizdən narazı qalsanız, çatdırılma zamanı və ya sifarişi mağazadan götürdüyünüz andan etibarən şikayətinizə baxmağa hazırıq. Sizə dərhal mövcud vəziyyətin həllini təklif edəcəyik.
        </p>
        <p className="font-semibold mb-2">Sifarişin dəyişdirilməsi və geri qaytarılma şərtləri:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Səliqəsiz dizayn yaxud hər hansı bir element əksikliyi sifarişin dəyişdirilib yenidən çatdırılması və ya pulunuzun geri qaytarılması üçün bir səbəbdir.</li>
          <li>Əgər kompozisiya keyfiyyətsiz, köhnə, solmuş çiçəklərdən ibarət olarsa müştəri kompozisiyanın dəyişdirilməsini tələb etmək hüququna malikdir.</li>
          <li>Müştəriyə ödənişin geri qaytarılması 7 iş günü ərzində həyata keçirilir.</li>
        </ul>
        <p className="text-sm text-gray-600">
          <strong>Şirkət cavabdeh deyil:</strong><br />
          - Alıcının telefon nömrəsi və ya ünvanı sifariş prosesində düzgün qeyd olunmayıbsa;<br />
          - Alıcı sifarişi qəbul etməkdən və ya alınma vaxtından narazılıq edərsə;
        </p>
      </div>

      {/* Məxfilik */}
      <div className="mb-8">
        <h2
          style={{ fontFamily: "'Dancing Script', cursive" }}
          className="text-2xl sm:text-3xl font-semibold mb-3 pl-3 border-l-4 border-cyan-300"
        >
          Məxfilik
        </h2>
        <p>
          "Ağ Çiçəyim" şirkəti qanunvericiliyin tələblərinə riayət edir və müştərilərdən alınan məlumatların məxfiliyinin qorunmasına zəmanət verir.
        </p>
      </div>
    </div>
  );
}

export default Catdirilma;
