/* ================= MAP SETUP ================= */
// Initialize map (PUO coordinates)
var map = L.map("map").setView([4.587135, 101.122063], 18);

// Base layers
var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap",
  maxZoom: 19,
}).addTo(map);

var satellite = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    attribution: "Tiles © Esri",
    maxZoom: 19,
  },
);

// Toggle function
function toggleSatellite() {
  if (map.hasLayer(satellite)) {
    map.removeLayer(satellite);
    map.addLayer(osm); // back to normal
  } else {
    map.removeLayer(osm);
    map.addLayer(satellite); // switch to satellite
  }
}
function togglePanel() {
  const panel = document.getElementById("top-panel");
  const toggleBtn = document.querySelector(".panel-toggle-btn");

  panel.classList.toggle("minimized");

  // Change button position based on state
  if (panel.classList.contains("minimized")) {
    toggleBtn.textContent = "☰";
  } else {
    toggleBtn.textContent = "−";
  }
}

function emojiIcon(emoji) {
  return L.divIcon({
    html: `<div style="font-size:27px; background-color: white; border: 2px solid #333; border-radius: 50%; width: 35px; height: 35px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">${emoji}</div>`,
    className: "",
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });
}

/* ================= LOCATIONS JABATAN ================= */
var locations = [
  {
    name: "Jabatan Teknologi Maklumat Dan Komunikasi (JTMK)",
    coords: [4.587135, 101.122063],
    desc: "Department of Information Technology",
    image: "JTMK.jpg.jpeg",
    icon: emojiIcon("🎓"),
    details: `
    <h2>JTMK</h2>
    <img src="JTMK1.jpeg" width="50%">
    <img src="JTMK2.jpeg" width="50%">
<br><br>
    <b>Name location:</b> Department of Information Technology<br>
<b>Category:</b> Academic Department<br><br>
    <p>
     <strong> Jabatan Teknologi Maklumat dan Komunikasi (JTMK)</strong> merupakan jabatan akademik 
    yang menawarkan program berkaitan Cyber Security, Networking, Software Development 
    dan teknologi digital terkini. Jabatan ini menyediakan kemudahan makmal komputer, 
    bilik kuliah, serta peralatan teknikal bagi menyokong pembelajaran secara teori dan praktikal.
    </p>
  `,
  },
  {
    name: "Jabatan Kejuruteraan Elektrik (JKE)",
    coords: [4.586385, 101.122262],
    desc: "Electrical Engineering Department",
    image: "images/jke.jpg",
    icon: emojiIcon("🎓"),
    details: `
          <h2>JKE</h2>
    <img src="JKE1.jpeg" width="50%">
    <img src="JKE2.jpeg" width="50%">
   <br><br>
    <b>Name location:</b>Electrical Engineering Department
<br>
<b>Category:</b> Academic Department<br><br>
    <p>
      <strong>Jabatan Kejuruteraan Elektrik(JKE)</strong> di Politeknik Ungku Omar (PUO) merupakan salah satu jabatan utama yang menawarkan pendidikan teknikal dan latihan kemahiran dalam bidang kejuruteraan elektrik dan elektronik. Jabatan ini komited dalam melahirkan graduan yang berpengetahuan, berkemahiran tinggi serta mampu memenuhi keperluan industri selaras dengan perkembangan teknologi masa kini.
    </p>
      `,
  },
  {
    name: "Jabatan Matematik, Sains & Komputer (JMSK) & Jabatan Kejuruteraan Mekanikal (JKM)",
    coords: [4.58812, 101.122659],
    desc: "Department of Mathematics, Science and Computer & Department of Mechanical Engineering",
    image: "images/jke.jpg",
    icon: emojiIcon("🎓"),
    details: `
          <h2>JMSK & JKM</h2>
    <img src="JKM & JMSK1.jpeg" width="50%">
     <img src="JKM & JMSK2.jpeg" width="50%">
     <br><br>
    <b>Name location:</b>Department of Mathematics, Science and Computer & Department of Mechanical Engineering
<br>
<b>Category:</b> Academic Department<br><br>
    <p>
     <strong>Jabatan Matematik, Sains dan Komputer (JMSK)</strong> di Politeknik Ungku Omar (PUO) merupakan jabatan sokongan akademik yang menyediakan asas pengetahuan dalam bidang matematik, sains, dan teknologi komputer kepada pelajar dari pelbagai program. Jabatan ini berperanan membina kefahaman kukuh dalam konsep asas yang penting bagi menyokong pembelajaran dalam bidang teknikal dan kejuruteraan.
    </p>
      `,
  },

  {
    name: "Jabatan Kejuruteraan Perkapalan (JKP)",
    coords: [4.587359, 101.123175],
    desc: "Department of Mechanical Engineering",
    image: "images/jke.jpg",
    icon: emojiIcon("🎓"),
    details: `
          <h2>JKP</h2>
    <img src="JKP2.jpeg" width="50%">
    <img src="JKP1.jpeg" width="50%">
     <br><br>
    <b>Name location:</b>Department of Mechanical Engineering
<br>
<b>Category:</b> Academic Department<br><br>
    <p>
      <strong>Jabatan Kejuruteraan Perkapalan (JKP)</strong> di Politeknik Ungku Omar (PUO) merupakan jabatan yang memberi tumpuan kepada bidang kejuruteraan berkaitan pembinaan, penyelenggaraan, dan teknologi kapal serta industri maritim. Jabatan ini berperanan melahirkan graduan yang berkemahiran teknikal, berpengetahuan, dan bersedia memenuhi keperluan sektor perkapalan yang semakin berkembang.
    </p>
      `,
  },

  {
    name: "Jabatan Kejuruteraan Mekanikal (JKM)",
    coords: [4.588865, 101.125111],
    desc: "Department of Mechanical Engineering",
    image: "images/jke.jpg",
    icon: emojiIcon("🎓"),
    details: `
          <h2>JKM</h2>
    <img src="JKM1.jpeg" width="50%">
    <p>
     <strong>Jabatan Kejuruteraan Awam (JKA)</strong> di Politeknik Ungku Omar (PUO) merupakan jabatan yang memfokuskan kepada bidang pembinaan, infrastruktur, dan teknologi kejuruteraan awam. Jabatan ini berperanan melahirkan graduan yang berpengetahuan, berkemahiran teknikal, serta mampu memenuhi keperluan industri pembinaan dan pembangunan negara.
    </p>
      `,
  },

  {
    name: "Jabatan Perdagangan (JP)",
    coords: [4.59179, 101.123024],
    desc: "Department of Mechanical Engineering",
    image: "images/jke.jpg",
    icon: emojiIcon("🎓"),
    details: `
          <h2>JP</h2>
    <img src="JP1.jpeg" width="60%">
    <p>
     <strong>Jabatan Perdagangan (JP)</strong> di Politeknik Ungku Omar (PUO) merupakan jabatan akademik yang memfokuskan kepada bidang perniagaan, pengurusan, perakaunan, dan keusahawanan. Jabatan ini berperanan melahirkan graduan yang berpengetahuan luas dalam aspek pengurusan organisasi serta memiliki kemahiran praktikal yang selari dengan keperluan industri dan dunia perniagaan semasa.
    </p>
      `,
  },

  {
    name: "Jabatan Pengajian Am (JPA)",
    coords: [4.59154, 101.122796],
    desc: "Department of Mechanical Engineering",
    image: "images/jke.jpg",
    icon: emojiIcon("🎓"),
    details: `
          <h2>JPA</h2>
    <img src="JPA1.jpeg" width="50%">
    <p>
     <strong>Jabatan Pengajian Am (JPA)</strong> di Politeknik Ungku Omar (PUO) merupakan jabatan sokongan akademik yang berperanan memperkukuh pembangunan sahsiah, kemahiran komunikasi, serta nilai kemanusiaan dalam kalangan pelajar. Jabatan ini menyediakan kursus-kursus teras yang melengkapkan pelajar dengan pengetahuan asas selain daripada bidang pengkhususan masing-masing.
    </p>
      `,
  },

  {
    name: "Jabatan Kejuruteraan Awam (JKA)",
    coords: [4.588641, 101.125232],
    desc: "Department of Civil Engineering ",
    image: "images/jke.jpg",
    icon: emojiIcon("🎓"),
    details: `
          <h2>JKA</h2>
    <img src="JKM1.jpeg" width="100%">
    <p>
    <strong> Jabatan Kejuruteraan Awam (JKA)</strong> di Politeknik Ungku Omar (PUO) merupakan jabatan yang memfokuskan kepada bidang pembinaan, infrastruktur, dan teknologi kejuruteraan awam. Jabatan ini berperanan melahirkan graduan yang berpengetahuan, berkemahiran teknikal, serta mampu memenuhi keperluan industri pembinaan dan pembangunan negara.
    </p>
      `,
  },

  /* ================= LOCATIONS HALL================= */
  {
    name: "Dewan Sri Kinta",
    coords: [4.590945, 101.123204],
    desc: "Sri Kinta Hall",
    image: "images/library.jpg",
    icon: emojiIcon("🏛️"),
    details: `
          <h2>Dewan Sri Kinta</h2>
    <img src="Dewan Sri Kinta.jpeg" width="50%">
    <p>
      <strong>Dewan Seri Kinta</strong> di Politeknik Ungku Omar (PUO) merupakan fasiliti serbaguna yang digunakan untuk pelbagai aktiviti rasmi, akademik, dan kokurikulum. Dewan ini menyediakan ruang yang luas dan selesa bagi penganjuran majlis, seminar, bengkel, serta program pelajar. Direka untuk menyokong suasana pembelajaran dan pembangunan sahsiah, Dewan Seri Kinta berfungsi sebagai pusat perhimpunan utama yang menggalakkan interaksi komuniti kampus serta memperkukuh hubungan antara pelajar, pensyarah, dan warga institusi.

    </p>
      `,
  },

  {
    name: "Dewan Jubli Perak",
    coords: [4.587483, 101.123818],
    desc: "Perak Jubilee Hall",
    image: "images/library.jpg",
    icon: emojiIcon("🏛️"),
    details: `
          <h2>Dewan Jubli Perak</h2>
    <img src="Dewan Jubli Perak1.jpeg" width="50%">
    <img src="Dewan Jubli Perak2.jpeg" width="50%">
    <p>
      <strong>Dewan Jubli Perak</strong> di Politeknik Ungku Omar (PUO) merupakan fasiliti utama yang digunakan untuk pelbagai program rasmi, akademik, dan kokurikulum. Dewan ini menyediakan ruang yang luas dan selesa bagi penganjuran majlis konvokesyen, seminar, bengkel, serta aktiviti pelajar. Direka untuk menyokong suasana pembelajaran dan pembangunan sahsiah, Dewan Jubli Perak berfungsi sebagai pusat perhimpunan yang menggalakkan interaksi komuniti kampus serta memperkukuh hubungan antara pelajar, pensyarah, dan warga institusi.

    </p>
      `,
  },

  {
    name: "Dewan Warisan",
    coords: [4.588031, 101.125199],
    desc: "Perak Jubilee Hall",
    image: "images/library.jpg",
    icon: emojiIcon("🏛️"),
    details: `
          <h2>Dewan Warisan</h2>
    <img src="Dewan Warisan1.jpeg" width="50%">
    <img src="Dewan Warisan2.jpeg" width="50%">
    <p>
      <strong>Dewan Warisan</strong> di Politeknik Ungku Omar (PUO) merupakan fasiliti serbaguna yang digunakan untuk pelbagai aktiviti rasmi, akademik, dan kokurikulum. Dewan ini menyediakan ruang yang sesuai bagi penganjuran majlis, seminar, bengkel, serta program pelajar. Direka untuk menyokong suasana pembelajaran dan pembangunan sahsiah, Dewan Warisan berfungsi sebagai pusat perhimpunan yang menggalakkan interaksi komuniti kampus serta memperkukuh hubungan antara pelajar, pensyarah, dan warga institusi.

    </p>
      `,
  },

  {
    name: "Perpustakaan PUO",
    coords: [4.587562, 101.124301],
    desc: "PUO Main Library",
    image: "images/library.jpg",
    icon: emojiIcon("📚"),
    details: `
          <h2>Perpustakaan PUO</h2>
    <img src="Perpustakaan PUO1.jpeg" width="50%">
      <img src="Perpustakaan PUO2.jpeg" width="50%">
      <img src="Perpustakaan PUO3.jpeg" width="50%">
    <p>
      <strong>Perpustakaan Politeknik Ungku Omar (PUO)</strong> merupakan pusat sumber ilmu utama yang menyediakan koleksi bahan rujukan akademik, jurnal, buku, serta sumber digital bagi menyokong proses pembelajaran dan penyelidikan pelajar serta pensyarah. Perpustakaan ini direka untuk mewujudkan suasana pembelajaran yang kondusif dengan kemudahan ruang bacaan, bilik perbincangan, dan akses teknologi maklumat. Ia berfungsi sebagai pusat ilmu yang komprehensif, menggalakkan budaya membaca, meningkatkan kemahiran penyelidikan, serta memperkukuh pembangunan akademik dan sahsiah warga kampus.

    </p>
      `,
  },

  {
    name: "Bangunan HEP",
    coords: [4.588114, 101.125714],
    desc: "PUO Main Library",
    image: "images/library.jpg",
    icon: emojiIcon("🏢"),
    details: `
          <h2>Bangunan HEP</h2>
    <img src="Bangunan HEP1.jpeg" width="50%">
    <img src="Bangunan HEP2.jpeg" width="50%">
    <p>
      <strong>Bangunan Hal Ehwal Pelajar (HEP)</strong> di Politeknik Ungku Omar (PUO) merupakan fasiliti utama yang menempatkan pejabat pengurusan pelajar serta menyediakan ruang perkhidmatan berkaitan kebajikan, disiplin, dan aktiviti kokurikulum. Bangunan ini direka khusus untuk menyokong keperluan pelajar dalam aspek pentadbiran, sokongan akademik, dan pembangunan sahsiah. Ia berfungsi sebagai pusat rujukan dan sokongan yang memastikan kebajikan pelajar terpelihara, di samping menggalakkan penglibatan aktif dalam aktiviti kampus dan memperkukuh hubungan antara pelajar dengan pihak pengurusan institusi.

    </p>
      `,
  },

  {
    name: "Unit Kaunseling",
    coords: [4.591238, 101.122649],
    desc: "PUO Main Library",
    image: "images/library.jpg",
    icon: emojiIcon("🤝"),
    details: `
          <h2>Unit Kaunseling</h2>
    <img src="Unit Kaunseling1.jpeg" width="50%">
    <p>
      <strong>Unit Kaunseling</strong> di Politeknik Ungku Omar (PUO) merupakan pusat sokongan pelajar yang menyediakan khidmat bimbingan, kaunseling, dan motivasi bagi membantu pelajar menghadapi cabaran akademik, peribadi, serta sosial. Unit ini direka khusus untuk mewujudkan suasana pembelajaran yang seimbang dengan memberi perhatian kepada kesejahteraan mental dan emosi pelajar. Ia berfungsi sebagai tempat rujukan dan sokongan, menggalakkan perkembangan sahsiah, meningkatkan keyakinan diri, serta memastikan pelajar dapat menyesuaikan diri dengan kehidupan kampus secara positif dan berkesan.

    </p>
      `,
  },
  {
    name: "Unit Zakat",
    coords: [4.591721, 101.122464],
    desc: "PUO Main Library",
    image: "/to.jpeg",
    icon: emojiIcon("💰"),
    details: `
          <h2>Unit Zakat</h2>
    <img src="to.jpeg" width="50%">
    <p>
      <strong>Unit Zakat</strong> di Politeknik Ungku Omar (PUO) merupakan pusat sokongan kebajikan yang berperanan menguruskan kutipan, pengagihan, dan bantuan zakat kepada pelajar serta warga institusi yang layak. Unit ini menyediakan ruang perkhidmatan khusus bagi memudahkan urusan zakat, selain berfungsi sebagai tempat rujukan dan bimbingan berkaitan kewangan serta kebajikan pelajar. Ia direka untuk menyokong aktiviti kebajikan, meningkatkan kesedaran sosial, dan memastikan keperluan pelajar yang memerlukan dapat dipenuhi dengan lebih sistematik dan berkesan.

    </p>
      `,
  },
  {
    name: "Tempat Parcel",
    coords: [4.59208, 101.122697],
    desc: "PUO Main Library",
    image: "/papa3.jpeg",
    icon: emojiIcon("📦"),
    details: `
          <h2>Parcel</h2>
    <img src="papa3.jpeg" width="50%">
    <p>
      <strong>Tempat Parcel</strong> di Politeknik Ungku Omar (PUO) merupakan kemudahan yang disediakan khusus untuk pelajar dan warga institusi bagi urusan penghantaran serta penerimaan bungkusan. Ruang ini direka untuk memudahkan pengurusan logistik harian, memastikan proses serahan dan pengambilan barang berjalan dengan lebih teratur dan selamat. Ia berfungsi sebagai pusat sokongan yang membantu pelajar menguruskan keperluan penghantaran, sekaligus meningkatkan keselesaan dan keberkesanan dalam kehidupan kampus.

    </p>
      `,
  },

  /*tkde gambae*/
  {
    name: "Laundry Koperasi PUO",
    coords: [4.591745, 101.121903],
    desc: "PUO Main Library",
    image: "/dob.jpeg",
    icon: emojiIcon("🎛️"),
    details: `
          <h2>Laundry Koperasi PUO</h2>
    <img src="dob.jpeg" width="80%">
    <p>
      <strong>Laundry Koperasi</strong> di Politeknik Ungku Omar (PUO) merupakan kemudahan yang disediakan bagi memudahkan pelajar dan warga institusi menguruskan cucian pakaian harian. Perkhidmatan ini direka untuk memberikan kemudahan yang praktikal, cepat, dan berpatutan, sekaligus menyokong keperluan kebersihan serta keselesaan pelajar di kampus. Laundry Koperasi berfungsi sebagai pusat sokongan kehidupan kampus, memastikan pelajar dapat menumpukan perhatian kepada pembelajaran tanpa perlu risau tentang urusan cucian.
    </p>
      `,
  },

  {
    name: "Pejabat Pentadbiran",
    coords: [4.588414, 101.125293],
    desc: "PUO Main Library",
    image: "images/library.jpg",
    icon: emojiIcon("🏢"),
    details: `
          <h2>Pejabat Pentadbiran</h2>
    <img src="Pejabat Pentadbiran1.jpeg" width="50%">
    <img src="Pejabat Pentadbiran2.jpeg" width="50%">
    <p>
      <strong>Pejabat Pentadbiran</strong> di Politeknik Ungku Omar (PUO) merupakan pusat pengurusan utama yang menempatkan urusan pentadbiran institusi, termasuk hal berkaitan akademik, kewangan, dan operasi kampus. Pejabat ini direka khusus untuk menyokong kelancaran sistem pengurusan dengan menyediakan ruang kerja bagi kakitangan serta kemudahan perkhidmatan kepada pelajar dan pensyarah. Ia berfungsi sebagai nadi pentadbiran yang memastikan segala urusan rasmi berjalan dengan teratur, efisien, dan profesional, sekaligus memperkukuh keberkesanan pengurusan institusi secara menyeluruh.

    </p>
      `,
  },

  {
    name: "Galeri PUO",
    coords: [4.587443, 101.124907],
    desc: "Gallery PUO",
    image: "images/library.jpg",
    icon: emojiIcon("🖼️"),
    details: `
          <h2>Galeri PUO</h2>
    <img src="Galeri PUO1.jpeg" width="100%">
    <p>
      <strong>Galeri Politeknik Ungku Omar (PUO)</strong> merupakan ruang pameran yang menampilkan hasil karya, projek, dan inovasi pelajar serta pensyarah dalam pelbagai bidang. Galeri ini direka untuk menyokong aktiviti akademik dan kreatif dengan menyediakan platform bagi mempamerkan pencapaian, idea baharu, serta hasil penyelidikan. Ia berfungsi sebagai pusat inspirasi dan rujukan, menggalakkan budaya kreatif, inovatif, dan kolaboratif dalam kalangan warga kampus, sekaligus memperkukuh identiti PUO sebagai institusi yang melahirkan graduan berkemahiran dan berdaya saing.

    </p>
      `,
  },

  {
    name: "Pusat Pelajar",
    coords: [4.587478, 101.125122],
    desc: "Student Centre",
    image: "images/library.jpg",
    icon: emojiIcon("👥"),
    details: `
          <h2>Student Centre</h2>
    <img src="Pusat Pelajar1.jpeg" width="50%">
    <img src="Pusat Pelajar2.jpeg" width="50%">
    <p>
      <strong>Pusat Pelajar</strong> di Politeknik Ungku Omar (PUO) merupakan fasiliti utama yang berfungsi sebagai ruang interaksi, perkhidmatan, dan aktiviti pelajar. Pusat ini menyediakan pelbagai kemudahan termasuk kaunter perkhidmatan, ruang santai, serta tempat untuk aktiviti kokurikulum dan organisasi pelajar. Direka khusus untuk menyokong kehidupan kampus, Pusat Pelajar menjadi nadi komuniti pelajar dengan menggalakkan penglibatan aktif, memperkukuh hubungan sosial, serta menyediakan sokongan kebajikan dan pembangunan sahsiah.

    </p>
      `,
  },

  /* ================= LOCATIONS CAFE AND KOPERASI================= */
  {
    name: "Kafeteria JKE",
    coords: [4.586699, 101.122741],
    desc: "Student Cafeteria",
    image: "images/kafeteria.jpg",
    icon: emojiIcon("🍽️"),
    details: `
          <h2>Kafeteria JKE</h2>
    <img src="Kafeteria JKE1.jpeg" width="50%">
    <img src="Kafeteria JKE2.jpeg" width="50%">
    <p>
      <strong>Cafeteria Jabatan Kejuruteraan Elektrik (JKE)</strong> di Politeknik Ungku Omar (PUO) merupakan kemudahan makanan dan minuman yang disediakan khusus untuk pelajar serta warga jabatan. Cafeteria ini menawarkan ruang yang selesa bagi pelajar menjamu selera, berehat, dan berinteraksi di luar waktu kuliah. Direka untuk menyokong kehidupan kampus harian, ia berfungsi sebagai pusat santai yang menyediakan pelbagai pilihan makanan dengan harga berpatutan, sekaligus meningkatkan keselesaan dan kebajikan pelajar di kawasan jabatan.

    </p>
      `,
  },

  {
    name: "Kafeteria A",
    coords: [4.587838, 101.124933],
    desc: "Student Cafeteria",
    image: "images/kafeteria.jpg",
    icon: emojiIcon("🍽️"),
    details: `
          <h2>Kafeteria A</h2>
    <img src="Kafeteria A1.jpeg" width="50%">
     <img src="Kafeteria A2.jpeg" width="50%">
    <p>
      <strong>Kafeteria A</strong> di Politeknik Ungku Omar (PUO) merupakan kemudahan makanan dan minuman yang disediakan untuk pelajar serta warga institusi. Kafeteria ini menawarkan pelbagai pilihan hidangan dengan harga berpatutan, sambil menyediakan ruang yang selesa untuk menjamu selera, berehat, dan berinteraksi. Direka untuk menyokong kehidupan kampus harian, Kafeteria A berfungsi sebagai pusat santai yang membantu memenuhi keperluan pemakanan pelajar, sekaligus meningkatkan keselesaan dan kebajikan warga kampus.



    </p>
      `,
  },

  {
    name: "Kafeteria Kamsis",
    coords: [4.590135, 101.12141],
    desc: "Student Cafeteria",
    image: "images/kafeteria.jpg",
    icon: emojiIcon("🍽️"),
    details: `
          <h2>Kafeteria Kamsis</h2>
    <img src="Kafeteria Kamsis1.jpg" width="50%">
     <img src="Kafeteria Kamsis2.jpg" width="50%">
    <p>
      <strong>Kafeteria Kamsis</strong> di Politeknik Ungku Omar (PUO) merupakan kemudahan makanan dan minuman yang disediakan khusus untuk pelajar yang tinggal di kolej kediaman (kamsis). Kafeteria ini menawarkan pelbagai pilihan hidangan dengan harga berpatutan, sambil menyediakan ruang yang selesa untuk menjamu selera, berehat, dan berinteraksi. Direka untuk menyokong kehidupan harian pelajar di kolej kediaman, Kafeteria Kamsis berfungsi sebagai pusat santai yang membantu memenuhi keperluan pemakanan serta meningkatkan keselesaan dan kebajikan pelajar sepanjang berada di kampus.

    </p>
      `,
  },

  /*Gambar tkde*/
  {
    name: "Kafeteria Kampus B",
    coords: [4.590892, 101.122618],
    desc: "Student Cafeteria",
    image: "/kan.jpeg",
    icon: emojiIcon("🍽️"),
    details: `
          <h2>Kafeteria Kampus B</h2>
    <img src="kan.jpeg" width="70%">
    <p>
      <strong>Kafeteria Kampus B</strong> di Politeknik Ungku Omar (PUO) merupakan kemudahan makanan dan minuman yang disediakan untuk pelajar serta warga institusi di kawasan Kampus B. Kafeteria ini menawarkan pelbagai pilihan hidangan dengan harga berpatutan, sambil menyediakan ruang yang selesa untuk menjamu selera, berehat, dan berinteraksi. Direka untuk menyokong kehidupan kampus harian, Kafeteria Kampus B berfungsi sebagai pusat santai yang membantu memenuhi keperluan pemakanan pelajar, sekaligus meningkatkan keselesaan dan kebajikan warga kampus.

    </p>
      `,
  },

  /*tkde Gambar*/
  {
    name: "Koperasi Kamsis",
    coords: [4.590234, 101.121538],
    desc: "Student Cafeteria",
    image: "/col.jpeg",
    icon: emojiIcon("🛒"),
    details: `
          <h2>Koperasi Kamsis</h2>
    <img src="col.jpeg" width="100%">
    <p>
      <strong>Kooperasi Kamsis</strong> di Politeknik Ungku Omar (PUO) merupakan kemudahan perkhidmatan yang disediakan khusus untuk pelajar kolej kediaman. Kooperasi ini menawarkan pelbagai barangan keperluan harian seperti makanan ringan, minuman, kelengkapan asas, serta peralatan pembelajaran dengan harga berpatutan. Direka untuk menyokong kehidupan pelajar di kolej kediaman, Kooperasi Kamsis berfungsi sebagai pusat jualan yang memudahkan akses kepada barangan penting, sekaligus meningkatkan keselesaan dan kebajikan pelajar sepanjang berada di kampus.

    </p>
      `,
  },

  /*tkde Gambar*/
  {
    name: "Koperasi A",
    coords: [4.588633, 101.123791],
    desc: "Koperasi",
    image: "/Bab1.jpeg",
    icon: emojiIcon("🛒"),
    details: `
          <h2>Koperasi A</h2>
    <img src="Bab1.jpeg" width="100%">
    <p>
      <strong>Koperasi A</strong> di Politeknik Ungku Omar (PUO) merupakan kemudahan perkhidmatan yang menyediakan pelbagai barangan keperluan harian, makanan ringan, minuman, serta peralatan pembelajaran untuk pelajar dan warga kampus. Kooperasi ini berfungsi sebagai pusat jualan yang praktikal dengan harga berpatutan, memudahkan akses kepada barangan penting tanpa perlu keluar dari kawasan kampus. Direka untuk menyokong kehidupan harian pelajar, Kooperasi A membantu meningkatkan keselesaan, kebajikan, dan kesejahteraan komuniti kampus.

    </p>
      `,
  },

  /*tkde Gambar*/
  {
    name: "Jabatan Sukan, Ko-Kurikulum dan Kebudayaan",
    coords: [4.590051, 101.122772],
    desc: "Student Cafeteria",
    image: "/mamam.jpeg",
    icon: emojiIcon("🏆"),
    details: `
          <h2>Jabatan Sukan, Ko-Kurikulum dan Kebudayaan</h2>
    <img src="mamam.jpeg" width="100%">
    <p>
      <strong>Jabatan Sukan, Ko-Kurikulum dan Kebudayaan (JSKK)</strong> di Politeknik Ungku Omar (PUO) merupakan pusat pengurusan aktiviti pelajar yang melibatkan bidang sukan, kokurikulum, dan kebudayaan. Jabatan ini menyediakan ruang serta sokongan bagi pelajar untuk mengembangkan bakat, meningkatkan disiplin, dan memperkukuh semangat berpasukan melalui pelbagai program. Direka untuk menyokong pembangunan sahsiah dan keseimbangan akademik, JSKK berfungsi sebagai nadi aktiviti kampus yang menggalakkan penglibatan aktif, memperkaya pengalaman pelajar, serta memperkukuh identiti institusi melalui kegiatan sukan dan kebudayaan.

    </p>
      `,
  },
  {
    name: "Kelab Wataniah",
    coords: [4.589471, 101.123506],
    desc: "Student Cafeteria",
    image: "/watan2.jpeg",
    icon: emojiIcon("🏆"),
    details: `
          <h2>Kelab Wataniah</h2>
    <img src="watan2.jpeg" width="100%">
    <p>
      <strong>Kelab Wataniah</strong> di Politeknik Ungku Omar (PUO) merupakan unit kokurikulum yang berperanan melatih pelajar dalam aspek ketenteraan asas, disiplin, dan kepimpinan. Kelab ini menyediakan ruang untuk pelajar mengasah semangat patriotisme, ketahanan fizikal, serta kemahiran berpasukan melalui aktiviti latihan dan program beruniform. Direka untuk menyokong pembangunan sahsiah dan jati diri, Kelab Wataniah berfungsi sebagai wadah pembentukan pelajar yang berdisiplin, berdaya tahan, serta bersedia menyumbang kepada masyarakat dan negara.

    </p>
      `,
  },

  /* ================= LOCATIONS SURAU================= */
  {
    name: "Surau Pusat Islam",
    coords: [4.588697, 101.126506],
    desc: "Prayer Room",
    image: "images/surau.jpg",
    icon: emojiIcon("🕌"),
    details: `
          <h2>Pusat Islam</h2>
    <img src="Pusat Islam1.jpeg" width="50%">
    <p>
      <strong>Surau Pusat Islam</strong> di Politeknik Ungku Omar (PUO) merupakan pusat ibadah yang disediakan bagi warga kampus untuk menunaikan solat dan aktiviti keagamaan. Surau ini dilengkapi dengan ruang solat yang selesa, kemudahan wuduk, serta ruang untuk program kerohanian dan keilmuan. Direka untuk menyokong kesejahteraan spiritual pelajar dan staf, Surau Pusat Islam berfungsi sebagai tempat rujukan dan pengisian rohani, sekaligus menggalakkan pembentukan sahsiah yang seimbang antara akademik dan nilai keagamaan.

    </p>
      `,
  },
  {
    name: "Surau Kampus B",
    coords: [4.591827, 101.122653],
    desc: "Prayer Room",
    image: "/subau2.jpeg",
    icon: emojiIcon("🕌"),
    details: `
          <h2>Surau Kampus B</h2>
    <img src="subau2.jpeg" width="50%">
    <p>
      <strong>Surau Kampus B</strong> di Politeknik Ungku Omar (PUO) merupakan pusat ibadah yang disediakan bagi warga kampus di kawasan Kampus B untuk menunaikan solat dan aktiviti keagamaan. Surau ini dilengkapi dengan ruang solat yang selesa, kemudahan wuduk, serta ruang untuk program kerohanian dan keilmuan. Direka untuk menyokong kesejahteraan spiritual pelajar dan staf, Surau Kampus B berfungsi sebagai tempat rujukan dan pengisian rohani, sekaligus menggalakkan pembentukan sahsiah yang seimbang antara akademik dan nilai keagamaan.

    </p>
      `,
  },

  {
    name: "Surau Wakaf",
    coords: [4.588599, 101.121673],
    desc: "Prayer Room",
    image: "images/surau.jpg",
    icon: emojiIcon("🕌"),
    details: `
          <h2>Surau Wakaf</h2>
    <img src="Surau Wakaf1.jpeg" width="50%">
     <img src="Surau Wakaf2.jpeg" width="50%">
    <p>
      <strong>Surau Wakaf</strong> di Politeknik Ungku Omar (PUO) merupakan pusat ibadah yang disediakan hasil sumbangan wakaf bagi kegunaan warga kampus. Surau ini dilengkapi dengan ruang solat yang selesa, kemudahan wuduk, serta ruang untuk aktiviti keagamaan dan kerohanian. Direka untuk menyokong kesejahteraan spiritual pelajar dan staf, Surau Wakaf berfungsi sebagai tempat pengisian rohani, menggalakkan amalan beragama, serta membentuk sahsiah pelajar yang seimbang antara akademik dan nilai keagamaan.
    </p>
      `,
  },

  /* ================= WORKSHOP================= */
  /*Tkde Gambar*/
  {
    name: "Bengkel Mekanikal",
    coords: [4.588045, 101.123856],
    desc: "Prayer Room",
    image: "images/surau.jpg",
    icon: emojiIcon("🛠️"),
    details: `
          <h2>Bengkel Mekanikal</h2>
    <img src="images/jtmk.jpg" width="100%">
    <p>
      <strong>Bengkel Mekanikal</strong> di Politeknik Ungku Omar (PUO) merupakan fasiliti pengajaran dan pembelajaran yang dilengkapi dengan peralatan serta mesin berkaitan bidang kejuruteraan mekanikal. Bengkel ini menyediakan ruang praktikal bagi pelajar menjalankan latihan amali, eksperimen, dan projek teknikal yang melibatkan kerja-kerja fabrikasi, penyelenggaraan, serta pengujian. Direka untuk menyokong pembangunan kemahiran teknikal, Bengkel Mekanikal berfungsi sebagai pusat latihan yang membentuk pelajar berkemahiran tinggi, berdaya saing, dan bersedia menghadapi cabaran industri.
    </p>
      `,
  },

  /*Tkde Gambar*/
  {
    name: "Bengkel Automotif",
    coords: [4.588587, 101.123223],
    desc: "Prayer Room",
    image: "/bob4.jpeg",
    icon: emojiIcon("🛠️"),
    details: `
          <h2>Bengkel Automotif</h2>
    <img src="bob4.jpeg" width="100%">
    <p>
      <strong>Bengkel Automotif</strong> di Politeknik Ungku Omar (PUO) merupakan fasiliti pengajaran dan pembelajaran yang dilengkapi dengan peralatan serta teknologi berkaitan bidang automotif. Bengkel ini menyediakan ruang praktikal bagi pelajar menjalankan latihan amali, penyelenggaraan kenderaan, diagnostik enjin, serta projek teknikal yang berkaitan dengan sistem automotif moden. Direka untuk menyokong pembangunan kemahiran teknikal, Bengkel Automotif berfungsi sebagai pusat latihan yang membentuk pelajar berkemahiran tinggi, berdaya saing, dan bersedia menghadapi cabaran industri automotif.

    </p>
      `,
  },

  /*Tkde Gambar*/
  {
    name: "Bengkel Kenegaraan Malaysia (AKM)",
    coords: [4.588329, 101.122413],
    desc: "Prayer Room",
    image: "/bob4.jpeg",
    icon: emojiIcon("🛠️"),
    details: `
          <h2>Bengkel Kenegaraan Malaysia (AKM)</h2>
    <img src="bob4.jpeg" width="100%">
    <p>
      <strong>Bengkel Kenegaraan Malaysia (AKM)</strong> di Politeknik Ungku Omar (PUO) merupakan ruang pembelajaran dan latihan yang berfokus kepada penghayatan nilai kenegaraan, patriotisme, serta jati diri pelajar. Bengkel ini menyediakan platform untuk aktiviti akademik dan kokurikulum yang berkaitan dengan sejarah, budaya, dan identiti negara. Direka untuk menyokong pembangunan sahsiah dan semangat kebangsaan, Bengkel AKM berfungsi sebagai pusat pengisian ilmu dan latihan yang membentuk pelajar berdisiplin, berwawasan, serta bersedia menyumbang kepada pembangunan masyarakat dan negara.



    </p>
      `,
  },

  {
    name: "Bengkel Senibina",
    coords: [4.591751, 101.12244],
    desc: "Prayer Room",
    image: "images/surau.jpg",
    icon: emojiIcon("🛠️"),
    details: `
          <h2>Bengkel Senibina</h2>
    <img src="Bengkel Seni Bina.jpeg" width="100%">
    <p>
      <strong>Bengkel Senibina</strong> di Politeknik Ungku Omar (PUO) merupakan fasiliti pengajaran dan pembelajaran yang dilengkapi dengan peralatan serta ruang kerja khusus bagi bidang senibina. Bengkel ini menyediakan platform praktikal untuk pelajar menjalankan latihan amali, projek reka bentuk, serta penghasilan model dan lukisan teknikal. Direka untuk menyokong pembangunan kemahiran kreatif dan teknikal, Bengkel Senibina berfungsi sebagai pusat latihan yang membentuk pelajar berdaya cipta, berdisiplin, serta bersedia menghadapi cabaran dalam industri senibina dan rekabentuk.

    </p>
      `,
  },

  /* ================= KAMSIS================= */
  /* ================= KAMSIS LELAKI================= */
  /*Tkde Gambar*/
  {
    name: "Kamsis Mutiara PUO",
    coords: [4.59021, 101.121042],
    desc: "Prayer Room",
    image: "/mut.jpeg",
    icon: emojiIcon("🛌"),
    details: `
          <h2>Kamsis Mutiara PUO</h2>
    <img src="mut.jpeg" width="40%">
    <p>
      <strong>Kamsis Mutiara</strong> di Politeknik Ungku Omar (PUO) merupakan kolej kediaman yang disediakan khusus untuk pelajar bagi memastikan keselesaan sepanjang tempoh pengajian. Kamsis ini dilengkapi dengan bilik penginapan, kemudahan asas, serta ruang sosial yang membolehkan pelajar berinteraksi dan menjalani kehidupan kampus dengan lebih teratur. Direka untuk menyokong kebajikan pelajar, Kamsis Mutiara berfungsi sebagai pusat kediaman yang menyediakan suasana kondusif, selamat, dan mesra komuniti, sekaligus membantu membentuk pengalaman pembelajaran yang seimbang antara akademik dan kehidupan harian.

    </p>
      `,
  },

  /*Tkde Gambar*/
  {
    name: "Kamsis Emas PUO",
    coords: [4.590577, 101.121339],
    desc: "Prayer Room",
    image: "/masa.jpeg",
    icon: emojiIcon("🛌"),
    details: `
          <h2>Kamsis Emas PUO</h2>
    <img src="masa.jpeg" width="40%">
    <p>
      <strong>Kamsis Emas</strong> di Politeknik Ungku Omar (PUO) merupakan kolej kediaman yang disediakan bagi pelajar untuk memastikan keselesaan sepanjang tempoh pengajian. Kamsis ini dilengkapi dengan bilik penginapan, kemudahan asas, serta ruang sosial yang membolehkan pelajar berinteraksi dan menjalani kehidupan kampus dengan lebih teratur. Direka untuk menyokong kebajikan pelajar, Kamsis Emas berfungsi sebagai pusat kediaman yang menyediakan suasana kondusif, selamat, dan mesra komuniti, sekaligus membantu membentuk pengalaman pembelajaran yang seimbang antara akademik dan kehidupan harian.

    </p>
      `,
  },

  /*Tkde Gambar*/
  {
    name: "Kamsis Berlian PUO",
    coords: [4.590954, 101.121626],
    desc: "Prayer Room",
    image: "/ber.jpeg",
    icon: emojiIcon("🛌"),
    details: `
          <h2>Kamsis Berlian PUO</h2>
    <img src="ber.jpeg" width="40%">
    <p>
      <strong>Kamsis Berlian</strong> di Politeknik Ungku Omar (PUO) merupakan kolej kediaman yang disediakan bagi pelajar untuk memastikan keselesaan sepanjang tempoh pengajian. Kamsis ini dilengkapi dengan bilik penginapan, kemudahan asas, serta ruang sosial yang membolehkan pelajar berinteraksi dan menjalani kehidupan kampus dengan lebih teratur. Direka untuk menyokong kebajikan pelajar, Kamsis Berlian berfungsi sebagai pusat kediaman yang menyediakan suasana kondusif, selamat, dan mesra komuniti, sekaligus membantu membentuk pengalaman pembelajaran yang seimbang antara akademik dan kehidupan harian.

    </p>
      `,
  },

  /* ================= KAMSIS PEREMPUAN================= */

  /*Tkde Gambar*/
  {
    name: "Kamsis Delima PUO",
    coords: [4.589299, 101.121372],
    desc: "Prayer Room",
    image: "/del.jpeg",
    icon: emojiIcon("🛌"),
    details: `
          <h2>Kamsis Delima PUO</h2>
    <img src="del.jpeg" width="40%">
    <p>
      <strong>Kamsis Delima</strong> di Politeknik Ungku Omar (PUO) merupakan kolej kediaman yang disediakan bagi pelajar untuk memastikan keselesaan sepanjang tempoh pengajian. Kamsis ini dilengkapi dengan bilik penginapan, kemudahan asas, serta ruang sosial yang membolehkan pelajar berinteraksi dan menjalani kehidupan kampus dengan lebih teratur. Direka untuk menyokong kebajikan pelajar, Kamsis Delima berfungsi sebagai pusat kediaman yang menyediakan suasana kondusif, selamat, dan mesra komuniti, sekaligus membantu membentuk pengalaman pembelajaran yang seimbang antara akademik dan kehidupan harian.

    </p>
      `,
  },

  /*Tkde Gambar*/
  {
    name: "Kamsis Zamrud PUO",
    coords: [4.589665, 101.121074],
    desc: "Prayer Room",
    image: "/zam.jpeg",
    icon: emojiIcon("🛌"),
    details: `
          <h2>Kamsis Zamrud PUO</h2>
    <img src="zam.jpeg" width="40%">
    <p>
     <strong> Kamsis Zamrud</strong> di Politeknik Ungku Omar (PUO) merupakan kolej kediaman yang disediakan bagi pelajar untuk memastikan keselesaan sepanjang tempoh pengajian. Kamsis ini dilengkapi dengan bilik penginapan, kemudahan asas, serta ruang sosial yang membolehkan pelajar berinteraksi dan menjalani kehidupan kampus dengan lebih teratur. Direka untuk menyokong kebajikan pelajar, Kamsis Zamrud berfungsi sebagai pusat kediaman yang menyediakan suasana kondusif, selamat, dan mesra komuniti, sekaligus membantu membentuk pengalaman pembelajaran yang seimbang antara akademik dan kehidupan harian.

    </p>
      `,
  },

  /* ================= FIELDS ================= */
  {
    name: "Futsal Kampus A",
    coords: [4.588506, 101.124237],
    desc: "Prayer Room",
    image: "images/surau.jpg",
    icon: emojiIcon("⚽"),
    details: `
          <h2>Futsal Kampus A</h2>
    <img src="Futsal Kampus A1.jpeg" width="50%">
     <img src="Futsal Kampus A2.jpeg" width="50%">
    <p>
      <strong>Futsal Kampus A</strong> di Politeknik Ungku Omar (PUO) merupakan kemudahan sukan yang disediakan khusus untuk aktiviti riadah dan latihan pelajar. Gelanggang ini digunakan bagi perlawanan futsal, sesi latihan, serta program sukan yang dianjurkan oleh pihak kampus. Direka untuk menyokong gaya hidup sihat dan semangat berpasukan, Futsal Kampus A berfungsi sebagai pusat aktiviti fizikal yang menggalakkan interaksi sosial, meningkatkan kecergasan, serta memperkukuh budaya sukan dalam kalangan warga kampus.

    </p>
      `,
  },

  /*Tkde Gambar*/
  {
    name: "Gelanggang Bola Jaring",
    coords: [4.590333, 101.122413],
    desc: "Prayer Room",
    image: "/mana3.jpeg",
    icon: emojiIcon("🏀"),
    details: `
          <h2>Gelanggang Bola Jaring</h2>
    <img src="mana3.jpeg" width="80%">
    <p>
     <strong>Gelanggang Bola Jaring</strong> di Politeknik Ungku Omar (PUO) merupakan kemudahan sukan yang disediakan bagi pelajar untuk menjalankan aktiviti riadah, latihan, dan pertandingan bola jaring. Gelanggang ini digunakan untuk sesi kokurikulum, program sukan kampus, serta aktiviti rekreasi yang menggalakkan semangat berpasukan dan gaya hidup sihat. Direka untuk menyokong pembangunan fizikal dan sosial, Gelanggang Bola Jaring berfungsi sebagai pusat aktiviti yang memperkukuh budaya sukan, meningkatkan kecergasan, serta menggalakkan interaksi positif dalam kalangan warga kampus.

    </p>
      `,
  },

  {
    name: "Gelanggang Bola Tampar",
    coords: [4.591366, 101.122777],
    desc: "Prayer Room",
    image: "/tus.jpeg",
    icon: emojiIcon("🏐"),
    details: `
          <h2>Gelanggang Bola Tampar</h2>
    <img src="tus.jpeg" width="40%">
    <p>
      <strong>Gelanggang Bola Tampar</strong> di Politeknik Ungku Omar (PUO) merupakan kemudahan sukan yang disediakan bagi pelajar untuk menjalankan aktiviti riadah, latihan, dan pertandingan bola tampar. Gelanggang ini digunakan untuk sesi kokurikulum, program sukan kampus, serta aktiviti rekreasi yang menggalakkan semangat berpasukan dan gaya hidup sihat. Direka untuk menyokong pembangunan fizikal dan sosial, Gelanggang Bola Tampar berfungsi sebagai pusat aktiviti yang memperkukuh budaya sukan, meningkatkan kecergasan, serta menggalakkan interaksi positif dalam kalangan warga kampus.

    </p>
      `,
  },

  {
    name: "Padang Hoki",
    coords: [4.591574, 101.122547],
    desc: "Prayer Room",
    image: "/qi2.jpeg",
    icon: emojiIcon("🏑"),
    details: `
          <h2>Padang Hoki</h2>
    <img src="qi2.jpeg" width="50%">
    <p>
    <strong>  Padang Hoki</strong> di Politeknik Ungku Omar (PUO) merupakan kemudahan sukan yang disediakan bagi pelajar untuk menjalankan aktiviti riadah, latihan, dan pertandingan hoki. Padang ini digunakan untuk sesi kokurikulum, program sukan kampus, serta aktiviti rekreasi yang menggalakkan semangat berpasukan dan gaya hidup sihat. Direka untuk menyokong pembangunan fizikal dan sosial, Padang Hoki berfungsi sebagai pusat aktiviti yang memperkukuh budaya sukan, meningkatkan kecergasan, serta menggalakkan interaksi positif dalam kalangan warga kampus.

    </p>
      `,
  },

  {
    name: "Taman Permainan PUO",
    coords: [4.587756, 101.12236],
    desc: "Prayer Room",
    image: "/pup.jpeg",
    icon: emojiIcon("🛝"),
    details: `
          <h2>Taman Permainan PUO</h2>
    <img src="pup.jpeg" width="80%">
    <p>
     <strong>Taman Permainan PUO</strong> di Politeknik Ungku Omar (PUO) merupakan kemudahan riadah yang disediakan bagi pelajar untuk memastikan keseimbangan antara akademik dan aktiviti santai. Taman ini dilengkapi dengan kemudahan permainan, ruang rekreasi, serta kawasan interaksi sosial yang membolehkan pelajar beriadah dan mengeratkan hubungan komuniti kampus. Direka untuk menyokong kesejahteraan pelajar, Taman Permainan PUO berfungsi sebagai pusat riadah yang menyediakan suasana kondusif, selamat, dan mesra komuniti, sekaligus membantu membentuk pengalaman pembelajaran yang lebih seimbang antara pengajian dan kehidupan harian.

    </p>
      `,
  },
  {
    name: "Gelanggang Bola Keranjang",
    coords: [4.591654, 101.122917],
    desc: "Prayer Room",
    image: "/ka.jpeg",
    icon: emojiIcon("🏀"),
    details: `
          <h2>Gelanggang Bola Keranjang</h2>
    <img src="ka.jpeg" width="40%">
    <p>
      <strong>Gelanggang Bola Keranjang</strong> di Politeknik Ungku Omar (PUO) merupakan kemudahan sukan yang disediakan bagi pelajar untuk menjalankan aktiviti riadah, latihan, dan pertandingan bola keranjang. Gelanggang ini digunakan untuk sesi kokurikulum, program sukan kampus, serta aktiviti rekreasi yang menggalakkan semangat berpasukan dan gaya hidup sihat. Direka untuk menyokong pembangunan fizikal dan sosial, Gelanggang Bola Keranjang berfungsi sebagai pusat aktiviti yang memperkukuh budaya sukan, meningkatkan kecergasan, serta menggalakkan interaksi positif dalam kalangan warga kampus.

    </p>
      `,
  },

  /*Gambar Takde*/
  {
    name: "Futsal Kamsis",
    coords: [4.590061, 101.120589],
    desc: "Prayer Room",
    image: "/pala.jpeg",
    icon: emojiIcon("⚽"),
    details: `
          <h2>Futsal Kamsis</h2>
    <img src="pala.jpeg" width="80%">
    <p>
      <strong>Futsal Kamsis</strong> di Politeknik Ungku Omar (PUO) merupakan kemudahan sukan yang disediakan berhampiran kawasan kolej kediaman bagi memudahkan pelajar menjalankan aktiviti riadah dan latihan. Gelanggang ini digunakan untuk perlawanan futsal, sesi kokurikulum, serta program sukan yang dianjurkan oleh pihak kampus. Direka untuk menyokong gaya hidup sihat dan semangat berpasukan, Futsal Kamsis berfungsi sebagai pusat aktiviti fizikal yang menggalakkan interaksi sosial, meningkatkan kecergasan, serta memperkukuh budaya sukan dalam kalangan warga kampus.

    </p>
      `,
  },

  {
    name: "Padang Kampus A",
    coords: [4.589425, 101.122842],
    desc: "Prayer Room",
    image: "images/surau.jpg",
    icon: emojiIcon("⛳"),
    details: `
          <h2>Padang Kampus A</h2>
    <img src="Padang Kampus A.jpeg" width="50%">
    <p>
     <strong> Padang Kampus A</strong> di Politeknik Ungku Omar (PUO) merupakan kemudahan sukan dan rekreasi yang disediakan bagi pelajar untuk menjalankan aktiviti riadah, latihan, serta pertandingan pelbagai jenis sukan padang. Kawasan ini digunakan untuk program kokurikulum, acara kampus, serta aktiviti santai yang menggalakkan gaya hidup sihat dan semangat berpasukan. Direka untuk menyokong pembangunan fizikal dan sosial, Padang Kampus A berfungsi sebagai pusat aktiviti yang memperkukuh budaya sukan, meningkatkan kecergasan, serta menggalakkan interaksi positif dalam kalangan warga kampus.

    </p>
      `,
  },

  /*Tkde Gambar*/
  {
    name: "Padang Kampus B",
    coords: [4.590654, 101.123866],
    desc: "Prayer Room",
    image: "/pad3.jpeg",
    icon: emojiIcon("⛳"),
    details: `
          <h2>Padang Kampus B</h2>
    <img src="pad3.jpeg" width="80%">
    <p>
      <strong>Padang Kampus B</strong> di Politeknik Ungku Omar (PUO) merupakan kemudahan sukan dan rekreasi yang disediakan bagi pelajar untuk menjalankan aktiviti riadah, latihan, serta pertandingan pelbagai jenis sukan padang. Kawasan ini digunakan untuk program kokurikulum, acara kampus, serta aktiviti santai yang menggalakkan gaya hidup sihat dan semangat berpasukan. Direka untuk menyokong pembangunan fizikal dan sosial, Padang Kampus B berfungsi sebagai pusat aktiviti yang memperkukuh budaya sukan, meningkatkan kecergasan, serta menggalakkan interaksi positif dalam kalangan warga kampus

    </p>
      `,
  },

  /* ================= BANGUNAN ================= */

  {
    name: "Bangunan Seni Bina",
    coords: [4.590992, 101.122477],
    desc: "Department of Civil Engineering ",
    image: "/bina.jpeg",
    icon: emojiIcon("🏢"),
    details: `
          <h2>Bangunan Seni Bina</h2>
    <img src="bina.jpeg" width="70%">
    <p>
     <strong>Bangunan Seni Bina</strong> di Politeknik Ungku Omar (PUO) merupakan fasiliti utama yang menempatkan Jabatan Seni Bina dan menyediakan ruang pembelajaran serta studio reka bentuk untuk pelajar. Bangunan ini direka khusus untuk menyokong aktiviti akademik, kreatif, dan praktikal dalam bidang seni bina dan reka bentuk dalaman.
    </p>
      `,
  },

  /* ================= OKU ================= */
  {
    name: "Tempat Parking OKU",
    coords: [4.588684, 101.125639],
    desc: "Parking Untuk OKU",
    image: "/haloo.jpeg",
    icon: emojiIcon("♿"),
    details: `
          <h2>OKU PARKING</h2>
    <img src="haloo.jpeg" width="50%">
    <p>
     <strong>Tempat letak kereta ini dikhaskan untuk Orang Kurang Upaya (OKU).</strong> Sila hormati dan utamakan pengguna yang memerlukan.
      `,
  },
  {
    name: "Tempat Parking OKU DEWAN SERI KINTA",
    coords: [4.590856, 101.123355],
    desc: "Parking Untuk OKU",
    image: "/wooo.jpeg",
    icon: emojiIcon("♿"),
    details: `
          <h2>OKU PARKING DEWAN SERI KINTA</h2>
    <img src="wooo.jpeg" width="100%">
    <p>
     <strong>Tempat letak kereta ini dikhaskan untuk Orang Kurang Upaya (OKU).</strong> Sila hormati dan utamakan pengguna yang memerlukan.
    </p>
      `,
  },
  {
    name: "Tempat Parking OKU JP",
    coords: [4.592003, 101.122783],
    desc: "Parking Untuk OKU",
    image: "/kb2.jpeg",
    icon: emojiIcon("♿"),
    details: `
          <h2>OKU PARKING JP</h2>
    <img src="kb2.jpeg" width="100%">
    <p>
     <strong>Tempat letak kereta ini dikhaskan untuk Orang Kurang Upaya (OKU).</strong> Sila hormati dan utamakan pengguna yang memerlukan.
    </p>
      `,
  },
  {
    name: "Tempat Parking OKU CAFE KAMSIS",
    coords: [4.590369, 101.121494],
    desc: "Parking Untuk OKU",
    image: "/kt2.jpeg",
    icon: emojiIcon("♿"),
    details: `
          <h2>OKU PARKING CAFE KAMSIS</h2>
    <img src="kt2.jpeg" width="100%">
    <p>
     <strong>Tempat letak kereta ini dikhaskan untuk Orang Kurang Upaya (OKU).</strong> Sila hormati dan utamakan pengguna yang memerlukan.
      `,
  },
  {
    name: "Tempat Parking OKU CAFE KAMSIS",
    coords: [4.590445, 101.121566],
    desc: "Parking Untuk OKU",
    image: "/kt2.jpeg",
    icon: emojiIcon("♿"),
    details: `
          <h2>OKU PARKING CAFE KAMSIS</h2>
    <img src="kt2.jpeg" width="100%">
    <p>
    <strong> Tempat letak kereta ini dikhaskan untuk Orang Kurang Upaya (OKU).</strong> Sila hormati dan utamakan pengguna yang memerlukan.
    </p>
      `,
  },
  {
    name: "Tempat Parking OKU JTMK",
    coords: [4.587247, 101.122241],
    desc: "Parking Untuk OKU",
    image: "/jtmk10.jpeg",
    icon: emojiIcon("♿"),
    details: `
          <h2>OKU PARKING JTMK</h2>
    <img src="jtmk10.jpeg" width="100%">
    <p>
     <strong>Tempat letak kereta ini dikhaskan untuk Orang Kurang Upaya (OKU).</strong> Sila hormati dan utamakan pengguna yang memerlukan.
      `,
  },
  {
    name: "Tempat Parking OKU JKE",
    coords: [4.58659, 101.122288],
    desc: "Parking Untuk OKU",
    image: "/jke10.jpeg",
    icon: emojiIcon("♿"),
    details: `
          <h2>OKU PARKING JKE</h2>
    <img src="jke10.jpeg" width="100%">
    <p>
    <strong> Tempat letak kereta ini dikhaskan untuk Orang Kurang Upaya (OKU).</strong> Sila hormati dan utamakan pengguna yang memerlukan.
    </p>
      `,
  },
  {
    name: "Tempat Parking OKU LIBRARY",
    coords: [4.587786, 101.124495],
    desc: "Parking Untuk OKU",
    image: "/library4.jpeg",
    icon: emojiIcon("♿"),
    details: `
          <h2>OKU PARKING LIBRARY</h2>
    <img src="library4.jpeg" width="100%">
    <p>
    <strong> Tempat letak kereta ini dikhaskan untuk Orang Kurang Upaya (OKU).</strong> Sila hormati dan utamakan pengguna yang memerlukan.
    </p>
      `,
  },
  {
    name: "Tempat Parking OKU DATARAN PRIMER",
    coords: [4.588017, 101.125078],
    desc: "Parking Untuk OKU",
    image: "/anjungprimer1.jpeg",
    icon: emojiIcon("♿"),
    details: `
          <h2>OKU PARKING DATARAN PRIMER</h2>
    <img src="anjungprimer1.jpeg" width="100%">
    <p>
     <strong>Bangunan Seni Bina</strong> di Politeknik Ungku Omar (PUO) merupakan fasiliti utama yang menempatkan Jabatan Seni Bina dan menyediakan ruang pembelajaran serta studio reka bentuk untuk pelajar. Bangunan ini direka khusus untuk menyokong aktiviti akademik, kreatif, dan praktikal dalam bidang seni bina dan reka bentuk dalaman.
    </p>
      `,
  },
  {
    name: "Tempat Parking OKU ANJUNG PRIMER",
    coords: [4.588975, 101.125905],
    desc: "Parking Untuk OKU",
    image: "/anjungprimer2.jpg",
    icon: emojiIcon("♿"),
    details: `
          <h2>OKU PARKING ANJUNG PRIMER</h2>
    <img src="anjungprimer2.jpeg" width="100%">
    <p>
     <strong>Tempat letak kereta ini dikhaskan untuk Orang Kurang Upaya (OKU).</strong> Sila hormati dan utamakan pengguna yang memerlukan.
    </p>
      `,
  },
  {
    name: "Tempat Parking OKU JHEP",
    coords: [4.588057, 101.125459],
    desc: "Parking Untuk OKU",
    image: "/jhep1.jpg",
    icon: emojiIcon("♿"),
    details: `
          <h2>OKU PARKING</h2>
    <img src="jhep1.jpeg" width="100%">
    <p>
    <strong> Tempat letak kereta ini dikhaskan untuk Orang Kurang Upaya (OKU).</strong> Sila hormati dan utamakan pengguna yang memerlukan.
      `,
  },
  {
    name: "Tempat Parking OKU JKP",
    coords: [4.58708, 101.12285],
    desc: "Parking Untuk OKU",
    image: "/JKP3.jpeg",
    icon: emojiIcon("♿"),
    details: `
          <h2>OKU PARKING</h2>
    <img src="JKP3.jpeg" width="100%">
    <p>
     <strong>Tempat letak kereta ini dikhaskan untuk Orang Kurang Upaya (OKU).</strong> Sila hormati dan utamakan pengguna yang memerlukan.
      `,
  },
];

