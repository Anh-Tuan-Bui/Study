# 🏭 Production Move - Hệ thống quản lý vòng đời sản phẩm

[![Java](https://img.shields.io/badge/Java-17-blue)]()
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2-green)]()
[![MySQL](https://img.shields.io/badge/Database-MySQL-blue)]()
[![Status](https://img.shields.io/badge/status-Student%20Project-lightgrey)]()

## 📘 Giới thiệu
**Production Move** là một hệ thống mô phỏng quy trình quản lý chuỗi cung ứng sản phẩm, từ nhà máy sản xuất cho đến đại lý phân phối và trung tâm bảo hành. Dự án được xây dựng với **Spring Boot** và **RESTful API**, hỗ trợ các chức năng nghiệp vụ thực tế như:
- Sản xuất và xuất xưởng sản phẩm
- Phân phối cho đại lý
- Gửi và xử lý bảo hành
- Thu hồi và đổi trả sản phẩm lỗi

---

## 🎯 Tính năng chính
- 🧑‍🏭 **Quản lý nhà máy sản xuất**
  - Tạo lô sản xuất mới
  - Sản xuất sản phẩm & xuất kho

- 🏪 **Quản lý đại lý phân phối**
  - Nhận hàng từ nhà máy
  - Bán hàng cho khách
  - Gửi sản phẩm lỗi đi bảo hành

- 🛠️ **Trung tâm bảo hành**
  - Nhận sản phẩm lỗi
  - Xử lý và cập nhật trạng thái bảo hành
  - Trả sản phẩm đã bảo hành

- 🧑‍💼 **Admin hệ thống**
  - Quản lý vai trò & thông tin người dùng
  - Thống kê số lượng sản phẩm theo trạng thái, vị trí

- 📊 **Thống kê và truy vết**
  - Xem lịch sử di chuyển của sản phẩm
  - Truy vết sản phẩm theo mã sản phẩm

---

## 🏗️ Kiến trúc tổng thể
- Kiến trúc 3 tầng: `Controller -> Service -> Repository`
- Áp dụng Spring Security cho phân quyền
- Sử dụng DTO để tách dữ liệu đầu vào/ra
- Các role được phân quyền rõ ràng qua JWT

## 📁 Cấu trúc thư mục chính
```
src/
├── controller/ # REST API
├── exception/ # Xử lý lỗi tập trung
├── model/ # Các entity ánh xạ với bảng DB
├── repository/ # Interface thao tác với DB
├── service/ # Business logic
└── application.properties # Cấu hình hệ thống
```

---

## ⚙️ Công nghệ sử dụng

| Thành phần | Công nghệ |
|------------|-----------|
| Backend    | Java 17, Spring Boot 3 |
| ORM        | Hibernate / JPA |
| Database   | MySQL |
| Build Tool | Maven |

---

## ▶️ Hướng dẫn chạy dự án

### 1. Yêu cầu hệ thống
- Java 17+
- Maven 3.8+
- MySQL 8+
- Docker (tuỳ chọn)

### 2. Cài đặt
#### Chạy bằng IntelliJ / VScode
- Clone repo:
    ```bash
    git clone https://github.com/Anh-Tuan-Bui/Study.git
    ```
- Mở project trong IntelliJ
- Cấu hình file src/main/resources/application.properties theo MySQL của bạn
- Chạy file ProductionMoveApplication.java

#### Chạy bằng terminal
```bash
# Clone repo
git clone https://github.com/Anh-Tuan-Bui/Study.git
cd Study/Projects/ProductionMove

# Cấu hình database trong file: src/main/resources/application.properties

# Chạy dự án
./mvnw spring-boot:run
```

### 3. Truy cập API
Sử dụng Postman để truy cập các API trong tầng Controller

---

## 📈 Mục tiêu học tập
- Mô hình hóa bài toán thực tế bằng OOP và JPA
- Quản lý nhiều vai trò và luồng nghiệp vụ phức tạp
- Áp dụng REST API, Spring Security, phân trang, DTO
- Làm quen với truy vấn nâng cao và thao tác nhiều bảng

---

## 📄 License
Dự án học tập cá nhân, chia sẻ công khai với mục đích luyện tập và tham khảo.

---
