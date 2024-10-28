$(document).ready(function() {
    var check1 = false;
    var check2 = false;
    var check3 = false;
    var check4 = false;
    $('#hoTen').on('input', function() {
        var hoTen = $(this).val();
        var regex = /^([A-Z][a-z]*)*([A-Z][a-z]*)$/;
        if (!regex.test(hoTen)) {
            $('#tbHoTen').text("Họ tên phải bắt đầu chữ hoa");
            check1 = false;
        } else {
            $('#tbHoTen').text("");
            check1 = true;
        }
    });

    $('#dangNhap').on('input', function() {
        var dangNhap = $(this).val();
        var regex = /^[A-Za-z\s]{6,}$/;
        if (!regex.test(dangNhap)) {
            $('#tbDangNhap').text("Tên đăng nhập phải trên 6 kí tự");
            check2 = false;
        } else {
            $('#tbDangNhap').text("");
            check2 = true;
        }
    });

    $('#matKhau').on('input', function() {
        var matKhau = $(this).val();
        var regex = /[A-Za-z0-9]+/;
        if (!regex.test(matKhau)) {
            $('#tbMatKhau').text("Không chứa khoảng trắng và ký tự đặc biệt");
            check3 = false;
        } else {
            $('#tbMatKhau').text("");
            check3 = true;
        }
    });

    $('#xacNhan').on('input', function() {
        var xNMK = $(this).val();
        var matKhau = $('#matKhau').val();
        if (!(xNMK === matKhau)) {
            $('#tbXacNhan').text("Xác nhận mật khẩu phải trùng với mật khẩu");
            check4 = false;
        } else {
            $('#tbXacNhan').text("");
            check4 = true;
        }
    });

    $("#dangKy").click(function() {
        var ten = $("#hoTen").val();
        var login = $('#dangNhap').val();
        var mk = $('#matKhau').val();
        var date = $('#ngaySinh').val();
        var dienThoai = $('#soDienThoai').val();
        var diaChi = $('#diaChi').val();
        var email = $('#email').val();
        var soThich = $('#soThich').val();
        if (check1 && check2 && check3 && check4) {
            $("#outHoTen").text(ten);
            $('#outDangNhap').text(login);
            $('#outMatKhau').text(mk);
            $('#outNgaySinh').text(date);
            $('#outSoDienThoai').text(dienThoai);
            $('#outDiaChi').text(diaChi);
            $('#outEmail').text(email);
            $('#outSoThich').text(soThich);
        } else {
            alert('Vui lòng nhập đầy đủ thông tin ở phần có (*)');
        }
    });
});