/* ================= GLOBAL ================= */
var userLocation = null;
var routingControl = null;

/* ================= MARKERS + DROPDOWN ================= */
var destinationSelect = document.getElementById("destination");

locations.forEach((loc, index) => {
  // marker (aku ubah belah sini
  L.marker(loc.coords, { icon: loc.icon }).addTo(map).bindPopup(`
    <strong>${loc.name}</strong><br>
    <a href="#" onclick="openDetails(${index})">
      View details 
    </a>
  `);

  // dropdown
  var option = document.createElement("option");
  option.value = index;
  option.textContent = loc.name;
  destinationSelect.appendChild(option);
});

/* ================= SEARCH ================= */
// Initialize search suggestions container
var suggestions = document.createElement("div");
suggestions.id = "suggestions";
suggestions.style.cssText =
  "position:absolute; background:white; border-radius:12px; border:1px solid #eee; width:calc(100% - 20px); max-height:200px; overflow-y:auto; box-shadow:0 10px 30px rgba(0,0,0,0.15); z-index:1001; display:none;";
document.getElementById("searchBox").parentElement.appendChild(suggestions);

// Event listener for input
document.getElementById("searchBox").addEventListener("input", function () {
  var keyword = this.value.toLowerCase();

  if (keyword.length < 2) {
    suggestions.style.display = "none";
    suggestions.innerHTML = "";
    return;
  }

  suggestions.innerHTML = "";
  var matchedLocations = locations.filter((loc) =>
    loc.name.toLowerCase().includes(keyword),
  );

  if (matchedLocations.length === 0) {
    suggestions.style.display = "none";
    return;
  }

  matchedLocations.forEach((loc) => {
    var index = locations.indexOf(loc);
    var div = document.createElement("div");
    div.className = "suggestion-item";
    div.style.cssText =
      "padding:10px; cursor:pointer; border-bottom:1px solid #f0f0f0;";
    div.textContent = loc.name;

    div.onclick = function () {
      document.getElementById("searchBox").value = loc.name;
      suggestions.style.display = "none";
      map.setView(loc.coords, 18);
      openDetails(index);
    };

    suggestions.appendChild(div);
  });

  suggestions.style.display = "block";
});

