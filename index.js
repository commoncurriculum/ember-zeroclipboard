'use strict';

module.exports = {
  name: 'ember-zeroclipboard',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/zeroclipboard/dist/ZeroClipboard.js');

    app.import(app.bowerDirectory + '/zeroclipboard/dist/ZeroClipboard.swf', {
      destDir: 'assets'
    });
  }
};
