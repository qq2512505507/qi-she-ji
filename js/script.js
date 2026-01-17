// 简单交互：导航切换、表单提交模拟与校验
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('mainNav');
  const toggle = document.getElementById('navToggle');
  toggle.addEventListener('click', () => nav.classList.toggle('open'));

  // footer 年份
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 表单处理（示例：本地校验 + 模拟异步提交）
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formMsg.textContent = '';
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name.length < 2) return formMsg.textContent = '请填写有效的姓名。';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return formMsg.textContent = '请输入有效邮箱地址。';
    if (message.length < 10) return formMsg.textContent = '请简单描述你的项目（至少10个字符）。';

    // 这里你可以替换为真实的 API（例如 Formspree、Netlify Forms 或你自己的后端）
    formMsg.textContent = '正在发送...';
    setTimeout(() => {
      formMsg.textContent = '您的信息已发送，我会尽快联系您。';
      form.reset();
    }, 900);
  });
});