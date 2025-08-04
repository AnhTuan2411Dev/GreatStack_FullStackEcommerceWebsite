// Import hình ảnh sản phẩm
import p_img1 from "./p_img1.png";
import p_img2_1 from "./p_img2_1.png";
import p_img2_2 from "./p_img2_2.png";
import p_img2_3 from "./p_img2_3.png";
import p_img2_4 from "./p_img2_4.png";
import p_img3 from "./p_img3.png";
import p_img4 from "./p_img4.png";
import p_img5 from "./p_img5.png";
import p_img6 from "./p_img6.png";
import p_img7 from "./p_img7.png";
import p_img8 from "./p_img8.png";
import p_img9 from "./p_img9.png";
import p_img10 from "./p_img10.png";
import p_img11 from "./p_img11.png";
import p_img12 from "./p_img12.png";
import p_img13 from "./p_img13.png";
import p_img14 from "./p_img14.png";
import p_img15 from "./p_img15.png";
import p_img16 from "./p_img16.png";
import p_img17 from "./p_img17.png";
import p_img18 from "./p_img18.png";
import p_img19 from "./p_img19.png";
import p_img20 from "./p_img20.png";
import p_img21 from "./p_img21.png";
import p_img22 from "./p_img22.png";
import p_img23 from "./p_img23.png";
import p_img24 from "./p_img24.png";
import p_img25 from "./p_img25.png";
import p_img26 from "./p_img26.png";
import p_img27 from "./p_img27.png";
import p_img28 from "./p_img28.png";
import p_img29 from "./p_img29.png";
import p_img30 from "./p_img30.png";
import p_img31 from "./p_img31.png";
import p_img32 from "./p_img32.png";
import p_img33 from "./p_img33.png";
import p_img34 from "./p_img34.png";
import p_img35 from "./p_img35.png";
import p_img36 from "./p_img36.png";
import p_img37 from "./p_img37.png";
import p_img38 from "./p_img38.png";
import p_img39 from "./p_img39.png";
import p_img40 from "./p_img40.png";
import p_img41 from "./p_img41.png";
import p_img42 from "./p_img42.png";
import p_img43 from "./p_img43.png";
import p_img44 from "./p_img44.png";
import p_img45 from "./p_img45.png";
import p_img46 from "./p_img46.png";
import p_img47 from "./p_img47.png";
import p_img48 from "./p_img48.png";
import p_img49 from "./p_img49.png";
import p_img50 from "./p_img50.png";
import p_img51 from "./p_img51.png";
import p_img52 from "./p_img52.png";

// Import các assets khác (logo, icon, hình ảnh giao diện)
import logo from "./logo.png"; // Logo thương hiệu
import hero_img from "./hero_img.png"; // Hình ảnh banner chính
import cart_icon from "./cart_icon.png"; // Icon giỏ hàng
import bin_icon from "./bin_icon.png"; // Icon thùng rác (xóa)
import dropdown_icon from "./dropdown_icon.png"; // Icon dropdown (mũi tên xuống)
import exchange_icon from "./exchange_icon.png"; // Icon đổi trả
import profile_icon from "./profile_icon.png"; // Icon tài khoản người dùng
import quality_icon from "./quality_icon.png"; // Icon chất lượng
import search_icon from "./search_icon.png"; // Icon tìm kiếm
import star_dull_icon from "./star_dull_icon.png"; // Icon sao mờ (đánh giá)
import star_icon from "./star_icon.png"; // Icon sao sáng (đánh giá)
import support_img from "./support_img.png"; // Hình ảnh hỗ trợ khách hàng
import menu_icon from "./menu_icon.png"; // Icon menu hamburger
import about_img from "./about_img.png"; // Hình ảnh trang giới thiệu
import contact_img from "./contact_img.png"; // Hình ảnh trang liên hệ
import razorpay_logo from "./razorpay_logo.png"; // Logo Razorpay (thanh toán)
import stripe_logo from "./stripe_logo.png"; // Logo Stripe (thanh toán)
import cross_icon from "./cross_icon.png"; // Icon đóng (X)

