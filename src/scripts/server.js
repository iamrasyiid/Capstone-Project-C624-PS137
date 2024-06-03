const express = require("express");
const cors = require("cors"); 
const app = express();
const port = 3000;

// Mengaktifkan CORS untuk semua rute
app.use(cors());

// Middleware untuk parsing JSON
app.use(express.json());

// Data destinasi wisata
const destinations = [
  {
    "id": "1",
    "title": "Danau Toba",
    "region": "IB",
    "provinsi": "Provinsi Sumatera Utara",
    "hero_img": "https://authentic-indonesia.com/wp-content/uploads/2018/05/lake-toba-2.jpg",
    "desc_title": "Danau Toba adalah salah satu destinasi wisata utama di Indonesia. Wisatawan datang untuk menikmati pemandangan alam yang menakjubkan, air danau yang jernih, danau, serta keindahan Pulau Samosir. Berbagai aktivitas wisata dapat dinikmati di sini, termasuk berenang, berlayar, hiking, dan mengunjungi situs-situs budaya serta pemandian air panas. Di Pulau Samosir, wisatawan dapat menemukan banyak objek wisata budaya, seperti makam raja-raja Batak, desa-desa tradisional, dan museum. Penduduk di sekitar Danau Toba sebagian besar bekerja di sektor pertanian, perikanan, dan pariwisata. Pertanian di sekitar danau meliputi padi, jagung, dan kopi, sementara perikanan mencakup budidaya ikan. Industri pariwisata juga memberikan kontribusi signifikan terhadap perekonomian lokal, dengan pengembangan fasilitas pariwisata seperti hotel, restoran, dan sarana transportasi.",
    "img_content": "https://i.pinimg.com/564x/45/0b/47/450b47fd7976e607c23af044aad376b2.jpg",
    "img_title": "Pulau Samosir",
    "desc_img": "Pulau Samosir adalah sebuah pulau vulkanik yang mempesona, terletak di tengah Danau Toba di provinsi Sumatera Utara, Indonesia. Dengan luas sekitar 630 kilometer persegi, pulau ini hampir setara dengan negara Singapura dan menjadi pusat budaya Batak Toba, salah satu sub-etnis Batak yang mendiami kawasan tersebut. Pulau Samosir dikenal dengan keindahan alamnya yang luar biasa dan kekayaan budayanya yang kaya. Pemandangan di sekitar pulau dihiasi oleh perbukitan hijau, pantai berpasir putih, dan perairan danau yang jernih. Desa-desa di pulau ini menampilkan arsitektur tradisional rumah adat Batak, yang dikenal sebagai Rumah Bolon, dengan atap melengkung tinggi yang dihiasi ukiran kayu yang rumit.",
    "video": "ojw2VEkh42E?si=wV05jp2eX8RDYyRf",
    "desc_video": "Danau Toba juga menghadapi berbagai tantangan lingkungan, seperti pencemaran air dari aktivitas domestik dan industri, serta deforestasi di sekitar danau. Upaya konservasi dan rehabilitasi lingkungan terus dilakukan oleh pemerintah dan berbagai organisasi untuk menjaga kelestarian ekosistem Danau Toba. Secara keseluruhan, Danau Toba adalah sebuah keajaiban alam yang menawarkan kombinasi antara keindahan alam, kekayaan budaya, dan sejarah geologis yang penting. Danau ini tidak hanya merupakan pusat wisata yang menarik, tetapi juga memiliki peran penting dalam kehidupan ekonomi dan budaya masyarakat setempat.",
    "map": "!1m18!1m12!1m3!1d510166.39721569116!2d98.50628915478553!3d2.6114039536177973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031de07a843b6ad%3A0xc018edffa69c0d05!2sDanau%20Toba!5e0!3m2!1sid!2sid!4v1717235643293!5m2!1sid!2sid"
  },
  {
    "id": "2",
    "title": "Pulau We",
    "region": "IB",
    "provinsi": "Provinsi Aceh",
    "hero_img": "https://i.pinimg.com/564x/a6/65/1f/a6651fd8ae8289e269639d4e160bf743.jpg",
    "desc_title": "Pulau Weh adalah sebuah pulau vulkanik yang terletak di ujung utara Sumatra, Indonesia, di Provinsi Aceh. Pulau ini dikenal dengan keindahan alamnya yang memukau, kehidupan laut yang beragam, dan ekosistemnya yang unik. Pulau Weh merupakan destinasi populer bagi para wisatawan yang tertarik dengan aktivitas menyelam dan snorkeling, berkat terumbu karangnya yang kaya dan visibilitas air yang jernih. Salah satu daya tarik utama Pulau Weh adalah kota Sabang, yang menjadi pintu masuk utama ke pulau ini. Sabang memiliki berbagai fasilitas seperti akomodasi, tempat makan, dan pelabuhan kecil yang ramai. Para wisatawan sering menggunakan Sabang sebagai titik awal untuk menjelajahi keindahan pulau ini.",
    "img_content": "https://i.pinimg.com/564x/91/fb/ec/91fbecedce1489200570487826001648.jpg",
    "img_title": "Pantai Iboih",
    "desc_img": "Pantai Iboih adalah salah satu destinasi utama di Pulau Weh, terkenal dengan keindahan alamnya yang memukau dan air lautnya yang jernih. Pantai ini menawarkan pemandangan spektakuler dengan pasir putih yang lembut, air laut berwarna biru kehijauan, dan terumbu karang yang mempesona, menjadikannya surga bagi para penyelam dan snorkeler. Di bawah permukaan air, kehidupan laut yang beragam menanti untuk dijelajahi, mulai dari ikan-ikan tropis yang berwarna-warni hingga berbagai spesies karang yang indah. Keunikan Pantai Iboih terletak pada suasananya yang tenang dan alami. Dikelilingi oleh hutan tropis yang rimbun, pantai ini memberikan nuansa seolah-olah berada di pulau terpencil, jauh dari hiruk-pikuk kehidupan kota. Pohon-pohon kelapa yang menjulang tinggi di sepanjang pantai menambah kesan eksotis dan menawarkan tempat berteduh yang nyaman bagi para pengunjung.",
    "video": "bNX0Mw240Co?si=OX1dhnBIEdcNpVhS",
    "desc_video": "Pulau Weh juga memiliki daya tarik alam lainnya, termasuk Gunung Berapi Bawah Laut Kilimanjaro, yang memberikan pengalaman menyelam unik dengan aktivitas geothermal. Selain itu, pulau ini adalah rumah bagi berbagai satwa liar seperti biawak, monyet, dan berbagai spesies burung, yang dapat dijelajahi melalui hutan-hutannya yang lebat dan lanskap vulkaniknya. Tugu Nol Kilometer di Pulau Weh adalah landmark penting yang menandai titik paling barat Indonesia dan menawarkan pemandangan yang menakjubkan. Selain itu, ada mata air panas alami seperti di Keuneukai, di mana pengunjung dapat menikmati air yang bersifat terapi.",
    "map": "!1m18!1m12!1m3!1d127011.61918755893!2d95.21383906638984!3d5.839679284159528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3041cf2458af5be9%3A0x20892775b3c98e17!2sPulau%20We!5e0!3m2!1sid!2sid!4v1717236551041!5m2!1sid!2sid"
  },
  {
    "id": "3",
    "title": "Bukittinggi",
    "region": "IB",
    "provinsi": "Provinsi Sumatera Barat",
    "hero_img": "https://i.pinimg.com/564x/e8/1e/ae/e81eae83e5f611000545f21da7ea08ae.jpg",
    "desc_title": "Bukittinggi adalah sebuah kota yang terletak di dataran tinggi Sumatra Barat, Indonesia. Nama tersebut bermakna \"bukit tinggi\" dalam bahasa Minangkabau, yang sesuai dengan letaknya di antara bukit-bukit hijau yang subur. Kota ini terkenal dengan iklimnya yang sejuk, pemandangannya yang memukau, dan waris budayanya yang kaya. Bukittinggi juga terkenal dengan arsitektur tradisionalnya yang khas, yang ditandai dengan atap-atapnya yang berbentuk seperti tanduk kerbau. Pengunjung dapat menjelajahi jalan-jalan yang menawan di kota tua untuk mengagumi bangunan-bangunan unik ini.",
    "img_content": "https://i.pinimg.com/564x/58/8e/a8/588ea8b19aee41fa4788c65246a8cda3.jpg",
    "img_title": "Jam Gadang",
    "desc_img": "Jam Gadang adalah landmark yang sangat ikonis di Bukittinggi, Sumatra Barat, Indonesia. Bangunan ini adalah sebuah menara jam yang besar dan megah yang menjadi salah satu simbol utama dari kota tersebut. Yang membuat Jam Gadang menarik adalah desain arsitekturnya yang unik dan menarik. Bangunan ini memiliki arsitektur yang mencerminkan gaya tradisional Minangkabau dengan atapnya yang melengkung dan berbentuk seperti tanduk kerbau. Atap-atap ini terbuat dari genteng merah yang kontras dengan dinding putih bangunan, menciptakan sebuah tampilan yang menawan dan khas.",
    "video": "r5O7mObNGag?si=7l2J5rgXIQu05xVd",
    "desc_video": "Bukittinggi dikelilingi oleh keindahan alam, termasuk Tebing Sianok yang cantik dan puncak gunung berapi Merapi. Para penggemar kegiatan di luar ruangan dapat menikmati trekking, hiking, dan aktivitas lainnya di pedesaan sekitarnya. Selain itu, Bukittinggi terkenal dengan masakannya yang lezat, terutama masakan Minangkabau, yang dikenal dengan cita rasanya yang kuat dan penggunaan rempah-rempahnya. Pengunjung dapat mencoba hidangan lokal seperti rendang, sate padang, dan berbagai jenis gulai.",
    "map": "!1m18!1m12!1m3!1d31918.101068225344!2d100.35138034706372!3d-0.3027176649845074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd538a460df4be1%3A0xc940d13d891ab206!2sBukittinggi%2C%20Kota%20Bukittinggi%2C%20Sumatera%20Barat!5e0!3m2!1sid!2sid!4v1717237704487!5m2!1sid!2sid"
  },
  {
    "id": "4",
    "title": "Taman Nasional Gunung Leuser",
    "region": "IB",
    "provinsi": "Provinsi Aceh",
    "hero_img": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyVX6PcEiQ5ZiMzi9jw1N0voE1HGe6ml5Q_ekWBwp5PJURTXJtLdQ-VPbeiMqJiNfrgNbwMYGzBXrvTs0pn30XaXpDCOnvAKKWozz-q-Gz-mgNEgxkS4IQBXbvKAsL7TweQtjZVPXrzlKALzc6a3nrdA9lyoVCLpzKgvg-rdMWIIt1nW6PjRgcXKRFO1df/s1800/leuser.jpg",
    "desc-title": "Taman Nasional Gunung Leuser memiliki luas sekitar 7.927 kilometer persegi, menjadikannya salah satu kawasan konservasi terbesar di Indonesia. Kawasan ini meliputi berbagai tipe habitat, mulai dari hutan hujan tropis, hutan pegunungan, hingga sabana. Taman Nasional Gunung Leuser adalah rumah bagi lebih dari 700 spesies tanaman berbunga, sekitar 194 spesies mamalia, dan lebih dari 300 spesies burung. Beberapa spesies yang dilindungi dan langka ditemukan di dalam taman nasional ini, termasuk orangutan Sumatera, harimau Sumatera, gajah Sumatera, badak Sumatera, dan macan dahan.",
    "img_content": "https://i.pinimg.com/564x/78/89/2c/78892c90df7e3757481d57aaf989f953.jpg",
    "img_title": "Orangutan Sumatera",
    "desc_img": "Orangutan Sumatera adalah primata besar dengan bulu cokelat kemerahan yang panjang dan tebal. Mereka menghabiskan sebagian besar waktu hidup mereka di pohon, menggunakan anggota atas yang kuat untuk bergerak melalui kanopi hutan. Orangutan Sumatera adalah salah satu primata paling cerdas di dunia, memiliki kemampuan belajar tinggi dan mampu menggunakan alat untuk memecahkan masalah. Diet mereka terutama terdiri dari buah-buahan, tetapi mereka juga memakan daun, tunas, kulit kayu, dan kadang-kadang serangga. Orangutan Sumatera menghadapi berbagai ancaman terhadap kelangsungan hidup mereka, termasuk hilangnya habitat akibat deforestasi, perburuan ilegal, perdagangan ilegal, dan konflik dengan manusia. Melindungi orangutan Sumatera dan habitat alaminya adalah suatu prioritas konservasi yang mendesak untuk memastikan kelangsungan spesies ini di masa depan.",
    "video": "Qj-nKainTsA?si=ad_9V1L3zaxGbcOc",
    "desc_video": "Taman Nasional Gunung Leuser memiliki topografi yang beragam, mulai dari dataran rendah hingga puncak gunung yang tinggi. Puncak tertingginya adalah Gunung Leuser dengan ketinggian sekitar 3.381 meter di atas permukaan laut. Taman Nasional Gunung Leuser menarik wisatawan yang tertarik untuk menjelajahi alam liar dan melihat keanekaragaman hayati yang luar biasa. Terdapat berbagai jalur trekking yang dapat diikuti, serta lokasi camping yang memungkinkan pengunjung untuk menghabiskan waktu di tengah alam",
    "map": "!1m18!1m12!1m3!1d509733.6658978962!2d96.8866549734375!3d3.5192922999999903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3039861c87a73591%3A0x3f1b67119f4d54b2!2sTaman%20Nasional%20Gunung%20Leuser!5e0!3m2!1sid!2sid!4v1717238437799!5m2!1sid!2sid"
  },
  {
    "id": "5",
    "title": "Pulau Belitung",
    "region": "IB",
    "provinsi": "Provinsi Kepulauan Bangka Belitung",
    "hero_img": "https://i.pinimg.com/564x/5f/e7/13/5fe7138006ad02c017f0246b674f877c.jpg",
    "desc_title": "Pulau Belitung, sebuah permata tersembunyi di Indonesia, menawarkan pesona alam yang memukau dan keindahan yang tak terlupakan. Pantai-pantainya yang bersih dan pasir putih, air lautnya yang biru jernih, dan formasi batuan granit yang unik menciptakan lanskap yang menakjubkan. Di bawah permukaan airnya yang jernih tersembunyi kekayaan bawah laut yang luar biasa, menjadikannya surga bagi penyelam dan snorkeler. Pulau Lengkuas dengan mercusuar bersejarahnya menjadi ikon pulau ini, menyuguhkan pemandangan spektakuler dari puncaknya. Selain itu, Pulau Belitung juga kaya akan budaya dan tradisi lokal yang menarik, menawarkan pengalaman yang autentik bagi para pengunjung yang ingin memahami kehidupan masyarakat lokal.",
    "img_content": "https://i.pinimg.com/564x/a9/ea/e5/a9eae57ac8c71240084df9841db0e971.jpg",
    "img_title": "Pantai Tanjung Tinggi",
    "desc_img": "Pantai Tanjung Tinggi adalah sebuah surga tropis di Pulau Belitung yang memukau dengan keindahan alamnya yang menakjubkan. Pasir putih yang bersih dan halus bertemu dengan air laut yang berkilauan biru jernih, menciptakan pemandangan yang memukau. Namun, apa yang benar-benar membuat Pantai Tanjung Tinggi begitu istimewa adalah formasi batuan granitnya yang unik. Batu-batu granit raksasa tersebar di sepanjang pantai, menambahkan sentuhan artistik alami yang tak terlupakan. Batu-batu granit yang membentuk lanskap Pantai Tanjung Tinggi memberikan kesan yang dramatis dan memikat. Beberapa batuan bahkan memiliki bentuk-bentuk yang unik, menciptakan kesempatan yang sempurna untuk berfoto dan mengabadikan momen-momen indah. Di pagi hari, pantai ini menyuguhkan pemandangan matahari terbit yang spektakuler, sementara saat senja tiba, langit diwarnai dengan warna-warna magis yang memukau.",
    "video": "nkHsz0_VpOs?si=Te1HR1QbXAh3inZN",
    "desc_video": "Pulau Belitung juga terkenal akan kekayaan bawah lautnya, menjadikannya tujuan yang ideal untuk aktivitas seperti snorkeling dan menyelam. Selain itu, makanan khas Belitung seperti mi belitung dan nasi dengdeng juga menjadi daya tarik tersendiri bagi para wisatawan. Pantai-pantai di Pulau Belitung adalah yang terbaik di Indonesia. Pasir putih bersih yang halus berpadu dengan air laut berwarna biru jernih dan batuan granit yang ikonik menciptakan pemandangan yang luar biasa. Setiap pantai memiliki daya tariknya sendiri, mulai dari Pantai Tanjung Tinggi dengan batu granit raksasanya hingga Pantai Tanjung Kelayang yang memukau dengan keindahan alamnya.",
    "map": "!1m18!1m12!1m3!1d510043.31280087197!2d107.58437130827681!3d-2.898695988671966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e172904cb3c7b25%3A0x9b308566eb9637c6!2sPulau%20Belitung!5e0!3m2!1sid!2sid!4v1717238888385!5m2!1sid!2sid"
  }
];

// Endpoint GET semua destinasi wisata
app.get("/wisata", (req, res) => {
  res.json({
    error: false,
    message: "success",
    destinations: destinations.map(dest => ({
      id: dest.id,
      title: dest.title,
      region: dest.region,
      provinsi: dest.provinsi,
      hero_img: dest.hero_img,
    }))
  });
});

// Endpoint GET detail destinasi wisata berdasarkan ID
app.get("/detail/:id", (req, res) => {
  const { id } = req.params;
  const destination = destinations.find(dest => dest.id === id);

  if (destination) {
    res.json({
      error: false,
      message: "success",
      destination: destination
    });
  } else {
    res.status(404).json({
      error: true,
      message: "Destination not found"
    });
  }
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