// Event listener for Enter key
document.getElementById("searchBox").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    performSearch();
  }
});

// Search button click handler
function searchLocation() {
  performSearch();
}

// Main search function
function performSearch() {
  var searchBox = document.getElementById("searchBox");
  var keyword = searchBox.value.toLowerCase().trim();

  if (keyword === "") {
    alert("Sila masukkan nama lokasi untuk dicari!");
    return;
  }

  // Search in locations array
  var matchedLocation = locations.find((loc) =>
    loc.name.toLowerCase().includes(keyword),
  );

  if (matchedLocation) {
    var index = locations.indexOf(matchedLocation);
    map.setView(matchedLocation.coords, 18);
    suggestions.style.display = "none";
    openDetails(index);
  } else {
    alert("Lokasi '" + searchBox.value + "' tidak dijumpai! Sila cuba lagi.");
  }
}

/* ================= OPEN DETAIL ================= */
function openDetails(index) {
  document.getElementById("detailContent").innerHTML = locations[index].details;
  document.getElementById("detailModal").style.display = "block";
}

function closeDetails() {
  document.getElementById("detailModal").style.display = "none";
}

/* ================= MY LOCATION ================= */
function getMyLocation() {
  navigator.geolocation.getCurrentPosition(
    function (pos) {
      userLocation = [pos.coords.latitude, pos.coords.longitude];

      L.circleMarker(userLocation, {
        radius: 8,
        color: "blue",
        fillColor: "cyan",
        fillOpacity: 1,
      })
        .addTo(map)
        .bindPopup("📍 You are here")
        .openPopup();

      map.setView(userLocation, 19);
    },
    function (error) {
      let message = "Location permission denied";
      if (error.code === error.TIMEOUT) {
        message = "Location request timed out. Please try again.";
      } else if (error.code === error.POSITION_UNAVAILABLE) {
        message = "Location information is unavailable.";
      } else if (error.code === error.PERMISSION_DENIED) {
        message = "Location permission denied.";
      }
      +alert(message);
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 60000 },
  );
}

/* ================= DIRECTION ================= */
function startDirection() {
  if (!userLocation) {
    alert("Click My Location first");
    return;
  }

  var index = document.getElementById("destination").value;
  if (index === "") {
    alert("Select destination");
    return;
  }

  if (routingControl) {
    map.removeControl(routingControl);
  }

  routingControl = L.Routing.control({
    waypoints: [L.latLng(userLocation), L.latLng(locations[index].coords)],
    routeWhileDragging: false,
    show: false,

    // 🔥 BUANG PIN BIRU
    createMarker: function () {
      return null;
    },
  }).addTo(map);
}