// Định nghĩa kiểu dữ liệu TypeScript
// Interface cho các assets (hình ảnh, icon, logo)
export interface Assets {
  logo: string; // Logo thương hiệu
  hero_img: string; // Hình banner chính
  cart_icon: string; // Icon giỏ hàng
  dropdown_icon: string; // Icon dropdown
  exchange_icon: string; // Icon đổi trả
  profile_icon: string; // Icon tài khoản
  quality_icon: string; // Icon chất lượng
  search_icon: string; // Icon tìm kiếm
  star_dull_icon: string; // Icon sao mờ
  star_icon: string; // Icon sao sáng
  bin_icon: string; // Icon xóa
  support_img: string; // Hình hỗ trợ
  menu_icon: string; // Icon menu
  about_img: string; // Hình giới thiệu
  contact_img: string; // Hình liên hệ
  razorpay_logo: string; // Logo Razorpay
  stripe_logo: string; // Logo Stripe
  cross_icon: string; // Icon đóng
}

// Interface cho sản phẩm
export interface Product {
  _id: string; // ID duy nhất của sản phẩm
  name: string; // Tên sản phẩm
  description: string; // Mô tả sản phẩm
  price: number; // Giá sản phẩm (VND)
  image: string[]; // Danh sách hình ảnh sản phẩm
  category: "Nam" | "Nữ" | "Trẻ em"; // Danh mục: Nam, Nữ, Trẻ em
  subCategory: "Áo" | "Quần" | "Đồ mùa đông"; // Phân loại: Áo, Quần, Đồ mùa đông
  sizes: string[]; // Danh sách kích thước có sẵn
  date: number; // Thời gian thêm sản phẩm (timestamp)
  bestseller: boolean; // Có phải sản phẩm bán chạy không
}

// Xuất object chứa tất cả assets cho ứng dụng
export const assets: Assets = {
  logo, // Logo thương hiệu
  hero_img, // Hình banner trang chủ
  cart_icon, // Icon giỏ hàng
  dropdown_icon, // Icon menu thả xuống
  exchange_icon, // Icon đổi trả hàng
  profile_icon, // Icon tài khoản người dùng
  quality_icon, // Icon chất lượng sản phẩm
  search_icon, // Icon tìm kiếm
  star_dull_icon, // Icon sao đánh giá (chưa chọn)
  star_icon, // Icon sao đánh giá (đã chọn)
  bin_icon, // Icon xóa/thùng rác
  support_img, // Hình ảnh hỗ trợ khách hàng
  menu_icon, // Icon menu di động
  about_img, // Hình ảnh trang giới thiệu
  contact_img, // Hình ảnh trang liên hệ
  razorpay_logo, // Logo cổng thanh toán Razorpay
  stripe_logo, // Logo cổng thanh toán Stripe
  cross_icon, // Icon đóng/hủy
};

