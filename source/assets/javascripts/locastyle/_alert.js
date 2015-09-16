var locastyle = locastyle || {};

locastyle.modules = locastyle.modules || [];
locastyle.modules.push('alert');

locastyle.alert = (function() {
  'use strict';

  function init() {
    ariaAlert();
  }

  function ariaAlert() {
    $('[class*="ls-alert"]').attr({ role : 'alert' });
  }

  return {
    init: init
  };

}());
