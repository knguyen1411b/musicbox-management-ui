# MusicBox System UI

Giao diện quản lý phòng hát karaoke MusicBox, xây dựng bằng React + Vite. Dự án dùng mock API nội bộ để mô phỏng các luồng chính như đăng nhập, đặt phòng, quản lý phòng, dịch vụ, bảng giá và dashboard theo vai trò.

> [!NOTE]
> Đây là project frontend demo. Dữ liệu hiện được lưu trong bộ nhớ của trình duyệt/runtime qua mock service, chưa kết nối backend thật.

## Tính năng chính

- Trang khách hàng: xem phòng, đặt phòng, phòng hiện tại, lịch sử đặt/thue phòng và thông tin cá nhân.
- Trang nhân viên: thuê phòng, check-in, trả phòng, xử lý dịch vụ và báo hỏng.
- Trang quản lý: tổng quan, quản lý tài khoản, loại phòng, phòng, dịch vụ và bảng giá.
- Mock API có delay giả lập network để phát triển giao diện gần với luồng thực tế.
- Cấu hình sẵn alias import `@` trỏ tới thư mục `src`.

## Công nghệ

- React 18
- Vite 5
- React Router
- Tailwind CSS
- Chart.js
- ESLint + Prettier
- pnpm

## Yêu cầu

- Node.js 18+; khuyến nghị Node.js 20 LTS
- pnpm 10+

Kiểm tra phiên bản:

```bash
node -v
pnpm -v
```

## Chạy dự án

Cài dependencies:

```bash
pnpm install
```

Chạy môi trường phát triển:

```bash
pnpm dev
```

Sau khi chạy, mở địa chỉ Vite hiển thị trong terminal, mặc định là:

```txt
http://localhost:5173
```

## Scripts

| Lệnh                | Mô tả                                |
| ------------------- | ------------------------------------ |
| `pnpm dev`          | Chạy local development server        |
| `pnpm build`        | Build bản production                 |
| `pnpm preview`      | Preview bản đã build                 |
| `pnpm lint`         | Chạy ESLint                          |
| `pnpm lint:fix`     | Chạy ESLint và tự sửa lỗi có thể sửa |
| `pnpm lint:check`   | Chạy ESLint với `--max-warnings=0`   |
| `pnpm format`       | Format toàn bộ project bằng Prettier |
| `pnpm format:check` | Kiểm tra format                      |

## Tài khoản demo

| Vai trò    | Tài khoản | Mật khẩu |
| ---------- | --------- | -------- |
| Quản lý    | `admin`   | `123456` |
| Nhân viên  | `tuan`    | `123456` |
| Khách hàng | `baotran` | `123456` |

## Cấu trúc thư mục

```txt
src/
  app/
    App.jsx
    router.jsx
    styles/
      index.css
  assets/
    imgs/
  components/
    BookingModal.jsx
    Header.jsx
    Logo.jsx
    RoomCard.jsx
  pages/
    admin/
    khachhang/
    nhanvien/
    HomePage.jsx
    DangNhapPage.jsx
    DatPhongPage.jsx
    index.js
  services/
    api.js
    api/
      accounts.js
      auth.js
      catalog.js
      core.js
      operations.js
      rooms.js
```

## Routing

Router chính nằm tại `src/app/router.jsx`. Một số route quan trọng:

| Route                        | Màn hình            |
| ---------------------------- | ------------------- |
| `/`                          | Trang chủ           |
| `/pages/gioithieuhethong`    | Giới thiệu hệ thống |
| `/pages/dangnhap`            | Đăng nhập           |
| `/pages/dangky`              | Đăng ký             |
| `/pages/phonghat`            | Danh sách phòng hát |
| `/pages/DatPhong`            | Đặt phòng           |
| `/pages/phonghientai`        | Phòng hiện tại      |
| `/pages/trangcanhan`         | Khu vực cá nhân     |
| `/pages/dashboard-nhan-vien` | Dashboard nhân viên |
| `/pages/dashboard-admin`     | Dashboard quản lý   |

Các dashboard có route con để điều hướng giữa các màn hình chức năng.

## Mock API

Entry point của service nằm tại `src/services/api.js`, sau đó export theo từng domain:

- `auth.js`: đăng nhập, đăng ký
- `accounts.js`: quản lý tài khoản
- `rooms.js`: phòng và loại phòng
- `operations.js`: nghiệp vụ đặt/thue/trả phòng, dịch vụ, báo hỏng
- `catalog.js`: dịch vụ và bảng giá
- `core.js`: dữ liệu mock và hàm xử lý nền

Khi cần thay bằng backend thật, giữ nguyên các hàm public đang được UI gọi, rồi thay phần xử lý trong các module service bằng `fetch` hoặc client HTTP tương ứng. Cách này giúp page/component ít phải sửa theo nguồn dữ liệu.

## Quy ước phát triển

- Dùng alias `@` cho import từ `src`.
- Không chỉnh trực tiếp thư mục `dist/`; đây là output của lệnh build.
- Chạy `pnpm lint` và `pnpm build` trước khi bàn giao hoặc push code.
- Project có Husky + lint-staged để kiểm tra lint/format cho file staged.

## Build production

```bash
pnpm build
pnpm preview
```
