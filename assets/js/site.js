(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* Mobile menu ------------------------------------------------------------ */
  const toggle = document.querySelector('[data-nav-toggle]');
  const menu = document.querySelector('[data-menu]');

  if (toggle && menu) {
    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('is-locked', open);
      if (open) {
        menu.hidden = false;
        requestAnimationFrame(() => requestAnimationFrame(() => menu.classList.add('is-open')));
      } else {
        menu.classList.remove('is-open');
        window.setTimeout(() => { if (toggle.getAttribute('aria-expanded') === 'false') menu.hidden = true; }, reduceMotion ? 0 : 450);
      }
    };

    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setOpen(false); toggle.focus(); }
    });
    window.matchMedia('(min-width: 861px)').addEventListener('change', (e) => { if (e.matches) setOpen(false); });
  }

  /* Scroll reveals --------------------------------------------------------- */
  const revealables = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealables.forEach((el) => el.classList.add('is-in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealables.forEach((el) => io.observe(el));
  }

  /* Card spotlight --------------------------------------------------------- */
  if (finePointer) {
    document.querySelectorAll('[data-spotlight]').forEach((card) => {
      const core = card.querySelector('.bezel__core');
      card.addEventListener('pointermove', (e) => {
        const r = core.getBoundingClientRect();
        core.style.setProperty('--mx', `${e.clientX - r.left}px`);
        core.style.setProperty('--my', `${e.clientY - r.top}px`);
      });
    });
  }

  /* Index rows: preview follows the cursor --------------------------------- */
  const rows = document.querySelector('[data-rows]');
  if (rows && finePointer && !reduceMotion) {
    rows.classList.add('has-preview');
    let raf = 0;
    let tx = 0, ty = 0, x = 0, y = 0;
    const tick = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      rows.style.setProperty('--px', `${x.toFixed(1)}px`);
      rows.style.setProperty('--py', `${y.toFixed(1)}px`);
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.5 ? requestAnimationFrame(tick) : 0;
    };
    rows.addEventListener('pointerenter', (e) => {
      const r = rows.getBoundingClientRect();
      x = tx = e.clientX - r.left;
      y = ty = e.clientY - r.top;
      tick();
    });
    rows.addEventListener('pointermove', (e) => {
      const r = rows.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      if (!raf) raf = requestAnimationFrame(tick);
    });
  }

  /* Magnetic buttons ------------------------------------------------------- */
  if (finePointer && !reduceMotion) {
    document.querySelectorAll('[data-magnetic]').forEach((btn) => {
      btn.addEventListener('pointermove', (e) => {
        const r = btn.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
        const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
        btn.style.transform = `translate(${dx * 8}px, ${dy * 8}px)`;
      });
      btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
    });
  }

  /* Copy email ------------------------------------------------------------- */
  const status = document.querySelector('[data-copy-status]');
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    const label = btn.querySelector('[data-copy-label]');
    btn.addEventListener('click', async () => {
      const value = btn.getAttribute('data-copy');
      try {
        await navigator.clipboard.writeText(value);
        if (label) label.textContent = 'Copied';
        if (status) status.textContent = `${value} copied to clipboard.`;
      } catch (err) {
        if (status) status.textContent = `Couldn't access the clipboard. The address is ${value}.`;
      }
      window.setTimeout(() => {
        if (label) label.textContent = 'Copy email';
        if (status) status.textContent = '';
      }, 2600);
    });
  });

  /* Hero dot field --------------------------------------------------------- */
  const canvas = document.querySelector('[data-field]');
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d');
    const gap = 28;
    let w = 0, h = 0, dpr = 1, dots = [];
    let mx = 0, my = 0, cx = 0, cy = 0, s = 0, ts = 0;
    let running = false, visible = true, t = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      for (let y = gap / 2; y < h; y += gap) {
        for (let x = gap / 2; x < w; x += gap) dots.push([x, y]);
      }
      draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < dots.length; i++) {
        const [x, y] = dots[i];
        const dx = x - cx, dy = y - cy;
        const d = Math.sqrt(dx * dx + dy * dy);
        const k = Math.max(0, 1 - d / 220) * s;
        const wave = reduceMotion ? 0 : Math.sin(x * 0.012 + y * 0.008 + t) * 0.5 + 0.5;
        const px = x + (d > 0 ? (dx / d) * k * 18 : 0);
        const py = y + (d > 0 ? (dy / d) * k * 18 : 0);
        const r = 0.8 + k * 1.6 + wave * 0.35;
        ctx.fillStyle = k > 0.02
          ? `rgba(236, 178, 122, ${0.18 + k * 0.7})`
          : `rgba(242, 237, 229, ${0.07 + wave * 0.06})`;
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      if (!running) return;
      cx += (mx - cx) * 0.12;
      cy += (my - cy) * 0.12;
      s += (ts - s) * 0.08;
      t += 0.012;
      draw();
      requestAnimationFrame(loop);
    };
    const start = () => { if (!running && visible && !reduceMotion) { running = true; requestAnimationFrame(loop); } };
    const stop = () => { running = false; };

    resize();
    new ResizeObserver(resize).observe(canvas);
    new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      visible ? start() : stop();
    }).observe(canvas);
    document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));

    if (finePointer) {
      const hero = canvas.parentElement;
      hero.addEventListener('pointermove', (e) => {
        const r = canvas.getBoundingClientRect();
        mx = e.clientX - r.left;
        my = e.clientY - r.top;
        if (ts === 0 && s < 0.01) { cx = mx; cy = my; }
        ts = 1;
      });
      hero.addEventListener('pointerleave', () => { ts = 0; });
    }
  }
})();
