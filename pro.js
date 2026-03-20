// defer ile yükleniyor — DOM garantili hazır

// ── Canlı kullanıcı sayacı ──
(function() {
  var el = document.getElementById('liveUserCount');
  if (!el) return;

  var count = 300 + Math.floor(Math.random() * 270);
  el.textContent = count;

  function tick() {
    var rand = Math.random();
    var step = rand < 0.55 ? 1 : rand < 0.85 ? 2 : 3;
    var dir  = Math.random() < 0.60 ? 1 : -1;
    count = Math.min(569, Math.max(300, count + dir * step));

    el.style.opacity = '0.4';
    setTimeout(function() {
      el.textContent = count;
      el.style.opacity = '1';
    }, 300);

    setTimeout(tick, 4000 + Math.random() * 8000);
  }

  // İlk değişim 4-8 sn sonra
  setTimeout(tick, 4000 + Math.random() * 4000);
})();

// ── Billing toggle ──
var monthlyOpt  = document.getElementById('monthlyOpt');
var yearlyOpt   = document.getElementById('yearlyOpt');
var priceBadge  = document.getElementById('priceBadge');
var pricePeriod = document.getElementById('pricePeriod');
var priceAmount = document.getElementById('priceAmount');
var priceNote   = document.getElementById('priceNote');
var priceSave   = document.getElementById('priceSave');
var priceUnit   = document.getElementById('priceUnit');

function setYearly() {
  yearlyOpt.classList.add('active');
  monthlyOpt.classList.remove('active');
  priceBadge.textContent  = 'POPULAR · SAVE 28%';
  pricePeriod.textContent = 'YEARLY';
  priceAmount.childNodes[0].textContent = '$5.75';
  priceUnit.textContent   = '/Ay';
  priceNote.textContent   = 'Billed $69/year';
  priceSave.textContent   = 'Save $27/year';
  priceSave.style.opacity = '1';
  var cta = document.getElementById('finalCta');
  if (cta) cta.textContent = "⚡ Upgrade to Pro — $5.75/mo";
}

function setMonthly() {
  monthlyOpt.classList.add('active');
  yearlyOpt.classList.remove('active');
  priceBadge.textContent  = 'MONTHLY PLAN';
  pricePeriod.textContent = 'MONTHLY';
  priceAmount.childNodes[0].textContent = '$8';
  priceUnit.textContent   = '/Ay';
  priceNote.textContent   = 'Billed monthly';
  priceSave.textContent   = '';
  priceSave.style.opacity = '0';
  var cta = document.getElementById('finalCta');
  if (cta) cta.textContent = "⚡ Upgrade to Pro — $8/mo";
}

if (yearlyOpt)  yearlyOpt.addEventListener('click', setYearly);
if (monthlyOpt) monthlyOpt.addEventListener('click', setMonthly);

// ── FAQ accordion ──
document.querySelectorAll('.faq-item').forEach(function(item) {
  var q = item.querySelector('.faq-q');
  if (!q) return;
  q.addEventListener('click', function() {
    var open = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(function(i) { i.classList.remove('open'); });
    if (!open) item.classList.add('open');
  });
});

// ── Mevcut Plan butonu ──
var currentPlanBtn = document.getElementById('currentPlanBtn');
if (currentPlanBtn) {
  currentPlanBtn.addEventListener('click', function() { window.close(); });
}
