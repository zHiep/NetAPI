const apiBaseUrl = 'https://localhost:7210/api'; // Thay đổi với URL API thực tế

// Hàm để lấy danh sách Giảng viên
function getTeachers() {
    $.ajax({
        url: `${apiBaseUrl}/giao-vien`,
        type: 'GET',
        success: function (data) {
            $('#teacherList').empty();
            $('#teacherSelect').empty(); // Làm mới thẻ select
            data.forEach(function (teacher) {
                $('#teacherList').append(`<li data-id="${teacher.id}">${teacher.name} - ${teacher.email} <button class="deleteTeacher">Xóa</button></li>`);
                $('#teacherSelect').append(`<option value="${teacher.id}">${teacher.name}</option>`); 
                $('#classTeacherId').append(`<option value="${teacher.id}">${teacher.name}</option>`); 
                $('#updateclassTeacherId').append(`<option value="${teacher.id}">${teacher.name}</option>`); 
            });
        },
        error: function (error) {
            console.log('Có lỗi xảy ra khi lấy danh sách giảng viên:', error);
        }
    });
}

// Hàm để thêm giáo viên
$('#addTeacher').click(function () {
    const addTeacher = {
        name: $('#teacherName').val(),
        email: $('#teacherEmail').val(),
    };  

    $.ajax({
        url: `${apiBaseUrl}/giao-vien`,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(addTeacher),
        success: function (response) {
            alert('Thêm giáo viên thành công!');
            getTeachers(); // Cập nhật danh sách giảng viên
            $('#teacherName').val('');
            $('#teacherEmail').val('');
        },
        error: function (error) {
            console.log('Có lỗi xảy ra khi sửa giảng viên:', error);
        }
    });
});

// Hàm để sửa giáo viên
$('#editTeacher').click(function () {
    const selectedId = $('#teacherSelect').val(); // Lấy ID của giảng viên được chọn
    const updatedTeacher = {
        id: selectedId,
        name: $('#updateteacherName').val(),
        email: $('#updateteacherEmail').val(),
    };

    $.ajax({
        url: `${apiBaseUrl}/giao-vien/${selectedId}`,
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(updatedTeacher),
        success: function (response) {
            alert('Sửa giảng viên thành công!');
            getTeachers(); // Cập nhật danh sách giảng viên
            $('#updateteacherName').val('');
            $('#updateteacherEmail').val('');
        },
        error: function (error) {
            console.log('Có lỗi xảy ra khi sửa giảng viên:', error);
        }
    });
});

// Hàm để xóa Giảng viên
$('#teacherList').on('click', '.deleteTeacher', function () {
    const teacherId = $(this).parent().data('id'); // Lấy ID từ data attribute
    const teacherName = $(this).parent().text().trim();

    if (confirm(`Bạn có chắc chắn muốn xóa giảng viên ${teacherName}?`)) {
        $.ajax({
            url: `${apiBaseUrl}/giao-vien/${teacherId}`,
            type: 'DELETE',
            success: function (response) {
                alert('Xóa giảng viên thành công!');
                getTeachers(); // Cập nhật lại danh sách
            },
            error: function (error) {
                console.log('Có lỗi xảy ra khi xóa giảng viên:', error);
            }
        });
    }
});

// Hàm để lấy danh sách học sinh
function getStudents() {
    $.ajax({
        url: `${apiBaseUrl}/hoc-sinh`,
        type: 'GET',
        success: function (data) {
            $('#studentList').empty();
            $('#studentSelect').empty(); // Làm mới thẻ select
            data.forEach(function (student) {
                $('#studentList').append(`<li data-id="${student.id}">${student.name} - ${student.email}} <button class="deleteStudent">Xóa</button></li>`);
                $('#studentSelect').append(`<option value="${student.id}">${student.name}</option>`); 
            });
        },
        error: function (error) {
            console.log('Có lỗi xảy ra khi lấy danh sách học sinh:', error);
        }
    });
}

// Hàm để thêm học sinh
$('#addStudent').click(function () {
    const addStudent = {
        name: $('#studentName').val(),
        email: $('#studentEmail').val(),
        dateOfBirth: $('#studentDOB').val(),
        classId: $('#studentClassId').val()
    };

    $.ajax({
        url: `${apiBaseUrl}/hoc-sinh`,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(addStudent),
        success: function (response) {
            alert('Thêm học sinh thành công!');
            getStudents();
            $('#studentName').val('');
            $('#studentEmail').val('');
            $('#studentDOB').val('');
            $('#studentClassId').val('');
        },
        error: function (error) {
            console.log('Có lỗi xảy ra khi thêm học sinh:', error);
        }
    });
});

