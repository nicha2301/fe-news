export default function Footer() {
  return (
    <footer className="py-12 text-[#FFFFFF] bg-[#c31e40] text-[15px]">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center ">
          <div className="text-2xl font-bold mb-2">
            <img
              src={"https://static-cms-giaoducthoidai.epicdn.me/v1/web/styles/img/logo-footer.png"}
              alt="logo"
              width={200}
            />
          </div>
          <h3 className="text-x font-semibold">
            BÁO GIÁO DỤC &amp; THỜI ĐẠI
          </h3>
        </div>
        <div>
          <p className="font-bold">
            CƠ QUAN CỦA BỘ GIÁO DỤC VÀ ĐÀO TẠO - DIỄN ĐÀN TOÀN XÃ HỘI VÌ SỰ NGHIỆP GIÁO DỤC
          </p>
          <p>Cơ quan chủ quản: BỘ GIÁO DỤC VÀ ĐÀO TẠO</p>
          <p>
            Số giấy phép 479/GP-BTTTT, cấp ngày 29/10/2020, ISSN 1859-2945.
          </p>
          <p>
            Tổng Biên tập: Triệu Ngọc Lâm
          </p>
          <p>
            Phó Tổng Biên tập: Dương Thanh Hương - Nguyễn Đức Tuân
          </p>
          <p>
            ® Ghi rõ nguồn “Báo Giáo dục &amp; Thời đại” khi phát hành lại thông tin từ website.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">
            TRỤ SỞ CHÍNH
          </h3>
          <div className="mb-4">
            <p>Tòa soạn: 15 - Hai Bà Trưng - Q.Hoàn Kiếm - Hà Nội.</p>
            <p>Điện thoại: <a href="tel:+842439369800">024 3936 9800</a></p>
            <p>Hotline: <a href="tel:+84967335089">0967 335 089</a></p>
            <p>Email: <a href="mailto:gdtddientu@gmail.com">gdtddientu@gmail.com</a></p>
          </div>
          <h3 className="text-xl font-semibold mb-2">
            LIÊN HỆ QUẢNG CÁO, TRUYỀN THÔNG VÀ ĐẶT BÁO
          </h3>
          <p>Phòng Truyền thông và Dự án</p>
          <p>
            Hotline: <a href="tel:+84886059988">0886 059 988</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
