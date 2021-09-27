  function loginForm()
    {
        var name = document.getElementById('name').value;
        var pass = document.getElementById('pass').value;

        var data = localStorage.getItem('data');
        data = JSON.parse(data);
        console.log(data);
        let flag = false;

        for (user of data)
        {
            if (user.name == name && user.pass == pass)
            {
                flag = true;
            }
        }
        
        if (flag)
        {
            window.location="/page/MainPage.html";
        }
        else
        {
            alert(`Bạn chưa có tài khoản vui lòng đăng kí`);
        }
    }
    
    function createAccount()
    {
        window.location="/createForm.html";
    }
