import { https } from "./configURL";

export let movieService = {
  getMovieList: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05");
  },
  getMoiveService: (id) => {
    return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
  },
  getMovieByTheater: () => {
    return https.get(
      "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP05"
    );
  },
};
