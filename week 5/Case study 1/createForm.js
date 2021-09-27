var data = [];

    function createNewAccount()
    {
        var name = document.getElementById('name').value;
        var pass = document.getElementById('pass').value;
        var email = document.getElementById('email').value;
        var items = {
            name : name,
            pass : pass,
            email : email
        };

        if (name == '' || pass == '' || email == '')
        {
            alert(`Vui lòng nhập đầy đủ các thông tin`);
        }
        else
        {
            let data = localStorage.getItem('data');
            //console.log(data);
            if (data) {
                //đã có giá trị thì sẽ chuyển thành mảng
                data = JSON.parse(data); // array
            } else {
                //chưa có giá trị thì để là mảng rỗng
                data = [];
            }
            
            let check = false;
            for (let i = 0; i < data.length; i++)
            {
                console.log(data[0].name);
                if (data[i].name == name)
                {
                    check = true;
                }
            }

            if(check)
            {
                    alert(`Tên tài khoản "${name}" đã tồn tại. Vui lòng thử lại với tên khác "Ex: ${name}123;..."`);
                    location.reload();
            }
            else
            {
                data.push(items);

                //lưu trữ cục bộ bằng từ khóa users
                data = JSON.stringify(data);
                localStorage.setItem('data', data);
                alert(`Chúc mừng bạn đã đăng ký tài khoản thành công`);
                location.reload();
            }
        }

    }