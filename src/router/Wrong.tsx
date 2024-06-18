import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import bg_404 from "~/assets/img/bg-404.png";

export default function Wrong() {
  return (
    <div className="site-body py-[250px] pl-[500px] bg-left bg-no-repeat" style={{
      backgroundImage: `url(${bg_404})`,
      backgroundSize: '1022px'
    }}>
      <div className=" flex flex-col justify-center items-center text-center">
        <div className="wrap-content">
          <p className="title text-[26px] font-bold mb-4">Không tìm thấy đường dẫn này</p>
          <p className="des font-bold text-gray-600 italic text-[14px] mb-7">
            Bạn có thể truy cập vào <a href="/" className="home text-[#333333]">Trang chủ</a> hoặc sử dụng <br /> ô dưới đây để tìm kiếm
          </p>
        </div>
        <div className="wrap-search my-4 w-[596px] max-w-[600px] relative">
          <input
            type="text"
            className="bg-[#f8f9fa] txtsearch p-2 border border-gray-300 rounded-md w-full h-[64px] focus:outline-none"
            placeholder="Tìm kiếm thông tin"
          />
          <div className="absolute right-1.5 top-1/2 transform -translate-y-1/2 px-4 py-3.5 bg-[#e21f26] rounded-[5px] hover:cursor-pointer">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[24px] text-white" />
          </div>
        </div>
        <a href="/" className="block w-[130px] h-[38px] bg-[#ce2e0e] rounded-[3px] font-medium text-[16px] leading-[19px] text-white px-[18px] py-[8px]">TRANG CHỦ</a>
      </div>
    </div>
  );
}