// Hàm để sửa học sinh
$('#editStudent').click(function () {
    const selectedId = $('#studentSelect').val(); // Lấy ID của học sinh được chọn
    const updatedStudent = {
        id: selectedId,
        name: $('#updatestudentName').val(),
        email: $('#updatestudentEmail').val(),
        dateOfBirth: $('#studentDOB').val(),
        classId: $('#updatestudentClassId').val()
    };

    $.ajax({
        url: `${apiBaseUrl}/hoc-sinh/${selectedId}`,
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(updatedStudent),
        success: function (response) {
            alert('Sửa học sinh thành công!');
            getStudents(); // Cập nhật danh sách học sinh
            $('#updatestudentName').val('');
            $('#updatestudentEmail').val('');
            $('#studentDOB').val('');
        },
        error: function (error) {
            console.log('Có lỗi xảy ra khi sửa học sinh:', error);
        }
    });
});

// Hàm để xóa học sinh
$('#studentList').on('click', '.deleteStudent', function () {
    const studentId = $(this).parent().data('id'); // Lấy ID từ data attribute
    const studentName = $(this).parent().text().trim();

    if (confirm(`Bạn có chắc chắn muốn xóa học sinh ${studentName}?`)) {
        $.ajax({
            url: `${apiBaseUrl}/hoc-sinh/${studentId}`,
            type: 'DELETE',
            success: function (response) {
                alert('Xóa học sinh thành công!');
                getStudents(); // Cập nhật lại danh sách
            },
            error: function (error) {
                console.log('Có lỗi xảy ra khi xóa học sinh:', error);
            }
        });
    }
});

// Hàm để lấy danh sách Lớp
function getClasses() {
    $.ajax({
        url: `${apiBaseUrl}/lop-hoc`,
        type: 'GET',
        success: function (data) {
            $('#classList').empty();
            $('#classSelect').empty(); // Làm mới thẻ select
            data.forEach(function (classItem) {
                $('#classList').append(`<li data-id="${classItem.id}">${classItem.name} <button class="deleteClass">Xóa</button></li>`);
                $('#classSelect').append(`<option value="${classItem.id}">${classItem.name}</option>`); 
                $('#studentClassId').append(`<option value="${classItem.id}">${classItem.name}</option>`); 
                $('#updatestudentClassId').append(`<option value="${classItem.id}">${classItem.name}</option>`); 
            });
        },
        error: function (error) {
            console.log('Có lỗi xảy ra khi lấy danh sách lớp:', error);
        }
    });
}

// Hàm để sửa Lớp
$('#editClass').click(function () {
    const selectedId = $('#classSelect').val(); // Lấy ID của lớp được chọn
    const updatedClass = {
        id: selectedId,
        name: $('#updateclassName').val(),
        teacherId: $('#updateclassTeacherId').val()
    };

    $.ajax({
        url: `${apiBaseUrl}/lop-hoc/${selectedId}`,
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(updatedClass),
        success: function (response) {
            alert('Sửa lớp thành công!');
            getClasses(); // Cập nhật danh sách lớp
            $('#updateclassName').val('');
        },
        error: function (error) {
            console.log('Có lỗi xảy ra khi sửa lớp:', error);
        }
    });
});

// Hàm để xóa Lớp
$('#deleteClassList').on('click', '.deleteClass', function () {
    const classId = $(this).parent().data('id'); // Lấy ID từ data attribute
    const className = $(this).parent().text().trim();

    if (confirm(`Bạn có chắc chắn muốn xóa lớp ${className}?`)) {
        $.ajax({
            url: `${apiBaseUrl}/lop-hoc/${classId}`,
            type: 'DELETE',
            success: function (response) {
                alert('Xóa lớp thành công!');
                getClasses(); // Cập nhật lại danh sách
            },
            error: function (error) {
                console.log('Có lỗi xảy ra khi xóa lớp:', error);
            }
        });
    }
});

// Gọi hàm để lấy danh sách giảng viên, học sinh và lớp khi trang được tải
$(document).ready(function () {
    getTeachers();
    getStudents();
    getClasses();
});