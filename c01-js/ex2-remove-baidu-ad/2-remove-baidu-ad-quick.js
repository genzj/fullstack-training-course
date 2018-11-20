(
  function() {
    document.querySelectorAll('#content_left > div:not(.result):not(.result-op)').forEach(function (t) {
      t.parentNode.removeChild(t);
    });
  }
)();