// Danh sách tất cả sản phẩm trong cửa hàng
export const products: Product[] = [
  {
    _id: "aaaaa",
    name: "Áo Thun Cổ Tròn Cotton Nữ",
    description:
      "Áo thun cotton nhẹ nhàng, form ôm vừa phải với cổ tròn và tay ngắn, có thể mặc làm áo lót hoặc áo ngoài hàng ngày.",
    price: 100000, // Giá tính bằng VND
    image: [p_img1],
    category: "Nữ",
    subCategory: "Áo",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    bestseller: true, // Sản phẩm bán chạy
  },
  {
    _id: "aaaab",
    name: "Áo Thun Cotton Nam Cổ Tròn",
    description:
      "Áo thun cotton cao cấp cho nam, thiết kế đơn giản với cổ tròn và tay ngắn, phù hợp cho mọi hoạt động hàng ngày.",
    price: 200000,
    image: [p_img2_1, p_img2_2, p_img2_3, p_img2_4], // Nhiều hình ảnh sản phẩm
    category: "Nam",
    subCategory: "Áo",
    sizes: ["M", "L", "XL"],
    date: 1716621345448,
    bestseller: true,
  },
  {
    _id: "aaaac",
    name: "Áo Thun Cotton Bé Gái Cổ Tròn",
    description:
      "Áo thun cotton mềm mại dành cho bé gái, thiết kế đáng yêu với cổ tròn và tay ngắn, an toàn cho làn da nhạy cảm.",
    price: 220000,
    image: [p_img3],
    category: "Trẻ em",
    subCategory: "Áo",
    sizes: ["S", "L", "XL"],
    date: 1716234545448,
    bestseller: true,
  },
  {
    _id: "aaaad",
    name: "Áo Thun Cotton Nam Basic",
    description:
      "Áo thun cotton cơ bản cho nam giới, chất liệu thoáng mát, form dáng vừa vặn, thích hợp cho nhiều dịp khác nhau.",
    price: 110000,
    image: [p_img4],
    category: "Nam",
    subCategory: "Áo",
    sizes: ["S", "M", "XXL"],
    date: 1716621345448,
    bestseller: true,
  },
  {
    _id: "aaaae",
    name: "Áo Thun Nữ Cotton Cao Cấp",
    description:
      "Áo thun cotton cao cấp dành cho phái đẹp, thiết kế thanh lịch với đường may tinh tế và chất liệu bền đẹp.",
    price: 130000,
    image: [p_img5],
    category: "Nữ",
    subCategory: "Áo",
    sizes: ["M", "L", "XL"],
    date: 1716622345448,
    bestseller: true,
  },
  {
    _id: "aaaaf",
    name: "Áo Thun Bé Gái Phong Cách",
    description:
      "Áo thun thời trang cho bé gái, chất liệu cotton an toàn, màu sắc tươi sáng, phù hợp cho các hoạt động vui chơi.",
    price: 140000,
    image: [p_img6],
    category: "Trẻ em",
    subCategory: "Áo",
    sizes: ["S", "L", "XL"],
    date: 1716623423448,
    bestseller: true,
  },
  {
    _id: "aaaag",
    name: "Quần Tây Nam Ống Suông",
    description:
      "Quần tây nam thiết kế ống suông hiện đại, chất liệu cao cấp, form dáng lịch lãm phù hợp cho công sở và các dịp trang trọng.",
    price: 190000,
    image: [p_img7],
    category: "Nam",
    subCategory: "Quần",
    sizes: ["S", "L", "XL"],
    date: 1716621542448,
    bestseller: false,
  },
  {
    _id: "aaaah",
    name: "Áo Thun Nam Cotton Trắng",
    description:
      "Áo thun cotton trắng basic cho nam, chất liệu mềm mại, thoáng khí, dễ phối đồ, phù hợp cho mọi hoàn cảnh.",
    price: 140000,
    image: [p_img8],
    category: "Nam",
    subCategory: "Áo",
    sizes: ["S", "M", "L", "XL"],
    date: 1716622345448,
    bestseller: false,
  },
  {
    _id: "aaaai",
    name: "Áo Thun Bé Gái Dễ Thương",
    description:
      "Áo thun cotton cho bé gái với màu sắc tươi sáng, thiết kế dễ thương, chất liệu an toàn và thoải mái cho trẻ em.",
    price: 100000,
    image: [p_img9],
    category: "Trẻ em",
    subCategory: "Áo",
    sizes: ["M", "L", "XL"],
    date: 1716621235448,
    bestseller: false,
  },
  {
    _id: "aaaaj",
    name: "Quần Kaki Nam Slimfit",
    description:
      "Quần kaki nam form slimfit trẻ trung, chất liệu bền đẹp, màu sắc đa dạng, phù hợp cho đi làm và dạo phố.",
    price: 110000,
    image: [p_img10],
    category: "Nam",
    subCategory: "Quần",
    sizes: ["S", "L", "XL"],
    date: 1716622235448,
    bestseller: false,
  },
  {
    _id: "aaaak",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 120000,
    image: [p_img11],
    category: "Nam",
    subCategory: "Áo",
    sizes: ["S", "M", "L"],
    date: 1716623345448,
    bestseller: false,
  },
  {
    _id: "aaaal",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 150000,
    image: [p_img12],
    category: "Nam",
    subCategory: "Áo",
    sizes: ["S", "M", "L", "XL"],
    date: 1716624445448,
    bestseller: false,
  },
  {
    _id: "aaaam",
    name: "Women Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 130000,
    image: [p_img13],
    category: "Nữ",
    subCategory: "Áo",
    sizes: ["S", "M", "L", "XL"],
    date: 1716625545448,
    bestseller: false,
  },
  {
    _id: "aaaan",
    name: "Boy Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 160000,
    image: [p_img14],
    category: "Trẻ em",
    subCategory: "Áo",
    sizes: ["S", "M", "L", "XL"],
    date: 1716626645448,
    bestseller: false,
  },
  {
    _id: "aaaao",
    name: "Men Tapered Fit Flat-Front Trousers",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 140,
    image: [p_img15],
    category: "Nam",
    subCategory: "Quần",
    sizes: ["S", "M", "L", "XL"],
    date: 1716627745448,
    bestseller: false,
  },
  {
    _id: "aaaap",
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 170000,
    image: [p_img16],
    category: "Trẻ em",
    subCategory: "Áo",
    sizes: ["S", "M", "L", "XL"],
    date: 1716628845448,
    bestseller: false,
  },
  {
    _id: "aaaaq",
    name: "Men Tapered Fit Flat-Front Trousers",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 150000,
    image: [p_img17],
    category: "Nam",
    subCategory: "Quần",
    sizes: ["S", "M", "L", "XL"],
    date: 1716629945448,
    bestseller: false,
  },
  {
    _id: "aaaar",
    name: "Boy Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 180000,
    image: [p_img18],
    category: "Trẻ em",
    subCategory: "Áo",
    sizes: ["S", "M", "L", "XL"],
    date: 1716631045448,
    bestseller: false,
  },
  {
    _id: "aaaas",
    name: "Boy Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 160000,
    image: [p_img19],
    category: "Trẻ em",
    subCategory: "Áo",
    sizes: ["S", "M", "L", "XL"],
    date: 1716632145448,
    bestseller: false,
  },
  {
    _id: "aaaat",
    name: "Women Palazzo Pants with Waist Belt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 190,
    image: [p_img20],
    category: "Nữ",
    subCategory: "Quần",
    sizes: ["S", "M", "L", "XL"],
    date: 1716633245448,
    bestseller: false,
  },
  {
    _id: "aaaau",
    name: "Áo Khoác Nữ Có Khóa Kéo",
    description:
      "Áo khoác nữ thiết kế relaxed fit với khóa kéo phía trước, chất liệu ấm áp, phù hợp cho mùa thu đông và thời tiết se lạnh.",
    price: 170000,
    image: [p_img21],
    category: "Nữ",
    subCategory: "Đồ mùa đông",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634345448,
    bestseller: false,
  },
  {
    _id: "aaaav",
    name: "Quần Palazzo Nữ Có Đai",
    description:
      "Quần palazzo nữ thanh lịch kèm đai thời trang, chất liệu nhẹ nhàng, thoải mái, thích hợp cho công sở và dạo phố.",
    price: 200000,
    image: [p_img22],
    category: "Nữ",
    subCategory: "Quần",
    sizes: ["S", "M", "L", "XL"],
    date: 1716635445448,
    bestseller: false,
  },
  {
    _id: "aaaaw",
    name: "Boy Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 180000,
    image: [p_img23],
    category: "Trẻ em",
    subCategory: "Áo",
    sizes: ["S", "M", "L", "XL"],
    date: 1716636545448,
    bestseller: false,
  },
  {
    _id: "aaaax",
    name: "Boy Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 210000,
    image: [p_img24],
    category: "Trẻ em",
    subCategory: "Áo",
    sizes: ["S", "M", "L", "XL"],
    date: 1716637645448,
    bestseller: false,
  },
  {
    _id: "aaaay",
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 190,
    image: [p_img25],
    category: "Trẻ em",
    subCategory: "Áo",
    sizes: ["S", "M", "L", "XL"],
    date: 1716638745448,
    bestseller: false,
  },
  {
    _id: "aaaaz",
    name: "Women Zip-Front Relaxed Fit Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 220000,
    image: [p_img26],
    category: "Nữ",
    subCategory: "Đồ mùa đông",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845448,
    bestseller: false,
  },
  {
    _id: "aaaba",
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 200,
    image: [p_img27],
    category: "Trẻ em",
    subCategory: "Áo",
    sizes: ["S", "M", "L", "XL"],
    date: 1716640945448,
    bestseller: false,
  },
  {
    _id: "aaabb",
    name: "Men Slim Fit Relaxed Denim Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 230000,
    image: [p_img28],
    category: "Nam",
    subCategory: "Đồ mùa đông",
    sizes: ["S", "M", "L", "XL"],
    date: 1716642045448,
    bestseller: false,
  },
  {
    _id: "aaabc",
    name: "Women Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 210000,
    image: [p_img29],
    category: "Nữ",
    subCategory: "Áo",
    sizes: ["S", "M", "L", "XL"],
    date: 1716643145448,
    bestseller: false,
  },
  {
    _id: "aaabd",
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 240000,
    image: [p_img30],
    category: "Trẻ em",
    subCategory: "Áo",
    sizes: ["S", "M", "L", "XL"],
    date: 1716644245448,
    bestseller: false,
  },
  {
    _id: "aaabe",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 220000,
    image: [p_img31],
    category: "Nam",
    subCategory: "Áo",
    sizes: ["S", "M", "L", "XL"],
    date: 1716645345448,
    bestseller: false,
  },
  {
    _id: "aaabf",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 250000,
    image: [p_img32],
    category: "Nam",
    subCategory: "Áo",
    sizes: ["S", "M", "L", "XL"],
    date: 1716646445448,
    bestseller: false,
  },
  {
    _id: "aaabg",
    name: "Girls Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 230000,
    image: [p_img33],
    category: "Trẻ em",
    subCategory: "Áo",
    sizes: ["S", "M", "L", "XL"],
    date: 1716647545448,
    bestseller: false,
  },
  {
    _id: "aaabh",
    name: "Women Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 260000,
    image: [p_img34],
    category: "Nữ",
    subCategory: "Áo",
    sizes: ["S", "M", "L", "XL"],
    date: 1716648645448,
    bestseller: false,
  },
  {
    _id: "aaabi",
    name: "Women Zip-Front Relaxed Fit Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 240000,
    image: [p_img35],
    category: "Nữ",
    subCategory: "Đồ mùa đông",
    sizes: ["S", "M", "L", "XL"],
    date: 1716649745448,
    bestseller: false,
  },
  {
    _id: "aaabj",
    name: "Women Zip-Front Relaxed Fit Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 270000,
    image: [p_img36],
    category: "Nữ",
    subCategory: "Đồ mùa đông",
    sizes: ["S", "M", "L", "XL"],
    date: 1716650845448,
    bestseller: false,
  },
  {
    _id: "aaabk",
    name: "Women Round Neck Cotton Top",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 250000,
    image: [p_img37],
    category: "Nữ",
    subCategory: "Áo",
    sizes: ["S", "M", "L", "XL"],
    date: 1716651945448,
    bestseller: false,
  },
  {
    _id: "aaabl",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 280000,
    image: [p_img38],
    category: "Nam",
    subCategory: "Áo",
    sizes: ["S", "M", "L", "XL"],
    date: 1716653045448,
    bestseller: false,
  },
  {
    _id: "aaabm",
    name: "Men Printed Plain Cotton Shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 260000,
    image: [p_img39],
    category: "Nam",
    subCategory: "Áo",
    sizes: ["S", "M", "L", "XL"],
    date: 1716654145448,
    bestseller: false,
  },
  {
    _id: "aaabn",
    name: "Men Slim Fit Relaxed Denim Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 290000,
    image: [p_img40],
    category: "Nam",
    subCategory: "Đồ mùa đông",
    sizes: ["S", "M", "L", "XL"],
    date: 1716655245448,
    bestseller: false,
  },
  {
    _id: "aaabo",
    name: "Men Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 270000,
    image: [p_img41],
    category: "Nam",
    subCategory: "Áo",
    sizes: ["S", "M", "L", "XL"],
    date: 1716656345448,
    bestseller: false,
  },
  {
    _id: "aaabp",
    name: "Boy Round Neck Pure Cotton T-shirt",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 300000,
    image: [p_img42],
    category: "Trẻ em",
    subCategory: "Áo",
    sizes: ["S", "M", "L", "XL"],
    date: 1716657445448,
    bestseller: false,
  },
  {
    _id: "aaabq",
    name: "Kid Tapered Slim Fit Trouser",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 280000,
    image: [p_img43],
    category: "Trẻ em",
    subCategory: "Quần",
    sizes: ["S", "M", "L", "XL"],
    date: 1716658545448,
    bestseller: false,
  },
  {
    _id: "aaabr",
    name: "Women Zip-Front Relaxed Fit Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 310000,
    image: [p_img44],
    category: "Nữ",
    subCategory: "Đồ mùa đông",
    sizes: ["S", "M", "L", "XL"],
    date: 1716659645448,
    bestseller: false,
  },
  {
    _id: "aaabs",
    name: "Men Slim Fit Relaxed Denim Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 290000,
    image: [p_img45],
    category: "Nam",
    subCategory: "Đồ mùa đông",
    sizes: ["S", "M", "L", "XL"],
    date: 1716660745448,
    bestseller: false,
  },
  {
    _id: "aaabt",
    name: "Men Slim Fit Relaxed Denim Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 320000,
    image: [p_img46],
    category: "Nam",
    subCategory: "Đồ mùa đông",
    sizes: ["S", "M", "L", "XL"],
    date: 1716661845448,
    bestseller: false,
  },
  {
    _id: "aaabu",
    name: "Kid Tapered Slim Fit Trouser",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 300000,
    image: [p_img47],
    category: "Trẻ em",
    subCategory: "Quần",
    sizes: ["S", "M", "L", "XL"],
    date: 1716662945448,
    bestseller: false,
  },
  {
    _id: "aaabv",
    name: "Men Slim Fit Relaxed Denim Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 330000,
    image: [p_img48],
    category: "Nam",
    subCategory: "Đồ mùa đông",
    sizes: ["S", "M", "L", "XL"],
    date: 1716664045448,
    bestseller: false,
  },
  {
    _id: "aaabw",
    name: "Kid Tapered Slim Fit Trouser",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 310000,
    image: [p_img49],
    category: "Trẻ em",
    subCategory: "Quần",
    sizes: ["S", "M", "L", "XL"],
    date: 1716665145448,
    bestseller: false,
  },
  {
    _id: "aaabx",
    name: "Kid Tapered Slim Fit Trouser",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 340000,
    image: [p_img50],
    category: "Trẻ em",
    subCategory: "Quần",
    sizes: ["S", "M", "L", "XL"],
    date: 1716666245448,
    bestseller: false,
  },
  {
    _id: "aaaby",
    name: "Women Zip-Front Relaxed Fit Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 320000,
    image: [p_img51],
    category: "Nữ",
    subCategory: "Đồ mùa đông",
    sizes: ["S", "M", "L", "XL"],
    date: 1716667345448,
    bestseller: false,
  },
  {
    _id: "aaabz",
    name: "Men Slim Fit Relaxed Denim Jacket",
    description:
      "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 350000,
    image: [p_img52],
    category: "Nam",
    subCategory: "Đồ mùa đông",
    sizes: ["S", "M", "L", "XL"],
    date: 1716668445448,
    bestseller: false,
  },
];

/**
 * LƯU Ý:
 * - Tất cả giá sản phẩm được tính bằng VND
 * - Danh mục sản phẩm bao gồm: Nam, Nữ, Trẻ em
 * - Phân loại sản phẩm: Áo, Quần, Đồ mùa đông
 * - Kích thước: S, M, L, XL, XXL
 * - Trường bestseller: true = sản phẩm bán chạy, false = sản phẩm thường
 * - Trường date: timestamp khi sản phẩm được thêm vào hệ thống
 */
