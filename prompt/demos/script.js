document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // 阻止表单提交
  
      const usernameInput = document.getElementById('username');
      const passwordInput = document.getElementById('password');
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (username === '' || password === '') {
        alert('用户名和密码不能为空');
        return;
      }
  
      // 在这里执行登录逻辑，例如将数据发送到服务器进行验证
      // ...
  
      alert('登录成功');
      form.reset(); // 登录成功后重置表单
    });
  });
  