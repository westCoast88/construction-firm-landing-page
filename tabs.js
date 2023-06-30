
document.querySelectorAll('.how-we-working__list__button').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.how-we-working__list__button').forEach(function (btn) {
      btn.classList.remove('.how-we-working__list__button-active')
    });
    e.currentTarget.classList.add('.how-we-working__list__button-active');
    document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs-item-active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item-active');
  });
});

