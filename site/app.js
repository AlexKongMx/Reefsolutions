const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
function closeMenu(returnFocus = false) {
  if (!toggle || !nav) return;
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation');
  if (returnFocus) toggle.focus();
}
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('open', open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => closeMenu()));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('open')) closeMenu(true);
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.site-header')) closeMenu();
  });
  matchMedia('(min-width: 901px)').addEventListener('change', e => { if (e.matches) closeMenu(); });
}
const form = document.querySelector('#assessment-form');
if (form) {
  const status = document.querySelector('#form-status');
  const submit = form.querySelector('[type="submit"]');
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!form.reportValidity() || submit.disabled) return;
    submit.disabled = true;
    status.textContent = 'Sending your enquiry…';
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString(),
        signal: controller.signal
      });
      if (!response.ok) throw new Error('Submission was not accepted');
      window.location.assign('/thank-you');
    } catch {
      status.replaceChildren(document.createTextNode('We couldn’t confirm delivery. Your details are still here. Please try again, or email '));
      const email = document.createElement('a');
      email.href = 'mailto:reefsolutions.co@gmail.com';
      email.textContent = 'reefsolutions.co@gmail.com';
      status.append(email, document.createTextNode('.'));
      submit.disabled = false;
    } finally { clearTimeout(timeout); }
  });
}
