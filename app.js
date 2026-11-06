(function () {
  'use strict';
  var cfg = window.HOST_CONFIG || {};
  var dialog = document.getElementById('dialog');
  var title = document.getElementById('dialog-title');
  var msg = document.getElementById('dialog-text');
  var extra = document.getElementById('dialog-extra');
  var status = document.getElementById('state');
  var device = document.getElementById('device');
  var ua = navigator.userAgent || '';
  device.textContent = /PlayStation 4/i.test(ua) ? 'Navegador PS4 detectado · firmware no verificado' : 'Vista previa · consola no detectada';
  status.textContent = 'VIDEOGAMESSCZ · FW objetivo 14.00';
  function show(t, m) {
    title.textContent = t;
    msg.textContent = m;
    extra.textContent = '';
    dialog.hidden = false;
    document.getElementById('close').focus();
  }
  function hide() { dialog.hidden = true; }
  function launchGoldhen() {
    status.textContent = 'Iniciando exploit Afterglow + GoldHEN (FW 14.00)';
    if (typeof start === 'function') { start(); } else { show('Error', 'No se ha cargado launch.js.'); }
  }
  var buttons = document.querySelectorAll('[data-action]');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      var action = this.getAttribute('data-action');
      if (action === 'goldhen') { launchGoldhen(); return; }
      if (action === 'payloads') { show('Payloads', 'No disponible de momento....'); return; }
      if (action === 'ftp') { show('FTP / File Server', 'No disponible de momento....'); }
    };
  }
  document.getElementById('help').onclick = function () {
    show('Información', 'Motor Afterglow y GoldHEN integrados en este mismo sitio. El botón inicia la cadena con GoldHEN seleccionado. Payloads y FTP no disponibles. La compatibilidad y el éxito no están garantizados. Código original y licencias en /engine/.');
  };
  document.getElementById('close').onclick = hide;
  dialog.onclick = function (e) { if (e.target === dialog) hide(); };
  document.onkeydown = function (e) { if ((e.key || e.keyCode) === 'Escape' || e.keyCode === 27) hide(); };
}());
