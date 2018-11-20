(function () {
  var state = 'off';
  var start_ts = null, stop_ts = null;
  var starter = document.querySelector('#starter');
  var updater = null;

  function startTimingUpdater() {
    updater = setInterval(function () {
      setTimingText(new Date() - start_ts);
    }, 1);
  }

  function stopTimingUpdater() {
    if (updater) {
      clearInterval(updater);
      updater = null;
    }
  }

  function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
  }

  function setActiveButton() {
    var buttons = document.querySelectorAll('.button');
    var idx = randomInt(0, buttons.length);
    buttons[idx].classList.add('active');
    start_ts = new Date();
    startTimingUpdater();
  }

  function resetActiveButton() {
    document.querySelectorAll('.button').forEach(function ($button) {
      $button.classList.remove('active');
    });
  }

  function start() {
    reset();
    setTimingText(0);
    state = 'on';
    starter.style.visibility = 'hidden';
    setTimeout(setActiveButton, randomInt(3000, 5000));
  }

  function stop() {
    state = 'off';
    stop_ts = new Date();
    stopTimingUpdater();
    setTimingText(stop_ts - start_ts);
    reset();
  }

  function reset() {
    state = 'off';
    start_ts = stop_ts = null;
    starter.style.visibility = 'visible';
    resetActiveButton();
  }

  function paddingZero(n) {
    return n < 10 ? '0' + n : n;
  }

  function setTimingText(ms) {
    var min = Math.floor(ms / 1000 / 60);
    var sec = Math.floor(ms / 1000);
    var msec = ms % 1000;

    document.getElementById('timing').textContent = paddingZero(min) + ":" + paddingZero(sec) + "." + msec
  }

  function animate($button) {
    var duration = 0.3,
      delay = 0.08;
    TweenMax.to($button, duration, {scaleY: 1.6, ease: Expo.easeOut});
    TweenMax.to($button, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
    TweenMax.to($button, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3});
  }

  document.querySelector('.wrapper').addEventListener('click', function(evt) {
    var $button = evt.target;

    if ($button.tagName === 'P') $button = $button.parentNode;
    if (!$button.classList.contains('button')) return;
    animate($button);
    if ( state === 'on' && $button.classList.contains('active')) stop();
  });


  starter.addEventListener('click', start);

  reset();
})();



