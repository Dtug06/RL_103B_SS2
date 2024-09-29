// Thiết lập thông tin chuyến đi GrabRide
const bookingId = "GRB-84920";
const customerName = "Trần Thị Mai";
const distanceInKm = 10; // quãng đường đi (km)
// Trời mưa to nếu chuyến được hoàn thành thì totalFare *1.2, nếu hủy chuyến thì miễn phí hủy
const isHeavyRain = true; // true: mưa to, false: bình thường
const isCancelled = false; // true: khách hàng hủy chuyến, false: không hủy

// BOOKED, PICKING_UP, IN_TRANSIT, COMPLETED, CANCELLED
const status = "COMPLETED"; // trạng thái chuyến đi

const baseFare = 12000;
const extraFarePerKm = 4500;

let totalFare = 0;
let cancelFee = 0;
//ngoai le 1
// kiểm tra quãng đường phải lớn hơn 0 km
if (distanceInKm <= 0) {
  console.log("Lỗi: Quãng đường phải lớn hơn 0 km");
} else {
  // tinh cuoc
  if (distanceInKm <= 2) {
    totalFare = baseFare;
  } else {
    totalFare = baseFare + (distanceInKm - 2) * extraFarePerKm;
  }

  //phu phi thoi tiet
  if (isHeavyRain) {
    totalFare *= 1.2;
  }

  // mua to quá
  if (isCancelled && isHeavyRain) {
    console.log("Tài xế hủy chuyến do thời tiết xấu");
    console.log("Khách hàng được miễn phí hủy chuyến");
    cancelFee = 0;
  } else if (isCancelled) {
    switch (status) {
      case "BOOKED":
        console.log("Không có phí hủy");
        cancelFee = 0;
        break;

      case "PICKING_UP":
        console.log("Phí hủy: 10.000 VNĐ");
        cancelFee = 10000;
        break;

      case "IN_TRANSIT":
        console.log("Phí hủy: 20.000 VNĐ");
        cancelFee = 20000;
        break;

      default:
        console.log("Trạng thái không hợp lệ");
    }
  }

  console.log("Mã chuyến đi:", bookingId);
  console.log("Khách hàng:", customerName);
  console.log("Quãng đường:", distanceInKm, "km");
  console.log("Trạng thái:", status);

  if (isCancelled) {
    console.log("Phí hủy chuyến:", cancelFee, "VNĐ");
  } else {
    console.log("Tổng cước chuyến đi:", totalFare, "VNĐ");
  }
}
