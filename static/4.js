"use strict";

window.apiConfiguration = {
  'auctionCalendar': 1,
  'auctionDetails': 1,
  'cardVerificationAjax': 1,
  'cardVerificationSkipAjax': 1,
  'changePassword': 1,
  'confirmEmail': 1,
  'content': 1,
  'createAccount': 1,
  'createAccountValidation': 1,
  'forgottenPassword': 1,
  'home': 1,
  'itemDetails': 1,
  'marketplace': 1,
  'models': 1,
  'myBids': 1,
  'mySettings': 1,
  'prevNextItemDetails': 1,
  'reference': 1,
  'registerForAuction': 1,
  'relatedItems': 1,
  'search': 1,
  'ssologin': 1,
  'timed/autobid': 1,
  'timed/bid': 1,
  'timed/buyNow': 1,
  'timed/contactSeller': 1,
  'timed/items': 1,
  'timed/makeOffer': 1,
  'timed/multiBuy': 1,
  'timed/mystate': 1,
  'timed/mystates': 1,
  'timed/tender': 1,
  'timed/tenderPct': 1,
  'timed/transfer': 1,
  'timed/watching': 1,
  'token': 1,
  'typeahead/item': 1,
  'webcast2': 1,
  'webcast2/item': 1,
  'webcast2/longPoll': 1,
  'webcast2/makeChoice': 1,
  'webcast2/mouseOverBid': 1,
  'webcast2/placeBid': 1,
  'webcast2/placeMaxBid': 1,
  'webcast2/sellingItemsRemainder': 1,
  'webcast2/tokToken': 1
};
"use strict";

!function (a) {
  a.fn.extend({
    complexify: function complexify(b, c) {
      function h(a, b) {
        for (var c = a.length - 1; c >= 0; c--) {
          if (b[0] <= a.charCodeAt(c) && a.charCodeAt(c) <= b[1]) return b[1] - b[0] + 1;
        }

        return 0;
      }

      function i(c) {
        if ("strict" === b.banMode) {
          for (var d = 0; d < b.bannedPasswords.length; d++) {
            if (-1 !== c.toLowerCase().indexOf(b.bannedPasswords[d].toLowerCase())) return !0;
          }

          return !1;
        }

        return a.inArray(c, b.bannedPasswords) > -1 ? !0 : !1;
      }

      function j() {
        var g = a(this).val(),
            j = 0,
            k = !1;
        if (i(g)) j = 1;else for (var l = f.length - 1; l >= 0; l--) {
          j += h(g, f[l]);
        }
        j = Math.log(Math.pow(j, g.length)) * (1 / b.strengthScaleFactor), k = j > d && g.length >= b.minimumChars, j = 100 * (j / e), j = j > 100 ? 100 : j, c.call(this, k, j);
      }

      var d = 49,
          e = 120,
          f = [[32, 32], [48, 57], [65, 90], [97, 122], [33, 47], [58, 64], [91, 96], [123, 126], [128, 255], [256, 383], [384, 591], [592, 687], [688, 767], [768, 879], [880, 1023], [1024, 1279], [1328, 1423], [1424, 1535], [1536, 1791], [1792, 1871], [1920, 1983], [2304, 2431], [2432, 2559], [2560, 2687], [2688, 2815], [2816, 2943], [2944, 3071], [3072, 3199], [3200, 3327], [3328, 3455], [3456, 3583], [3584, 3711], [3712, 3839], [3840, 4095], [4096, 4255], [4256, 4351], [4352, 4607], [4608, 4991], [5024, 5119], [5120, 5759], [5760, 5791], [5792, 5887], [6016, 6143], [6144, 6319], [7680, 7935], [7936, 8191], [8192, 8303], [8304, 8351], [8352, 8399], [8400, 8447], [8448, 8527], [8528, 8591], [8592, 8703], [8704, 8959], [8960, 9215], [9216, 9279], [9280, 9311], [9312, 9471], [9472, 9599], [9600, 9631], [9632, 9727], [9728, 9983], [9984, 10175], [10240, 10495], [11904, 12031], [12032, 12255], [12272, 12287], [12288, 12351], [12352, 12447], [12448, 12543], [12544, 12591], [12592, 12687], [12688, 12703], [12704, 12735], [12800, 13055], [13056, 13311], [13312, 19893], [19968, 40959], [40960, 42127], [42128, 42191], [44032, 55203], [55296, 56191], [56192, 56319], [56320, 57343], [57344, 63743], [63744, 64255], [64256, 64335], [64336, 65023], [65056, 65071], [65072, 65103], [65104, 65135], [65136, 65278], [65279, 65279], [65280, 65519], [65520, 65533]],
          g = {
        minimumChars: 8,
        strengthScaleFactor: 1,
        bannedPasswords: window.COMPLEXIFY_BANLIST || [],
        banMode: "strict"
      };
      return a.isFunction(b) && !c && (c = b, b = {}), b = a.extend(g, b), this.each(function () {
        a(this).val() && j.apply(this);
      }), this.each(function () {
        a(this).bind("keyup focus input propertychange mouseup", j);
      });
    }
  });
}(jQuery);
"use strict";

var PageApp = new Backbone.Marionette.Application(); // polyfill for Object assign

if (typeof Object.assign !== 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, 'assign', {
    value: function assign(target, varArgs) {
      // .length of function is 2
      'use strict';

      if (target === null) {
        // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource !== null) {
          // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }

      return to;
    },
    writable: true,
    configurable: true
  });
}

function instantiateAnalytics(trackingId) {
  var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var gaName = window.GoogleAnalyticsObject;
  window[gaName]('create', trackingId, 'auto', namespace); // plugins

  var namespaceRequire = "".concat(namespace ? "".concat(namespace, ".") : '', "require");
  window[gaName](namespaceRequire, 'cleanUrlTracker');
  window[gaName](namespaceRequire, 'outboundLinkTracker');
  window[gaName](namespaceRequire, 'pageVisibilityTracker');
} // Add Google Analytics tracking if not already loaded


if (!window.GoogleAnalyticsObject || !window[window.GoogleAnalyticsObject]) {
  /* eslint-disable */
  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
  /* eslint-enable */

}

instantiateAnalytics('UA-46402216-1', 'bidjs'); // function name space

PageApp.Ent = {};
PageApp.Views = {};
PageApp.Controllers = {}; // instance name space

var myApp = PageApp; // eslint-disable-line no-global-assign

myApp.actions = {
  login: function login() {
    return myApp.ent.config.get('apiBase') + myApp.utils.ajax.getApiEndpoint('token');
  },
  oAuthToken: function oAuthToken() {
    return myApp.ent.config.get('apiBase') + myApp.utils.ajax.getApiEndpoint('ssologin');
  }
};
myApp.utils = {};
myApp.ent = {};
myApp.views = {};
myApp.controllers = {};
PageApp.addRegions({
  gritterRegion: '#gritter',
  mainRegion: '#bidlogix-app',
  myModalRegion: '#bidlogix-modal'
});
PageApp.on('before:start', function () {
  this.utils.oAuth = new PageApp.OAuthUtils();
  this.utils.ajax = new PageApp.AjaxUtils();
  this.utils.types = new PageApp.TypeUtils();
  this.utils.webrtc = new PageApp.WebrtcUtils();
  this.utils.errors = new PageApp.ErrorUtils();
  this.utils.validation = new PageApp.ValidationUtils();
  this.utils.token = new PageApp.TokenUtils();
  this.utils.misc = new PageApp.MiscUtils();
  this.ent.user = new PageApp.Ent.User({
    user: 'noone'
  });
});
PageApp.on('start', function (clientModel) {
  if (!clientModel) {
    clientModel = window.bidjs;
  }

  this.router = new Marionette.AppRouter({
    controller: this,
    appRoutes: {}
  });
  this.registerHelpers(); // we instantiate the loginRouter before our other routes, since this handles any existing authentication, which needs to be handled before our /models request

  this.controllers.loginRouter = new PageApp.Controllers.LoginRouter();
  this.controllers.loginRouter.initialize();
  this.refreshModels({
    clientModel: clientModel,
    callback: _.bind(function (models) {
      this.startServices(models);
      Backbone.history.start();

      if (myApp.ent.user.isLoggedIn()) {
        myApp.vent.trigger('authentication:success', models.userModel, true);
      } else {
        myApp.vent.trigger('authentication:remove', true);
      }
    }, this)
  });
});

myApp.refreshModels = function (config) {
  if (config && config.clientModel) {
    var clientModel = config.clientModel;

    if (window.document.documentMode) {
      // if IE
      var unsupportedBrowserMessage = clientModel.options && clientModel.options.unsupportedBrowserMessage || 'Your browser is not supported. Please use a browser such as Google Chrome or Microsoft Edge to ensure full functionality';
      window.alert(unsupportedBrowserMessage);
    }

    if (clientModel.options && clientModel.options.analyticsCode) {
      instantiateAnalytics(clientModel.options.analyticsCode, clientModel.options.analyticsNamespace);
    }

    this.ent.config = new PageApp.Ent.Config(clientModel);
  }

  this.ent.config.set('contextPath', '#!');
  this.ent.config.set('referer', this.ent.config.getReferer());

  var callback = _.bind(function (models) {
    if (!models || models.failed) {
      if (models.error === 'invalid_token') {
        console.warn('Invalid token, logging out');
        myApp.vent.trigger('authentication:remove', false);
        return myApp.refreshModels(config);
      }

      return myApp.vent.trigger('ui:notification', {
        sticky: true,
        text: 'Server error - please check the configuration: ' + this.ent.config.attributes,
        level: 'danger'
      });
    } else {
      var status = JSON.parse(models.jacksonString);
      models.statusModel = status;
      models.statusModel['@class'] = '.StatusModel';
      this.setModels(models);

      if (config && config.callback) {
        config.callback(models);
      }
    }
  }, this);

  function fetchModels() {
    return myApp.utils.ajax.get(null, myApp.utils.ajax.getApiEndpoint('models'), callback);
  }

  if (myApp.utils.oAuth.isUsingOAuth()) {
    myApp.utils.oAuth.parse().then(fetchModels)["catch"](fetchModels);
  } else {
    fetchModels();
  }
};

myApp.setModels = function (models) {
  this.ent.layoutHacks = new PageApp.Ent.LayoutHacks();

  if (!models) {
    return;
  }

  if (models.metaModel) {
    if (!this.ent.metaModel) {
      this.ent.metaModel = new PageApp.Ent.BasicEntity();
    }

    this.ent.metaModel.set(models.metaModel);
  }

  if (models.headerModel) {
    if (!this.ent.header) {
      this.ent.header = new PageApp.Ent.Header();
    }

    this.ent.header.set(models.headerModel);
  }

  if (models.webAppModel) {
    if (!this.ent.webApp) {
      this.ent.webApp = new PageApp.Ent.WebApp();
    }

    this.ent.webApp.set(models.webAppModel);
  }

  var configModel;

  if (models.configModel) {
    configModel = this.ent.config ? Object.assign({}, this.ent.config.attributes, models.configModel) : models.configModel;
    this.ent.config = new PageApp.Ent.Config(configModel);
  }

  if (models.serverConfigModel) {
    configModel = this.ent.config ? Object.assign({}, this.ent.config.attributes, models.serverConfigModel) : models.serverConfigModel;
    this.ent.config = new PageApp.Ent.Config(configModel);
  }

  if (models.userModel) {
    if (!this.ent.user) {
      this.ent.user = new PageApp.Ent.User();
    }

    this.ent.user.set(models.userModel);
  }

  if (models.statusModel) {
    if (!this.ent.status) {
      this.ent.status = new PageApp.Ent.Status();
    }

    this.ent.status.set(models.statusModel);
  }

  this.ent.fourOFour = new PageApp.Ent.BasicEntity();

  if (models.fourOFour) {
    this.ent.fourOFour.set(models.fourOFour);
  }
};

myApp.startServices = function (models) {
  this.controllers.i16Strings = new PageApp.Controllers.I16StringsRouter();
  this.controllers.i16Strings.initialize(models.stringsModel.i16Strings);
  this.controllers.application = new PageApp.Controllers.ApplicationRouter();
  this.controllers.application.initialize();
  this.controllers.referenceRouter = new PageApp.Controllers.ReferenceRouter();
  this.controllers.referenceRouter.initialize();
  this.controllers.addressRouter = new PageApp.Controllers.AddressRouter();
  this.controllers.addressRouter.initialize();
  this.controllers.contactSellerRouter = new PageApp.Controllers.ContactSellerRouter();
  this.controllers.contactSellerRouter.initialize();
  this.controllers.makeOfferRouter = new PageApp.Controllers.MakeOfferRouter();
  this.controllers.makeOfferRouter.initialize();
  this.controllers.saleInfoRouter = new PageApp.Controllers.SaleInfoRouter();
  this.controllers.saleInfoRouter.initialize();
  this.controllers.buyNowRouter = new PageApp.Controllers.BuyNowRouter();
  this.controllers.buyNowRouter.initialize();
  this.controllers.transferRouter = new PageApp.Controllers.TransferRouter();
  this.controllers.transferRouter.initialize();
  this.controllers.tenderRouter = new PageApp.Controllers.TenderRouter();
  this.controllers.tenderRouter.initialize();
  this.controllers.timedRouter = new PageApp.Controllers.TimedRouter();
  this.controllers.timedRouter.initialize();
  this.controllers.itemland = new PageApp.Controllers.ItemlandRouter();
  this.controllers.itemland.initialize();
  this.controllers.myBidsRouter = new PageApp.Controllers.MyBidsRouter();
  this.controllers.myBidsRouter.initialize();
  this.controllers.itemAlertsRouter = new PageApp.Controllers.ItemAlertsRouter();
  this.controllers.itemAlertsRouter.initialize();
  this.controllers.landingPages = new PageApp.Controllers.LandingPageRouter();
  this.controllers.landingPages.initialize();
  this.controllers.webcastRouter = new PageApp.Controllers.WebcastRouter();
  this.controllers.registerRouter = new PageApp.Controllers.RegisterRouter();
  this.controllers.registerRouter.initialize();
  this.controllers.cardVerifyRouter = new PageApp.Controllers.CardVerifyRouter();
  this.controllers.cardVerifyRouter.initialize();
  this.controllers.accountRouter = new PageApp.Controllers.AccountRouter();
  this.controllers.accountRouter.initialize();
  this.gritterComponent.start();
  var pathname = window.location.hash;

  if (pathname && pathname.indexOf('#') === 0) {
    pathname = pathname.substring(1);
  }

  if (pathname === '') {
    pathname = 'home';
  }

  this.router.on(pathname, function (e) {
    console.log(e);
  });
  this.router.navigate(pathname, {
    trigger: true
  });
};

myApp.registerHelpers = function () {
  HandlebarsIntl.registerWith(Handlebars);
  Handlebars.registerHelper('cloudify', function (imageModel, dims, options) {
    try {
      var opt = options.hash;
      var DEFAULT_QUALITY = 70;
      var DEFAULT_OP = 'fill';
      var width = dims.width ? dims.width : '';
      var height = dims.height ? dims.height : '';
      var operation = myApp.ent.config.get('itemImageTransformOperation') || DEFAULT_OP;
      var validOps = ['scale', 'fit', 'limit', 'mfit', 'fill', 'lfill', 'pad', 'lpad', 'mpad', 'crop', 'thumb', 'imagga_crop'];

      if (validOps.indexOf(operation) < 0) {
        operation = DEFAULT_OP;
      }

      var quality = opt.quality ? opt.quality : DEFAULT_QUALITY;
      var additions = opt.additions ? opt.additions : null;
      var src = myApp.utils.types.toCloudinaryImageSrc(imageModel, width, height, quality, operation, additions);
      return src;
    } catch (err) {
      console.log(err);
    }
  });
};
"use strict";

PageApp.Controllers.ApplicationRouter = function (config) {
  function checkForError(response) {
    var failed = false;

    if (response && response.failed) {
      if (response.models && response.models.ErrorModel) {
        if (response.models.ErrorModel.code === 'reload') {
          window.location.reload();
        }

        myApp.vent.trigger('ui:notification', {
          text: response.models.ErrorModel.message,
          level: 'warning'
        });
      } else {
        myApp.vent.trigger('ui:notification', {
          text: 'error - please reload the page',
          level: 'warning'
        });
      }

      failed = true;
    } else if (response.models && response.models.ErrorModel) {
      myApp.vent.trigger('ui:notification', {
        text: response.models.ErrorModel.message,
        level: 'warning'
      });
      failed = true;
    }

    return failed;
  }

  function redirectToHome() {
    myApp.router.navigate('#!/home', {
      trigger: true
    });
  }

  function redirectToUserSettings() {
    myApp.router.navigate('#!/mySettings', {
      trigger: true
    });
  }

  function hasMissingUserDetails() {
    return myApp.ent.user.isLoggedIn() && myApp.ent.config.getOAuthLoginEndpoint() && myApp.ent.user.get('statusId') === 7;
  }

  function hasOAuthEnabled() {
    return myApp.ent.config.getOAuthLoginEndpoint();
  }

  function setSecurePath(model, pageKey) {
    var securePath = '#!/notFound';

    if (model && model.secureQuery) {
      securePath = '#!/' + model.secureQuery;

      if (model.secureQuery.indexOf('auctionDetails') > -1) {
        securePath += '/' + model.auction.id;
      } else if (model.secureQuery.indexOf('itemDetails') > -1) {
        securePath += '/' + model.id;
      }
    }

    myApp.ent.config.set({
      'page': pageKey,
      'secureQuery': securePath
    });
  }

  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  function setPage(isTitleOverridable, isMetaDescriptionOverridable, metaModel) {
    if (isTitleOverridable) {
      var titleElement = document.getElementsByTagName('title')[0];

      if (!titleElement) {
        titleElement = document.createElement('title');
        document.head.appendChild(titleElement);
      }

      titleElement.innerHTML = metaModel && metaModel.metaTitle ? metaModel.metaTitle : myApp.ent.metaModel.get('metaTitle');
    }

    if (isMetaDescriptionOverridable) {
      var metaDescElement = document.querySelector('meta[name="description"]');

      if (metaDescElement) {
        metaDescElement.setAttribute('content', metaModel && metaModel.metaDescription ? metaModel.metaDescription : myApp.ent.metaModel.get('metaDescription'));
      }
    }
  }

  var setPageMeta;

  function initRoutes(obj) {
    var context = '!/';
    var appRoutes = {};
    appRoutes[context] = 'homeRequest';
    appRoutes[''] = 'homeRequest';
    appRoutes['home'] = 'homeRequest';
    appRoutes[context + 'home'] = 'homeRequest';
    appRoutes[context + 'login'] = 'loginRequest';
    appRoutes[context + 'logout'] = 'logoutRequest';
    appRoutes[context + 'changePassword'] = 'changePasswordRequest';
    appRoutes[context + 'forgottenPassword'] = 'forgottenPasswordRequest';
    appRoutes[context + 'createAccount'] = 'createAccountRequest';
    appRoutes[context + 'mySettings'] = 'mySettingsRequest';
    appRoutes[context + 'confirmEmail'] = 'confirmEmailRequest';
    appRoutes[context + 'calendar'] = 'calendarRequest'; // appRoutes[context + "myBids/:filterId"] = "myBids"; NYI

    appRoutes[context + 'marketplace'] = 'marketplaceRequest';
    appRoutes[context + 'marketplaceSecure'] = 'marketplaceRequest';
    appRoutes[context + 'marketplace?:query'] = 'marketplaceRequest';
    appRoutes[context + 'marketplaceSecure?:query'] = 'marketplaceRequest';
    appRoutes[context + 'search'] = 'searchRequest';
    appRoutes[context + 'searchSecure'] = 'searchRequest';
    appRoutes[context + 'webcast2/:auctionId'] = 'webcastRequest';
    appRoutes[context + 'myBids(/:filterId)'] = 'myBidsRequest';
    appRoutes[context + 'auctionDetails/:auctionId'] = 'auctionDetailsRequest';
    appRoutes[context + 'auctionDetails/:auctionId?:query'] = 'auctionDetailsRequest';
    appRoutes[context + 'auctionDetailsSecure/:auctionId'] = 'auctionDetailsSecureRequest';
    appRoutes[context + 'auctionDetailsSecure/:auctionId?:query'] = 'auctionDetailsSecureRequest';
    appRoutes[context + 'itemDetails/:auctionId/:itemId'] = 'itemDetailsRequest';
    appRoutes[context + 'itemDetailsSecure/:auctionId/:itemId'] = 'itemDetailsSecureRequest';
    appRoutes[context + 'prevNextItemDetails/:itemId/:prevnext'] = 'prevNextItemDetailsRequest';
    appRoutes[context + 'registerForAuction/:prevnext'] = 'registerForAuctionRequest'; // ensure that if bidJS modules are enabled, we don't 404 when showing those modules

    window.bidjs && Object.keys(window.bidjs.modules).forEach(function (key) {
      if (window.bidjs.modules[key]) appRoutes[context + key + '*(/)(:level1)(/)(:level2)(/)(:level3)(/)'] = 'nullRequest';
    });
    appRoutes['*notFound'] = 'notFoundRequest';
    obj.router = new Marionette.AppRouter({
      controller: obj,
      appRoutes: appRoutes
    });

    obj.router.onRoute = function (name, path, args) {
      myApp.utils.misc.resetScrollPosition();

      if (name.indexOf('registerForAuction') === -1 && name.indexOf('login') === -1 && name.indexOf('logout') === -1) {
        myApp.ent.config.set('referer', '#' + Backbone.history.fragment);
      }

      myApp.vent.trigger('lightbox:close'); // prettyPhoto doesn't provide a method for us to see if it's open, so we need to try / catch it, as it throws an error if you try to close it without it being open

      if ($.prettyPhoto && $.prettyPhoto.close) try {
        $.prettyPhoto.close();
      } catch (e) {}
      var argReplacementCount = 0;

      var replacePathVarWithArg = function replacePathVarWithArg() {
        var arg = args[argReplacementCount];
        argReplacementCount++;

        if (arg) {
          return arg;
        }

        return '';
      }; // manually track page on navigation


      var pathVarReplacementRegex = /(?=:)[\0-\uFFFF]*?(?=(\/|\?|$))/g;
      var pathHashBangReplacementRegex = /(!|#!)/;
      var currentPathWithVars = path.replace(pathVarReplacementRegex, replacePathVarWithArg).replace(pathHashBangReplacementRegex, '');
      var gaName = window.GoogleAnalyticsObject;
      window[gaName]('bidjs.set', 'page', currentPathWithVars);
      window[gaName]('bidjs.set', 'hostname', window.location.hostname);
      window[gaName]('bidjs.send', 'pageview');

      if (myApp.ent.config && myApp.ent.config.attributes.options && myApp.ent.config.attributes.options.analyticsCode) {
        var additionalAnalyticsNamespace = myApp.ent.config.attributes.options.analyticsNamespace ? "".concat(myApp.ent.config.attributes.options.analyticsNamespace, ".") : '';
        window[gaName]("".concat(additionalAnalyticsNamespace, "set"), 'page', currentPathWithVars);
        window[gaName]("".concat(additionalAnalyticsNamespace, "set"), 'hostname', window.location.hostname);
        window[gaName]("".concat(additionalAnalyticsNamespace, "send"), 'pageview');
      }
    };
  }

  return {
    initialize: function initialize() {
      initRoutes(this);
      setPageMeta = setPage.bind(this, myApp.ent.config && myApp.ent.config.attributes.options && myApp.ent.config.attributes.options.allowTitleChange, myApp.ent.config && myApp.ent.config.attributes.options && myApp.ent.config.attributes.options.allowMetaDescriptionChange);
    },
    onRoute: function onRoute() {
      $('#myModal').hide();
    },
    doRoute: function doRoute(event, router) {
      if (!event || !event.href) {
        // only allow calls to this in bidjs from the search filter code
        return;
      }

      myApp.router.navigate(event.href, {
        trigger: true
      });
    },
    nullRequest: function nullRequest() {
      myApp.mainRegion.show(new PageApp.Views.NullView());
      setPageMeta();
    },
    notFoundRequest: function notFoundRequest(path) {
      if (hasMissingUserDetails()) {
        return redirectToUserSettings();
      }

      myApp.mainRegion.show(new PageApp.Views.ErrorNotFoundView({
        model: myApp.ent.fourOFour
      }));
      setPageMeta();
    },
    createAccountRequest: function createAccountRequest() {
      if (myApp.ent.user.isLoggedIn() || hasOAuthEnabled()) {
        return redirectToHome();
      }

      myApp.myModalRegion.show(new PageApp.Views.WaitingView());
      myApp.utils.ajax.get(null, myApp.utils.ajax.getApiEndpoint('createAccount'), _.bind(function (models) {
        myApp.ent.config.set('page', 'create account');
        myApp.vent.trigger('account:create:display', models);
        setPageMeta(models && models.metaModel);
        myApp.myModalRegion.empty();
      }, this));
    },
    mySettingsRequest: function mySettingsRequest() {
      if (myApp.ent.user.isLoggedIn()) {
        myApp.myModalRegion.show(new PageApp.Views.WaitingView());
        myApp.utils.ajax.get(null, myApp.utils.ajax.getApiEndpoint('mySettings'), _.bind(function (models) {
          myApp.ent.config.set('page', 'my settings');
          myApp.vent.trigger('account:mysettings:display', models);
          setPageMeta(models && models.metaModel);
          myApp.myModalRegion.empty();
        }, this));
      } else {
        myApp.mainRegion.empty();
        myApp.router.navigate('#!/login', {
          trigger: true
        });
      }
    },
    confirmEmailRequest: function confirmEmailRequest() {
      if (hasOAuthEnabled()) {
        return redirectToHome();
      }

      myApp.myModalRegion.show(new PageApp.Views.WaitingView());
      myApp.utils.ajax.get(null, myApp.utils.ajax.getApiEndpoint('confirmEmail') + '?id=' + getParameterByName('id') + '&key=' + getParameterByName('key'), _.bind(function (models) {
        myApp.ent.config.set('page', 'create account');
        myApp.vent.trigger('account:activate:success', models);
        setPageMeta(models && models.MetaModel);
        myApp.myModalRegion.empty();
      }, this));
    },
    forgottenPasswordRequest: function forgottenPasswordRequest() {
      if (myApp.ent.user.isLoggedIn() || hasOAuthEnabled()) {
        return redirectToHome();
      }

      myApp.myModalRegion.show(new PageApp.Views.WaitingView());
      myApp.utils.ajax.get(null, myApp.utils.ajax.getApiEndpoint('forgottenPassword'), _.bind(function (response) {
        setPageMeta(response && response.models && response.models.MetaModel);
        myApp.vent.trigger('account:forgotten:display', response);
        myApp.myModalRegion.empty();
      }, this));
    },
    changePasswordRequest: function changePasswordRequest() {
      if (myApp.ent.user.isLoggedIn() || hasOAuthEnabled()) {
        return redirectToHome();
      }

      myApp.myModalRegion.show(new PageApp.Views.WaitingView());
      myApp.utils.ajax.get(null, myApp.utils.ajax.getApiEndpoint('changePassword') + '?id=' + getParameterByName('id') + '&key=' + getParameterByName('key'), _.bind(function (response) {
        setPageMeta({
          metaTitle: 'Change Password'
        });
        myApp.vent.trigger('account:change:password:display', response);
        myApp.myModalRegion.empty();
      }, this));
    },
    logoutRequest: function logoutRequest(e) {
      myApp.vent.trigger('authentication:remove', false);
    },
    loginRequest: function loginRequest(e) {
      if (myApp.ent.user.isLoggedIn()) {
        return redirectToHome();
      }

      if (myApp.utils.oAuth.isUsingOAuth()) {
        var redirectUrl = encodeURIComponent(window.location.origin + window.location.pathname + myApp.ent.config.get('referer'));
        var loginEndpoint = myApp.ent.config.getOAuthLoginEndpoint().replace('<<REDIRECT>>', redirectUrl);
        window.location.replace(loginEndpoint);
      } else {
        myApp.vent.trigger('login:display');
      }
    },
    homeRequest: function homeRequest() {
      if (hasMissingUserDetails()) {
        return redirectToUserSettings();
      }

      myApp.myModalRegion.show(new PageApp.Views.WaitingView());
      myApp.utils.ajax.get(null, myApp.utils.ajax.getApiEndpoint('home'), _.bind(function (response) {
        if (checkForError(response)) return;
        myApp.ent.config.set('page', 'home');
        response.models.options = {
          ignoreEvents: true
        };
        myApp.controllers.homeCalRouter = new PageApp.Controllers.HomeCalRouter();
        myApp.controllers.homeCalRouter.initialize();
        myApp.vent.trigger('homecal:display', response.models);
        setPageMeta(response && response.models && response.models.MetaModel);
        myApp.myModalRegion.empty();
      }, this));
    },
    calendarRequest: function calendarRequest() {
      if (hasMissingUserDetails()) {
        return redirectToUserSettings();
      }

      myApp.myModalRegion.show(new PageApp.Views.WaitingView());
      myApp.utils.ajax.get(null, myApp.utils.ajax.getApiEndpoint('auctionCalendar'), _.bind(function (response) {
        if (checkForError(response)) return;
        myApp.ent.config.set('page', 'calendar');
        response.models.options = {
          ignoreEvents: true
        };
        myApp.controllers.homeCalRouter = new PageApp.Controllers.HomeCalRouter();
        myApp.controllers.homeCalRouter.initialize();
        myApp.vent.trigger('homecal:display', response.models);
        setPageMeta(response && response.models && response.models.MetaModel);
        myApp.myModalRegion.empty();
      }, this));
    },
    auctionCalendar: function auctionCalendar() {
      if (hasMissingUserDetails()) {
        return redirectToUserSettings();
      }

      myApp.myModalRegion.show(new PageApp.Views.WaitingView());
      myApp.utils.ajax.get(null, myApp.utils.ajax.getApiEndpoint('auctionCalendar'), _.bind(function (response) {
        if (checkForError(response)) return;
        setPageMeta(response && response.models && response.models.MetaModel);
        myApp.ent.config.set('page', 'calendar');
        myApp.vent.trigger('homecal:display', response.models);
        myApp.myModalRegion.empty();
      }, this));
    },
    content: function content(page) {
      if (hasMissingUserDetails()) {
        return redirectToUserSettings();
      }

      myApp.myModalRegion.show(new PageApp.Views.WaitingView());
      myApp.utils.ajax.get(null, myApp.utils.ajax.getApiEndpoint('content/plain') + '/' + page, _.bind(function (response) {
        if (checkForError(response)) return;
        setPageMeta(response && response.models && response.models.MetaModel);
        myApp.ent.config.set('page', 'content');
        myApp.vent.trigger('content:display', response);
        myApp.myModalRegion.empty();
      }, this));
    },
    auctionDetailsSecureRequest: function auctionDetailsSecureRequest(auctionId, query) {
      if (myApp.ent.user.isLoggedIn()) {
        if (hasMissingUserDetails()) {
          return redirectToUserSettings();
        }

        return this.auctionDetailsRequest(auctionId, query);
      } else {
        myApp.vent.trigger('login:display', {
          'originator': 'auctionland'
        });
      }
    },
    auctionDetailsRequest: function auctionDetailsRequest(auctionId, query) {
      if (hasMissingUserDetails()) {
        return redirectToUserSettings();
      } // note from Ralph: I'm not sure how this is working, as biddingRegion is not defined


      if (typeof biddingRegion !== 'undefined' && biddingRegion) {
        // eslint-disable-line no-undef
        new PageApp.Views.PaginationWaitingView({
          el: biddingRegion
        }).render(); // eslint-disable-line no-undef
      } else {
        myApp.myModalRegion.show(new PageApp.Views.WaitingView());
      }

      var url = myApp.utils.ajax.getApiEndpoint('auctionDetails') + '/' + auctionId + '?' + query;
      myApp.utils.ajax.get(null, url, _.bind(function (response) {
        if (checkForError(response)) {
          myApp.mainRegion.show(new PageApp.Views.ErrorNotFoundView({
            model: myApp.ent.fourOFour
          }));
          myApp.myModalRegion.empty();
          return;
        }

        if (response.models.LandingModel.auction.redirectToWebcast) {
          myApp.router.navigate('#!/webcast2/' + auctionId, {
            trigger: true,
            replace: true
          });
          return;
        }

        setPageMeta(response && response.models && response.models.MetaModel);
        myApp.ent.config.set({
          'page': 'auctionland',
          'secureQuery': '#!/' + response.models.LandingModel.secureQuery
        });
        if (checkForError(response)) return;
        setSecurePath(response.models.LandingModel, 'auctionland');
        var config = {
          landingModel: response.models.LandingModel
        };
        myApp.vent.trigger('landing:display', config);
        myApp.myModalRegion.empty();
      }, this));
    },
    webcastRequest: function webcastRequest(auctionId) {
      if (hasMissingUserDetails()) {
        return redirectToUserSettings();
      }

      myApp.myModalRegion.show(new PageApp.Views.WaitingView());
      var url = myApp.utils.ajax.getApiEndpoint('webcast2') + '/' + auctionId;
      myApp.utils.ajax.get(null, url, _.bind(function (models) {
        if (checkForError(models)) return;

        if (models.preBidding) {
          myApp.router.navigate('#!/auctionDetails/' + auctionId, {
            trigger: true,
            replace: true
          });
          return;
        }

        myApp.controllers.webcastRouter.initialize();
        myApp.vent.trigger('webcast:display', models);
        setPageMeta(models && {
          metaTitle: models.pageTitle || null,
          metaDescription: models.pageDescription || null
        });
        myApp.myModalRegion.empty();
      }, this));
    },
    searchRequest: function searchRequest(query) {
      if (hasMissingUserDetails()) {
        return redirectToUserSettings();
      }

      myApp.myModalRegion.show(new PageApp.Views.WaitingView());
      myApp.utils.ajax.get(null, myApp.utils.ajax.getApiEndpoint('search') + '?' + query, _.bind(function (response) {
        if (checkForError(response)) return;
        setPageMeta(response && response.models && response.models.MetaModel);
        setSecurePath(response.models.LandingModel, 'searchland');
        myApp.vent.trigger('landing:display', {
          landingModel: response.models.LandingModel
        });
        myApp.myModalRegion.empty();
      }, this));
    },
    marketplaceRequest: function marketplaceRequest(query) {
      if (hasMissingUserDetails()) {
        return redirectToUserSettings();
      }

      myApp.myModalRegion.show(new PageApp.Views.WaitingView());
      myApp.utils.ajax.get(null, myApp.utils.ajax.getApiEndpoint('marketplace') + '?' + query, _.bind(function (response) {
        if (checkForError(response)) return;
        setPageMeta(response && response.models && response.models.MetaModel);
        setSecurePath(response.models.LandingModel, 'marketland');
        myApp.vent.trigger('landing:display', {
          landingModel: response.models.LandingModel
        });
        myApp.myModalRegion.empty();
      }, this));
    },
    itemDetailsSecureRequest: function itemDetailsSecureRequest(auctionId, itemId) {
      if (myApp.ent.user.isLoggedIn()) {
        if (hasMissingUserDetails()) {
          return redirectToUserSettings();
        }

        return this.itemDetailsRequest(itemId);
      } else {
        myApp.vent.trigger('login:display');
      }
    },
    itemDetailsRequest: function itemDetailsRequest(auctionId, itemId) {
      if (hasMissingUserDetails()) {
        return redirectToUserSettings();
      }

      myApp.myModalRegion.show(new PageApp.Views.WaitingView());
      myApp.utils.ajax.get(null, myApp.utils.ajax.getApiEndpoint('itemDetails') + '/' + itemId, _.bind(function (response) {
        if (checkForError(response)) return;
        setPageMeta(response && response.models && response.models.MetaModel);
        setSecurePath(response.models.SingleItemModel, 'itemland');
        myApp.vent.trigger('itemland:display', response.models.SingleItemModel);
        myApp.myModalRegion.empty();
      }, this));
    },
    prevNextItemDetailsRequest: function prevNextItemDetailsRequest(itemId, prevnext) {
      if (hasMissingUserDetails()) {
        return redirectToUserSettings();
      }

      myApp.myModalRegion.show(new PageApp.Views.WaitingView());
      myApp.utils.ajax.get(null, myApp.utils.ajax.getApiEndpoint('prevNextItemDetails') + '/' + itemId + '/' + prevnext, _.bind(function (response) {
        if (checkForError(response)) return;
        setPageMeta(response && response.models && response.models.MetaModel);
        setSecurePath(response.models.SingleItemModel, 'itemland');
        myApp.ent.config.set({
          'page': 'itemland',
          'secureQuery': '#!/' + response.models.SingleItemModel.secureQuery
        });
        myApp.vent.trigger('itemland:display', response.models.SingleItemModel);
        myApp.myModalRegion.empty();
      }, this));
    },
    myBidsRequest: function myBidsRequest(filterId, query) {
      if (hasMissingUserDetails()) {
        return redirectToUserSettings();
      }

      if (typeof biddingRegion !== 'undefined' && biddingRegion) {
        // eslint-disable-line no-undef
        new PageApp.Views.PaginationWaitingView({
          el: biddingRegion
        }).render(); // eslint-disable-line no-undef
      } else {
        myApp.myModalRegion.show(new PageApp.Views.WaitingView());
      }

      if (myApp.ent.user.isLoggedIn()) {
        var url = myApp.utils.ajax.getApiEndpoint('myBids') + '/';
        if (filterId) url += filterId;

        if (query) {
          url = url + '?' + query;
        }

        myApp.utils.ajax.get(null, url, _.bind(function (response) {
          if (checkForError(response)) return;
          setPageMeta(response && response.models && response.models.MetaModel);
          myApp.ent.config.set({
            'page': 'myBidsLand',
            'secureQuery': '#!/' + response.models.MyBidsModel.secureQuery
          });
          myApp.vent.trigger('mybids:display', response.models.MyBidsModel);
          myApp.myModalRegion.empty();
        }, this));
      } else {
        myApp.mainRegion.empty();
        myApp.router.navigate('#!/login', {
          trigger: true
        });
      }
    },
    registerForAuctionRequest: function registerForAuctionRequest(auctionId) {
      if (hasMissingUserDetails()) {
        return redirectToUserSettings();
      }

      myApp.myModalRegion.show(new PageApp.Views.WaitingView());

      if (!myApp.ent.user.isLoggedIn()) {
        myApp.router.navigate('#!/login', {
          trigger: true
        });
      } else {
        var myReferer = encodeURIComponent(myApp.ent.config.get('referer'));
        myApp.utils.ajax.get(null, myApp.utils.ajax.getApiEndpoint('registerForAuction') + '/' + auctionId + '?referer=' + myReferer, _.bind(function (response) {
          myApp.vent.trigger('register:display', response);
          setPageMeta(response && response.metaModel);
          myApp.myModalRegion.empty();
        }, this));
      }
    }
  };
};
"use strict";

PageApp.Ent.PurchaseEntity = Backbone.Model.extend({
  initialise: function initialise(options) {},
  setModelForBuyNow: function setModelForBuyNow(attributes, screen) {
    var closed = myApp.ent.timedHelper.isClosed(attributes);
    var won = myApp.ent.timedHelper.isWon(attributes);
    var myModel = {
      screen: screen,
      id: attributes.id,
      registrantId: attributes.registrant.id,
      title: attributes.localeSensitive.title,
      buyersPremium: attributes.buyersPremium,
      currencySymbol: attributes.localeSensitive.currency.symbol,
      minimumOfferOrBuyNowPrice: attributes.timedBiddingInfo.minimumOfferOrBuyNowPrice,
      numberOrRef: myApp.ent.timedHelper.getNumberOrRef(attributes),
      closed: closed,
      userStatusMessage: attributes.userStatus.userStatusMessage,
      won: won
    };
    this.set(myModel);
    return this;
  },
  setModelForMakeOffer: function setModelForMakeOffer(attributes, dialog, serverError) {
    var closed = myApp.ent.timedHelper.isClosed(attributes);
    var won = myApp.ent.timedHelper.isWon(attributes);
    var myHighestOffer = this.getMyHighestOffer(attributes);
    var numberOfOffers = this.getNumberOfOffers(attributes);
    var allowedMoreOffers = !closed && numberOfOffers < attributes.clientOptions.maxOffersPerItem;

    if (attributes.itemType.bulkBuyItem) {
      allowedMoreOffers = allowedMoreOffers && attributes.timedBiddingInfo.numberOfUnitsRemaining > 0;
    }

    var resultMessage = this.getOfferMessage(attributes, dialog);
    var hasResult, resultClass;

    if (resultMessage && resultMessage.length > 0) {
      hasResult = true;
      resultClass = 'text-primary';

      if (myHighestOffer) {
        if (myHighestOffer.statusName === 'rejected') {
          resultClass = 'text-danger';
        } else if (myHighestOffer.statusName === 'accepted') {
          resultClass = 'text-success';
        }
      }
    }

    if (serverError) {
      hasResult = true;
      resultClass = 'text-danger';
      resultMessage = serverError.message;
    }

    if (!this.get('whichAddress')) {
      var whichAddress = 0;
    }

    var myModel = {
      id: attributes.id,
      registrantId: attributes.registrant.id,
      title: attributes.localeSensitive.title,
      buyersPremium: attributes.buyersPremium,
      currencySymbol: attributes.localeSensitive.currency.symbol,
      minimumOfferOrBuyNowPrice: attributes.timedBiddingInfo.minimumOfferOrBuyNowPrice,
      numberOrRef: myApp.ent.timedHelper.getNumberOrRef(attributes),
      closed: closed,
      userStatusMessage: attributes.userStatus.userStatusMessage,
      won: won,
      isMultiItem: attributes.itemType.bulkBuyItem,
      allowedMoreOffers: allowedMoreOffers,
      hasOffers: numberOfOffers > 0,
      displayPrice: attributes.timedBiddingInfo.displayPrice,
      numberOfUnits: attributes.timedBiddingInfo.numberOfUnits,
      numberOfUnitsRemaining: attributes.timedBiddingInfo.numberOfUnitsRemaining,
      numberOfOffers: numberOfOffers,
      myHighestOffer: myHighestOffer,
      whichAddress: whichAddress,
      resultMessage: resultMessage,
      hasResult: hasResult,
      resultClass: resultClass
    };
    this.set(myModel);
    return this;
  },
  setModelForTransfer: function setModelForTransfer(attributes, screen) {
    var closed = myApp.ent.timedHelper.isClosed(attributes);
    var won = myApp.ent.timedHelper.isWon(attributes);
    var myModel = {
      screen: screen,
      id: attributes.id,
      registrantId: attributes.registrant.id,
      title: attributes.localeSensitive.title,
      numberOrRef: myApp.ent.timedHelper.getNumberOrRef(attributes),
      closed: closed,
      userStatusMessage: attributes.userStatus.userStatusMessage,
      won: won
    };
    this.set(myModel);
    return this;
  },
  setModelForTender: function setModelForTender(attributes, dialog) {
    var closed = myApp.ent.timedHelper.isClosed(attributes);
    var won = myApp.ent.timedHelper.isWon(attributes);
    var numberOfOffers = this.getNumberOfOffers(attributes);
    var allowedMoreOffers = !closed && numberOfOffers < attributes.clientOptions.maxOffersPerItem;
    var message = this.getTenderOfferMessage(attributes, dialog);
    var hasMessage = message && message.length > 0;
    var myModel = {
      id: attributes.id,
      registrantId: attributes.registrant.id,
      title: attributes.localeSensitive.title,
      buyersPremium: attributes.buyersPremium,
      currencySymbol: attributes.localeSensitive.currency.symbol,
      numberOrRef: myApp.ent.timedHelper.getNumberOrRef(attributes),
      closed: closed,
      userStatusMessage: attributes.userStatus.userStatusMessage,
      won: won,
      allowedMoreOffers: allowedMoreOffers,
      hasOffers: numberOfOffers > 0,
      displayPrice: attributes.timedBiddingInfo.displayPrice,
      numberOfUnits: attributes.timedBiddingInfo.numberOfUnits,
      numberOfOffers: numberOfOffers,
      hasMessage: hasMessage,
      message: message,
      unitOfMeasurement: attributes.timedBiddingInfo.unitOfMeasurement,
      isTenderPct: attributes.timedBiddingInfo.tenderPctEnabled
    };
    this.set(myModel);
    return this;
  },
  getTenderOfferMessage: function getTenderOfferMessage(attributes, dialog) {
    var numberOfOffers = this.getNumberOfOffers(attributes);
    var message;

    if (!dialog && numberOfOffers > 0) {
      message = this.getTenderOfferMessageShort(attributes);
    } else if (numberOfOffers === 1) {
      message = this.getSingleTenderOfferMessage(attributes);
    } else if (numberOfOffers > 1) {
      message = this.getMultipleTenderOfferMessage(attributes);
    }

    return message;
  },
  getTenderOfferMessageShort: function getTenderOfferMessageShort(attributes) {
    var message = myApp.reqres.request('i16:getString', 'ItemMessageStatus_TENDER_MESSAGE_SHORT');
    message = message.replace('{0}', this.getNumberOfOffers(attributes));
    message = message.replace('{1}', attributes.clientOptions.maxOffersPerItem);
    return message;
  },
  getSingleTenderOfferMessage: function getSingleTenderOfferMessage(attributes) {
    var myOffer = attributes.timedUserInfo.offerModels[0];
    var isTenderPct = attributes.timedBiddingInfo.tenderPctEnabled;
    var message = myApp.reqres.request('i16:getString', 'ItemMessageStatus_TENDER_MESSAGE');

    if (isTenderPct) {
      message = message.replace('{0}', myApp.utils.types.toFormattedNumber(myOffer.amount));
      message = message.replace('{1}', '%');
    } else {
      message = message.replace('{0}', attributes.localeSensitive.currency.symbol);
      message = message.replace('{1}', myApp.utils.types.toFormattedNumber(myOffer.amount));
    }

    message = message.replace('{2}', myOffer.statusName);
    message = message.replace('{3}', this.getNumberOfOffers(attributes));
    message = message.replace('{4}', attributes.clientOptions.maxOffersPerItem);
    return message;
  },
  getMultipleTenderOfferMessage: function getMultipleTenderOfferMessage(attributes, dialog) {
    var isTenderPct = attributes.timedBiddingInfo.tenderPctEnabled;
    var offersString = this.getAllOffersAsString(attributes);
    var per = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_UNIT_OF_MEASUREMENT_PER');
    var unitOfMeasurement = attributes.timedBiddingInfo.unitOfMeasurement;
    var message = myApp.reqres.request('i16:getString', 'ItemMessageStatus_MULTIPLE_TENDER_MESSAGE');

    if (isTenderPct) {
      message = message.replace('{0}', unitOfMeasurement);
    } else {
      message = message.replace('{0}', ' ' + per + ' ' + unitOfMeasurement);
    }

    message = message.replace('{1}', offersString);
    message = message.replace('{2}', this.getNumberOfOffers(attributes));
    message = message.replace('{3}', attributes.clientOptions.maxOffersPerItem);
    return message;
  },
  getOfferMessage: function getOfferMessage(attributes, dialog) {
    var message = false;
    var numberOfOffers = this.getNumberOfOffers(attributes);
    var closed = myApp.ent.timedHelper.isClosed(attributes);

    if (dialog) {
      message = this.getOfferMessageForReal(attributes);
    } else if (numberOfOffers > 0 && !closed && myApp.ent.user.isLoggedIn() && attributes.registrant.approved) {
      message = this.getOfferMessageForReal(attributes);
    }

    return message;
  },
  getOfferMessageForReal: function getOfferMessageForReal(attributes) {
    var myHighestOffer = this.getMyHighestOffer(attributes);

    if (!myHighestOffer) {
      return false;
    }

    var message;

    if (attributes.itemType.bulkBuyItem) {
      message = myApp.reqres.request('i16:getString', 'ItemMessageStatus_BULK_OFFER_MESSAGE');
      message = message.replace('{0}', attributes.localeSensitive.currency.symbol);
      message = message.replace('{1}', myApp.utils.types.toFormattedNumber(myHighestOffer.amount));
      message = message.replace('{2}', myHighestOffer.numberOfUnitsWanted);
      message = message.replace('{3}', myHighestOffer.statusName);
      message = message.replace('{4}', this.getNumberOfOffers(attributes));
      message = message.replace('{5}', this.getNumberAcceptedOffers(attributes));
    } else {
      message = myApp.reqres.request('i16:getString', 'ItemMessageStatus_OFFER_MESSAGE');
      message = message.replace('{0}', attributes.localeSensitive.currency.symbol);
      message = message.replace('{1}', myApp.utils.types.toFormattedNumber(myHighestOffer.amount));
      message = message.replace('{2}', myHighestOffer.statusName);
      message = message.replace('{3}', this.getNumberOfOffers(attributes));
      message = message.replace('{4}', attributes.clientOptions.maxOffersPerItem);
    }

    return message;
  },
  getHighestAcceptedOffer: function getHighestAcceptedOffer(attributes) {
    for (var key in attributes.timedUserInfo.offerModels) {
      var statusName = attributes.timedUserInfo.offerModels[key].statusName;

      if (statusName === 'accepted' || statusName === 'transfer') {
        return attributes.timedUserInfo.offerModels[key];
      }
    }
  },
  getNumberAcceptedOffers: function getNumberAcceptedOffers(attributes) {
    var count = 0;

    for (var key in attributes.timedUserInfo.offerModels) {
      var statusName = attributes.timedUserInfo.offerModels[key].statusName;

      if (statusName === 'accepted' || statusName === 'transfer') {
        count++;
      }
    }

    return count;
  },
  getNumberOfOffers: function getNumberOfOffers(attributes) {
    if (!attributes.timedUserInfo.offerModels) return 0;
    return attributes.timedUserInfo.offerModels.length;
  },
  getMyHighestOffer: function getMyHighestOffer(attributes) {
    for (var key in attributes.timedUserInfo.offerModels) {
      if (attributes.timedUserInfo.offerModels[key].userId === myApp.ent.user.get('id')) {
        return attributes.timedUserInfo.offerModels[key];
      }
    }
  },
  getAllOffersAsString: function getAllOffersAsString(attributes) {
    var isTenderPct = attributes.timedBiddingInfo.tenderPctEnabled;
    var offersString = '';
    var offers = {};
    var offerStatus = '';

    for (var key in attributes.timedUserInfo.offerModels) {
      offerStatus = attributes.timedUserInfo.offerModels[key].statusName;
      var offersWithStatus = offers[offerStatus];

      if (!offersWithStatus) {
        offersWithStatus = '';
        offers[offerStatus] = offersWithStatus;
      }

      if (attributes.timedUserInfo.offerModels[key].userId === myApp.ent.user.get('id')) {
        if (offersWithStatus.length > 0) {
          offersWithStatus = offersWithStatus.concat(', ');
        }

        if (isTenderPct) {
          offersWithStatus = offersWithStatus.concat(attributes.timedUserInfo.offerModels[key].amount);
          offersWithStatus = offersWithStatus.concat('%');
        } else {
          offersWithStatus = offersWithStatus.concat(attributes.localeSensitive.currency.symbol);
          offersWithStatus = offersWithStatus.concat(attributes.timedUserInfo.offerModels[key].amount);
        }

        offers[offerStatus] = offersWithStatus;
      }
    }

    for (var status in offers) {
      if (offersString.length > 0) {
        offersString = offersString.concat('<br>');
      }

      offersString = offersString.concat(myApp.utils.types.capitalise(status) + ': ');
      offersString = offersString.concat(offers[status]);
    }

    return offersString;
  },
  getOfferByStatus: function getOfferByStatus(attributes, status) {
    var offer;
    var o;
    var haveAcceptedOffer = false;
    var havePendingOffer = false;

    for (var key in attributes.timedUserInfo.offerModels) {
      o = attributes.timedUserInfo.offerModels[key];

      if (o.statusName === 'accepted') {
        haveAcceptedOffer = true;
      } else if (o.statusName === 'pending') {
        havePendingOffer = true;
      }

      if (o.statusName === status && (!offer || o.timestamp > offer.timestamp)) {
        offer = o;
      }
    } // Return the most recent offer of the required status. Although if we have an accepted offer don't return
    // non-accepted offers (except for bulk buy). Or if we have pending don't return rejected.
    // Special case for BulkBuy. Return offer regardless.


    if (offer) {
      if (offer.statusName === 'accepted' || attributes.timedBiddingInfo.ofBulkBuyType) {
        return offer;
      } else if (offer.statusName === 'rejected' && !haveAcceptedOffer && !havePendingOffer) {
        return offer;
      } else if (offer.statusName === 'pending' && !haveAcceptedOffer) {
        return offer;
      }
    }
  }
});
"use strict";

PageApp.Ent.Timed2BaseHelper = Backbone.Model.extend({
  defaults: {
    oneday: 24 * 60 * 60 * 1000,
    userStatuses: {
      NOT_WINNING: 0,
      UNDER_RESERVE: 1,
      ITEM_OPEN_USER_HAS_WINNING_BID: 4,
      OUTBID_BY_AUTOBID: 5,
      OUTBID_BY_ANOTHER_BID: 6,
      BIDDER_NOT_APPROVED: 7,
      ITEM_WON: 8,
      ITEM_LOST: 9,
      ITEM_CLOSED: 10,
      ITEM_LOST_TO_MAKE_OFFER: 11,
      ITEM_WON_BY_MAKE_OFFER: 12,
      ITEM_LOST_TO_MAKE_OFFER_NO_BIDS: 13,
      ITEM_LOST_TO_BUY_NOW: 14,
      ITEM_WON_BY_BUY_NOW: 15,
      ITEM_LOST_TO_BUY_NOW_NO_BIDS: 16,
      ITEM_CLOSED_USER_HAS_ACCEPTED_OFFERS: 17,
      ITEM_CLOSED_USER_HAS_NO_ACCEPTED_OFFERS: 18,
      ITEM_OPEN_USER_HAS_ACCEPTED_OFFERS: 19,
      ITEM_OPEN_USER_HAS_NO_ACCEPTED_OFFERS: 20,
      ITEM_WON_BY_TRANSFER: 21,
      ITEM_LOST_TO_TRANSFER: 22,
      ITEM_WON_BY_TENDER_OFFER: 23,
      ITEM_LOST_TO_TENDER_OFFER: 24,
      REGISTERED_SUSPENDED: 30,
      REGISTERED_PAY_DEPOSIT: 31,
      REGISTERED_PENDING: 32,
      REGISTERED_APPROVED: 33,
      REGISTERED_AWAITING_DEPOSIT: 34,
      REGISTERED_NOT: 35,
      REGISTERED_INSUFFICIENT_DATA: 36,
      REGISTERED_ISSUE_WITH_DEPOSIT: 37
    },
    itemStatuses: {
      NEW: 1,
      DRAFT: 2,
      PREVIEW: 3,
      LIVE: 4,
      WITHDRAWN: 5,
      SOLD: 6,
      SOLD_MAKE_OFFER: 7,
      UNSOLD: 8,
      SUSPENDED: 9,
      SOLD_BUY_NOW: 10,
      SOLD_BULK_BUY_FULL: 11,
      SOLD_BULK_BUY_PARTIAL: 12,
      OPEN_BULK_BUY_PARTIAL: 13,
      WITHDRAWN_ENDED: 14,
      TRANSFERRED: 15
    }
  },
  getPlaceBidOfferModel: function getPlaceBidOfferModel(attributes) {
    var offerButtonLabel = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_MAKE_OFFER');
    var offerAction = 'makeoffer';
    var offerActionId = 'makeoffer';
    var offerEnabled = attributes.timedBiddingInfo.buyNowEnabled || attributes.timedBiddingInfo.makeOfferEnabled || attributes.timedBiddingInfo.transferEnabled || attributes.timedBiddingInfo.tenderEnabled || attributes.timedBiddingInfo.tenderPctEnabled;
    var offerMessage;

    if (attributes.timedBiddingInfo.buyNowEnabled) {
      offerAction = 'buynow';
      offerActionId = 'buynow';
      offerButtonLabel = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_BUY_NOW') + ' ' + attributes.localeSensitive.currency.symbol + myApp.utils.types.toFormattedNumber(attributes.timedBiddingInfo.minimumOfferOrBuyNowPrice);
    } else if (attributes.timedBiddingInfo.transferEnabled) {
      offerAction = 'transfer';
      offerActionId = 'transfer';
      offerButtonLabel = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_TRANSFER');
    } else if (attributes.timedBiddingInfo.tenderEnabled) {
      offerAction = 'tender';
      offerActionId = 'tender';

      if (!attributes.timedUserInfo.maxNumberOfOffersMade && !this.isClosed(attributes)) {
        offerButtonLabel = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_TENDER');
      } else {
        offerButtonLabel = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_VIEW_TENDER_OFFERS');
      }
    } else if (attributes.timedBiddingInfo.tenderPctEnabled) {
      offerAction = 'tenderpct';
      offerActionId = 'tenderpct';

      if (!attributes.timedUserInfo.maxNumberOfOffersMade && !this.isClosed(attributes)) {
        offerButtonLabel = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_TENDER');
      } else {
        offerButtonLabel = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_VIEW_TENDER_OFFERS');
      }
    }

    if (myApp.ent.user.isNotLoggedIn() || attributes.registrant.status !== 2) {
      offerAction += ' disabled';
    } // turn buy now off if bidding has exceeded the price..


    if (attributes.timedBiddingInfo.buyNowEnabled) {
      var highest = Math.max(attributes.timedBiddingInfo.highestBid, attributes.timedBiddingInfo.openingBid);

      if (highest >= attributes.timedBiddingInfo.minimumOfferOrBuyNowPrice) {
        offerEnabled = false;
      }
    }

    if (attributes.timedBiddingInfo.tenderEnabled || attributes.timedBiddingInfo.tenderPctEnabled) {
      offerMessage = myApp.ent.purchaseEntity.getTenderOfferMessage(attributes);
    } else {
      offerMessage = myApp.ent.purchaseEntity.getOfferMessage(attributes);
    } // For tender offers we handle offerEnabled differently as we potentially want to display the 'View Tender Offers' button.


    if (attributes.timedBiddingInfo.tenderEnabled || attributes.timedBiddingInfo.tenderPctEnabled) {
      var noOffersMade = !attributes.timedUserInfo.offerModels || attributes.timedUserInfo.offerModels.length === 0;

      if (this.isClosed(attributes) && noOffersMade || attributes.timedBiddingInfo.statusId !== 4 || !this.isPurchaseActive(attributes)) {
        offerEnabled = false;
      }
    } else {
      if (this.isClosed(attributes) || attributes.timedBiddingInfo.statusId !== 4 || !this.isPurchaseActive(attributes) || attributes.timedUserInfo.maxNumberOfOffersMade) {
        offerEnabled = false;
      }
    }

    var model = {
      offerButtonLabel: offerButtonLabel,
      offerEnabled: offerEnabled,
      offerAction: offerAction,
      offerActionId: offerActionId,
      offerMessage: offerMessage
    };
    return model;
  },
  isWinning: function isWinning(attributes) {
    if (myApp.ent.user.isNotLoggedIn()) return false;

    if (this.isClosed(attributes)) {
      return false;
    }

    if (myApp.ent.purchaseEntity.getHighestAcceptedOffer(attributes)) {
      return true; // user is partially winning..
    }

    if (this.isHighestBidder(attributes)) {
      if (attributes.timedBiddingInfo.highestBid >= attributes.timedBiddingInfo.reserve) {
        return true;
      }
    } // return (attributes.timedBiddingInfo.highestOfferUID === myApp.ent.user.get('id'));


    return false;
  },
  isWon: function isWon(attributes) {
    if (myApp.ent.user.isNotLoggedIn()) return false;
    if (!this.isClosed(attributes)) return false;

    if (this.isHighestBidder(attributes)) {
      if (attributes.timedBiddingInfo.highestBid > attributes.timedBiddingInfo.reserve || attributes.itemType.webcastItem) {
        return true;
      }
    }

    if (myApp.ent.purchaseEntity.getHighestAcceptedOffer(attributes)) {
      return true; // user is partially winning..
    }

    return false;
  },
  isLosing: function isLosing(sellingStatus) {
    return sellingStatus === this.attributes.userStatuses.OUTBID_BY_AUTOBID || sellingStatus === this.attributes.userStatuses.OUTBID_BY_ANOTHER_BID || sellingStatus === this.attributes.userStatuses.UNDER_RESERVE;
  },
  isLost: function isLost(sellingStatus) {
    return sellingStatus === this.attributes.userStatuses.ITEM_LOST || sellingStatus === this.attributes.userStatuses.ITEM_LOST_TO_MAKE_OFFER || sellingStatus === this.attributes.userStatuses.ITEM_LOST_TO_MAKE_OFFER_NO_BIDS || sellingStatus === this.attributes.userStatuses.ITEM_LOST_TO_BUY_NOW || sellingStatus === this.attributes.userStatuses.ITEM_LOST_TO_BUY_NOW_NO_BIDS || sellingStatus === this.attributes.userStatuses.ITEM_CLOSED_USER_HAS_NO_ACCEPTED_OFFERS;
  },
  getActualOrNormalEndTime: function getActualOrNormalEndTime(attributes) {
    if (attributes.timedBiddingInfo.actualEndTime > 0) {
      return attributes.timedBiddingInfo.actualEndTime;
    } else {
      return attributes.timedBiddingInfo.endTime;
    }
  },
  isClosed: function isClosed(attributes) {
    if (attributes.timedBiddingInfo.statusId === this.attributes.itemStatuses.DRAFT) {
      return false;
    }

    return this.getActualOrNormalEndTime(attributes) < myApp.ent.config.getNormalisedTimeMillis() || this.isWhollyPurchased(attributes);
  },
  isPurchaseActive: function isPurchaseActive(attributes) {
    if (attributes.itemType.listingItem) {
      return true;
    } else if (attributes.timedBiddingInfo.purchaseCutoff) {
      var purchaseCutoffInMillis = attributes.timedBiddingInfo.purchaseCutoff * 86400000;
      return attributes.timedBiddingInfo.endTime > myApp.ent.config.getNormalisedTimeMillis() + purchaseCutoffInMillis;
    } else {
      return false;
    }
  },
  isOpen: function isOpen(attributes) {
    var rightStatus = attributes.timedBiddingInfo.statusId === this.attributes.itemStatuses.LIVE || attributes.timedBiddingInfo.statusId === this.attributes.itemStatuses.OPEN_BULK_BUY_PARTIAL;
    return rightStatus && attributes.timedBiddingInfo.publicVisible && !this.isClosed(attributes);
  },
  isWithdrawn: function isWithdrawn(attributes) {
    return attributes.timedBiddingInfo.statusId === this.attributes.itemStatuses.WITHDRAWN;
  },
  isWithdrawnEnded: function isWithdrawnEnded(attributes) {
    return attributes.timedBiddingInfo.statusId === this.attributes.itemStatuses.WITHDRAWN_ENDED;
  },
  isWhollyPurchased: function isWhollyPurchased(attributes) {
    if (attributes.itemType.bulkBuyItem) {
      return attributes.timedBiddingInfo.numberOfUnitsRemaining <= 0;
    } else {
      return attributes.timedBiddingInfo.offerAccepted;
    }
  },
  isSuspendedDraftOrPreview: function isSuspendedDraftOrPreview(attributes) {
    return attributes.timedBiddingInfo.statusId === this.attributes.itemStatuses.SUSPENDED || attributes.timedBiddingInfo.statusId === this.attributes.itemStatuses.DRAFT || attributes.timedBiddingInfo.statusId === this.attributes.itemStatuses.PREVIEW;
  },
  isAvailableForBidding: function isAvailableForBidding(attributes) {
    return !this.isWithdrawn(attributes) && !this.isSuspendedDraftOrPreview(attributes) && !this.isClosed(attributes);
  },
  getBiddingAndTimeLeft: function getBiddingAndTimeLeft(attributes, showTimeLeft) {
    var messages = {};

    if (attributes.itemType.webcasty) {
      messages = this.getBiddingAndTimeLeftWebcasty(attributes);
    } else if (attributes.itemType.bulkBuyItem) {
      messages = this.getBiddingAndTimeLeftBulkBuy(attributes);
    } else if (attributes.itemType.lotItem) {
      messages = this.getBiddingAndTimeLeftLot(attributes);
    } else {
      messages = this.getBiddingAndTimeLeftListing(attributes);
    }

    if (!messages.biddingStatusMessage && showTimeLeft) {
      return messages.timeLeftMessage;
    }

    if (!messages.timeLeftMessage) {
      return messages.biddingStatusMessage;
    }

    return messages.biddingStatusMessage + (showTimeLeft ? ' : ' + messages.timeLeftMessage : '');
  },
  getBiddingAndTimeLeftListing: function getBiddingAndTimeLeftListing(attributes) {
    var messages = {};

    if (this.isOpen(attributes)) {
      var timeZone = attributes.timeZone;
      var endTime = attributes.timedBiddingInfo.endTime;
      var msg = myApp.reqres.request('i16:getString', 'ItemMessageStatus_LISTING_ENDS_MESSAGE');
      var locale = myApp.ent.user.getLocale();
      var dateAndTimeStr = this.getTimezonedDateString(endTime, locale, timeZone.code) + ' ' + this.getTimezonedTimeString(endTime, timeZone.code);
      messages.biddingStatusMessage = msg.replace('{0}', dateAndTimeStr);
    } else {
      messages.biddingStatusMessage = this.getClosedBiddingMessage(attributes);
    }

    return messages;
  },
  getBiddingAndTimeLeftLot: function getBiddingAndTimeLeftLot(attributes) {
    var messages = {};

    if (this.isOpen(attributes)) {
      var timeZone = attributes.timeZone;

      if (attributes.timedBiddingInfo.overtimeBidding) {
        messages.biddingStatusMessage = '';
      } else {
        // BD-2562 - Don't display bidding status for John Pye
        if (attributes.timedBiddingInfo.showBidStatusEndDate) {
          var now = myApp.ent.config.getNormalisedTimeMillis();
          var timeLeft = attributes.timedBiddingInfo.endTime - now;

          if (timeLeft < this.get('oneday')) {
            messages.biddingStatusMessage = 'timeLeft less than 1 day';
            attributes.timedBiddingInfo.oneDayTimer = true;
          } else {
            var msg = myApp.reqres.request('i16:getString', 'ItemMessageStatus_LOT_ENDS_MESSAGE');
            var locale = myApp.ent.user.getLocale();
            msg = msg.replace('{0}', this.getTimezonedDateString(attributes.timedBiddingInfo.endTime, locale, timeZone.code));
            msg = msg.replace('{1}', this.getTimezonedTimeString(attributes.timedBiddingInfo.endTime, timeZone.code));
            messages.biddingStatusMessage = msg;
          }
        } else {
          messages.biddingStatusMessage = '';
        }
      }
    } else {
      messages.biddingStatusMessage = this.getClosedBiddingMessage(attributes);
    }

    return messages;
  },
  getBiddingAndTimeLeftBulkBuy: function getBiddingAndTimeLeftBulkBuy(attributes) {
    var messages = {};

    if (this.isOpen(attributes)) {
      var timeZone = attributes.timeZone;
      var endTime = attributes.timedBiddingInfo.endTime;
      var locale = myApp.ent.user.getLocale();
      var msg = myApp.reqres.request('i16:getString', 'ItemMessageStatus_BULKBUYITEM_ENDS_MESSAGE');
      var dateAndTimeStr = this.getTimezonedDateString(endTime, locale, timeZone.code) + ' ' + this.getTimezonedTimeString(endTime, timeZone.code);
      messages.timeLeftMessage = msg.replace('{0}', dateAndTimeStr);
    } else {
      messages.biddingStatusMessage = this.getClosedBiddingMessage(attributes);
    }

    return messages;
  },
  getBiddingAndTimeLeftWebcasty: function getBiddingAndTimeLeftWebcasty(attributes) {
    var messages = {};

    if (this.isOpen(attributes) && attributes.timedBiddingInfo.publicVisible && !this.isClosed(attributes)) {
      var endTime = attributes.timedBiddingInfo.endTime;
      var now = myApp.ent.config.getNormalisedTimeMillis();
      var timeZone = attributes.timeZone;

      if (endTime > now) {
        // messages.timeLeftMessage = DateHelper.getTimeLeft(getDates().getAuctionStarts(), getDates().getTimeZone(), true);
        messages.timeLeftMessage = endTime;
      } else {
        messages.timeLeftMessage = null;
      }

      var msg = myApp.reqres.request('i16:getString', 'WebcastCodes_WC_LIVE_BIDDING_STARTS');
      var locale = myApp.ent.user.getLocale();
      var auctionStarts = attributes.timedBiddingInfo.auctionStarts;
      var auctionStartsDateStr = this.getTimezonedDateString(auctionStarts, locale, timeZone.code);
      var auctionStartsTimeStr = this.getTimezonedTimeString(auctionStarts, timeZone.code);

      if (msg.indexOf('{0, jdate, S}') > -1) {
        msg = msg.replace('{0, jdate, S}', auctionStartsDateStr);
      } else if (msg.indexOf('{0, jdate, F}') > -1) {
        msg = msg.replace('{0, jdate, F}', auctionStartsDateStr);
      }

      if (msg.indexOf('{0, jtime, S}') > -1) {
        msg = msg.replace('{0, jtime, S}', auctionStartsTimeStr);
      } else if (msg.indexOf('{0, jtime, F}') > -1) {
        msg = msg.replace('{0, jtime, F}', auctionStartsTimeStr);
      }

      messages.biddingStatusMessage = msg;
      messages.timeLeftMessage = null;
    } else {
      messages.biddingStatusMessage = this.getClosedBiddingMessage(attributes);
    }

    return messages;
  },
  getClosedBiddingMessage: function getClosedBiddingMessage(attributes) {
    if (attributes.itemType.webcasty) {
      return this.getWebcastyClosedBiddingMessage(attributes);
    } else {
      return this.getOtherClosedBiddingMessage(attributes);
    }
  },
  getOtherClosedBiddingMessage: function getOtherClosedBiddingMessage(attributes) {
    var biddingStatusMessage;

    if ((this.isWithdrawn(attributes) || this.isWithdrawnEnded(attributes)) && attributes.timedBiddingInfo.publicVisible) {
      biddingStatusMessage = myApp.reqres.request('i16:getString', 'ItemMessageStatus_ITEM_WITHDRAWN');
    } else if (this.isSuspendedDraftOrPreview(attributes) || !attributes.timedBiddingInfo.publicVisible) {
      biddingStatusMessage = myApp.reqres.request('i16:getString', 'ItemMessageStatus_ITEM_SUSPENDED');
    } else if (this.isClosed(attributes)) {
      if (this.isWhollyPurchased(attributes)) {
        if (attributes.timedBiddingInfo.makeOfferEnabled) {
          biddingStatusMessage = myApp.reqres.request('i16:getString', 'ItemMessageStatus_LISTING_CLOSED_MESSAGE_SOLD_MAKE_OFFER');
        } else if (attributes.timedBiddingInfo.buyNowEnabled) {
          biddingStatusMessage = myApp.reqres.request('i16:getString', 'ItemMessageStatus_LISTING_CLOSED_MESSAGE_SOLD_BUY_NOW');
        } else if (attributes.timedBiddingInfo.tenderEnabled) {
          biddingStatusMessage = myApp.reqres.request('i16:getString', 'ItemMessageStatus_LISTING_CLOSED_MESSAGE_SOLD_TENDER');
        } else if (attributes.timedBiddingInfo.tenderPctEnabled) {
          biddingStatusMessage = myApp.reqres.request('i16:getString', 'ItemMessageStatus_LISTING_CLOSED_MESSAGE_SOLD_TENDER_PCT');
        } else if (attributes.timedBiddingInfo.transferEnabled) {
          biddingStatusMessage = myApp.reqres.request('i16:getString', 'ItemMessageStatus_LISTING_CLOSED_MESSAGE_TRANSFERRED');
        } else {
          biddingStatusMessage = 'Closed'; // We should not see this message
        }
      } else {
        if (attributes.itemType.lotItem) {
          biddingStatusMessage = myApp.reqres.request('i16:getString', 'ItemMessageStatus_LOT_CLOSED_MESSAGE');
        } else {
          var timeZone = attributes.timeZone;
          biddingStatusMessage = myApp.reqres.request('i16:getString', 'ItemMessageStatus_LISTING_CLOSED_MESSAGE');
          var locale = myApp.ent.user.getLocale();
          biddingStatusMessage = biddingStatusMessage.replace('{0}', this.getTimezonedDateString(this.getActualOrNormalEndTime(attributes), locale, timeZone.code));
          biddingStatusMessage = biddingStatusMessage.replace('{1}', this.getTimezonedTimeString(this.getActualOrNormalEndTime(attributes), timeZone.code));
        }
      }
    }

    return biddingStatusMessage;
  },
  getWebcastyClosedBiddingMessage: function getWebcastyClosedBiddingMessage(attributes) {
    var biddingStatusMessage;

    if ((this.isWithdrawn(attributes) || this.isWithdrawnEnded(attributes)) && attributes.timedBiddingInfo.publicVisible) {
      biddingStatusMessage = myApp.reqres.request('i16:getString', 'ItemMessageStatus_ITEM_WITHDRAWN');
    } else if (this.isSuspendedDraftOrPreview(attributes)) {
      biddingStatusMessage = myApp.reqres.request('i16:getString', 'ItemMessageStatus_ITEM_SUSPENDED');
    } else if (this.isClosed(attributes)) {
      biddingStatusMessage = myApp.reqres.request('i16:getString', 'ItemMessageStatus_LOT_CLOSED_MESSAGE');
    }

    return biddingStatusMessage;
  },
  getTimezonedTimeString: function getTimezonedTimeString(dateTimeMs, timeZoneCode) {
    var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'hh:mmA z';

    try {
      var endTimeTz = moment.tz(dateTimeMs, 'UTC').tz(timeZoneCode);
      return endTimeTz.format(format);
    } catch (err) {
      console.log(err);
      var formatter = new Intl.DateTimeFormat({
        hour12: true,
        hour: '2-digit',
        minute: '2-digit'
      });
      var dtf = formatter.format(dateTimeMs);
      return dtf;
    }
  },
  getTimezonedDateString: function getTimezonedDateString(dateTimeMs) {
    var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';
    var timeZoneCode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'UTC';
    var format = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'MMM D';
    moment.locale(locale);
    var endTimeTz = moment.tz(dateTimeMs, timeZoneCode);
    return endTimeTz.format(format);
  }
});
"use strict";

PageApp.Ent.Timed2PrimaryHelper = PageApp.Ent.Timed2BaseHelper.extend({
  getNumberOrRef: function getNumberOrRef(attributes) {
    var numberOrRef = 'Ref ' + attributes.id;

    if (!attributes.itemType.marketplace) {
      if (attributes.itemType.bulkBuyItem) {
        numberOrRef = myApp.reqres.request('i16:getString', 'ItemCodes_BULK_BUY_ITEM_DISPLAY_VALUE') + ' ' + attributes.lotNumber;
      } else if (attributes.itemType.supportsBidding) {
        numberOrRef = myApp.reqres.request('i16:getString', 'ItemCodes_LOT_DISPLAY_VALUE') + ' ' + attributes.lotNumber;
      } else {
        numberOrRef = myApp.reqres.request('i16:getString', 'ItemCodes_LISTING_DISPLAY_VALUE') + ' ' + attributes.lotNumber;
      }
    }

    return numberOrRef;
  },
  getBidIncrementWithCurrency: function getBidIncrementWithCurrency(attributes) {
    return attributes.localeSensitive.currency.symbol + myApp.utils.types.toFormattedNumber(attributes.timedBiddingInfo.increment, myApp.ent.user.attributes.thousandsSeparator);
  },
  getDisplayPriceWithCurrency: function getDisplayPriceWithCurrency(attributes) {
    return attributes.localeSensitive.currency.symbol + myApp.utils.types.toFormattedNumber(attributes.timedBiddingInfo.displayPrice, myApp.ent.user.attributes.thousandsSeparator);
  },
  getMinimumOfferOrBuyNowPriceWithCurrency: function getMinimumOfferOrBuyNowPriceWithCurrency(attributes) {
    return attributes.localeSensitive.currency.symbol + myApp.utils.types.toFormattedNumber(attributes.timedBiddingInfo.minimumOfferOrBuyNowPrice, myApp.ent.user.attributes.thousandsSeparator);
  },
  getHighBidMessage: function getHighBidMessage(attributes) {
    if (attributes.timedBiddingInfo.highestBid && attributes.timedBiddingInfo.highestBid > 0) {
      return attributes.localeSensitive.currency.symbol + myApp.utils.types.toFormattedNumber(attributes.timedBiddingInfo.highestBid, myApp.ent.user.attributes.thousandsSeparator);
    } else {
      if (attributes.timedBiddingInfo.openingBid && attributes.timedBiddingInfo.openingBid > 0) {
        return attributes.localeSensitive.currency.symbol + myApp.utils.types.toFormattedNumber(attributes.timedBiddingInfo.openingBid, myApp.ent.user.attributes.thousandsSeparator);
      }

      return '-';
    }
  },
  getHighestAutoBidFormatted: function getHighestAutoBidFormatted(attributes) {
    try {
      var amount = attributes.localeSensitive.currency.symbol + myApp.utils.types.toFormattedNumber(attributes.timedUserInfo.highestAutoBid, myApp.ent.user.attributes.thousandsSeparator);
      var msg = myApp.reqres.request('i16:getString', 'ItemMessageStatus_BIDDING_BAR_YOUR_HIGHEST_AUTO_BID');
      return msg.replace('{0}', amount);
    } catch (err) {
      console.log(err);
      return '';
    }
  },
  getAmountNextBidFormattedWithCurrency: function getAmountNextBidFormattedWithCurrency(attributes) {
    var amount = this.getAmountNextBid(attributes);
    return attributes.localeSensitive.currency.symbol + myApp.utils.types.toFormattedNumber(amount, myApp.ent.user.attributes.thousandsSeparator);
  },
  getNumberOfBids: function getNumberOfBids(attributes) {
    if (attributes.timedBiddingInfo.numberOfBids && attributes.timedBiddingInfo.numberOfBids > 0) {
      return attributes.timedBiddingInfo.numberOfBids;
    }

    return 0;
  },
  isHighestBidder: function isHighestBidder(attributes) {
    return myApp.ent.user.isLoggedIn() && attributes.timedBiddingInfo.highestBidUID === myApp.ent.user.get('id');
  },
  isBidding: function isBidding(attributes) {
    if (myApp.ent.user.isNotLoggedIn()) return false;

    if (attributes.timedBiddingInfo.bidUIDs) {
      for (var key in attributes.timedBiddingInfo.bidUIDs) {
        if (attributes.timedBiddingInfo.bidUIDs[key] === myApp.ent.user.get('id')) return true;
      }
    }

    return false;
  },
  isAutoBidding: function isAutoBidding(attributes) {
    if (myApp.ent.user.isNotLoggedIn()) return false;

    if (attributes.timedUserInfo.highestAutoBid && attributes.timedUserInfo.highestAutoBid > 0) {
      return true;
    }

    return false;
  },
  isOffering: function isOffering(attributes) {
    if (myApp.ent.user.isNotLoggedIn()) return false;

    if (attributes.timedUserInfo.offerModels) {
      for (var key in attributes.timedUserInfo.offerModels) {
        if (attributes.timedUserInfo.offerModels[key].userId === myApp.ent.user.get('id')) return true;
      }
    }

    return false;
  },
  getSashModel: function getSashModel(attributes) {
    var model = {};

    if (!myApp.ent.timedHelper.isClosed(attributes) && attributes.recentlyAdded) {
      model.showSash = true;
      model.sashName = 'recently-added';
    }

    if (myApp.ent.timedHelper.isClosed(attributes) && myApp.ent.timedHelper.isWhollyPurchased(attributes)) {
      var handle;

      if (attributes.timedBiddingInfo.makeOfferEnabled) {
        handle = 'make-offer';
      } else if (attributes.timedBiddingInfo.buyNowEnabled) {
        handle = 'buy-now';
      }

      if (myApp.ent.user.isNotLoggedIn()) {
        model.showSash = true;
        model.sashName = handle;
      } else if (!myApp.ent.timedHelper.isOffering(attributes)) {
        if (!myApp.ent.timedHelper.isBidding(attributes)) {
          model.showSash = true;
          model.sashName = handle;
        }
      }
    }

    return model;
  },
  getAmountNextBid: function getAmountNextBid(attributes) {
    var current = attributes.timedBiddingInfo.highestBid;

    if (!current && attributes.timedBiddingInfo.openingBid) {
      current = attributes.timedBiddingInfo.openingBid;
    }

    if (!current) {
      current = 0;
    }

    return current + attributes.timedBiddingInfo.increment;
  },
  getBidTypeMessage: function getBidTypeMessage(attributes) {
    var bidTypeMessage;

    if (attributes.timedBiddingInfo.biddingTypePerUnit && attributes.timedBiddingInfo.numberOfUnits > 1) {
      bidTypeMessage = myApp.reqres.request('i16:getString', 'ItemCodes_ITEM_BIDDING_BID_AMOUNT_PER_UNIT');
      bidTypeMessage = bidTypeMessage.replace('{0}', attributes.timedBiddingInfo.numberOfUnits);
    }

    return bidTypeMessage;
  },
  getHighBidAmountCalculation: function getHighBidAmountCalculation(attributes) {
    var highBidAmountCalculation;
    var condition1 = attributes.timedBiddingInfo.biddingTypePerUnit && attributes.timedBiddingInfo.numberOfUnits > 1;
    var condition2 = attributes.timedBiddingInfo.biddingTypePerLot && attributes.timedBiddingInfo.itemCount > 1;
    var amount = attributes.timedBiddingInfo.highestBid;

    if (amount === 0) {
      amount = attributes.timedBiddingInfo.openingBid;
    }

    if (amount > 0 && (condition1 || condition2)) {
      var currencySymbol = attributes.localeSensitive.currency.symbol;
      var amountFormattedWithCurrency = currencySymbol + myApp.utils.types.toFormattedNumber(amount, myApp.ent.user.attributes.thousandsSeparator);
      var units;

      if (attributes.timedBiddingInfo.biddingTypePerUnit) {
        units = attributes.timedBiddingInfo.numberOfUnits;
      } else {
        units = attributes.timedBiddingInfo.itemCount;
      }

      var totalAmountFormattedWithCurrency = currencySymbol + myApp.utils.types.toFormattedNumber(amount * units, myApp.ent.user.attributes.thousandsSeparator);
      highBidAmountCalculation = '(' + units + ' x ' + amountFormattedWithCurrency + ' = ' + totalAmountFormattedWithCurrency + ')';
    }

    return highBidAmountCalculation;
  },
  getUserStatus: function getUserStatus(attributes) {
    var userStatus = new PageApp.Ent.BasicEntity();
    userStatus.set('classes', 'alert-warning');
    var registrant = attributes.registrant;

    if (registrant) {
      // Replace the statusLabel on the registrant
      // (if the admin webapp has created the registrant object then this will be in English which may not be the user's selected language)
      registrant.statusLabel = myApp.reqres.request('i16:getString', 'AuctionRegistrantStatus_' + registrant.statusName);
    } // if one of these statuses then display a user message


    var userMessages = [1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25];
    var sellingStatus = this.getSellingStatus(attributes);
    userStatus.set('userMessage', userMessages.indexOf(sellingStatus) > -1); // true if sellingStatus is contained in userMessages

    userStatus.set('id', attributes.id);
    userStatus.set('sellingStatus', sellingStatus);
    this.setStatusMessageIcon(userStatus, attributes);

    if (userStatus.get('userMessage')) {
      if (this.isLosing(sellingStatus) || this.isLost(sellingStatus)) {
        userStatus.set('classes', 'alert-danger');
      } else if (this.isWinning(attributes) || this.isWon(attributes)) {
        userStatus.set('classes', 'alert-success');
      } else {
        userStatus.set('classes', 'alert-warning');
      }
    }

    if (this.isWithdrawn(attributes) || this.isWithdrawnEnded(attributes)) {
      if (!myApp.ent.user.isLoggedIn()) {
        userStatus.set('userStatusMessage', myApp.reqres.request('i16:getString', 'ItemMessageStatus_NOT_LOGGED_IN'));
      } else {
        userStatus.set('userStatusMessage', myApp.reqres.request('i16:getString', 'ItemMessageStatus_ITEM_WITHDRAWN'));
      }
    } else if (this.isClosed(attributes)) {
      if (!myApp.ent.user.isLoggedIn()) {
        userStatus.set('userStatusMessage', myApp.reqres.request('i16:getString', 'ItemMessageStatus_NOT_LOGGED_IN'));
      }
    } else {
      if (!myApp.ent.user.isLoggedIn()) {
        userStatus.set('userStatusMessage', myApp.reqres.request('i16:getString', 'ItemMessageStatus_NOT_LOGGED_IN'));
      } else {
        if (!registrant || registrant.id < 0) {
          userStatus.set('userStatusMessage', myApp.reqres.request('i16:getString', 'ItemMessageStatus_ITEM_REGISTER_TO_DO_SOMETHING'));
        } else {
          if (registrant.status === 2) {
            if (!userStatus.get('userMessage')) {
              userStatus.set('classes', 'alert-warning');
              userStatus.set('userStatusMessage', registrant.statusLabel);
            }
          } else {
            userStatus.set('userMessage', true);
            userStatus.set('userStatusMessage', registrant.statusLabel);
            userStatus.set('classes', 'alert-danger');

            if (registrant.status === 3 || registrant.status === 6 || registrant.status === 7) {
              userStatus.set('icon', 'cross.png');
            } else if (registrant.status === 4 || registrant.status === 1) {
              userStatus.set('icon', 'alert.png');
              userStatus.set('classes', 'alert-warning');
            }
          }
        }
      }
    }

    if (sellingStatus === 1) {
      var percent = attributes.timedBiddingInfo.highestBid / attributes.timedBiddingInfo.reserve * 100;
      userStatus.set('percentOfReserve', percent);
      userStatus.set('showReserveIndicator', true);
    }

    return userStatus.attributes;
  },
  setStatusMessageIcon: function setStatusMessageIcon(userStatus, attributes) {
    var msg;
    var offer;

    if (userStatus.get('sellingStatus') === 1) {
      userStatus.set('icon', 'alert.png');
      userStatus.set('userStatusMessage', myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_BAR_HIGHEST_BID_LOWER_THAN_RESERVE'));
    } else if (userStatus.get('sellingStatus') === 4) {
      userStatus.set('icon', 'tick.png');
      userStatus.set('userStatusMessage', myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_BAR_YOUR_BID_CURRENTLY_HIGHEST'));
    } else if (userStatus.get('sellingStatus') === 5) {
      userStatus.set('icon', 'cross.png');
      userStatus.set('userStatusMessage', myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_BAR_AUTOBID_HAS_OUTBID_YOU'));
    } else if (userStatus.get('sellingStatus') === 6) {
      userStatus.set('icon', 'cross.png');
      userStatus.set('userStatusMessage', myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_BAR_ANOTHER_BID_HAS_OUTBID_YOU'));
    } else if (userStatus.get('sellingStatus') === 7) {
      userStatus.set('icon', 'alert.png');
      userStatus.set('userStatusMessage', myApp.reqres.request('i16:getString', 'Permission to bid has been withdrawn'));
    } else if (userStatus.get('sellingStatus') === 8) {
      userStatus.set('icon', 'tick.png');
      userStatus.set('userStatusMessage', myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_BAR_YOUR_BID_WAS_HIGHEST'));
    } else if (userStatus.get('sellingStatus') === 9) {
      userStatus.set('icon', 'cross.png');
      userStatus.set('userStatusMessage', myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_BAR_YOUR_BID_WAS_NOT_HIGH_ENOUGH'));
    } else if (userStatus.get('sellingStatus') === 10) {
      userStatus.set('icon', 'alert.png');

      if (attributes.itemType.listingItem) {
        userStatus.set('userStatusMessage', myApp.reqres.request('i16:getString', 'ItemMessageStatus_LISTING_CLOSED_MESSAGE_GENERAL'));
      } else {
        userStatus.set('userStatusMessage', myApp.reqres.request('i16:getString', 'ItemMessageStatus_LOT_CLOSED_MESSAGE'));
      }
    } else if (userStatus.get('sellingStatus') === 11 || userStatus.get('sellingStatus') === 13) {
      userStatus.set('icon', 'cross.png');
      userStatus.set('userStatusMessage', myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_BAR_YOUR_OFFER_WAS_NOT_HIGH_ENOUGH'));
    } else if (userStatus.get('sellingStatus') === 12) {
      userStatus.set('icon', 'tick.png');
      offer = myApp.ent.purchaseEntity.getHighestAcceptedOffer(attributes);
      msg = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_BAR_YOUR_OFFER_OF');
      msg += ' ' + attributes.localeSensitive.currency.symbol + myApp.utils.types.toFormattedNumber(offer.amount, myApp.ent.user.attributes.thousandsSeparator);
      msg += ' ' + myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_BAR_ON_THIS_ITEM_WAS_ACCEPTED');
      userStatus.set('userStatusMessage', msg);
    } else if (userStatus.get('sellingStatus') === 14) {
      userStatus.set('icon', 'cross.png');
      userStatus.set('userStatusMessage', myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_BAR_SOLD_BUY_NOW'));
    } else if (userStatus.get('sellingStatus') === 15) {
      userStatus.set('icon', 'tick.png');
      msg = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_BAR_YOUR_PURCHASED_VIA_BUY_NOW_FOR');
      msg += ' ' + attributes.localeSensitive.currency.symbol + myApp.utils.types.toFormattedNumber(attributes.timedBiddingInfo.minimumOfferOrBuyNowPrice, myApp.ent.user.attributes.thousandsSeparator);
      userStatus.set('userStatusMessage', msg);
    } else if (userStatus.get('sellingStatus') === 16) {
      userStatus.set('icon', 'cross.png');
      userStatus.set('userStatusMessage', myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_BAR_PURCHASE_PRICE_EXCEEDED'));
    } else if (userStatus.get('sellingStatus') === 17) {
      userStatus.set('icon', 'tick.png');
      userStatus.set('userStatusMessage', myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_BAR_YOU_HAVE_ACCEPTED_OFFERS'));
    } else if (userStatus.get('sellingStatus') === 18) {
      userStatus.set('icon', 'cross.png');
      userStatus.set('userStatusMessage', myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_BAR_YOUR_OFFERS_WERE_NOT_HIGH_ENOUGH'));
    } else if (userStatus.get('sellingStatus') === 19) {
      userStatus.set('icon', 'tick.png');
      userStatus.set('userStatusMessage', myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_BAR_YOU_HAVE_ACCEPTED_OFFERS_2'));
    } else if (userStatus.get('sellingStatus') === 21) {
      userStatus.set('icon', 'tick.png');
      userStatus.set('userStatusMessage', myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_BAR_TRANSFERRED_BY_YOU'));
    } else if (userStatus.get('sellingStatus') === 22) {
      userStatus.set('icon', 'cross.png');
      userStatus.set('userStatusMessage', myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_BAR_TRANSFERRED'));
    } else if (userStatus.get('sellingStatus') === 23) {
      var isTenderPct = attributes.timedBiddingInfo.tenderPctEnabled;
      var currency = attributes.localeSensitive.currency.symbol;
      var unitOfMeasurement = attributes.timedBiddingInfo.unitOfMeasurement;
      userStatus.set('icon', 'tick.png');
      offer = myApp.ent.purchaseEntity.getHighestAcceptedOffer(attributes);
      var offerMsg = myApp.utils.types.toFormattedNumber(offer.amount, myApp.ent.user.attributes.thousandsSeparator);

      if (isTenderPct) {
        offerMsg = offerMsg + '% ' + unitOfMeasurement;
      } else {
        offerMsg = currency + offerMsg + ' ' + myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_UNIT_OF_MEASUREMENT_PER') + ' ' + unitOfMeasurement;
      }

      msg = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_BAR_YOUR_TENDER_ACCEPTED');
      msg = msg.replace('{}', offerMsg);
      userStatus.set('userStatusMessage', msg);
    } else if (userStatus.get('sellingStatus') === 24) {
      userStatus.set('icon', 'cross.png');
      userStatus.set('userStatusMessage', myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_BAR_OTHER_TENDER_ACCEPTED'));
    } else if (userStatus.get('sellingStatus') === 25) {
      userStatus.set('icon', 'cross.png');
      userStatus.set('userStatusMessage', myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_BAR_TENDER_ACCEPTED'));
    }
  },
  getSellingStatus: function getSellingStatus(attributes) {
    if (myApp.ent.user.isNotLoggedIn()) return 0;

    if (attributes.itemType.bulkBuyItem) {
      return this.getSellingStatusBulkBuy(attributes);
    } else if (attributes.itemType.listingItem) {
      return this.getSellingStatusListing(attributes);
    } else {
      return this.getSellingStatusLot(attributes);
    }
  },
  getSellingStatusListing: function getSellingStatusListing(attributes) {
    var status = this.attributes.userStatuses.NOT_WINNING;
    var loggedIn = myApp.ent.user.isLoggedIn();
    var sessionUserIsAcceptedOfferer = myApp.ent.purchaseEntity.getHighestAcceptedOffer(attributes);
    var sessionUserHasMadeOffer = myApp.ent.purchaseEntity.getNumberOfOffers(attributes) > 0;

    if (this.isClosed(attributes)) {
      status = this.attributes.userStatuses.ITEM_CLOSED;

      if (loggedIn) {
        if (attributes.timedBiddingInfo.offerAccepted) {
          if (sessionUserHasMadeOffer) {
            if (sessionUserIsAcceptedOfferer) {
              if (attributes.timedBiddingInfo.makeOfferEnabled) {
                // session user's offer purchased the item
                status = this.attributes.userStatuses.ITEM_WON_BY_MAKE_OFFER;
              } else if (attributes.timedBiddingInfo.buyNowEnabled) {
                // session user purchased the item with Buy Now
                status = this.attributes.userStatuses.ITEM_WON_BY_BUY_NOW;
              } else if (attributes.timedBiddingInfo.tenderEnabled || attributes.timedBiddingInfo.tenderPctEnabled) {
                // session user's tender was successful
                status = this.attributes.userStatuses.ITEM_WON_BY_TENDER_OFFER;
              } else {
                // session user transferred the item
                status = this.attributes.userStatuses.ITEM_WON_BY_TRANSFER;
              }
            } else {
              if (attributes.timedBiddingInfo.makeOfferEnabled) {
                // other user's offer purchased the item
                status = this.attributes.userStatuses.ITEM_LOST_TO_MAKE_OFFER;
              } else if (attributes.timedBiddingInfo.buyNowEnabled) {
                // other user purchased the item with Buy Now
                status = this.attributes.userStatuses.ITEM_LOST_TO_BUY_NOW;
              } else if (attributes.timedBiddingInfo.tenderEnabled || attributes.timedBiddingInfo.tenderPctEnabled) {
                // session user's tender was successful
                status = this.attributes.userStatuses.ITEM_LOST_TO_TENDER_OFFER;
              } else {
                // other user transferred the item
                status = this.attributes.userStatuses.ITEM_LOST_TO_TRANSFER;
              }
            }
          }
        }
      }
    }

    return status;
  },
  getSellingStatusBulkBuy: function getSellingStatusBulkBuy(attributes) {
    var loggedIn = myApp.ent.user.isLoggedIn();
    var status;
    var sessionUserIsAcceptedOfferer = myApp.ent.purchaseEntity.getHighestAcceptedOffer(attributes);

    if (this.isClosed(attributes)) {
      if (loggedIn) {
        if (sessionUserIsAcceptedOfferer) {
          status = this.attributes.userStatuses.ITEM_CLOSED_USER_HAS_ACCEPTED_OFFERS;
        } else if (this.isOffering(attributes)) {
          status = this.attributes.userStatuses.ITEM_CLOSED_USER_HAS_NO_ACCEPTED_OFFERS;
        } else {
          status = this.attributes.userStatuses.ITEM_CLOSED;
        }
      } else {
        status = this.attributes.userStatuses.ITEM_CLOSED;
      }
    } else {
      if (loggedIn) {
        if (sessionUserIsAcceptedOfferer) {
          status = this.attributes.userStatuses.ITEM_OPEN_USER_HAS_ACCEPTED_OFFERS;
        } else {
          status = this.attributes.userStatuses.ITEM_OPEN_USER_HAS_NO_ACCEPTED_OFFERS;
        }
      } else {
        status = this.attributes.userStatuses.NOT_WINNING;
      }
    }

    return status;
  },
  getSellingStatusLot: function getSellingStatusLot(attributes) {
    var status = this.attributes.userStatuses.NOT_WINNING;
    var userId = myApp.ent.user.get('id');
    var loggedIn = myApp.ent.user.isLoggedIn();
    var webcasty = attributes.itemType.webcasty;
    var reserve = attributes.timedBiddingInfo.reserve;
    var sessionUserIsHighestBidder = attributes.timedBiddingInfo.highestBidUID === userId;
    var sessionUserIsAcceptedOfferer = myApp.ent.purchaseEntity.getHighestAcceptedOffer(attributes);

    if (this.isClosed(attributes)) {
      if (loggedIn) {
        var offering = myApp.ent.timedHelper.isOffering(attributes);

        if (attributes.timedBiddingInfo.offerAccepted && offering) {
          if (sessionUserIsAcceptedOfferer) {
            if (attributes.timedBiddingInfo.makeOfferEnabled) {
              // session user's offer purchased the item
              status = this.attributes.userStatuses.ITEM_WON_BY_MAKE_OFFER;
            } else {
              // session user purchased the item with Buy Now
              status = this.attributes.userStatuses.ITEM_WON_BY_BUY_NOW;
            }
          } else {
            if (attributes.timedBiddingInfo.makeOfferEnabled) {
              // other user's offer purchased the item
              status = this.attributes.userStatuses.ITEM_LOST_TO_MAKE_OFFER;
            } else {
              // other user purchased the item with Buy Now
              status = this.attributes.userStatuses.ITEM_LOST_TO_BUY_NOW;
            }
          }
        } else if (attributes.timedBiddingInfo.offerAccepted && !offering) {
          if (attributes.timedBiddingInfo.makeOfferEnabled) {
            if (this.isBidding(attributes)) {
              status = this.attributes.userStatuses.ITEM_LOST;
            } else if (this.isOffering(attributes)) {
              status = this.attributes.userStatuses.ITEM_LOST_TO_MAKE_OFFER_NO_BIDS;
            } else {
              status = this.attributes.userStatuses.ITEM_CLOSED;
            }
          } else {
            status = this.attributes.userStatuses.ITEM_LOST_TO_BUY_NOW;
          }
        } else {
          if (attributes.timedBiddingInfo.highestBid > 0) {
            if (sessionUserIsHighestBidder) {
              // session user won the bidding.
              // For webcast2, the reserveprice stores the asking price for the lot so will always be greater than the highest bid
              // Therefore a bidder on a webcast auction will win despite not reaching the 'reserveprice'
              if (attributes.timedBiddingInfo.highestBid >= reserve || webcasty) {
                status = this.attributes.userStatuses.ITEM_WON;
              } else {
                // session user lost the bidding to the reserve.
                status = this.attributes.userStatuses.ITEM_LOST;
              }
            } else if (this.isBidding(attributes)) {
              // session user made a bid but not the highest
              status = this.attributes.userStatuses.ITEM_LOST;
            } else if (this.isAutoBidding(attributes)) {
              // session user made a bid but not the highest
              status = this.attributes.userStatuses.ITEM_LOST;
            } else if (this.isOffering(attributes)) {
              if (attributes.timedBiddingInfo.makeOfferEnabled) {
                status = this.attributes.userStatuses.ITEM_LOST_TO_MAKE_OFFER_NO_BIDS;
              } else {
                status = this.attributes.userStatuses.ITEM_LOST_TO_BUY_NOW_NO_BIDS;
              }
            } else {
              status = this.attributes.userStatuses.ITEM_CLOSED;
            }
          } else if (this.isOffering(attributes)) {
            if (attributes.timedBiddingInfo.makeOfferEnabled) {
              status = this.attributes.userStatuses.ITEM_LOST_TO_MAKE_OFFER_NO_BIDS;
            } else {
              status = this.attributes.userStatuses.ITEM_LOST_TO_BUY_NOW_NO_BIDS;
            }
          } else {
            status = this.attributes.userStatuses.ITEM_CLOSED;
          }
        }
      } else {
        status = this.attributes.userStatuses.ITEM_CLOSED;
      }
    } else {
      // Lot is still open
      if (loggedIn) {
        if (sessionUserIsHighestBidder) {
          /*
          * Webcast2 is now using the reserve price to hold the asking price (more than it was previously). Previously in most
          * cases it would be zero so you would never see the under reserve message but now you potentially could.
          */
          if (attributes.timedBiddingInfo.highestBid < reserve && !webcasty) {
            status = this.attributes.userStatuses.UNDER_RESERVE;
          } else {
            status = this.attributes.userStatuses.ITEM_OPEN_USER_HAS_WINNING_BID;
          }
        } else {
          if (this.isBidding(attributes)) {
            // highestBid won't be null since the sessionUser has made a bid (so at least one exists)
            if (attributes.timedBiddingInfo.highestBid < reserve && !webcasty) {
              status = this.attributes.userStatuses.UNDER_RESERVE;
            } else {
              if (attributes.timedBiddingInfo.highestBidHasAutobid) {
                status = this.attributes.userStatuses.OUTBID_BY_AUTOBID;
              } else {
                status = this.attributes.userStatuses.OUTBID_BY_ANOTHER_BID;
              }
            }
          } else if (this.isAutoBidding(attributes)) {
            // checking for losing autobids which have not triggered any bids..
            status = this.attributes.userStatuses.OUTBID_BY_AUTOBID;
          }
        }
      } // else leave as NOT_WINNING

    }

    return status;
  }
});
"use strict";

PageApp.Ent.TimedItem = Backbone.Model.extend({
  initialise: function initialise(options) {}
});
"use strict";

PageApp.Ent.TimedItems = Backbone.Collection.extend({
  model: PageApp.Ent.TimedItem,
  initialise: function initialise(options) {},
  defaults: {},
  getLongPollUrl: function getLongPollUrl() {
    if (!this.models || _.size(this.models) === 0) {
      return;
    }

    var itemIdMap = {};

    for (var i = 0; i < this.models.length; i++) {
      itemIdMap[this.models[i].attributes.id] = this.models[i].attributes.timedBiddingInfo.version;
    }

    return {
      'itemIdMap': itemIdMap
    };
  },
  getItemIds: function getItemIds() {
    if (!this.models || _.size(this.models) === 0) {
      return;
    }

    var itemIds = [];

    for (var i = 0; i < this.models.length; i++) {
      itemIds.push(this.models[i].attributes.id);
    }

    return itemIds;
  }
});
"use strict";

PageApp.Views.TimedItemLayout = Backbone.Marionette.LayoutView.extend({
  autobidFieldContents: '',
  defaultImageDimensionsByLayout: {
    grid: {
      height: 350,
      width: 480
    },
    list: {
      height: 350,
      width: 480
    },
    lightBox: {}
  },
  templateGrid: hbs.templates.timedItemGridLayout,
  templateList: hbs.templates.timedItemListLayout,
  getTemplate: function getTemplate() {
    var layout = myApp.ent.user.getPreference('layoutForBidding');

    if (layout === 'grid') {
      return this.templateGrid;
    } else {
      return this.templateList;
    }
  },
  getDefaultImageDimensions: function getDefaultImageDimensions(layout) {
    var dimensions = this.defaultImageDimensionsByLayout[layout] || false;

    if (dimensions) {
      dimensions.operation = myApp.ent.config.get('auctionImageTransformOperation');
    }

    return dimensions;
  },
  initialize: function initialize(options) {
    this.options = options;
  },
  modelEvents: {
    'change': 'render'
  },
  className: function className() {
    var layout = myApp.ent.user.getPreference('layoutForBidding', {
      value: 'grid'
    });
    var layoutClass = layout === 'grid' ? 'grid-item grid-container--item thumbnail timedItem' : 'timedItem col-xs-12';
    var filter = myApp.ent.status.getMyBidsCurrentFilter();
    var userStatus = this.model.get('userStatus') || myApp.ent.timedHelper.getUserStatus(this.model.attributes);

    if (filter) {
      var hidden = false;

      switch (filter.name) {
        case 'WINNING':
          hidden = !myApp.ent.timedHelper.isWinning(this.model.attributes);
          break;

        case 'LOSING':
          hidden = !myApp.ent.timedHelper.isLosing(userStatus.sellingStatus);
          break;

        case 'WON':
          hidden = !myApp.ent.timedHelper.isWon(this.model.attributes);
          break;

        case 'LOST':
          hidden = !myApp.ent.timedHelper.isLost(userStatus.sellingStatus);
          break;

        case 'PENDING':
          hidden = !myApp.ent.purchaseEntity.getOfferByStatus(this.model.attributes, 'pending');
          break;

        case 'REJECTED':
          hidden = !myApp.ent.purchaseEntity.getOfferByStatus(this.model.attributes, 'rejected');
          break;

        case 'PURCHASED':
          hidden = !myApp.ent.purchaseEntity.getOfferByStatus(this.model.attributes, 'accepted');
      }

      var filterClass = hidden ? ' hidden' : '';
    }

    return layoutClass + filterClass;
  },
  events: {
    'click .x-similar': 'handleSimilar',
    'click .x-confirm-bid': 'handlePlaceBid',
    'click .x-auto-bid': 'handleAutoBid',
    'keyup .x-auto-bid-input': 'handleAutoBidKeyup'
  },
  serializeData: function serializeData() {
    this.model.set({
      'userStatus': myApp.ent.timedHelper.getUserStatus(this.model.attributes)
    }, {
      silent: true
    });
    var clientOptions = this.model.get('clientOptions');
    var itemType = this.model.get('itemType');
    var timedBiddingInfo = this.model.get('timedBiddingInfo');
    var userStatus = this.model.get('userStatus');
    var isBoughtWithBuyNow = userStatus.sellingStatus === 15; // SellingStatus 15 = buynow

    var isCatalogue = itemType.catalogue;
    var isClosed = this.model.get('manualClose') || myApp.ent.timedHelper.isClosed(this.model.attributes);
    var isWon = myApp.ent.timedHelper.isWon(this.model.attributes);
    var hasTimeLeft = !isCatalogue && timedBiddingInfo.showBidStatusEndDate;
    var hasBidCount = clientOptions.showNumberOfBids && (isClosed || itemType.supportsBidding);
    var hasBidIncrements = !isClosed && clientOptions.showBidIncrements && itemType.supportsBidding;
    var hasWinningBidAmount = itemType.supportsBidding && (!isClosed || clientOptions.showWinningBidAmount || isWon);
    var hasDisplayPrice = !itemType.supportsBidding && timedBiddingInfo.displayPrice > 0;
    var hasNumberOfUnits = !isClosed && (timedBiddingInfo.numberOfUnits > 1 || timedBiddingInfo.tenderEnabled || timedBiddingInfo.tenderPctEnabled);
    var remainingUnits = myApp.reqres.request('i16:getString', 'ItemCodes_ITEM_UNITS_AVAILABLE_MESSAGE_BULKBUY').replace('{0}', timedBiddingInfo.numberOfUnitsRemaining);
    var totalUnits = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_NUMBER_OF_UNITS') + ' ' + timedBiddingInfo.numberOfUnits;
    var bidTypeMessage = myApp.ent.timedHelper.getBidTypeMessage(this.model.attributes);
    var externalPageUrl = this.model.get('fullExternalWebpageUrl');
    return {
      bidding: {
        count: myApp.ent.timedHelper.getNumberOfBids(this.model.attributes),
        hasBidding: itemType.supportsBidding,
        hasCount: hasBidCount,
        hasIncrements: hasBidIncrements,
        hasReserveIndicator: userStatus.showReserveIndicator,
        hasWinningBidAmount: hasWinningBidAmount,
        highBidAmountCalculation: myApp.ent.timedHelper.getHighBidAmountCalculation(this.model.attributes),
        incrementWithCurrency: myApp.ent.timedHelper.getBidIncrementWithCurrency(this.model.attributes),
        percentOfReserve: userStatus.percentOfReserve
      },
      contextPath: myApp.ent.config.get('contextPath'),
      displayPrice: isClosed && isBoughtWithBuyNow ? myApp.ent.timedHelper.getMinimumOfferOrBuyNowPriceWithCurrency(this.model.attributes) : myApp.ent.timedHelper.getHighBidMessage(this.model.attributes),
      displayPriceWithCurrency: myApp.ent.timedHelper.getDisplayPriceWithCurrency(this.model.attributes),
      externalWebpageUrl: externalPageUrl && externalPageUrl.length > 0 ? externalPageUrl : false,
      hasDisplayPrice: hasDisplayPrice,
      hasFlags: this.model.get('showFlags'),
      hasItemRoundels: this.model.get('uiShowItemRoundels'),
      hasNumberOfUnits: hasNumberOfUnits,
      imageDimensions: this.getDefaultImageDimensions(myApp.ent.user.getPreference('layoutForBidding')),
      isArchived: this.model.get('archived'),
      isBoughtWithBuyNow: isBoughtWithBuyNow,
      isClosed: isClosed,
      isGallery: myApp.ent.config.get('page') !== 'itemland',
      isOvertimeBidding: this.model.attributes.timedBiddingInfo.overtimeBidding,
      isVisible: this.model.get('timedBiddingInfo').publicVisible,
      lightboxImageDimensions: this.getDefaultImageDimensions('lightbox'),
      messages: {
        awaitingImage: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AWAITING_IMAGE'),
        bidCount: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_MY_SALES_NUM_BIDS'),
        bidIncrement: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_BID_INCREMENT'),
        bidMessage: !isClosed ? myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_HIGHEST_BID') : isBoughtWithBuyNow ? myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_BUY_NOW_BOUGHT') : myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_WINNING_BID'),
        bidType: !isClosed && bidTypeMessage ? bidTypeMessage : false,
        catalogueItem: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CATALOGUE_ITEM'),
        catalogueLink: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CATALOGUE_GOTO_EXTERNAL_WEBSITE'),
        displayPrice: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_DISPLAY_PRICE'),
        recentlyAdded: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_RECENTLY_ADDED'),
        statusSeverity: userStatus.classes,
        timeLeft: hasTimeLeft ? myApp.ent.timedHelper.getBiddingAndTimeLeft(this.model.attributes, hasTimeLeft) : false,
        userStatus: userStatus.userStatusMessage
      },
      numberOrRef: myApp.ent.timedHelper.getNumberOrRef(this.model.attributes),
      remainingUnits: remainingUnits,
      staticPath: myApp.ent.config.get('staticBase'),
      totalUnits: totalUnits,
      model: this.model.toJSON()
    };
  },
  onRender: function onRender() {
    if (this.model.get('timedBiddingInfo').publicVisible) {
      if (!this.model.get('itemType').catalogue) {
        this.renderTimedItemActions();
        this.bidActionsTicker = setInterval(this.renderTimedItemActions.bind(this), 1000);
      }

      if (this.model.get('itemType').supportsBidding) {
        this.$el.find('.x-auto-bid-input').val(this.autobidFieldContents);
      }

      if (!this.model.attributes.itemType.catalogue) {
        if (!this.model.get('manualClose') && !myApp.ent.timedHelper.isClosed(this.model.attributes)) {
          this.renderTimeLeftTicker();

          if (!this.timeLeftTicker) {
            this.timeLeftTicker = setInterval(this.renderTimeLeftTicker.bind(this), 1000);
          }
        }
      }

      this.$el.show();
    } else {
      this.$el.hide();
    }

    this.prettyPhoto();
  },
  onDestroy: function onDestroy() {
    clearInterval(this.bidActionsTicker);
    clearInterval(this.timeLeftTicker);
  },
  handleSimilar: function handleSimilar(e) {
    e.preventDefault();
    window.location.href = myApp.ent.config.get('contextPath') + '/search?subCategory=' + this.model.get('category').id;
    return false;
  },
  handlePlaceBid: function handlePlaceBid(e) {
    e.preventDefault();
    var amount = $(e.currentTarget).data('amount');

    if (this.model.get('itemType').webcasty) {
      amount = amount * 100;
    }

    var url = myApp.utils.ajax.getApiEndpoint('timed/bid') + '/' + this.model.get('id') + '/' + this.model.get('registrant').id + '/' + myApp.ent.user.get('id') + '/' + amount;
    myApp.utils.ajax.postBean(null, url, _.bind(function (timedResponse) {
      if (timedResponse.models.ErrorModel) {
        myApp.ent.user.checkLogout(timedResponse);
        myApp.vent.trigger('ui:notification', {
          text: timedResponse.models.ErrorModel.message,
          level: 'warning'
        });
      }
    }, this));
    $(e.currentTarget).prop('disabled', true);
    return false;
  },
  handleAutoBidKeyup: function handleAutoBidKeyup(e) {
    e.preventDefault();
    var $input = $(e.currentTarget);

    if (e.keyCode !== 13) {
      $input.val(myApp.utils.types.toFormattedNumberNoDecimalLimited($input.val(), myApp.ent.user.attributes.thousandsSeparator));
      this.autobidFieldContents = $input.val();
    } else {
      this.placeAutoBid($input.val(), false);
    }

    return false;
  },
  handleAutoBid: function handleAutoBid(e) {
    e.preventDefault();
    var autoBidValue = $(e.currentTarget).parent().parent().find('.x-auto-bid-input').val();
    var reconfirmed = $(e.currentTarget).data('reconfirmed');
    this.placeAutoBid(e, autoBidValue, reconfirmed);
    return false;
  },
  placeAutoBid: function placeAutoBid(e, autoBidValue, reconfirmed) {
    e.preventDefault();
    if (!autoBidValue) return;
    var amount = myApp.utils.types.toNumericCharsOnly(autoBidValue, myApp.ent.user.attributes.thousandsSeparator);
    var nextBid = myApp.ent.timedHelper.getAmountNextBid(this.model.attributes);

    if (this.model.get('itemType').webcasty) {
      amount = amount * 100;
      nextBid = nextBid * 100;
    }

    if (!reconfirmed && amount > myApp.ent.config.get('confirmAmountThresholdMultiplier') * nextBid) {
      this.renderTimedItemActions(true, autoBidValue);
      return;
    }

    var url = myApp.utils.ajax.getApiEndpoint('timed/autobid') + '/' + this.model.get('id') + '/' + this.model.get('registrant').id + '/' + myApp.ent.user.get('id') + '/' + amount;
    myApp.utils.ajax.postBean(null, url, _.bind(function (timedResponse) {
      this.autobidFieldContents = '';

      if (timedResponse.models.ErrorModel) {
        myApp.ent.user.checkLogout(timedResponse);
        myApp.vent.trigger('ui:notification', {
          text: timedResponse.models.ErrorModel.message,
          level: 'warning'
        });
      }

      if (timedResponse.models.BiddingItemModel) {
        this.model.set({
          'timedBiddingInfo': timedResponse.models.BiddingItemModel.timedBiddingInfo,
          'timedUserInfo': timedResponse.models.TimedUserInfoModel,
          rabbitCode: 102
        });
      }
    }, this));
    return false;
  },
  renderCatalogue: function renderCatalogue() {
    var model = new PageApp.Ent.BasicEntity({
      contextPath: myApp.ent.config.get('contextPath'),
      archived: this.model.attributes.archived,
      fullExternalWebpageUrl: this.model.attributes.fullExternalWebpageUrl,
      id: this.model.attributes.id
    });
    this.catalogueRegion.show(new PageApp.Views.CatalogueView({
      model: model
    }));
  },
  renderTimeLeftTicker: function renderTimeLeftTicker() {
    var endTime = myApp.ent.timedHelper.getActualOrNormalEndTime(this.model.attributes);
    var nowTime = myApp.ent.config.getNormalisedTimeMillis();
    var timeLeft = Math.round((endTime - nowTime) / 1000);
    var countdownMessage, seconds, hours, minutes;

    if (myApp.ent.timedHelper.isClosed(this.model.attributes)) {
      this.model.attributes.timedBiddingInfo.overtimeBidding = false;
      clearInterval(this.timeLeftTicker);
      this.model.set('manualClose', true);
      this.render();
    } else if (this.model.get('timedBiddingInfo').oneDayTimer) {
      countdownMessage = myApp.reqres.request('i16:getString', 'JspPublicCodes_COUNTDOWN_ENDS');
      seconds = Math.floor(timeLeft % 60);
      hours = Math.floor(timeLeft / (60 * 60));
      minutes = Math.floor(timeLeft / 60) - hours * 60;

      if (hours > 0) {
        countdownMessage += ' ' + hours + ' hrs ' + ' ' + minutes + ' min ' + seconds + ' seconds';
      } else if (minutes > 0) {
        countdownMessage += ' ' + minutes + ' min ' + seconds + ' seconds';
      } else {
        countdownMessage += ' ' + seconds + ' sec';
      }

      this.$el.find('#timeLeft' + this.model.get('id')).text(countdownMessage);
    } else if (this.model.attributes.timedBiddingInfo.overtimeBidding) {
      if (timeLeft > 0) {
        seconds = Math.floor(timeLeft % 60);
        minutes = Math.floor(timeLeft / 60);
        countdownMessage = myApp.reqres.request('i16:getString', 'ItemMessageStatus_LOT_OVERTIME_MESSAGE');

        if (minutes > 0) {
          countdownMessage += ' ' + minutes + ' min ' + seconds + ' seconds';
        } else {
          countdownMessage += ' ' + seconds + ' sec';
        }

        this.$el.find('#timeLeft' + this.model.get('id')).text(countdownMessage);
        this.$el.find('#timeLeftContainer' + this.model.get('id')).removeClass('hidden');
      } else {
        this.$el.find('#timeLeftContainer' + this.model.get('id')).addClass('hidden');
      }
    }
  },
  renderTimedItemActions: function renderTimedItemActions(error, autoBidValue) {
    if (!this.timedItemActionsRegion || !this.timedItemActionsRegion.el) {
      this.addRegion('timedItemActionsRegion', '.x-region--lot-actions');
    }

    var timedBiddingInfo = this.model.get('timedBiddingInfo');
    var startTime = this.model.attributes.dateAuctionStarts;
    var startTimeMs = startTime * 1000;
    var nowTime = myApp.ent.config.getNormalisedTimeMillis() / 1000;
    var timeUntilStart = startTime - nowTime;
    var shouldBiddingBeDisabled = timeUntilStart > 0 && !this.model.get('itemType').webcasty && this.model.attributes.registrant.status !== 5 && this.model.attributes.registrant.id > 0;
    var auctionNotStartedString = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_NOT_STARTED');
    auctionNotStartedString = auctionNotStartedString.replace('{0}', myApp.ent.timedHelper.getTimezonedDateString(startTimeMs, myApp.ent.user.getLocale(), this.model.attributes.timeZone.code));
    auctionNotStartedString = auctionNotStartedString.replace('{1}', myApp.ent.timedHelper.getTimezonedTimeString(startTimeMs, this.model.attributes.timeZone.code));

    if (!shouldBiddingBeDisabled) {
      clearInterval(this.bidActionsTicker);
    }

    var model = new PageApp.Ent.BasicEntity({
      amountNextBid: myApp.ent.timedHelper.getAmountNextBid(this.model.attributes),
      amountNextBidFormattedWithCurrency: myApp.ent.timedHelper.getAmountNextBidFormattedWithCurrency(this.model.attributes),
      auctionId: this.model.attributes.auctionId,
      auctionNotStartedString: auctionNotStartedString,
      autoBidValue: autoBidValue,
      availableForBidding: myApp.ent.timedHelper.isAvailableForBidding(this.model.attributes),
      clientOptions: this.model.attributes.clientOptions,
      closed: myApp.ent.timedHelper.isClosed(this.model.attributes),
      contactSellerEnabled: timedBiddingInfo.contactSellerEnabled,
      contextPath: myApp.ent.config.get('contextPath'),
      title: this.model.get('localeSensitive').title,
      currencySymbol: this.model.get('localeSensitive').currency.symbol,
      error: error,
      highestAutoBid: this.model.attributes.timedUserInfo.highestAutoBid,
      highestAutoBidFormatted: myApp.ent.timedHelper.getHighestAutoBidFormatted(this.model.attributes),
      id: this.model.attributes.id,
      inLiveBidding: timedBiddingInfo.inLiveBidding,
      isLoggedIn: myApp.ent.user.isLoggedIn(),
      isPreBiddingEnabled: this.model.attributes.preBiddingEnabled,
      isWebcast: this.model.get('itemType').webcasty,
      numberOfUnits: this.model.attributes.timedBiddingInfo.numberOfUnits,
      offerModel: myApp.ent.timedHelper.getPlaceBidOfferModel(this.model.attributes),
      reconfirmed: error,
      registrant: this.model.attributes.registrant,
      shouldBiddingBeDisabled: shouldBiddingBeDisabled,
      showNumberOfUnits: this.model.attributes.timedBiddingInfo.biddingTypePerUnit,
      statusId: timedBiddingInfo.statusId,
      supportsBidding: this.model.get('itemType').supportsBidding,
      timeUntilStart: timeUntilStart,
      winningOrWon: myApp.ent.timedHelper.isWinning(this.model.attributes) || myApp.ent.timedHelper.isWon(this.model.attributes),
      watching: this.model.attributes.watching
    });
    if (this.timedItemActionsRegion) {
      this.timedItemActionsRegion.show(new PageApp.Views.TimedItemActions({
        model: model
      }));
    }
  },
  prettyPhoto: function prettyPhoto() {
    /* Pretty Photo */
    // WARNING Do NOT change youtube_link since it is used
    // in the aa_listing.description field
    // to enable videos of Lots to loaded in PrettyPhoto
    var prettyPhotoOptions = {
      show_title: false,
      social_tools: false,
      allow_resize: true,
      deeplinking: false,
      overlay_gallery: false
    };

    try {
      this.$el.find('.youtube_link').prettyPhoto(prettyPhotoOptions);
      this.$el.find("a[rel^='prettyPhoto']").prettyPhoto(prettyPhotoOptions);
    } catch (err) {}
  }
});
"use strict";

PageApp.Views.CatalogueView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.catalogue,
  serializeData: function serializeData() {
    var hasExternalWebpageUrl = this.model.attributes.fullExternalWebpageUrl && this.model.attributes.fullExternalWebpageUrl.length > 0;
    var content = {
      JspPublicCodes_JSP_CATALOGUE_ITEM: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CATALOGUE_ITEM'),
      JspPublicCodes_JSP_CATALOGUE_GOTO_EXTERNAL_WEBSITE: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CATALOGUE_GOTO_EXTERNAL_WEBSITE'),
      contextPath: myApp.ent.config.get('contextPath'),
      hasExternalWebpageUrl: hasExternalWebpageUrl
    };
    content = _.extend(content, this.model.attributes);
    return content;
  }
});
"use strict";

PageApp.Views.CollectionContainerLayout = Backbone.Marionette.LayoutView.extend({
  template: hbs.templates.layoutControlLayout,
  regions: {
    collectionRegion: '#collectionRegion'
  },
  onRender: function onRender() {
    this.collectionRegion.on('show', function (view) {
      myApp.vent.trigger('application:rendered', {
        region: myApp.mainRegion
      });
    });

    if (_.size(this.model.models) === 0) {
      this.collectionRegion.show(new PageApp.Views.NoItemsFoundView());
    } else {
      this.collectionRegion.show(new PageApp.Views.TimedItemsView({
        collection: this.model
      }));
    }
  }
});
"use strict";

PageApp.Views.CurrentBidView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.currentBid,
  serializeData: function serializeData() {
    var bidMessage = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_HIGHEST_BID');
    var priceToDisplay = this.model.attributes.highBidAmountWithCurrency;
    var alwaysShowBidMessage = false;
    var borderedClass = '';

    if (this.model.get('closed')) {
      if (this.model.attributes.boughtViaBuyNow) {
        bidMessage = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_BUY_NOW_BOUGHT');
        priceToDisplay = this.model.attributes.minimumOfferOrBuyNowPrice;
      } else {
        bidMessage = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_WINNING_BID');
      }
    }

    var content = {
      bidMessage: bidMessage,
      borderedClass: borderedClass,
      priceToDisplay: priceToDisplay,
      alwaysShowBidMessage: alwaysShowBidMessage,
      displayPriceMessage: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_DISPLAY_PRICE'),
      JspPublicCodes_JSP_BIDDING_BID_INCREMENT: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_BID_INCREMENT'),
      JspPublicCodes_JSP_MY_SALES_NUM_BIDS: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_MY_SALES_NUM_BIDS')
    };
    content = _.extend(content, this.model.attributes);
    return content;
  }
});
"use strict";

PageApp.Views.ItemImageView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.itemImage,
  events: {},
  serializeData: function serializeData() {
    // see PageApp.Views.TimedItemLayout.renderItemImage() for the model. The model here is a subset of the full
    // [BiddingItemModel] model for rendering and enabling bidding (overkill for this little view).
    var content = {
      lbDims: {}
    };

    _.extend(content, this.model.attributes);

    return content;
  },
  onRender: function onRender() {
    this.prettyphoto();
  },
  prettyphoto: function prettyphoto() {
    /* Pretty Photo */
    // WARNING Do NOT change youtube_link since it is used
    // in the aa_listing.description field
    // to enable videos of Lots to loaded in PrettyPhoto
    var prettyPhotoOptions = {
      show_title: false,
      social_tools: false,
      allow_resize: true,
      deeplinking: false,
      overlay_gallery: false
    };

    try {
      this.$el.find('.youtube_link').prettyPhoto(prettyPhotoOptions);
      this.$el.find("a[rel^='prettyPhoto']").prettyPhoto(prettyPhotoOptions);
    } catch (err) {}
  }
});
"use strict";

PageApp.Views.MessageView = Backbone.Marionette.ItemView.extend({
  getTemplate: function getTemplate() {
    return hbs.templates.message;
  },
  serializeData: function serializeData() {
    var content = {
      contextPath: myApp.ent.config.get('contextPath')
    };
    content = _.extend(content, this.model.attributes);
    return content;
  }
});
"use strict";

PageApp.Views.NoItemsFoundView = Marionette.ItemView.extend({
  template: hbs.templates.noItemsFound,
  serializeData: function serializeData() {
    return {
      contextPath: myApp.ent.config.get('contextPath'),
      message: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_NO_ITEMS_MATCHED')
    };
  }
});
"use strict";

PageApp.Views.TimeLeftView = Backbone.Marionette.ItemView.extend({
  getTemplate: function getTemplate() {
    return hbs.templates.timeLeft;
  },
  serializeData: function serializeData() {
    return this.model.attributes;
  }
});
"use strict";

PageApp.Views.TimedDetailsView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.timedDetails,
  serializeData: function serializeData() {
    var numberOrRef = myApp.ent.timedHelper.getNumberOrRef(this.model.attributes);
    var sashModel = myApp.ent.timedHelper.getSashModel(this.model.attributes);
    var showItemDetailsLink = myApp.ent.config.attributes.page !== 'itemland' && this.model.attributes.itemDetailsAvailable;
    var title = this.model.attributes.localeSensitive.title;
    var summary = this.model.attributes.localeSensitive.summary;
    var content = {
      loggedIn: myApp.ent.user.isLoggedIn(),
      numberOrRef: numberOrRef,
      contextPath: myApp.ent.config.get('contextPath'),
      showItemDetailsLink: showItemDetailsLink,
      sashModel: sashModel,
      title: title,
      summary: summary
    };
    content = _.extend(content, this.model.attributes);
    return content;
  }
});
"use strict";

PageApp.Views.TimedItemActions = Backbone.Marionette.ItemView.extend({
  getTemplate: function getTemplate() {
    return hbs.templates.timedItemActions;
  },
  events: {
    'click .x-login': 'handleLogin',
    'click .x-register': 'handleRegister',
    'click .x-pending': 'handlePending',
    'click .x-pay-deposit': 'handlePayDeposit',
    'click .x-place-bid': 'handleConfirmPlaceBid',
    'click .x-cancel': 'handleCancelConfirmPlaceBid',
    'click .x-makeoffer': 'handleOpenMakeOffer',
    'click .x-buynow': 'handleOpenBuyNow',
    'click .x-transfer': 'handleOpenTransfer',
    'click .x-tender': 'handleOpenTender',
    'click .x-tenderpct': 'handleOpenTenderPct',
    'click .x-auto-bid-cancel': 'handleAutoBidCancel',
    'click .x-watching': 'handleWatching',
    'click .x-contact-seller': 'handleContactSeller'
  },
  serializeData: function serializeData() {
    var buttonLabel = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_LOG_IN');
    var buttonHelpText = '';
    var actionId = 'login';
    var action = 'login';
    var showBidButton = true;
    var showAutobidOnly = this.model.get('clientOptions').showAutobidOnly;
    var supportsBidding = this.model.get('supportsBidding');
    var bidButtonDisabledProperty = '';
    var showSimilarButton = false;
    var shouldBiddingBeDisabled = false;

    if (myApp.ent.user.isLoggedIn()) {
      if (this.model.attributes.registrant.status === 5 || this.model.attributes.registrant.id < 0) {
        buttonLabel = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_REGISTER');
        actionId = 'register';
        action = 'register';
      } else if (this.model.attributes.registrant.status === 1) {
        // Pending
        buttonLabel = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_PLACE_BID');
        actionId = 'placeBid';
        action = 'place-bid';
        bidButtonDisabledProperty = 'disabled';
        showBidButton = supportsBidding && !showAutobidOnly;
      } else if (this.model.attributes.registrant.status === 4 || this.model.attributes.registrant.status === 7) {
        buttonLabel = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_PAY_DEPOSIT');
        actionId = 'payDeposit';
        action = 'pay-deposit';
      } else {
        // user is registered in this auction
        if (showAutobidOnly) {
          showBidButton = false;
        } else {
          if (supportsBidding && this.model.get('statusId') === 4) {
            var breakLine = ' ';

            if (this.options.placing) {
              buttonLabel = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_CONFIRM') + breakLine + this.model.get('amountNextBidFormattedWithCurrency');
              actionId = 'confirmBid';
              action = 'confirm-bid';
            } else {
              this.options.placing = false;
              buttonLabel = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_PLACE_BID') + breakLine + this.model.get('amountNextBidFormattedWithCurrency');
              actionId = 'placeBid';
              action = 'place-bid';
            }

            if (this.model.get('showNumberOfUnits')) {
              buttonLabel += ' (x' + this.model.get('numberOfUnits') + ')';
            }

            if (this.model.attributes.registrant.status === 3 || this.model.attributes.registrant.status === 6) {
              bidButtonDisabledProperty = 'disabled';
            }
          } else {
            showBidButton = false;
          }
        }
      } // if we're in a prebidding state for timed auctions, and the user is registered, disable any buttons


      if (this.model.attributes.shouldBiddingBeDisabled) {
        bidButtonDisabledProperty = 'disabled';
        shouldBiddingBeDisabled = true;
        buttonHelpText = this.model.attributes.auctionNotStartedString;
      }

      if (this.model.get('closed')) {
        showBidButton = false;
        showSimilarButton = true;
        buttonLabel = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_VIEW_SIMILAR');
        action = 'similar';
      }
    }

    var showWatchCheckBox = true;
    var content = {
      JspPublicCodes_JSP_BIDDING_CONTACT_SELLER: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_CONTACT_SELLER'),
      JspPublicCodes_JSP_BIDDING_CANCEL: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_CANCEL'),
      JspPublicCodes_JSP_BIDDING_CONFIRM: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_CONFIRM'),
      JspPublicCodes_JSP_BIDDING_GOTO_WATCH_LIST: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_GOTO_WATCH_LIST'),
      JspPublicCodes_JSP_BIDDING_WATCH_ITEM: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_WATCH_ITEM'),
      JspPublicCodes_JSP_BIDDING_WATCHING_ITEM: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_WATCHING_ITEM'),
      placing: this.options.placing,
      buttonHelpText: buttonHelpText,
      buttonLabel: buttonLabel,
      action: action,
      actionId: actionId,
      shouldShowActions: !this.model.attributes.isWebcast || this.model.attributes.isPreBiddingEnabled || this.model.attributes.timeUntilStart < 0 || action === 'register' || action === 'login',
      showBidButton: showBidButton,
      showGotoWatchListLink: myApp.ent.config.get('page') !== 'myBidsLand',
      showSimilarButton: showSimilarButton,
      showWatchCheckBox: showWatchCheckBox,
      bidButtonDisabledProperty: bidButtonDisabledProperty,
      shouldBiddingBeDisabled: shouldBiddingBeDisabled,
      placeHolderMessage: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_ENTER_AUTOBID'),
      errorMessage: this.model.get('error') ? this.addErrorMessage() : ''
    };
    content = _.extend(content, this.model.attributes);
    return content;
  },
  onRender: function onRender() {
    // (re)attach the tooltip event handlers
    this.$el.tooltip({
      selector: '[data-toggle="tooltip"]'
    });
  },
  handleWatching: function handleWatching(e) {
    e.preventDefault();
    myApp.utils.ajax.postBean(null, myApp.utils.ajax.getApiEndpoint('timed/watching') + '/' + this.model.get('id') + '/' + myApp.ent.user.get('id'), _.bind(function (response) {
      if (response.models.ErrorModel) {
        myApp.vent.trigger('ui:notification', {
          text: response.models.ErrorModel.message,
          level: 'warning'
        });
      } else {
        var item = myApp.request('reqres:timed:fetch:item', {
          itemId: response.models.WatchLotModel.lot_id
        });
        item.set('watching', response.models.WatchLotModel.watching); // causes a re-render
      }
    }, this));
  },
  handleContactSeller: function handleContactSeller() {
    var model = {
      id: this.model.get('id'),
      title: this.model.get('title')
    };
    myApp.vent.trigger('contactseller:display', {
      model: model
    });
  },
  addErrorMessage: function addErrorMessage() {
    var keyPrefix = 'JspPublicCodes_JSP_BIDDING_AUTOBID_';

    if (this.model.get('inLiveBidding')) {
      keyPrefix = 'JspPublicCodes_JSP_BIDDING_MAX_BID_';
    }

    var errorMessage = myApp.reqres.request('i16:getString', keyPrefix + 'CONFIRM_1');
    errorMessage += ' ' + myApp.ent.config.get('confirmAmountThresholdMultiplier') + ' ';

    if (this.model.get('winningOrWon')) {
      errorMessage += myApp.reqres.request('i16:getString', keyPrefix + 'CONFIRM_2');
    } else {
      errorMessage += myApp.reqres.request('i16:getString', keyPrefix + 'CONFIRM_2A');
    }

    errorMessage += ' ' + this.model.get('currencySymbol') + this.model.attributes.autoBidValue + ' ';
    errorMessage += myApp.reqres.request('i16:getString', keyPrefix + 'CONFIRM_3');
    return errorMessage;
  },
  handleAutoBidCancel: function handleAutoBidCancel(e) {
    e.preventDefault();
    this.$el.find('.x-auto-bid-input').val('');
    this.model.set('error', false);
    this.model.set('autoBidValue', undefined);
    this.model.set('reconfirmed', undefined);
    this.render();
    return false;
  },
  handleLogin: function handleLogin(e) {
    e.preventDefault();
    myApp.router.navigate('#!/login', {
      trigger: true
    });
  },
  handlePending: function handlePending(e) {
    e.preventDefault();
  },
  handleRegister: function handleRegister(e) {
    e.preventDefault();
    var url = myApp.ent.config.get('contextPath') + '/registerForAuction/' + this.model.get('auctionId');

    if (!myApp.ent.user.isLoggedIn()) {
      return myApp.router.navigate('#!/login', {
        trigger: true
      });
    }

    window.location.href = url;
  },
  handlePayDeposit: function handlePayDeposit(e) {
    e.preventDefault();
    window.location.href = myApp.ent.config.get('contextPath') + '/payDeposit?registrantId=' + this.model.get('registrant').id;
  },
  handleConfirmPlaceBid: function handleConfirmPlaceBid(e) {
    e.preventDefault();

    if (this.model.get('closed')) {
      myApp.vent.trigger('ui:notification', {
        text: 'This item has expired',
        level: 'warning'
      });
      myApp.vent.trigger('timed:display');
    } else if (!myApp.ent.user.isLoggedIn()) {
      myApp.vent.trigger('ui:notification', {
        text: 'You are not logged in.',
        level: 'warning'
      });
    } else if (!this.model.attributes.registrant.approved) {
      myApp.vent.trigger('ui:notification', {
        text: 'Your registration is not approved.',
        level: 'warning'
      });
    } else {
      this.options.placing = true;
      this.render();
    }
  },
  handleCancelConfirmPlaceBid: function handleCancelConfirmPlaceBid(e) {
    e.preventDefault();
    this.options.placing = false;
    this.render();
  },
  handleOpenBuyNow: function handleOpenBuyNow(e) {
    e.preventDefault();
    var item = myApp.request('reqres:timed:fetch:item', {
      itemId: this.model.attributes.id
    });
    var model = myApp.ent.purchaseEntity.setModelForBuyNow(item.attributes, 1);
    this.fireTrigger(model, 'buynow:display');
    return false;
  },
  handleOpenMakeOffer: function handleOpenMakeOffer(e) {
    e.preventDefault();
    var item = myApp.request('reqres:timed:fetch:item', {
      itemId: this.model.attributes.id
    });
    var model = myApp.ent.purchaseEntity.setModelForMakeOffer(item.attributes, false);
    this.fireTrigger(model, 'makeoffer:display');
    return false;
  },
  handleOpenTransfer: function handleOpenTransfer(e) {
    e.preventDefault();
    var item = myApp.request('reqres:timed:fetch:item', {
      itemId: this.model.attributes.id
    });
    var model = myApp.ent.purchaseEntity.setModelForTransfer(item.attributes, 1);
    this.fireTrigger(model, 'transfer:display');
    return false;
  },
  handleOpenTender: function handleOpenTender(e) {
    e.preventDefault();
    var item = myApp.request('reqres:timed:fetch:item', {
      itemId: this.model.attributes.id
    });
    var model = myApp.ent.purchaseEntity.setModelForTender(item.attributes, true);
    this.fireTrigger(model, 'tender:display');
    return false;
  },
  handleOpenTenderPct: function handleOpenTenderPct(e) {
    e.preventDefault();
    var item = myApp.request('reqres:timed:fetch:item', {
      itemId: this.model.attributes.id
    });
    var model = myApp.ent.purchaseEntity.setModelForTender(item.attributes, true);
    this.fireTrigger(model, 'tenderPct:display');
    return false;
  },
  fireTrigger: function fireTrigger(model, triggerName) {
    if (model.get('closed') && !(triggerName === 'tender:display' || triggerName === 'tenderPct:display')) {
      myApp.vent.trigger('ui:notification', {
        text: 'This item has expired',
        level: 'warning'
      });
      myApp.vent.trigger('timed:display');
    } else if (!myApp.ent.user.isLoggedIn()) {
      myApp.vent.trigger('ui:notification', {
        text: 'You are not logged in.',
        level: 'warning'
      });
    } else if (!this.model.attributes.registrant.approved) {
      myApp.vent.trigger('ui:notification', {
        text: 'Your registration is not approved.',
        level: 'warning'
      });
    } else {
      myApp.vent.trigger(triggerName, {
        model: model
      });
    }
  }
});
"use strict";

PageApp.Views.TimedItemsView = Marionette.CollectionView.extend({
  childView: PageApp.Views.TimedItemLayout,
  initialize: function initialize(options) {
    this.collection = options.collection;
  },
  events: {},
  className: function className() {
    var layout = myApp.ent.user.getPreference('layoutForBidding', {
      value: 'grid'
    });
    return layout === 'grid' ? 'grid-container' : 'list-container';
  },
  childViewOptions: function childViewOptions(model, index) {
    return {
      childIndex: index,
      hasConnection: this.hasConnection
    };
  }
});
"use strict";

PageApp.Ent.ItemAlert = Backbone.Model.extend({
  initialize: function initialize(models, options) {
    this.urlRoot = myApp.ent.config.get('contextPath') + '/itemalerts';
  },
  validate: function validate(attrs) {
    var errors = [];

    if (!attrs.name) {
      errors.push({
        name: 'name'
      });
    }

    if (!attrs.query) {
      errors.push({
        name: 'query'
      });
    }

    if (attrs.runOnSunday === false && attrs.runOnMonday === false && attrs.runOnTuesday === false && attrs.runOnWednesday === false && attrs.runOnThursday === false && attrs.runOnFriday === false && attrs.runOnSaturday === false) {
      errors.push({
        name: 'frequency'
      });
    }

    if (errors.length > 0) return errors;
  }
});
"use strict";

PageApp.Ent.ItemAlerts = Backbone.Collection.extend({
  model: PageApp.Ent.ItemAlert,
  initialize: function initialize(models, options) {
    this.url = myApp.ent.config.get('contextPath') + '/itemalerts';
  }
});
"use strict";

PageApp.Views.ItemAlertView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.itemAlertView,
  tagName: 'tr',
  initialize: function initialize() {
    this.listenTo(this.model, 'sync', this.render);
  },
  serializeData: function serializeData() {
    var contextPath = myApp.ent.config.get('contextPath');
    var content = {
      contextPath: contextPath,
      JspPublicCodes_JSP_ITEM_ALERTS_EDIT_TOOLTIP: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_EDIT_TOOLTIP'),
      JspPublicCodes_JSP_ITEM_ALERTS_DELETE_TOOLTIP: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_DELETE_TOOLTIP'),
      JspPublicCodes_JSP_ITEM_ALERTS_VIEW: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_VIEW'),
      frequency: this.getFrequency()
    };
    content = _.extend(content, this.model.attributes);
    content = _.extend(content, this.getStateAttributes());
    return content;
  },
  getFrequency: function getFrequency() {
    var frequency = [];
    if (this.model.get('runOnSunday')) frequency.push(myApp.reqres.request('i16:getString', 'JSTextCodes_SUN'));
    if (this.model.get('runOnMonday')) frequency.push(myApp.reqres.request('i16:getString', 'JSTextCodes_MON'));
    if (this.model.get('runOnTuesday')) frequency.push(myApp.reqres.request('i16:getString', 'JSTextCodes_TUE'));
    if (this.model.get('runOnWednesday')) frequency.push(myApp.reqres.request('i16:getString', 'JSTextCodes_WED'));
    if (this.model.get('runOnThursday')) frequency.push(myApp.reqres.request('i16:getString', 'JSTextCodes_THU'));
    if (this.model.get('runOnFriday')) frequency.push(myApp.reqres.request('i16:getString', 'JSTextCodes_FRI'));
    if (this.model.get('runOnSaturday')) frequency.push(myApp.reqres.request('i16:getString', 'JSTextCodes_SAT'));
    return frequency.join(', ');
  },
  getStateAttributes: function getStateAttributes() {
    var pauseFaClass;
    var pauseTooltip;
    var statusText;

    if (this.model.get('status') === 'LIVE') {
      pauseTooltip = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_PAUSE_TOOLTIP');
      pauseFaClass = 'fa-pause';
      statusText = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_STATUS_LIVE');
    } else {
      pauseTooltip = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_UNPAUSE_TOOLTIP');
      pauseFaClass = 'fa-play';
      statusText = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_STATUS_PAUSED');
    }

    return {
      pauseFaClass: pauseFaClass,
      pauseTooltip: pauseTooltip,
      statusText: statusText
    };
  }
});
"use strict";

PageApp.Views.ConfirmDeleteView = Backbone.Marionette.LayoutView.extend({
  template: hbs.templates.confirmOkCancel,
  initialize: function initialize(options) {
    this.model = options.model;
    this.id = options.id;
  },
  serializeData: function serializeData() {
    return {
      confirmMsg: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_CONFIRM_DELETE'),
      okButtonText: myApp.reqres.request('i16:getString', 'JSTextCodes_DELETE'),
      JSTextCodes_CANCEL: myApp.reqres.request('i16:getString', 'JSTextCodes_CANCEL')
    };
  },
  events: {
    'click .x-ok': 'handleDelete'
  },
  handleDelete: function handleDelete(e) {
    var itemAlert = this.model.get(this.id);
    itemAlert.destroy({
      success: this.handleSuccess,
      error: this.handleError
    });
    return true;
  },
  handleError: function handleError(model, xhr, options) {
    myApp.vent.trigger('error:notifyServerError', _.pick(xhr, 'responseJSON', 'status', 'statusText'));
  },
  handleSuccess: function handleSuccess(model) {
    var message = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_DELETED_ALERT') + ' ' + model.get('name');
    myApp.vent.trigger('ui:notification', {
      text: message,
      level: 'success'
    });
  }
});
"use strict";

PageApp.Views.ConfirmPauseView = Backbone.Marionette.LayoutView.extend({
  template: hbs.templates.confirmOkCancel,
  initialize: function initialize(options) {
    this.model = options.model;
    this.itemAlert = this.model.get(options.id);
  },
  serializeData: function serializeData() {
    return {
      confirmMsg: this.getConfirmMsg(),
      okButtonText: this.getOkButtonText(),
      JSTextCodes_CANCEL: myApp.reqres.request('i16:getString', 'JSTextCodes_CANCEL')
    };
  },
  events: {
    'click .x-ok': 'togglePause'
  },
  getConfirmMsg: function getConfirmMsg() {
    if (this.itemAlert.get('status') === 'LIVE') {
      return myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_CONFIRM_PAUSE');
    } else {
      return myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_CONFIRM_UNPAUSE');
    }
  },
  getOkButtonText: function getOkButtonText() {
    if (this.itemAlert.get('status') === 'LIVE') {
      return myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_PAUSE');
    } else {
      return myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_UNPAUSE');
    }
  },
  togglePause: function togglePause(e) {
    if (this.itemAlert.get('status') === 'LIVE') {
      this.itemAlert.set('status', 'PAUSED');
    } else {
      this.itemAlert.set('status', 'LIVE');
    }

    this.itemAlert.save({}, {
      success: _.bind(this.handleSuccess, this),
      error: _.bind(this.handleError, this)
    });
    return true;
  },
  handleError: function handleError(model, xhr, options) {
    myApp.vent.trigger('error:notifyServerError', _.pick(xhr, 'responseJSON', 'status', 'statusText'));
  },
  handleSuccess: function handleSuccess(model) {
    var message = ' ' + model.get('name');

    if (this.itemAlert.get('status') === 'PAUSED') {
      message = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_PAUSED_ALERT') + message;
    } else {
      message = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_UNPAUSED_ALERT') + message;
    }

    myApp.vent.trigger('ui:notification', {
      text: message,
      level: 'success'
    });
  }
});
"use strict";

PageApp.Views.CreateItemAlertView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.createItemAlert,
  initialize: function initialize(options) {
    this.collection = options.collection;
    this.model = options.model;
    this.model.on('invalid', _.bind(this.showErrors, this));
  },
  events: {
    'click .x-submit': 'handleSubmit',
    'blur  .x-query': 'upperCaseBooleanOperators'
  },
  ui: {
    alertName: '.x-alert-name',
    query: '.x-query',
    sunday: '.x-sunday',
    monday: '.x-monday',
    tuesday: '.x-tuesday',
    wednesday: '.x-wednesday',
    thursday: '.x-thursday',
    friday: '.x-friday',
    saturday: '.x-saturday',
    nameGroup: '.x-name-group',
    queryGroup: '.x-query-group',
    frequencyGroup: '.x-frequency-group',
    errors: '.x-errors'
  },
  serializeData: function serializeData() {
    var content = {
      title: this.model.get('id') ? myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_EDIT_ALERT_TITLE') : myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_CREATE_ALERT_TITLE'),
      description: this.model.get('id') ? myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_EDIT_ALERT_DESC') : myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_CREATE_ALERT_DESC'),
      JspPublicCodes_JSP_ITEM_ALERTS_CREATE_ALERT_NAME: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_CREATE_ALERT_NAME'),
      JspPublicCodes_JSP_ITEM_ALERTS_CREATE_ALERT_SEARCH_CRIT: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_CREATE_ALERT_SEARCH_CRIT'),
      JspPublicCodes_JSP_ITEM_ALERTS_CREATE_ALERT_FREQUENCY: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_CREATE_ALERT_FREQUENCY'),
      JSTextCodes_SUNDAY: myApp.reqres.request('i16:getString', 'JSTextCodes_SUNDAY'),
      JSTextCodes_MONDAY: myApp.reqres.request('i16:getString', 'JSTextCodes_MONDAY'),
      JSTextCodes_TUESDAY: myApp.reqres.request('i16:getString', 'JSTextCodes_TUESDAY'),
      JSTextCodes_WEDNESDAY: myApp.reqres.request('i16:getString', 'JSTextCodes_WEDNESDAY'),
      JSTextCodes_THURSDAY: myApp.reqres.request('i16:getString', 'JSTextCodes_THURSDAY'),
      JSTextCodes_FRIDAY: myApp.reqres.request('i16:getString', 'JSTextCodes_FRIDAY'),
      JSTextCodes_SATURDAY: myApp.reqres.request('i16:getString', 'JSTextCodes_SATURDAY'),
      JSTextCodes_SAVE: myApp.reqres.request('i16:getString', 'JSTextCodes_SAVE'),
      JSTextCodes_CANCEL: myApp.reqres.request('i16:getString', 'JSTextCodes_CANCEL')
    };
    content = _.extend(content, this.model.attributes);
    return content;
  },
  upperCaseBooleanOperators: function upperCaseBooleanOperators() {
    var str = this.ui.query.val();
    str = str.replace(/\band\b/ig, 'AND');
    str = str.replace(/\bor\b/ig, 'OR');
    str = str.replace(/\bnot\b/ig, 'NOT');
    this.ui.query.val(str);
  },
  handleSubmit: function handleSubmit(e) {
    this.hideErrors();
    this.model.set('name', this.ui.alertName.val());
    this.model.set('query', this.ui.query.val());

    if (!this.model.get('status')) {
      this.model.set('status', 'LIVE');
    }

    this.model.set('runOnSunday', this.ui.sunday.is(':checked'));
    this.model.set('runOnMonday', this.ui.monday.is(':checked'));
    this.model.set('runOnTuesday', this.ui.tuesday.is(':checked'));
    this.model.set('runOnWednesday', this.ui.wednesday.is(':checked'));
    this.model.set('runOnThursday', this.ui.thursday.is(':checked'));
    this.model.set('runOnFriday', this.ui.friday.is(':checked'));
    this.model.set('runOnSaturday', this.ui.saturday.is(':checked'));
    this.model.set('@class', 'com.bidlogix.scaffold.models.itemalerts.ItemAlertModel');
    this.collection.create(this.model, {
      async: false,
      success: _.bind(this.handleSuccess, this),
      error: _.bind(this.handleError, this),
      wait: true
    });

    if (this.hasErrors === true) {
      return false;
    }

    return true;
  },
  hideErrors: function hideErrors() {
    this.ui.nameGroup.removeClass('has-error');
    this.ui.queryGroup.removeClass('has-error');
    this.ui.frequencyGroup.removeClass('has-error');
    this.ui.errors.text('');
    this.hasErrors = false;
  },
  showErrors: function showErrors(model, errors) {
    _.each(errors, function (error) {
      if (error.name === 'name') {
        this.ui.nameGroup.addClass('has-error');
      } else if (error.name === 'query') {
        this.ui.queryGroup.addClass('has-error');
      } else if (error.name === 'frequency') {
        this.ui.frequencyGroup.addClass('has-error');
      }

      var msg = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_SAVE_ALERT_MISSING_FIELDS');
      this.ui.errors.text(msg);
    }, this);

    this.hasErrors = true;
  },
  handleError: function handleError(model, xhr, options) {
    var errorMsg = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_SAVE_ALERT_ERROR_MSG');

    if (xhr.responseJSON) {
      errorMsg = xhr.responseJSON.message;
    }

    this.ui.errors.text(errorMsg);
    this.hasErrors = true;
  },
  handleSuccess: function handleSuccess(model) {
    var message = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_SAVED_ALERT') + ' ' + model.get('name');
    myApp.vent.trigger('ui:notification', {
      text: message,
      level: 'success'
    });
  }
});
"use strict";

PageApp.Views.ItemAlertsActionsView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.itemAlertsActions,
  serializeData: function serializeData() {
    var contextPath = myApp.ent.config.get('contextPath');
    var content = {
      contextPath: contextPath,
      JspPublicCodes_JSP_ITEM_ALERTS_CREATE_ALERT: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_CREATE_ALERT')
    };
    return content;
  }
});
"use strict";

PageApp.Views.ItemAlertsHeaderView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.itemAlertsHeader,
  serializeData: function serializeData() {
    var content = {
      JspPublicCodes_JSP_ITEM_ALERTS_TITLE: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_TITLE'),
      JspPublicCodes_JSP_ITEM_ALERTS_DESC: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_DESC')
    };
    return content;
  }
});
"use strict";

PageApp.Views.ItemAlertsLayout = Backbone.Marionette.LayoutView.extend({
  template: hbs.templates.itemAlertsLayout,
  events: {
    'click .x-create': 'showCreateDialog',
    'click .x-pause': 'showPauseDialog',
    'click .x-edit': 'showEditDialog',
    'click .x-delete': 'showDeleteDialog'
  },
  regions: {
    headerRegion: '#headerRegion',
    actionsRegion: '#actionsRegion',
    alertsRegion: '#alertsRegion'
  },
  onRender: function onRender() {
    this.getRegion('headerRegion').show(new PageApp.Views.ItemAlertsHeaderView());
    this.getRegion('actionsRegion').show(new PageApp.Views.ItemAlertsActionsView());
    this.getRegion('alertsRegion').show(new PageApp.Views.ItemAlertsView({
      collection: this.model
    }));
  },
  showDeleteDialog: function showDeleteDialog(e) {
    e.preventDefault();
    var id = $(e.currentTarget).data('id');
    myApp.vent.trigger('itemalerts:showdelete', {
      id: id,
      model: this.model
    });
  },
  showPauseDialog: function showPauseDialog(e) {
    e.preventDefault();
    var id = $(e.currentTarget).data('id');
    myApp.vent.trigger('itemalerts:showpause', {
      id: id,
      model: this.model
    });
  },
  showCreateDialog: function showCreateDialog(e) {
    e.preventDefault();
    myApp.vent.trigger('itemalerts:showcreate', {
      collection: this.model,
      model: new PageApp.Ent.ItemAlert()
    });
  },
  showEditDialog: function showEditDialog(e) {
    e.preventDefault();
    var id = $(e.currentTarget).data('id');
    myApp.vent.trigger('itemalerts:showcreate', {
      collection: this.model,
      model: this.model.get(id)
    });
  }
});
"use strict";

PageApp.Views.ItemAlertsView = Backbone.Marionette.CompositeView.extend({
  template: hbs.templates.itemAlertsView,
  childView: PageApp.Views.ItemAlertView,
  childViewContainer: '#tbody-region',
  serializeData: function serializeData() {
    var contextPath = myApp.ent.config.get('contextPath');
    var content = {
      contextPath: contextPath,
      JspPublicCodes_JSP_ITEM_ALERTS_ALERT: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_ALERT'),
      JspPublicCodes_JSP_ITEM_ALERTS_STATUS: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_STATUS'),
      JspPublicCodes_JSP_ITEM_ALERTS_ACTIONS: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_ACTIONS'),
      JspPublicCodes_JSP_ITEM_ALERTS_RESULTS: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_RESULTS'),
      JspPublicCodes_JSP_ITEM_ALERTS_VIEW: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_VIEW'),
      JspPublicCodes_JSP_ITEM_ALERTS_DELETE: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_ALERTS_DELETE')
    };
    return content;
  }
});
"use strict";

PageApp.Controllers.ItemAlertsRouter = function () {
  function initEvents() {
    myApp.vent.on('itemalerts:display', function (model) {
      myApp.mainRegion.show(new PageApp.Views.ItemAlertsLayout({
        model: model
      }));
    }, this);
    myApp.vent.on('modal:closed', function (config) {
      this.modalInProgress = false;
    }, this);
    myApp.vent.on('itemalerts:showdelete', function (config) {
      if (!this.modalInProgress) {
        this.modalInProgress = true;
        var view = new PageApp.Views.ConfirmDeleteView(config);
        myApp.myModalRegion.show(new PageApp.Views.ModalLayout({
          view: view
        }));
      }
    }, this);
    myApp.vent.on('itemalerts:showpause', function (config) {
      if (!this.modalInProgress) {
        this.modalInProgress = true;
        var view = new PageApp.Views.ConfirmPauseView(config);
        myApp.myModalRegion.show(new PageApp.Views.ModalLayout({
          view: view
        }));
      }
    }, this);
    myApp.vent.on('itemalerts:showcreate', function (config) {
      if (!this.modalInProgress) {
        this.modalInProgress = true;
        var view = new PageApp.Views.CreateItemAlertView(config);
        myApp.myModalRegion.show(new PageApp.Views.ModalLayout({
          view: view
        }));
      }
    }, this);
  }

  return {
    initialize: function initialize() {
      initEvents();
    }
  };
};
"use strict";

PageApp.AjaxUtils = function () {
  function appendUniqueId(action, params) {
    // fix
    var url = myApp.ent.config.get('apiBase') + action;

    if (action.indexOf('myBids') > -1) {
      return url;
    }

    if (params) {
      for (var key in params) {
        var param = params[key];
        url += '/' + param;
      }
    }

    var randVal = new Date().getTime() + Math.floor(Math.random() * 1000000 + 1);

    if (url.indexOf('?') === -1) {
      url += '?uid=' + myApp.ent.config.get('uid') + '&nocache=' + randVal;
    } else {
      url += '&uid=' + myApp.ent.config.get('uid') + '&nocache=' + randVal;
    }

    return url;
  }

  function getConfig(action, params, callback, method) {
    var url = appendUniqueId(action, params);
    return {
      url: url,
      action: action,
      method: !method ? 'GET' : method,
      successHandler: callback,
      errorHandler: callback
    };
  }

  function getConfigPostBean(action, bean, callback, method) {
    var url = appendUniqueId(action);
    return {
      url: url,
      action: action,
      data: bean,
      method: !method ? 'GET' : method,
      successHandler: callback,
      errorHandler: callback
    };
  }

  function getHeaders() {
    var headers = {
      'X-Forwarded-client-Id': myApp.ent.config.attributes.clientId.substring(1)
    };
    var token = myApp.utils.token.getToken();

    if (token) {
      headers.Authorization = 'bearer ' + token;
    }

    return headers;
  }

  function logoutUser() {
    if (myApp.utils.token.getToken()) {
      myApp.vent.trigger('ui:notification', {
        sticky: true,
        text: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_LOGIN_SESSION_ERROR'),
        level: 'danger'
      });
    } else {
      myApp.vent.trigger('ui:notification', {
        sticky: true,
        text: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_NOT_LOGGED_IN'),
        level: 'danger'
      });
    }

    myApp.router.navigate('#!/logout', {
      trigger: true,
      replace: true
    });
  }

  function sendToServer(config, skipTokenCheck) {
    var ajaxConfig = function ajaxConfig() {
      return {
        url: config.url,
        beforeSend: config && config.headers ? function (xhr) {
          xhr.setRequestHeader(config.headers[0].name, config.headers[0].value);
        } : function noop() {},
        contentType: config.contentType ? config.contentType : 'application/json',
        dataType: config.dataType ? config.dataType : 'json',
        method: config.method ? config.method : 'POST',
        timeout: 60000,
        // timeout 60s note the server side timeout is 50s so the server should expire first.
        data: JSON.stringify(config.data),
        headers: getHeaders(),
        success: function success(response) {
          if (config.successHandler) {
            try {
              if (response.actionCode && myApp.ent.status && response.actionCode === myApp.ent.status.getRabbitResponseByName('PUBLIC_RELOAD').id) {
                myApp.vent.trigger('ui:notification', {
                  sticky: true,
                  text: 'Please reload this page.',
                  level: 'danger'
                });
                return;
              }
            } catch (err) {}

            config.successHandler(response);
          }
        },
        error: function error(response, textStatus, errorThrown) {
          switch (response.status) {
            case 401:
              // skipTokenCheck is used for SSO endpoints, which can return a 401 and still allow the user to browse the site.
              // in this case we do not want to "log the user out", since they are not logged in.
              if (!skipTokenCheck) {
                if (myApp.utils.token.getToken()) {
                  myApp.vent.trigger('ui:notification', {
                    sticky: true,
                    text: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_LOGIN_SESSION_ERROR'),
                    level: 'danger'
                  });
                } else {
                  myApp.vent.trigger('ui:notification', {
                    sticky: true,
                    text: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_NOT_LOGGED_IN'),
                    level: 'danger'
                  });
                }

                if (response.responseJSON.error === 'invalid_token') {
                  console.warn('Invalid token, logging out');
                  window.localStorage.removeItem('bidJSToken');
                  window.location.reload();
                  return;
                }

                logoutUser();
              }

              break;

            case 403:
              if (config.errorHandler) {
                return config.errorHandler(response.responseJSON);
              } else if (config.successHandler) {
                return config.successHandler(response.responseJSON);
              }

              break;

            case 404:
              myApp.mainRegion.show(new PageApp.Views.ErrorNotFoundView({
                model: myApp.ent.fourOFour
              }));
          }

          try {
            if (response.actionCode === myApp.ent.status.getRabbitResponseByName('PUBLIC_RELOAD').id) {
              myApp.vent.trigger('ui:notification', {
                sticky: true,
                text: 'Please reload this page.',
                level: 'danger'
              });
              return;
            }
          } catch (err) {}

          if (errorThrown === 'timeout') {
            myApp.vent.trigger('timed:poll');
          }

          if (!response) {
            response = {
              failed: true,
              worked: false,
              message: 'server error - please reload'
            };
          }

          if (!response.failed || !response.worked) {
            // if we failed, merge in the response JSON so we can deal with validation errors etc
            response = Object.assign({}, response.responseJSON, {
              failed: true,
              worked: false
            });
          }

          try {
            if (config.errorHandler) {
              config.errorHandler(response);
            } else if (config.successHandler) {
              config.successHandler(response);
            }
          } catch (err) {
            if (response && response.message) {
              myApp.vent.trigger('ui:notification', {
                sticky: true,
                text: response.message,
                level: 'danger'
              });
            } else {
              myApp.vent.trigger('ui:notification', {
                sticky: true,
                text: 'server error - please refresh this page',
                level: 'danger'
              });
            }
          }
        }
      };
    };

    if (myApp.utils.oAuth.isUsingOAuth()) {
      myApp.utils.oAuth.parse(skipTokenCheck).then(function () {
        return $.ajax(ajaxConfig());
      })["catch"](function () {
        return $.ajax(ajaxConfig());
      });
    } else {
      return $.ajax(ajaxConfig());
    }
  }

  return {
    getApiEndpoint: function getApiEndpoint(endpointName) {
      if (window.apiConfiguration) {
        var version = window.apiConfiguration[endpointName];
      }

      var base = version ? '/v' + version + '/' : '/';
      return base + endpointName;
    },
    get: function get(params, action, callback) {
      var config = getConfig(action, params, callback, 'GET');
      return sendToServer(config);
    },
    getDirect: function getDirect(config, handler) {
      config.successHandler = handler;
      config.errorHandler = handler;
      return sendToServer(config);
    },
    post: function post(params, action, callback) {
      var config = getConfig(action, params, callback, 'POST');
      return sendToServer(config);
    },
    postDirect: function postDirect(config, skipTokenCheck) {
      if (skipTokenCheck) {
        skipTokenCheck = true;
      }

      return sendToServer(config, skipTokenCheck);
    },
    postBean: function postBean(bean, action, callback) {
      var config = getConfigPostBean(action, bean, callback, 'POST');
      return sendToServer(config);
    },
    postPut: function postPut(bean, action, callback) {
      var method = 'POST'; // save new object

      if (bean && bean.id && bean.id > 0) {
        method = 'PUT'; // update existing object
      }

      var config = getConfigPostBean(action, bean, callback, method);
      return sendToServer(config);
    },
    relocate: function relocate(pathname) {
      var page = myApp.ent.config.get('page');

      if (page === 'searchland' || page === 'marketland' || page === 'auctionland') {
        if (pathname && pathname.startsWith('#')) {
          pathname = pathname.substring(1);
        }

        myApp.router.navigate(pathname, {
          trigger: true
        });
      } else {
        var protocol = myApp.ent.config.get('protocol');

        if (window.location.protocol !== 'https:') {
          window.location = protocol + '://' + window.location.hostname + pathname;
        } else {
          window.location = pathname;
        }
      }
    },
    updatePageMetaModel: function updatePageMetaModel(metamodel) {
      document.title = metamodel.metaTitle;
      $('meta[name="title"]').attr('content', metamodel.metaTitle);
      $('meta[name="description"]').attr('content', metamodel.metaDescription);
    }
  };
};
"use strict";

PageApp.ErrorUtils = function () {
  var ImgErrorWithCss = function ImgErrorWithCss(img, cssClass) {
    try {
      var $img = $(img);
      var width = $img.data('width');
      var height = $img.data('height');
      img.onerror = null;
      var parentNode = img.parentNode;

      if (parentNode) {
        var imgSrc = img.src.replace('?', '');
        var isAwaitingImg = imgSrc.length === 0 || window.location.href.indexOf(imgSrc) === 0;
        var parentClassName = parentNode.className;
        parentNode.className = parentClassName.length > 0 ? parentClassName + ' ' + cssClass : cssClass;
        if (width) $(parentNode).css('width', width + 'px');
        if (height) $(parentNode).css('height', height + 'px');

        if (isAwaitingImg) {
          parentNode.innerHTML = '<div class="img-error-container"><div><!--' + img.src + '-->' + myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AWAITING_IMAGE') + '</div></div>';
        } else {
          parentNode.innerHTML = '<div class="img-error-container"><div><!--' + img.src + '-->' + myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_MISSING_IMAGE') + '</div></div>';
        }
      }

      return false;
    } catch (err) {
      console.log(err);
    }
  };

  return {
    ImgErrorThumb: function ImgErrorThumb(img) {
      return ImgErrorWithCss(img, 'img-error-thumb');
    },
    ImgErrorPreview: function ImgErrorPreview(img) {
      return ImgErrorWithCss(img, 'img-error-preview');
    },
    ImgError: function ImgError(img) {
      return ImgErrorWithCss(img, 'img-error-thumb');
    },
    ImgErrorHomeList: function ImgErrorHomeList(img) {
      return ImgErrorWithCss(img, 'img-error-list-home');
    },
    ImgErrorWebSaleInfo: function ImgErrorWebSaleInfo(img) {
      return ImgErrorWithCss(img, 'img-error-saleinfo-web');
    },
    ImgErrorHomeGallery: function ImgErrorHomeGallery(img) {
      return ImgErrorWithCss(img, 'img-error-gal-home');
    },
    ImgErrorHomeAuctioneer: function ImgErrorHomeAuctioneer(img) {
      return ImgErrorWithCss(img, 'img-error-auctioneer-home');
    },
    ImgErrorHomeAuctioneerLg: function ImgErrorHomeAuctioneerLg(img) {
      return ImgErrorWithCss(img, 'img-error-auctioneer-home-lg');
    }
  };
};
"use strict";

PageApp.MiscUtils = function () {
  return {
    sendGoogleAnalytics: function sendGoogleAnalytics(eventCategory, eventAction, eventLabel, page) {
      var gaName = window.GoogleAnalyticsObject;

      try {
        if (page) {
          window[gaName]('set', 'page', page);
          window[gaName]('set', 'hostname', window.location.hostname);
          window[gaName]('send', 'pageview');

          if (myApp.ent.webApp.attributes.analyticsAllowed) {
            try {
              window[gaName]('app.set', 'page', page);
              window[gaName]('app.set', 'hostname', window.location.hostname);
              window[gaName]('app.send', 'pageview');
            } catch (e) {
              console.log('An error occurred while sending analytics.');
            }
          }
        }

        if (eventCategory) {
          window[gaName]('send', {
            hitType: 'event',
            eventCategory: eventCategory,
            eventAction: eventAction,
            eventLabel: eventLabel
          });

          if (myApp.ent.webApp.attributes.analyticsAllowed) {
            try {
              window[gaName]('app.send', {
                hitType: 'event',
                eventCategory: eventCategory,
                eventAction: eventAction,
                eventLabel: eventLabel
              });
            } catch (e) {
              console.log('An error occurred while sending analytics.');
            }
          }
        }
      } catch (err) {
        if (console) console.log('Unable to send analytics event.');
      }
    },
    resetScrollPosition: function resetScrollPosition() {
      document.getElementById('bidlogix-app').scrollIntoView(true);
    }
  };
};
"use strict";

var permanentFailureResponseCodes = ['401', '403'];

function isUsingOAuth() {
  return !!myApp.ent.config.getOAuthLoginEndpoint();
}

function invalidate() {
  return myApp.vent.trigger('authentication:remove', true);
}

function validate(token) {
  return new Promise(function (resolve, reject) {
    var handleValidationResponse = function handleValidationResponse(thirdPartyToken, response) {
      if (response && response.accessToken) {
        myApp.ent.user.set(response);
        myApp.vent.trigger('authentication:success', response, false);
        myApp.utils.token.setAttemptedThirdPartyToken(thirdPartyToken);
        return resolve(true);
      }

      if (token && permanentFailureResponseCodes.indexOf(response.code) > -1) {
        myApp.utils.token.setAttemptedThirdPartyToken(thirdPartyToken);
      }

      var error = 'unable to parse token from response';
      console.error(error, response);
      return reject(new Error(error));
    };

    if (token) {
      myApp.utils.ajax.postDirect({
        url: myApp.actions.oAuthToken(),
        data: {
          token: token
        },
        method: 'POST',
        successHandler: handleValidationResponse.bind(this, token)
      }, true);
    } else {
      return reject(new Error('no token to validate'));
    }
  });
}

function parse(skipTokenCheck) {
  return new Promise(function (resolve, reject) {
    if (skipTokenCheck) {
      return resolve(true);
    }

    function doValidate(thirdPartyToken) {
      return validate(thirdPartyToken).then(function () {
        resolve(true);
      })["catch"](function () {
        resolve(false);
      });
    } // if we're relying on OAuth, check that existing token is still there


    if (isUsingOAuth()) {
      var isUserAuthenticated = myApp.ent.user.isLoggedIn();
      var thirdPartyToken = myApp.utils.token.getThirdPartyToken();
      var bidlogixToken = myApp.utils.token.getToken();

      if (thirdPartyToken) {
        var lastKnownThirdPartyToken = myApp.utils.token.getAttemptedThirdPartyToken();

        if (!isUserAuthenticated) {
          if (thirdPartyToken !== lastKnownThirdPartyToken) {
            return doValidate(thirdPartyToken);
          } else {
            console.warn('Skipping login attempt for token, as previously failed');
          }
        } else {
          // if there is a token mismatch, revalidate token
          if (lastKnownThirdPartyToken && thirdPartyToken !== lastKnownThirdPartyToken) {
            // display revalidation notification
            myApp.vent.trigger('ui:notification', {
              text: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_LOGIN_REVALIDATION'),
              level: 'warning'
            });
            return doValidate(thirdPartyToken);
          } else if (!lastKnownThirdPartyToken) {
            return doValidate(thirdPartyToken);
          }
        }
      } else if (isUserAuthenticated && bidlogixToken) {
        return resolve(invalidate());
      }

      return resolve(false);
    }
  });
}

PageApp.OAuthUtils = function () {
  return {
    isUsingOAuth: isUsingOAuth,
    parse: parse
  };
};
"use strict";

function escape(s) {
  return s.replace(/([.*+?^${}()|[\]/\\])/g, '\\$1');
}

function getCookie(name) {
  var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
  return match ? match[1] : null;
}

PageApp.TokenUtils = function () {
  var tokenName = 'bidJSToken';
  var thirdPartyToken = null;
  return {
    getToken: function getToken() {
      return window.localStorage.getItem(tokenName);
    },
    setToken: function setToken(value) {
      window.localStorage.setItem(tokenName);
    },
    deleteToken: function deleteToken() {
      window.localStorage.removeItem(tokenName);
    },
    getThirdPartyToken: function getThirdPartyToken() {
      var thirdPartyTokenInformation = myApp.ent.config.getOAuthTokenInformation();

      if (thirdPartyTokenInformation.isTokenLocalStorage) {
        return window.localStorage.getItem(thirdPartyTokenInformation.name);
      }

      return getCookie(thirdPartyTokenInformation.name);
    },
    getAttemptedThirdPartyToken: function getAttemptedThirdPartyToken() {
      return thirdPartyToken;
    },
    setAttemptedThirdPartyToken: function setAttemptedThirdPartyToken(value) {
      thirdPartyToken = value;
    }
  };
};
"use strict";

PageApp.TypeUtils = function () {
  function toNumericCharsOnlyInternal(text, thousandsSeparator, allowDecimal) {
    var decimalSeparator = '.';

    if (!thousandsSeparator) {
      thousandsSeparator = ',';
    }

    if (thousandsSeparator !== ',') {
      thousandsSeparator = '.';
      decimalSeparator = ',';
    }

    var textStr = text.toString();
    var numberOfDecimalSeparators = textStr.split(decimalSeparator).length - 1;

    if (numberOfDecimalSeparators > 1 || !allowDecimal) {
      // Get rid of all non numbers
      return textStr.replace(/[^\d]/g, '');
    } else {
      // Get rid of all non number excluding the decimalSeparators
      var re = new RegExp('[^\\d' + decimalSeparator + ']', 'g');
      textStr = textStr.replace(re, '');

      if (numberOfDecimalSeparators === 1) {
        // Ensure no more than 2 digits after the decimal point
        var poundsAndPence = textStr.split(decimalSeparator);
        var pounds = poundsAndPence[0];
        var pence = poundsAndPence[1];
        pence = pence.substring(0, 2);
        textStr = pounds + decimalSeparator + pence;
      } // Works to format to 2 dp but causes issues when using backspace
      // var asFloat = parseFloat(textStr);
      // return asFloat.toFixed(2).toString();


      return textStr;
    }
  }

  function toFormattedNumberInternal(text, thousandsSeparator, allowDecimal) {
    if (!thousandsSeparator) {
      thousandsSeparator = ',';
    }

    try {
      if (allowDecimal) {
        return toNumericCharsOnlyInternal(text.toString(), thousandsSeparator, true).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + thousandsSeparator);
      } else {
        return toNumericCharsOnlyInternal(text.toString(), thousandsSeparator, false).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + thousandsSeparator);
      }
    } catch (err) {
      console.log(err);
      return '';
    }
  }

  return {
    arrayContains: function arrayContains(theArray, theValue) {
      for (var key in theArray) {
        if (theArray[key] === theValue) {
          return true;
        }
      }

      return false;
    },
    toNumber: function toNumber(value) {
      // delete obj e.g. obj = {itemId: 3245}.
      if (typeof value === 'undefined' || typeof value === 'string' && value.length === 0) {
        throw new Error('value was not entered');
      }

      value = value.replace(/[^\d]/g, '');
      var newNumber = parseInt(value);

      if (typeof newNumber !== 'number' || isNaN(newNumber)) {
        throw new Error('value (' + value + ') is not a number');
      }

      return newNumber;
    },
    toDecimalNumber: function toDecimalNumber(value) {
      // delete obj e.g. obj = {itemId: 3245}.
      if (typeof value === 'undefined' || typeof value === 'string' && value.length === 0) {
        throw new Error('value was not entered');
      }

      value = value.replace(/[^0-9.]/g, '');
      var newNumber = Number(value);

      if (isNaN(newNumber)) {
        throw new Error('value (' + value + ') is not a number');
      }

      return newNumber;
    },
    toFloat: function toFloat(value) {
      // delete obj e.g. obj = {itemId: 3245}.
      if (typeof value === 'undefined' || typeof value === 'string' && value.length === 0) {
        throw new Error('value was not entered');
      }

      var newNumber = parseFloat(value);

      if (typeof newNumber !== 'number') {
        throw new Error('value (' + value + ') is not a number');
      }

      return newNumber;
    },
    toNumericCharsOnly: function toNumericCharsOnly(text, thousandsSeparator) {
      return toNumericCharsOnlyInternal(text, thousandsSeparator, true);
    },
    toNumericCharsOnlyNoDecimal: function toNumericCharsOnlyNoDecimal(text, thousandsSeparator) {
      return toNumericCharsOnlyInternal(text, thousandsSeparator, false);
    },
    toFormattedNumber: function toFormattedNumber(text, thousandsSeparator) {
      return toFormattedNumberInternal(text, thousandsSeparator, true);
    },
    // Allow numbers only up to 13 digits i.e. 1 trillion
    toFormattedNumberLimited: function toFormattedNumberLimited(text, thousandsSeparator) {
      var limitedText = toNumericCharsOnlyInternal(text, thousandsSeparator, true).substr(0, 13);
      return toFormattedNumberInternal(limitedText, thousandsSeparator, true);
    },
    toFormattedNumberNoDecimal: function toFormattedNumberNoDecimal(text, thousandsSeparator) {
      return toFormattedNumberInternal(text, thousandsSeparator, false);
    },
    toFormattedNumberNoDecimalLimited: function toFormattedNumberNoDecimalLimited(text, thousandsSeparator) {
      var limitedText = toNumericCharsOnlyInternal(text, thousandsSeparator, false).substr(0, 13);
      return toFormattedNumberInternal(limitedText, thousandsSeparator, false);
    },
    isWholeNumber: function isWholeNumber(text, thousandsSeparator) {
      var decimalSeparator = '.';

      if (!thousandsSeparator) {
        thousandsSeparator = ',';
      }

      if (thousandsSeparator !== ',') {
        thousandsSeparator = '.';
        decimalSeparator = ',';
      }

      try {
        return this.toNumericCharsOnly(text.toString(), thousandsSeparator).indexOf(decimalSeparator) === -1;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
    urlQueryParams: function urlQueryParams() {
      var vars = [];
      var hash;
      var q = document.URL.split('?')[1];

      if (q !== undefined) {
        q = q.split('&');

        for (var i = 0; i < q.length; i++) {
          hash = q[i].split('=');
          vars.push(hash[1]);
          vars[hash[0]] = hash[1];
        }
      }

      return vars;
    },
    urlQueryParam: function urlQueryParam(param) {
      var hash;
      var q = document.URL.split('?')[1];

      if (q !== undefined && q.indexOf(param) > -1) {
        q = q.split('&');

        for (var i = 0; i < q.length; i++) {
          hash = q[i].split('=');

          if (hash[0] === param) {
            return hash[1];
          }
        }
      }
    },
    toCloudinaryImageSrc: function toCloudinaryImageSrc(image, width, height, quality, operation, additions) {
      if (!image || !image.cloudinaryBasePath || !image.cloudinaryVersionAndPublicId) {
        return;
      }

      var hasSpec = width || height || quality || operation || additions;
      var src = image.cloudinaryBasePath;
      if (quality) src += 'q_' + quality + ',';
      if (width) src += 'w_' + width + ',';
      if (height) src += 'h_' + height + ',';
      if (operation) src += 'c_' + operation + ',';
      if (additions) src += additions + ',';
      if (hasSpec) src = src.slice(0, -1) + '/';
      src += image.cloudinaryVersionAndPublicId;
      return src;
    },
    abbreviate: function abbreviate(text, maxLength) {
      if (!text || !maxLength || text.length <= maxLength) {
        return text;
      } else {
        return text.substring(0, maxLength - 1) + '&hellip;';
      }
    },
    capitalise: function capitalise(text) {
      if (text && text.length > 0) {
        return text.charAt(0).toUpperCase() + text.slice(1);
      } else {
        return '';
      }
    },
    datepickerOptions: function datepickerOptions() {
      return {
        dateFormat: 'yy-mm-dd',
        placeHolderDateFormat: 'yyyy-mm-dd',
        // The placeholder should show the full 4 digit year - that's what 'yy' in dateFormat becomes
        duration: 'fast',
        // For i18n
        closeText: myApp.reqres.request('i16:getString', 'JSTextCodes_CLOSE'),
        currentText: myApp.reqres.request('i16:getString', 'JSTextCodes_TODAY'),
        nextText: myApp.reqres.request('i16:getString', 'JSTextCodes_NEXT'),
        prevText: myApp.reqres.request('i16:getString', 'JSTextCodes_PREV'),
        weekHeader: myApp.reqres.request('i16:getString', 'JSTextCodes_WEEKHEADER'),
        dayNames: [myApp.reqres.request('i16:getString', 'JSTextCodes_SUNDAY'), myApp.reqres.request('i16:getString', 'JSTextCodes_MONDAY'), myApp.reqres.request('i16:getString', 'JSTextCodes_TUESDAY'), myApp.reqres.request('i16:getString', 'JSTextCodes_WEDNESDAY'), myApp.reqres.request('i16:getString', 'JSTextCodes_THURSDAY'), myApp.reqres.request('i16:getString', 'JSTextCodes_FRIDAY'), myApp.reqres.request('i16:getString', 'JSTextCodes_SATURDAY')],
        dayNamesMin: [myApp.reqres.request('i16:getString', 'JSTextCodes_SU'), myApp.reqres.request('i16:getString', 'JSTextCodes_MO'), myApp.reqres.request('i16:getString', 'JSTextCodes_TU'), myApp.reqres.request('i16:getString', 'JSTextCodes_WE'), myApp.reqres.request('i16:getString', 'JSTextCodes_TH'), myApp.reqres.request('i16:getString', 'JSTextCodes_FR'), myApp.reqres.request('i16:getString', 'JSTextCodes_SA')],
        dayNamesShort: [myApp.reqres.request('i16:getString', 'JSTextCodes_SUN'), myApp.reqres.request('i16:getString', 'JSTextCodes_MON'), myApp.reqres.request('i16:getString', 'JSTextCodes_TUE'), myApp.reqres.request('i16:getString', 'JSTextCodes_WED'), myApp.reqres.request('i16:getString', 'JSTextCodes_THU'), myApp.reqres.request('i16:getString', 'JSTextCodes_FRI'), myApp.reqres.request('i16:getString', 'JSTextCodes_SAT')],
        monthNames: [myApp.reqres.request('i16:getString', 'JSTextCodes_JANUARY'), myApp.reqres.request('i16:getString', 'JSTextCodes_FEBRUARY'), myApp.reqres.request('i16:getString', 'JSTextCodes_MARCH'), myApp.reqres.request('i16:getString', 'JSTextCodes_APRIL'), myApp.reqres.request('i16:getString', 'JSTextCodes_MAY'), myApp.reqres.request('i16:getString', 'JSTextCodes_JUNE'), myApp.reqres.request('i16:getString', 'JSTextCodes_JULY'), myApp.reqres.request('i16:getString', 'JSTextCodes_AUGUST'), myApp.reqres.request('i16:getString', 'JSTextCodes_SEPTEMBER'), myApp.reqres.request('i16:getString', 'JSTextCodes_OCTOBER'), myApp.reqres.request('i16:getString', 'JSTextCodes_NOVEMBER'), myApp.reqres.request('i16:getString', 'JSTextCodes_DECEMBER')],
        JspPublicCodes_JSP_MY_SALES_SHOW_ITEMS_FROM: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_MY_SALES_SHOW_ITEMS_FROM'),
        monthNamesShort: [myApp.reqres.request('i16:getString', 'JSTextCodes_JAN'), myApp.reqres.request('i16:getString', 'JSTextCodes_FEB'), myApp.reqres.request('i16:getString', 'JSTextCodes_MAR'), myApp.reqres.request('i16:getString', 'JSTextCodes_APR'), myApp.reqres.request('i16:getString', 'JSTextCodes_MAY'), myApp.reqres.request('i16:getString', 'JSTextCodes_JUN'), myApp.reqres.request('i16:getString', 'JSTextCodes_JUL'), myApp.reqres.request('i16:getString', 'JSTextCodes_AUG'), myApp.reqres.request('i16:getString', 'JSTextCodes_SEP'), myApp.reqres.request('i16:getString', 'JSTextCodes_OCT'), myApp.reqres.request('i16:getString', 'JSTextCodes_NOV'), myApp.reqres.request('i16:getString', 'JSTextCodes_DEC')]
      };
    }
  };
};
"use strict";

PageApp.ValidationUtils = function () {
  return {
    stringEndsWith: function stringEndsWith(str, suffix) {
      return str.indexOf(suffix, str.length - suffix.length) !== -1;
    },
    handleScrollTo: function handleScrollTo(target) {
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.parent().offset().top
        }, 1000);
      }
    },
    stringIsNotEmpty: function stringIsNotEmpty(stringToCheck) {
      return !this.stringIsEmpty(stringToCheck);
    },
    stringIsEmpty: function stringIsEmpty(stringToCheck) {
      if (!this.existsAndPositiveLength(stringToCheck)) {
        // "no string"? empty
        return true;
      }

      var matchedString = stringToCheck.match(/^\s*$/m);

      if (!this.existsAndPositiveLength(matchedString)) {
        // no whitespace matched? not empty
        return false;
      } // .match() returns an /array/ of matched sub-strings of the original string
      // so if the first offset in the matchedString array equals the whole string passed - the whole string passed was whitespace
      // whitespace matched whole string? empty


      return matchedString[0] === stringToCheck;
    },
    existsAndPositiveLength: function existsAndPositiveLength(obj) {
      // note that (typeof obj !== 'undefined') is the only thing that appears to stop IE complaining that obj is undefined!
      return this.objectExists(obj) && obj.length !== 0;
    },
    objectExists: function objectExists(obj) {
      return typeof obj !== 'undefined' && obj !== null;
    },
    showFieldError: function showFieldError($field, errorCode) {
      var inputName = $field.attr('name');
      var $inputContainerDiv = $('div.ic-' + inputName);
      var $errorMessageSpan = $('span.errors-' + inputName);
      var $additionalHighlightArea = $('.error-aha-' + inputName);
      var errorMessage = this.existsAndPositiveLength(errorCode) ? myApp.reqres.request('i16:getString', errorCode) : '';

      if (this.objectExists($inputContainerDiv)) {
        $inputContainerDiv.addClass('has-error');
      }

      if (this.objectExists($errorMessageSpan)) {
        $errorMessageSpan.html(errorMessage).addClass('help-block');
      }

      if (this.objectExists($additionalHighlightArea)) {
        $additionalHighlightArea.addClass('alert-danger').addClass('alert');
      }
    },
    showGlobalError: function showGlobalError(errorCode) {
      var $globalErrorDiv = $('div.errors-global');
      var errorMessage = this.existsAndPositiveLength(errorCode) ? myApp.reqres.request('i16:getString', errorCode) : '';

      if (this.objectExists($globalErrorDiv)) {
        $globalErrorDiv.addClass('alert-danger').addClass('alert').append('<p>' + errorMessage + '</p>');
        this.handleScrollTo($globalErrorDiv);
      }
    },
    clearGlobalErrors: function clearGlobalErrors() {
      var $globalErrorDiv = $('div.errors-global');

      if (this.objectExists($globalErrorDiv)) {
        $globalErrorDiv.removeClass('alert-danger').removeClass('alert').html('');
      }
    },
    clearFieldError: function clearFieldError($field) {
      var inputName = $field.attr('name');
      var $inputContainerDiv = $('div.ic-' + inputName);
      var $errorMessageSpan = $('span.errors-' + inputName);
      var $additionalHighlightArea = $('.error-aha-' + inputName);

      if (this.objectExists($inputContainerDiv)) {
        $inputContainerDiv.removeClass('has-error');
      }

      if (this.objectExists($errorMessageSpan)) {
        $errorMessageSpan.html('').removeClass('help-block');
      }

      if (this.objectExists($additionalHighlightArea)) {
        $additionalHighlightArea.removeClass('alert-danger').removeClass('alert');
      }
    },
    clearAllErrors: function clearAllErrors() {
      this.clearGlobalErrors();
      var $elf = this;
      $(':input:not(:button)').each(function () {
        var $input = $(this);

        try {
          $elf.clearFieldError($input);
        } catch (e) {
          if (console && console.log) console.log('error ' + e);
        }
      });
    },
    renderErrors: function renderErrors(errors) {
      var $elf = this;
      this.clearAllErrors();
      var i = 0;
      errors.each(function (error) {
        var errorCode = error.get('code');
        i++;

        if ($elf.existsAndPositiveLength(error.get('field'))) {
          var $field = $('[name=' + error.get('field') + ']');
          $elf.showFieldError($field, errorCode);

          if (i <= 1) {
            myApp.utils.validation.handleScrollTo($field);
          }
        } else {
          $elf.showGlobalError(errorCode);
        }
      });
    },
    isValidEmail: function isValidEmail(email) {
      return this.existsAndPositiveLength(email) && email.match(/^([^.@]+)(\.[^.@]+)*@([^.@]+\.)+([^.@]+)$/i);
    },
    isValidUsername: function isValidUsername(username) {
      return this.existsAndPositiveLength(username) && username.length >= 6 && username.length <= 20 && username.match(/^[0-9A-Za-z\-_.]{6,20}$/);
    },
    isValidPhoneNumber: function isValidPhoneNumber(phoneNumber) {
      return phoneNumber.match(/[0-9]/) && phoneNumber.match(/^[0-9\s()+-]+$/);
    },
    isValidInternationalPhoneNumber: function isValidInternationalPhoneNumber(phoneNumber) {
      return phoneNumber.match(/[0-9]/) && phoneNumber.match(/^\+(?:[0-9] ?){6,14}[0-9]$/);
    },
    elementExists: function elementExists(selector) {
      return $(selector).length > 0;
    },
    registerClearListener: function registerClearListener(id) {
      // Registers a listener on a field so it's error message disappears when clicked.
      $('#' + id).focus(function () {
        this.resetFieldError(id);
      });
      $('.' + id).focus(function () {
        $('#' + id + 'Errors').text('');
      });
    },
    changeFieldError: function changeFieldError(id, text) {
      $('#' + id + 'Errors').html(text);
      this.setErrorBorder(id);
      $('#' + id).parent().addClass('has-error');
    },
    resetFieldError: function resetFieldError(id) {
      $('#' + id + 'Errors').text('');
      $('#' + id).removeClass('error');
      $('#' + id).parent().removeClass('has-error');
    },
    setErrorBorder: function setErrorBorder(id) {
      $('#' + id).addClass('error');
    },
    clearErrorBorder: function clearErrorBorder(id) {
      $('#' + id).removeClass('error');
    },
    registerExpirationClearListener: function registerExpirationClearListener(monthTargetId, yearTargetId) {
      $('#' + monthTargetId + ',#' + yearTargetId).each(function () {
        $(this).focus(function () {
          this.resetFieldError(monthTargetId);
          this.resetFieldError(yearTargetId);
        });
      });
      $('#' + monthTargetId + ',#' + yearTargetId).each(function () {
        $(this).focus(function () {
          $('#' + monthTargetId + 'Errors').text('');
        });
      });
    },
    fieldNotNull: function fieldNotNull(id) {
      if (this.elementExists('#' + id) && $('#' + id).val() === '') {
        this.changeFieldError(id, myApp.controllers.i16Strings.i16Strings.JSTextCodes_FIELD_NOT_COMPLETE);
        return false;
      }

      return true;
    },
    ExpirationDateInFuture: function ExpirationDateInFuture(monthTargetId, yearTargetId) {
      if (this.elementExists('#' + monthTargetId) && this.elementExists('#' + yearTargetId)) {
        var expirationMonth = $('#' + monthTargetId).val();
        var expirationYear = $('#' + yearTargetId).val();
        var now = new Date();
        var currentYear = now.getFullYear();
        var currentMonth = now.getMonth() + 1;

        if (expirationYear < currentYear || currentYear === expirationYear && expirationMonth < currentMonth) {
          this.changeFieldError(monthTargetId, myApp.controllers.i16Strings.i16Strings.JSTextCodes_CARD_EXPIRATION_IN_PAST);
          this.changeFieldError(yearTargetId);
          return false;
        }
      }

      return true;
    },
    validateCardNumber: function validateCardNumber() {
      var valid = true;
      valid = this.fieldNotNull('cardNumber') && valid;

      if (!valid) {
        this.changeFieldError('cardNumber', myApp.controllers.i16Strings.i16Strings.JSTextCodes_FIELD_NOT_COMPLETE);
      } else if (!$('#cardNumber').val().match(/^[0-9]{12,19}$/)) {
        this.changeFieldError('cardNumber', myApp.controllers.i16Strings.i16Strings.UserCodes_CARD_NUMBER_INVALID);
        valid = false;
      }

      return valid;
    },
    validateSecurityCode: function validateSecurityCode() {
      var valid = true;
      valid = this.fieldNotNull('securityCode') && valid;

      if (!valid) {
        this.changeFieldError('securityCode', myApp.controllers.i16Strings.i16Strings.JSTextCodes_FIELD_NOT_COMPLETE);
      } else if (!$('#securityCode').val().match(/^[0-9]{3,4}$/)) {
        this.changeFieldError('securityCode', myApp.controllers.i16Strings.i16Strings.UserCodes_CARD_NUMBER_INVALID);
        valid = false;
      }

      return valid;
    }
  };
};
"use strict";

PageApp.WebrtcUtils = function () {
  var session;
  var publisher;
  var subscriber;
  var connectionCount = 0;
  var stream;
  var targetEl = 'tokvid';
  return {
    startSubscribing: function startSubscribing(feedModel, callback) {
      if (!stream) {
        return;
      }

      var options;

      if (feedModel.options) {
        options = feedModel.options;
      } else {
        var feedHeight = feedModel.feedType === 'AUDIO' ? 100 : 450;
        options = {
          width: '100%',
          height: feedHeight,
          insertMode: 'replace'
        };
      }

      subscriber = session.subscribe(stream, targetEl, options, function (error) {
        if (error && console) {
          console.log('subscribed: error=', error);
        }
      });
    },
    startPublishing: function startPublishing(feedModel, callback) {
      var publishVideo;

      if (feedModel.feedType === 'AUDIO') {
        publishVideo = false;
      } else {
        publishVideo = true;
      }

      var options = {
        width: 135,
        height: 100,
        insertMode: 'append',
        publishVideo: publishVideo
      };

      if (!session) {
        throw new Error('no session!');
      }

      publisher = OT.initPublisher(targetEl, options);
      session.publish(publisher);
      publisher.on('streamCreated', function (event) {
        if (event.stream) {
          stream = event.stream;
        }

        if (event) {
          console.log('streamCreated: event: ', event);
        }

        if (callback) {
          callback();
        }
      });
    },
    toggleAudio: function toggleAudio(feedModel) {
      if (!subscriber) {
        return;
      }

      var currentAudioLevel = subscriber.getAudioVolume();

      if (currentAudioLevel === 0) {
        subscriber.setAudioVolume(100);
      } else {
        subscriber.setAudioVolume(0);
      }
    },
    stopPublishing: function stopPublishing(feedModel) {
      if (publisher) {
        session.unpublish(publisher);
        stream = undefined;
      }
    },
    stopSubscribing: function stopSubscribing(feedModel) {
      if (subscriber) {
        session.unsubscribe(subscriber);
      }

      subscriber = undefined;
    },
    clearSession: function clearSession() {
      session = undefined;
    },
    getConnectionCount: function getConnectionCount() {
      return connectionCount;
    },
    isPublishing: function isPublishing() {
      if (publisher && stream) {
        return true;
      }

      return false;
    },
    isStream: function isStream() {
      if (stream) {
        return true;
      }

      return false;
    },
    // We need to trigger events in both the public and admin apps so require the eventBus parameter.
    joinSession: function joinSession(feedModel, eventBus, callback) {
      if (!feedModel) {
        return;
      }

      var apiKey = feedModel.tokApiKey;
      var sessionId = feedModel.tokSessionId;
      var token = feedModel.tokToken;

      if (!feedModel.feedProviderId || !apiKey || !sessionId || !token) {
        return;
      } // If we are using an iOS app then don't even check to see whether tokbox is supported.
      // This is to prevent any tokbox generated messages from being displayed.
      // The event webrtc:stream:notSupported is also not triggered which prevents our
      // error message from being displayed also.


      if (this.isIOSApp()) {
        return;
      }

      if (OT.checkSystemRequirements() === 1) {
        session = OT.initSession(apiKey, sessionId);
      } else {
        if (eventBus) eventBus.trigger('webrtc:stream:notSupported');
        OT.upgradeSystemRequirements();
        return;
      }

      session.on('streamDestroyed', function (event) {
        if (subscriber) {
          session.unsubscribe(subscriber);
          stream = undefined;
          subscriber = undefined;
          if (eventBus) eventBus.trigger('webrtc:stream:destroyed');
        }

        if (console.log) {
          console.log('Stream destroyed');
        }
      });
      session.on('streamCreated', function (event) {
        stream = event.stream;

        if (eventBus) {
          eventBus.trigger('webrtc:stream:created');
        }

        if (console.log) {
          console.log('Stream created');
        }
      });
      session.connect(token, function (error) {
        if (error && console) {
          console.log('There was an error connecting to the session:', error.code, error.message);
        } else {
          if (eventBus) {
            eventBus.trigger('webrtc:stream:connected');
          }
        }
      });
    },
    isIOSApp: function isIOSApp() {
      var isIOSApp = false;
      var standalone = window.navigator.standalone;
      var userAgent = window.navigator.userAgent.toLowerCase();
      var safari = /safari/.test(userAgent);
      var ios = /iphone|ipod|ipad/.test(userAgent);

      if (ios && !standalone && !safari) {
        isIOSApp = true; // uiwebview
      }

      return isIOSApp;
    }
  };
};
"use strict";

PageApp.Controllers.AddressRouter = function () {
  function initEvents() {
    myApp.vent.on('address:display', function (config) {
      new PageApp.Views.WaitingView({
        el: config.region
      }).render();
      var contentPromise = myApp.request('reqres:reference:fetch', {
        types: 'countries'
      });
      contentPromise.done(_.bind(function (result) {
        var model = new PageApp.Ent.Address(config.model);
        model.set('countries', result.countries);
        var whichAddress = model.get('whichAddress');

        if (whichAddress === 0) {
          if (myApp.ent.user.get('hasMainAddress')) {
            model.set('address', myApp.ent.user.get('mainAddress'));
          }
        } else if (whichAddress === 1) {
          if (myApp.ent.user.get('hasShippingAddress')) {
            model.set('address', myApp.ent.user.get('shippingAddress'));
          }
        }

        new PageApp.Views.AddressView({
          el: config.region,
          model: model
        }).render();
      }), this);
    }, this);
  }

  return {
    initialize: function initialize(models) {
      initEvents();
    }
  };
};
"use strict";

PageApp.Controllers.CardVerifyRouter = function () {
  function initEvents() {
    myApp.vent.on('cardverify:display', function (config) {
      new PageApp.Views.WaitingView({
        el: config.region
      }).render();
      var contentPromise = myApp.request('reqres:reference:fetch', {
        types: 'countries'
      });
      contentPromise.done(_.bind(function (result) {
        var referenceExpirationMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var currentYear = new Date().getFullYear();
        var referenceExpirationYears = [];

        for (var i = currentYear; i < currentYear + 20; i++) {
          referenceExpirationYears.push(i);
        }

        var cardModel = new PageApp.Ent.BasicEntity(config.model);
        cardModel.get('billingAddress').countries = result.countries;
        cardModel.get('creditCardDetails').referenceExpirationMonths = referenceExpirationMonths;
        cardModel.get('creditCardDetails').referenceExpirationYears = referenceExpirationYears;
        cardModel.set('@class', 'com.bidlogix.scaffold.models.account.CreditCardVerificationModel');
        new PageApp.Views.CardVerifyLayout({
          el: config.region,
          model: cardModel
        }).render();
        myApp.utils.validation.registerClearListener('nameOnCard');
        myApp.utils.validation.registerClearListener('cardNumber');
        myApp.utils.validation.registerClearListener('securityCode');
        myApp.utils.validation.registerClearListener('billingAddressLine');
        myApp.utils.validation.registerClearListener('billingAddressCity');
        myApp.utils.validation.registerClearListener('billingAddressZipCode');
        myApp.utils.validation.registerClearListener('billingAddressCountry');
        myApp.utils.validation.registerExpirationClearListener('cardExpirationMonth', 'cardExpirationYear');
        $('#submitButton').click(function () {
          var valid = true;
          valid = myApp.utils.validation.fieldNotNull('nameOnCard') && valid;
          valid = myApp.utils.validation.validateCardNumber() && valid;
          valid = myApp.utils.validation.validateSecurityCode() && valid;
          valid = myApp.utils.validation.ExpirationDateInFuture('cardExpirationMonth', 'cardExpirationYear') && valid;
          valid = myApp.utils.validation.fieldNotNull('billingAddressLine') && valid;
          valid = myApp.utils.validation.fieldNotNull('billingAddressCity') && valid;
          valid = myApp.utils.validation.fieldNotNull('billingAddressZipCode') && valid;
          valid = myApp.utils.validation.fieldNotNull('billingAddressCountry') && valid;
          return valid;
        });
      }), this);
    }, this);
  }

  return {
    initialize: function initialize(models) {
      initEvents();
    }
  };
};
"use strict";

PageApp.module('gritterComponent', {
  startWithParent: false,
  define: function define(gritterComponent, MyApp, Backbone, Marionette, $, _) {
    // this === gritterComponent; // => true
    // Private Data And Functions
    // --------------------------
    var showNotification = function showNotification(gritterOptions) {
      $.gritter.add(gritterOptions);
    }; // Public Data And Functions
    // --------------------------


    this.app.vent.on('ui:notification', function (options) {
      if (!options || !options.text) {
        return;
      }

      if (!options.level) {
        options.class_name = 'alert alert-info';
      } else {
        options.class_name = 'alert alert-' + options.level;
      }

      if (!options.time) {
        options.time = 5000;
      }

      if (!options.sticky) {
        options.sticky = false;
      } else {
        options.sticky = true;
      }

      showNotification(options);
    }, this);
  }
});
"use strict";

PageApp.Controllers.I16StringsRouter = function () {
  var self = this;

  function initEvents() {
    myApp.vent.on('i16:display', function (config) {}, this);
  }

  function initCommands() {
    myApp.reqres.setHandler('i16:getString', function (codeAndSubs) {
      // For backwards compatibility, if codeAndSubs.code is undefined then we have been passed the code as a string
      // Otherwise it should be {code: 'theCode', substitutions: ['sub1','sub2','sub3']}
      var code = codeAndSubs.code ? codeAndSubs.code : codeAndSubs;
      var substitutions = codeAndSubs.substitutions;

      if (!code) {
        return '';
      } else {
        var i16String = self.i16Strings[code];

        if (!i16String) {
          return code;
        } else if (!substitutions) {
          return i16String;
        } else {
          for (var i = 1; i <= substitutions.length; i++) {
            i16String = i16String.replace(new RegExp('\\{' + i + '}', 'g'), substitutions[i - 1]);
          }

          return i16String;
        }
      }
    });
  }

  return {
    initialize: function initialize(strings) {
      self.i16Strings = strings || {};
      initEvents();
      initCommands();
    }
  };
};
"use strict";

PageApp.Views.ModalLayout = Backbone.Marionette.LayoutView.extend({
  template: hbs.templates.modalLayout,
  events: {
    'click .x-close-modal': 'handleClose',
    'click .x-cancel': 'handleClose',
    'click .x-login--link': 'handleLink',
    'keyup .x-add-commas ': 'handleAddCommasOnKeyup',
    'keyup .x-numeric-only ': 'handleNumericOnlyOnKeyup',
    'keyup .x-decimal-add-commas': 'handleDecimalAddCommasOnKeyup'
  },
  regions: {
    myModal: '#myModal'
  },
  onRender: function onRender() {
    this.myModal.show(this.options.view);
    this.myModal.$el.on('hide.bs.modal', _.bind(function (e) {
      this.myModal.empty();
    }, this));
    this.myModal.$el.on('hidden.bs.modal', function (e) {
      myApp.vent.trigger('modal:closed');
    });
    this.myModal.$el.modal('show');
    $('body').css('padding-right', '0px');
  },
  handleAddCommasOnKeyup: function handleAddCommasOnKeyup(e) {
    e.preventDefault();
    var $input = $(e.currentTarget);

    if (e.keyCode !== 13) {
      $input.val(myApp.utils.types.toFormattedNumberNoDecimal($input.val(), myApp.ent.user.attributes.thousandsSeparator));
    }

    return false;
  },
  handleDecimalAddCommasOnKeyup: function handleDecimalAddCommasOnKeyup(e) {
    e.preventDefault();
    var $input = $(e.currentTarget);

    if (e.keyCode !== 13) {
      $input.val(myApp.utils.types.toFormattedNumber($input.val(), myApp.ent.user.attributes.thousandsSeparator));
    }

    return false;
  },
  handleNumericOnlyOnKeyup: function handleNumericOnlyOnKeyup(e) {
    e.preventDefault();
    var $input = $(e.currentTarget);

    if (e.keyCode !== 13) {
      $input.val(myApp.utils.types.toNumericCharsOnlyNoDecimal($input.val(), myApp.ent.user.attributes.thousandsSeparator));
    }

    return false;
  },
  handleLink: function handleLink() {
    this.closeModal();
  },
  handleClose: function handleClose(e) {
    if (e) e.preventDefault();
    this.closeModal();
  },
  closeModal: function closeModal() {
    this.myModal.empty();
    this.myModal.$el.modal('hide');
  },
  remove: function remove() {
    // @TECHDEBT
    // this is a hack in order to handle the removal of the modal backdrop on client-side navigation
    // a better way of handling this
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    Backbone.View.prototype.remove.apply(this, arguments);
  }
});
"use strict";

PageApp.Controllers.ReferenceRouter = function (config) {
  var referenceData = new PageApp.Ent.ReferenceData();

  function getContent(types) {
    return new Promise(function (resolve, reject) {
      var neededTypes = referenceData.getKeysNeeded(types);

      if (!neededTypes) {
        resolve(referenceData.getReferenceData(types));
      } else {
        myApp.utils.ajax.get(null, myApp.utils.ajax.getApiEndpoint('reference') + '/' + neededTypes.join(','), function (response) {
          // var refData = response.models.ReferenceDataModel.referenceItemModelMap;
          var refData = response.referenceItemModelMap;
          referenceData.setReferenceData(neededTypes.join(','), refData);
          resolve(referenceData.getReferenceData(types));
        });
      }
    });
  }

  function initCommands() {
    myApp.reqres.setHandler('reqres:reference:fetch', function (config) {
      if (!config || !config.types) {
        throw new Error('no type of reference data specified');
      }

      return getContent(config.types);
    });
    myApp.reqres.setHandler('reqres:reference:fetch:item', function (config) {
      // Please note that this call is reliant upon reqres:reference:fetch (above) being called
      // first for the particular type in order to populate referenceData
      if (!config || !config.type) {
        throw new Error('no type of reference data specified');
      }

      if (config.type === 'country') {
        var countries = referenceData.get('countries');

        if (countries) {
          for (var key in countries) {
            if (countries[key].id === config.id) {
              return countries[key];
            }
          }
        }
      }
    });
  }

  return {
    initialize: function initialize(models) {
      initCommands();
    }
  };
};
"use strict";

PageApp.Controllers.SaleInfoRouter = function (config) {
  function initEvents() {
    myApp.vent.on('saleinfo:display', function (config) {
      if (!this.modalInProgress) {
        var model = config && config.saleInfoModel ? config.saleInfoModel : myApp.ent.saleInfo;
        var view = new PageApp.Views.SaleInfoView({
          model: model,
          modal: true
        });
        myApp.myModalRegion.show(new PageApp.Views.ModalLayout({
          view: view
        }));
        this.modalInProgress = true;
      }
    }, this);
    myApp.vent.on('modal:closed', function (config) {
      this.modalInProgress = false;
    }, this);
  }

  return {
    initialize: function initialize(models) {
      initEvents();
    }
  };
};
"use strict";

PageApp.Views.SaleInfoView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.saleInfo,
  initialize: function initialize(options) {
    this.options = options;

    _.bindAll(this, 'render');
  },
  events: {
    'click .x-toggle': 'handleShowContent'
  },
  serializeData: function serializeData() {
    var auctionCollection = this.model.attributes.auctionContent.auctionCollection;
    var auctionGoods = this.model.attributes.auctionContent.auctionGoods;
    if (auctionGoods) auctionGoods.trim();
    var auctionPayment = this.model.attributes.auctionContent.auctionPayment;
    var auctionTerms = this.model.attributes.auctionContent.auctionTerms;
    var auctionContacts = this.model.attributes.auctionContent.auctionContacts;
    var contentPages = {
      hasAuctionCollection: !!(auctionCollection && auctionCollection.length > 0),
      hasAuctionGoods: !!(auctionGoods && auctionGoods.length > 0),
      hasAuctionPayment: !!(auctionPayment && auctionPayment.length > 0),
      hasAuctionTerms: !!(auctionTerms && auctionTerms.length > 0),
      hasAuctionContacts: !!(auctionContacts && auctionContacts.length > 0),
      auctionCollection: auctionCollection,
      auctionGoods: auctionGoods,
      auctionPayment: auctionPayment,
      auctionTerms: auctionTerms,
      auctionContacts: auctionContacts
    };
    var saleInfo = this.model.attributes;
    var hasAddress = saleInfo.address && saleInfo.address.length > 0;
    var content = {
      JSTextCodes_CLOSE: myApp.reqres.request('i16:getString', 'JSTextCodes_CLOSE'),
      showSaleInfoInPage: this.options.showSaleInfoInPage,
      modal: this.options.modal,
      mapsApiKey: myApp.ent.config.getMapsAPIKey(),
      contentPages: contentPages,
      hasAddress: hasAddress,
      address: saleInfo.address,
      notCatalogue: !saleInfo.catalogue,
      hasClearanceDatesOrComment: saleInfo.hasClearanceDates || saleInfo.clearanceComment,
      JspPublicCodes_JSP_AUCTION_INFORMATION: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_INFORMATION'),
      JspPublicCodes_JSP_AUCTION_INFORMATION_SITE_ADDRESS: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_INFORMATION_SITE_ADDRESS'),
      JspPublicCodes_JSP_AUCTION_INFORMATION_SHOW_ON_MAP: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_INFORMATION_SHOW_ON_MAP'),
      JspPublicCodes_JSP_LIVE_AUCTION_STARTED: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_LIVE_AUCTION_STARTED'),
      JspPublicCodes_JSP_LIVE_AUCTION_STARTS: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_LIVE_AUCTION_STARTS'),
      JspPublicCodes_JSP_AUCTION_INFORMATION_STARTING_DATE: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_INFORMATION_STARTING_DATE'),
      JspPublicCodes_JSP_AUCTION_INFORMATION_CLOSING_DATE: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_INFORMATION_CLOSING_DATE'),
      JspPublicCodes_JSP_AUCTION_INFORMATION_FROM: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_INFORMATION_FROM'),
      JspPublicCodes_JSP_AUCTION_INFORMATION_TO: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_INFORMATION_TO'),
      JspPublicCodes_JSP_AUCTION_INFORMATION_CURRENCY: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_INFORMATION_CURRENCY'),
      JspPublicCodes_JSP_AUCTION_INFORMATION_BUYERS_PREMIUM: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_INFORMATION_BUYERS_PREMIUM'),
      JspPublicCodes_JSP_AUCTION_INFORMATION_OR_AS_SPECIFIED: saleInfo.hideTextOrAsSpecified ? '' : myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_INFORMATION_OR_AS_SPECIFIED'),
      JspPublicCodes_JSP_AUCTION_INFORMATION_SALES_TAXES: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_INFORMATION_SALES_TAXES'),
      JspPublicCodes_JSP_AUCTION_INFORMATION_HAMMER_TAX_RATE: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_INFORMATION_HAMMER_TAX_RATE'),
      JspPublicCodes_JSP_AUCTION_INFORMATION_BP_TAX_RATE: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_INFORMATION_BP_TAX_RATE'),
      JspPublicCodes_JSP_AUCTION_INFORMATION_CHARGES_TAX_RATE: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_INFORMATION_CHARGES_TAX_RATE'),
      JspPublicCodes_JSP_AUCTION_INFORMATION_SALES_TAX_NOT_REQUIRED_MESSAGE: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_INFORMATION_SALES_TAX_NOT_REQUIRED_MESSAGE'),
      JspPublicCodes_JSP_AUCTION_INFORMATION_VIEWING_DAYS: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_INFORMATION_VIEWING_DAYS'),
      JspPublicCodes_JSP_AUCTION_INFORMATION_BY_APPOINTMENT: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_INFORMATION_BY_APPOINTMENT'),
      JspPublicCodes_JSP_AUCTION_INFORMATION_CLEARANCE_DAYS: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_INFORMATION_CLEARANCE_DAYS'),
      JspPublicCodes_JSP_AUCTION_INFORMATION_COLLECTION: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_INFORMATION_COLLECTION'),
      JspPublicCodes_JSP_AUCTION_INFORMATION_TS_AND_CS: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_INFORMATION_TS_AND_CS'),
      JspPublicCodes_JSP_AUCTION_INFORMATION_PAYMENT: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_INFORMATION_PAYMENT'),
      JspPublicCodes_JSP_AUCTION_INFORMATION_REMOVAL_OF_GOODS: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_INFORMATION_REMOVAL_OF_GOODS'),
      JspPublicCodes_JSP_AUCTION_INFORMATION_CONTACTS: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_INFORMATION_CONTACTS'),
      JspPublicCodes_JSP_AUCTION_INFORMATION_ADDITIONAL_DOCS: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_INFORMATION_ADDITIONAL_DOCS')
    };
    return _.extend(content, saleInfo);
  },
  handleShowContent: function handleShowContent(e) {
    e.preventDefault();
    var $toggle = this.$el.find('#' + $(e.currentTarget).data('toggle'));

    if ($toggle.hasClass('in')) {
      $toggle.removeClass('in');
    } else {
      $toggle.addClass('in');
    }
  }
});
"use strict";

PageApp.module('searchComponent', {
  startWithParent: false,
  define: function define(searchComponent, MyApp, Backbone, Marionette, $, _) {
    // Public Data And Functions
    // --------------------------
    this.start = function () {};

    this.app.vent.on('search:render', function (event) {
      try {
        event.searchInputRegion.show(new PageApp.Views.SearchInputView({
          model: event.model
        }));
      } catch (e) {}
    }, this);
    this.app.vent.on('search:filters', function (event) {
      event.searchFiltersRegion.show(new PageApp.Views.FiltersLayout({
        model: event.model
      }));
    }, this);
  }
});
"use strict";

PageApp.Ent.Address = Backbone.Model.extend({
  initialise: function initialise(options) {},
  defaults: {
    '@class': 'com.bidlogix.scaffold.models.address.AddressModel',
    'errors': {}
  },
  url: function url() {
    // if using backbone sync: return myApp.ent.config.get('contextPath') + '/address/' + myApp.ent.user.get('id');
    return '/address/' + myApp.ent.user.get('id');
  },
  validate: function validate(attrs, options) {
    var errors = {};
    errors.addressLine1 = myApp.utils.validation.stringIsEmpty(attrs.addressLine1);
    errors.county = myApp.utils.validation.stringIsEmpty(attrs.county);
    errors.postcode = myApp.utils.validation.stringIsEmpty(attrs.postcode);
    this.set('errors', errors);
    var valid = true;

    for (var key in errors) {
      if (errors[key]) valid = false;
    }

    return valid;
  }
});
"use strict";

PageApp.Views.AddressView = Backbone.Marionette.ItemView.extend({
  templateView: hbs.templates.address,
  templateCreate: hbs.templates.addressCreate,
  getTemplate: function getTemplate() {
    var editing = this.model.get('editing') || this.model.get('creating');
    var address = this.model.get('address');

    if (address) {
      if (editing) {
        return this.templateCreate;
      } else {
        return this.templateView;
      }
    } else {
      this.model.set('creating', true);
      return this.templateCreate;
    }
  },
  events: {
    'click .x-back': 'handleBack',
    'click .x-edit-address': 'handleEditAddress',
    'click .x-save-address': 'handleSaveAddress'
  },
  serializeData: function serializeData() {
    var viewTitle;
    var whichAddress = this.model.get('whichAddress');

    if (whichAddress === 0) {
      viewTitle = 'Main Address';
    } else if (whichAddress === 1) {
      viewTitle = 'Shipping Address';
    }

    if (this.model.get('editing')) {
      viewTitle = 'Edit ' + viewTitle;
      myApp.vent.trigger('address:render', {
        'editing': true
      });
    } else {
      if (this.model.get('creating')) {
        viewTitle = 'Enter ' + viewTitle;
        myApp.vent.trigger('address:render', {
          'editing': true
        });
      } else {
        myApp.vent.trigger('address:render', {
          'editing': false
        });
      }
    }

    if (this.model.get('address') && !this.model.get('address').countryName) {
      var country = myApp.request('reqres:reference:fetch:item', {
        type: 'country',
        id: this.model.get('address').countryId
      });
      if (country) this.model.get('address').countryName = country.name;
    }

    var content = {
      viewTitle: viewTitle,
      allowEdit: this.model.get('allowEdit'),
      JSTextCodes_SAVE: myApp.reqres.request('i16:getString', 'JSTextCodes_SAVE'),
      JSTextCodes_BACK: myApp.reqres.request('i16:getString', 'JSTextCodes_BACK'),
      hasError1: this.model.get('errors').addressLine1 ? 'has-error' : '',
      hasErrorCounty: this.model.get('errors').county ? 'has-error' : '',
      hasErrorPostcode: this.model.get('errors').postcode ? 'has-error' : ''
    };
    content = _.extend(content, this.model.attributes);
    return content;
  },
  onRender: function onRender() {
    if (this.model.get('address')) {
      this.$el.find('.x-country').val(this.model.get('address').countryId);
    } else {
      this.$el.find('.x-country').val('233');
    }
  },
  handleBack: function handleBack(e) {
    e.preventDefault();
    this.model.set('editing', false);
    this.render();
  },
  handleEditAddress: function handleEditAddress(e) {
    e.preventDefault();
    this.model.set('editing', true);
    this.render();
  },
  handleSaveAddress: function handleSaveAddress(e) {
    e.preventDefault();
    var address = this.model.get('address') || {};

    if (this.model.get('whichAddress') === 0) {
      address.addressType = 0;
    } else if (this.model.get('whichAddress') === 1) {
      address.addressType = 1;
    }

    address['@class'] = 'com.bidlogix.scaffold.models.address.AddressModel';
    address.addressLine1 = this.$el.find('#line1').val();
    address.addressLine2 = this.$el.find('#line2').val();
    address.addressLine3 = this.$el.find('#line3').val();
    address.addressLine4 = this.$el.find('#line4').val();
    address.city = this.$el.find('#city').val();
    address.county = this.$el.find('#county').val();
    address.postcode = this.$el.find('#postcode').val();
    address.countryId = this.$el.find('#country').val();
    this.model.set('address', address);
    var result = this.model.validate(this.model.attributes.address);

    if (!result) {
      this.render();
      myApp.vent.trigger('ui:notification', {
        text: 'Please fix the errors and try again.',
        level: 'warning'
      });
      return;
    }

    var url = this.model.url();
    myApp.utils.ajax.postPut(address, url, _.bind(function (response) {
      if (response.failed) {
        myApp.vent.trigger('ui:notification', {
          text: response.message,
          level: 'warning'
        });
      } else {
        var whichAddress = this.model.get('whichAddress');

        if (whichAddress === 0) {
          myApp.ent.user.set('hasMainAddress', true);
          myApp.ent.user.set('mainAddress', response);
        } else if (whichAddress === 1) {
          myApp.ent.user.set('hasShippingAddress', true);
          myApp.ent.user.set('shippingAddress', response);
        }

        this.model.set('address', response);
        this.model.set('editing', false);
        this.model.set('creating', false);
        myApp.vent.trigger('ui:notification', {
          text: 'Your address details have been updated.',
          level: 'success'
        });
        this.render();
      }
    }, this));
  }
});
"use strict";

PageApp.Views.AlertView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.alert,
  serializeData: function serializeData() {
    var message = null;
    var type = 'info';
    var showLoader = false;

    if (this.model && this.model.get) {
      message = this.model.get('content');
      showLoader = this.model.get('showLoader');
      type = this.model.get('type');
    }

    return {
      message: message,
      showLoader: showLoader,
      type: type
    };
  }
});
"use strict";

PageApp.Ent.BillingAddress = Backbone.Model.extend({
  defaults: {
    addressLine1: '',
    addressLine2: '',
    city: '',
    countyOrState: '',
    postcode: '',
    country: ''
  },
  validate: function validate() {
    var errors = new PageApp.Ent.Errors();
    this.validateAddressLine1(errors);
    this.validateCity(errors);
    this.validatePostcode(errors);
    this.validateCountry(errors);

    if (errors.length === 0) {
      return false;
    } else {
      return errors;
    }
  },
  validateAddressLine1: function validateAddressLine1(errors) {
    if (myApp.utils.validation.stringIsEmpty(this.get('addressLine1'))) {
      errors.add({
        field: 'billingAddressLine1',
        code: 'JSTextCodes_FIELD_NOT_COMPLETE'
      });
    }
  },
  validateCity: function validateCity(errors) {
    if (myApp.utils.validation.stringIsEmpty(this.get('city'))) {
      errors.add({
        field: 'billingAddressCity',
        code: 'JSTextCodes_FIELD_NOT_COMPLETE'
      });
    }
  },
  validatePostcode: function validatePostcode(errors) {
    if (myApp.utils.validation.stringIsEmpty(this.get('postcode'))) {
      errors.add({
        field: 'billingAddressPostcode',
        code: 'JSTextCodes_FIELD_NOT_COMPLETE'
      });
    }
  },
  validateCountry: function validateCountry(errors) {
    if (!myApp.utils.validation.existsAndPositiveLength(this.get('country'))) {
      errors.add({
        field: 'billingAddressCountry',
        code: 'JSTextCodes_SELECT_FROM_MENU'
      });
    }
  }
});
"use strict";

PageApp.Ent.CreditCardDetails = Backbone.Model.extend({
  defaults: {
    nameOnCard: '',
    cardNumber: '',
    cardExpirationMonth: '',
    cardExpirationYear: '',
    securityCode: ''
  },
  validate: function validate() {
    var errors = new PageApp.Ent.Errors();
    this.validateNameOnCard(errors);
    this.validateCardNumber(errors);
    this.validateSecurityCode(errors);
    this.validateExpirationDate(errors);

    if (errors.length > 0) {
      return errors;
    }
  },
  validateNameOnCard: function validateNameOnCard(errors) {
    if (myApp.utils.validation.stringIsEmpty(this.get('nameOnCard'))) {
      errors.add({
        field: 'nameOnCard',
        code: 'JSTextCodes_FIELD_NOT_COMPLETE'
      });
    }
  },
  validateCardNumber: function validateCardNumber(errors) {
    var cardNumber = this.get('cardNumber');

    if (myApp.utils.validation.stringIsEmpty(cardNumber)) {
      errors.add({
        field: 'cardNumber',
        code: 'JSTextCodes_FIELD_NOT_COMPLETE'
      });
    } else if (!cardNumber.match(/^[0-9]{12,19}$/)) {
      errors.add({
        field: 'cardNumber',
        code: 'UserCodes_CARD_NUMBER_INVALID'
      });
    }
  },
  validateSecurityCode: function validateSecurityCode(errors) {
    if (myApp.utils.validation.stringIsEmpty(this.get('securityCode'))) {
      errors.add({
        field: 'securityCode',
        code: 'JSTextCodes_FIELD_NOT_COMPLETE'
      });
    } else if (!this.get('securityCode').match(/^[0-9]{3,4}$/)) {
      errors.add({
        field: 'securityCode',
        code: 'UserCodes_CARD_SECURITY_CODE_INVALID'
      });
    }
  },
  validateExpirationDate: function validateExpirationDate(errors) {
    var expirationMonth = this.get('cardExpirationMonth');
    var expirationYear = this.get('cardExpirationYear');
    var now = new Date();
    var currentYear = now.getFullYear();
    var currentMonth = now.getMonth() + 1;

    if (expirationYear < currentYear || currentYear === expirationYear && expirationMonth < currentMonth) {
      errors.add({
        field: 'cardExpirationMonth',
        code: 'UserCodes_CARD_EXPIRATION_IN_PAST'
      });
    }
  }
});
"use strict";

PageApp.Views.CardVerifyBillingAddressDetailsView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.billingAddress,
  ui: {
    addressLine1: '#billingAddressLine1',
    addressLine2: '#billingAddressLine2',
    city: '#billingAddressCity',
    countyOrState: '#billingAddressCountyOrState',
    postcode: '#billingAddressPostcode',
    country: '#billingAddressCountry'
  },
  serializeData: function serializeData() {
    var content = {
      JspPublicCodes_JSP_CARD_VERIFICATION_ADDRESS_LINE: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CARD_VERIFICATION_ADDRESS_LINE'),
      JspPublicCodes_JSP_CARD_VERIFICATION_ADDRESS_LINE2: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CARD_VERIFICATION_ADDRESS_LINE2'),
      JspPublicCodes_JSP_CARD_VERIFICATION_CITY: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CARD_VERIFICATION_CITY'),
      JspPublicCodes_JSP_CARD_VERIFICATION_STATE: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CARD_VERIFICATION_STATE'),
      JspPublicCodes_JSP_CARD_VERIFICATION_POSTAL_CODE: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CARD_VERIFICATION_POSTAL_CODE'),
      JspPublicCodes_JSP_CARD_VERIFICATION_COUNTRY: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CARD_VERIFICATION_COUNTRY'),
      JspPublicCodes_JSP_LABEL_SELECT: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_LABEL_SELECT'),
      countries: this.model.countries
    };
    return content;
  },
  getUpdatedModel: function getUpdatedModel() {
    this.updateModelWithInput();
    return this.model;
  },
  updateModelWithInput: function updateModelWithInput() {
    this.model.addressLine1 = this.ui.addressLine1.val();
    this.model.addressLine2 = this.ui.addressLine2.val().trim();
    this.model.city = this.ui.city.val().trim();
    this.model.countyOrState = this.ui.countyOrState.val().trim();
    this.model.postcode = this.ui.postcode.val().trim();
    this.model.country = this.ui.country.val().trim();
  }
});
"use strict";

PageApp.Views.CardVerifyCardDetailsView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.creditCard,
  ui: {
    nameOnCard: '#nameOnCard',
    cardNumber: '#cardNumber',
    cardExpirationMonth: '#cardExpirationMonth',
    cardExpirationYear: '#cardExpirationYear',
    securityCode: '#securityCode'
  },
  serializeData: function serializeData() {
    var content = {
      JspPublicCodes_JSP_CARD_VERIFICATION_NAME_ON_CARD: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CARD_VERIFICATION_NAME_ON_CARD'),
      JspPublicCodes_JSP_CARD_VERIFICATION_CARD_NUMBER: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CARD_VERIFICATION_CARD_NUMBER'),
      JspPublicCodes_JSP_CARD_VERIFICATION_EXPIRATION_DATE: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CARD_VERIFICATION_EXPIRATION_DATE'),
      JspPublicCodes_JSP_CARD_VERIFICATION_SECURITY_CODE: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CARD_VERIFICATION_SECURITY_CODE'),
      JspPublicCodes_JSP_CARD_VERIFICATION_CVV_INFO: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CARD_VERIFICATION_CVV_INFO'),
      JspPublicCodes_JSP_LABEL_SELECT: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_LABEL_SELECT'),
      referenceExpirationMonths: this.model.referenceExpirationMonths,
      referenceExpirationYears: this.model.referenceExpirationYears
    };
    return content;
  },
  getUpdatedModel: function getUpdatedModel() {
    this.updateModelWithInput();
    return this.model;
  },
  updateModelWithInput: function updateModelWithInput() {
    this.model.nameOnCard = this.ui.nameOnCard.val();
    this.model.cardNumber = this.ui.cardNumber.val().trim();
    this.model.cardExpirationMonth = this.ui.cardExpirationMonth.val().trim();
    this.model.cardExpirationYear = this.ui.cardExpirationYear.val().trim();
    this.model.securityCode = this.ui.securityCode.val().trim();
  }
});
"use strict";

PageApp.Views.CardVerifyLayout = Backbone.Marionette.LayoutView.extend({
  template: hbs.templates.cardVerificationLayout,
  regions: {
    creditCardDetailsRegion: '#creditCardDetailsRegion',
    billingAddressDetailsRegion: '#billingAddressDetailsRegion'
  },
  events: {
    'click .x-verify': 'handleSubmit',
    'click .x-skip': 'handleSkip',
    'keyup :text': 'handleSubmitFromInput',
    'change .form-control': 'clearError'
  },
  serializeData: function serializeData() {
    return this.model.get('layout');
  },
  onRender: function onRender() {
    this.creditCardDetailsRegion.show(new PageApp.Views.CardVerifyCardDetailsView({
      model: this.model.attributes.creditCardDetails
    }));
    this.billingAddressDetailsRegion.show(new PageApp.Views.CardVerifyBillingAddressDetailsView({
      model: this.model.attributes.billingAddress
    }));
  },
  clearError: function clearError(e) {
    var $targetField = $(e.currentTarget);
    myApp.utils.validation.clearFieldError($targetField);
  },
  getUpdatedModel: function getUpdatedModel() {
    this.updateModelWithInput();
    return this.model;
  },
  updateModelWithInput: function updateModelWithInput() {
    this.model.set('creditCardDetails', this.creditCardDetailsRegion.currentView.getUpdatedModel());
    this.model.set('billingAddress', this.billingAddressDetailsRegion.currentView.getUpdatedModel());
    this.model.set('flow', 'Registration');
  },
  // form submition below
  handleSubmitFromInput: function handleSubmitFromInput(e) {
    e.preventDefault();

    if (e.keyCode === 13) {
      this.handleSubmit(e);
    }

    return false;
  },
  handleSkip: function handleSkip(e) {
    e.preventDefault();
    var url = myApp.utils.ajax.getApiEndpoint('cardVerificationSkipAjax');
    myApp.utils.ajax.postBean(null, url, _.bind(function (response) {
      if (response.models.ErrorModel) {
        myApp.vent.trigger('ui:notification', {
          text: response.models.ErrorModel.message,
          level: 'warning'
        });
        var errors = new PageApp.Ent.Errors(response.models.ErrorModel.errors);
        myApp.utils.validation.renderErrors(errors);
        return;
      }

      if (response.models.RegisterForAuctionSuccessModel) {
        myApp.vent.trigger('register:success', {
          response: response
        });
      }
    }, this));
  },
  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    this.updateModelWithInput();
    var url = myApp.utils.ajax.getApiEndpoint('cardVerificationAjax');
    myApp.utils.ajax.postBean(this.model, url, _.bind(function (response) {
      if (response.models.ErrorsModel) {
        myApp.vent.trigger('ui:notification', {
          text: response.models.ErrorsModel.message,
          level: 'warning'
        });
        var errors = new PageApp.Ent.Errors(response.models.ErrorsModel.errors);
        myApp.utils.validation.renderErrors(errors);
        return;
      }

      if (response.models.RegisterForAuctionSuccessModel) {
        myApp.vent.trigger('register:success', {
          response: response
        });
      }
    }, this));
    return false;
  }
});
"use strict";

PageApp.Views.ErrorNotFoundView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.notFound,
  serializeData: function serializeData() {
    var backToHomepageUrl = myApp.ent.webApp.attributes.webAppLogin.externalBaseUrl ? myApp.ent.webApp.attributes.webAppLogin.externalBaseUrl : '#home';
    var myContent = {
      JspPublicCodes_JSP_BACK_TO_HOMEPAGE: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BACK_TO_HOMEPAGE'),
      backToHomepageUrl: backToHomepageUrl
    };
    return _.extend(this.model.attributes, myContent);
  }
});
"use strict";

PageApp.Controllers.LoginRouter = function (config) {
  function redirectToOAuthLogout(logoutUrl) {
    window.location.replace(logoutUrl);
  }

  function redirectToLogout() {
    var contextPath = myApp.ent.config.get('contextPath');
    myApp.controllers.application.router.navigate(contextPath + '/home', {
      trigger: true
    });
  }

  function initEvents() {
    myApp.vent.on('login:display', function () {
      var isUserLoggedIn = myApp.ent.user.isLoggedIn();

      if (!isUserLoggedIn) {
        var view = new PageApp.Views.LoginView({
          modal: true
        });
        return myApp.myModalRegion.show(new PageApp.Views.ModalLayout({
          view: view
        }));
      }
    }, this);
    myApp.vent.on('modal:closed', function () {
      var referer = myApp.ent.config.getReferer();

      if (referer === myApp.ent.config.get('contextPath') + '/login') {
        referer = myApp.ent.config.get('contextPath') + '/home';
      }

      return myApp.router.navigate(referer, {
        trigger: true
      });
    }, this);
    myApp.vent.on('authentication:success', function (userModel, isSilent) {
      handleAuthenticationElementHooks(true);

      if (userModel) {
        myApp.ent.user.set(userModel);

        if (userModel.accessToken) {
          window.localStorage.setItem('bidJSToken', userModel.accessToken);
        } // if we have bidJS Modules on the page, we may need to force it to get the baseModels again


        if (window.bidjsHooks && window.bidjsHooks.forceBaseModelReload) {
          window.bidjsHooks.forceBaseModelReload();
        }

        var referer = myApp.ent.config.getReferer();

        if (referer === myApp.ent.config.get('contextPath') + '/login') {
          referer = myApp.ent.config.get('contextPath') + '/home';
        }

        myApp.myModalRegion.empty();
        return myApp.router.navigate(referer, {
          trigger: true
        });
      }
    }, this);
    myApp.vent.on('authentication:remove', function (isSilent) {
      handleAuthenticationElementHooks(false);
      window.localStorage.removeItem('bidJSToken'); // if we have bidJS Modules on the page, we may need to force it to get the baseModels again

      if (window.bidjsHooks && window.bidjsHooks.forceBaseModelReload) {
        window.bidjsHooks.forceBaseModelReload();
      }

      myApp.refreshModels({
        callback: _.bind(function (models) {
          if (!isSilent) {
            myApp.router.navigate(myApp.ent.config.getReferer(), {
              trigger: true
            });
          }
        }, this)
      });

      if (!isSilent) {
        var oAuthLogoutUrl = PageApp.ent.config.getOAuthLogoutEndpoint();

        if (oAuthLogoutUrl) {
          console.log('Redirecting to logout - ', oAuthLogoutUrl);
          redirectToOAuthLogout(oAuthLogoutUrl);
        } else {
          console.log('Logged out, sending to home');
          redirectToLogout();
        }
      }
    }, this);
    $(document).on('click', '.x-bidlogix--trigger-my-settings', function (e) {
      e.preventDefault();
      myApp.controllers.application.router.navigate(myApp.ent.config.get('contextPath') + '/mySettings', {
        trigger: true
      });
    });
    $(document).on('click', '.x-bidlogix--trigger-my-bids', function (e) {
      e.preventDefault();
      myApp.controllers.application.router.navigate(myApp.ent.config.get('contextPath') + '/myBids', {
        trigger: true
      });
    });
    $(document).on('click', '.x-bidlogix--trigger-login', function (e) {
      e.preventDefault();
      myApp.router.navigate('#!/login', {
        trigger: true
      });
    });
    $(document).on('click', '.x-bidlogix--trigger-logout', function (e) {
      e.preventDefault();
      myApp.router.navigate('#!/logout', {
        trigger: true,
        replace: true
      });
    });
    $(document).on('click', '.x-bidlogix--trigger-register', function (e) {
      e.preventDefault();
      myApp.controllers.application.router.navigate(myApp.ent.config.get('contextPath') + '/createAccount', {
        trigger: true
      });
    });
  }

  function handleAuthenticationElementHooks(isAuthenticated) {
    if (isAuthenticated) {
      var displayName = myApp.ent.user.get('displayName');

      if (displayName) {
        $(document).find('.x-bidlogix--templated-user').text(displayName);
      }

      var isAdminAvailable = myApp.ent.user.get('adminLoginPermitted');
      var isVendorAvailable = myApp.ent.user.get('publicVendorAdmin');

      if (isAdminAvailable) {
        var adminUrl = myApp.ent.config.getAdminUrl();

        if (adminUrl) {
          $(document).find('.x-bidlogix--administrator-show').removeClass('hidden').children('a').attr('href', adminUrl);
        }
      } else {
        $(document).find('.x-bidlogix--administrator-show').addClass('hidden');
      }

      if (isVendorAvailable) {
        $(document).find('.x-bidlogix--vendor-show').removeClass('hidden');
      } else {
        $(document).find('.x-bidlogix--vendor-show').addClass('hidden');
      }

      $(document).find('.x-bidlogix--authenticated-hide').addClass('hidden');
      $(document).find('.x-bidlogix--authenticated-show').removeClass('hidden');
    } else {
      $(document).find('.x-bidlogix--authenticated-show').addClass('hidden');
      $(document).find('.x-bidlogix--authenticated-hide').removeClass('hidden');
      $(document).find('.x-bidlogix--administrator-show').addClass('hidden');
      $(document).find('.x-bidlogix--vendor-show').addClass('hidden');
    }
  }

  return {
    initialize: function initialize(models) {
      initEvents();
    }
  };
};
"use strict";

PageApp.Views.LoginView = Backbone.Marionette.LayoutView.extend({
  template: hbs.templates.login,
  events: {
    'click .x-login--cancel': 'handleLoginCancel',
    'submit .x-login--form': 'handleLoginSubmit'
  },
  serializeData: function serializeData() {
    return {
      contextPath: myApp.ent.config.get('contextPath'),
      error: this.error,
      translations: {
        ctaLoginSubmit: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_LOGIN_LOGIN'),
        ctaForgottenCredentials: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_LOGIN_FORGOTTEN'),
        ctaCreateAccount: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CREATE_ACCOUNT'),
        labelUsername: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_LOGIN_USERNAME'),
        labelPassword: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_LOGIN_PASSWORD'),
        contentLoginDescription: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_LOGIN_DESCRIPTION'),
        titleLogin: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_LOGIN_TO_ACCOUNT')
      }
    };
  },
  handleLoginCancel: function handleLoginCancel(e) {
    myApp.vent.trigger('modal:closed');
  },
  handleLoginSubmit: function handleLoginSubmit(e) {
    e.preventDefault();
    this.error = null;
    $('#loginSubmit').attr('disabled', true);
    var username = $('#loginUsername').val();
    var password = $('#loginPassword').val();
    this.handleLoginRequest(username, password);
  },
  handleLoginRequest: function handleLoginRequest(username, password) {
    return myApp.utils.ajax.postDirect({
      url: myApp.actions.login(),
      data: {
        '@class': 'com.bidlogix.scaffold.models.user.LoginModel',
        username: username,
        password: password
      },
      method: 'POST',
      successHandler: this.handleLoginResponse.bind(this)
    });
  },
  handleLoginResponse: function handleLoginResponse(res) {
    $('#loginSubmit').attr('disabled', false);
    return res.failed || !res.accessToken ? this.handleLoginFailure(res) : this.handleLoginSuccess(res);
  },
  handleLoginSuccess: function handleLoginSuccess(user) {
    if (user && user.accessToken) {
      myApp.ent.user.set(user);
      return myApp.vent.trigger('authentication:success', user, false);
    }

    console.error('unable to parse token from response', user);
    this.error = {
      text: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_UNEXPECTED_ERROR'),
      level: 'danger'
    };
    this.render();
  },
  handleLoginFailure: function handleLoginFailure(res) {
    this.error = {
      text: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_LOGIN_CREDENTIALS_ERROR'),
      level: 'danger'
    };
    this.render();
  }
});
"use strict";

PageApp.Ent.ReferenceData = Backbone.Model.extend({
  initialise: function initialise(options) {},
  defaults: {
    'errors': {}
  },
  getKeysNeeded: function getKeysNeeded(types) {
    var typesSplit = types.split(',');
    var toFetch = [];

    for (var key in typesSplit) {
      var ref = typesSplit[key].trim();

      if (!this.get(ref)) {
        toFetch.push(ref.trim());
      }
    }

    if (toFetch.length > 0) {
      return toFetch;
    }
  },
  getReferenceData: function getReferenceData(types) {
    var toFetch = {};
    var splitTypes = types.split(',');

    for (var key in splitTypes) {
      var ref = splitTypes[key].trim();

      if (this.get(ref)) {
        toFetch[ref] = this.get(ref);
      }
    }

    return toFetch;
  },
  setReferenceData: function setReferenceData(types, referenceData) {
    var splitTypes = types.split(',');

    for (var key in splitTypes) {
      var ref = splitTypes[key];
      this.set(ref, referenceData[ref]);
    }
  }
});
"use strict";

PageApp.Ent.SearchFilters = Backbone.Model.extend({
  defaults: {},
  supportsSearch: function supportsSearch() {
    return myApp.ent.config.get('page') === 'searchland';
  },
  supportsBanner: function supportsBanner() {
    return myApp.ent.config.get('page') === 'marketland' || myApp.ent.config.get('page') === 'auctionland';
  },
  supportsPaging: function supportsPaging() {
    return this.get('pagingModel').numPages > 1;
  },
  findItem: function findItem(filterItems, selectedId) {
    for (var key in filterItems) {
      var objParent = filterItems[key];
      if (objParent.item.id === selectedId) return objParent.item;

      for (var key1 in objParent.childItems) {
        var objChild = objParent.childItems[key1];
        if (objChild.id === selectedId) return objChild;
      }
    }
  },
  getLink: function getLink(paramName, paramValue) {
    // split the url into the hashed path, and the parameters
    var params = window.location.hash.split('?'); // set the hashed path as our base

    var link = params[0]; // if we have parameters
    // otherwise return unchanged hashed path

    if (params.length === 2 && params[1] && params[1].length > 0) {
      // parse the parameters into an object for ease of manipulation
      var paramsAsObject = JSON.parse('{"' + decodeURI(params[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}'); // delete any page parameter if it exists, to send the user back to the first page

      delete paramsAsObject.page; // add the specified param and append to the link

      paramsAsObject[paramName] = paramValue;
      link += '?' + decodeURIComponent($.param(paramsAsObject));
    } else {
      // add the param to the base link
      link += '?' + paramName + '=' + paramValue;
    }

    return link;
  },
  getRemoveLink: function getRemoveLink(filterId) {
    // split the url into the hashed path, and the parameters
    var params = window.location.hash.split('?'); // set the hashed path as our base

    var link = params[0]; // if we have parameters, and we don't want to filter as all
    // otherwise return unchanged hashed path

    if (params.length === 2 && filterId !== 'all') {
      if (params[1].length === 0) {
        return;
      } // parse the parameters into an object for ease of manipulation


      var paramsAsObject = JSON.parse('{"' + decodeURI(params[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');

      switch (filterId) {
        case 'tree':
          delete paramsAsObject.category;
          delete paramsAsObject.subCategory;
          break;

        case 'category':
          delete paramsAsObject.subCategory;
      } // remove the parameter specified in the filterId


      delete paramsAsObject[filterId]; // delete any page parameter if it exists, to send the user back to the first page

      delete paramsAsObject.page; // convert back to query parameters

      var paramsAsString = decodeURIComponent($.param(paramsAsObject)); // only append the query parameters if we have params remaining

      if (paramsAsString.length > 0) {
        link += '?' + paramsAsString;
      }
    }

    return link;
  }
});
"use strict";

PageApp.Views.AuctionTypeFilterView = Backbone.Marionette.ItemView.extend({
  getTemplate: function getTemplate() {
    return hbs.templates.auctionTypeFilter;
  },
  initialize: function initialize(options) {
    this.options = options;
  },
  events: {
    'click .x-type': 'handleType'
  },
  serializeData: function serializeData() {
    var myModel = this.model.attributes.auctionTypeFilterModel;
    var fCount = 0;

    for (var key in myModel.filterItems) {
      if (myModel.filterItems[key].count > 0) fCount++;
    }

    var content = {
      filterHeaderName: myModel.filterTitle,
      filterItems: myModel.filterItems,
      queryParameterName: 'auctionType',
      displayFilter: fCount > 1
    };
    return content;
  },
  handleType: function handleType(e) {
    if (e) e.preventDefault();
    var itemId = $(e.currentTarget).data('itemid');
    var link = this.model.getLink('auctionType', itemId);
    myApp.utils.ajax.relocate(link);
  }
});
"use strict";

PageApp.Views.CategoryFilterView = Backbone.Marionette.ItemView.extend({
  getTemplate: function getTemplate() {
    return hbs.templates.categoryFilter;
  },
  initialize: function initialize(options) {
    this.options = options;
  },
  events: {
    'click .x-category': 'handleCategory',
    'click #x-overflow': 'handleOverflow'
  },
  serializeData: function serializeData() {
    var myModel = this.model.attributes.categoryFilterModel;
    var itemsToDisplay = myModel.filterItems;
    var level = 'category';

    if (_.size(itemsToDisplay) > 0) {
      if (itemsToDisplay[0].item.parentId && itemsToDisplay[0].item.parentId > 0) {
        level = 'subCategory';
      }
    }

    itemsToDisplay.sort(this.categoryCompare);
    var content = {
      filterHeaderName: myModel.filterTitle,
      filterItems: itemsToDisplay,
      level: level,
      multiFilter: myModel.multiFilter
    };
    return content;
  },
  categoryCompare: function categoryCompare(a, b) {
    return a.item.name > b.item.name ? 1 : b.item.name > a.item.name ? -1 : 0;
  },
  handleCategory: function handleCategory(e) {
    if (e) e.preventDefault();
    var selectedId = $(e.currentTarget).data('itemid');
    var level = $(e.currentTarget).data('level');
    var link = this.model.getLink(level, selectedId);
    myApp.utils.ajax.relocate(link);
  }
});
"use strict";

PageApp.Views.CategoryTreesFilterView = Backbone.Marionette.ItemView.extend({
  getTemplate: function getTemplate() {
    return hbs.templates.categoryTreesFilter;
  },
  initialize: function initialize(options) {
    this.options = options;
  },
  events: {
    'click .x-category': 'handleCategory',
    'click .x-more': 'handleMore',
    'click .x-less': 'handleLess'
  },
  serializeData: function serializeData() {
    var myModel = this.model.attributes.categoryFilterModel;
    var moreorless = 'more';
    var hMarketClass;
    var overflowLabel = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_FILTER_MORE');
    var OVERFLOW_BOUNDARY = 4; // not const as not available in IE8
    // Sort the trees

    myModel.trees.sort(this.categoryCompare);

    for (var key in myModel.trees) {
      var thisTree = myModel.trees[key];
      var childItems = thisTree.childItems; // Sort the categories
      // childItems.sort(function(a,b) {return (a.item.name > b.item.name) ? 1 : ((b.item.name > a.item.name) ? -1 : 0);} );

      childItems.sort(this.categoryCompare); // IE8 doesn't support child items. So if undefined set numberOfChildItems to 1 more than overflow boundary.
      // Should hopefully mean all categories can be displayed though more/less labels may display unnecessarily.

      var numberOfChildItems = thisTree.childItems ? thisTree.childItems.length : OVERFLOW_BOUNDARY + 1;
      thisTree.overflow = numberOfChildItems > OVERFLOW_BOUNDARY;
      var count = 0;

      for (var key1 in thisTree.childItems) {
        var parent = thisTree.childItems[key1];
        parent.childItems.sort(this.categoryCompare);
        parent.display = false;
        if (thisTree.more || count < 5) parent.display = true;
        count++;
      }

      if (thisTree.more) {
        moreorless = 'less';
        overflowLabel = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_FILTER_LESS');
      }
    }

    if (myApp.ent.config.get('page') === 'marketland') {
      hMarketClass = 'g2-market-title-bg';
    }

    var content = {
      hMarketClass: hMarketClass,
      filterHeaderName: myModel.filterTitle,
      trees: myModel.trees,
      queryParameterName: 'category',
      childQueryParameterName: 'subCategory',
      moreorless: moreorless,
      overflowLabel: overflowLabel
    };
    return content;
  },
  categoryCompare: function categoryCompare(a, b) {
    return a.item.name > b.item.name ? 1 : b.item.name > a.item.name ? -1 : 0;
  },
  handleCategory: function handleCategory(e) {
    if (e) e.preventDefault();
    var itemId = $(e.currentTarget).data('itemid');
    var level = $(e.currentTarget).data('level');
    var link = this.model.getLink(level, itemId);
    myApp.utils.ajax.relocate(link);
  },
  handleMore: function handleMore(e) {
    if (e) e.preventDefault();
    var selectedId = $(e.currentTarget).data('treeid');
    var myModel = this.model.attributes.categoryFilterModel;

    for (var key in myModel.trees) {
      if (myModel.trees[key].item.id === selectedId) {
        myModel.trees[key].more = true;
      }
    }

    this.render();
  },
  handleLess: function handleLess(e) {
    if (e) e.preventDefault();
    var selectedId = $(e.currentTarget).data('treeid');
    var myModel = this.model.attributes.categoryFilterModel;

    for (var key in myModel.trees) {
      if (myModel.trees[key].item.id === selectedId) {
        myModel.trees[key].more = false;
      }
    }

    this.render();
  }
});
"use strict";

PageApp.Views.ContinentFilterView = Backbone.Marionette.ItemView.extend({
  getTemplate: function getTemplate() {
    return hbs.templates.continentFilter;
  },
  initialize: function initialize(options) {
    this.options = options;
  },
  events: {
    'click .x-continent': 'handleContinent',
    'click .x-country': 'handleCountry'
  },
  serializeData: function serializeData() {
    var currentViewModel = this.model.attributes.continentFilterModel;
    var currentFilterItems = currentViewModel.filterItems;

    var currentSelectedFilterItems = _.filter(currentFilterItems, function (o) {
      return o.selected === true;
    });

    var hMarketClass;

    if (myApp.ent.config.get('page') === 'marketland') {
      hMarketClass = 'g2-market-title-bg';
    }

    var content = {
      baseUrl: this.model.attributes.currentFilterModel.baseUrl,
      hMarketClass: hMarketClass,
      filterHeaderName: currentViewModel.filterTitle,
      filterItems: currentFilterItems,
      queryParameterName: 'continent',
      childQueryParameterName: 'country',
      continentExpanded: currentSelectedFilterItems.length > 1
    };
    return content;
  },
  onRender: function onRender() {
    var currentViewModel = this.model.attributes.continentFilterModel;
    var currentFilterItems = currentViewModel.filterItems;

    var currentSelectedFilterItems = _.filter(currentFilterItems, function (o) {
      return o.selected === true;
    });

    for (var i = 0; i < currentSelectedFilterItems.length; i++) {
      var selectedFilterItemId = currentSelectedFilterItems[i].item.id;
      this.$el.find('#continent-checkbox' + selectedFilterItemId).prop('checked', true);
    }
  },
  handleCountry: function handleCountry(e) {
    e.preventDefault();
    var itemId = $(e.currentTarget).data('itemid');
    var link = this.model.getLink('country', itemId); // myApp.controllers.application.doRoute({'href': link, 'manual': true});

    myApp.utils.ajax.relocate(link);
    return false;
  },
  handleContinent: function handleContinent(e) {
    var itemId = $(e.currentTarget).data('itemid');
    var link = this.model.getLink('continent', itemId);
    myApp.utils.ajax.relocate(link);
  }
});
"use strict";

PageApp.Views.CurrentFilterView = Backbone.Marionette.ItemView.extend({
  getTemplate: function getTemplate() {
    return hbs.templates.currentFilter;
  },
  initialize: function initialize(options) {
    this.options = options;
  },
  events: {
    'click .x-remove': 'handleRemove'
  },
  serializeData: function serializeData() {
    var currentViewModel = this.model.attributes.currentFilterModel;
    var myLabel = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEMS');

    if (currentViewModel.totalNumberOfMatches === 1) {
      myLabel = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM');
    }

    var content = currentViewModel;

    if (myApp.ent.config.get('page') === 'marketland') {
      content.hMarketClass = 'g2-market-title-bg';
    }

    content.numbItemsLabel = myLabel;

    try {
      content.showOpenOnly = this.model.get('parameters').parameters.showOpenOnly;
    } catch (err) {
      content.showOpenOnly = false;
    }

    content.JspPublicCodes_JSP_TIMED_EMPTY_FILTERS = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_TIMED_EMPTY_FILTERS');
    content.JspPublicCodes_JSP_FOUND = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_FOUND');
    content.JspPublicCodes_JSP_CLEAR_ALL_FILTERS = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CLEAR_ALL_FILTERS');
    content.JspPublicCodes_JSP_CATEGORY = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CATEGORY');
    content.JspPublicCodes_JSP_REMOVE_SEARCH_TERM = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_REMOVE_SEARCH_TERM');
    content.JspPublicCodes_JSP_REMOVE_FILTER = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_REMOVE_FILTER');
    return content;
  },
  handleRemove: function handleRemove(e) {
    if (e) e.preventDefault();
    var filterId = $(e.currentTarget).data('filterid');
    var link = this.model.getRemoveLink(filterId);
    myApp.utils.ajax.relocate(link);
  }
});
"use strict";

PageApp.Views.FiltersLayout = Backbone.Marionette.LayoutView.extend({
  getTemplate: function getTemplate() {
    return hbs.templates.filtersLayout;
  },
  initialize: function initialize(options) {
    this.options = options;
  },
  regions: {
    saleInfoRegion: '#saleInfoRegion',
    currentFilterRegion: '#currentFilterRegion',
    categoriesRegion: '#categoriesRegion',
    auctionTypeRegion: '#auctionTypeRegion',
    itemTypeRegion: '#itemTypeRegion',
    continentsRegion: '#continentsRegion',
    infoRegion: '#infoRegion'
  },
  serializeData: function serializeData() {
    var saleInfoActive = myApp.ent.user.getPreference('saleInfoActive');
    var filtersActive = myApp.ent.user.getPreference('filtersActive');
    var showSaleInfoInPage = myApp.ent.user.getPreference('showSaleInfoInPage');
    var showOpenOnlyChecked = this.model.get('parameters').parameters.showOpenOnly ? ' checked ' : '';
    var isAuctionLand = myApp.ent.config.get('page') === 'auctionland';
    var isMarketLand = myApp.ent.config.get('page') === 'marketland';

    if (showSaleInfoInPage) {
      if (this.model.get('currentFilterModel').filtering || showOpenOnlyChecked) {
        filtersActive = 'active';
      }
    }

    if (showSaleInfoInPage && isMarketLand) {
      filtersActive = 'active';
    }

    var content = {
      showSaleInfoInPage: showSaleInfoInPage,
      filtersActive: filtersActive,
      saleInfoActive: saleInfoActive,
      isAuctionLand: isAuctionLand
    };
    return content;
  },
  onRender: function onRender() {
    var showOpenOnly = this.model.get('parameters').parameters.showOpenOnly;
    var showSaleInfoInPage = myApp.ent.user.getPreference('showSaleInfoInPage');
    var isAuctionLand = myApp.ent.config.get('page') === 'auctionland';

    if (showSaleInfoInPage && isAuctionLand) {
      this.saleInfoRegion.show(new PageApp.Views.SaleInfoView({
        model: myApp.ent.saleInfo,
        showSaleInfoInPage: true
      }));
    }

    this.currentFilterRegion.show(new PageApp.Views.CurrentFilterView({
      model: this.model
    }));

    if (showOpenOnly) {
      return;
    }

    var showContinents = true;

    if (myApp.ent.config.get('page') === 'auctionland') {
      showContinents = false;
    }

    if (this.model.get('mpInfoModel')) {
      this.infoRegion.show(new PageApp.Views.MarketplaceInfoView({
        model: this.model
      }));
    }

    if (this.model.get('currentFilterModel').totalNumberOfMatches > 0) {
      if (this.model.get('categoryFilterModel').multiFilter) {
        this.categoriesRegion.show(new PageApp.Views.CategoryTreesFilterView({
          model: this.model
        }));
      } else {
        this.categoriesRegion.show(new PageApp.Views.CategoryFilterView({
          model: this.model
        }));
      }
    }

    if (showContinents && !this.model.get('currentFilterModel').countryFiltering) this.continentsRegion.show(new PageApp.Views.ContinentFilterView({
      model: this.model
    }));
    if (!this.model.get('currentFilterModel').itemTypeFiltering) this.itemTypeRegion.show(new PageApp.Views.ItemTypeFilterView({
      model: this.model
    }));
    if (!this.model.get('currentFilterModel').auctionTypeFiltering) this.auctionTypeRegion.show(new PageApp.Views.AuctionTypeFilterView({
      model: this.model
    }));
  }
});
"use strict";

PageApp.Views.ItemTypeFilterView = Backbone.Marionette.ItemView.extend({
  getTemplate: function getTemplate() {
    return hbs.templates.itemTypeFilter;
  },
  initialize: function initialize(options) {
    this.options = options;
  },
  events: {
    'click .x-type': 'handleType'
  },
  serializeData: function serializeData() {
    var myModel = this.model.attributes.itemTypeFilterModel;
    var fCount = 0;

    for (var key in myModel.filterItems) {
      if (myModel.filterItems[key].count > 0) fCount++;
    }

    var content = {
      filterHeaderName: myModel.filterTitle,
      filterItems: myModel.filterItems,
      queryParameterName: 'itemType',
      displayFilter: fCount > 1
    };
    return content;
  },
  handleType: function handleType(e) {
    if (e) e.preventDefault();
    var itemId = $(e.currentTarget).data('itemid');
    var link = this.model.getLink('itemType', itemId);
    myApp.utils.ajax.relocate(link);
  }
});
"use strict";

PageApp.Views.MarketplaceInfoView = Backbone.Marionette.ItemView.extend({
  getTemplate: function getTemplate() {
    return hbs.templates.filterInfo;
  },
  serializeData: function serializeData() {
    var myModel = this.model.attributes.mpInfoModel;
    var hMarketClass;

    if (myApp.ent.config.get('page') === 'marketland') {
      hMarketClass = 'g2-market-title-bg';
    }

    var content = {
      hMarketClass: hMarketClass,
      JspPublicCodes_JSP_INFORMATION: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_INFORMATION'),
      mpText: myModel.mpText
    };
    return content;
  }
});
"use strict";

PageApp.Views.PagingView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.pagingBootstrap,
  initialize: function initialize(options) {
    this.options = options;
  },
  events: {
    'click .x-previous': 'handlePrevious',
    'click .x-next': 'handleNext',
    'click .x-goto': 'handleGoto'
  },
  serializeData: function serializeData() {
    var numPages = this.model.get('pagingModel').numPages;
    var paginationPosition = this.model.get('pagingModel').paginationPosition;
    var pageIndex = this.model.get('pagingModel').pageIndex;
    var previous = pageIndex > 0;
    var next = pageIndex < numPages - 1;
    var maxPagesToShow = 3;
    var pages = [];
    var lastPage = numPages - 1;
    var index = pageIndex - Math.floor(maxPagesToShow / 2);
    var upperBound = pageIndex + Math.floor(maxPagesToShow / 2) + 1; // adjust bounds

    if (pageIndex >= numPages - Math.floor(maxPagesToShow / 2)) {
      index = numPages - maxPagesToShow;
      upperBound = numPages;
    }

    if (pageIndex < Math.ceil(maxPagesToShow / 2)) {
      index = 0;
      upperBound = maxPagesToShow;
    } // create pages


    for (index; index < upperBound; index++) {
      if (index < numPages) {
        var link = true;
        var id = 'pagination' + index + paginationPosition;
        var label = index + 1;

        if (index === pageIndex) {
          link = false;
        }

        pages.push({
          id: id,
          link: link,
          gotoIndex: index,
          label: label
        });
      }
    }

    var pageOfMsg = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_PAGE_1_OF');
    pageOfMsg = pageOfMsg.replace('{0}', pageIndex + 1);
    pageOfMsg = pageOfMsg.replace('{1}', numPages);
    var content = {
      controller: this.model.get('pagingModel').controller,
      numPages: numPages,
      pages: pages,
      lastPage: lastPage,
      next: next,
      previous: previous,
      pageIndex: pageIndex,
      numberOfItemsPerPage: this.model.get('pagingModel').numberOfItemsPerPage,
      pageXofXMessage: this.model.get('pagingModel').pageXofXMessage,
      paginationPosition: paginationPosition,
      JspPublicCodes_JSP_PAGE_PREVIOUS: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_PAGE_PREVIOUS'),
      JspPublicCodes_JSP_PAGE_NEXT: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_PAGE_NEXT'),
      pageOfMsg: pageOfMsg
    };
    return content;
  },
  handleGoto: function handleGoto(e) {
    if (e) e.preventDefault();
    var itemId = $(e.currentTarget).data('goto');
    var link = this.model.getLink('page', itemId);
    myApp.utils.ajax.relocate(link);
  },
  handlePrevious: function handlePrevious(e) {
    if (e) e.preventDefault();
    var itemId = this.model.get('pagingModel').pageIndex - 1;
    var link = this.model.getLink('page', itemId);
    myApp.utils.ajax.relocate(link);
  },
  handleNext: function handleNext(e) {
    if (e) e.preventDefault();
    var itemId = this.model.get('pagingModel').pageIndex + 1;
    var link = this.model.getLink('page', itemId);
    myApp.utils.ajax.relocate(link);
  }
});
"use strict";

PageApp.Views.SearchInputView = Backbone.Marionette.ItemView.extend({
  template: null,
  initialize: function initialize() {
    this.template = hbs.templates.searchInput;
  },
  serializeData: function serializeData() {
    var content = {
      multiTreeAuctioneer: myApp.ent.webApp.attributes.multiTreeAuctioneer,
      categoryTrees: myApp.ent.webApp.attributes.categoryTrees,
      JspPublicCodes_JSP_HEADER_SEARCH_ITEMS: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_HEADER_SEARCH_ITEMS'),
      JspPublicCodes_JSP_LABEL_ALL_CATEGORIES: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_LABEL_ALL_CATEGORIES')
    };
    return content;
  },
  events: {
    'click #search-submit': 'handleSearchForItems'
  },
  onShow: function onShow() {
    if (this.model) {
      var query = this.model.get('currentFilterModel').queryFilterName;

      if (query && query.length > 0) {
        this.$el.find('.x-query-input').val(query);
      }

      var treeId = this.model.get('currentFilterModel').categoryTreeId;

      if (treeId && treeId > 0) {
        this.$el.find('.x-tree-input option[value=' + treeId + ']').prop('selected', true);
      }
    }
  },
  handleSearchForItems: function handleSearchForItems(e) {
    e.preventDefault();
    var treeId = this.$el.find('#categoryTree').val();
    var query = this.$el.find('#searchFilter').val();
    var action = this.$el.find('#searchForItems').attr('action');
    var url = myApp.ent.config.attributes.contextPath + '/' + action + '?query=' + query + '&tree=' + treeId;
    myApp.utils.ajax.relocate(url);
    return false;
  }
});
"use strict";

PageApp.Controllers.TimedRouter = function (config) {
  var myRegion;
  var myItemCollection = new PageApp.Ent.TimedItems();
  var existingPoll = null;
  var isPolling = false;
  var isHealthChecking = false;
  var hasConnection = true;
  var pollCount = 0;
  var pollRetryBase = 1000;
  var pollRetryTime = 1000;
  var pollRetryMultiplier = 2;
  var pollRetryMax = 20000;

  function handleLongPollFailure(timedResponse) {
    if (console.log) {
      console.log('Error polling server. Page reload may be required: ' + (timedResponse ? timedResponse.message : ''));
    }

    if (hasConnection) {
      setTimeout(function () {
        myApp.vent.trigger('timed:poll');
      }, pollRetryTime);
      console.warn('Poll Failed: Retrying in ' + pollRetryTime / 1000 + ' seconds');
      pollRetryTime = Math.min(pollRetryTime * pollRetryMultiplier, pollRetryMax);
    } else {
      isPolling = false;
      existingPoll = null;
    }
  }

  function handleLongPollSuccess(timedResponse) {
    // validate body of timedResponse, ensuring it's the correct class and has not errored.
    // otherwise use failure process instead, treating as an error
    if (timedResponse && (timedResponse['@class'] !== '.TimedResponse' || !timedResponse.worked || timedResponse.models && timedResponse.models.ErrorModel)) {
      return handleLongPollFailure(timedResponse);
    }

    try {
      if (pollRetryTime !== pollRetryBase) {
        console.log('Poll Success: Retry time reset to ' + pollRetryBase / 1000 + ' seconds'); // reset pollRetryTime, as any ramping up of this is now defunct

        pollRetryTime = pollRetryBase;
      }

      var biddingItemModel;

      if (timedResponse.models.BiddingItemModel || timedResponse.models.TimedListModel) {
        var biddingItemModels = [];

        if (timedResponse.models.BiddingItemModel) {
          biddingItemModels.push(timedResponse.models.BiddingItemModel);
        } else {
          var models = timedResponse.models.TimedListModel.biddingItems;

          for (var i = 0; i < _.size(models); i++) {
            biddingItemModels.push(models[i]);
          }
        }

        for (var j = 0; j < _.size(biddingItemModels); j++) {
          var responseModel = biddingItemModels[j];
          biddingItemModel = myItemCollection.get(responseModel);

          if (responseModel.timedBiddingInfo && responseModel.timedUserInfo) {
            biddingItemModel.set({
              'timedBiddingInfo': responseModel.timedBiddingInfo,
              'timedUserInfo': timedResponse.models.TimedUserInfoModel,
              rabbitCode: timedResponse.actionCode
            }, {
              silent: true
            });
          } else if (responseModel.timedUserInfo) {
            biddingItemModel.set({
              'timedUserInfo': responseModel.timedUserInfo,
              rabbitCode: timedResponse.actionCode
            }, {
              silent: true
            });
          } else if (responseModel.timedBiddingInfo) {
            biddingItemModel.set({
              'timedBiddingInfo': responseModel.timedBiddingInfo,
              rabbitCode: timedResponse.actionCode
            }, {
              silent: true
            });
          }

          biddingItemModel.set('userStatus', myApp.ent.timedHelper.getUserStatus(biddingItemModel.attributes), {
            silent: true
          });
          biddingItemModel.set('lastupdate', new Date().getTime());
        }
      }

      if (timedResponse.actionCode === myApp.ent.status.getRabbitResponseByName('REGISTRANT_STATUS_CHANGE').id) {
        // REGISTRANT_STATUS_CHANGE - admin approves, suspends etc a registrant..
        var registrant = timedResponse.models.userRegistrationModel;
        myItemCollection.each(function (item) {
          if (item.get('registrant').id === registrant.id) {
            item.set({
              'registrant': registrant,
              rabbitCode: timedResponse.actionCode
            }, {
              silent: true
            });
            item.set('userStatus', myApp.ent.timedHelper.getUserStatus(item.attributes), {
              silent: true
            });
            item.set('lastupdate', new Date().getTime()); // Clicking the filters button reloads the original state of the registrant so we need
            // to update the LandingPage's version of the item

            var cachedItem = myApp.request('reqres:timed:fetch:item', {
              itemId: item.id
            });
            cachedItem.registrant = registrant;
          }
        }, this);
      } else if (timedResponse.actionCode === myApp.ent.status.getRabbitResponseByName('ADMIN_WEBCAST_STARTED').id) {
        if (myApp.ent.config.get('page') === 'auctionland') {
          var first;

          if (myItemCollection && myItemCollection.models && _.size(myItemCollection.models) > 0) {
            first = myItemCollection.models[0];
          }

          if (first && first.get('auctionId') === timedResponse.models.auctionModel.auctionId) {
            myApp.vent.trigger('ui:notification', {
              text: 'Webcast Auction Starts Now!',
              level: 'success'
            });
            window.location.reload();
          }
        }
      } else if (timedResponse.actionCode === myApp.ent.status.getRabbitResponseByName('ADMIN_SETTINGS_CHANGE').id) {
        myApp.vent.trigger('timed:refresh');
      } else if (timedResponse.actionCode === myApp.ent.status.getRabbitResponseByName('PUBLIC_BUY_NOW').id || timedResponse.actionCode === myApp.ent.status.getRabbitResponseByName('PUBLIC_MAX_BID').id || timedResponse.actionCode === myApp.ent.status.getRabbitResponseByName('ADMIN_ACTION_OFFER_STATE_CHANGE').id || timedResponse.actionCode === myApp.ent.status.getRabbitResponseByName('PUBLIC_MAKE_OFFER').id || timedResponse.actionCode === myApp.ent.status.getRabbitResponseByName('PUBLIC_MULTI_BUY').id) {
        // PUBLIC_BUY_NOW - a user bought this item - update user buy now dialog if open
        myApp.vent.trigger('timed:refresh:item', {
          id: timedResponse.itemId,
          actionCode: timedResponse.actionCode
        });
      }

      var mybidsFilterSet = myApp.ent.status.getMyBidsFilterSet();

      if (mybidsFilterSet && myApp.ent.config.get('page') === 'myBidsLand') {
        // If we're on mybids and filtering results we need to render all the children of the collection
        // E.g. say I am filtering on 'losing' items and the last event was a cancel bid that
        // changed my state to winning then I need to do the full re-render to for the item to be removed
        // from the view.
        myApp.vent.trigger('timed:display');
      } else {
        myApp.vent.trigger('timed:poll');
      }
    } catch (err) {
      if (console.log) {
        console.log(err);
      }

      myApp.vent.trigger('ui:notification', {
        text: err,
        level: 'danger'
      });
      myApp.vent.trigger('timed:poll');
    }
  }

  function initCommands() {
    myApp.reqres.setHandler('reqres:timed:fetch:count', function (config) {
      return _.size(myItemCollection);
    });
    myApp.reqres.setHandler('reqres:timed:fetch:item', function (config) {
      return myItemCollection.get({
        id: config.itemId
      });
    });
    myApp.reqres.setHandler('reqres:timed:set:timedBiddingInfo', function (config) {
      var model = myItemCollection.get(config.models.BiddingItemModel);

      if (config.models.TimedUserInfoModel) {
        model.set({
          'timedBiddingInfo': config.models.BiddingItemModel.timedBiddingInfo,
          'timedUserInfo': config.models.TimedUserInfoModel,
          rabbitCode: config.rabbitCode
        });
      } else {
        model.set({
          'timedBiddingInfo': config.models.BiddingItemModel.timedBiddingInfo,
          rabbitCode: config.rabbitCode
        });
      }

      return model;
    });
  }

  function initEvents() {
    myApp.ent.timedHelper = new PageApp.Ent.Timed2PrimaryHelper();
    myApp.ent.purchaseEntity = new PageApp.Ent.PurchaseEntity();
    myApp.vent.on('user:logged:out', function (models) {
      myApp.vent.trigger('timed:display');
    }, this);
    myApp.vent.on('timed:refresh:item', function (config) {
      var biddingItemModel = myItemCollection.get(config.id);
      myApp.utils.ajax.get(null, myApp.utils.ajax.getApiEndpoint('timed/mystate') + '/' + config.id, _.bind(function (response) {
        var registrant = biddingItemModel.get('registrant');
        response.models.BiddingItemModel.timedUserInfo = response.models.TimedUserInfoModel;
        response.models.BiddingItemModel.registrant = registrant;
        biddingItemModel.set(response.models.BiddingItemModel);
        biddingItemModel.set('lastupdate', new Date().getTime());
        var refreshDialog = config.actionCode === myApp.ent.status.getRabbitResponseByName('ADMIN_ACTION_OFFER_STATE_CHANGE').id;
        var refreshBuyNowDialog = refreshDialog || config.actionCode === myApp.ent.status.getRabbitResponseByName('PUBLIC_BUY_NOW').id;

        if (refreshBuyNowDialog) {
          myApp.ent.purchaseEntity.setModelForBuyNow(biddingItemModel.attributes, 3);
        }

        var refreshMakeOfferDialog = refreshDialog || config.actionCode === myApp.ent.status.getRabbitResponseByName('PUBLIC_MAKE_OFFER').id;
        refreshMakeOfferDialog = refreshMakeOfferDialog || config.actionCode === myApp.ent.status.getRabbitResponseByName('PUBLIC_MULTI_BUY').id;

        if (refreshMakeOfferDialog) {
          myApp.ent.purchaseEntity.setModelForMakeOffer(biddingItemModel.attributes, true, false);
        }

        var refreshTransferDialog = refreshDialog || config.actionCode === myApp.ent.status.getRabbitResponseByName('PUBLIC_TRANSFER').id;

        if (refreshTransferDialog) {
          myApp.ent.purchaseEntity.setModelForTransfer(biddingItemModel.attributes, 3);
        }

        var refreshTenderDialog = refreshDialog || config.actionCode === myApp.ent.status.getRabbitResponseByName('PUBLIC_TENDER').id;

        if (refreshTenderDialog) {
          myApp.ent.purchaseEntity.setModelForTender(biddingItemModel.attributes, true);
        }
      }, this));
    }, this);
    myApp.vent.on('timed:refresh', function () {
      var itemIds = myItemCollection.getItemIds();
      myApp.utils.ajax.get(null, myApp.utils.ajax.getApiEndpoint('timed/mystates') + '/' + itemIds.join(','), _.bind(function (response) {
        if (response.models.TimedListModel && response.models.TimedListModel.biddingItems) {
          myItemCollection = new PageApp.Ent.TimedItems(response.models.TimedListModel.biddingItems);
        } else {
          myItemCollection = new PageApp.Ent.TimedItems();
        }

        myApp.vent.trigger('timed:display');
      }, this));
    }, this);
    myApp.vent.on('timed:display', function (config) {
      var layout = myApp.ent.user.getPreference('layoutForBidding');
      myApp.ent.user.setPreference('layoutForBidding', layout); // ie. some re-rendering relies on the cached timed bidding states being up to date here.

      if (config) {
        if (config.region) {
          myRegion = config.region;
        }

        if (config.model) {
          myItemCollection = new PageApp.Ent.TimedItems(config.model.TimedListModel.biddingItems);
        }
      }

      var xcoord = window.pageXOffset || document.documentElement.scrollLeft;
      var ycoord = window.pageYOffset || document.documentElement.scrollTop;

      if (!hasConnection) {
        var alertModel = new PageApp.Ent.BasicEntity({
          content: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_TIMED_OFFLINE_MESSAGE'),
          type: 'warning',
          showLoader: true
        });
        myRegion.show(new PageApp.Views.AlertView({
          model: alertModel
        }));
      } else {
        myRegion.show(new PageApp.Views.CollectionContainerLayout({
          model: myItemCollection
        }));
      }

      window.scroll(xcoord, ycoord); // BD-5027 - needs re-thinking.. myApp.vent.trigger('timed:healthCheck', false);

      myApp.vent.trigger('timed:poll');
    }, this);
    myApp.vent.on('timed:touch:item', function (config) {
      var biddingItemModel = myItemCollection.get(config.id);

      if (biddingItemModel) {
        biddingItemModel.set('lastupdate', new Date().getTime());
      }
    }, this);
    myApp.vent.on('timed:healthCheck', function (force) {
      if (!isHealthChecking || force) {// BD-5027 - needs re-thinking..
        // $.ajax({
        //   url: myApp.ent.config.attributes.contextPath + myApp.actions.ping + '?random-no-cache=' + Math.floor(Date.now() / 1000),
        //   timeout: 5000,  // timeout 5s
        //   success: myApp.vent.trigger.bind(this, 'timed:healthCheck:success'),
        //   error: myApp.vent.trigger.bind(this, 'timed:healthCheck:failure'),
        //   complete: function() {
        //     setTimeout(function() {
        //       myApp.vent.trigger('timed:healthCheck', true)
        //     }, 1000)
        //   }
        // });
        // isHealthChecking = true
      }
    });
    myApp.vent.on('timed:healthCheck:success', function () {
      if (!hasConnection) {
        console.warn('Restored connection');
        hasConnection = true;
        myApp.vent.trigger('timed:display');
      } // if we've stopped polling due to unhealthy connection and now have a healthy connection, we need to poll again


      if (!isPolling) {
        myApp.vent.trigger('timed:poll');
      }
    });
    myApp.vent.on('timed:healthCheck:failure', function (err) {
      if (hasConnection) {
        console.warn('Lost connection');
        hasConnection = false;
        var alertEntity = err && err.status === 404 ? {
          content: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_TIMED_OFFLINE_MESSAGE'),
          type: 'warning',
          showLoader: true
        } : {
          content: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_TIMED_ERROR_MESSAGE'),
          type: 'danger',
          showLoader: true
        };
        var alertModel = new PageApp.Ent.BasicEntity(alertEntity);
        myRegion.show(new PageApp.Views.AlertView({
          model: alertModel
        }));
      }

      if (existingPoll && existingPoll.abort) {
        existingPoll.abort();
      }
    });
    myApp.vent.on('timed:poll', function () {
      pollCount = pollCount + 1;

      if (pollCount > 1) {
        console.warn('A duplicate long poll was created! There are currently ' + pollCount + ' long polls active');
      }

      var bean = myItemCollection.getLongPollUrl();

      if (bean) {
        isPolling = true; // create a new longPoll, and record it so we can cancel it if need be

        existingPoll = myApp.utils.ajax.postBean(bean, myApp.utils.ajax.getApiEndpoint('timed/items'), _.bind(function (timedResponse) {
          if (timedResponse && timedResponse.actionCode === myApp.ent.status.getRabbitResponseByName('PUBLIC_TERMINATE_AND_ADD').id) {
            // PUBLIC_TERMINATE_AND_ADD check if need to stop polling (the data has changed and a new long has been issued) or just add new long poll...
            return;
          }

          pollCount = pollCount - 1;

          if (!timedResponse || timedResponse.failed) {
            handleLongPollFailure(timedResponse);
          } else {
            handleLongPollSuccess(timedResponse);
          }
        }, this));
      }
    }, this);
  }

  return {
    initialize: function initialize(models) {
      initEvents();
      initCommands();
    }
  };
};
"use strict";

PageApp.Controllers.BuyNowRouter = function (config) {
  function initEvents() {
    myApp.vent.on('buynow:display', function (config) {
      if (!this.modalInProgress) {
        this.modalInProgress = true;
        var view = new PageApp.Views.BuyNowView({
          model: config.model
        }); // model is a PurchaseEntity

        myApp.myModalRegion.show(new PageApp.Views.ModalLayout({
          view: view
        }));
      }
    }, this);
    myApp.vent.on('modal:closed', function (config) {
      this.modalInProgress = false;
    }, this);
  }

  return {
    initialize: function initialize(models) {
      initEvents();
    }
  };
};
"use strict";

PageApp.Controllers.ContactSellerRouter = function (config) {
  function initEvents() {
    myApp.vent.on('contactseller:display', function (config) {
      if (!this.modalInProgress) {
        this.modalInProgress = true;

        if (!this.contactSellerModel) {
          this.contactSellerModel = new PageApp.Ent.BasicEntity(config.model);
        }

        if (config.model) {
          this.contactSellerModel.set('id', config.model.id);
          this.contactSellerModel.set('title', config.model.title);
        }

        this.contactSellerModel.set('callbackTrigger', config.callbackTrigger);
        var view = new PageApp.Views.ContactSellerView({
          model: this.contactSellerModel
        });
        myApp.myModalRegion.show(new PageApp.Views.ModalLayout({
          view: view
        }));
      }
    }, this);
    myApp.vent.on('modal:closed', function (config) {
      this.modalInProgress = false;
    }, this);
  }

  return {
    initialize: function initialize(models) {
      initEvents();
    }
  };
};
"use strict";

PageApp.Controllers.MakeOfferRouter = function (config) {
  function initEvents() {
    myApp.vent.on('makeoffer:display', function (config) {
      if (!this.modalInProgress) {
        this.modalInProgress = true;
        var view;

        if (config.model.get('isMultiItem') && config.model.get('numberOfUnits') > 1) {
          view = new PageApp.Views.MultiOfferView({
            model: config.model
          });
        } else {
          view = new PageApp.Views.MakeOfferView({
            model: config.model
          });
        }

        myApp.myModalRegion.show(new PageApp.Views.ModalLayout({
          view: view
        }));
      }
    }, this);
    myApp.vent.on('modal:closed', function (config) {
      this.modalInProgress = false;
    }, this);
  }

  return {
    initialize: function initialize(models) {
      initEvents();
    }
  };
};
"use strict";

PageApp.Views.TenderView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.tender,
  events: {
    'click .x-tender': 'handleTender',
    'click .x-tender-pct': 'handleTenderPct',
    'keyup .x-add-commas': 'handleTenderKeyup',
    'keyup .x-decimal-add-commas': 'handleTenderKeyup'
  },
  modelEvents: {
    'change': 'render'
  },
  serializeData: function serializeData() {
    var label1 = this.model.get('label1');

    if (!label1) {
      label1 = myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_ID_LIKE_TO_OFFER');
    }

    var error1Class;

    if (this.model.get('error1')) {
      label1 = myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_PLEASE_ENTER_AMOUNT');
      error1Class = 'has-error';
    }

    var bp = this.model.attributes.buyersPremium;
    var hasBp = bp && bp > 0;
    var isTenderPct = this.model.attributes.isTenderPct;
    var helpTitle;
    var helpContent;
    var action;
    var maxAmountLength;

    if (isTenderPct) {
      helpTitle = myApp.reqres.request('i16:getString', 'PageCodes_PAGE_TENDER_PCT_HELP_TITLE');
      helpContent = myApp.reqres.request('i16:getString', 'PageCodes_PAGE_TENDER_PCT_HELP');
      action = 'x-tender-pct';
      maxAmountLength = 5; // i.e. upto 99.99
    } else {
      helpTitle = myApp.reqres.request('i16:getString', 'PageCodes_PAGE_TENDER_HELP_TITLE');
      helpContent = myApp.reqres.request('i16:getString', 'PageCodes_PAGE_TENDER_HELP');
      action = 'x-tender';
      maxAmountLength = 16;
    }

    var content = {
      label1: label1,
      error1Class: error1Class,
      helpTitle: helpTitle,
      helpContent: helpContent,
      hasBp: hasBp,
      maxAmountLength: maxAmountLength,
      JSTextCodes_PROCEED: myApp.reqres.request('i16:getString', 'JSTextCodes_PROCEED'),
      JSTextCodes_CLOSE: myApp.reqres.request('i16:getString', 'JSTextCodes_CLOSE'),
      JspPublicCodes_PURCHASE_DIALOG_TENDER_TITLE: myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_TENDER_TITLE'),
      JspPublicCodes_PURCHASE_DIALOG_TITLE: myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_TITLE'),
      JspPublicCodes_PURCHASE_DIALOG_BUYERS_PREMIUM_AT: myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_BUYERS_PREMIUM_AT'),
      JspPublicCodes_PURCHASE_DIALOG_PRICE: myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_PRICE'),
      JspPublicCodes_JSP_BIDDING_NUMBER_OF_UNITS_FOR_TENDER: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_NUMBER_OF_UNITS_FOR_TENDER'),
      JspPublicCodes_JSP_BIDDING_UNIT_OF_MEASUREMENT_PER: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_UNIT_OF_MEASUREMENT_PER'),
      action: action
    };
    content = _.extend(content, this.model.attributes);
    return content;
  },
  handleTenderKeyup: function handleTenderKeyup(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      var isTenderPct = this.model.attributes.isTenderPct;

      if (isTenderPct) {
        this.handleTenderPct();
      } else {
        this.handleTender();
      }

      return false;
    }
  },
  onRender: function onRender() {
    if (this.model.get('offerAmount') && this.model.get('offerAmount') > 0) {
      var $input = this.$el.find('#offerAmount');

      if ($input) {
        $input.val(myApp.utils.types.toFormattedNumber($input.val(), myApp.ent.user.attributes.thousandsSeparator));
      }
    }
  },
  isInValid: function isInValid(isPercentage) {
    var offerAmount = this.$el.find('#offerAmount').val();
    var error1;

    try {
      offerAmount = myApp.utils.types.toDecimalNumber(offerAmount);

      if (!offerAmount || offerAmount.length === 0 || offerAmount < 0) {
        error1 = true;
      } else if (isPercentage) {
        if (offerAmount > 100) {
          error1 = true;
        }
      }
    } catch (err) {
      error1 = true;
    }

    var silent = true;

    if (error1) {
      silent = false;
    }

    this.model.set({
      'offerAmount': offerAmount,
      'error1': error1
    }, {
      silent: silent
    });
    return error1;
  },
  handleTender: function handleTender(e, isTenderPct) {
    var tenderTypeForRequest = isTenderPct ? 'tenderPct' : 'tender';
    if (e) e.preventDefault();

    if (this.isInValid(isTenderPct)) {
      myApp.vent.trigger('ui:notification', {
        text: 'Please correct the errors and try again..',
        level: 'warning'
      });
      return;
    } // Note: BuyNowRequestModel appears to be used as @class for all offer types.


    var bean = {
      '@class': 'com.bidlogix.scaffold.models.bidding.BuyNowRequestModel',
      itemId: this.model.attributes.id,
      registrantId: this.model.attributes.registrantId,
      amount: this.model.get('offerAmount'),
      userId: myApp.ent.user.get('id')
    };
    myApp.utils.ajax.postBean(bean, myApp.utils.ajax.getApiEndpoint('timed/' + tenderTypeForRequest), _.bind(function (response) {
      if (response.models.BiddingItemModel) {
        var itemModel = myApp.request('reqres:timed:set:timedBiddingInfo', {
          models: response.models,
          rabbitCode: response.actionCode
        });
        myApp.ent.purchaseEntity.setModelForTender(itemModel.attributes, true);

        if (response.models.ErrorModel) {
          myApp.vent.trigger('ui:notification', {
            text: response.models.ErrorModel.message,
            level: 'warning'
          });
        }
      } else if (response.models.ErrorModel) {
        myApp.ent.user.checkLogout(response);
        myApp.vent.trigger('ui:notification', {
          text: response.models.ErrorModel.message,
          level: 'warning'
        });
        this.model.set({
          'hasResult': true,
          'resultClass': 'text-danger',
          'resultMessage': response.models.ErrorModel.message
        });
      }

      myApp.vent.trigger('layouthacks:heights');
    }, this));
    return false;
  },
  handleTenderPct: function handleTenderPct(e) {
    return this.handleTender(e, true);
  }
});
"use strict";

PageApp.Controllers.TransferRouter = function (config) {
  function initEvents() {
    myApp.vent.on('transfer:display', function (config) {
      if (!this.modalInProgress) {
        this.modalInProgress = true;
        var view = new PageApp.Views.TransferView({
          model: config.model
        }); // model is a PurchaseEntity

        myApp.myModalRegion.show(new PageApp.Views.ModalLayout({
          view: view
        }));
      }
    }, this);
    myApp.vent.on('modal:closed', function (config) {
      this.modalInProgress = false;
    }, this);
  }

  return {
    initialize: function initialize(models) {
      initEvents();
    }
  };
};
"use strict";

PageApp.Views.ContentView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.content,
  initialize: function initialize() {}
});
"use strict";

PageApp.Views.NullView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.nullView,
  initialize: function initialize() {}
});
"use strict";

PageApp.Views.PaginationWaitingView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.paginationWaiting,
  initialize: function initialize() {}
});
"use strict";

PageApp.Views.WaitingView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.waiting,
  initialize: function initialize() {},
  serializeData: function serializeData() {
    if (!this.model) {
      this.model = new PageApp.Ent.BasicEntity({
        align: 'text-center'
      });
    }

    return this.model.attributes;
  }
});
"use strict";

PageApp.Views.BuyNowView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.buyNow,
  templateConfirm: hbs.templates.buyNowConfirm,
  templateWon: hbs.templates.buyNowWon,
  templateLost: hbs.templates.buyNowLost,
  getTemplate: function getTemplate() {
    var screen = this.model.get('screen');

    if (!screen || screen === 1) {
      return this.template;
    } else if (this.model.get('screen') === 2) {
      return this.templateConfirm;
    } else {
      if (this.model.get('won')) {
        return this.templateWon;
      } else {
        return this.templateLost;
      }
    }
  },
  modelEvents: {
    'change': 'render'
  },
  events: {
    'click .x-continue': 'handleContinue',
    'click .x-submit': 'handleBuyNow'
  },
  serializeData: function serializeData() {
    var screen = this.model.get('screen');
    var content;

    if (!screen || screen === 1) {
      content = {
        JSTextCodes_PROCEED: myApp.reqres.request('i16:getString', 'JSTextCodes_PROCEED'),
        JSTextCodes_CLOSE: myApp.reqres.request('i16:getString', 'JSTextCodes_CLOSE'),
        PageCodes_PAGE_BUY_NOW_HELP_TITLE: myApp.reqres.request('i16:getString', 'PageCodes_PAGE_BUY_NOW_HELP_TITLE'),
        PageCodes_PAGE_BUY_NOW_HELP: myApp.reqres.request('i16:getString', 'PageCodes_PAGE_BUY_NOW_HELP'),
        JspPublicCodes_PURCHASE_DIALOG_BUYERS_PREMIUM_AT: myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_BUYERS_PREMIUM_AT'),
        JspPublicCodes_PURCHASE_DIALOG_PRICE: myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_PRICE')
      };
    } else if (screen === 2) {
      content = {
        currencySymbol: this.model.attributes.currencySymbol,
        buyersPremium: this.model.attributes.buyersPremium,
        title: this.model.attributes.title,
        numberOrRef: this.model.attributes.numberOrRef,
        minimumOfferOrBuyNowPrice: this.model.attributes.minimumOfferOrBuyNowPrice,
        JspPublicCodes_PURCHASE_DIALOG_PLEASE_PROVIDE_FINAL_CONFIRMATION: myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_PLEASE_PROVIDE_FINAL_CONFIRMATION'),
        JspPublicCodes_PURCHASE_DIALOG_FINAL_CONFIRMATION_OF_BUY_NOW: myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_FINAL_CONFIRMATION_OF_BUY_NOW'),
        JspPublicCodes_PURCHASE_DIALOG_FINAL_CONFIRMATION: myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_FINAL_CONFIRMATION'),
        JSTextCodes_SUBMIT: myApp.reqres.request('i16:getString', 'JSTextCodes_SUBMIT'),
        JSTextCodes_CANCEL: myApp.reqres.request('i16:getString', 'JSTextCodes_CANCEL')
      };
    } else {
      if (this.model.get('won')) {
        content = {
          JspPublicCodes_PURCHASE_DIALOG_PURCHASE_SUCCESSFUL: myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_PURCHASE_SUCCESSFUL'),
          JspPublicCodes_PURCHASE_DIALOG_CONGRATULATIONS: myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_CONGRATULATIONS'),
          JSTextCodes_CLOSE: myApp.reqres.request('i16:getString', 'JSTextCodes_CLOSE')
        };
      } else {
        content = {
          JspPublicCodes_PURCHASE_DIALOG_BUY_NOW: myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_BUY_NOW'),
          JSTextCodes_CLOSE: myApp.reqres.request('i16:getString', 'JSTextCodes_CLOSE')
        };
      }
    }

    content = _.extend(content, this.model.attributes);
    return content;
  },
  onRender: function onRender() {},
  handleContinue: function handleContinue(e) {
    e.preventDefault();
    this.model.set('screen', 2);
  },
  handleBuyNow: function handleBuyNow(e) {
    e.preventDefault();
    var bean = {
      '@class': 'com.bidlogix.scaffold.models.bidding.BuyNowRequestModel',
      itemId: this.model.attributes.id,
      registrantId: this.model.attributes.registrantId,
      amount: this.model.attributes.minimumOfferOrBuyNowPrice,
      userId: myApp.ent.user.get('id')
    };
    myApp.utils.ajax.postBean(bean, myApp.utils.ajax.getApiEndpoint('timed/buyNow'), _.bind(function (response) {
      if (response.models.ErrorModel) {
        myApp.ent.user.checkLogout(response);
        myApp.vent.trigger('ui:notification', {
          text: response.models.ErrorModel.message,
          level: 'warning'
        });
      } else {
        var itemModel = myApp.request('reqres:timed:set:timedBiddingInfo', {
          models: response.models,
          rabbitCode: response.actionCode
        });
        myApp.ent.purchaseEntity.setModelForBuyNow(itemModel.attributes, 3);
      }

      myApp.vent.trigger('layouthacks:heights');
    }, this));
    return false;
  }
});
"use strict";

PageApp.Views.ContactSellerView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.contactSeller,
  templateSuccess: hbs.templates.contactSellerSuccess,
  events: {
    'click .x-submit': 'handleSubmit',
    'click .x-cancel': 'handleCancel',
    'keyup #contactSellerMessage': 'handleKeyup'
  },
  serializeData: function serializeData() {
    var content = {
      title: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CONTACT_SELLER_OF_ITEM'),
      JspPublicCodes_JSP_CONTACT_SELLER_YOUR_MESSAGE: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CONTACT_SELLER_YOUR_MESSAGE'),
      JSTextCodes_SUBMIT: myApp.reqres.request('i16:getString', 'JSTextCodes_SUBMIT'),
      JSTextCodes_CLOSE: myApp.reqres.request('i16:getString', 'JSTextCodes_CLOSE'),
      JspPublicCodes_JSP_CONTACT_SELLER_ABOUT: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CONTACT_SELLER_ABOUT')
    };
    content = _.extend(content, this.model.attributes);
    return content;
  },
  onRender: function onRender() {
    if (this.model.get('message') && this.model.get('message').length > 0) {
      this.$el.find('.x-submit').removeClass('disabled');
    } else {
      this.$el.find('.x-submit').addClass('disabled');
    }
  },
  handleCancel: function handleCancel(e) {
    var message = this.$el.find('#contactSellerMessage').val();
    this.model.set('message', message);
  },
  handleKeyup: function handleKeyup(e) {
    e.preventDefault();

    if (e.keyCode !== 13) {
      var input = $(e.currentTarget).val();

      if (input && input.length > 0) {
        this.$el.find('.x-submit').removeClass('disabled');
      } else {
        this.$el.find('.x-submit').addClass('disabled');
      }
    }

    return false;
  },
  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    var message = this.$el.find('#contactSellerMessage').val();
    this.model.set('message', message);

    if (!message || message.length === 0) {
      myApp.vent.trigger('ui:notification', {
        text: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CONTACT_SELLER_PLEASE_ENTER_MESSAGE'),
        level: 'warning'
      });
      return;
    }

    var bean = {
      '@class': 'com.bidlogix.scaffold.models.bidding.ContactSellerModel',
      message: this.model.get('message'),
      subject: this.model.get('title'),
      lotId: this.model.get('id'),
      userId: myApp.ent.user.get('id')
    };
    myApp.utils.ajax.postBean(bean, myApp.utils.ajax.getApiEndpoint('timed/contactSeller'), _.bind(function (timedResponse) {
      if (timedResponse.models.ErrorModel) {
        myApp.ent.user.checkLogout(timedResponse);
        myApp.vent.trigger('ui:notification', {
          text: timedResponse.models.ErrorModel.message,
          level: 'warning'
        });
      } else {
        var content = {
          message: this.model.get('message'),
          title: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CONTACT_SELLER_MESSAGE_TO_SELLER'),
          JspPublicCodes_JSP_CONTACT_SELLER_MESSAGE_SENT: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CONTACT_SELLER_MESSAGE_SENT'),
          JSTextCodes_CLOSE: myApp.reqres.request('i16:getString', 'JSTextCodes_CLOSE')
        };
        this.$el.find('.modal-content').html(this.templateSuccess(content));
      }
    }, this));
    return false;
  }
});
"use strict";

PageApp.Ent.LayoutControl = Backbone.Model.extend({
  defaults: {
    showOpenOnly: false
  },
  initialize: function initialize() {
    this.set('findBy', myApp.ent.webApp.get('defaultGotoLotByTitle') === true ? 'lotTitle' : 'lotNumber');
  },
  setItemTypeaheadSource: function setItemTypeaheadSource(items) {
    this.set('items', items);
  },
  getItemTypeaheadSource: function getItemTypeaheadSource() {
    return this.get('items');
  },
  getAuctionId: function getAuctionId() {
    return this.get('parameters') ? this.get('parameters').auctionId : '';
  },
  extractIdForTypeahead: function extractIdForTypeahead(type, item) {
    if (type === 'items') {
      var p1 = item.code.split('::')[0];
      return myApp.utils.types.toNumber(p1.split('-')[2]);
    } else {
      throw new Error('Unknown type ' + type + ' for type ahead search.');
    }
  },
  initTypeahead: function initTypeahead(type, $input) {
    var $tyelf = this;
    var $gobtn = $input.parent().parent().find('.x-ta-go');

    try {
      $input.typeahead({
        autoSelect: true,
        items: 'all',
        minLength: 1,
        source: function source(query, process) {
          if ($tyelf.getItemTypeaheadSource()) {
            process($tyelf.getItemTypeaheadSource());
            return;
          }

          var url = myApp.utils.ajax.getApiEndpoint('typeahead/item') + '/' + $tyelf.getAuctionId();
          myApp.utils.ajax.get(null, url, function (result) {
            if (!result || result.failed) {
              return [];
            } else {
              $tyelf.setItemTypeaheadSource(result);
              process($tyelf.getItemTypeaheadSource());
            }
          });
        },
        matcher: function matcher(item) {
          if ($tyelf.get('findBy') === 'lotNumber') {
            return item.code.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
          } else {
            return item.name.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
          }
        },
        afterSelect: function afterSelect(item) {
          if (item) {
            $tyelf.set('currentItem', item);
            $gobtn.prop('disabled', false);
          }
        },
        displayText: function displayText(item) {
          var unescapedText = document.createElement('textarea');
          unescapedText.innerHTML = item.name;
          return item.code + ' : ' + unescapedText.value;
        }
      });
    } catch (err) {
      console.log('no type ahead available..');
    }

    $input.keypress(function () {
      $tyelf.set('currentItem', null);
      $gobtn.prop('disabled', true);
    });
  },
  changeFindBy: function changeFindBy(newType) {
    var reportMeta = this.get('reportMeta');
    reportMeta.reportType = newType;
    reportMeta.mainId = undefined;

    if (reportMeta.reportType === 1) {
      reportMeta.reportName = 'Auction Report';
    } else if (reportMeta.reportType === 2) {
      reportMeta.reportName = 'User Report';
    } else {
      reportMeta.reportName = 'Session Report';
    }
  }
});
"use strict";

PageApp.Views.ControlLayout = Marionette.LayoutView.extend({
  getTemplate: function getTemplate() {
    return hbs.templates.controlLayout;
  },
  initialize: function initialize(options) {
    this.isShowOpenDisabled = options.isShowOpenDisabled;
  },
  events: {
    'click .x-layout': 'handleChangeLayout',
    'click .x-filter': 'handleChangeFilter',
    'click .x-saleinfo-modal': 'handleSaleInfoShow',
    'click .x-landing-sale-info-toggle': 'handleSaleInfoInPageShow',
    'click .x-landing-filter-toggle': 'handleFiltersShow',
    'click .x-ta-find-by': 'handleChangeFindBy',
    'click .x-ta-go': 'handleGotoItem',
    'click .x-ta-show-open': 'handleShowOpenOnly',
    'submit .x-ta-filters': 'handleSubmit'
  },
  serializeData: function serializeData() {
    var landingFilterToggles = false;
    var saleinfoBtnClazz, filterBtnClazz;
    var showFilters = myApp.ent.user.getPreference('showFilters');
    var showSaleInfoInPage = myApp.ent.user.getPreference('showSaleInfoInPage');
    var filtersChevronDirection = 'down';
    var saleInfoChevronDirection = 'down';
    saleinfoBtnClazz = '';
    filterBtnClazz = 'active';

    if (!showFilters) {
      filterBtnClazz = '';
    }

    var page = myApp.ent.config.get('page');
    var isAuctionLand = page === 'auctionland';

    if (page === 'auctionland' || page === 'marketland' || page === 'searchland') {
      landingFilterToggles = true;
    }

    var saleInfoFilterToggles = false;

    if (page === 'auctionland') {
      saleInfoFilterToggles = true;
    }

    var gotoItemFeature = false;
    var mybidsFilterToggles = false;
    var mybidsFilterSet = myApp.ent.status.getMyBidsFilterSet();

    if (page === 'myBidsLand' && mybidsFilterSet) {
      mybidsFilterToggles = true;
    } else if (page === 'auctionland') {
      gotoItemFeature = true && !myApp.ent.webApp.get('hideFindBySearch');
    }

    var layout = myApp.ent.user.getPreference('layoutForBidding');
    var listBtnClazz;
    var gridBtnClazz = '';

    if (layout === 'grid') {
      gridBtnClazz = 'active';
    } else {
      listBtnClazz = 'active';
      landingFilterToggles = false;
    } // If GE force sale info/filters to display and hide the auction information button.


    var auctionPath = myApp.ent.config.get('contextPath');

    if (auctionPath === '/auction-028' || auctionPath === '/auction-029' || auctionPath === '/auction-030') {
      landingFilterToggles = false;
    }

    var showOpenOnlyChecked = this.model.get('parameters').parameters.showOpenOnly ? ' checked ' : '';

    if (this.model.get('parameters').parameters.showOpenOnly) {
      landingFilterToggles = false;
    }

    var saleInfoActive = '';
    var filtersActive = '';

    if (showFilters && myApp.ent.user.getPreference('saleInfoActive') === 'active') {
      saleInfoActive = 'active';
      saleInfoChevronDirection = 'up';
    }

    if (showFilters && myApp.ent.user.getPreference('filtersActive') === 'active') {
      filtersActive = 'active';
      filtersChevronDirection = 'up';
    }

    var content = {
      gotoItemFeature: gotoItemFeature,
      landingFilterLabel: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_TIMED_FILTERS'),
      landingFilterToggles: landingFilterToggles,
      saleInfoLabel: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_TIMED_SALEINFO'),
      saleInfoFilterToggles: saleInfoFilterToggles,
      showLayoutToggle: true,
      mybidsFilterToggles: mybidsFilterToggles,
      mybidsFilterSet: mybidsFilterSet,
      listBtnClazz: listBtnClazz,
      gridBtnClazz: gridBtnClazz,
      listView: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_UPCOMING_AUCTIONS_LIST_VIEW'),
      gridView: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_UPCOMING_AUCTIONS_GALLERY_VIEW'),
      auctionInfoLabel: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_INFORMATION'),
      saleinfoBtnClazz: saleinfoBtnClazz,
      filterBtnClazz: filterBtnClazz,
      showOpenOnlyChecked: showOpenOnlyChecked,
      showSaleInfoInPage: showSaleInfoInPage,
      saleInfoChevronDirection: saleInfoChevronDirection,
      filtersChevronDirection: filtersChevronDirection,
      isAuctionLand: isAuctionLand,
      saleInfoActive: saleInfoActive,
      filtersActive: filtersActive,
      showFilters: showFilters,
      lotLayout: layout,
      isShowOpenDisabled: this.isShowOpenDisabled
    };

    if (this.model.get('findBy') !== 'lotNumber') {
      content.findByLabel = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_TIMED_GOTO_BY_TITLE');
    } else {
      content.findByLabel = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_TIMED_GOTO_BY_LOTNUMBER');
    }

    content.JspPublicCodes_JSP_TIMED_GOTO_BY_LOTNUMBER = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_TIMED_GOTO_BY_LOTNUMBER');
    content.JspPublicCodes_JSP_TIMED_GOTO_BY_TITLE = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_TIMED_GOTO_BY_TITLE');
    content.JspPublicCodes_JSP_TIMED_GOTO_LABEL = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_TIMED_GOTO_LABEL');
    content.JspPublicCodes_JSP_TIMED_GOTO_ITEM_PH = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_TIMED_GOTO_ITEM_PH');
    content.JspPublicCodes_JSP_TIMED_SHOW_OPEN_LABEL = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_TIMED_SHOW_OPEN_LABEL');
    content = _.extend(content, this.model.attributes);
    return content;
  },
  onRender: function onRender() {
    var $input = this.$el.find('.x-typeahead-item');
    this.model.initTypeahead('items', $input);
  },
  handleChangeFindBy: function handleChangeFindBy(e) {
    e.preventDefault();
    this.model.set('findBy', $(e.currentTarget).data('findby'));
    this.model.set('findByPh', $(e.currentTarget).data('findbyph'));
    this.render();
    return false;
  },
  handleGotoItem: function handleGotoItem(e) {
    e.preventDefault();
    var item = this.model.get('currentItem');

    if (item !== null) {
      window.location.href = myApp.ent.config.get('contextPath') + '/itemDetails/' + this.model.getAuctionId() + '/' + item.id;
    }

    return false;
  },
  handleShowOpenOnly: function handleShowOpenOnly(e) {
    var myShowOpenOnly = this.model.get('parameters').parameters.showOpenOnly;
    myShowOpenOnly = !myShowOpenOnly;
    this.model.get('parameters').parameters.showOpenOnly = myShowOpenOnly;
    this.model.get('parameters').parameters.page = 0;
    var page = myApp.ent.config.get('page');

    if (page === 'myBidsLand') {
      myApp.vent.trigger('ui:notification', {
        text: 'We\'ve not yet figured out how to do this',
        level: 'warning'
      });
    } else {
      myApp.vent.trigger('layoutcontrol:toggle:open', {
        showOpenOnly: myShowOpenOnly
      });
    }

    return false;
  },
  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    return false;
  },
  handleSaleInfoInPageShow: function handleSaleInfoInPageShow(e) {
    e.preventDefault();
    var showFilters = myApp.ent.user.getPreference('showFilters', {
      value: false
    });
    var activeButton = $(e.currentTarget);

    if (showFilters && myApp.ent.user.getPreference('saleInfoActive') === 'active') {
      showFilters = false;
      activeButton.removeClass('active');
    } else {
      showFilters = true;
      activeButton.addClass('active');
      myApp.ent.user.setPreference('saleInfoActive', 'active');
      myApp.ent.user.setPreference('filtersActive', '');
    }

    myApp.ent.user.setPreference('showFilters', showFilters);
    myApp.vent.trigger('landing:display', {
      'showFilters': showFilters
    });
    return false;
  },
  handleFiltersShow: function handleFiltersShow(e) {
    e.preventDefault();
    var showFilters = myApp.ent.user.getPreference('showFilters', {
      value: false
    });
    var activeButton = $(e.currentTarget);

    if (showFilters && myApp.ent.user.getPreference('filtersActive') === 'active') {
      showFilters = false;
      activeButton.removeClass('active');
    } else {
      showFilters = true;
      activeButton.addClass('active');
      myApp.ent.user.setPreference('saleInfoActive', '');
      myApp.ent.user.setPreference('filtersActive', 'active');
    }

    myApp.ent.user.setPreference('showFilters', showFilters);
    myApp.vent.trigger('landing:display', {
      'showFilters': showFilters
    });
    return false;
  },
  handleSaleInfoShow: function handleSaleInfoShow(e) {
    e.preventDefault();
    myApp.vent.trigger('saleinfo:display', {
      saleInfoModel: myApp.ent.saleInfo
    });
    return false;
  },
  handleChangeLayout: function handleChangeLayout(e) {
    e.preventDefault();
    var layout = $(e.currentTarget).data('layout');
    myApp.ent.user.setPreference('layoutForBidding', layout);
    myApp.vent.trigger('layoutcontrol:display');
    return false;
  },
  handleChangeFilter: function handleChangeFilter(e) {
    e.preventDefault();
    var filterId = $(e.currentTarget).data('filter');

    if (filterId === myApp.ent.user.getPreference('filterId')) {
      myApp.ent.user.setPreference('filterId', 0);
    } else {
      myApp.ent.user.setPreference('filterId', filterId);
    }

    myApp.vent.trigger('layoutcontrol:display');
    return false;
  }
});
"use strict";

PageApp.Views.MakeOfferView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.makeOffer,
  events: {
    'click .x-make-offer': 'handleMakeOffer',
    'keyup .x-add-commas': 'handleMakeOfferKeyup'
  },
  modelEvents: {
    'change': 'render'
  },
  serializeData: function serializeData() {
    var label1 = this.model.get('label1');

    if (!label1) {
      label1 = myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_ID_LIKE_TO_OFFER');
    }

    var error1Class;

    if (this.model.get('error1')) {
      label1 = myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_PLEASE_ENTER_AMOUNT');
      error1Class = 'has-error';
    }

    var showNumberOfUnits = !this.model.get('isMultiItem') && this.model.get('numberOfUnits') > 1;
    var content = {
      label1: label1,
      error1Class: error1Class,
      helpTitle: myApp.reqres.request('i16:getString', 'PageCodes_PAGE_MAKE_OFFER_HELP_TITLE'),
      helpContent: myApp.reqres.request('i16:getString', 'PageCodes_PAGE_MAKE_OFFER_HELP'),
      showNumberOfUnits: showNumberOfUnits,
      JSTextCodes_PROCEED: myApp.reqres.request('i16:getString', 'JSTextCodes_PROCEED'),
      JSTextCodes_CLOSE: myApp.reqres.request('i16:getString', 'JSTextCodes_CLOSE'),
      JspPublicCodes_PURCHASE_DIALOG_MAKE_OFFER: myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_MAKE_OFFER'),
      JspPublicCodes_PURCHASE_DIALOG_TITLE: myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_TITLE'),
      JspPublicCodes_PURCHASE_DIALOG_BUYERS_PREMIUM_AT: myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_BUYERS_PREMIUM_AT'),
      JspPublicCodes_PURCHASE_DIALOG_PRICE: myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_PRICE'),
      JspPublicCodes_JSP_BIDDING_NUMBER_OF_UNITS: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_NUMBER_OF_UNITS')
    };
    content = _.extend(content, this.model.attributes);
    return content;
  },
  handleMakeOfferKeyup: function handleMakeOfferKeyup(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.handleMakeOffer();
      return false;
    }
  },
  onRender: function onRender() {
    if (this.model.get('offerAmount') && this.model.get('offerAmount') > 0) {
      var $input = this.$el.find('#offerAmount');
      $input.val(myApp.utils.types.toFormattedNumber($input.val(), myApp.ent.user.attributes.thousandsSeparator));
    }
  },
  isInValid: function isInValid() {
    var offerAmount = this.$el.find('#offerAmount').val();
    var error1;

    try {
      if (!myApp.utils.types.isWholeNumber(offerAmount, myApp.ent.user.attributes.thousandsSeparator)) {
        error1 = true;
      } else {
        offerAmount = myApp.utils.types.toNumber(offerAmount);

        if (!offerAmount || offerAmount.length === 0) {
          error1 = true;
        }
      }
    } catch (err) {
      error1 = true;
    }

    var silent = true;

    if (error1) {
      silent = false;
    }

    this.model.set({
      'offerAmount': offerAmount,
      'error1': error1
    }, {
      silent: silent
    });
    return error1;
  },
  handleMakeOffer: function handleMakeOffer(e) {
    if (e) e.preventDefault();

    if (this.isInValid()) {
      myApp.vent.trigger('ui:notification', {
        text: 'Please correct the errors and try again..',
        level: 'warning'
      });
      return;
    }

    var bean = {
      '@class': 'com.bidlogix.scaffold.models.bidding.BuyNowRequestModel',
      itemId: this.model.attributes.id,
      registrantId: this.model.attributes.registrantId,
      amount: this.model.get('offerAmount'),
      userId: myApp.ent.user.get('id')
    };
    myApp.utils.ajax.postBean(bean, myApp.utils.ajax.getApiEndpoint('timed/makeOffer'), _.bind(function (response) {
      if (response.models.BiddingItemModel) {
        var itemModel = myApp.request('reqres:timed:set:timedBiddingInfo', {
          models: response.models,
          rabbitCode: response.actionCode
        });
        myApp.ent.purchaseEntity.setModelForMakeOffer(itemModel.attributes, false);

        if (response.models.ErrorModel) {
          myApp.vent.trigger('ui:notification', {
            text: response.models.ErrorModel.message,
            level: 'warning'
          });
        }
      } else if (response.models.ErrorModel) {
        myApp.ent.user.checkLogout(response);
        myApp.vent.trigger('ui:notification', {
          text: response.models.ErrorModel.message,
          level: 'warning'
        });
        this.model.set({
          'hasResult': true,
          'resultClass': 'text-danger',
          'resultMessage': response.models.ErrorModel.message
        });
      }

      myApp.vent.trigger('layouthacks:heights');
    }, this));
    return false;
  }
});
"use strict";

PageApp.Views.MultiOfferView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.multiOffer,
  events: {
    'click .x-multi-offer': 'handleMultiOffer',
    'click .x-collection': 'handleChangeCollection',
    'change .x-shipping-address': 'handleChangeShippingAddress',
    'keyup .x-add-commas': 'handleMultiOfferKeyup'
  },
  modelEvents: {
    'change': 'render'
  },
  serializeData: function serializeData() {
    var label1 = myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_ID_LIKE_TO_OFFER');
    var label2 = 'for';
    var error1Class, error2Class;

    if (this.model.get('error1')) {
      label1 = myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_PLEASE_ENTER_AMOUNT');
      error1Class = 'has-error';
    }

    if (this.model.get('error2_1')) {
      label2 = myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_PLEASE_ENTER_AMOUNT');
      error2Class = 'has-error';
    } else if (this.model.get('error2_2')) {
      label2 = 'Too many items!';
      error2Class = 'has-error';
    }

    var collectionCollect = 'checked';
    var collectionDeliver = '';
    var showShipping = false;

    if (this.model.get('collectionType') === 'deliver') {
      collectionCollect = '';
      collectionDeliver = 'checked';
      showShipping = true;
    }

    var useAddress1 = 'selected';
    var useAddress2 = '';

    if (this.model.get('whichAddress') === 1) {
      useAddress1 = '';
      useAddress2 = 'selected';
    }

    var content = {
      label1: label1,
      label2: label2,
      error1Class: error1Class,
      error2Class: error2Class,
      numberOfUnitsRemaining: this.model.get('numberOfUnitsRemaining'),
      resultMessage: this.model.get('resultMessage'),
      helpTitle: myApp.reqres.request('i16:getString', 'PageCodes_PAGE_BULK_BUY_HELP_TITLE'),
      helpContent: myApp.reqres.request('i16:getString', 'PageCodes_PAGE_BULK_BUY_HELP'),
      showShipping: showShipping,
      collectionCollect: collectionCollect,
      collectionDeliver: collectionDeliver,
      useAddress1: useAddress1,
      useAddress2: useAddress2,
      JSTextCodes_PROCEED: myApp.reqres.request('i16:getString', 'JSTextCodes_PROCEED'),
      JSTextCodes_CLOSE: myApp.reqres.request('i16:getString', 'JSTextCodes_CLOSE'),
      JspPublicCodes_PURCHASE_DIALOG_MAKE_OFFER: myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_MAKE_OFFER'),
      JspPublicCodes_PURCHASE_DIALOG_TITLE: myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_TITLE'),
      JspPublicCodes_PURCHASE_DIALOG_BUYERS_PREMIUM_AT: myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_BUYERS_PREMIUM_AT'),
      JspPublicCodes_PURCHASE_DIALOG_PRICE: myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_PRICE')
    };
    content = _.extend(content, this.model.attributes);
    return content;
  },
  onRender: function onRender() {
    if (this.model.get('collectionType') === 'deliver') {
      myApp.vent.trigger('address:display', {
        region: this.$el.find('#addressRegion'),
        model: {
          allowEdit: true,
          whichAddress: this.model.get('whichAddress')
        }
      });
    }

    myApp.vent.on('address:render', function (config) {
      if (config.editing) {
        this.$el.find('.x-multi-offer').addClass('disabled');
      } else {
        this.$el.find('.x-multi-offer').removeClass('disabled');
      }
    }, this);

    if (this.model.get('offerAmount') && this.model.get('offerAmount') > 0) {
      var $input = this.$el.find('#offerAmount');
      $input.val(myApp.utils.types.toFormattedNumber($input.val(), myApp.ent.user.attributes.thousandsSeparator));
    }
  },
  handleChangeCollection: function handleChangeCollection(e) {
    e.preventDefault();
    var collectionType = $(e.currentTarget).val();
    var showShipping = collectionType !== 'collect';
    var offerAmount = this.$el.find('#offerAmount').val();
    var numberRequired = this.$el.find('#numberRequired').val();
    this.model.set({
      'offerAmount': offerAmount,
      'numberRequired': numberRequired,
      'showShipping': showShipping,
      'collectionType': collectionType
    });
  },
  handleChangeShippingAddress: function handleChangeShippingAddress(e) {
    e.preventDefault();
    var whichAddress = myApp.utils.types.toNumber($(e.currentTarget).val());
    var offerAmount = this.$el.find('#offerAmount').val();
    var numberRequired = this.$el.find('#numberRequired').val();
    this.model.set({
      'offerAmount': offerAmount,
      'numberRequired': numberRequired,
      'whichAddress': whichAddress
    });
  },
  isInValid: function isInValid() {
    var error1;
    var error2 = {
      1: null,
      2: null
    };
    var offerAmount = this.$el.find('#offerAmount').val();
    var numberRequired = this.$el.find('#numberRequired').val();

    try {
      offerAmount = myApp.utils.types.toNumber(offerAmount);

      if (!offerAmount || offerAmount.length === 0) {
        error1 = true;
      }
    } catch (err) {
      error1 = true;
    }

    try {
      numberRequired = myApp.utils.types.toNumber(numberRequired);

      if (!numberRequired || numberRequired.length === 0) {
        error2[1] = true;
      } else if (numberRequired > this.model.get('numberOfUnitsRemaining')) {
        error2[2] = true;
      }
    } catch (err) {
      error2[1] = true;
    }

    var silent = true;

    if (error1 || error2[1] || error2[2]) {
      silent = false;
    }

    this.model.set({
      'offerAmount': offerAmount,
      'numberRequired': numberRequired,
      'error1': error1,
      'error2_1': error2[1],
      'error2_2': error2[2]
    }, {
      silent: silent
    });
    return error1 || error2[1] || error2[2];
  },
  handleMultiOfferKeyup: function handleMultiOfferKeyup(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.handleMultiOffer();
      return false;
    }
  },
  handleMultiOffer: function handleMultiOffer(e) {
    if (e) e.preventDefault();

    if (this.isInValid()) {
      myApp.vent.trigger('ui:notification', {
        text: 'Please correct the errors and try again..',
        level: 'warning'
      });
      return;
    }

    var shippingType = 2;

    if (this.model.get('collectionType') === 'deliver') {
      shippingType = this.model.get('whichAddress');
    }

    var bean = {
      '@class': 'com.bidlogix.scaffold.models.bidding.MultiBuyRequestModel',
      itemId: this.model.attributes.id,
      registrantId: this.model.attributes.registrantId,
      amount: this.model.get('offerAmount'),
      userId: myApp.ent.user.get('id'),
      numberOfUnitsWanted: this.model.get('numberRequired'),
      shippingType: shippingType
    };
    myApp.utils.ajax.postBean(bean, myApp.utils.ajax.getApiEndpoint('timed/multiBuy'), _.bind(function (response) {
      if (response.models.BiddingItemModel) {
        var itemModel = myApp.request('reqres:timed:set:timedBiddingInfo', {
          models: response.models,
          rabbitCode: response.actionCode
        });
        myApp.ent.purchaseEntity.setModelForMakeOffer(itemModel.attributes, false, response.models.ErrorModel);

        if (response.models.ErrorModel) {
          myApp.vent.trigger('ui:notification', {
            text: response.models.ErrorModel.message,
            level: 'warning'
          });
        }
      } else if (response.models.ErrorModel) {
        myApp.ent.user.checkLogout(response);
        myApp.vent.trigger('ui:notification', {
          text: response.models.ErrorModel.message,
          level: 'warning'
        });
        this.model.set({
          'hasResult': true,
          'resultClass': 'text-danger',
          'resultMessage': response.models.ErrorModel.message
        });
      }

      myApp.vent.trigger('layouthacks:heights');
    }, this));
    return false;
  }
});
"use strict";

PageApp.Controllers.TenderRouter = function (config) {
  function initEvents() {
    myApp.vent.on('tender:display', function (config) {
      if (!this.modalInProgress) {
        this.modalInProgress = true;
        var view = new PageApp.Views.TenderView({
          model: config.model
        });
        myApp.myModalRegion.show(new PageApp.Views.ModalLayout({
          view: view
        }));
      }
    }, this);
    myApp.vent.on('tenderPct:display', function (config) {
      if (!this.modalInProgress) {
        this.modalInProgress = true;
        var view = new PageApp.Views.TenderView({
          model: config.model
        });
        myApp.myModalRegion.show(new PageApp.Views.ModalLayout({
          view: view
        }));
      }
    }, this);
    myApp.vent.on('modal:closed', function (config) {
      this.modalInProgress = false;
    }, this);
  }

  return {
    initialize: function initialize(models) {
      initEvents();
    }
  };
};
"use strict";

PageApp.Views.TransferView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.transfer,
  templateConfirm: hbs.templates.transferConfirm,
  templateWon: hbs.templates.transferWon,
  templateLost: hbs.templates.transferLost,
  getTemplate: function getTemplate() {
    var screen = this.model.get('screen');

    if (!screen || screen === 1) {
      return this.template;
    } else if (this.model.get('screen') === 2) {
      return this.templateConfirm;
    } else {
      if (this.model.get('won')) {
        return this.templateWon;
      } else {
        return this.templateLost;
      }
    }
  },
  modelEvents: {
    'change': 'render'
  },
  events: {
    'click .x-continue': 'handleContinue',
    'click .x-submit': 'handletransfer'
  },
  serializeData: function serializeData() {
    var screen = this.model.get('screen');
    var content;

    if (!screen || screen === 1) {
      content = {
        JSTextCodes_PROCEED: myApp.reqres.request('i16:getString', 'JSTextCodes_PROCEED'),
        JspPublicCodes_PURCHASE_DIALOG_TRANSFER_TITLE: myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_TRANSFER_TITLE'),
        JSTextCodes_CLOSE: myApp.reqres.request('i16:getString', 'JSTextCodes_CLOSE'),
        PageCodes_PAGE_TRANSFER_HELP_TITLE: myApp.reqres.request('i16:getString', 'PageCodes_PAGE_TRANSFER_HELP_TITLE'),
        PageCodes_PAGE_TRANSFER_HELP: myApp.reqres.request('i16:getString', 'PageCodes_PAGE_TRANSFER_HELP')
      };
    } else if (screen === 2) {
      content = {
        title: this.model.attributes.title,
        numberOrRef: this.model.attributes.numberOrRef,
        JspPublicCodes_PURCHASE_DIALOG_PLEASE_PROVIDE_FINAL_CONFIRMATION_TRANSFER: myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_PLEASE_PROVIDE_FINAL_CONFIRMATION_TRANSFER'),
        JspPublicCodes_PURCHASE_DIALOG_FINAL_CONFIRMATION_OF_TRANSFER: myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_FINAL_CONFIRMATION_OF_TRANSFER'),
        JSTextCodes_SUBMIT: myApp.reqres.request('i16:getString', 'JSTextCodes_SUBMIT'),
        JSTextCodes_CANCEL: myApp.reqres.request('i16:getString', 'JSTextCodes_CANCEL')
      };
    } else {
      if (this.model.get('won')) {
        content = {
          JspPublicCodes_PURCHASE_DIALOG_TRANSFER_SUCCESSFUL: myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_TRANSFER_SUCCESSFUL'),
          JspPublicCodes_PURCHASE_DIALOG_TRANSFER_CONGRATULATIONS: myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_TRANSFER_CONGRATULATIONS'),
          JSTextCodes_CLOSE: myApp.reqres.request('i16:getString', 'JSTextCodes_CLOSE')
        };
      } else {
        content = {
          JspPublicCodes_PURCHASE_DIALOG_BUY_NOW: myApp.reqres.request('i16:getString', 'JspPublicCodes_PURCHASE_DIALOG_TRANSFER'),
          JSTextCodes_CLOSE: myApp.reqres.request('i16:getString', 'JSTextCodes_CLOSE')
        };
      }
    }

    content = _.extend(content, this.model.attributes);
    return content;
  },
  onRender: function onRender() {},
  handleContinue: function handleContinue(e) {
    e.preventDefault();
    this.model.set('screen', 2);
  },
  handletransfer: function handletransfer(e) {
    e.preventDefault();
    var bean = {
      '@class': 'com.bidlogix.scaffold.models.bidding.TransferRequestModel',
      itemId: this.model.attributes.id,
      registrantId: this.model.attributes.registrantId,
      userId: myApp.ent.user.get('id')
    };
    myApp.utils.ajax.postBean(bean, myApp.utils.ajax.getApiEndpoint('timed/transfer'), _.bind(function (response) {
      if (response.models.ErrorModel) {
        myApp.ent.user.checkLogout(response);
        myApp.vent.trigger('ui:notification', {
          text: response.models.ErrorModel.message,
          level: 'warning'
        });
      } else {
        var itemModel = myApp.request('reqres:timed:set:timedBiddingInfo', {
          models: response.models,
          rabbitCode: response.actionCode
        });
        myApp.ent.purchaseEntity.setModelForTransfer(itemModel.attributes, 3);
      }

      myApp.vent.trigger('layouthacks:heights');
    }, this));
    return false;
  }
});
"use strict";

PageApp.Ent.Auction = Backbone.Model.extend({
  idAttribute: 'auctionId',
  url: function url() {
    // Prevent cache-ing of ajax requests within IE by appending a unique value to each request.
    var randVal = new Date().getTime() + Math.floor(Math.random() * 1000000 + 1);
    var url = myApp.ent.config.attributes.contextPath + '/webcast2/auction/' + this.get('auctionId');
    url += '?nocache=' + randVal;
    return url;
  },
  inPreBidding: function inPreBidding() {
    return this.get('inPreBidding'); // driven by start date - equiv to state DEFINED.
  },
  inPlayEndedAny: function inPlayEndedAny() {
    return this.get('inPlayEndedAny');
  },
  inPlayPaused: function inPlayPaused() {
    return this.get('inPlayPaused');
  },
  inPlayEndedConfirmed: function inPlayEndedConfirmed() {
    return this.get('inPlayEndedConfirmed');
  },
  inPlayEndedWaitingOrChosen: function inPlayEndedWaitingOrChosen() {
    return this.get('inPlayEndedWaitingChoice') || this.get('inPlayEndedChosen');
  },
  inPlayEndedWaitingChoice: function inPlayEndedWaitingChoice() {
    return this.get('inPlayEndedWaitingChoice');
  },
  inDefinedEndedSuspended: function inDefinedEndedSuspended() {
    return this.get('definedOrStarted') || this.get('inPlayEnded') || this.get('inPlayEndedConfirmed') || this.get('suspended');
  },
  disabledButtons: function disabledButtons() {
    return this.get('inPlayEndedAny') || this.get('countingDown');
  },
  isEndedOrPaused: function isEndedOrPaused() {
    return this.inPlayEndedAny() || this.inPlayPaused() || this.get('auctionPaused');
  },
  isPaused: function isPaused() {
    return this.get('auctionPaused');
  }
});
"use strict";

PageApp.Ent.BasicEntity = Backbone.Model.extend({});
"use strict";

PageApp.Ent.Config = Backbone.Model.extend({
  initialize: function initialize(options) {
    this.set('containerClass', 'container');
    this.set('serverVsClientTimeOffset', new Date().getTime() - this.get('serverTimestamp'));
    this.set('confirmAmountThresholdMultiplier', 20);
    var clientId = options.config.clientId;

    if (clientId && clientId.indexOf('/') === -1) {
      clientId = "/".concat(clientId);
    }

    this.set('apiBase', options.config.apiBase);
    this.set('clientId', clientId);
    this.set('staticBase', options.config.staticBase);
    this.set('googleMapsApiKey', options.config.googleMapsApiKey);
  },
  defaults: {
    containerClass: 'container',
    protocol: 'https'
  },
  getNormalisedTimeMillis: function getNormalisedTimeMillis() {
    return new Date().getTime() - this.get('serverVsClientTimeOffset');
  },
  getReferer: function getReferer() {
    if (this.get('referer')) {
      return this.get('referer');
    } else {
      return '#!/home';
    }
  },
  getAdminUrl: function getAdminUrl() {
    var apiBase = this.get('apiBase');

    if (apiBase) {
      var apiBasePieces = apiBase.split('/');

      if (apiBasePieces.length > 1) {
        // remove the "/api" portion
        apiBasePieces.pop(); // replace the contextPath with auction-mgt

        apiBasePieces[apiBasePieces.length - 1] = 'auction-mgt';
        return apiBasePieces.join('/');
      }
    }

    return false;
  },
  getMapsAPIKey: function getMapsAPIKey() {
    return this.get('googleMapsApiKey');
  },
  getOAuthLoginEndpoint: function getOAuthLoginEndpoint() {
    var options = this.get('options');
    return options && options.oAuth && options.oAuth.loginUrl;
  },
  getOAuthLogoutEndpoint: function getOAuthLogoutEndpoint() {
    var options = this.get('options');
    return options && options.oAuth && options.oAuth.logoutUrl;
  },
  getOAuthTokenInformation: function getOAuthTokenInformation() {
    var options = this.get('options');
    return options && options.oAuth && options.oAuth.tokenName && {
      name: options.oAuth.tokenName,
      isTokenLocalStorage: options.oAuth.isTokenLocalStorage
    };
  }
});
PageApp.Ent.PublicStaticLabels = Backbone.Model.extend({});
"use strict";

PageApp.Ent.Errors = Backbone.Collection.extend({});
"use strict";

PageApp.Ent.Footer = Backbone.Model.extend({});
"use strict";

PageApp.Ent.Header = Backbone.Model.extend({});
"use strict";

PageApp.Ent.LayoutHacks = Backbone.Model.extend({
  scrollbarWidth: 16,
  getDimensionsHomeCal: function getDimensionsHomeCal() {
    var viewportWidth = $(window).width(); // Adjust the viewportWidth to make it a consistent value whether or not the vertical scrollbar is currently displayed.

    var hasScrollbar = $(window).height() < $(document).height();

    if (hasScrollbar) {
      viewportWidth += this.scrollbarWidth;
    }

    if (viewportWidth < 600) {
      return {
        width: 300,
        height: 190
      };
    } else if (viewportWidth < 700) {
      return {
        width: 270,
        height: 190
      };
    } else if (viewportWidth < 1000) {
      return {
        width: 320,
        height: 210
      };
    } else if (viewportWidth < 1200) {
      return {
        width: 280,
        height: 190
      };
    } else {
      return {
        width: 320,
        height: 210
      };
    }
  }
});
"use strict";

PageApp.Ent.Status = Backbone.Model.extend({
  setMyBidsFilterSetLabel: function setMyBidsFilterSetLabel(filterName) {
    var filterId = myApp.ent.user.getPreference('filterId');
    console.log('2', _)
    // var filter = _.findWhere(this.get('myBidsSearchTypes'), {
    //   name: filterName
    // });

    var filter = this.get('myBidsSearchTypes').map(function(bid) {
      bid.name === filterName
    });

    filter.label = myApp.reqres.request('i16:getString', 'MyBidsSearchTypeEnum_' + filter.name);
    filter.chevrons = 'fa-angle-double-right';
    filter.btnClazz = 'default';
    filter.clazz = '';

    if (filterId && filterId === filter.id || !filterId && filterName === 'ALL') {
      filter.clazz = 'active';
      filter.btnClazz = 'default';
      filter.chevrons = 'fa-angle-double-down';
    }

    return filter;
  },
  getMyBidsFilterSet: function getMyBidsFilterSet() {
    var searchTypeId = myApp.ent.user.getPreference('searchTypeId');

    if (!searchTypeId) {
      return;
    }

    var filterSet = [];
    var searchType = this.getMyBidsSearchType(searchTypeId);
    filterSet.push(this.setMyBidsFilterSetLabel('ALL'));

    if (searchType.name === 'LIVE_BIDDING') {
      filterSet.push(this.setMyBidsFilterSetLabel('WINNING'));
      filterSet.push(this.setMyBidsFilterSetLabel('LOSING'));
    } else if (searchType.name === 'CLOSED_BIDDING') {
      filterSet.push(this.setMyBidsFilterSetLabel('WON'));
      filterSet.push(this.setMyBidsFilterSetLabel('LOST'));
    } else if (searchType.name === 'LIVE_OFFERS') {
      filterSet.push(this.setMyBidsFilterSetLabel('PURCHASED'));
      filterSet.push(this.setMyBidsFilterSetLabel('REJECTED'));
      filterSet.push(this.setMyBidsFilterSetLabel('PENDING'));
    } else if (searchType.name === 'LIVE_WATCHING') {
      filterSet.push(this.setMyBidsFilterSetLabel('WINNING'));
      filterSet.push(this.setMyBidsFilterSetLabel('LOSING'));
      filterSet.push(this.setMyBidsFilterSetLabel('PENDING'));
    }

    return filterSet;
  },
  getMyBidsSearchType: function getMyBidsSearchType(searchTypeId) {
    if (!searchTypeId) {
      searchTypeId = 1;
    }
    // var searchType = _.findWhere(this.get('myBidsSearchTypes'), {
    //   id: searchTypeId
    // });

    var searchType = this.get('myBidsSearchTypes').map(function(bid) {
      bid.id === searchTypeId
    });

    if (!searchType) {
      // searchType = _.findWhere(this.get('myBidsSearchTypes'), {
      //   name: 'LIVE_BIDDING'
      // });
      searchType = this.get('myBidsSearchTypes').map(function(bid) {
        bid.name === 'LIVE_BIDDING'
      });
    }

    return searchType;
  },
  getMyBidsCurrentFilter: function getMyBidsCurrentFilter() {
    var filterId = myApp.ent.user.getPreference('filterId');
    if (!filterId) return;
    // return _.findWhere(this.get('myBidsSearchTypes'), {
    //   id: filterId
    // });

    return this.get('myBidsSearchTypes').map(function(bid) {
      bid.id === filterId
    });

  },
  getRabbitResponseById: function getRabbitResponseById(responseCode) {
    var code = _.find(this.attributes.rabbitResponseCodes, function (code) {
      if (code.id === responseCode) {
        return code;
      }
    });

    return code;
  },
  getRabbitResponseByName: function getRabbitResponseByName(responseName) {
    var code = _.find(this.attributes.rabbitResponseCodes, function (code) {
      if (code.name === responseName) {
        return code;
      }
    });

    return code;
  },
  isRabbitQuickie: function isRabbitQuickie(responseCode) {
    var code = this.getRabbitResponseById(responseCode);
    return code.quickResponse;
  },
  isRabbitSecure: function isRabbitSecure(responseCode) {
    var code = this.getRabbitResponseById(responseCode);
    return code.secure && code.name.indexOf('PUBLIC') === 0;
  },
  isUserWinningOrWon: function isUserWinningOrWon(userState) {
    var userBiddingStatuses = this.attributes.userBiddingStatuses;
    var userStatus = myApp.ent.inPlay.get('userBiddingData').userBiddingStatus;
    return userStatus === userBiddingStatuses.WINNING || userStatus === userBiddingStatuses.WON;
  },
  w2StateInPlayEndedWaitingChoice: function w2StateInPlayEndedWaitingChoice(currentW2State) {
    return currentW2State === this.attributes.webcastStatesByName.INPLAY_ENDED_WAITING_CHOICE;
  },
  w2StateInPlayPaused: function w2StateInPlayPaused(currentW2State) {
    return currentW2State === this.attributes.webcastStatesByName.INPLAY_PAUSED;
  },
  w2StateInPlayBiddable: function w2StateInPlayBiddable(currentW2State) {
    var webcastStatuses = this.attributes.webcastStatesByName;
    return currentW2State === webcastStatuses.INPLAY_SINGLE || currentW2State === webcastStatuses.INPLAY_GROUP;
  },
  w2StateInPlayEndedAny: function w2StateInPlayEndedAny(currentW2State) {
    var webcastStatuses = this.attributes.webcastStatesByName;
    return currentW2State === webcastStatuses.INPLAY_ENDED || currentW2State === webcastStatuses.INPLAY_ENDED_WAITING_CHOICE || currentW2State === webcastStatuses.INPLAY_ENDED_CHOSEN || currentW2State === webcastStatuses.INPLAY_ENDED_CONFIRMED;
  }
});
"use strict";

PageApp.Ent.User = Backbone.Model.extend({
  url: function url() {
    return myApp.ent.header.get('contextPath') + '/user';
  },
  defaults: {
    accountNonExpired: false,
    accountNonLocked: false,
    activated: null,
    adminLoggedIn: false,
    adminLoginPermitted: false,
    age: 0,
    authorities: [],
    billingAddress: null,
    credentialsNonExpired: false,
    currencySymbolAsPrefix: true,
    displayName: 'anon@bidlogix.net',
    email: null,
    enabled: false,
    externalUserRef: null,
    forcePasswordReset: false,
    forename: null,
    hasBillingAddress: false,
    hasMainAddress: false,
    hasShippingAddress: false,
    id: null,
    inserted: 0,
    language: {
      code: 'en',
      id: 1,
      name: null,
      selected: false
    },
    lastLoggedIn: null,
    localeFormat: 'en_GB',
    localeInternal: '1_1',
    loggedIn: false,
    loginAdminError: false,
    mainAddress: null,
    outbidEmailsOk: false,
    password: null,
    penultimateLogin: null,
    phoneVerified: false,
    publicVendorAdmin: false,
    receiveEmailsOk: false,
    redFlag: false,
    redFlagReason: null,
    rolesAndPrivileges: null,
    shippingAddress: null,
    signupSource: null,
    statusId: null,
    surname: null,
    systemAdmin: false,
    thousandsSeparator: ',',
    timeZone: {
      code: 'Europe/London',
      id: 3,
      name: '(GMT) UTC',
      selected: false,
      zone: null
    },
    title: null,
    updated: null,
    username: 'anon@bidlogix.net',
    verifiedPhoneNumber: null,
    webAppId: null,
    whitelist: false
  },
  // suppresses the on change event!
  validate: function validate(attrs) {
    if (attrs.age < 0) {
      return 'age must be 0 or greater';
    }

    if (attrs.username === '') {
      return 'username must be set..';
    }
  },
  setPreference: function setPreference(name, value) {
    if (!this.get('preferences')) {
      this.set('preferences', {});
    }

    this.get('preferences')[name] = value;
  },
  getPreference: function getPreference(name, defaults) {
    if (!this.get('preferences')) {
      this.set('preferences', {});
    }

    var value = this.get('preferences')[name];

    if (typeof value === 'undefined' && defaults && defaults.value) {
      value = defaults.value;
      this.get('preferences').name = defaults.value;
    }

    if (typeof value === 'undefined' && name === 'layoutForBidding') {
      var defLayout = 'list';

      if (myApp.ent.webApp.get('useGalleryLayoutForBidding')) {
        defLayout = 'grid';
      }

      this.setPreference(name, defLayout);
      value = defLayout;
    }

    if (name === 'layoutForBidding') {
      if (myApp.ent.config.get('page') === 'itemland') {
        this.setPreference('layoutForBidding', 'grid');
        value = 'grid';
      }
    }

    return value;
  },
  getLocale: function getLocale() {
    var locale = this.get('localeFormat');
    if (!locale) return 'en-GB';
    return locale.replace('_', '-');
  },
  isLoggedIn: function isLoggedIn() {
    return this.get('id') && this.get('id') > 0;
  },
  checkLogout: function checkLogout(timedResponse) {
    try {
      if (!timedResponse.models.ErrorModel.loggedIn && myApp.ent.status.isRabbitSecure(timedResponse.actionCode)) {
        myApp.ent.user = new PageApp.Ent.User();
        myApp.vent.trigger('user:logged:out');
      }
    } catch (err) {
      console.log('error checking the error!', err);
    }
  },
  isNotLoggedIn: function isNotLoggedIn() {
    return !this.isLoggedIn();
  }
});
PageApp.Ent.UserRegistration = Backbone.Model.extend({
  getRegistrantId: function getRegistrantId() {
    var registrationId = this.get('registrationId');

    if (!registrationId) {
      return -1;
    }

    return registrationId;
  }
});
"use strict";

PageApp.Ent.WebApp = Backbone.Model.extend({
  showAuctioneerStrip: function showAuctioneerStrip(page) {
    if (this.get('auctioneerCentric')) {
      if (page === 'auctionland' || page === 'itemland') {
        return true;
      }
    }

    return false;
  }
});
"use strict";

PageApp.Controllers.WebcastRouter = function (config) {
  var model = new PageApp.Ent.BasicEntity();
  var hasConnection = true;

  function handleLongPollResponse(responses) {
    if (responses) {
      var maxTimestamp = -1; // responses[(responses.length-1)];

      try {
        for (var key in responses) {
          var response = responses[key];
          if (response.responseTimestamp > maxTimestamp) maxTimestamp = response.responseTimestamp;

          if (checkValidResponse(response)) {
            processPollResponse(response);
          }
        }
      } catch (e) {}

      if (!responses.worked || responses.failed) {
        // we only want to fire another longPoll if the connection is healthy
        if (hasConnection) {
          // if the long poll failed, wait to fire another long poll, to prevent flooding
          setTimeout(function () {
            performLongPoll(maxTimestamp);
          }, 1000);
        }
      } else {
        performLongPoll(maxTimestamp);
      }
    }
  }

  function processPollResponse(response) {
    if (response.worked && response.actionCode > 0 && response.actionCode < 900 && response.responseTimestamp !== -2) {
      // 900 plus are long poll timeouts which return null models...
      // note actionCode = 0 is reserved by the bulk of w2 responses - i.e. synchronous responses on the server side.
      var groupIdToRemove = myApp.ent.inPlay.get('itemId');
      var models = myApp.request('reqres:webcast:models', response.models);

      if (myApp.ent.inPlay) {
        try {
          if (models.inPlayModel || models.auctionModel) {
            var ubd = myApp.ent.inPlay.getUserBiddingData(myApp.ent.inPlay.attributes);
            myApp.ent.inPlay.set('userBiddingData', ubd);

            if (models.inPlayModel) {
              models.inPlayModel.userBiddingData = ubd;
            }
          }

          if (models.sellingItemModel) {
            models.sellingItemModel.userBiddingData = myApp.ent.inPlay.getUserBiddingData(models.sellingItemModel);
          }

          var sellingItem;

          if (models.sellingModel) {
            for (var key in models.sellingModel.liveItems) {
              sellingItem = models.sellingModel.liveItems[key];
              sellingItem.userBiddingData = myApp.ent.inPlay.getUserBiddingData(sellingItem);
            }
          }

          if (models.amendedItemsModel) {
            for (var key1 in models.amendedItemsModel.amendedItems) {
              sellingItem = models.amendedItemsModel.amendedItems[key1];
              sellingItem.userBiddingData = myApp.ent.inPlay.getUserBiddingData(sellingItem);
            }
          }
        } catch (e) {// some calls will have already worked out the ubd.
        }
      }

      var notification = {
        models: models,
        code: response.actionCode,
        groupIdToRemove: groupIdToRemove
      };
      myApp.vent.trigger('webcast:inplay:model:update', {
        models: models,
        code: response.actionCode
      });
      myApp.vent.trigger('webcast:itemlist:model:update', notification);

      if (models.feedModel) {
        myApp.vent.trigger('webcast:video:model:change', models.feedModel);
      }
    }
  }

  function getParams(responseTimestamp) {
    var registrantId = myApp.ent.userRegistration.getRegistrantId();
    var itemId = myApp.ent.inPlay.getItemId();
    return [myApp.ent.auction.get('auctionId'), itemId, registrantId, responseTimestamp];
  }

  function performLongPoll(timestamp) {
    myApp.utils.ajax.get(getParams(timestamp), myApp.utils.ajax.getApiEndpoint('webcast2/longPoll'), _.bind(function (response) {
      handleLongPollResponse(response);
    }, this));
  }

  function checkValidResponse(response) {
    var doRendering = true;

    try {
      var currentItemId = myApp.ent.inPlay.attributes.itemId;

      if (myApp.ent.inPlay.attributes.ringDetails) {
        var currentBidCount = myApp.ent.inPlay.attributes.ringDetails.bidHistory.length;

        if (response.models && response.models.inPlayModel && currentItemId === response.models.inPlayModel.itemId) {
          doRendering = response.models.inPlayModel.ringDetails.bidHistory.length >= currentBidCount;
        }
      }
    } catch (e) {
      if (console.log) console.log('not rendering: ' + e);
    }

    if (!doRendering) {
      if (console.log) console.log('not rendering: ' + response);
    }

    return doRendering;
  }

  function initCommands() {
    myApp.reqres.setHandler('reqres:webcast:models', function (models) {
      if (models.webcast2SettingsModel) {
        if (!myApp.ent.webcast2Settings) {
          myApp.ent.webcast2Settings = new PageApp.Ent.Webcast2Settings();
        }

        myApp.ent.webcast2Settings.set(models.webcast2SettingsModel);
      }

      if (models.auctionModel) {
        if (!myApp.ent.auction) {
          myApp.ent.auction = new PageApp.Ent.Auction();
        }

        myApp.ent.auction.set(models.auctionModel);
      }

      if (!myApp.ent.inPlay) {
        myApp.ent.inPlay = new PageApp.Ent.SellingItem();
      }

      if (models.inPlayModel) {
        var groupMembers = myApp.ent.inPlay.get('groupMembers');
        myApp.ent.inPlay.set(models.inPlayModel);

        if (!models.inPlayModel.withGroupMembers) {
          myApp.ent.inPlay.set('groupMembers', groupMembers);
          models.inPlayModel.groupMembers = groupMembers;
        }
      }

      if (!myApp.ent.userRegistration) {
        myApp.ent.userRegistration = new PageApp.Ent.UserRegistration();
      }

      if (models.userRegistrationModel) {
        if (myApp.ent.user && models.userRegistrationModel.userId === myApp.ent.user.get('id')) {
          myApp.ent.userRegistration.set(models.userRegistrationModel);
        }
      }

      return models;
    });
  }

  function initEvents() {
    myApp.vent.once('webcast:display', function (models) {
      var initiatedModels = myApp.request('reqres:webcast:models', models);
      model = new PageApp.Ent.BasicEntity(initiatedModels);
      var view = new PageApp.Views.WebcastLayout({
        model: model
      });
      myApp.mainRegion.once('show', function (view) {
        view.titleRegion.show(new PageApp.Views.AuctionTitleView({
          model: myApp.ent.auction
        }));
        view.messageRegion.show(new PageApp.Views.AppMessageView({
          model: myApp.ent.auction
        }));
        this.inPlayRouter = new PageApp.Controllers.WebcastInPlayRouter();
        this.inPlayRouter.initialize();
        myApp.vent.trigger('webcast:inplay:display', {
          models: initiatedModels,
          region: view.webcastRegion
        });
        this.itemListRouter = new PageApp.Controllers.WebcastItemListRouter();
        this.itemListRouter.initialize();
        myApp.vent.trigger('webcast:itemlist:display', {
          models: initiatedModels,
          region: view.w2ItemsRegion
        });
        myApp.vent.trigger('webcast:polling:start');
        this.videoRouter = new PageApp.Controllers.WebcastVideoRouter();
        this.videoRouter.initialize();
        myApp.vent.trigger('webcast:video:model:display', {
          controlsRegion: view.w2VideoRegion
        });
      });
      myApp.mainRegion.show(view);
    }, this);
    myApp.vent.on('webcast:polling:start', function (models) {
      myApp.utils.ajax.get(getParams(0), myApp.utils.ajax.getApiEndpoint('webcast2/longPoll'), _.bind(function (response) {
        handleLongPollResponse(response);
      }, this));
    }, this);
  }

  return {
    initialize: function initialize(models) {
      initCommands();
      initEvents();
    }
  };
};
"use strict";

/**
 * NO_BIDS_OPEN(0), NO_BIDS_CLOSED(1), WINNING(2), LOSING(3), WON(4), LOST(5), LOSING_ROOM(6), LOST_ROOM(7), LOST_CANCELLED(8),LOSING_CANCELLED(9);
 */
PageApp.Ent.SellingItem = Backbone.Model.extend({
  idAttribute: 'itemId',
  initialize: function initialize() {},
  ringDetails: function ringDetails() {
    return this.get('ringDetails');
  },
  isInPlay: function isInPlay() {
    return typeof this.get('ringDetails') !== 'undefined' && this.get('ringDetails') !== null;
  },
  isWon: function isWon(userBiddingStatus) {
    return this.get('userBiddingData').userBiddingStatus === myApp.ent.status.attributes.userBiddingStatuses.WON;
  },
  isWinningOrWon: function isWinningOrWon() {
    var userBiddingStatus = this.get('userBiddingData').userBiddingStatus;
    return userBiddingStatus === myApp.ent.status.attributes.userBiddingStatuses.WINNING || userBiddingStatus === myApp.ent.status.attributes.userBiddingStatuses.WON;
  },
  isLosingOrLost: function isLosingOrLost() {
    var userBiddingStatus = this.get('userBiddingData').userBiddingStatus;
    return userBiddingStatus === myApp.ent.status.attributes.userBiddingStatuses.LOSING || userBiddingStatus === myApp.ent.status.attributes.userBiddingStatuses.LOST || userBiddingStatus === myApp.ent.status.attributes.userBiddingStatuses.LOSING_ROOM || userBiddingStatus === myApp.ent.status.attributes.userBiddingStatuses.LOSING_CANCELLED || userBiddingStatus === myApp.ent.status.attributes.userBiddingStatuses.LOST_CANCELLED || userBiddingStatus === myApp.ent.status.attributes.userBiddingStatuses.LOST_ROOM;
  },
  isInactive: function isInactive() {
    var userBiddingStatus = this.get('userBiddingData').userBiddingStatus;
    return !this.isWinningOrWon(userBiddingStatus);
  },
  hasBid: function hasBid(userId) {
    try {
      for (var key in this.get('ringDetails').bidHistory) {
        var bid = this.get('ringDetails').bidHistory[key];

        if (bid.userId === userId) {
          return bid;
        }
      }
    } catch (e) {// if this is not the inPlay item.
    }
  },
  getItemId: function getItemId() {
    var itemId = this.get('itemId');

    if (!itemId) {
      return -1;
    }

    return itemId;
  },
  hasMaxBid: function hasMaxBid(userId) {
    try {
      for (var key in this.attributes.maxBidHistory) {
        var bid = this.attributes.maxBidHistory[key];

        if (bid.userId === userId) {
          return bid;
        }
      }
    } catch (e) {// if this is not the inPlay item.
    }
  },
  getCurrentBidAmount: function getCurrentBidAmount(defAmount) {
    try {
      return this.get('ringDetails').currentBid.amount;
    } catch (e) {
      return defAmount;
    }
  },
  getNextBidAmount: function getNextBidAmount(defAmount) {
    try {
      return this.get('ringDetails').nextBid.amount;
    } catch (e) {
      return defAmount;
    }
  },
  getAskingPrice: function getAskingPrice(defAmount) {
    try {
      return this.get('ringDetails').askingPrice;
    } catch (e) {
      return defAmount;
    }
  },
  getCurrencySymbol: function getCurrencySymbol() {
    var highBidF = myApp.ent.inPlay.get('amountHighestBidFormatted');

    if (highBidF) {
      var index = highBidF.indexOf(';');
      return highBidF.substring(0, index + 1);
    }

    return '';
  },
  getBidCount: function getBidCount() {
    try {
      return this.attributes.ringDetails.bidHistory.length;
    } catch (e) {
      return 0;
    }
  },
  getBidCountMessage: function getBidCountMessage() {
    var bidCount = 0;

    try {
      bidCount = this.attributes.ringDetails.bidHistory.length;
    } catch (e) {
      bidCount = 0;
    }

    if (bidCount === 1) {
      return bidCount + ' ' + myApp.reqres.request('i16:getString', 'WebcastCodes_WC_BID_TEXT');
    } else {
      return bidCount + ' ' + myApp.reqres.request('i16:getString', 'WebcastCodes_WC_BIDS_TEXT');
    }
  },
  getCurrentState: function getCurrentState() {
    var itemStatusId = this.get('itemStatusId');

    if (itemStatusId === 4 || itemStatusId === 13) {
      return 'live';
    } else if (itemStatusId === 5 || itemStatusId === 14) {
      return 'withdrawn';
    } else if (itemStatusId === 6 || itemStatusId === 7 || itemStatusId === 10 || itemStatusId === 11 || itemStatusId === 12) {
      return 'sold';
    } else if (itemStatusId === 8) {
      return 'unsold';
    } else if (itemStatusId === 9 || itemStatusId === 1 || itemStatusId === 2 || itemStatusId === 3) {
      return 'suspended';
    }
  },
  getUserBiddingData: function getUserBiddingData(pendingItem) {
    try {
      if (!pendingItem) {
        return;
      }

      var ubd1 = {};
      var loggedIn = myApp.ent.user.isLoggedIn();
      var userStatus = this.getUserStatus(pendingItem, loggedIn);
      var statusMessage = this.getUserStatusMessage(userStatus, pendingItem, loggedIn);
      var onceTwiceMessage = this.getOnceTwiceMessage(pendingItem);

      if (onceTwiceMessage) {
        statusMessage = onceTwiceMessage;
      }

      ubd1.statusMessage = statusMessage;
      ubd1.wonLostMessage = this.getWonLostMessage(userStatus, pendingItem, loggedIn);
      ubd1.userBiddingStatus = userStatus;
      this.setAutoBidInfo(ubd1, pendingItem);
      return ubd1;
    } catch (e) {
      throw e;
    }
  },
  setAutoBidInfo: function setAutoBidInfo(ubd1, pendingItem) {
    if (!pendingItem) {
      return;
    }

    ubd1.maxBidAmount = undefined;
    ubd1.maxBidAmountFormatted = undefined;

    if (pendingItem.userBiddingData) {
      ubd1.maxBidAmount = pendingItem.userBiddingData.maxBidAmount;
      ubd1.maxBidAmountFormatted = pendingItem.userBiddingData.maxBidAmountFormatted;
    } else if (pendingItem.maxBidHistory) {
      for (var key in pendingItem.maxBidHistory) {
        var maxBid = pendingItem.maxBidHistory[key];

        if (myApp.ent.user.get('id') === maxBid.userId) {
          ubd1.maxBidAmount = maxBid.amount;
          ubd1.maxBidAmountFormatted = maxBid.amountFormatted;
        }
      }
    }
  },
  getUserStatus: function getUserStatus(pendingItem, loggedIn) {
    if (!pendingItem || !pendingItem.ringDetails) {
      return 0;
    }

    var userBiddingStatuses = myApp.ent.status.attributes.userBiddingStatuses;
    var status = userBiddingStatuses.NO_BIDS_OPEN;
    var sessionUserId = myApp.ent.user.attributes.id;
    var highestBid = pendingItem.ringDetails.currentBid;
    var userHasBid = false;
    var bid;

    for (var key in pendingItem.ringDetails.bidHistory) {
      bid = pendingItem.ringDetails.bidHistory[key];

      if (bid.userId === sessionUserId && bid.status === 1) {
        userHasBid = bid;
        break;
      }
    }

    var userCancelledBid = false;

    for (var key1 in pendingItem.ringDetails.bidHistory) {
      bid = pendingItem.ringDetails.bidHistory[key1];

      if (bid.userId === sessionUserId && bid.status > 1) {
        userCancelledBid = bid;
        break;
      }
    }

    if (!pendingItem.live) {
      if (loggedIn) {
        if (highestBid) {
          if (highestBid.userId === sessionUserId) {
            status = userBiddingStatuses.WON;
          } else if (userHasBid) {
            status = userBiddingStatuses.LOST;

            if (highestBid.reserve) {
              status = userBiddingStatuses.LOST_ROOM;
            }
          } else {
            status = userBiddingStatuses.NO_BIDS_CLOSED;
          }
        } else {
          status = userBiddingStatuses.NO_BIDS_CLOSED;
        }
      } else {
        status = userBiddingStatuses.NO_BIDS_CLOSED;
      }
    } else {
      if (loggedIn) {
        if (highestBid && highestBid.userId === sessionUserId) {
          status = userBiddingStatuses.WINNING;
        } else {
          if (userHasBid) {
            status = userBiddingStatuses.LOSING;

            if (highestBid.reserve) {
              status = userBiddingStatuses.LOSING_ROOM;
            }
          }
        }
      }
    } // check for cancelled bids if it appears the user has no bids...


    if (loggedIn) {
      if (status === userBiddingStatuses.NO_BIDS_CLOSED || status === userBiddingStatuses.NO_BIDS_OPEN) {
        if (userCancelledBid) {
          if (status === userBiddingStatuses.NO_BIDS_CLOSED) {
            status = userBiddingStatuses.LOST_CANCELLED;

            if (highestBid.reserve) {
              status = userBiddingStatuses.LOST_ROOM;
            }
          } else if (status === userBiddingStatuses.NO_BIDS_OPEN) {
            status = userBiddingStatuses.LOSING_CANCELLED;
          }
        }
      }
    }

    return status;
  },
  getOnceTwiceMessage: function getOnceTwiceMessage(pendingItem) {
    var onceTwiceStatus = myApp.ent.auction.attributes.onceTwiceStatus;
    var webcastStateId = myApp.ent.auction.attributes.webcastStateId;
    var onceTwiceStatuses = myApp.ent.status.attributes.onceTwiceStatusesByName;
    var onceTwiceMessage;

    if (pendingItem) {
      // in webcast2 this message overrides the status message - therefore we to take care when to override the status message
      if (myApp.ent.status.w2StateInPlayBiddable(webcastStateId)) {
        if (onceTwiceStatus === onceTwiceStatuses.ONCE) {
          onceTwiceMessage = myApp.reqres.request('i16:getString', 'WebcastCodes_WC_RNDM_GOING_ONCE');
        } else if (onceTwiceStatus === onceTwiceStatuses.TWICE) {
          onceTwiceMessage = myApp.reqres.request('i16:getString', 'WebcastCodes_WC_RNDM_GOING_TWICE');
        } else if (onceTwiceStatus === onceTwiceStatuses.LAST) {
          onceTwiceMessage = myApp.reqres.request('i16:getString', 'WebcastCodes_WC_RNDM_LAST_CHANCE');
        }
      } else if (myApp.ent.status.w2StateInPlayPaused(webcastStateId)) {
        onceTwiceMessage = myApp.reqres.request('i16:getString', 'WebcastCodes_WC_LIVE_BIDDING_PAUSED');
      }
    }

    return onceTwiceMessage;
  },
  getUserStatusMessage: function getUserStatusMessage(userStatus, pendingItem, loggedIn) {
    var webcastStateId = myApp.ent.auction.attributes.webcastStateId;
    var webcastStatuses = myApp.ent.status.attributes.webcastStatesByName;
    var userBiddingStatuses = myApp.ent.status.attributes.userBiddingStatuses;
    var statusMessageCode;

    if (!loggedIn) {
      statusMessageCode = 'WebcastCodes_WC_ACTMSG_YOU_NOT_LOGGED';
    } else if (userStatus === userBiddingStatuses.NO_BIDS_CLOSED) {
      statusMessageCode = 'WebcastCodes_WC_ACTMSG_CLOSED';
    } else if (userStatus === userBiddingStatuses.LOST || userStatus === userBiddingStatuses.LOST_ROOM || userStatus === userBiddingStatuses.WON) {
      if (userStatus === userBiddingStatuses.LOST) {
        statusMessageCode = 'WebcastCodes_WC_ACTMSG_YOU_WAS_NOT_HIGHTEST';
      } else if (userStatus === userBiddingStatuses.LOST_ROOM) {
        statusMessageCode = 'WebcastCodes_WC_ACTMSG_ROOM_WAS_HIGHEST';
      } else if (userStatus === userBiddingStatuses.LOST_CANCELLED) {
        statusMessageCode = 'WebcastCodes_WC_ACTMSG_YOU_WAS_NOT_HIGHTEST';
      } else if (userStatus === userBiddingStatuses.WON) {
        if (pendingItem.group && myApp.ent.status.w2StateInPlayEndedWaitingChoice(webcastStateId)) {
          if (pendingItem.choiceEnumId === 2) {
            // myApp.ent.status.attributes.choicesByName['Full']) {
            statusMessageCode = 'WebcastCodes_WC_BUTTON_SELECT_CHOICE';
          } else if (pendingItem.choiceEnumId === 3) {
            // myApp.ent.status.attributes.choicesByName['Numerical Order']) {
            statusMessageCode = 'WebcastCodes_WC_GROUPING_ENTER_QUANTITY';
          }
        } else {
          statusMessageCode = 'WebcastCodes_WC_ACTMSG_YOU_WAS_HIGHTEST';
        }
      }
    } else {
      if (myApp.ent.userRegistration && myApp.ent.userRegistration.attributes.approved) {
        if (!pendingItem.ringDetails || webcastStateId === webcastStatuses.COUNTING_DOWN || webcastStateId === webcastStatuses.DEFINED || webcastStateId === webcastStatuses.STARTED || webcastStateId === webcastStatuses.FINISHED) {
          statusMessageCode = 'WebcastCodes_WC_LIVE_BIDDING_COMMENCES_SHORTLY';
        } else if (myApp.ent.status.w2StateInPlayPaused(webcastStateId)) {
          statusMessageCode = 'WebcastCodes_WC_LIVE_BIDDING_PAUSED';
        } else if (myApp.ent.status.w2StateInPlayEndedAny(webcastStateId)) {
          statusMessageCode = 'WebcastCodes_WC_ACTMSG_YOU_WAS_NOT_HIGHTEST';

          if (userStatus === userBiddingStatuses.WINNING) {
            statusMessageCode = 'WebcastCodes_WC_ACTMSG_YOU_IS_HIGHTEST';
          }
        } else {
          statusMessageCode = myApp.ent.userRegistration.attributes.statusLabel;

          if (myApp.ent.userRegistration) {
            statusMessageCode = myApp.ent.userRegistration.attributes.statusLabel;
          }

          if (userStatus === userBiddingStatuses.WINNING) {
            statusMessageCode = 'WebcastCodes_WC_ACTMSG_YOU_IS_HIGHTEST';
          } else if (userStatus === userBiddingStatuses.LOSING) {
            statusMessageCode = 'WebcastCodes_WC_ACTMSG_ONLINE_IS_HIGHEST';
          } else if (userStatus === userBiddingStatuses.LOSING_CANCELLED) {
            statusMessageCode = 'WebcastCodes_WC_ACTMSG_ONLINE_IS_HIGHEST_CANCELLED';
          } else if (userStatus === userBiddingStatuses.LOSING_ROOM) {
            statusMessageCode = 'WebcastCodes_WC_ACTMSG_ROOM_IS_HIGHEST';
          } else if (userStatus === userBiddingStatuses.NO_BIDS_OPEN) {
            statusMessageCode = 'WebcastCodes_WC_ACTMSG_NO_BIDS_OPEN';
          }
        }
      } else {
        if (!myApp.ent.userRegistration || !myApp.ent.userRegistration.attributes.registered) {
          statusMessageCode = 'AuctionRegistrantStatus_NOT_REGISTERED'; // myApp.ent.userRegistration.attributes.statusLabel;
        } else {
          statusMessageCode = myApp.ent.userRegistration.attributes.statusLabel;
        }
      }
    }

    return myApp.reqres.request('i16:getString', statusMessageCode);
  },
  getWonLostMessage: function getWonLostMessage(userStatus, pendingItem, loggedIn) {
    var messageCode;
    var userBiddingStatuses = myApp.ent.status.attributes.userBiddingStatuses;

    if (pendingItem.live || !loggedIn || userStatus === userBiddingStatuses.NO_BIDS_CLOSED) {// messageCode = null;
    } else if (userStatus === userBiddingStatuses.LOST || userStatus === userBiddingStatuses.LOST_ROOM) {
      if (pendingItem.group) {
        messageCode = 'WebcastCodes_WC_DID_NOT_WIN_GROUP';
      } else {
        messageCode = 'WebcastCodes_WC_DID_NOT_WIN_ITEM';
      }
    } else if (userStatus === userBiddingStatuses.WON) {
      if (pendingItem.group) {
        messageCode = 'WebcastCodes_WC_DID_WIN_GROUP';
      } else {
        messageCode = 'WebcastCodes_WC_DID_WIN_ITEM';
      }
    }

    if (!messageCode) {
      return '';
    } else {
      return myApp.reqres.request('i16:getString', messageCode);
    }
  }
});
"use strict";

PageApp.Controllers.WebcastVideoRouter = function (config) {
  var ent = {};
  var myView;
  var myRegion;

  function initialiseStream() {
    if (myApp.ent.auction.get('feedModel').tokToken) {
      myApp.utils.webrtc.joinSession(myApp.ent.auction.get('feedModel'), myApp.vent);
    } else {
      myApp.utils.ajax.get([myApp.ent.auction.get('auctionId')], myApp.utils.ajax.getApiEndpoint('webcast2/tokToken'), function (feedModel) {
        myApp.ent.auction.set('feedModel', feedModel);
        myApp.utils.webrtc.joinSession(myApp.ent.auction.get('feedModel'), myApp.vent);
      });
    }
  }

  function renderControls() {
    myRegion.empty();
    ent.audioVideoStream = new PageApp.Ent.AudioVideoStream(myApp.ent.auction.get('feedModel'));

    if (ent.audioVideoStream.isFeedActive()) {
      myView = new PageApp.Views.VideoLayoutView({
        model: ent.audioVideoStream
      });
      myRegion.on('show', function (view) {
        if (ent.audioVideoStream.isFeedActive()) {
          ent.audioVideoStream.set('feedVisible', true);
          myApp.utils.webrtc.startSubscribing(ent.audioVideoStream.attributes);
        }
      });
      myRegion.show(myView);
    }
  }

  function initEvents() {
    myApp.vent.on('webcast:video:model:display', function (config) {
      myRegion = config.controlsRegion;
      myRegion.on('close', function (view) {
        view.destroy();
      });
      initialiseStream();
    }, this);
    myApp.vent.on('webcast:video:hide', function () {
      ent.audioVideoStream.set('feedVisible', false);
      myApp.utils.webrtc.stopSubscribing(ent.audioVideoStream.attributes);
    }, this);
    myApp.vent.on('webcast:video:show', function () {
      ent.audioVideoStream.set('feedVisible', true);
      myApp.utils.webrtc.startSubscribing(ent.audioVideoStream.attributes);
    }, this);
    myApp.vent.on('webcast:video:model:change', function (feedModel) {
      console.log('webcast: model changed, current session: ' + myApp.ent.auction.get('feedModel').tokSessionId);
      console.log('webcast: model changed, new session: ' + feedModel.tokSessionId);
      myApp.ent.auction.set('feedModel', feedModel);
      initialiseStream();
    }, this);
    myApp.vent.on('webrtc:stream:created', function () {
      console.log('webcast: new session: ' + myApp.ent.auction.get('feedModel').tokSessionId);
      var startedMessage = myApp.reqres.request('i16:getString', 'WebcastCodes_WC_FEED_STREAM_STARTED');
      myApp.vent.trigger('ui:notification', {
        text: startedMessage
      });
      myApp.utils.ajax.get([myApp.ent.auction.get('auctionId')], myApp.utils.ajax.getApiEndpoint('webcast2/tokToken'), function (feedModel) {
        myApp.ent.auction.set('feedModel', feedModel);
        renderControls();
      });
    }, this);
    myApp.vent.on('webrtc:stream:destroyed', function () {
      console.log('webcast: disconnect form session: ' + myApp.ent.auction.get('feedModel').tokSessionId);
      myApp.vent.trigger('ui:notification', {
        text: 'Auctioneer has stopped video/audio stream'
      });
      ent.audioVideoStream.streamDestroyed();
      renderControls();
    }, this);
    myApp.vent.on('webrtc:stream:connected', function (config) {
      console.log('webcast: connected to session: ' + myApp.ent.auction.get('feedModel').tokSessionId); // renderControls();
    }, this);
    myApp.vent.on('webrtc:stream:notSupported', function () {
      var notSupportedMessage = myApp.reqres.request('i16:getString', 'WebcastCodes_WC_FEED_STREAM_NOT_SUPPORTED');
      myApp.vent.trigger('ui:notification', {
        text: notSupportedMessage
      });
    }, this);
  }

  return {
    initialize: function initialize(models) {
      initEvents();
    }
  };
};
"use strict";

PageApp.Ent.AudioVideoStream = Backbone.Model.extend({
  isFeedVisible: function isFeedVisible() {
    return this.attributes.feedVisible ? this.attributes.feedVisible : false;
  },
  isFeedUrl: function isFeedUrl() {
    return this.attributes.feedId ? this.attributes.feedId.indexOf('/') > -1 && this.attributes.feedId.indexOf('.') > -1 : false;
  },
  isFeedActive: function isFeedActive() {
    var result = false;
    var provider = this.attributes.feedProviderId;

    if (provider && provider.length > 0) {
      if (this.attributes.tokSessionId && this.attributes.tokToken) {
        result = myApp.utils.webrtc.isStream();
      }
    }

    return result;
  },
  streamDestroyed: function streamDestroyed() {
    this.attributes.tokToken = undefined;
    this.attributes.feedVisible = false;
    myApp.ent.auction.get('feedModel').tokToken = undefined;
    myApp.ent.auction.get('feedModel').feedVisible = false;
  }
});
"use strict";

PageApp.Views.VideoControlView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.videoControlView,
  initialize: function initialize(options) {
    this.options = options;
  },
  events: {
    'click #feedHideButton': 'handleFeedHide',
    'click #feedShowButton': 'handleFeedShow'
  },
  modelEvents: {
    'change': 'render'
  },
  serializeData: function serializeData() {
    var feedModel = myApp.ent.auction.get('feedModel');
    var feedType = feedModel.feedType;
    var feedHideButtonText = feedType === 'AUDIO' ? myApp.reqres.request('i16:getString', 'WebcastCodes_WC_FEED_HIDE_AUDIO') : myApp.reqres.request('i16:getString', 'WebcastCodes_WC_FEED_HIDE_VIDEO');
    var feedShowButtonText = feedType === 'AUDIO' ? myApp.reqres.request('i16:getString', 'WebcastCodes_WC_FEED_SHOW_AUDIO') : myApp.reqres.request('i16:getString', 'WebcastCodes_WC_FEED_SHOW_VIDEO');
    var displayHideFeedButton = this.model.isFeedActive() && this.model.isFeedVisible();
    var displayShowFeedButton = this.model.isFeedActive() && !this.model.isFeedVisible();
    var feedControlsMessage = feedModel.message;
    var content = {
      feedHideButtonText: feedHideButtonText,
      feedShowButtonText: feedShowButtonText,
      feedControlsMessage: feedControlsMessage,
      feedHideButtonVisibility: displayHideFeedButton,
      feedShowButtonVisibility: displayShowFeedButton
    };
    return content;
  },
  handleFeedHide: function handleFeedHide(e) {
    if (this.$el.find('#feedHideButton').hasClass('button-disabled')) {
      myApp.vent.trigger('ui:notification', {
        text: myApp.reqres.request('i16:getString', 'WebcastCodes_WC_FEED_VIDEO_UNAVAILABLE')
      });
    } else {
      myApp.vent.trigger('webcast:video:view:hide');
    }
  },
  handleFeedShow: function handleFeedShow(e) {
    if (this.$el.find('#feedShowButton').hasClass('button-disabled')) {
      myApp.vent.trigger('ui:notification', {
        text: myApp.reqres.request('i16:getString', 'WebcastCodes_WC_FEED_VIDEO_UNAVAILABLE')
      });
    } else {
      myApp.vent.trigger('webcast:video:view:show');
    }
  }
});
"use strict";

PageApp.Views.VideoLayoutView = Backbone.Marionette.LayoutView.extend({
  template: hbs.templates.videoLayout,
  initialize: function initialize(options) {
    this.options = options;
  },
  regions: {
    videoControlRegion: '#videoControlRegion',
    videoDisplayRegion: '#videoDisplayRegion'
  },
  onRender: function onRender() {
    try {
      if (!this.model.isFeedActive()) {
        this.videoControlRegion.empty();
        this.videoDisplayRegion.empty();
      } else {
        this.videoControlRegion.show(new PageApp.Views.VideoControlView({
          model: this.model
        }));
        this.videoDisplayRegion.show(new PageApp.Views.VideoStreamView({
          model: this.model
        }));
      }
    } catch (e) {
      if (console) console.log('error setting up feed..', e);
    }
  }
});
"use strict";

PageApp.Views.VideoStreamView = Backbone.Marionette.LayoutView.extend({
  template: hbs.templates.webrtcView,
  initialize: function initialize(options) {
    this.options = options;
    myApp.vent.on('webcast:video:view:hide', function () {
      $(this.ui.feedContainer).addClass('hidden');
      myApp.vent.trigger('webcast:video:hide');
    }, this);
    myApp.vent.on('webcast:video:view:show', function () {
      $(this.ui.feedContainer).removeClass('hidden');
      this.$el.find('#tokvid').remove();
      this.$el.find('.w2-feed-box').append('<div id="tokvid"></div>');
      myApp.vent.trigger('webcast:video:show');
    }, this);
  },
  events: {
    'click .OT_mute': 'handleMute'
  },
  ui: {
    feedContainer: '.w2-feed-box'
  },
  handleMute: function handleMute(e) {
    e.preventDefault();
  }
});
"use strict";

PageApp.Views.AuctionPausedView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.auctionPausedView,
  modelEvents: {
    'change': 'render'
  }
});
"use strict";

PageApp.Views.BidView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.bidView,
  initialize: function initialize(options) {
    this.options = options;
  },
  modelEvents: {
    'change': 'render'
  },
  events: {
    'click .x-bid-action': 'handleBidAction'
  },
  serializeData: function serializeData() {
    return this.model.attributes;
  },
  handleBidAction: function handleBidAction(e) {
    e.preventDefault();
    var $target = $('#inPlayBidButton');
    if ($target.is(':disabled')) return;
    var action = $target.data('action');

    if (action === 'login') {
      myApp.router.navigate('#!/login', {
        trigger: true
      });
      return;
    } else if (action === 'register') {
      myApp.router.navigate('#!/registerForAuction/' + myApp.ent.auction.get('auctionId'), {
        trigger: true
      });
      return;
    } else if (action === 'placeBid') {
      myApp.vent.trigger('webcast:inplay:place:bid', {
        amount: $target.data('amount')
      });
    }

    return false;
  }
});
"use strict";

PageApp.Views.ChoiceMadeView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.choiceMadeView,
  initialize: function initialize(options) {
    this.options = options;
  },
  modelEvents: {
    'change': 'render'
  },
  events: {},
  handleMakeChoice: function handleMakeChoice(e) {
    e.preventDefault();
    myApp.vent.trigger('webcast:inplay:choice:make');
  }
});
"use strict";

PageApp.Views.EmptyView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.noInPlayItemView,
  serializeData: function serializeData() {
    var content = {
      noInPlayItemMessage: myApp.reqres.request('i16:getString', 'WebcastCodes_WC_NO_INPLAY_ITEM')
    };
    return content;
  }
});
"use strict";

PageApp.Views.ExchangeRateView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.exchangeRate,
  className: 'rates col-md-6 col-xs-4 text-center',
  initialize: function initialize(options) {
    this.options = options;
  },
  modelEvents: {
    'change': 'render'
  },
  serializeData: function serializeData() {
    var currentBid = myApp.ent.inPlay.getCurrentBidAmount() / 100;
    var exchange = this.model.attributes;
    var amount = currentBid * exchange.rate * 100 / 100;
    amount = Math.round(amount);
    var content = {
      symbol: exchange.currencySymbol,
      amount: myApp.utils.types.toFormattedNumber(amount),
      code: exchange.currencyCode,
      rate: exchange.rate
    };
    return content;
  }
});
"use strict";

PageApp.Views.ImagesView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.imagesView,
  initialize: function initialize(options) {
    this.options = options;
  },
  modelEvents: {
    'change': 'render'
  },
  ui: {
    openLightbox: '.x-open-lightbox'
  },
  events: {
    'click .x-open-lightbox': 'handleOpenLightbox',
    'click .x-toggle-preview': 'handleTogglePreview'
  },
  handleOpenLightbox: function handleOpenLightbox(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    $target.ekkoLightbox({
      onShown: function onShown() {
        var lightbox = this;
        myApp.vent.on('lightbox:close', function () {
          lightbox.close();
        });
      }
    });
    return false;
  },
  handleTogglePreview: function handleTogglePreview(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    var url = $target.data('preview');
    this.$el.find('.w2-inplay-image-main').attr('src', url);
    return false;
  }
});
"use strict";

PageApp.Views.InPlayLayoutView = Backbone.Marionette.LayoutView.extend({
  template: hbs.templates.inPlayLayout,
  isOverBidButton: false,
  initialize: function initialize(options) {
    this.options = options;
  },
  events: {
    'mousemove #inPlayLayout': 'handleMouseMove'
  },
  modelEvents: {
    'change': 'render'
  },
  className: 'panel panel-default',
  regions: {
    emptyRegion: '#emptyView',
    itemMessageRegion: '#itemMessageRegion',
    imagesRegion: '#imagesView',
    lotTitleRegion: '#lotTitleRegion',
    messagesRegion: '#messagesView',
    bidRegion: '#bidView',
    // maxBidRegion: '#maxBidView',
    exchangeRatesRegion: '#exchangeRatesView'
  },
  onRender: function onRender() {
    var layout = this.model.attributes;

    if (layout.paused) {
      this.emptyRegion.show(new PageApp.Views.AuctionPausedView({
        model: this.options.viewModels.auctionPausedModel
      }));
    } else if (layout.inPlay) {
      this.lotTitleRegion.show(new PageApp.Views.LotTitleView({
        model: this.options.viewModels.lotTitleModel
      }));
      this.messagesRegion.show(new PageApp.Views.MessagesView({
        model: this.options.viewModels.messagesModel
      }));

      if (layout.makeChoiceView) {
        this.bidRegion.show(new PageApp.Views.MakeChoiceView({
          model: this.options.viewModels.makeChoiceModel
        }));
      } else if (layout.makeNumericalChoiceView) {
        this.bidRegion.show(new PageApp.Views.MakeNumericalChoiceView({
          model: this.options.viewModels.makeNumericalChoiceModel
        }));
      } else if (layout.choiceMadeView) {
        this.bidRegion.show(new PageApp.Views.ChoiceMadeView({
          model: this.options.viewModels.choiceMadeModel
        }));
      } else if (layout.bidView) {
        this.bidRegion.show(new PageApp.Views.BidView({
          model: this.options.viewModels.bidModel
        }));
      }

      if (layout.showExchangeRates) {
        this.exchangeRatesRegion.show(new PageApp.Views.ExchangeRatesView({
          collection: this.options.viewModels.exchangeRatesModel
        }));
      } // if (layout.showMaxBidView) {
      //   this.maxBidRegion.show(new PageApp.Views.MaxBidView({model: this.options.viewModels.maxBidModel}))
      // }


      this.itemMessageRegion.show(new PageApp.Views.ItemMessageView({
        model: this.options.viewModels.itemMessageModel
      }));
      this.imagesRegion.empty();
      this.imagesRegion.show(new PageApp.Views.ImagesView({
        model: this.options.viewModels.inPlayImagesModel
      }));
    } else {
      this.emptyRegion.show(new PageApp.Views.EmptyView());
    }
  },
  handleMouseMove: function handleMouseMove(e) {
    // Note: Previously this 'bid button hover' related functionality was handled in the BidView but this did not allow a large enough area
    // for mouse-over events to be captured. Events were not being fired 100% of the time if the mouse was moved over the bid button quickly
    // which caused the hover indicator in the clerking screen to sometimes stick in the wrong state. Also switching from using mouseenter/leave
    // to using mousemove events provides greater reliability (albeit with some additional overhead). Using mousemove events over the
    // whole inPlayLayout area also better copes with the fact that events are not fired over a disabled element
    // (i.e. the bid button when the user has the highest bid). Other issues concerned with the BidView being re-shown at each render were also
    // avoided by handling the functionality here.
    var isOverNow = $('#inPlayBidButton:hover').length !== 0;

    if (this.isOverBidButton !== isOverNow) {
      if (myApp.ent.userRegistration && myApp.ent.userRegistration.attributes.approved) {
        myApp.vent.trigger('webcast:inplay:mouse:over', {
          isOver: isOverNow
        });
      }

      this.isOverBidButton = isOverNow;
    }
  }
});
"use strict";

PageApp.Views.ItemMessageView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.itemMessageView,
  events: {
    'click #lotMessage .close': 'handleMessageClose'
  },
  modelEvents: {
    'change': 'render'
  },
  handleMessageClose: function handleMessageClose() {
    $('#lotMessage').hide();
  }
});
"use strict";

PageApp.Views.LotTitleView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.lotTitleView,
  initialize: function initialize(options) {
    this.options = options;
  },
  modelEvents: {
    'change': 'render'
  }
});
"use strict";

PageApp.Views.MakeChoiceView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.makeChoiceView,
  initialize: function initialize(options) {
    this.options = options;
  },
  modelEvents: {
    'change': 'render'
  },
  events: {
    'click .x-confirm': 'handleMakeChoice'
  },
  handleMakeChoice: function handleMakeChoice(e) {
    e.preventDefault();
    myApp.vent.trigger('webcast:inplay:choice:make');
  }
});
"use strict";

PageApp.Views.MakeNumericalChoiceView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.makeNumericalChoiceView,
  initialize: function initialize(options) {
    this.options = options;
  },
  modelEvents: {
    'change': 'render'
  },
  events: {
    'keyup #wcNumberRequired': 'handleMakeChoiceKeyup',
    'click #wcNumberRequiredSubmit': 'handleMakeChoice'
  },
  onRender: function onRender() {
    if (this.model.get('numbChosen') > 0) {
      this.ui.numberRequired.val(this.model.get('numbChosen'));
    }
  },
  ui: {
    numberRequired: '#wcNumberRequired'
  },
  handleMakeChoiceKeyup: function handleMakeChoiceKeyup(e) {
    e.preventDefault();
    this.ui.numberRequired.val(myApp.utils.types.toNumericCharsOnly(this.ui.numberRequired.val()).substr(0, 10));
    return false;
  },
  handleMakeChoice: function handleMakeChoice(e) {
    e.preventDefault();

    if (!this.validateInput()) {
      this.render();
      this.ui.numberRequired.focus();
      this.ui.numberRequired.select();
      return;
    }

    var numb = myApp.utils.types.toNumber(this.ui.numberRequired.val());

    for (var i = 0; i < numb; i++) {
      myApp.ent.inPlay.get('groupMembers')[i].chosen = true;
    }

    myApp.vent.trigger('webcast:inplay:choice:make');
  },
  validateInput: function validateInput() {
    var numb;
    var valid = true;

    try {
      numb = myApp.utils.types.toNumber(this.ui.numberRequired.val());

      if (numb < this.model.get('minimum')) {
        myApp.vent.trigger('ui:notification', {
          text: myApp.reqres.request('i16:getString', 'WebcastCodes_WC_NUMERIC_TOO_FEW') + ' ' + this.model.get('minimum'),
          level: 'danger'
        });
        valid = false;
      } else if (numb > this.model.get('maximum')) {
        myApp.vent.trigger('ui:notification', {
          text: myApp.reqres.request('i16:getString', 'WebcastCodes_WC_NUMERIC_TOO_MANY') + ' ' + _.size(this.model.get('groupMembers')),
          level: 'danger'
        });
        valid = false;
      }
    } catch (ex) {
      myApp.vent.trigger('ui:notification', {
        text: myApp.reqres.request('i16:getString', 'WebcastCodes_WC_NOT_A_NUMBER'),
        level: 'danger'
      });
      valid = false;
    }

    return valid;
  }
});
"use strict";

PageApp.Views.MaxBidView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.maxBidView
});
"use strict";

PageApp.Views.MessagesView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.messagingView,
  initialize: function initialize(options) {
    this.options = options;
  },
  modelEvents: {
    'change': 'render'
  },
  events: {}
});
"use strict";

PageApp.Views.ExchangeRatesView = Marionette.CollectionView.extend({
  childView: PageApp.Views.ExchangeRateView,
  className: 'w2-exchange-rate-box',
  initialize: function initialize(options) {
    this.collection = options.collection;
  }
});
"use strict";

PageApp.Controllers.WebcastInPlayRouter = function (config) {
  var myRegion = '';
  var viewModels = {};
  var layoutModel;
  var inPlayLayoutView;
  var mouseOverQueue = [];
  var maxMouseOverQueueSize = 30;
  var lastSentStateWasHovering = false;
  var timePeriodWindowLengthMs = 30000;
  var actions = {
    placeMaxBid: myApp.utils.ajax.getApiEndpoint('webcast2/placeMaxBid'),
    placeBid: myApp.utils.ajax.getApiEndpoint('webcast2/placeBid'),
    makeChoice: myApp.utils.ajax.getApiEndpoint('webcast2/makeChoice'),
    mouseOverBid: myApp.utils.ajax.getApiEndpoint('webcast2/mouseOverBid')
  };

  function popupAlert(models) {
    var popup = models.popupMessageModel;

    if (popup) {
      if (popup.messageTarget === 'WINNING_BIDDER') {
        // specific bidder
        if (myApp.ent.status.isUserWinningOrWon()) {
          myApp.vent.trigger('ui:notification', {
            text: models.popupMessageModel.messageText,
            sticky: true
          });
        }
      } else if (popup.messageTarget === 'SPECIFIC_BIDDER') {
        // specific
        // bidder
        if (popup.recipientUserId === myApp.ent.user.attributes.id) {
          myApp.vent.trigger('ui:notification', {
            text: models.popupMessageModel.messageText,
            sticky: true
          });
        }
      } else {
        myApp.vent.trigger('ui:notification', {
          text: models.popupMessageModel.messageText,
          sticky: true
        });
      }
    }
  }

  function initViewModels() {
    if (!viewModels.auctionPausedModel) {
      viewModels.auctionPausedModel = new PageApp.Ent.AuctionPausedModel();
    } // if (!viewModels.maxBidModel) {
    //   viewModels.maxBidModel = new PageApp.Ent.MaxBidModel()
    // }


    if (!viewModels.bidModel) {
      viewModels.bidModel = new PageApp.Ent.BidModel();
    }

    if (!viewModels.choicesModel) {
      viewModels.choicesModel = new PageApp.Ent.ChoicesModel();
    }

    if (!viewModels.choiceMadeModel) {
      viewModels.choiceMadeModel = new PageApp.Ent.ChoiceMadeModel();
    }

    if (!viewModels.feedModel) {
      viewModels.feedModel = new PageApp.Ent.FeedModel();
    }

    if (!viewModels.inPlayImagesModel) {
      viewModels.inPlayImagesModel = new PageApp.Ent.InPlayImagesModel();
    }

    if (!viewModels.itemMessageModel) {
      viewModels.itemMessageModel = new PageApp.Ent.ItemMessageModel();
    }

    if (!viewModels.makeChoiceModel) {
      viewModels.makeChoiceModel = new PageApp.Ent.MakeChoiceModel();
    }

    if (!viewModels.makeNumericalChoiceModel) {
      viewModels.makeNumericalChoiceModel = new PageApp.Ent.MakeNumericalChoiceModel();
    }

    if (!viewModels.lotTitleModel) {
      viewModels.lotTitleModel = new PageApp.Ent.LotTitleModel();
    }

    if (!viewModels.messagesModel) {
      viewModels.messagesModel = new PageApp.Ent.MessagesModel();
    }

    if (!viewModels.exchangeRatesModel) {
      viewModels.exchangeRatesModel = new PageApp.Ent.ExchangeRatesModel();
    }
  }

  function setViewModels(models, silently) {
    initViewModels();
    viewModels.auctionPausedModel.extract(models, silently); // viewModels.maxBidModel.extract(models, silently)

    viewModels.bidModel.extract(models, silently);
    viewModels.choicesModel.extract(models.choicesModel, silently);
    viewModels.choiceMadeModel.extract(silently);
    viewModels.feedModel.extract(models, silently);
    viewModels.inPlayImagesModel.extract(models.inPlayImagesModel, silently);
    viewModels.itemMessageModel.extract(silently);
    viewModels.makeChoiceModel.extract(silently);
    viewModels.makeNumericalChoiceModel.extract(silently);
    viewModels.lotTitleModel.extract(myApp.ent.inPlay, silently);
    viewModels.messagesModel.extract(myApp.ent.inPlay, silently); // for some reason the server returns webcast2ExchangeRatesModel or
    // exchangeRatesModel depending if full page load!

    if (models.webcast2ExchangeRatesModel) {
      viewModels.exchangeRatesModel.extract(models.webcast2ExchangeRatesModel.exchangeRates, silently);
    } else if (models.exchangeRatesModel && models.exchangeRatesModel.exchangeRates) {
      viewModels.exchangeRatesModel.extract(models.exchangeRatesModel.exchangeRates, silently);
    }

    return viewModels;
  }

  function notifyModelsChange(models, responseCode, silence) {
    if (!layoutModel) {
      layoutModel = new PageApp.Ent.InPlayLayoutModel();
    }

    try {
      setViewModels(models, silence.views);
    } catch (err) {
      console.log('webcast: no item in play or auction paused..');
      silence.layout = false; // force re-render of layout..
    }

    layoutModel.once('change', function (view) {
      var $lightSlider = $('#lightSlider');
      myApp.vent.trigger('webcast:inplay:slider', {
        myel: $lightSlider
      });
    });
    layoutModel.extract(models, responseCode, silence.layout, viewModels.exchangeRatesModel);
    popupAlert(models);
  }

  function initLightSliderEvent() {
    myApp.vent.on('webcast:inplay:slider', function (slider) {
      slider.myel.lightSlider({
        autoWidth: true,
        gallery: true,
        cssEasing: 'ease',
        auto: true,
        loop: true,
        slideMargin: 0,
        mode: 'fade',
        controls: true,
        prevHtml: '',
        nextHtml: '',
        speed: 1000,
        pause: 3000
      });
    }, this);
  }

  function initEvents() {
    myApp.vent.once('webcast:inplay:display', function (config) {
      myRegion = config.region;
      notifyModelsChange(config.models, 0, {
        layout: true,
        views: true
      });
      inPlayLayoutView = new PageApp.Views.InPlayLayoutView({
        model: layoutModel,
        viewModels: viewModels
      });
      inPlayLayoutView.once('show', function (view) {
        var $lightSlider = $('#lightSlider');
        myApp.vent.trigger('webcast:inplay:slider', {
          myel: $lightSlider
        });
      });
      myRegion.show(inPlayLayoutView);
    }, this);
    myApp.vent.on('webcast:inplay:model:update', function (response) {
      var silence = {
        layout: false,
        views: true
      };
      notifyModelsChange(response.models, response.code, silence);
    }, this);
    myApp.vent.on('webcast:inplay:choice:changed', function (models) {
      notifyModelsChange(models, 0, {
        layout: true,
        views: false
      });
    }, this);
    myApp.vent.on('webcast:inplay:choice:make', function () {
      var chosenItems = [];

      for (var key in myApp.ent.inPlay.get('groupMembers')) {
        if (myApp.ent.inPlay.get('groupMembers')[key].chosen) {
          chosenItems.push(myApp.ent.inPlay.get('groupMembers')[key].itemId);
        }
      }

      if (_.size(chosenItems) < 1) {
        myApp.vent.trigger('ui:notification', {
          text: myApp.reqres.request('i16:getString', 'WebcastCodes_WC_GROUP_CHOICE_INSTRUCTION')
        });
        return;
      }

      myApp.vent.trigger('ui:notification', {
        text: _.size(chosenItems) + ' ' + myApp.reqres.request('i16:getString', 'WebcastCodes_WC_GROUP_CHOICES_SENT_MESSAGE'),
        sticky: true
      });
      var params = [myApp.ent.auction.get('auctionId'), myApp.ent.inPlay.get('itemId'), chosenItems.join(',')];
      myApp.utils.ajax.post(params, actions.makeChoice, _.bind(function (response) {
        if (response.worked) {
          var models = myApp.request('reqres:webcast:models', response.models);
          myApp.vent.trigger('webcast:inplay:model:update', {
            models: models,
            code: response.actionCode
          });
        } else {
          myApp.vent.trigger('ui:notification', {
            text: response.message
          });
        }
      }, this));
    }, this);
    myApp.vent.on('webcast:inplay:place:bid', function (options) {
      // Disable the bid button before we receive the response to prevent
      // multiple bids being placed in cases of
      // slow networks or slow devices.
      $('#inPlayBidButton').prop('disabled', true);
      var amount = options.amount;

      if (!amount || amount.length === 0) {
        return;
      }

      var params = [myApp.ent.auction.get('auctionId'), myApp.ent.inPlay.get('itemId'), myApp.ent.userRegistration.attributes.registrationId, amount];
      myApp.utils.ajax.post(params, actions.placeBid, _.bind(function (response) {
        if (response.worked) {
          var models = myApp.request('reqres:webcast:models', response.models);
          myApp.vent.trigger('webcast:inplay:model:update', {
            models: models,
            code: response.actionCode
          });
        } else {
          myApp.vent.trigger('ui:notification', {
            text: response.message
          });
        }
      }, this));
    }, this);
    myApp.vent.on('webcast:inplay:mouse:over', function (options) {
      // Prevent the user spamming the mouseover. Allow only
      // 'maxMouseOverQueueSize' mouseover requests to be fired in 30
      // secs.
      var currentTime = new Date().getTime(); // Clear queue of entries older than 30 secs

      while (mouseOverQueue[0] < currentTime - timePeriodWindowLengthMs && mouseOverQueue.length > 0) {
        mouseOverQueue.shift();
      }

      if (mouseOverQueue.length < maxMouseOverQueueSize || !options.isOver && lastSentStateWasHovering) {
        mouseOverQueue.push(currentTime);
        lastSentStateWasHovering = options.isOver;
        var params = [myApp.ent.auction.get('auctionId'), myApp.ent.inPlay.get('itemId'), options.isOver];
        myApp.utils.ajax.post(params, actions.mouseOverBid, null);
      }
    }, this);
  }

  return {
    initialize: function initialize(models) {
      myApp.vent.off('webcast:inplay:slider');
      myApp.vent.off('webcast:inplay:place:bid');
      myApp.vent.off('webcast:inplay:choice:make');
      myApp.vent.off('webcast:inplay:model:update');
      initEvents();
      initLightSliderEvent();
    },
    getCurrentBidAmount: function getCurrentBidAmount(passedIn) {
      if (myApp.ent.inPlay.isInPlay()) {
        return myApp.ent.inPlay.getCurrentBidAmount(passedIn);
      } else {
        return passedIn;
      }
    }
  };
};
"use strict";

PageApp.Ent.AuctionPausedModel = Backbone.Model.extend({
  initialize: function initialize() {},
  extract: function extract(models, silently) {
    if (!models) return;
    var content = {
      auctionPausedMessage: myApp.reqres.request('i16:getString', 'WebcastCodes_WC_AUCTION_PAUSED')
    };
    this.set(content, {
      silent: silently
    });
  }
});
"use strict";

PageApp.Ent.BidModel = Backbone.Model.extend({
  initialize: function initialize() {},
  extract: function extract(models, silently) {
    if (!models) return;
    var inPlay = myApp.ent.inPlay;
    var ringDetails = inPlay.attributes.ringDetails;
    var userRegistration = myApp.ent.userRegistration.attributes;
    var myUserId = userRegistration.userId;
    var showNumberOfBids = myApp.ent.webcast2Settings.get('showNumberOfBids');
    var buttonLabel = myApp.reqres.request('i16:getString', 'WebcastCodes_WC_BUTTON_LOGIN');
    var bidCalculation;
    var buttonAction;
    var buttonClass = 'btn-primary';
    var buttonState;
    var origin;

    if (myApp.ent.user.isLoggedIn()) {
      if (userRegistration.approved) {
        buttonLabel = null; // will be reassigned below

        bidCalculation = ringDetails.bidCalculationButtonMessage;
        buttonAction = 'placeBid';
        buttonClass = 'btn-primary';

        if (ringDetails.currentBid.userId === myUserId) {
          buttonState = 'disabled';
          buttonAction = 'none';
        } else {
          buttonClass = 'btn-primary';
          buttonState = ''; // enable button
        }

        if (myApp.ent.auction.isEndedOrPaused() || myApp.ent.auction.attributes.currentStateName === 'SUSPENDED') {
          buttonState = 'disabled';
          buttonClass = 'btn-default';
          buttonAction = 'none';
        }
      } else {
        if (!userRegistration.registrationId || userRegistration.status === 5) {
          buttonLabel = myApp.reqres.request('i16:getString', 'WebcastCodes_WC_BUTTON_REGISTER');
          buttonAction = 'register';
          buttonState = ''; // enable button
        } else {
          buttonLabel = userRegistration.statusLabel;
          buttonAction = '';
          buttonState = 'disabled'; // enable button
        }
      }
    } else {
      buttonAction = 'login';
      buttonState = ''; // enable button
    }

    if (!buttonLabel || buttonLabel.length === 0) {
      buttonLabel = myApp.reqres.request('i16:getString', 'WebcastCodes_WC_BUTTON_BID');
      buttonLabel += ' ' + myApp.ent.inPlay.attributes.ringDetails.askingPriceFormatted;
    }

    if (inPlay.attributes.ringDetails.currentBid.reserve) {
      origin = '( FLOOR )';
    }

    if (!inPlay.attributes.ringDetails.currentBid.reserve) {
      origin = '( INTERNET )';
    }

    if (inPlay.attributes.ringDetails.currentBid.amount === 0) {
      origin = '';
    }

    if (userRegistration.status === 3) {
      buttonLabel = "<i class='fa fa-exclamation-triangle'></i>";
      buttonState = 'disabled';
      buttonClass = 'btn-default';
    }

    if (userRegistration.status === 4) {
      buttonLabel = "<i class='fa fa-exclamation-triangle'></i>";
      buttonState = 'disabled';
      buttonClass = 'btn-default';
    }

    if (userRegistration.status === 6) {
      buttonLabel = "<i class='fa fa-exclamation-triangle'></i>";
      buttonState = 'disabled';
      buttonClass = 'btn-default';
    }

    if (buttonLabel.indexOf('null') >= 0) {
      buttonLabel = '';
      bidCalculation = '';
    }

    var content = {
      currentBidMessage: myApp.reqres.request('i16:getString', 'WebcastCodes_WC_HIGHEST_BID_TEXT'),
      currentFormatted: inPlay.attributes.ringDetails.currentBid.amountFormatted,
      currentBidCount: showNumberOfBids ? '- ' + inPlay.getBidCountMessage() : '',
      buttonLabel: buttonLabel,
      bidCalculation: bidCalculation,
      buttonClass: buttonClass,
      buttonAction: buttonAction,
      buttonState: buttonState,
      origin: origin,
      bidAmount: inPlay.getAskingPrice()
    };
    this.set(content, {
      silent: silently
    });
  }
});
"use strict";

PageApp.Ent.ChoiceMadeModel = Backbone.Model.extend({
  initialize: function initialize() {},
  extract: function extract(silently) {
    var viewTitle;
    var chosenItems = [];

    for (var key in myApp.ent.inPlay.get('groupMembers')) {
      if (myApp.ent.inPlay.get('groupMembers')[key].chosen) {
        chosenItems.push({
          lotNumber: myApp.ent.inPlay.get('groupMembers')[key].lotNumber,
          title: myApp.ent.inPlay.get('groupMembers')[key].title
        });
      }
    }

    if (chosenItems.length < 2) {
      viewTitle = chosenItems.length + ' Item Chosen';
    } else {
      viewTitle = chosenItems.length + ' Items Chosen';
    }

    var content = {
      viewTitle: viewTitle,
      chosenItems: chosenItems,
      message: 'Sent to the auctioneer for confirmation.'
    };
    this.set(content, {
      silent: silently
    });
  }
});
"use strict";

PageApp.Ent.ChoicesModel = Backbone.Model.extend({
  initialize: function initialize() {
    this.set('choices', []);
  },
  extract: function extract(choices, silently) {
    if (!choices) return;
    var content = choices;
    this.set(content, {
      silent: silently
    });
  },
  reset: function reset(type) {
    this.set('choices', []);
  },
  hasAny: function hasAny(itemId) {
    return _.size(this.get('choices')) > 0;
  },
  add: function add(itemId) {
    if (_.indexOf(this.get('choices'), itemId) === -1) this.get('choices').push(itemId);
  },
  remove: function remove(itemId) {
    var index = _.indexOf(this.get('choices'), itemId);

    if (index > -1) this.get('choices').splice(index, 1);
  }
});
"use strict";

PageApp.Ent.ExchangeRate = Backbone.Model.extend({
  initialize: function initialize() {}
});
"use strict";

PageApp.Ent.ExchangeRatesModel = Backbone.Collection.extend({
  model: PageApp.Ent.ExchangeRate,
  initialize: function initialize() {},
  extract: function extract(exchangeRates, silently) {
    this.set(exchangeRates || {}, {
      silent: silently
    });
  }
});
"use strict";

PageApp.Ent.FeedModel = Backbone.Model.extend({
  defaults: {
    isVideoVisible: false,
    isAudioOnly: false
  },
  initialize: function initialize() {},
  extract: function extract(models, silently) {
    var content = myApp.ent.auction.get('feedModel');

    if (models && models.feedModel) {
      content = models.feedModel;
    }

    this.set(content, {
      silent: silently
    });
  }
});
"use strict";

PageApp.Ent.InPlayImagesModel = Backbone.Model.extend({
  initialize: function initialize() {},
  extract: function extract(models, silently) {
    if (!models) return;
    var imagelotNumber;
    var theImages = [];
    var imageLightboxSrc;
    var sliderToggle = '';
    var noImageToggle = 'none';
    var imagePreviewSrc = 'none';
    var images = models.images;
    var itemMessage = this.getItemMessage(myApp.ent.inPlay.attributes);

    for (var key in images) {
      var image = images[key];

      if (key === '0') {
        imagePreviewSrc = image.previewSrc;
        imagelotNumber = image.lotNumber;
        imageLightboxSrc = image.lightboxSrc;
      }

      theImages.push({
        imageId: image.imageId,
        lotNumber: image.lotNumber,
        imageThumbSrc: image.thumbSrc,
        imageLightboxSrc: image.lightboxSrc,
        imagePreviewSrc: image.previewSrc,
        itemMessage: itemMessage
      });
    }

    if (imagePreviewSrc === 'none') {
      sliderToggle = 'none';
      noImageToggle = '';
    }

    var content = {
      imagePreviewSrc: imagePreviewSrc,
      theImages: theImages,
      imagelotNumber: imagelotNumber,
      imageLightboxSrc: imageLightboxSrc,
      itemMessage: itemMessage,
      noImageToggle: noImageToggle,
      sliderToggle: sliderToggle
    };
    this.set(content, {
      silent: silently
    });
  },
  getItemMessage: function getItemMessage(pendingItem) {
    var msg = '';

    if (pendingItem.itemMessage && pendingItem.itemMessage.length > 0) {
      if (pendingItem.itemMessageWinnerOnly) {
        if (myApp.ent.status.isUserWinningOrWon()) {
          msg = pendingItem.itemMessage;
        }
      } else {
        msg = pendingItem.itemMessage;
      }
    }

    return msg;
  }
});
"use strict";

PageApp.Ent.InPlayLayoutModel = Backbone.Model.extend({
  initialize: function initialize() {},
  extract: function extract(models, responseCode, silently, exchangeRatesModel) {
    if (!models) return;
    var makeChoiceView = false;
    var makeNumericalChoiceView = false;
    var choiceMadeView = false;
    var bidView = false;
    var feedRefreshRequired = true;

    if (this.get('feedModel')) {
      feedRefreshRequired = models.feedModel && !this.isFeedEqual(this.get('feedModel'), models.feedModel);
    }

    var requireImagesRefresh = false;

    if (models.inPlayImagesModel || responseCode === myApp.ent.status.getRabbitResponseByName('ADMIN_RING_ACTION_MESSAGED_INTERNET').id || responseCode === myApp.ent.status.getRabbitResponseByName('ADMIN_RING_ACTION_MESSAGED_ROOM').id || responseCode === myApp.ent.status.getRabbitResponseByName('ADMIN_AUCTION_ACTION_PAUSED').id) {
      requireImagesRefresh = true;
    }

    var group = myApp.ent.inPlay.get('group');
    var won = myApp.ent.inPlay.isWon();
    var inPlayEndedWaitingChoice = myApp.ent.auction.get('inPlayEndedWaitingChoice');

    if (group && won && inPlayEndedWaitingChoice) {
      if (myApp.ent.inPlay.get('choiceEnumId') === 2) {
        // full choice
        makeChoiceView = true;
      } else if (myApp.ent.inPlay.get('choiceEnumId') === 3) {
        // numerical order
        makeNumericalChoiceView = true;
      }
    } else if (group && myApp.ent.inPlay.isWon() && myApp.ent.auction.get('inPlayEndedChosen')) {
      choiceMadeView = true;
    } else {
      bidView = true;
    }

    var showExchangeRates = _.size(exchangeRatesModel) > 0 || false;

    if (myApp.ent.inPlay.getCurrentBidAmount(0) > 0) {
      // working around a glitch in the server code where exchange rates are sent in two differently named models depending on ajax/non ajax request.
      if (models.exchangeRatesModel && models.exchangeRatesModel.exchangeRates) {
        showExchangeRates = true;
      } else if (models.webcast2ExchangeRatesModel && models.webcast2ExchangeRatesModel.exchangeRates) {
        showExchangeRates = true;
      }
    }

    var showMaxBidView = true;

    if (group && myApp.ent.inPlay.isWon() && myApp.ent.auction.get('inPlayEndedWaitingChoice')) {
      showMaxBidView = false;
    }

    var timestamp = -1;

    if (!silently) {
      timestamp = new Date().getTime();
    }

    var content = {
      timestamp: timestamp,
      inLiveBidding: myApp.ent.auction.get('inLiveBidding'),
      inPlayControls: myApp.ent.auction.get('inPlayControls'),
      inPlayEnded: myApp.ent.auction.get('inPlayEnded'),
      inPlayEndedAny: myApp.ent.auction.get('inPlayEndedAny'),
      inPlayEndedChosen: myApp.ent.auction.get('inPlayEndedChosen'),
      inPlayEndedConfirmed: myApp.ent.auction.get('inPlayEndedConfirmed'),
      inPlayEndedWaitingChoice: myApp.ent.auction.get('inPlayEndedWaitingChoice'),
      inPlayPaused: myApp.ent.auction.get('inPlayPaused'),
      lotNumber: myApp.ent.inPlay.get('lotNumber'),
      paused: myApp.ent.auction.isPaused(),
      inPlay: myApp.ent.inPlay.isInPlay(),
      requireImagesRefresh: requireImagesRefresh,
      feedRefreshRequired: feedRefreshRequired,
      showMaxBidView: showMaxBidView,
      makeChoiceView: makeChoiceView,
      makeNumericalChoiceView: makeNumericalChoiceView,
      choiceMadeView: choiceMadeView,
      bidView: bidView,
      showExchangeRates: showExchangeRates
    };
    this.set(content, {
      silent: silently
    });
  },
  isFeedEqual: function isFeedEqual(feed1, feed2) {
    var feed1IsNull = !feed1 || !feed1.feedProviderId;
    var feed2IsNull = !feed2 || !feed2.feedProviderId;

    if (feed1IsNull && feed2IsNull) {
      return true;
    } else if (!feed1IsNull && !feed2IsNull) {
      return feed1.feedProviderId === feed2.feedProviderId && feed1.feedId === feed2.feedId && feed1.feedType === feed2.feedType;
    } else {
      return false;
    }
  }
});
"use strict";

PageApp.Ent.ItemMessageModel = Backbone.Model.extend({
  initialize: function initialize() {},
  extract: function extract(silently) {
    var itemMessage = this.getItemMessage(myApp.ent.inPlay.attributes);
    var content = {
      itemMessage: itemMessage
    };
    this.set(content, {
      silent: silently
    });
  },
  getItemMessage: function getItemMessage(pendingItem) {
    var msg = '';

    if (pendingItem.itemMessage && pendingItem.itemMessage.length > 0) {
      if (pendingItem.itemMessageWinnerOnly) {
        if (myApp.ent.status.isUserWinningOrWon()) {
          msg = pendingItem.itemMessage;
        }
      } else {
        msg = pendingItem.itemMessage;
      }
    }

    return msg;
  }
});
"use strict";

PageApp.Ent.LotTitleModel = Backbone.Model.extend({
  initialize: function initialize() {},
  extract: function extract(inPlay, silently) {
    if (!inPlay) return;
    var content = {
      title: inPlay.attributes.title,
      lotNumber: inPlay.attributes.lotNumber,
      lot: myApp.reqres.request('i16:getString', 'WebcastCodes_WC_LOT_TEXT')
    };
    this.set(content, {
      silent: silently
    });
  }
});
"use strict";

PageApp.Ent.MakeChoiceModel = Backbone.Model.extend({
  initialize: function initialize() {},
  extract: function extract(silently) {
    var buttonLabel = myApp.reqres.request('i16:getString', 'WebcastCodes_WC_CONFIRM_TEXT');
    var numbChosen = 0;
    var units = 0;
    var showNumberOfBids = myApp.ent.webcast2Settings.get('showNumberOfBids');

    for (var key in myApp.ent.inPlay.get('groupMembers')) {
      if (myApp.ent.inPlay.get('groupMembers')[key].chosen) {
        numbChosen++;
        units += myApp.ent.inPlay.get('groupMembers')[key].numberOfUnits;
      }
    }

    var value = 0;

    if (myApp.ent.inPlay.get('biddingTypeEnumId') === 1) {// one money - should never come here
    } else if (myApp.ent.inPlay.get('biddingTypeEnumId') === 2) {
      // per item
      value = units * myApp.ent.inPlay.get('ringDetails').currentBid.amount;
    } else if (myApp.ent.inPlay.get('biddingTypeEnumId') === 3) {
      // per lot
      value = numbChosen * myApp.ent.inPlay.getCurrentBidAmount();
    }

    var buttonClass = 'btn-default';

    if (numbChosen > 0) {
      buttonClass = 'btn-primary';
      buttonLabel += '<br/><span class="w2-choice-options">' + numbChosen + ' Selected = ';

      if (!myApp.ent.user.attributes.currencySymbolAsPrefix) {
        buttonLabel += myApp.utils.types.toFormattedNumber(value / 100, myApp.ent.user.attributes.thousandsSeparator) + myApp.ent.inPlay.getCurrencySymbol();
      } else {
        buttonLabel += myApp.ent.inPlay.getCurrencySymbol() + myApp.utils.types.toFormattedNumber(value / 100, myApp.ent.user.attributes.thousandsSeparator);
      }

      buttonLabel += '</span>';
    }

    var content = {
      currentBidMessage: myApp.reqres.request('i16:getString', 'WebcastCodes_WC_HIGHEST_BID_TEXT'),
      currentFormatted: myApp.ent.inPlay.attributes.ringDetails.currentBid.amountFormatted,
      currentUsername: myApp.ent.inPlay.attributes.ringDetails.currentBid.bidderName,
      currentBidCount: showNumberOfBids ? '- ' + myApp.ent.inPlay.getBidCountMessage() : '',
      buttonLabel: buttonLabel,
      buttonClass: buttonClass
    };
    this.set(content, {
      silent: silently
    });
  }
});
"use strict";

PageApp.Ent.MakeNumericalChoiceModel = Backbone.Model.extend({
  initialize: function initialize() {},
  extract: function extract(silently) {
    var buttonLabel = myApp.reqres.request('i16:getString', 'WebcastCodes_WC_CONFIRM_TEXT');
    var highBidLabel = myApp.reqres.request('i16:getString', 'WebcastCodes_WC_HIGHEST_BID_TEXT');
    var numbChosen = 0;
    var message = '';
    var units = 0;

    var max = _.size(myApp.ent.inPlay.get('groupMembers'));

    var min = myApp.ent.inPlay.get('minimum');

    try {
      numbChosen = myApp.utils.types.toNumber(this.ui.numberRequired.val());

      for (var i = 0; i < numbChosen; i++) {
        units += myApp.ent.inPlay.get('groupMembers')[i].numberOfUnits;
      }

      var value = 0;

      if (myApp.ent.inPlay.get('biddingTypeEnumId') === 2) {
        // per item
        value = units * myApp.ent.inPlay.getCurrentBidAmount();
      } else if (myApp.ent.inPlay.get('biddingTypeEnumId') === 3) {
        // per lot
        value = numbChosen * myApp.ent.inPlay.getCurrentBidAmount();
      }

      if (numbChosen > 0) {
        message = numbChosen + ' = ' + myApp.ent.inPlay.getCurrencySymbol() + ' ' + value / 100;
      }
    } catch (ex) {
      message = myApp.reqres.request('i16:getString', {
        code: 'WebcastCodes_WC_NUMERIC_INSTRUCTION',
        substitutions: [min, max]
      });
    }

    var content = {
      minimum: min,
      numbChosen: numbChosen,
      groupMembers: max,
      placeHolderMessage: message,
      buttonLabel: buttonLabel,
      currentBidMessage: highBidLabel,
      currentFormatted: myApp.ent.inPlay.attributes.ringDetails.currentBid.amountFormatted
    };
    this.set(content, {
      silent: silently
    });
  }
});
"use strict";

PageApp.Ent.MaxBidModel = Backbone.Model.extend({
  initialize: function initialize() {},
  extract: function extract(silently) {
    var maxBidFormatted = myApp.ent.inPlay.attributes.userBiddingData.maxBidAmountFormatted;
    var buttonText = myApp.reqres.request('i16:getString', 'WebcastCodes_WC_CONFIRM_TEXT');
    var placeHolderMessage = myApp.reqres.request('i16:getString', 'WebcastCodes_WC_ENTER_MAX_BID_TEXT');
    var currentMaxBidText = myApp.reqres.request('i16:getString', 'WebcastCodes_WC_CURRENT_MAX_BID_TEXT'); // BD-3635: Request has been made to remove the max bid field from the webcast inplay item across the board. Auctioneers reported it being used
    // exclusively instead of the bid button by some users
    // Initially, this will be implemented by hiding the field in case anybody shouts with a legitimate reason for it to be reinstated.
    // (rather than ripping out all related code at this stage). The field is hidden (display:none) within the template.

    var displayMaxBidBox = 'inline';
    var displayMaxBid = maxBidFormatted ? 'inline-block' : 'none';
    var buttonState = 'disabled'; // TODO determine initial state

    var inputState = '';

    if (!myApp.ent.user.isLoggedIn() || myApp.ent.userRegistration.attributes.status !== 2) {
      buttonState = 'disabled';
      inputState = 'disabled';
      displayMaxBidBox = 'none';
    }

    var content = {
      displayMaxBidBox: displayMaxBidBox,
      displayMaxBid: displayMaxBid,
      maxBidFormatted: maxBidFormatted,
      buttonState: buttonState,
      inputState: inputState,
      placeHolderMessage: placeHolderMessage,
      buttonText: buttonText,
      currentMaxBidText: currentMaxBidText
    };
    this.set(content, {
      silent: silently
    });
  }
});
"use strict";

PageApp.Ent.MessagesModel = Backbone.Model.extend({
  initialize: function initialize() {},
  extract: function extract(inPlay, silently) {
    if (!inPlay) return;
    var myClass = '';
    var winningWonClass = 'alert alert-success';
    var losingLostClass = 'alert alert-danger';
    var infoRequiredClass = 'alert alert-info';
    var warningAccountClass = 'alert alert-warning';
    var userBiddingData = inPlay.getUserBiddingData(inPlay.attributes);
    var userStatus = myApp.ent.userRegistration.attributes.status;
    var message = userBiddingData ? userBiddingData.statusMessage : '';

    if (inPlay.isWinningOrWon()) {
      myClass = winningWonClass;
    } else if (inPlay.isLosingOrLost()) {
      myClass = losingLostClass;
    } else if (userBiddingData.userBiddingStatus === 6 || userBiddingData.userBiddingStatus === 7 || userBiddingData.userBiddingStatus === 9) {
      myClass = losingLostClass;
    } else {
      myClass = 'alert alert-info';
    }

    if (userStatus === 6 || userStatus === 4 || userStatus === 0) {
      myClass = infoRequiredClass;
    }

    if (userStatus === 3) {
      myClass = warningAccountClass;
    }

    var content = {
      myClass: myClass,
      message: message
    };
    this.set(content, {
      silent: silently
    });
  }
});
"use strict";

PageApp.Ent.InPlay = Backbone.Model.extend({});
PageApp.Ent.InPlayImages = Backbone.Model.extend({});
PageApp.Ent.Webcast2Settings = Backbone.Model.extend({});
"use strict";

PageApp.Views.AppMessageView = Backbone.Marionette.ItemView.extend({
  getTemplate: function getTemplate() {
    return hbs.templates.appMessage;
  },
  modelEvents: {
    'change': 'render'
  },
  events: {
    'click .x-close-auction-message': 'handleCloseMessage',
    'click #auctionMessage .close': 'handleMessageClose'
  },
  ui: {
    messageContainer: '.w2-message-auction-level'
  },
  onRender: function onRender() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 1) {
        $('.w2-message-auction-level').addClass('w2-message-auction-level-fixed');
      } else {
        $('.w2-message-auction-level').removeClass('w2-message-auction-level-fixed');
      }
    });
  },
  serializeData: function serializeData() {
    var messageText;
    var messageModel = this.model.get('messageModel');

    if (messageModel) {
      if (messageModel.messageTarget === 'WINNING_BIDDER') {
        // specific bidder
        if (myApp.ent.status.isUserWinningOrWon()) {
          messageText = messageModel.messageText;
        }
      } else {
        messageText = messageModel.messageText;
      }
    }

    var messageTextDisable = messageText && messageText.trim().length > 0 ? '' : 'hidden';
    return {
      messageText: messageText,
      messageTextDisable: messageTextDisable
    };
  },
  handleMessageClose: function handleMessageClose() {
    $('#auctionMessage').hide();
  }
});
"use strict";

PageApp.Views.AuctionTitleView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.auctionTitle
});
"use strict";

PageApp.Views.SellingItemView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.sellingItemView,
  templateClosed: hbs.templates.closedItemView,
  templateGroupMember: hbs.templates.groupedItemView,
  className: 'list-group-item',
  getTemplate: function getTemplate() {
    return hbs.templates.sellingItemView;
  },
  initialize: function initialize(options) {
    this.options = options;
  },
  events: {
    'click .x-group-display': 'handleToggleGroup',
    'click .x-group-member-select': 'handleChooseMember',
    'click .x-show-item-detail': 'handleItemDetail',
    'click .x-close-slide-menu': 'handleCloseSlideMenu'
  },
  modelEvents: {
    'change': 'render'
  },
  render: function render() {
    var item = this.model.attributes;
    if (!item.itemStatusId) return;
    var options = {
      groupButtonHidden: true,
      displayItem: ''
    };
    var showAsOpen = false;

    if (item.group) {
      options.groupButtonHidden = false;
      options.groupButtonLabel = myApp.ent.stateData.isGroupShowing(item.itemId) ? 'Hide Group' : 'Show Group';
      options.groupDisplay = myApp.ent.stateData.isGroupShowing(item.itemId);

      if (myApp.ent.inPlay && myApp.ent.inPlay.get('itemId') === item.itemId && myApp.ent.inPlay.isWon() && myApp.ent.auction.inPlayEndedWaitingOrChosen()) {
        options.groupDisplay = true;
        options.groupButtonLabel = 'Hide Group';
      }

      if (item.itemId === myApp.ent.inPlay.get('itemId') && myApp.ent.inPlay.isWinningOrWon() && myApp.ent.auction.inPlayEndedWaitingOrChosen()) {
        myApp.ent.stateData.addGroupShowing(item.itemId);
        showAsOpen = true;
      }
    }

    if (item.itemStatusId === 4 || showAsOpen) {
      options.displayItem = myApp.ent.stateData.get('currentTab') === 'closed' ? 'hidden' : '';
      this.renderSelling(item, options);
    } else {
      if (item.inPlay && myApp.ent.inPlay.isWinningOrWon() && myApp.ent.auction.inPlayEndedWaitingOrChosen()) {
        options.displayItem = myApp.ent.stateData.get('currentTab') === 'closed' ? 'hidden' : '';
        this.renderSelling(item, options);
      } else {
        options.displayItem = myApp.ent.stateData.get('currentTab') === 'selling' ? 'hidden' : '';
        this.renderClosed(item, options);
      }
    }

    if (options.displayItem === 'hidden') {
      this.$el.hide();
    } else {
      this.$el.show();
    } // Add a class to the item's div added by marionette for future use.


    this.$el.addClass('x-lot-outer-' + item.lotNumber);
    return this;
  },
  renderClosed: function renderClosed(item, options) {
    var showWinningBidAmount = myApp.ent.webcast2Settings.get('showWinningBidAmount') && item.itemStatusId === 6;
    var userBiddingData = item.userBiddingData;
    var currentBidText = myApp.reqres.request('i16:getString', 'WebcastCodes_WC_CURRENT_BID_CLOSED_TEXT') + ':';

    if (item.itemStatusId === 9) {
      currentBidText = myApp.reqres.request('i16:getString', 'WebcastCodes_WC_PASSED_TEXT');
    } else if (!showWinningBidAmount) {
      currentBidText = '';
    }

    var lotLabel = myApp.reqres.request('i16:getString', 'WebcastCodes_WC_LOT_TEXT');
    var hideGroupUnits;
    var itemNumberOfUnits;

    if (item.group || item.numberOfUnits < 2) {
      hideGroupUnits = 'hidden';
    } else {
      itemNumberOfUnits = item.numberOfUnits;
    }

    var content = {
      id: item.itemId,
      imageThumbSrc: item.imageSrc ? item.imageSrc : '?',
      lotNumber: item.lotNumber,
      lotCurrentBid: showWinningBidAmount ? item.amountHighestBidFormatted : '',
      lotTitle: item.title,
      lotSummary: item.summary,
      displayItem: options.displayItem,
      groupDisplay: options.groupDisplay,
      groupButtonHidden: options.groupButtonHidden,
      groupButtonLabel: options.groupButtonLabel,
      currentBidText: currentBidText,
      lot: lotLabel,
      showDetailsClass: item.group ? 'x-group-display' : 'x-show-item-detail',
      wonLostMessage: userBiddingData ? userBiddingData.wonLostMessage : '',
      itemNumberOfUnits: itemNumberOfUnits,
      hideGroupUnits: hideGroupUnits
    };
    this.$el.html(this.templateClosed(content));
    this.$el.addClass('w2-sell-item-closed').removeClass('w2-sell-item-inplay').removeClass('active');
    this.renderGroupMembers(item, false);
    return this;
  },
  renderSelling: function renderSelling(item, options) {
    var toggleSellTag;
    var hasBidActions = false;
    var buttonText = myApp.reqres.request('i16:getString', 'WebcastCodes_WC_CONFIRM_TEXT');
    var placeHolderMessage = myApp.reqres.request('i16:getString', 'WebcastCodes_WC_ENTER_MAX_BID_TEXT');
    var currentBidText = myApp.reqres.request('i16:getString', 'WebcastCodes_WC_CURRENT_BID_TEXT') + ':';
    var currentMaxBidText = '';
    var currentMaxBidAmount = '';
    var itemNumberOfUnits;
    var hideGroupUnits;
    var activeClass = 'w2-sell-item-inplay active';
    var inactiveClass = 'w2-sell-item-selling';
    var userBiddingData = item.userBiddingData;

    if (userBiddingData && userBiddingData.maxBidAmountFormatted) {
      currentMaxBidText = myApp.reqres.request('i16:getString', 'WebcastCodes_WC_CURRENT_MAX_BID_TEXT') + ':';
      currentMaxBidAmount = userBiddingData.maxBidAmountFormatted;
    } else if (item.maxBidHistory) {
      for (var key in item.maxBidHistory) {
        var maxBid = item.maxBidHistory[key];

        if (myApp.ent.user.get('id') === maxBid.userId) {
          currentMaxBidText = myApp.reqres.request('i16:getString', 'WebcastCodes_WC_CURRENT_MAX_BID_TEXT') + ':';
          currentMaxBidAmount = maxBid.amountFormatted;
        }
      }
    }

    if (item.ringDetails) {
      toggleSellTag = 'inline-block';
    } else {
      toggleSellTag = 'none';
      hasBidActions = true;
    }

    var imageSrc = item.imageSrc;

    if (item.group) {
      hideGroupUnits = 'hidden';

      try {
        imageSrc = item.groupMembers[0].imageSrc;
      } catch (e) {}
    }

    if (item.numberOfUnits < 2) {
      hideGroupUnits = 'hidden';
    } else {
      itemNumberOfUnits = item.numberOfUnits;
    }

    if (!myApp.ent.user.isLoggedIn()) {
      hasBidActions = false;
    }

    var content = {
      id: item.itemId,
      imageThumbSrc: imageSrc || '?',
      lotNumber: item.lotNumber,
      currentBidText: currentBidText,
      lotCurrentBid: item.amountHighestBidFormatted,
      lotTitle: item.title,
      lotSummary: item.summary,
      toggleSellTag: toggleSellTag,
      lotSellingStatus: item.itemStatusId,
      hasBidActions: hasBidActions,
      buttonText: buttonText,
      placeHolderMessage: placeHolderMessage,
      displayItem: options.displayItem,
      currentMaxBidText: currentMaxBidText,
      currentMaxBidAmount: currentMaxBidAmount,
      groupDisplay: options.groupDisplay,
      groupButtonLabel: options.groupButtonLabel,
      groupButtonHidden: options.groupButtonHidden,
      itemNumberOfUnits: itemNumberOfUnits,
      hideGroupUnits: hideGroupUnits,
      lot: myApp.reqres.request('i16:getString', 'WebcastCodes_WC_LOT_TEXT'),
      showDetailsClass: item.group ? 'x-group-display' : 'x-show-item-detail'
    };
    this.$el.html(this.template(content));
    this.$el.removeClass('w2-sell-item-closed');

    if (item.ringDetails) {
      this.$el.addClass(activeClass).removeClass(inactiveClass);
    } else {
      this.$el.addClass(inactiveClass).removeClass(activeClass);
    }

    var choice = myApp.ent.auction.get('inPlayEndedWaitingChoice') && item.choiceEnumId === 2;
    this.renderGroupMembers(item, choice);
    return this;
  },
  renderGroupMembers: function renderGroupMembers(item, choice) {
    if (item.group) {
      var $container = this.$el.find('#groupClosedOfItems_' + item.itemId);

      for (var key in item.groupMembers) {
        var groupMember = item.groupMembers[key];
        var itemNumberOfUnits = groupMember.numberOfUnits;
        var content = {
          groupMemberId: groupMember.itemId,
          imageThumbSrc: groupMember.imageSrc ? groupMember.imageSrc : '?',
          lotNumber: groupMember.lotNumber,
          lotTitle: groupMember.title,
          lotSummary: groupMember.summary,
          groupMemberActive: choice,
          itemNumberOfUnits: itemNumberOfUnits,
          lot: myApp.reqres.request('i16:getString', 'WebcastCodes_WC_LOT_TEXT')
        };
        $container.append(this.templateGroupMember(content));
      }
    }
  },
  handleToggleGroup: function handleToggleGroup(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    var itemId = this.model.get('itemId');
    if ($target.data('id') !== itemId) throw new Error('this isn\'t the view clicked on!');

    if (myApp.ent.stateData.isGroupShowing(itemId)) {
      myApp.ent.stateData.removeGroupShowing(itemId);
      this.$el.removeClass('w2-sell-item-group-bg');
    } else {
      myApp.ent.stateData.addGroupShowing(itemId);
      this.$el.addClass('w2-sell-item-group-bg');
    }

    this.render();
    myApp.vent.trigger('items:notifyRequireSellingItemReformat');
  },
  handleItemDetail: function handleItemDetail(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    var itemId = $target.data('id');
    myApp.vent.trigger('items:itemDetailsRequest', {
      itemId: itemId
    });
  },
  handleChooseMember: function handleChooseMember(e) {
    var $target = $(e.currentTarget);
    var itemId = $target.data('id');
    var tickAll = $target.is(':checked');

    if (e.shiftKey) {
      var $potentialItems = this.$el.find('.x-group-member-select');
      var started = false;
      var finished = false;

      for (var i = $potentialItems.length - 1; i >= 0 && !finished; i--) {
        var choiceItem = $potentialItems.get(i);

        if (choiceItem.dataset.id === itemId) {
          started = true;
        } else if (started) {
          if (choiceItem.checked !== tickAll) {
            choiceItem.checked = tickAll;
          } else {
            finished = true;
          }
        }
      }
    } // Note: can't reuse $potentialItems so find again.


    this.$el.find('.x-group-member-select').each(function () {
      // var member = _.findWhere(myApp.ent.inPlay.get('groupMembers'), {
      //   itemId: $(this).data('id')
      // });

      var member = myApp.ent.inPlay.get('groupMembers').map(function(members) {
        members.itemId === $(this).data('id')
      });

      member.chosen = $(this).prop('checked');
    }, this);
    myApp.vent.trigger('webcast:inplay:choice:changed', {
      amount: myApp.ent.stateData
    });
  }
});
"use strict";

PageApp.Views.ItemDetailsView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.itemDetailsView,
  initialize: function initialize(options) {
    this.options = options;
  },
  ui: {
    openLightbox: '.x-open-light-box'
  },
  events: {
    'click .x-close-slide-menu': 'handleCloseSlideMenu',
    'click .x-change-tab-details': 'handleTabChange',
    'click .x-open-light-box': 'handleOpenLightbox'
  },
  onRender: function onRender() {
    var location = this.model.itemDetails.itemLocationModel;

    if (!location.validLatLong) {
      this.$el.find('#itemDetailsLocationLink').hide();
    }

    return false;
  },
  serializeData: function serializeData() {
    var item = this.model;
    var itemDetails = item.itemDetails;
    var documents = itemDetails.itemDocumentsModel.documents;
    var images = itemDetails.itemImagesModel.images;
    var videos = itemDetails.itemVideosModel.videos;
    var lotNumber = item.lotNumber;
    var theImages = [];
    var imageLightboxSrc;
    var imagePreviewSrc = '?';
    var theDocs = [];
    var theVideos = [];

    for (var key in images) {
      var image = images[key];

      if (key === '0') {
        imagePreviewSrc = image.previewSrc;
        imageLightboxSrc = image.lightboxSrc;
      }

      theImages.push({
        imageId: image.imageId,
        lotNumber: image.lotNumber,
        imageThumbSrc: image.thumbSrc,
        imageLightboxSrc: image.lightboxSrc,
        imagePreviewSrc: image.previewSrc
      });
    }

    for (key in documents) {
      var doc = documents[key];
      var docIcon;
      var label = doc.label;
      var docFilename = doc.originalFilename;
      if (label === docFilename) label = '';
      var docType = doc.originalFilename.substr(doc.originalFilename.length - 3);

      if (docType === 'doc' || docType === 'ocx') {
        docIcon = 'word';
      }

      if (docType === 'pdf') {
        docIcon = 'pdf';
      }

      if (docType === 'xls' || docType === 'lsx' || docType === 'csv') {
        docIcon = 'excel';
      }

      if (docType === 'ppt' || docType === 'ptx') {
        docIcon = 'powerpoint';
      }

      if (docType === 'txt' || docType === 'rtf') {
        docIcon = 'text';
      }

      theDocs.push({
        docPreviewSrc: doc.documentSrc,
        docId: doc.documentId,
        docFileName: docFilename,
        docIcon: docIcon,
        label: label
      });
    }

    for (key in videos) {
      var video = videos[key];
      var videoLabel = video.label;
      var link = 'https://www.youtube.com/embed/' + video.link + '?rel=0';
      if (!videoLabel) videoLabel = link;
      theVideos.push({
        link: link,
        label: videoLabel
      });
    }

    var address = itemDetails.itemLocationModel;
    var content = {
      mapsApiKey: myApp.ent.config.getMapsAPIKey(),
      modal: this.options.modal,
      imagePreviewSrc: imagePreviewSrc,
      theImages: theImages,
      theDocs: theDocs,
      theVideos: theVideos,
      lotNumber: lotNumber,
      imageLightboxSrc: imageLightboxSrc,
      title: item.title,
      description: item.description,
      summary: item.summary,
      imageSrc: item.imageSrc ? item.imageSrc : '?',
      // Need to output ? for blank src otherwise img onerror not triggered in FF
      addressLines: address.addressLines,
      city: address.city,
      county: address.county,
      country: address.country,
      postcode: address.postcode,
      latLong: address.validLatLong,
      lot: myApp.reqres.request('i16:getString', 'WebcastCodes_WC_LOT_TEXT')
    };
    return content;
  },
  handleCloseSlideMenu: function handleCloseSlideMenu(e) {
    e.preventDefault();
    this.$el.empty();
    $('body').removeClass('smr-open');
    this.$el.find('#slideMenuMask').removeClass('mask');
    this.$el.empty(); // Reformat the selling items incase some selling activity has taken place underneath the ItemDetailsView

    myApp.vent.trigger('items:notifyRequireSellingItemReformat');
    myApp.vent.trigger('items:requireRefreshSellingClosedList', myApp.ent.stateData.get('currentTab'));
  },
  handleOpenLightbox: function handleOpenLightbox(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    $target.ekkoLightbox({
      no_related: true,
      onShown: function onShown() {
        var lightbox = this;
        myApp.vent.on('lightbox:close', function () {
          lightbox.close();
        });
      }
    });
    return false;
  }
});
"use strict";

PageApp.Views.ItemsLayoutView = Backbone.Marionette.LayoutView.extend({
  getTemplate: function getTemplate() {
    return hbs.templates.itemsLayout;
  },
  regions: {
    tabRegion: '#tabView',
    sellingRegion: '#sellingView',
    saleInfoRegion: '#saleInfoView',
    itemDetailsRegion: '#itemDetailsView'
  },
  initialize: function initialize() {},
  ui: {
    gotoLotListItem: '.w2-gotolot',
    gotoLotInput: '.w2-gotolot-input'
  },
  events: {
    'click .x-change-tab': 'handleTabChange',
    'keyup .w2-gotolot-input': 'handleGotoLot',
    'click .x-saleinfo-modal': 'handleSaleInfoShow'
  },
  serializeData: function serializeData() {
    return {
      gotoLotText: myApp.reqres.request('i16:getString', 'WebcastCodes_WC_GOTO_LOT_TEXT')
    };
  },
  handleTabChange: function handleTabChange(e) {
    var $target = $(e.currentTarget);
    var action = $target.data('action');
    myApp.vent.trigger('notifyTabChange', action);

    if (action === 'saleInfo') {
      this.ui.gotoLotListItem.hide();
    } else {
      this.ui.gotoLotListItem.show();
    }
  },
  handleGotoLot: function handleGotoLot(e) {
    e.preventDefault();

    if (e.keyCode === 13) {
      var lotNumber = this.ui.gotoLotInput.val().toUpperCase();
      var target = $('.x-lot-' + lotNumber + ':visible');

      if (target.length > 0) {
        var newScrollTop = target.offset().top;
        $('html, body').animate({
          scrollTop: newScrollTop
        }, 1000);
        myApp.vent.trigger('ui:notification', {
          text: myApp.reqres.request('i16:getString', 'WebcastCodes_WC_SCROLLED_TO_LOT') + ' ' + lotNumber + '.',
          time: 1000
        });
      } else {
        myApp.vent.trigger('ui:notification', {
          text: myApp.reqres.request('i16:getString', 'WebcastCodes_WC_UNABLE_TO_FIND_LOT') + ' ' + lotNumber + '.',
          time: 1000
        });
      }
    }

    return false;
  },
  handleSaleInfoShow: function handleSaleInfoShow(e) {
    e.preventDefault();
    myApp.ent.saleInfo.set('source', 'webcast');
    myApp.vent.trigger('saleinfo:display', {
      saleInfoModel: myApp.ent.saleInfo
    });
    return false;
  }
});
"use strict";

PageApp.Views.NoClosedItemView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.noClosedItemView,
  serializeData: function serializeData() {
    var content = {
      noClosedItemsMessage: myApp.reqres.request('i16:getString', 'WebcastCodes_WC_NO_CLOSED')
    };
    return content;
  }
});
"use strict";

PageApp.Views.NoSellingItemView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.noSellingItemView,
  serializeData: function serializeData() {
    var content = {
      noSellingItemsMessage: myApp.reqres.request('i16:getString', 'WebcastCodes_WC_ALL_CLOSED')
    };
    return content;
  }
});
"use strict";

PageApp.Views.SellingItemsView = Marionette.CollectionView.extend({
  childView: PageApp.Views.SellingItemView,
  reorderOnSort: true,
  className: 'w2-sell-item-collection list-group margin-bottom--none',
  initialize: function initialize(options) {
    this.collection = options.collection;
    this.childViewOptions = {
      strings: options.strings
    };
  },
  events: {
    'click .x-maxbid-button': 'handleMaxBidAction',
    'keyup .x-maxbid-input': 'handleInputMaxBid'
  },
  getEmptyView: function getEmptyView() {
    if (myApp.ent.stateData.isSellingTabSelected()) {
      return PageApp.Views.NoSellingItemView;
    } else if (myApp.ent.stateData.isClosedTabSelected()) {
      return PageApp.Views.NoClosedItemView;
    }
  },
  isEmpty: function isEmpty(collection) {
    var isSellingTab = myApp.ent.stateData.isSellingTabSelected();
    var isEmpty = true; // Loop thru all items in the collection or until isEmpty is false

    for (var i = 0; i < collection.length && isEmpty; i++) {
      var item = collection.models[i].attributes; // Note: collection passed from w2_items_module may contain nulls! So check for itemId.

      if (item.itemId) {
        if (isSellingTab) {
          // If we are on the selling tab then if anything is live then isEmpty is (set to) false [resulting in the loop being terminated]
          isEmpty = !item.live;
        } else {
          // If we are on the closed tab then isEmpty is (set to) false if anything is not live (i.e. is closed)  [and the loop is terminated]
          isEmpty = item.live;
        }
      }
    } // Handle special case on the selling tab.
    // All items may be closed but we don't want to call it empty if we are still waiting for a choice on the last item


    if (isSellingTab) {
      return isEmpty && !(myApp.ent.auction.inPlayEndedWaitingChoice() && myApp.ent.inPlay.isWinningOrWon());
    } else {
      return isEmpty;
    }
  },
  renderAppend: function renderAppend(page) {
    var $sicvElf = this;

    for (var key in page) {
      var item = page[key];
      var siv = new PageApp.Views.SellingItemView({
        id: 'webcasty_' + item.get('itemId'),
        className: 'row',
        parent: $sicvElf
      });
      $sicvElf.$el.append(siv.render(item).el);
    }

    return this;
  },
  handleInputMaxBid: function handleInputMaxBid(e) {
    e.preventDefault();
    var $maxBidInput = $(e.currentTarget);
    if ($maxBidInput.is(':disabled')) return;
    var itemId = $maxBidInput.data('id'); // Get the confirm button corresponding to the input field

    var $maxBidConfirm = $('#maxBidConfirm-' + itemId);
    var allowSubmit = myApp.ent.userRegistration && myApp.ent.userRegistration.get('registered');

    if (e.keyCode === 13 && allowSubmit) {
      this.handleMaxBidAction(e);
    } else {
      $maxBidInput.val(myApp.utils.types.toFormattedNumberLimited($maxBidInput.val(), myApp.ent.user.attributes.thousandsSeparator));

      if ($maxBidInput.val().length > 0 && allowSubmit) {
        $maxBidConfirm.removeAttr('disabled');
        $maxBidConfirm.removeClass('btn-default');
        $maxBidConfirm.addClass('btn-primary');
      } else {
        $maxBidConfirm.attr('disabled', 'disabled');
      }
    }

    return false;
  },
  handleMaxBidAction: function handleMaxBidAction(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    if ($target.is(':disabled')) return;
    var itemId = $target.data('id'); // Get the maxbid input corresponding to the button

    var $maxBidConfirm = $('#maxBidInput-' + itemId);
    var amount = myApp.utils.types.toNumericCharsOnly($maxBidConfirm.val(), myApp.ent.user.attributes.thousandsSeparator);

    if (amount.length > 0) {
      amount = amount * 100;
      myApp.vent.trigger('items:placeMaxBid', {
        itemId: itemId,
        amount: amount
      });
    }

    return false;
  }
});
"use strict";

PageApp.Ent.PageInfo = Backbone.Model.extend({
  initialize: function initialize() {}
});
"use strict";

PageApp.Ent.SellingItems = Backbone.Collection.extend({
  model: PageApp.Ent.SellingItem,
  initialize: function initialize() {
    this.on('change:ringDetails change:index', this.sort, this);
  },
  // sort so that any in the ring are moved to the top
  comparator: function comparator(a, b) {
    var isSellingA = a.attributes.itemStatusId === 4 || a.inPlay && myApp.ent.inPlay.isWinningOrWon() && myApp.ent.auction.inPlayEndedWaitingOrChosen();
    var isSellingB = b.attributes.itemStatusId === 4 || b.inPlay && myApp.ent.inPlay.isWinningOrWon() && myApp.ent.auction.inPlayEndedWaitingOrChosen();

    if (a.attributes.ringDetails && isSellingA) {
      if (b.attributes.ringDetails) {
        return 0;
      }

      return -1;
    } else {
      if (b.attributes.ringDetails && isSellingB) {
        return 1;
      }

      if (a.attributes.index < b.attributes.index) {
        return -1;
      }

      return 1;
    }
  },
  actions: {
    sellingItemsRemainder: function sellingItemsRemainder() {
      return myApp.utils.ajax.getApiEndpoint('webcast2/sellingItemsRemainder');
    }
  },
  totalItemCount: function totalItemCount() {
    var total = 0;

    for (var key in this.models) {
      var itemOrGroup = this.models[key];
      var groupMembers = itemOrGroup.attributes.groupMembers;
      total += groupMembers ? groupMembers.length : 1;
    }

    return total;
  },
  loadRemainingItems: function loadRemainingItems() {
    // if the initial selling items provided within models is the full initial set then there may be more so retrieve them
    if (this.totalItemCount() >= myApp.ent.config.get('itemsPageSize')) {
      var params = [myApp.ent.auction.get('auctionId')]; // Using _.bind below in order that we can refer to 'this' in doLoadRemainingItemsSuccess and we will be referring to the correct 'this'.

      myApp.utils.ajax.get(params, this.actions.sellingItemsRemainder(), _.bind(this.doLoadRemainingItemsSuccess, this));
    }
  },
  doLoadRemainingItemsSuccess: function doLoadRemainingItemsSuccess(response) {
    if (response.worked && response.models.sellingModelRemainder) {
      this.add(response.models.sellingModelRemainder.liveItems);
      myApp.vent.trigger('items:notifyRequireSellingItemReformat');
    }
  }
});
"use strict";

PageApp.Ent.StateData = Backbone.Model.extend({
  defaults: {
    'groupsShowing': {},
    'chosen': {}
  },
  initialize: function initialize() {},
  isGroupShowing: function isGroupShowing(itemId) {
    return this.attributes.groupsShowing[itemId];
  },
  addGroupShowing: function addGroupShowing(itemId) {
    this.attributes.groupsShowing[itemId] = true;
  },
  removeGroupShowing: function removeGroupShowing(itemId) {
    delete this.attributes.groupsShowing[itemId];
  },
  toggleChosen: function toggleChosen(itemId) {
    if (this.attributes.chosen[itemId]) {
      delete this.attributes.chosen[itemId];
    } else {
      this.attributes.chosen[itemId] = true;
    }
  },
  isSellingTabSelected: function isSellingTabSelected() {
    return this.get('currentTab') === 'selling';
  },
  isClosedTabSelected: function isClosedTabSelected() {
    return this.get('currentTab') === 'closed';
  }
});
"use strict";

PageApp.Controllers.WebcastItemListRouter = function (config) {
  var ent = {};
  var views = {};
  var actions = {
    placeMaxBid: myApp.utils.ajax.getApiEndpoint('webcast2/placeMaxBid'),
    retrieveItemDetails: myApp.utils.ajax.getApiEndpoint('webcast2/item')
  };

  function refreshSellingClosedList(tab) {
    switch (tab) {
      case 'selling':
        $('.w2-sell-item-inplay').show();
        $('.w2-sell-item-selling').show();
        $('.w2-sell-item-closed').hide();
        break;

      case 'closed':
        $('.w2-sell-item-inplay').hide();
        $('.w2-sell-item-selling').hide();
        $('.w2-sell-item-closed').show();
    }
  }

  function initializeViews(options) {
    views.itemsLayoutView = new PageApp.Views.ItemsLayoutView();
    views.sellingItemsView = new PageApp.Views.SellingItemsView({
      viewData: myApp.ent.stateData,
      collection: ent.sellingItems
    });
  }

  function display(region) {
    region.show(views.itemsLayoutView);
    views.itemsLayoutView.sellingRegion.show(views.sellingItemsView);
  }

  function initializeModels(models) {
    var requireRerender;
    if (!models) return;

    if (models.sellingModel) {
      if (!ent.sellingItems) ent.sellingItems = new PageApp.Ent.SellingItems();

      for (var key in models.sellingModel.liveItems) {
        var sellingItem = models.sellingModel.liveItems[key];
        sellingItem.userBiddingData = myApp.ent.inPlay.getUserBiddingData(sellingItem);
      }

      ent.sellingItems.set(models.sellingModel.liveItems);
      if (!ent.pageInfo) ent.pageInfo = new PageApp.Ent.PageInfo();
      ent.pageInfo.set(models.sellingModel.paginationModel);
    }

    if (models.saleInfoModel) {
      if (!myApp.ent.saleInfo) myApp.ent.saleInfo = new PageApp.Ent.BasicEntity();
      myApp.ent.saleInfo.set(models.saleInfoModel);
    }

    if (models.choicesModel) {
      if (!ent.choices) ent.choices = new PageApp.Ent.Choices();
      ent.choices.set(models.choicesModel);
    } // Note: The sellingItemModel clause needs to come before the inPlayModel clause because when a 'pass and next' is performed
    // within the admin console, models contains both. If sellingItemModel is not processed first then the inPlayModel clause sees
    // that there are two inPlay items and takes unnecessary remedial action.


    if (models.sellingItemModel) {
      // It was found that 'ent.sellingItems.add(models.sellingItemModel, {merge: true})' could trigger unnecessary
      // re-rendering of the collection (expensive and slow for large auctions e.g. 1000 items).
      // Appears to be due to a sort being triggered on the collection (within marionette) so we prevent sort
      // unless a new item is being added.
      var existingItem = ent.sellingItems.get(models.sellingItemModel.itemId);
      var requireSort = !existingItem || (!existingItem.ringDetails || !models.sellingItemModel.ringDetails) && existingItem.ringDetails !== models.sellingItemModel.ringDetails; // Merge the item in to the collection or add if not exists

      ent.sellingItems.add(models.sellingItemModel, {
        merge: true,
        sort: requireSort
      }); // This lack of re-rendering however does cause a problem when we are on the closed tab with only one closed item.
      // If this item is re-offered, passed then re-offered, the empty view is not replaced correctly
      // so we check for this situation and re-render if required.

      requireRerender = $('.w2-empty-view').length > 0 && views.sellingItemsView && !views.sellingItemsView.isEmpty(views.sellingItemsView.collection);

      if (requireRerender) {
        if (console.log) console.log('Perform explicit re-render.');
        views.sellingItemsView.render();
      }
    } // Note: The sellingItemModel clause needs to come before the inPlayModel. See comment above.


    if (models.inPlayModel && models.inPlayModel.itemId) {
      // It was found that 'ent.sellingItems.add(models.inPlayModel, {merge: true})' would trigger
      // re-rendering of the collection. Appears to be due to the collection being sorted.
      // We therefore disable sort as this is only necessary when a new item is being added and the inPlay item
      // should never be new.
      ent.sellingItems.add(models.inPlayModel, {
        merge: true,
        sort: false
      }); // This lack of re-rendering however does cause a problem when we are on the last item which is sold and then the sale is undone.
      // The empty view is not replaced correctly so we check for this situation and re-render if required.

      requireRerender = $('.w2-empty-view').length > 0 && views.sellingItemsView && !views.sellingItemsView.isEmpty(views.sellingItemsView.collection);

      if (requireRerender) {
        if (console.log) console.log('Perform explicit re-render.');
        views.sellingItemsView.render();
      } // If the admin moves too quickly through the items, it is possible for the sellingItem models to become corrupted.
      // Items that are no longer inPlay still retain their ringDetails property. This causes multiple inplay items to
      // be rendered over each other on the page with the correct inPlay item often being obscured.
      // If this situation is discovered then correct the item models and re-render.


      var $inPlay = $('.w2-sell-item-inplay');

      if ($inPlay.length >= 2) {
        if (console.log) console.log('More than one inPlay item rendered!');
        $inPlay.each(function () {
          var itemModel = ent.sellingItems.get($(this).data('id'));

          if (itemModel.get('itemId') !== myApp.ent.inPlay.id) {
            itemModel.set('ringDetails', null);
          }

          views.sellingItemsView.children.findByModel(itemModel).render();
        });
      }
    }

    if (models.inPlayImagesModel) {
      if (!ent.inPlayImages) ent.inPlayImages = new PageApp.Ent.InPlayImages(models.inPlayImagesModel);
      ent.inPlayImages.set(models.inPlayImagesModel);
    }
  }

  function notifyModelsChange(response) {
    var itemModel, key, sellingItemModel, groupIdToRemove, sellingItem;

    switch (response.code) {
      case myApp.ent.status.getRabbitResponseByName('ADMIN_AUCTION_ACTION_GROUP_CREATE').id:
        // models.sellingItemModel is the new group - remove the group members and re-render...
        sellingItemModel = response.models.sellingItemModel;

        for (key in sellingItemModel.groupMembers) {
          ent.sellingItems.remove(sellingItemModel.groupMembers[key].itemId);
        }

        ent.sellingItems.add(sellingItemModel);
        myApp.vent.trigger('items:notifyRequireSellingItemReformat');
        break;

      case myApp.ent.status.getRabbitResponseByName('ADMIN_AUCTION_ACTION_GROUP_CREATE_INPLAY').id:
        groupIdToRemove = response.groupIdToRemove;
        ent.sellingItems.remove(groupIdToRemove);
        sellingItemModel = response.models.sellingItemModel;

        for (key in sellingItemModel.groupMembers) {
          ent.sellingItems.remove(sellingItemModel.groupMembers[key].itemId);
        }

        ent.sellingItems.add(sellingItemModel);
        myApp.vent.trigger('items:notifyRequireSellingItemReformat');
        break;

      case myApp.ent.status.getRabbitResponseByName('ADMIN_RING_ACTION_CHOICES_CONFIRMED').id:
        groupIdToRemove = response.groupIdToRemove;
        ent.sellingItems.remove(groupIdToRemove);
        sellingItemModel = response.models.sellingItemModel; // this is the sold group - (is possible its a group of 1 item)!

        ent.sellingItems.add(sellingItemModel);
        ent.sellingItems.add(response.models.inPlayModel);
        myApp.vent.trigger('items:notifyRequireSellingItemReformat');
        break;

      case myApp.ent.status.getRabbitResponseByName('ADMIN_AUCTION_ACTION_UNGROUPED').id:
        var groupId = response.models.sellingModel.xtraId;
        var models = response.models.sellingModel.liveItems;
        ent.sellingItems.remove(groupId);
        ent.sellingItems.add(models);
        myApp.vent.trigger('items:notifyRequireSellingItemReformat');
        break;

      case myApp.ent.status.getRabbitResponseByName('PUBLIC_MAX_BID').id:
        sellingItemModel = response.models.sellingItemModel;

        if (sellingItemModel) {
          // The SellingItemView listens to model change events and will re-render automatically.
          ent.sellingItems.get(sellingItemModel.itemId).set(sellingItemModel);
        }

        break;

      case myApp.ent.status.getRabbitResponseByName('ADMIN_ITEM_CHANGE').id:
        var itemModels = response.models.amendedItemsModel.amendedItems;
        var newItemsAdded = false;

        for (key in itemModels) {
          sellingItem = ent.sellingItems.get(itemModels[key].itemId);

          if (sellingItem) {
            sellingItem.set(itemModels[key], {
              silent: true
            });
            views.sellingItemsView.children.findByModel(sellingItem).render();
          } else {
            ent.sellingItems.add(itemModels[key]);
            newItemsAdded = true;
          }

          if (newItemsAdded) {
            views.sellingItemsView.render();
          }
        }

        break;

      case myApp.ent.status.getRabbitResponseByName('ADMIN_RING_ACTION_SEND_IN').id:
        initializeModels(response.models);
        myApp.vent.trigger('items:notifyRequireSellingItemReformat');
        views.sellingItemsView.collection.sort();
        break;

      case myApp.ent.status.getRabbitResponseByName('ADMIN_AUCTION_ACTION_GROUP_EDITED').id:
        // picks out a child collection view and re-renders it!
        itemModel = response.models.inPlayModel && response.models.inPlayModel.itemId ? response.models.inPlayModel : response.models.sellingItemModel;
        sellingItem = ent.sellingItems.get(itemModel.itemId);
        sellingItem.set('title', itemModel.title, {
          silent: false
        });
        views.sellingItemsView.children.findByModel(sellingItem).render();
        break;

      case myApp.ent.status.getRabbitResponseByName('ADMIN_RING_ACTION_SELL_IT').id:
        // picks out a child collection view and re-renders it!
        itemModel = response.models.inPlayModel;
        var sellModel = response.models.sellModel;
        sellingItem = ent.sellingItems.get(itemModel.itemId);

        if (sellingItem.get('itemId') !== myApp.ent.inPlay.get('itemId')) {
          throw new Error('the sold item is expected to be the in-play item.');
        }

        sellingItem.set(itemModel); // views.sellingItemsView.children.findByModel(sellingItem).render();

        myApp.vent.trigger('items:notifyRequireSellingItemReformat'); // Check the item statuses in the selling list against those supplied in the sellModel and warn the user if
        // things look to have gone awry
        // Time was spent attempting to think of the most efficient way of doing this. Neater solutions that would be perfectly
        // acceptable for small auctions would become increasingly inefficient as the number of items increases.

        var statusesOnServer = sellModel.statuses;
        var allOK = true;

        if (statusesOnServer) {
          var statusesArray = [];
          var si;
          var index;
          allOK = ent.sellingItems.length === statusesOnServer.length;

          if (allOK) {
            for (index = 0; index < ent.sellingItems.length; index++) {
              si = ent.sellingItems.models[index];
              statusesArray.push(si.get('itemId') + '#' + si.get('itemStatusId'));
            }
          }

          statusesArray.sort();

          for (index = 0; index < statusesArray.length && allOK; index++) {
            allOK = statusesArray[index] === statusesOnServer[index];
          }
        }

        if (!allOK) {
          var inconsistencyWarning = myApp.reqres.request('i16:getString', {
            code: 'WebcastCodes_WC_SELLING_LIST_INCONSISTENT_WITH_SERVER'
          });
          myApp.vent.trigger('ui:notification', {
            text: inconsistencyWarning,
            sticky: false,
            time: 15000,
            level: 'warning'
          });
        }

        break;

      default:
        initializeModels(response.models);
        myApp.vent.trigger('items:notifyRequireSellingItemReformat');
    }
  }

  function initEvents() {
    myApp.vent.on('webcast:itemlist:display', function (config) {
      initializeModels(config.models);
      initializeViews(config.models);
      myApp.ent.stateData = new PageApp.Ent.StateData({
        currentTab: 'selling'
      });
      display(config.region); // Trigger the event to add padding to the top of the first selling item so that it appears beneath the in-play item

      myApp.vent.trigger('items:notifyRequireSellingItemReformat');
      ent.sellingItems.loadRemainingItems();
    }, this);
    myApp.vent.on('webcast:itemlist:model:update', function (response) {
      notifyModelsChange(response);
    }, this);
    myApp.vent.on('notifyTabChange', function (tab) {
      // See whether we are transitioning from an empty tab to a populated one or vice versa to determine whether we need to re-render
      var isEmpty = views.sellingItemsView.isEmpty(views.sellingItemsView.collection);
      myApp.ent.stateData.set('currentTab', tab);
      var rerenderRequired = isEmpty !== views.sellingItemsView.isEmpty(views.sellingItemsView.collection);

      if (tab === 'saleInfo') {
        throw new Error('Should not be here - handled by a modal now.');
      } else {
        // Don't systematically perform a complete re-render of the selling items (using views.sellingItemsView.render) as it's too in-efficient
        // and slow for large numbers of items. Only perform a re-render if we are transitioning from an empty view (i.e. noClosed or noSelling).
        // Instead, if circumstances allow, simply set the css display property as appropriate which is effectively all that the re-render does anyway (in this instance)
        if (rerenderRequired) {
          // This will cause the appropriate emptyView to render or for an emptyView to be replaced with the SellingItems as appropriate
          views.sellingItemsView.render();
        } else {
          refreshSellingClosedList(tab);
        }

        myApp.vent.trigger('items:notifyRequireSellingItemReformat');
      }
    }, this); // Item Details tab changer

    myApp.vent.on('notifyTabChangeItemDetails', function (tab) {
      myApp.ent.stateData.set('currentTab', tab);
    }, this);
    myApp.vent.on('items:requireRefreshSellingClosedList', function (tab) {
      refreshSellingClosedList(tab);
    }, this);
    /*
    * Ideally this code to add padding to the first selling item would be triggered by using 'childEvents' on SellingItemsView which
    * would be triggered by a render event on an item in the selling list However it was
    * found that the render events were not fired (or did not bubble up) as expected and so
    * we trigger an event manually. This is possibly due to us having overridden 'render'
    * on SellingItemView. Possibly re-assess should render (which is quite complex) ever be refactored.
    */

    myApp.vent.on('items:notifyRequireSellingItemReformat', function () {
      /*
      * Note: this too is a hack. It appears that the isEmpty check is not performed
      * in all cases when selling items are rendered and as such, in some cases, the
      * empty view is not rendered when it should be, so force a check here and
      * render the collection if empty (which ultimately will cause a NoXXXItems view
      * to be  rendered).
      */
      try {
        if (views.sellingItemsView.isEmpty(views.sellingItemsView.collection)) {
          if (console.log) console.log('re-rendering selling items...');
          views.sellingItemsView.render();
        }
      } catch (err) {
        if (views && views.sellingItemsView) {
          views.sellingItemsView.render();
        }
      }

      var $sellingItems = $('.w2-sell-item-selling');
      $sellingItems.removeClass('w2-first-selling');

      if ($('.w2-sell-item-inplay').length) {
        $sellingItems.first().addClass('w2-first-selling');
      }
    }, this);
    myApp.vent.on('items:placeMaxBid', function (options) {
      var amount = options.amount;
      var itemId = options.itemId;

      if (!amount || amount.length === 0) {
        return;
      }

      var sellingItem = ent.sellingItems.get(itemId);
      var currentBidAmount = sellingItem.attributes.amountHighestBid;
      var maxBidAmount = sellingItem.attributes.maxBidAmount;

      if (amount <= maxBidAmount) {
        myApp.vent.trigger('ui:notification', {
          text: myApp.reqres.request('i16:getString', 'WebcastCodes_WC_MAXBID_LOWER_THAN_CURRENT_MAXBID'),
          level: 'warning'
        });
      } else if (amount <= currentBidAmount) {
        myApp.vent.trigger('ui:notification', {
          text: myApp.reqres.request('i16:getString', 'WebcastCodes_WC_MAXBID_LOWER_THAN_CURRENT_HAMMER'),
          level: 'warning'
        });
      } else {
        var params = [myApp.ent.auction.get('auctionId'), itemId, myApp.ent.userRegistration.attributes.registrationId, amount];
        myApp.utils.ajax.post(params, actions.placeMaxBid, _.bind(function (response) {
          if (response.worked) {
            var models = myApp.request('reqres:webcast:models', response.models);
            myApp.vent.trigger('webcast:itemlist:model:update', {
              models: models,
              code: response.actionCode
            });
            myApp.vent.trigger('ui:notification', {
              text: response.message,
              level: 'success'
            });
          } else {
            myApp.vent.trigger('ui:notification', {
              text: response.message,
              level: 'warning'
            });
          }

          myApp.vent.trigger('items:notifyRequireSellingItemReformat');
        }, this));
      }
    }, this);
    myApp.vent.on('items:itemDetailsRequest', function (options) {
      var params = [options.itemId];
      myApp.utils.ajax.post(params, actions.retrieveItemDetails, _.bind(function (response) {
        if (response.worked) {
          var view = new PageApp.Views.ItemDetailsView({
            model: response.models.sellingItemWithDetailsModel,
            modal: true
          });
          myApp.myModalRegion.show(new PageApp.Views.ModalLayout({
            view: view,
            modal: true
          }));
          this.modalInProgress = true;
        } else {
          myApp.vent.trigger('ui:notification', {
            text: response.message,
            level: 'warning'
          });
        }
      }, this));
    }, this);
  }

  return {
    initialize: function initialize(models) {
      myApp.vent.off('webcast:itemlist:model:update');
      myApp.vent.off('items:placeMaxBid');
      myApp.vent.off('items:notifyRequireSellingItemReformat');
      myApp.vent.off('items:itemDetailsRequest');
      myApp.vent.off('items:requireRefreshSellingClosedList');
      myApp.vent.off('notifyTabChange');
      initEvents();
    }
  };
};
"use strict";

PageApp.Views.WebcastLayout = Backbone.Marionette.LayoutView.extend({
  getTemplate: function getTemplate() {
    return hbs.templates.webcastLayout;
  },
  initialise: function initialise(options) {
    this.options = options;
  },
  regions: {
    webcastRegion: '#webcastRegion',
    messageRegion: '#messageRegion',
    w2ItemsRegion: '#w2ItemsRegion',
    titleRegion: '#titleRegion',
    w2VideoRegion: '#w2VideoRegion'
  }
});
"use strict";

PageApp.Controllers.AccountRouter = function () {
  function forwardToAccountCreationSuccess(response) {
    var contextPath = myApp.ent.config.get('clientId');
    myApp.utils.misc.sendGoogleAnalytics('CreateAccount', 'success', '', contextPath + '/createAccountSuccess');
    myApp.mainRegion.show(new PageApp.Views.CreateAccountSuccessView({
      model: new PageApp.Ent.BasicEntity(response)
    }));
  }

  function initEvents() {
    myApp.vent.on('account:activate:success', function (response) {
      var model = new PageApp.Ent.BasicEntity(response);
      model.set('JspPublicCodes_JSP_ACCOUNT_NOT_RECOGNISED', myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ACCOUNT_NOT_RECOGNISED'));
      model.set('JspPublicCodes_JSP_ACCOUNT_NOT_RECOGNISED_MESSAGE', myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ACCOUNT_NOT_RECOGNISED_MESSAGE'));
      myApp.mainRegion.show(new PageApp.Views.CreateAccountActivatedView({
        model: model
      }));
    }, this);
    myApp.vent.on('account:forgotten:success', function (response) {
      var model = new PageApp.Ent.ForgottenPassword(response);
      myApp.mainRegion.show(new PageApp.Views.ForgottenPasswordSuccessView({
        model: model
      }));
    }, this);
    myApp.vent.on('account:forgotten:display', function (response) {
      var model = new PageApp.Ent.ForgottenPassword(response);
      myApp.mainRegion.show(new PageApp.Views.ForgottenPasswordView({
        model: model
      }));
    }, this);
    myApp.vent.on('account:change:password:display', function (response) {
      var model = new PageApp.Ent.ChangePassword(response);
      myApp.mainRegion.show(new PageApp.Views.ChangePasswordView({
        model: model
      }));
    }, this);
    myApp.vent.on('account:change:password:failure', function (response) {
      var model = new PageApp.Ent.ChangePassword(response);
      myApp.mainRegion.show(new PageApp.Views.ChangePasswordFailureView({
        model: model
      }));
    }, this);
    myApp.vent.on('account:change:password:success', function (response) {
      var model = new PageApp.Ent.ChangePassword(response);
      myApp.mainRegion.show(new PageApp.Views.ChangePasswordSuccessView({
        model: model
      }));
    }, this);
    myApp.vent.on('account:create:display', function (models) {
      var model = new PageApp.Ent.BasicEntity(models);
      myApp.mainRegion.show(new PageApp.Views.CreateAccountLayout({
        model: model
      }));
    }, this);
    myApp.vent.on('account:mysettings:display', function (models) {
      var model = new PageApp.Ent.BasicEntity(models);
      myApp.mainRegion.show(new PageApp.Views.MySettingsLayoutView({
        model: model
      }));
    }, this);
    myApp.vent.on('account:mysettings:success', function (response) {
      myApp.refreshModels({
        callback: _.bind(function (models) {
          var contextPath = myApp.ent.config.get('clientId');
          myApp.utils.misc.sendGoogleAnalytics('MySettings', 'success', '', contextPath + '/mySettingsSuccess');
          myApp.mainRegion.show(new PageApp.Views.MySettingsSuccessView({
            model: new PageApp.Ent.BasicEntity(response)
          }));
        }, this)
      });
    }, this);
    myApp.vent.on('account:create:success', function (response) {
      if (myApp.ent.webApp.get('cardVerificationSwitchedOn')) {
        var createAccountCardVerificationLayout = new PageApp.Views.CreateAccountCardVerificationLayoutView({
          model: new PageApp.Ent.CardVerification()
        }); // @TECHDEBT - myRegion is undefined

        myRegion.show(createAccountCardVerificationLayout); // eslint-disable-line no-undef

        createAccountCardVerificationLayout.creditCardDetailsRegion.show(new PageApp.Views.CreditCardDetailsView({
          model: new PageApp.Ent.CreditCardDetails(),
          referenceData: this.models.referenceData
        }));
        createAccountCardVerificationLayout.billingAddressDetailsRegion.show(new PageApp.Views.BillingAddressDetailsView({
          model: new PageApp.Ent.BillingAddress(),
          referenceData: this.models.referenceData
        }));
      } else {
        forwardToAccountCreationSuccess(response);
      }
    }, this);
  }

  return {
    initialize: function initialize() {
      initEvents();
    }
  };
};
"use strict";

PageApp.Ent.ChangePassword = Backbone.Model.extend({
  defaults: {
    '@class': 'com.bidlogix.scaffold.models.account.ChangePasswordModel'
  },
  validate: function validate() {
    var errors = new PageApp.Ent.Errors();
    var error = null;
    var token = this.get('token');

    if (!token || token.length === 0) {
      error = {
        field: 'token',
        message: 'Invalid Token'
      };
      errors.add(error);
    }

    if (this.get('password').length < 5) {
      error = {
        field: 'password',
        message: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_Password')
      };
      errors.add(error);
    } else if (this.get('password') !== this.get('passwordConfirm')) {
      error = {
        field: 'passwordConfirm',
        message: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_RepeatPassword')
      };
      errors.add(error);
    }

    if (errors.length === 0) {
      return false;
    } else {
      return errors;
    }
  }
});
"use strict";

PageApp.Views.ChangePasswordFailureView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.changePasswordFailure,
  serializeData: function serializeData() {
    return {
      JspPublicCodes_JSP_UNABLE_TO_CHG_PASSWORD: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_UNABLE_TO_CHG_PASSWORD'),
      JspPublicCodes_JSP_PASSWORD_ALREADY_CHANGED: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_PASSWORD_ALREADY_CHANGED'),
      JspPublicCodes_JSP_NEED_CHANGE_AGAIN: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_NEED_CHANGE_AGAIN'),
      JspPublicCodes_JSP_NEW_PASSWORD_CHANGE_REQUEST: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_NEW_PASSWORD_CHANGE_REQUEST'),
      JspPublicCodes_JSP_UNABLE_TO_CHG_PASSWORD_LOGIN: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_UNABLE_TO_CHG_PASSWORD_LOGIN'),
      contextPath: myApp.ent.config.attributes.contextPath
    };
  }
});
"use strict";

PageApp.Views.ChangePasswordSuccessView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.changePasswordSuccess,
  serializeData: function serializeData() {
    var loginUrl = myApp.ent.webApp.attributes.webAppLogin.externalBaseUrl ? myApp.ent.webApp.attributes.webAppLogin.externalBaseUrl : myApp.ent.config.attributes.contextPath + '/login';
    return {
      JspPublicCodes_JSP_PASSWORD_CHANGED: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_PASSWORD_CHANGED'),
      JspPublicCodes_JSP_PASSWORD_CHANGE_SUCCESSFUL: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_PASSWORD_CHANGE_SUCCESSFUL'),
      JspPublicCodes_JSP_PASSWORD_CHANGE_SUCCESSFUL_LOGIN: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_PASSWORD_CHANGE_SUCCESSFUL_LOGIN'),
      contextPath: myApp.ent.config.attributes.contextPath,
      loginUrl: loginUrl
    };
  }
});
"use strict";

PageApp.Views.ChangePasswordView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.changePassword,
  initialize: function initialize(options) {
    this.options = options;
  },
  ui: {
    password: '.x-password',
    passwordConfirm: '.x-confirm',
    progress: '.x-progress',
    token: '.x-token'
  },
  serializeData: function serializeData() {
    var data = {
      JspPublicCodes_JSP_CHANGE_PASSWORD_PASSWORD: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CHANGE_PASSWORD_PASSWORD'),
      JspPublicCodes_JSP_CHANGE_PASSWORD_REPEAT_PASSWORD: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CHANGE_PASSWORD_REPEAT_PASSWORD'),
      JspPublicCodes_JSP_CHANGE_PASSWORD_PASSWORD_STRENGTH: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CHANGE_PASSWORD_PASSWORD_STRENGTH'),
      JspPublicCodes_JSP_CHANGE_PASSWORD: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CHANGE_PASSWORD'),
      JspPublicCodes_JSP_UNABLE_TO_CHG_PASSWORD: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_UNABLE_TO_CHG_PASSWORD'),
      password: this.model.get('password'),
      passwordConfirm: this.model.get('passwordConfirm'),
      token: this.model.get('token'),
      validPasswordChange: this.model.get('valid')
    };
    return data;
  },
  events: {
    'click .x-submit': 'handleSubmit'
  },
  onRender: function onRender() {
    var $cpvElf = this;
    this.ui.password.complexify({}, function callback(valid, complexity) {
      $cpvElf.ui.progress.css('width', complexity + '%');

      if (complexity > 30) {
        $cpvElf.ui.progress.addClass('progress-bar-success');
      }
    });
    if (!this.errors) return;
    this.errors.each(function (element) {
      if (element.get('field') && element.get('field') === 'password') {
        this.ui.password.parent().find('span').html(element.get('message'));
        this.ui.password.parent().addClass('has-error');
      } else if (element.get('field') && element.get('field') === 'passwordConfirm') {
        this.ui.passwordConfirm.parent().find('span').html(element.get('message'));
        this.ui.passwordConfirm.parent().addClass('has-error');
      } else {
        var $ge = this.$el.find('#globalError');
        $ge.parent().addClass('has-error');
        $ge.html(element.get('message'));
      }
    }, this);
  },
  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    this.model.set('password', this.ui.password.val());
    this.model.set('passwordConfirm', this.ui.passwordConfirm.val());
    this.model.set('token', this.ui.token.val());
    this.errors = this.model.validate();

    if (this.errors) {
      this.render();
      return;
    }

    myApp.utils.ajax.postPut(this.model.attributes, myApp.utils.ajax.getApiEndpoint('changePassword'), function (response) {
      var errors = response.errors;

      if (errors && errors.length > 0 || response.failed) {
        myApp.utils.validation.renderErrors(new PageApp.Ent.Errors(errors));
      } else {
        myApp.vent.trigger('account:change:password:success');
      }
    });
    return false;
  }
});
"use strict";

PageApp.Ent.ForgottenPassword = Backbone.Model.extend({
  defaults: {
    '@class': 'com.bidlogix.scaffold.models.account.ForgottenPasswordModel',
    email: ''
  },
  validate: function validate() {
    var errors = new PageApp.Ent.Errors();
    var error = null;

    if (this.get('email').length === 0) {
      error = {
        field: 'email',
        message: myApp.reqres.request('i16:getString', 'InfrastructureCodes_NULL_VALUE_NOT_ALLOWED')
      };
      errors.add(error);
    } else if (this.get('email').indexOf('@') < 1) {
      error = {
        field: 'email',
        message: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_EMAIL_NOT_RECOGNISED')
      };
      errors.add(error);
    }

    if (errors.length === 0) {
      return false;
    } else {
      return errors;
    }
  }
});
"use strict";

PageApp.Views.ForgottenPasswordSuccessView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.forgottenPasswordSuccess,
  serializeData: function serializeData() {
    var backToHomepageUrl = myApp.ent.webApp.attributes.webAppLogin.externalBaseUrl ? myApp.ent.webApp.attributes.webAppLogin.externalBaseUrl : '#home';
    return {
      JspPublicCodes_JSP_APEX_HAS_SENT_EMAIL: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_APEX_HAS_SENT_EMAIL'),
      JspPublicCodes_JSP_CLICK_LINK_TO_CHANGE: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CLICK_LINK_TO_CHANGE'),
      JspPublicCodes_JSP_BACK_TO_HOMEPAGE: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BACK_TO_HOMEPAGE'),
      backToHomepageUrl: backToHomepageUrl
    };
  }
});
"use strict";

PageApp.Views.ForgottenPasswordView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.forgottenPassword,
  initialize: function initialize(options) {
    this.options = options;
  },
  ui: {
    email: '.x-email'
  },
  serializeData: function serializeData() {
    return {
      JspPublicCodes_JSP_RESET_PASSWORD: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_RESET_PASSWORD'),
      JspPublicCodes_JSP_FORGOTTEN_PASSWORD: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_FORGOTTEN_PASSWORD'),
      JspPublicCodes_JSP_PASSWORD_RESET_INSTRUCTIONS: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_PASSWORD_RESET_INSTRUCTIONS'),
      JspPublicCodes_JSP_FORGOTTEN_PASSWORD_EMAIL_ADDRESS: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_FORGOTTEN_PASSWORD_EMAIL_ADDRESS'),
      JspPublicCodes_JSP_FORGOTTEN_PASSWORD_EMAIL_ME: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_FORGOTTEN_PASSWORD_EMAIL_ME'),
      email: this.model.get('email'),
      resetPasswordMode: this.model.get('resetPasswordMode'),
      contextPath: myApp.ent.config.get('contextPath')
    };
  },
  events: {
    'click .x-submit': 'handleSubmit',
    'keyup .x-email': 'handleSubmitFromInput'
  },
  onRender: function onRender() {
    if (!this.errors) return;
    this.errors.each(function (element) {
      if (element.get('field')) {
        this.ui.email.parent().find('span').html(element.get('message'));
        this.ui.email.parent().addClass('has-error');
      } else {
        var $ge = this.$el.find('#globalError');
        $ge.parent().addClass('has-error');
        $ge.html(element.get('message'));
      }
    }, this);
  },
  handleSubmitFromInput: function handleSubmitFromInput(e) {
    e.preventDefault();

    if (e.keyCode === 13) {
      this.handleSubmit(e);
    }

    return false;
  },
  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    this.model.set('email', this.ui.email.val());
    this.errors = this.model.validate();

    if (this.errors) {
      this.render();
      return;
    }

    var baseUrl = encodeURIComponent(window.location.href);
    myApp.utils.ajax.postBean(this.model.attributes, myApp.utils.ajax.getApiEndpoint('forgottenPassword') + '?baseUrl=' + baseUrl, function (response) {
      var errors = response.errors;

      if (response.failed || typeof errors !== 'undefined' && errors !== null && errors.length !== 0) {
        myApp.vent.trigger('ui:notification', {
          sticky: true,
          text: errors[0].message,
          level: 'danger'
        });
      } else {
        myApp.vent.trigger('account:forgotten:success', response);
      }
    });
    return false;
  }
});
"use strict";

PageApp.Views.MySettingsLayoutView = Backbone.Marionette.LayoutView.extend({
  template: hbs.templates.mySettings,
  regions: {
    contactDetailsRegion: '#contactDetailsView',
    personalDetailsRegion: '#personalDetailsView',
    userPreferencesRegion: '#userPreferencesView'
  },
  initialize: function initialize(options) {
    this.options = options;
  },
  serializeData: function serializeData() {
    return {
      JspPublicCodes_JSP_CreateAccount_TITLE: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_TITLE'),
      JspPublicCodes_JSP_CreateAccount_PersonalDetails: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_PersonalDetails'),
      JspPublicCodes_JSP_MY_SETTINGS_VERIFIED_LOCATION: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_MY_SETTINGS_VERIFIED_LOCATION'),
      JspPublicCodes_JSP_MY_SETTINGS_VERIFIED_CARD_ENDING: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_MY_SETTINGS_VERIFIED_CARD_ENDING'),
      JspPublicCodes_JSP_MY_SETTINGS_VERIFIED_CARD_EXPIRATION: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_MY_SETTINGS_VERIFIED_CARD_EXPIRATION'),
      JspPublicCodes_JSP_MY_SETTINGS_CHANGE_CARD_TEXT: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_MY_SETTINGS_CHANGE_CARD_TEXT'),
      JspPublicCodes_JSP_MY_SETTINGS_CHANGE_CARD_LINK: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_MY_SETTINGS_CHANGE_CARD_LINK'),
      JspPublicCodes_JSP_MY_SETTINGS_NO_LOCATION_VERIFIED_TEXT: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_MY_SETTINGS_NO_LOCATION_VERIFIED_TEXT'),
      JspPublicCodes_JSP_MY_SETTINGS_NO_LOCATION_VERIFIED_LINK: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_MY_SETTINGS_NO_LOCATION_VERIFIED_LINK'),
      JspPublicCodes_JSP_CreateAccount_SAVE_SETTINGS: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_SAVE_SETTINGS'),
      JspPublicCodes_JSP_CreateAccount_NOT_LOGGED_IN: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_NOT_LOGGED_IN')
    };
  },
  events: {
    'click .x-submit': 'handleSubmit',
    'keyup :text': 'handleSubmitFromInput',
    'click .x-cardVerification': 'forwardToCardVerification'
  },
  onRender: function onRender() {
    if (myApp.ent.user.attributes.statusId === 7) {
      var message = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_MY_SETTINGS_INCOMPLETE_ACCOUNT_INFO');
      myApp.vent.trigger('ui:notification', {
        text: message,
        level: 'warning',
        sticky: true
      });
    }

    this.contactDetailsRegion.show(new PageApp.Views.ContactDetailsView({
      model: this.model
    }));
    this.userPreferencesRegion.show(new PageApp.Views.UserPreferencesView({
      model: this.model
    }));
    this.personalDetailsRegion.show(new PageApp.Views.PersonalDetailsView({
      model: this.model
    }));
  },
  handleSubmitFromInput: function handleSubmitFromInput(e) {
    e.preventDefault();

    if (e.keyCode === 13) {
      this.handleSubmit(e);
    }

    return false;
  },
  updateModelWithInput: function updateModelWithInput() {
    this.model.set('contactDetails', this.contactDetailsRegion.currentView.getUpdatedModel());
    this.model.set('personalDetails', this.personalDetailsRegion.currentView.getUpdatedModel());
    this.model.set('userPreferences', this.userPreferencesRegion.currentView.getUpdatedModel());
  },
  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    this.updateModelWithInput();
    var baseUrl = encodeURIComponent(window.location.href);
    myApp.utils.ajax.postBean(this.model.attributes.accountManagementFormModel, myApp.utils.ajax.getApiEndpoint('mySettings') + '?baseUrl=' + baseUrl, function (response) {
      var errors = response.errors;

      if (typeof errors !== 'undefined' && errors !== null && errors.length !== 0) {
        myApp.utils.validation.renderErrors(new PageApp.Ent.Errors(errors));
      } else if (response.failed) {
        myApp.utils.validation.renderErrors(new PageApp.Ent.Errors(errors));
      } else {
        myApp.vent.trigger('account:mysettings:success', response);
      }
    });
    return false;
  },
  clearErrors: function clearErrors(e) {
    var $targetField = $(e.currentTarget);
    myApp.utils.validation.clearFieldError($targetField);
  }
});
"use strict";

PageApp.Views.MySettingsSuccessView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.mySettingsSuccess,
  serializeData: function serializeData() {
    return {
      JspPublicCodes_JSP_MY_SETTINGS_CHANGES_SUCCESSFUL: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_MY_SETTINGS_CHANGES_SUCCESSFUL'),
      JspPublicCodes_JSP_MY_SETTINGS_CHANGES_APPLIED: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_MY_SETTINGS_CHANGES_APPLIED'),
      JspPublicCodes_JSP_MY_SETTINGS_BACK_TO_HOMEPAGE: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_MY_SETTINGS_BACK_TO_HOMEPAGE'),
      JspPublicCodes_JSP_BACK_TO_PREVIOUS_PAGE: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BACK_TO_PREVIOUS_PAGE'),
      contextPath: myApp.ent.config.attributes.contextPath
    };
  }
});
"use strict";

PageApp.Views.ContactDetailsView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.contactDetails,
  ui: {
    addressLine1: '#addressLine1',
    addressLine2: '#addressLine2',
    city: '#city',
    countyOrState: '#countyOrState',
    postcode: '#postcode',
    country: '#country',
    timeZone: '#timeZone',
    phoneNumber: '#phoneNumber',
    mobileNumber: '#mobileNumber',
    faxNumber: '#faxNumber'
  },
  events: {
    'change #phoneNumber': 'showPhoneVerification',
    'change #mobileNumber': 'showPhoneVerification'
  },
  serializeData: function serializeData() {
    return {
      JspPublicCodes_JSP_CreateAccount_YourContactDetails: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_YourContactDetails'),
      JspPublicCodes_JSP_CreateAccount_AddressLine1: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_AddressLine1'),
      JspPublicCodes_JSP_CreateAccount_AddressLine2: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_AddressLine2'),
      JspPublicCodes_JSP_CreateAccount_City: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_City'),
      JspPublicCodes_JSP_CreateAccount_CountyOrState: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_CountyOrState'),
      JspPublicCodes_JSP_CreateAccount_PostcodeOrZip: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_PostcodeOrZip'),
      JspPublicCodes_JSP_CreateAccount_Country: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_Country'),
      JspPublicCodes_JSP_CreateAccount_TimeZone: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_TimeZone'),
      JspPublicCodes_JSP_CreateAccount_Required_Field: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_Required_Field'),
      JspPublicCodes_JSP_SHORT_TELEPHONE: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_SHORT_TELEPHONE'),
      JspPublicCodes_JSP_SHORT_MOBILE: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_SHORT_MOBILE'),
      JspPublicCodes_JSP_SHORT_FAX: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_SHORT_FAX'),
      JspPublicCodes_JSP_LABEL_SELECT: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_LABEL_SELECT'),
      referenceCountries: this.model.get('referenceData').referenceCountries,
      referenceTimeZones: this.model.get('referenceData').referenceTimeZones,
      inputAddressLine1: this.model.get('accountManagementFormModel').contactDetails.addressLine1,
      inputAddressLine2: this.model.get('accountManagementFormModel').contactDetails.addressLine2,
      inputCity: this.model.get('accountManagementFormModel').contactDetails.city,
      inputCountyOrState: this.model.get('accountManagementFormModel').contactDetails.countyOrState,
      inputPostcode: this.model.get('accountManagementFormModel').contactDetails.postcode,
      inputPhoneNumber: this.model.get('accountManagementFormModel').contactDetails.phoneNumber,
      inputMobileNumber: this.model.get('accountManagementFormModel').contactDetails.mobileNumber,
      inputFaxNumber: this.model.get('accountManagementFormModel').contactDetails.faxNumber
    };
  },
  onRender: function onRender() {
    this.ui.country.val(this.model.get('accountManagementFormModel').contactDetails.country);
    this.ui.timeZone.val(this.model.get('accountManagementFormModel').contactDetails.timeZone);
  },
  getUpdatedModel: function getUpdatedModel() {
    this.updateModelWithInput();
    return this.model;
  },
  updateModelWithInput: function updateModelWithInput() {
    this.model.get('accountManagementFormModel').contactDetails.addressLine1 = this.ui.addressLine1.val().trim();
    this.model.get('accountManagementFormModel').contactDetails.addressLine2 = this.ui.addressLine2.val().trim();
    this.model.get('accountManagementFormModel').contactDetails.city = this.ui.city.val().trim();
    this.model.get('accountManagementFormModel').contactDetails.countyOrState = this.ui.countyOrState.val().trim();
    this.model.get('accountManagementFormModel').contactDetails.postcode = this.ui.postcode.val().trim();
    this.model.get('accountManagementFormModel').contactDetails.country = this.ui.country.val().trim();
    this.model.get('accountManagementFormModel').contactDetails.timeZone = this.ui.timeZone.find('option:selected').text().indexOf('===') === 0 ? '' : this.ui.timeZone.val();
    this.model.get('accountManagementFormModel').contactDetails.phoneNumber = this.ui.phoneNumber.val().trim();
    this.model.get('accountManagementFormModel').contactDetails.mobileNumber = this.ui.mobileNumber.val().trim();
    this.model.get('accountManagementFormModel').contactDetails.faxNumber = this.ui.faxNumber.val().trim();
  },
  showPhoneVerification: function showPhoneVerification() {
    myApp.vent.trigger('input:showPhoneVerification', true);
  }
});
"use strict";

PageApp.Views.CreateAccountActivatedView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.createAccountActivated
});
"use strict";

PageApp.Views.CreateAccountLayout = Backbone.Marionette.LayoutView.extend({
  template: hbs.templates.createAccount,
  events: {
    'click #submitButton': 'handleSubmit',
    'keyup :text': 'handleSubmitFromInput',
    'focus .form-control': 'clearErrors',
    'click #receiveEmailsOk': 'clearErrors',
    'click #agreedTsAndCsAndPrivacyPolicy': 'clearErrors'
  },
  regions: {
    usernamePassword: '#usernamePasswordView',
    personalDetails: '#personalDetailsView',
    contactDetails: '#contactDetailsView',
    userPreferences: '#userPreferencesView',
    termsAndConditions: '#termsAndConditionsView'
  },
  modelEvents: {
    'change': 'modelChanged'
  },
  modelChanged: function modelChanged(e) {
    this.render();
  },
  serializeData: function serializeData() {
    var data = {
      JspPublicCodes_JSP_CreateAccount_CreateAccount: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_CreateAccount')
    };
    return data;
  },
  onRender: function onRender() {
    this.usernamePassword.show(new PageApp.Views.UsernamePasswordView({
      model: this.model
    }));
    this.contactDetails.show(new PageApp.Views.ContactDetailsView({
      model: this.model
    }));
    this.personalDetails.show(new PageApp.Views.PersonalDetailsView({
      model: this.model
    }));
    this.userPreferences.show(new PageApp.Views.UserPreferencesView({
      model: this.model
    }));
    this.termsAndConditions.show(new PageApp.Views.TermsAndConditionsView({
      model: this.model
    }));
  },
  clearErrors: function clearErrors(e) {
    var $targetField = $(e.currentTarget);
    myApp.utils.validation.clearFieldError($targetField);
  },
  getUpdatedModel: function getUpdatedModel() {
    this.updateModelWithInput();
    return this.model;
  },
  updateModelWithInput: function updateModelWithInput() {
    this.model.get('accountManagementFormModel').username = this.usernamePassword.currentView.ui.username.val().trim();
    this.model.get('accountManagementFormModel').email = this.usernamePassword.currentView.ui.email.val().trim();
    this.model.get('accountManagementFormModel').repeatEmail = this.usernamePassword.currentView.ui.repeatEmail.val().trim();
    this.model.get('accountManagementFormModel').password = this.usernamePassword.currentView.ui.password.val().trim();
    this.model.get('accountManagementFormModel').repeatPassword = this.usernamePassword.currentView.ui.repeatPassword.val().trim();
    this.model.get('accountManagementFormModel').agreedTsAndCsAndPrivacyPolicy = this.termsAndConditions.currentView.ui.agreedTsAndCsAndPrivacyPolicy.is(':checked');
    this.contactDetails.currentView.getUpdatedModel();
    this.personalDetails.currentView.getUpdatedModel();
    this.userPreferences.currentView.getUpdatedModel();
  },
  handleSubmitFromInput: function handleSubmitFromInput(e) {
    e.preventDefault();

    if (e.keyCode === 13) {
      this.handleSubmit(e);
    }

    return false;
  },
  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    this.updateModelWithInput();
    var baseUrl = encodeURIComponent(window.location.href);
    myApp.utils.ajax.postBean(this.model.attributes.accountManagementFormModel, myApp.utils.ajax.getApiEndpoint('createAccount') + '?baseUrl=' + baseUrl, function (response) {
      var errors = response.errors;

      if (typeof errors !== 'undefined' && errors !== null && errors.length !== 0) {
        myApp.utils.validation.renderErrors(new PageApp.Ent.Errors(errors));
      } else if (response.failed) {
        myApp.utils.validation.renderErrors(new PageApp.Ent.Errors(errors));
      } else {
        myApp.vent.trigger('account:create:success', response);
      }
    });
    return false;
  },
  handleError: function handleError(model, xhr, options) {
    if (xhr.status === 400) {
      var errors = new PageApp.Ent.Errors(xhr.responseJSON.errors);
      myApp.utils.validation.renderErrors(errors);
      return;
    }

    myApp.vent.trigger('error:notifyServerError', _.pick(xhr, 'responseJSON', 'status', 'statusText'));
  }
});
"use strict";

PageApp.Views.CreateAccountSuccessView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.createAccountSuccess
});
"use strict";

PageApp.Views.PersonalDetailsView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.personalDetails,
  ui: {
    forename: '#forename',
    surname: '#surname',
    companyName: '#companyName',
    jobTitle: '#jobTitle',
    vatNumber: '#vatNumber'
  },
  serializeData: function serializeData() {
    return {
      JspPublicCodes_JSP_CreateAccount_PersonalDetails: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_PersonalDetails'),
      JspPublicCodes_JSP_LABEL_SELECT: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_LABEL_SELECT'),
      JspPublicCodes_JSP_LABEL_VAT: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_LABEL_VAT'),
      JspPublicCodes_JSP_CreateAccount_Forename: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_Forename'),
      JspPublicCodes_JSP_CreateAccount_Surname: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_Surname'),
      JspPublicCodes_JSP_CreateAccount_CompanyName: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_CompanyName'),
      JspPublicCodes_JSP_CreateAccount_JobTitle: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_JobTitle'),
      JspPublicCodes_JSP_CreateAccount_Required_Field: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_Required_Field'),
      requestVatNumber: myApp.ent.webApp.attributes.requestVatNumber,
      inputForename: this.model.get('accountManagementFormModel').personalDetails.forename,
      inputSurname: this.model.get('accountManagementFormModel').personalDetails.surname,
      inputCompanyName: this.model.get('accountManagementFormModel').personalDetails.companyName,
      inputJobTitle: this.model.get('accountManagementFormModel').personalDetails.jobTitle,
      inputVatNumber: this.model.get('accountManagementFormModel').personalDetails.vatNumber
    };
  },
  getUpdatedModel: function getUpdatedModel() {
    this.updateModelWithInput();
    return this.model;
  },
  updateModelWithInput: function updateModelWithInput() {
    this.model.get('accountManagementFormModel').personalDetails.forename = this.ui.forename.val().trim();
    this.model.get('accountManagementFormModel').personalDetails.surname = this.ui.surname.val().trim();
    this.model.get('accountManagementFormModel').personalDetails.companyName = this.ui.companyName.val().trim();
    this.model.get('accountManagementFormModel').personalDetails.jobTitle = this.ui.jobTitle.val().trim();

    if (myApp.ent.webApp.attributes.requestVatNumber) {
      this.model.get('accountManagementFormModel').personalDetails.vatNumber = this.ui.vatNumber.val().trim();
    }
  }
});
"use strict";

PageApp.Views.TermsAndConditionsModalView = Backbone.Marionette.LayoutView.extend({
  template: hbs.templates.termsAndConditionsModal
});
"use strict";

PageApp.Views.TermsAndConditionsView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.termsAndConditions,
  ui: {
    agreedTsAndCsAndPrivacyPolicy: '#agreedTsAndCsAndPrivacyPolicy'
  },
  events: {
    'click #termsConditions': 'showTerms',
    'click #privacyPolicy': 'showPrivacy'
  },
  onRender: function onRender() {
    this.fetchContent('terms');
    this.fetchContent('privacy');
  },
  serializeData: function serializeData() {
    return {
      JspPublicCodes_JSP_FOOTER_TS_AND_CS: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_FOOTER_TS_AND_CS'),
      JspPublicCodes_JSP_FOOTER_PRIVACY_POLICY: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_FOOTER_PRIVACY_POLICY'),
      JspPublicCodes_JSP_CreateAccount_AgreeTerms: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_AgreeTerms'),
      contextPath: myApp.ent.config.attributes.contextPath
    };
  },
  fetchContent: function fetchContent(page) {
    var $elf = this;
    myApp.utils.ajax.get({
      page: page
    }, myApp.utils.ajax.getApiEndpoint('content') + '/plain', function (response) {
      if (!$elf.options) $elf.options = {}; // hack alert: adding to objects as the model is being listened to by other views..

      $elf.options[page] = response.content;
      $elf.$el.find('#' + page + '-content-body').html(response.content);
    });
  },
  showTerms: function showTerms(e) {
    e.preventDefault();
    var model = new PageApp.Ent.BasicEntity({
      content: this.options['terms']
    });
    myApp.myModalRegion.show(new PageApp.Views.ModalLayout({
      view: new PageApp.Views.TermsAndConditionsModalView({
        model: model
      })
    }));
  },
  showPrivacy: function showPrivacy(e) {
    e.preventDefault();
    var model = new PageApp.Ent.BasicEntity({
      content: this.options['privacy']
    });
    myApp.myModalRegion.show(new PageApp.Views.ModalLayout({
      view: new PageApp.Views.TermsAndConditionsModalView({
        model: model
      })
    }));
  }
});
"use strict";

PageApp.Views.UserPreferencesView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.userPreferences,
  initialize: function initialize(options) {
    this.options = options;
  },
  ui: {
    dataAnalyticsOk: '#dataAnalyticsOk',
    receiveEmailsOk: '#receiveEmailsOk',
    outbidEmailsOk: '#outbidEmailsOk'
  },
  serializeData: function serializeData() {
    return {
      JspPublicCodes_JSP_DATA_ANALYTICS_OPT_IN: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_DATA_ANALYTICS_OPT_IN'),
      JspPublicCodes_JSP_EMAIL_OPT_IN: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_EMAIL_OPT_IN'),
      JspPublicCodes_JSP_SEND_OUTBID_EMAILS: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_SEND_OUTBID_EMAILS'),
      JspPublicCodes_JSP_NEWS_FROM_APEX_PARTNERS: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_NEWS_FROM_APEX_PARTNERS'),
      JspPublicCodes_JSP_CreateAccount_YourPrefs: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_YourPrefs'),
      JspPublicCodes_JSP_CreateAccount_HowHearUs: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_HowHearUs'),
      JspPublicCodes_JSP_LABEL_SELECT: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_LABEL_SELECT'),
      JspPublicCodes_JSP_AREA_OF_PREFERENCE_DESCRIPTION: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AREA_OF_PREFERENCE_DESCRIPTION'),
      JspPublicCodes_JSP_LABEL_SELECT_ALL: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_LABEL_SELECT_ALL'),
      showNewsFromPartners: false
    };
  },
  onRender: function onRender() {
    this.ui.dataAnalyticsOk.prop('checked', this.model.attributes.accountManagementFormModel.userPreferences.dataAnalyticsOk);
    this.ui.receiveEmailsOk.prop('checked', this.model.attributes.accountManagementFormModel.userPreferences.receiveEmailsOk);
  },
  clearReceiveEmailsOKError: function clearReceiveEmailsOKError() {
    myApp.utils.validation.clearFieldError($('#receiveEmailsOk'));
  },
  getUpdatedModel: function getUpdatedModel() {
    this.updateModelWithInput();
    return this.model;
  },
  updateModelWithInput: function updateModelWithInput() {
    this.model.get('accountManagementFormModel').userPreferences.dataAnalyticsOk = this.ui.dataAnalyticsOk.is(':checked');
    this.model.get('accountManagementFormModel').userPreferences.receiveEmailsOk = this.ui.receiveEmailsOk.is(':checked');
  }
});
"use strict";

PageApp.Views.UsernamePasswordView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.usernamePassword,
  initialize: function initialize(options) {
    this.options = options;
  },
  actions: {
    accountValidation: '/createAccountValidation'
  },
  ui: {
    username: '#username',
    email: '#email',
    repeatEmail: '#repeatEmail',
    password: '#password',
    repeatPassword: '#repeatPassword',
    passwordConfirm: '.x-confirm',
    progress: '.x-progress'
  },
  events: {
    'blur #username': 'checkUsernameExists',
    'blur #email': 'checkEmailExists'
  },
  serializeData: function serializeData() {
    return {
      JspPublicCodes_JSP_CreateAccount_YourAccount: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_YourAccount'),
      JspPublicCodes_JSP_CreateAccount_Username: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_Username'),
      JspPublicCodes_JSP_CreateAccount_Email: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_Email'),
      JspPublicCodes_JSP_CreateAccount_RepeatEmail: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_RepeatEmail'),
      JspPublicCodes_JSP_CreateAccount_Password: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_Password'),
      JspPublicCodes_JSP_CreateAccount_Strength: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_Strength'),
      JspPublicCodes_JSP_CreateAccount_Not_Enough_Characters: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_Not_Enough_Characters'),
      JspPublicCodes_JSP_PASSWORD_STRENGTH_WEAK: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_PASSWORD_STRENGTH_WEAK'),
      JspPublicCodes_JSP_PASSWORD_STRENGTH_OK: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_PASSWORD_STRENGTH_OK'),
      JspPublicCodes_JSP_PASSWORD_STRENGTH_GOOD: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_PASSWORD_STRENGTH_GOOD'),
      JspPublicCodes_JSP_PASSWORD_STRENGTH_EXCELLENT: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_PASSWORD_STRENGTH_EXCELLENT'),
      JspPublicCodes_JSP_CreateAccount_RepeatPassword: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_RepeatPassword'),
      JspPublicCodes_JSP_CreateAccount_Required_Field: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CreateAccount_Required_Field'),
      JspPublicCodes_JSP_LABEL_SELECT: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_LABEL_SELECT')
    };
  },
  onRender: function onRender() {
    var $cpvElf = this;
    this.ui.password.complexify({}, function callback(valid, complexity) {
      $cpvElf.ui.progress.css('width', complexity + '%');

      if (complexity >= 30) {
        $cpvElf.ui.progress.addClass('progress-bar-success');
      } else {
        $cpvElf.ui.progress.removeClass('progress-bar-success');
      }
    });
  },
  checkEntryExists: function checkEntryExists(label, trimmedValue) {
    // '@class': 'com.ipsc.infrastructure.control.util.LabelValueBean',
    var data = {
      label: label,
      value: trimmedValue
    };
    myApp.utils.ajax.postBean(data, myApp.utils.ajax.getApiEndpoint('createAccountValidation'), function (response) {
      var errors = response.errors;

      if (typeof errors !== 'undefined' && errors !== null && errors.length !== 0) {
        myApp.utils.validation.renderErrors(new PageApp.Ent.Errors(errors));
      }
    });
  },
  checkUsernameExists: function checkUsernameExists(e) {
    var $targetField = $(e.currentTarget);
    var trimmedUsername = $.trim($targetField.val());

    if (myApp.utils.validation.isValidUsername(trimmedUsername)) {
      this.checkEntryExists('username', trimmedUsername);
    } else {
      var errors = new PageApp.Ent.Errors();
      errors.add({
        field: 'username',
        code: 'UserCodes_USERNAME_INCORRECTLY_FORMATTED'
      });
      myApp.utils.validation.renderErrors(errors);
    }
  },
  checkEmailExists: function checkEmailExists(e) {
    var $targetField = $(e.currentTarget);
    var trimmedEmail = $.trim($targetField.val());

    if (myApp.utils.validation.isValidEmail(trimmedEmail)) {
      this.checkEntryExists('email', trimmedEmail);
    }
  }
});
"use strict";

PageApp.Controllers.CalendarSidebarRouter = function () {
  function initEvents() {
    myApp.vent.on('calendar:sidebar:display', function (models) {
      var model = new PageApp.Ent.BasicEntity({
        title: 'FINISHING SOON!',
        hasFeatures: _.size(models.HomePageModel.upcomingModel.upcomingFeaturedAuctions) > 0,
        hasAuctions: _.size(models.HomePageModel.upcomingModel.upcomingAuctions) > 0,
        featuredAuctionsTitle: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_FEATURED_AUCTIONS'),
        auctionsTitle: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_HOMEPAGE_AUCTIONS'),
        upcomingAuctions: models.HomePageModel.upcomingModel.upcomingAuctions,
        upcomingFeaturedAuctions: models.HomePageModel.upcomingModel.upcomingFeaturedAuctions,
        contextPath: myApp.ent.config.get('contextPath')
      });
      myApp.calendarSidebarRegion.on('show', function (view) {
        myApp.vent.trigger('application:rendered', {
          region: myApp.calendarSidebarRegion
        });
      });
      myApp.calendarSidebarRegion.show(new PageApp.Views.CalendarSidebarView({
        model: model
      }));
    }, this);
  }

  return {
    initialize: function initialize() {
      initEvents();
    }
  };
};
"use strict";

PageApp.Views.CalendarSidebarView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.calendarSidebar,
  events: {
    'click .x-auction': 'handleDisplayAuction'
  },
  modelEvents: {
    'change': 'modelChanged'
  },
  modelChanged: function modelChanged(e) {
    this.render();
  }
});
"use strict";

PageApp.Controllers.HomeCalRouter = function () {
  var ent = {};

  function supportsSearch() {
    var webAppSupports = myApp.ent.config.get('contextPath') === '/auctions' || myApp.ent.config.get('contextPath') === '/auction-011' || myApp.ent.config.get('contextPath') === '/auction-017';
    return webAppSupports;
  }

  function initializeModels(models) {
    ent.filters = new PageApp.Ent.Filters();
    myApp.ent.user.setPreference('homecalLayout', 'list');

    if (myApp.ent.webApp.get('useGalleryLayoutForCalendar')) {
      myApp.ent.user.setPreference('homecalLayout', 'gallery');
    }

    ent.filters.set('countries', models.HomePageModel.upcomingModel.countries);
    ent.filters.set('countMarketplaceItems', models.HomePageModel.upcomingModel.countMarketplaceItems);
    ent.filters.set('countEvent', models.HomePageModel.upcomingModel.countEvent);
    ent.filters.set('countFeaturedEvent', models.HomePageModel.upcomingModel.countFeaturedEvent);
    ent.filters.set('countWebcast', models.HomePageModel.upcomingModel.countWebcast);
    ent.filters.set('countFeaturedWebcast', models.HomePageModel.upcomingModel.countFeaturedWebcast);
    if (!models) return;

    if (models.HomePageModel) {
      ent.homePage = new PageApp.Ent.HomePage(models.HomePageModel);
    }
  }

  function initEvents() {
    myApp.vent.on('homecal:display', function (models) {
      if (models) {
        initializeModels(models);
      }

      this.homeLayout = new PageApp.Views.HomeLayout();
      var xcoord = window.pageXOffset || document.documentElement.scrollLeft;
      var ycoord = window.pageYOffset || document.documentElement.scrollTop;
      this.homeLayout.upcomingRegion.on('show', function (view) {
        window.scroll(xcoord, ycoord);
      });
      myApp.mainRegion.show(this.homeLayout);
      var layout = myApp.ent.user.getPreference('homecalLayout', {
        value: 'list'
      });

      if (myApp.ent.config.get('page') === 'home') {
        if (supportsSearch()) myApp.vent.trigger('search:render', {
          searchInputRegion: this.homeLayout.getRegion('searchRegion')
        });

        if (ent.homePage.get('layoutId') === 'AUCTIONEER_CENTRIC') {
          this.homeLayout.getRegion('upcomingRegion').show(new PageApp.Views.UpcomingAuctioneerView({
            model: ent.homePage.get('upcomingModel')
          }));
        } else {
          this.homeLayout.getRegion('filtersRegion').show(new PageApp.Views.FiltersView({
            model: ent.filters
          }));

          if (myApp.ent.config.get('contextPath') === '/auction-017') {
            this.homeLayout.getRegion('upcomingRegion').show(new PageApp.Views.UpcomingMarketplaceView({
              model: ent.homePage.get('upcomingModel')
            }));
          } else {
            var type = myApp.ent.user.getPreference('homecalType', {
              value: 'auctions'
            });

            if (type === 'auctions') {
              if (layout === 'list') {
                this.homeLayout.getRegion('upcomingRegion').show(new PageApp.Views.UpcomingListView({
                  model: ent.homePage.get('upcomingModel')
                }));
              } else {
                this.homeLayout.getRegion('upcomingRegion').show(new PageApp.Views.UpcomingGalleryView({
                  model: ent.homePage.get('upcomingModel')
                }));
              }
            } else {
              this.homeLayout.getRegion('upcomingRegion').show(new PageApp.Views.UpcomingMarketplaceView({
                model: ent.homePage.get('upcomingModel')
              }));
            }
          }
        }
      } else {
        if (ent.homePage.get('layoutId') === 'AUCTIONEER_CENTRIC') {
          this.homeLayout.getRegion('upcomingRegion').show(new PageApp.Views.UpcomingAuctioneerView({
            model: ent.homePage.get('upcomingModel')
          }));
        } else {
          this.homeLayout.getRegion('filtersRegion').show(new PageApp.Views.FiltersView({
            model: ent.filters
          }));

          if (layout === 'list') {
            this.homeLayout.getRegion('upcomingRegion').show(new PageApp.Views.UpcomingListView({
              model: ent.homePage.get('upcomingModel')
            }));
          } else {
            this.homeLayout.getRegion('upcomingRegion').show(new PageApp.Views.UpcomingGalleryView({
              model: ent.homePage.get('upcomingModel')
            }));
          }
        }
      }

      myApp.vent.trigger('application:rendered', {
        region: myApp.mainRegion
      });
    }, this);
    myApp.vent.on('homecal:toggleCountry', function (config) {
      var layout = myApp.ent.user.getPreference('homecalLayout', {
        value: 'list'
      });
      ent.filters.set('country', config.country);
      var model = ent.homePage.get('upcomingModel');
      model.country = config.country;

      if (layout === 'list') {
        this.homeLayout.getRegion('upcomingRegion').show(new PageApp.Views.UpcomingListView({
          model: model
        }));
      } else {
        this.homeLayout.getRegion('upcomingRegion').show(new PageApp.Views.UpcomingGalleryView({
          model: model
        }));
      }

      this.homeLayout.getRegion('filtersRegion').show(new PageApp.Views.FiltersView({
        model: ent.filters
      }));
    }, this);
    myApp.vent.on('homecal:toggleLayout', function () {
      var layout = myApp.ent.user.getPreference('homecalLayout', {
        value: 'list'
      });

      if (layout === 'list') {
        this.homeLayout.getRegion('upcomingRegion').show(new PageApp.Views.UpcomingListView({
          model: ent.homePage.get('upcomingModel')
        }));
      } else {
        this.homeLayout.getRegion('upcomingRegion').show(new PageApp.Views.UpcomingGalleryView({
          model: ent.homePage.get('upcomingModel')
        }));
      }

      this.homeLayout.getRegion('filtersRegion').show(new PageApp.Views.FiltersView({
        model: ent.filters
      }));
    }, this);
    myApp.vent.on('homecal:toggleType', function () {
      var type = myApp.ent.user.getPreference('homecalType', {
        value: 'auctions'
      });
      var layout = myApp.ent.user.getPreference('homecalLayout', {
        value: 'list'
      });

      if (type === 'auctions') {
        if (layout === 'list') {
          this.homeLayout.getRegion('upcomingRegion').show(new PageApp.Views.UpcomingListView({
            model: ent.homePage.get('upcomingModel')
          }));
        } else {
          this.homeLayout.getRegion('upcomingRegion').show(new PageApp.Views.UpcomingGalleryView({
            model: ent.homePage.get('upcomingModel')
          }));
        }
      } else {
        this.homeLayout.getRegion('upcomingRegion').show(new PageApp.Views.UpcomingMarketplaceView({
          model: ent.homePage.get('upcomingModel')
        }));
      }

      this.homeLayout.getRegion('filtersRegion').show(new PageApp.Views.FiltersView({
        model: ent.filters
      }));
    }, this);
  }

  return {
    initialize: function initialize() {
      initEvents();
    }
  };
};
"use strict";

PageApp.Ent.Filters = Backbone.Model.extend({
  defaults: {
    type: 'auctions',
    layout: 'list',
    currentCountry: ''
  },
  getAuctionCount: function getAuctionCount() {
    return this.get('countEvent') + this.get('countFeaturedEvent') + this.get('countWebcast') + this.get('countFeaturedWebcast');
  }
});
"use strict";

PageApp.Ent.HomePage = Backbone.Model.extend({
  defaults: {}
});
"use strict";

PageApp.Views.AuctioneerStripView = Backbone.Marionette.ItemView.extend({
  initialize: function initialize(options) {
    this.options = options;
  },
  template: hbs.templates.auctioneerStrip,
  serializeData: function serializeData() {
    var content = {
      contextPath: myApp.ent.config.get('contextPath'),
      auctioneerName: this.model.get('name'),
      auctioneerEmail: this.model.get('email'),
      logo: this.model.get('logo'),
      contactNumber: this.model.get('contactNumber'),
      auctioneerWebsite: this.model.get('website'),
      auctioneerId: this.model.get('auctioneerId'),
      JspPublicCodes_JSP_AUCTIONEER_STRIP_SALEMGTBY: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTIONEER_STRIP_SALEMGTBY'),
      JspPublicCodes_JSP_AUCTIONEER_STRIP_ENQUIRIES: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTIONEER_STRIP_ENQUIRIES'),
      JspPublicCodes_JSP_SHORT_TELEPHONE: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_SHORT_TELEPHONE'),
      JspPublicCodes_JSP_EMAIL: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_EMAIL'),
      JspPublicCodes_JSP_WEBSITE: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_WEBSITE'),
      awaitingImageMessage: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AWAITING_IMAGE')
    };
    return content;
  }
});
"use strict";

PageApp.Views.CalendarLayout = Backbone.Marionette.LayoutView.extend({
  template: hbs.templates.homePageLayout
});
"use strict";

PageApp.Views.FiltersView = Backbone.Marionette.ItemView.extend({
  getTemplate: function getTemplate() {
    return hbs.templates.filters;
  },
  initialize: function initialize(options) {
    this.options = options;
  },
  events: {
    'click .x-layout': 'handleToggleAuctionLayout',
    'click .x-type': 'handleToggleAuctionType',
    'click .x-country': 'handleToggleCountry'
  },
  serializeData: function serializeData() {
    var countryPlaceHolder = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_UPCOMING_AUCTIONS_COUNTRY');
    this.model.set('currentCountry', countryPlaceHolder);
    var showMarketplace = this.model.get('countMarketplaceItems') > 0;
    var showCountries = _.size(this.model.get('countries')) > 1;
    var showAuctions = this.model.getAuctionCount() > 0 && showMarketplace;

    if (showMarketplace && this.model.getAuctionCount() <= 0) {
      myApp.ent.user.setPreference('homecalType', {
        value: 'marketplace'
      });
    }

    var type = myApp.ent.user.getPreference('homecalType', {
      value: 'auctions'
    });
    var showLayoutToggle = this.model.getAuctionCount() > 0 && type === 'auctions';
    var showFilters = this.model.getAuctionCount() > 0 || showMarketplace;
    var isEmpty = this.model.getAuctionCount() <= 0 && !showMarketplace;
    var layout = myApp.ent.user.getPreference('homecalLayout', {
      value: 'gallery'
    });
    return {
      isEmpty: isEmpty,
      showFilters: showFilters,
      emptyView: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_HOMECAL_EMPTY_VIEW'),
      listView: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_UPCOMING_AUCTIONS_LIST_VIEW'),
      galleryView: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_UPCOMING_AUCTIONS_GALLERY_VIEW'),
      allCountriesText: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_UPCOMING_AUCTIONS_ALL_COUNTRIES'),
      auctionsTab: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_UPCOMING_AUCTIONS_TAB'),
      marketplaceTab: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_MARKETPLACE_TAB'),
      countryPlaceHolder: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_UPCOMING_AUCTIONS_COUNTRY'),
      currentCountry: this.model.get('currentCountry'),
      showCountries: showCountries,
      countries: this.model.get('countries'),
      showMarketplace: showMarketplace,
      showAuctions: showAuctions,
      showLayoutToggle: showLayoutToggle,
      isAuctionTypeActive: type === 'auctions',
      isMarketplaceTypeActive: type === 'marketplace',
      isGridLayoutActive: type === 'auctions' && layout === 'gallery',
      isListLayoutActive: type === 'auctions' && layout === 'list'
    };
  },
  handleToggleCountry: function handleToggleCountry(e) {
    e.preventDefault();
    var country = $(e.currentTarget).data('country');

    if (country === 'all') {
      this.model.set('currentCountry', myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_UPCOMING_AUCTIONS_ALL_COUNTRIES'));
    } else {
      this.model.set('currentCountry', country);
    }

    myApp.vent.trigger('homecal:toggleCountry', {
      country: country
    });
  },
  handleToggleAuctionLayout: function handleToggleAuctionLayout(e) {
    e.preventDefault();
    var layout = $(e.currentTarget).data('layout');
    myApp.ent.user.setPreference('homecalLayout', layout);
    myApp.vent.trigger('homecal:toggleLayout');
    return false;
  },
  handleToggleAuctionType: function handleToggleAuctionType(e) {
    e.preventDefault();
    var type = $(e.currentTarget).data('type');
    myApp.ent.user.setPreference('homecalType', type);
    myApp.vent.trigger('homecal:toggleType');
    return false;
  }
});
"use strict";

PageApp.Views.HomeLayout = Backbone.Marionette.LayoutView.extend({
  template: hbs.templates.homePageLayout,
  className: function className() {
    return myApp.ent.config.get('containerClass');
  },
  regions: {
    bannerRegion: '#bannerView',
    searchRegion: '#homeSearchInputView',
    filtersRegion: '#filtersView',
    upcomingRegion: '#upcomingView'
  }
});
"use strict";

PageApp.Views.UpcomingAuctioneerView = Backbone.Marionette.ItemView.extend({
  initialize: function initialize(options) {
    this.options = options;
  },
  template: hbs.templates.upcomingAuctioneer,
  serializeData: function serializeData() {
    var ends = myApp.reqres.request('i16:getString', 'JspPublicCodes_AUCTION_ENDS');
    var m1 = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_FEATURED_AUCTIONS');
    var m2 = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_HOMEPAGE_EVENT_AUCTIONS');
    var m3 = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_HOMEPAGE_WEBCAST_AUCTIONS');
    var upcomingAuctions = this.model.upcomingAuctions;
    var upcomingFeaturedAuctions = this.model.upcomingFeaturedAuctions;
    var unfeaturedMessage = '';

    if (this.model.countEvent > 0 || this.model.countWebcast > 0) {
      if (this.model.countEvent > 0) {
        unfeaturedMessage += ' ' + this.model.countEvent + ' ' + m2;
      }

      if (this.model.countWebcast > 0) {
        unfeaturedMessage += ' ' + this.model.countWebcast + ' ' + m3;
      }
    }

    var featuredMessage = '';

    if (this.model.countFeaturedEvent > 0 || this.model.countFeaturedWebcast > 0) {
      featuredMessage = m1;

      if (this.model.countFeaturedEvent > 0) {
        featuredMessage += ' ' + this.model.countFeaturedEvent + ' ' + m2;
      }

      if (this.model.countFeaturedWebcast > 0) {
        featuredMessage += ' ' + this.model.countFeaturedWebcast + ' ' + m3;
      }
    }

    var itemMessage = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM');
    var itemsMessage = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEMS');

    for (var key in upcomingAuctions) {
      upcomingAuctions[key].message = upcomingAuctions[key].itemCount > 1 ? itemsMessage : itemMessage;
    }

    for (var key2 in upcomingFeaturedAuctions) {
      upcomingFeaturedAuctions[key2].message = upcomingFeaturedAuctions[key2].itemCount > 1 ? itemsMessage : itemMessage;
    }

    var isAuctioneerHome;
    var homeCalToggle;

    if (myApp.ent.config.get('page') === 'home') {
      isAuctioneerHome = true;
      homeCalToggle = 9;
    } else {
      isAuctioneerHome = false;
      homeCalToggle = 12;
    }

    return {
      logoDims: {
        width: 100,
        height: 75,
        operation: 'pad'
      },
      logoDimsLg: {
        width: 200,
        height: 150,
        operation: 'pad'
      },
      homeCalToggle: homeCalToggle,
      isAuctioneerHome: isAuctioneerHome,
      ends: ends,
      featuredMessage: featuredMessage,
      unfeaturedMessage: unfeaturedMessage,
      contextPath: myApp.ent.config.get('contextPath'),
      upcomingAuctions: upcomingAuctions,
      upcomingFeaturedAuctions: upcomingFeaturedAuctions,
      liveAuctioneers: this.model.liveAuctioneers,
      awaitingImageMessage: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AWAITING_IMAGE')
    };
  },
  onShow: function onShow() {
    this.addRegistrationLinks(this.model.upcomingFeaturedAuctions);
    this.addRegistrationLinks(this.model.upcomingAuctions);
  },
  addRegistrationLinks: function addRegistrationLinks(auctions) {
    var contextPath = myApp.ent.config.get('contextPath');

    for (var key in auctions) {
      var auction = auctions[key];

      if (auction.catalogue) {
        var link = '<span id="catalogueAuction' + auction.auctionId + '">' + myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CATALOGUE_AUCTION') + '</span>';
        this.$el.find('#registration_' + auction.auctionId).html(link);
      } else {
        var regState = this.model.registeredFor[auction.auctionId];

        if (!regState) {
          link = '<a class="register-for-auction" id="registerForAuctionFromAuction' + auction.auctionId + '" href="' + contextPath + '/registerForAuction/' + auction.auctionId + '">' + myApp.reqres.request('i16:getString', 'AuctionRegistrantStatus_NOT_REGISTERED') + '</a>';
          this.$el.find('#registration_' + auction.auctionId).html(link);
        } else {
          link = '<span class="register-for-auction" id="auctionstatus' + auction.auctionId + '">' + myApp.reqres.request('i16:getString', 'AuctionRegistrantStatus_' + regState) + '</span>';
          this.$el.find('#registration_' + auction.auctionId).html(link);
        }
      }
    }
  }
});
"use strict";

PageApp.Views.UpcomingGalleryView = Backbone.Marionette.ItemView.extend({
  initialize: function initialize(options) {
    this.options = options;
  },
  template: hbs.templates.upcomingGallery,
  appendRegistrantStatusToAuction: function appendRegistrantStatusToAuction(auction) {
    return Object.assign({}, auction, {
      registrantStatus: this.model.registeredFor[auction.auctionId]
    });
  },
  appendStartTimeStringToAuction: function appendStartTimeStringToAuction(auction) {
    if (auction.auctionStartTime && auction.endsOrStarts !== 'Started') {
      var startString;

      if (auction.auctionStartTime < myApp.ent.config.getNormalisedTimeMillis()) {
        startString = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_STARTED');
      } else {
        startString = auction.auctionStartTimeString;
      }

      return Object.assign({}, auction, {
        startTimeString: startString
      });
    }

    return auction;
  },
  serializeData: function serializeData() {
    var upcomingAuctions = this.filterByCountry(this.model.upcomingAuctions, this.model.country).map(this.appendRegistrantStatusToAuction.bind(this)).map(this.appendStartTimeStringToAuction.bind(this));
    var upcomingFeaturedAuctions = this.filterByCountry(this.model.upcomingFeaturedAuctions, this.model.country).map(this.appendRegistrantStatusToAuction.bind(this)).map(this.appendStartTimeStringToAuction.bind(this));
    var itemMessage = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM');
    var itemsMessage = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEMS');

    for (var key in upcomingAuctions) {
      upcomingAuctions[key].message = upcomingAuctions[key].itemCount > 1 ? itemsMessage : itemMessage;
    }

    for (var key2 in upcomingFeaturedAuctions) {
      upcomingFeaturedAuctions[key2].message = upcomingFeaturedAuctions[key2].itemCount > 1 ? itemsMessage : itemMessage;
    }

    var dims = myApp.ent.layoutHacks.getDimensionsHomeCal();
    dims.operation = myApp.ent.config.get('auctionImageTransformOperation');
    return {
      dims: dims,
      contextPath: myApp.ent.config.get('contextPath'),
      upcomingAuctions: upcomingAuctions,
      upcomingFeaturedAuctions: upcomingFeaturedAuctions,
      awaitingImageMessage: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AWAITING_IMAGE'),
      auctionRegistrantStatusMessage: {
        ISSUE_WITH_DEPOSIT: myApp.reqres.request('i16:getString', 'AuctionRegistrantStatus_ISSUE_WITH_DEPOSIT'),
        NOT_REGISTERED: myApp.reqres.request('i16:getString', 'AuctionRegistrantStatus_NOT_REGISTERED'),
        PENDING: myApp.reqres.request('i16:getString', 'AuctionRegistrantStatus_PENDING'),
        APPROVED: myApp.reqres.request('i16:getString', 'AuctionRegistrantStatus_APPROVED'),
        SUSPENDED: myApp.reqres.request('i16:getString', 'AuctionRegistrantStatus_SUSPENDED'),
        AWAITING_DEPOSIT: myApp.reqres.request('i16:getString', 'AuctionRegistrantStatus_AWAITING_DEPOSIT'),
        INSUFFICIENT_DATA: myApp.reqres.request('i16:getString', 'AuctionRegistrantStatus_INSUFFICIENT_DATA')
      },
      registeredAuctions: this.model.registeredFor,
      catalogueAuctionMessage: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CATALOGUE_AUCTION'),
      maxWidth: dims.width
    };
  },
  filterByCountry: function filterByCountry(auctions, country) {
    if (!this.model.country || this.model.country === 'all') {
      return auctions;
    }

    var filteredAuctions = [];

    for (var key in auctions) {
      var location = auctions[key].location;

      if (location.indexOf(this.model.country) > -1) {
        filteredAuctions.push(auctions[key]);
      }
    }

    return filteredAuctions;
  }
});
"use strict";

PageApp.Views.UpcomingListView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.upcomingList,
  appendRegistrantStatusToAuction: function appendRegistrantStatusToAuction(auction) {
    return Object.assign({}, auction, {
      registrantStatus: this.model.registeredFor[auction.auctionId]
    });
  },
  appendStartTimeStringToAuction: function appendStartTimeStringToAuction(auction) {
    if (auction.auctionStartTime && auction.endsOrStarts !== 'Started') {
      var startString;

      if (auction.auctionStartTime < myApp.ent.config.getNormalisedTimeMillis()) {
        startString = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_STARTED');
      } else {
        startString = auction.auctionStartTimeString;
      }

      return Object.assign({}, auction, {
        startTimeString: startString
      });
    }

    return auction;
  },
  serializeData: function serializeData() {
    var upcoming;
    var upcomingAuctions = this.filterByCountry(this.model.upcomingAuctions, this.model.country).map(this.appendRegistrantStatusToAuction.bind(this)).map(this.appendStartTimeStringToAuction.bind(this));
    var upcomingFeaturedAuctions = this.filterByCountry(this.model.upcomingFeaturedAuctions, this.model.country).map(this.appendRegistrantStatusToAuction.bind(this)).map(this.appendStartTimeStringToAuction.bind(this));
    var showFeaturedAuctions = this.model.upcomingFeaturedAuctions.length > 0;
    var isCalendarView = myApp.ent.config.attributes.page === 'calendar';
    var itemMessage = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM');
    var itemsMessage = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEMS');
    var showAuctionLogos = false;

    try {
      showAuctionLogos = myApp.ent.webApp.attributes.showAuctionLogosOnLandingPages;
    } catch (err) {
      showAuctionLogos = false;
    }

    for (var key in upcomingAuctions) {
      var upcomingAuction = upcomingAuctions[key];
      upcomingAuction.message = upcomingAuction.itemCount > 1 ? itemsMessage : itemMessage;
      upcomingAuction.hasLogo = showAuctionLogos && upcomingAuction.auctionLogo;
    }

    for (var key2 in upcomingFeaturedAuctions) {
      var upcomingFeaturedAuction = upcomingFeaturedAuctions[key2];
      upcomingFeaturedAuction.message = upcomingFeaturedAuction.itemCount > 1 ? itemsMessage : itemMessage;
      upcomingFeaturedAuction.hasLogo = showAuctionLogos && upcomingFeaturedAuction.auctionLogo;
    } // Reduce the number of items for auctions that have a logo (if the webapp is set to show them)


    if (showAuctionLogos) {
      for (var i = 0; i < upcomingAuctions.length; i++) {
        upcoming = upcomingAuctions[i];

        if (upcoming.hasAuctionLogo && upcoming.upcomingItems.length > 11) {
          upcoming.upcomingItems = upcoming.upcomingItems.slice(0, 11);
        }
      }

      for (i = 0; i < upcomingFeaturedAuctions.length; i++) {
        upcoming = upcomingFeaturedAuctions[i];

        if (upcoming.hasAuctionLogo && upcoming.upcomingItems.length > 11) {
          upcoming.upcomingItems = upcoming.upcomingItems.slice(0, 11);
        }
      }
    }

    var dims = Object.assign(myApp.ent.layoutHacks.getDimensionsHomeCal(), {
      operation: myApp.ent.config.get('auctionImageTransformOperation')
    });
    var logoDims = Object.assign({}, dims, {
      operation: 'pad'
    });
    return {
      dims: dims,
      logoDims: logoDims,
      contextPath: myApp.ent.config.get('contextPath'),
      upcomingAuctions: upcomingAuctions,
      upcomingFeaturedAuctions: upcomingFeaturedAuctions,
      featuredAuctionsTitle: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_FEATURED_AUCTIONS'),
      auctionsTitle: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_HOMEPAGE_AUCTIONS'),
      auctionCalendarTitle: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_CALENDER'),
      showFeaturedAuctions: showFeaturedAuctions,
      isCalendarView: isCalendarView,
      awaitingImageMessage: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AWAITING_IMAGE'),
      auctionRegistrantStatusMessage: {
        ISSUE_WITH_DEPOSIT: myApp.reqres.request('i16:getString', 'AuctionRegistrantStatus_ISSUE_WITH_DEPOSIT'),
        NOT_REGISTERED: myApp.reqres.request('i16:getString', 'AuctionRegistrantStatus_NOT_REGISTERED'),
        PENDING: myApp.reqres.request('i16:getString', 'AuctionRegistrantStatus_PENDING'),
        APPROVED: myApp.reqres.request('i16:getString', 'AuctionRegistrantStatus_APPROVED'),
        SUSPENDED: myApp.reqres.request('i16:getString', 'AuctionRegistrantStatus_SUSPENDED'),
        AWAITING_DEPOSIT: myApp.reqres.request('i16:getString', 'AuctionRegistrantStatus_AWAITING_DEPOSIT'),
        INSUFFICIENT_DATA: myApp.reqres.request('i16:getString', 'AuctionRegistrantStatus_INSUFFICIENT_DATA')
      },
      catalogueAuctionMessage: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CATALOGUE_AUCTION'),
      showAuctionLogos: showAuctionLogos
    };
  },
  addRegistrationLinks: function addRegistrationLinks(auctions) {
    var contextPath = myApp.ent.config.get('contextPath');

    for (var key in auctions) {
      var auction = auctions[key];
      var regState = this.model.registeredFor[auction.auctionId];
      var link;

      if (auction.catalogue) {
        link = '<span id="catalogueAuction' + auction.auctionId + '">' + myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CATALOGUE_AUCTION') + '</span>';
        this.$el.find('#registration_' + auction.auctionId).html(link);
      } else {
        if (!regState) {
          link = '<a class="register-for-auction" id="registerForAuctionFromAuction' + auction.auctionId + '" href="' + contextPath + '/registerForAuction/' + auction.auctionId + '">' + myApp.reqres.request('i16:getString', 'AuctionRegistrantStatus_NOT_REGISTERED') + '</a>';
          this.$el.find('#registration_' + auction.auctionId).html(link);
        } else {
          link = '<span class="register-for-auction" id="auctionstatus' + auction.auctionId + '">' + myApp.reqres.request('i16:getString', 'AuctionRegistrantStatus_' + regState) + '</span>';
          this.$el.find('#registration_' + auction.auctionId).html(link);
        }
      }
    }
  },
  filterByCountry: function filterByCountry(auctions, country) {
    if (!this.model.country || this.model.country === 'all') {
      return auctions;
    }

    var filteredAuctions = [];

    for (var key in auctions) {
      var location = auctions[key].location;

      if (location.indexOf(this.model.country) > -1) {
        filteredAuctions.push(auctions[key]);
      }
    }

    return filteredAuctions;
  }
});
"use strict";

PageApp.Views.UpcomingMarketplaceView = Backbone.Marionette.ItemView.extend({
  initialize: function initialize(options) {
    this.options = options;
  },
  template: hbs.templates.upcomingMarketplace,
  serializeData: function serializeData() {
    var itemMessage = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM');
    var itemsMessage = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEMS');
    var viewAllLabel = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_MARKETPLACE_VIEW_ALL');
    var upcomingMarketplace = this.model.upcomingMarketplace;
    var dims = myApp.ent.layoutHacks.getDimensionsHomeCal();
    dims.operation = myApp.ent.config.get('auctionImageTransformOperation');

    for (var key in upcomingMarketplace) {
      upcomingMarketplace[key].message = upcomingMarketplace[key].itemCount > 1 ? itemsMessage : itemMessage;
    }

    return {
      dims: dims,
      viewAllLabel: viewAllLabel,
      contextPath: myApp.ent.config.get('contextPath'),
      upcomingMarketplace: upcomingMarketplace,
      awaitingImageMessage: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AWAITING_IMAGE'),
      maxWidth: dims.width
    };
  }
});
"use strict";

PageApp.Controllers.ItemlandRouter = function (config) {
  function initCommands() {}

  function initEvents() {
    myApp.vent.on('layoutcontrol:display', function () {
      var page = myApp.ent.config.get('page');

      if (page === 'itemland') {
        myApp.vent.trigger('itemland:display');
      }
    }, this);
    myApp.vent.on('itemland:display', function (singleItemModel) {
      if (singleItemModel) {
        this.myModel = singleItemModel;
      } else {
        // no page reload
        singleItemModel = this.myModel;
        singleItemModel.timedModels = undefined;
      }

      var singleItem = new PageApp.Ent.BasicEntity(singleItemModel);
      myApp.mainRegion.show(new PageApp.Views.ItemlandLayout({
        model: singleItem
      }));

      if (singleItemModel.auction && !singleItemModel.auction.catalogue && singleItemModel.auction.webcastAuction && singleItemModel.auction.statusId === 4) {
        myApp.vent.trigger('landing:webcast:check', {
          webcastStartTime: singleItemModel.auction.webcastStartTime,
          auctionId: singleItemModel.auction.id
        });
      }
    }, this);
  }

  return {
    initialize: function initialize(models) {
      initEvents();
      initCommands();
    }
  };
};
"use strict";

PageApp.Views.ItemBreadcrumbView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.itemBreadcrumb,
  serializeData: function serializeData() {
    var content = {
      JspPublicCodes_JSP_TRANSLATION_DISCLAIMER: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_TRANSLATION_DISCLAIMER'),
      JspPublicCodes_JSP_MY_SALES_BACK_TO_MY_SALES: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_MY_SALES_BACK_TO_MY_SALES'),
      JspPublicCodes_JSP_VIEW_MARKETPLACE_FOR: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_VIEW_MARKETPLACE_FOR'),
      JspPublicCodes_JSP_VIEW_AUCTION: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_VIEW_AUCTION'),
      JspPublicCodes_JSP_PREVIOUS_ITEM: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_PREVIOUS_ITEM'),
      JspPublicCodes_JSP_NEXT_ITEM: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_NEXT_ITEM')
    };

    _.extend(content, this.model.attributes);

    return content;
  }
});
"use strict";

PageApp.Views.ItemDescriptionView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.itemDescription,
  serializeData: function serializeData() {
    var itemDescription = this.model.get('itemDescription');

    if (!itemDescription || itemDescription.length === 0) {
      itemDescription = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_NO_ITEM_DESCRIPTION');
    }

    var content = {
      itemDescription: itemDescription
    };
    return content;
  }
});
"use strict";

PageApp.Views.ItemDocumentsView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.itemDocuments,
  serializeData: function serializeData() {
    var numbDocs = _.size(this.model.get('documents'));

    var numbAuctionDocs = _.size(this.model.get('auction').documents);

    if (numbDocs + numbAuctionDocs > 0) {
      var docsActive = 'active';
    }

    var content = {
      JspPublicCodes_JSP_ITEM_DOCUMENTS: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_DOCUMENTS'),
      JspPublicCodes_JSP_AUCTION_DOCUMENTS: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_DOCUMENTS'),
      title: this.model.get('title'),
      hasDocuments: numbDocs + numbAuctionDocs > 0,
      hasItemDocuments: numbDocs > 0,
      hasAuctionDocuments: numbAuctionDocs > 0,
      documents: this.model.get('documents'),
      aDocuments: this.model.get('auction').documents,
      lotNumber: this.model.get('lotNumber'),
      docsActive: docsActive
    };
    return content;
  }
});
"use strict";

PageApp.Views.ItemImagesView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.itemImages,
  serializeData: function serializeData() {
    var numbImages = _.size(this.model.get('images'));

    var dims = {
      width: 150,
      height: 112
    };
    dims.operation = myApp.ent.config.get('itemImageTransformOperation');
    var content = {
      lbDims: {},
      // No width and height so full size will be retrieved from cloudinary
      dims: dims,
      title: this.model.get('title'),
      hasImages: numbImages > 0,
      images: this.model.get('images'),
      lotNumber: this.model.get('lotNumber'),
      numbImages: numbImages
    };
    return content;
  },
  onRender: function onRender() {
    this.prettyphoto();
  },
  prettyphoto: function prettyphoto() {
    /* Pretty Photo */
    // WARNING Do NOT change youtube_link since it is used
    // in the aa_listing.description field
    // to enable videos of Lots to loaded in PrettyPhoto
    var prettyPhotoOptions = {
      show_title: false,
      social_tools: false,
      allow_resize: true,
      deeplinking: false,
      overlay_gallery: false
    };
    this.$el.find('.youtube_link').prettyPhoto(prettyPhotoOptions);
    this.$el.find("a[rel^='prettyPhoto']").prettyPhoto(prettyPhotoOptions);
  }
});
"use strict";

PageApp.Views.ItemRelationsView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.itemRelations,
  serializeData: function serializeData() {
    var dims = {
      width: 170,
      height: 125
    };
    dims.operation = myApp.ent.config.get('itemImageTransformOperation');
    var content = {
      dims: dims,
      awaitingImageMessage: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AWAITING_IMAGE'),
      JspPublicCodes_JSP_RELATED_ITEMS: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_RELATED_ITEMS') // unescape and trim the title for tooltips.

    };
    var relatedItems = this.model.attributes.relatedItems;
    var escapedText = document.createElement('textarea');

    for (var i = 0; i < relatedItems.length; i++) {
      if (relatedItems[i].title.length > 100) {
        escapedText.innerHTML = relatedItems[i].title.slice(0, 100) + '...';
      } else {
        escapedText.innerHTML = relatedItems[i].title;
      }

      this.model.attributes.relatedItems[i].tooltip = escapedText.value;
    }

    _.extend(content, this.model.attributes);

    return content;
  }
});
"use strict";

PageApp.Views.ItemTabsView = Backbone.Marionette.ItemView.extend({
  getTemplate: function getTemplate() {
    return hbs.templates.itemTabs;
  },
  serializeData: function serializeData() {
    var descriptionActive, videosActive, imagesActive, makeOfferActive;
    var hasDescription, hasVideos, hasImages, hasDocuments;

    if (this.model.get('description') && this.model.get('description').length > 0) {
      hasDescription = true;
    }

    if (this.model.get('videos') && _.size(this.model.get('videos')) > 0) {
      hasVideos = true;
    }

    if (this.model.get('images') && _.size(this.model.get('images')) > 0) {
      hasImages = true;
    }

    if (this.model.get('documents') && _.size(this.model.get('documents')) > 0) {
      hasDocuments = true;
    }

    if (!hasDescription && hasImages) {
      imagesActive = 'active';
    } else {
      descriptionActive = 'active';
    }

    var content = {
      JspPublicCodes_JSP_AUCTION_INFORMATION: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_INFORMATION'),
      JspPublicCodes_JSP_DESCRIPTION: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_DESCRIPTION'),
      JspPublicCodes_JSP_VIDEOS_LABEL: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_VIDEOS_LABEL'),
      JspPublicCodes_JSP_PHOTOS_LABEL: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_PHOTOS_LABEL'),
      JspPublicCodes_JSP_ADDITIONAL_DOCUMENTS: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ADDITIONAL_DOCUMENTS'),
      JspPublicCodes_JSP_ITEM_DOCUMENTS: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM_DOCUMENTS'),
      JspPublicCodes_JSP_CONTACT_SELLER: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CONTACT_SELLER'),
      JspPublicCodes_JSP_MAKE_OFFER: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_MAKE_OFFER'),
      descriptionActive: descriptionActive,
      videosActive: videosActive,
      imagesActive: imagesActive,
      makeOfferActive: makeOfferActive,
      hasVideos: hasVideos,
      hasImages: hasImages,
      hasDocuments: hasDocuments
    };
    return content;
  }
});
"use strict";

PageApp.Views.ItemVideosView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.itemVideos,
  serializeData: function serializeData() {
    var numbVideos = _.size(this.model.get('videos'));

    var firstVideo;

    if (numbVideos > 0) {
      firstVideo = this.model.get('videos')[0];
    }

    var videosActive = null;

    if (numbVideos > 0) {
      videosActive = 'active';
    }

    var content = {
      protocol: myApp.ent.config.get('protocol'),
      title: this.model.get('title'),
      hasVideos: numbVideos > 0,
      videosActive: videosActive,
      firstVideo: firstVideo,
      videos: this.model.get('videos')
    };
    return content;
  }
});
"use strict";

PageApp.Views.ItemlandLayout = Backbone.Marionette.LayoutView.extend({
  getTemplate: function getTemplate() {
    return hbs.templates.itemlandLayout;
  },
  regions: {
    breadcrumbRegion: '#breadcrumbRegion',
    tabsRegion: '#tabsRegion',
    tabsTargetRegion: '#tabsTargetRegion',
    auctioneerStripRegion: '#auctioneerStripRegion',
    relatedItemRegion: '#relatedItemRegion',
    biddingRegion: '#biddingRegion',
    saleInfoRegion: '#saleInfoRegion'
  },
  events: {
    'click .x-tab-change': 'handleTabChange',
    'click .x-saleinfo-modal': 'handleSaleInfoShow'
  },
  serializeData: function serializeData() {
    var isWebcastGroupItem = this.model.get('itemType').webcastGroupItem;
    var content = {
      itemTitle: this.model.attributes.title,
      itemSummary: this.model.attributes.summary,
      isLoggedIn: myApp.ent.user.isLoggedIn(),
      numberOrRef: isWebcastGroupItem ? '' : myApp.ent.timedHelper.getNumberOrRef(this.model.attributes) + ': '
    };

    _.extend(content, this.model.attributes);

    return content;
  },
  onRender: function onRender() {
    this.showBreadcrumbs();
    this.showTabs();
    var hasImages = this.model.get('images') && _.size(this.model.get('images')) > 0;
    var hasDescription = this.model.get('description') && this.model.get('description').length > 0;

    if (!hasDescription && hasImages) {
      this.showImages();
    } else {
      this.showItemDescription();
    }

    this.showAuctioneerStrip();
    this.showRelatedItems();

    if (this.model.get('timedModels')) {
      myApp.vent.trigger('timed:display', {
        region: this.getRegion('biddingRegion'),
        model: this.model.get('timedModels')
      });
    } else {
      myApp.vent.trigger('timed:display', {
        region: this.getRegion('biddingRegion')
      });
    }
  },
  handleTabChange: function handleTabChange(e) {
    if (e) e.preventDefault();
    this.$el.find('.x-tab-change').each(function () {
      var $this = $(this);
      $this.parent().removeClass('active');
    });
    var $target = $(e.currentTarget);
    $target.parent().addClass('active');
    var toggle = $target.data('toggle');
    this.model.set('toggle', toggle);

    if (toggle === 'videos') {
      this.showVideos();
    } else if (toggle === 'images') {
      this.showImages();
    } else if (toggle === 'description') {
      this.showItemDescription();
    } else if (toggle === 'documents') {
      this.showDocuments();
    }
  },
  showContactSeller: function showContactSeller() {
    this.getRegion('tabsTargetRegion').show(new PageApp.Views.ItemImagesView({
      model: this.model
    }));
  },
  showMakeOffer: function showMakeOffer() {
    this.getRegion('tabsTargetRegion').show(new PageApp.Views.ItemImagesView({
      model: this.model
    }));
  },
  showImages: function showImages() {
    this.getRegion('tabsTargetRegion').show(new PageApp.Views.ItemImagesView({
      model: this.model
    }));
  },
  showVideos: function showVideos() {
    this.getRegion('tabsTargetRegion').show(new PageApp.Views.ItemVideosView({
      model: this.model
    }));
  },
  showDocuments: function showDocuments() {
    this.getRegion('tabsTargetRegion').show(new PageApp.Views.ItemDocumentsView({
      model: this.model
    }));
  },
  handleSaleInfoShow: function handleSaleInfoShow(e) {
    if (e) {
      e.preventDefault();
    }

    var saleInfo = new PageApp.Ent.BasicEntity(this.model.attributes.auction.saleInfo);
    saleInfo.set('source', 'landing');
    saleInfo.set('address', this.model.attributes.location);
    saleInfo.set('locationLatitude', this.model.attributes.locationLatitude);
    saleInfo.set('locationLongitude', this.model.attributes.locationLongitude);
    saleInfo.set('buyersPremium', this.model.attributes.buyersPremium);
    saleInfo.set('hammerTaxRate', this.model.attributes.hammerTaxRate);
    saleInfo.set('bpTaxRate', this.model.attributes.bpTaxRate);
    saleInfo.set('chargesTaxRate', this.model.attributes.chargesTaxRate);
    saleInfo.set('hideTextOrAsSpecified', true);
    myApp.vent.trigger('saleinfo:display', {
      saleInfoModel: saleInfo
    });
  },
  showItemDescription: function showItemDescription() {
    var itemDescription = new PageApp.Ent.BasicEntity();
    itemDescription.set('itemDescription', this.model.attributes.description);
    this.getRegion('tabsTargetRegion').show(new PageApp.Views.ItemDescriptionView({
      model: itemDescription
    }));
  },
  showBreadcrumbs: function showBreadcrumbs() {
    var itemBreadcrumb = new PageApp.Ent.BasicEntity();
    itemBreadcrumb.set('itemId', this.model.attributes.id);
    itemBreadcrumb.set('contextPath', myApp.ent.config.get('contextPath'));
    itemBreadcrumb.set('showGraphsForMySales', this.model.attributes.showGraphsForMySales);
    itemBreadcrumb.set('containsTranslatedContent', this.model.attributes.containsTranslatedContent); // true); // BD-2915 to style this in the ui...

    itemBreadcrumb.set('marketplace', this.model.attributes.marketplaceLot);
    itemBreadcrumb.set('auctionId', this.model.attributes.auction.id);
    itemBreadcrumb.set('continentIds', this.model.attributes.location.continentIds);
    this.getRegion('breadcrumbRegion').show(new PageApp.Views.ItemBreadcrumbView({
      model: itemBreadcrumb
    }));
  },
  showAuctioneerStrip: function showAuctioneerStrip() {
    var auctioneer = new PageApp.Ent.BasicEntity(this.model.attributes.auction.auctioneer);

    if (myApp.ent.webApp.showAuctioneerStrip(myApp.ent.config.get('page'))) {
      // BD-2915 to style this set to true - or ue the contextPath myApp.ent.config.get('contextPath') === '/webcast-us' || myApp.ent.config.get('contextPath') === '/auction-014') {
      this.getRegion('auctioneerStripRegion').show(new PageApp.Views.AuctioneerStripView({
        model: auctioneer
      }));
    }
  },
  showRelatedItems: function showRelatedItems() {
    if (this.model.get('auction').auctioneer.clientOptions.hideRelatedItems) {
      return;
    }

    myApp.utils.ajax.get(null, myApp.utils.ajax.getApiEndpoint('relatedItems') + '/' + this.model.get('id'), _.bind(function (response) {
      if (response) {
        for (var key in response) {
          var imageModel = response[key].imageModel;

          if (imageModel) {
            imageModel.thumbSrc = myApp.utils.types.toCloudinaryImageSrc(imageModel, '170', '125', 70, 'fill', null);
          } else {
            response[key].imageModel = {
              thumbSrc: ''
            };
          }
        }

        var model = {
          relatedItems: response,
          itemId: this.model.get('id'),
          category: this.model.get('category'),
          contextPath: myApp.ent.config.get('contextPath')
        };
        var reg = this.getRegion('relatedItemRegion');
        reg.show(new PageApp.Views.ItemRelationsView({
          model: new PageApp.Ent.BasicEntity(model)
        }));
      }
    }, this));
  },
  showTabs: function showTabs() {
    this.getRegion('tabsRegion').show(new PageApp.Views.ItemTabsView({
      model: this.model
    }));
  }
});
"use strict";

PageApp.Views.LandingBannerView = Backbone.Marionette.ItemView.extend({
  getTemplate: function getTemplate() {
    return hbs.templates.landingBanner;
  },
  serializeData: function serializeData() {
    var hclass, available;
    var totalNumberOfMatches = this.model.get('totalNumberOfMatches');

    if (this.model.get('bannerType') === 'auction') {
      hclass = 'auction-header';

      if (totalNumberOfMatches === 1) {
        available = totalNumberOfMatches + ' ' + myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_INFORMATION_ITEM_AVAILABLE');
      } else {
        available = totalNumberOfMatches + ' ' + myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_INFORMATION_ITEMS_AVAILABLE');
      }
    } else if (this.model.get('bannerType') === 'marketplace') {
      hclass = 'marketplace-header';
    } else if (this.model.get('bannerType') === 'search') {
      hclass = 'hidden';
    }

    var content = {
      message: this.model.get('title'),
      hclass: hclass,
      available: available,
      description: this.model.get('auctionDescription'),
      endDate: this.model.get('auctionEndDate'),
      webcast: this.model.get('webcast'),
      startDate: this.model.get('auctionStartDate'),
      startTime: this.model.get('auctionStartTime'),
      endTime: this.model.get('auctionEndTime')
    };
    return content;
  }
});
"use strict";

PageApp.Views.LandingLayout = Backbone.Marionette.LayoutView.extend({
  getTemplate: function getTemplate() {
    return hbs.templates.landingLayout;
  },
  initialise: function initialise(options) {
    this.options = options;
  },
  regions: {
    landingBannerRegion: '#landingBannerRegion',
    searchInputRegion: '#landingSearchInputRegion',
    layoutControlRegion: '#layoutControlRegion',
    searchFiltersRegion: '#searchFiltersRegion',
    pagingTopRegion: '#pagingTopRegion',
    auctioneerStripRegion: '#auctioneerStripRegion',
    biddingRegion: '#biddingRegion',
    pagingBottomRegion: '#pagingBottomRegion',
    saleInfoRegion: '#saleInfoRegion'
  },
  onRender: function onRender() {
    if (this.model.supportsSearch()) {
      myApp.vent.trigger('search:render', {
        searchInputRegion: this.getRegion('searchInputRegion'),
        model: this.model
      });
    }

    if (myApp.ent.config.attributes.page !== 'itemland') {
      this.layoutControlRegion.show(new PageApp.Views.ControlLayout({
        model: new PageApp.Ent.LayoutControl({
          parameters: this.model.get('parameters')
        })
      }));
    }

    if (this.model.supportsBanner()) {
      this.options.otherModels.landingBannerModel.set('totalNumberOfMatches', this.model.get('currentFilterModel').totalNumberOfMatches);

      if (myApp.ent.config.attributes.page === 'auctionland') {
        this.options.otherModels.landingBannerModel.set('webcast', this.model.get('saleInfoModel').webcast);
        this.options.otherModels.landingBannerModel.set('auctionDescription', this.model.get('saleInfoModel').description);
        this.options.otherModels.landingBannerModel.set('auctionStartDate', this.model.get('saleInfoModel').auctionStartDatePart);
        this.options.otherModels.landingBannerModel.set('auctionStartTime', this.model.get('saleInfoModel').auctionStartTimePart);
        this.options.otherModels.landingBannerModel.set('auctionEndDate', this.model.get('saleInfoModel').auctionDatePart);
        this.options.otherModels.landingBannerModel.set('auctionEndTime', this.model.get('saleInfoModel').auctionTimePart);
      }

      this.getRegion('landingBannerRegion').show(new PageApp.Views.LandingBannerView({
        model: this.options.otherModels.landingBannerModel
      }));
    }

    if (this.model.get('saleInfoModel')) {
      myApp.ent.saleInfo = new PageApp.Ent.BasicEntity(this.model.get('saleInfoModel'));
      myApp.ent.saleInfo.set('source', 'landing');
    }

    if (this.model.get('showFilters')) {
      myApp.vent.trigger('search:filters', {
        searchFiltersRegion: this.getRegion('searchFiltersRegion'),
        model: this.model
      });
    }

    if (myApp.ent.webApp.showAuctioneerStrip(myApp.ent.config.get('page'))) {
      this.getRegion('auctioneerStripRegion').show(new PageApp.Views.AuctioneerStripView({
        model: this.options.otherModels.auctioneer
      }));
    }

    if (this.model.supportsPaging()) {
      this.model.get('pagingModel').paginationPosition = 'top';
      this.getRegion('pagingTopRegion').show(new PageApp.Views.PagingView({
        model: this.model
      }));
      this.model.get('pagingModel').paginationPosition = 'bottom';
      this.getRegion('pagingBottomRegion').show(new PageApp.Views.PagingView({
        model: this.model
      }));
    } // check timedModels as the timed models that came down with the page may be stale


    if (this.options.otherModels.timedModels) {
      myApp.vent.trigger('timed:display', {
        region: this.getRegion('biddingRegion'),
        model: this.options.otherModels.timedModels
      });
    } else {
      myApp.vent.trigger('timed:display', {
        region: this.getRegion('biddingRegion')
      });
    }
  }
});
"use strict";

PageApp.Controllers.LandingPageRouter = function (config) {
  var ent = {};

  function initCommands() {}

  function initEvents() {
    myApp.vent.on('layoutcontrol:display', function () {
      var page = myApp.ent.config.get('page');

      if (page === 'auctionland' || page === 'marketland' || page === 'searchland') {
        myApp.vent.trigger('landing:display', {});
      }
    }, this);
    myApp.vent.on('layoutcontrol:toggle:open', function (config) {
      ent.searchFilters.get('parameters').parameters.showOpenOnly = config.showOpenOnly;
      ent.searchFilters.get('parameters').parameters.page = 0;
      var link = ent.searchFilters.getLink('showOpenOnly', config.showOpenOnly);
      myApp.utils.ajax.relocate(link);
    }, this);
    myApp.vent.on('landing:display', function (config) {
      var landingModel = config.landingModel;

      if (landingModel) {
        this.landingModel = config.landingModel;
      } else if (this.landingModel) {
        // the timedModels should be considered stale in this case and this tells the
        // timed bidding code to use its own cached model.
        landingModel = this.landingModel;
        landingModel.timedModels = undefined;
      }

      var auctioneer;

      if (landingModel.auction && landingModel.auction.auctioneer) {
        auctioneer = new PageApp.Ent.BasicEntity(landingModel.auction.auctioneer);
      }

      ent.searchFilters = new PageApp.Ent.SearchFilters(landingModel.filterBagModel);
      var showFilters = myApp.ent.user.getPreference('showFilters', {
        value: false
      });
      var showSaleInfoInPage = myApp.ent.webApp.get('showSaleInfoInPage');

      try {
        if (typeof showFilters === 'undefined') {
          showFilters = !!showSaleInfoInPage;
          myApp.ent.user.setPreference('showFilters', showFilters);
        }
      } catch (err) {
        console.log('Recoverable error setting show filters. ' + err);
      }

      var itemCount = myApp.request('reqres:timed:fetch:count');

      if (landingModel.timedModels) {
        if (_.size(landingModel.timedModels.TimedListModel.biddingItems) === 0) {
          showFilters = true;
          myApp.ent.user.setPreference('showFilters', showFilters);
        }
      } else {
        if (typeof itemCount !== 'undefined' && itemCount === 0) {
          showFilters = true;
          myApp.ent.user.setPreference('showFilters', showFilters);
        }
      }

      try {
        if (typeof showSaleInfoInPage === 'undefined') {
          showSaleInfoInPage = true;
        }
      } catch (err) {
        console.log('Recoverable error setting show sale info in page. ' + err);
      }

      if (showSaleInfoInPage) {
        if (typeof myApp.ent.user.getPreference('saleInfoActive') === 'undefined') {
          myApp.ent.user.setPreference('saleInfoActive', 'active');
          myApp.ent.user.setPreference('filtersActive', '');
        } // If GE force sale info/filters to display.


        var auctionPath = myApp.ent.config.get('contextPath');

        if (auctionPath === '/auction-028' || auctionPath === '/auction-029' || auctionPath === '/auction-030') {
          showFilters = true;
          myApp.ent.user.setPreference('showFilters', showFilters);
        }

        if (myApp.ent.config.get('page') === 'marketland' || myApp.ent.config.get('page') === 'searchland') {
          showFilters = true;
          myApp.ent.user.setPreference('showFilters', showFilters);
          myApp.ent.user.setPreference('saleInfoActive', '');
          myApp.ent.user.setPreference('filtersActive', 'active');
        }
      }

      myApp.ent.user.setPreference('showSaleInfoInPage', showSaleInfoInPage);
      ent.searchFilters.set('showFilters', showFilters);
      var otherModels = {
        auctionModel: new PageApp.Ent.BasicEntity(landingModel.auction),
        landingBannerModel: new PageApp.Ent.BasicEntity(landingModel.landingBannerModel),
        searchResults: new PageApp.Ent.BasicEntity(landingModel.searchResultsDto),
        sessionUserAddresses: new PageApp.Ent.BasicEntity(landingModel.userViewDto),
        auctioneer: auctioneer,
        timedModels: landingModel.timedModels
      };
      myApp.mainRegion.show(new PageApp.Views.LandingLayout({
        model: ent.searchFilters,
        otherModels: otherModels
      }));

      if (landingModel.auction && !landingModel.auction.catalogue && landingModel.auction.webcastAuction && landingModel.auction.statusId === 4) {
        myApp.vent.trigger('landing:webcast:check', {
          webcastStartTime: landingModel.auction.webcastStartTime,
          auctionId: landingModel.auction.id
        });
      }
    }, this);
    myApp.vent.on('landing:webcast:check', function (model) {
      if (!this.countdown) {
        if (model.webcastStartTime < myApp.ent.config.getNormalisedTimeMillis()) {
          myApp.router.navigate('#!/webcast2/' + model.auctionId, {
            trigger: true,
            replace: true
          });
        }
      }
    }, this);
  }

  return {
    initialize: function initialize(models) {
      initEvents();
      initCommands();
    }
  };
};
"use strict";

PageApp.Controllers.RegisterRouter = function (config) {
  var model = new PageApp.Ent.BasicEntity();

  function initCommands() {}

  function initEvents() {
    myApp.vent.on('register:display', function (response) {
      if (response.alreadyRegistered) {
        myApp.mainRegion.show(new PageApp.Views.ContentView({
          model: new PageApp.Ent.BasicEntity({
            'content': response.alreadyRegisteredText
          })
        }));
      } else {
        model = new PageApp.Ent.BasicEntity(response);

        if (model.title) {
          document.title = model.title;
        }

        myApp.mainRegion.show(new PageApp.Views.RegisterView({
          model: model
        }));
      }
    }, this);
    myApp.vent.on('register:success', function (response) {
      myApp.mainRegion.show(new PageApp.Views.RegisterSuccessView({
        model: new PageApp.Ent.BasicEntity(response)
      }));
    }, this);
  }

  function initRoutes(obj) {}

  return {
    initialize: function initialize(models) {
      initRoutes(this);
      initEvents();
      initCommands();
    },
    displayItem: function displayItem(id) {}
  };
};
"use strict";

PageApp.Views.RegisterSuccessView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.registerSuccess,
  serializeData: function serializeData() {
    var content = {
      contextPath: myApp.ent.config.get('contextPath'),
      JspPublicCodes_JSP_BIDDING_PAY_DEPOSIT: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_BIDDING_PAY_DEPOSIT')
    };

    _.extend(content, this.model.attributes);

    return content;
  },
  events: {}
});
"use strict";

PageApp.Views.RegisterView = Backbone.Marionette.ItemView.extend({
  getTemplate: function getTemplate() {
    return hbs.templates.register;
  },
  events: {
    'keyup .x-add-commas': 'validateSpendingLimit',
    'click .x-submit': 'handleRegister',
    'click #auctionTerms': 'showAuctionTerms'
  },
  serializeData: function serializeData() {
    var label1 = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_REGISTRATION_SPENDING_LIMIT');

    if (this.model.get('hasError1')) {
      label1 = this.model.get('error1');
    }

    var label2 = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_REGISTRATION_TS_AND_CS_READ') + ' ' + myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_REGISTRATION_TS_AND_CS') + ' ' + myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_REGISTRATION_TS_AND_CS_ACCEPT');

    if (this.model.get('hasError2')) {
      label2 = this.model.get('error2');
    }

    var logoDims = {
      width: 275,
      height: 210
    };
    logoDims.operation = 'pad';
    var content = {
      logoDims: logoDims,
      hasError1: this.model.get('hasError1'),
      label1: label1,
      hasError2: this.model.get('hasError2'),
      label2: label2,
      contextPath: myApp.ent.config.get('contextPath'),
      JspPublicCodes_JSP_AUCTION_REGISTRATION_REGISTER: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_REGISTRATION_REGISTER'),
      JspPublicCodes_JSP_AUCTION_REGISTRATION: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTION_REGISTRATION'),
      JspPublicCodes_JSP_AUCTIONEER_STRIP_SALEMGTBY: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTIONEER_STRIP_SALEMGTBY'),
      UserCodes_TERMS_NOT_AGREED: myApp.reqres.request('i16:getString', 'UserCodes_TERMS_NOT_AGREED'),
      JSTextCodes_FIELD_NOT_COMPLETE: myApp.reqres.request('i16:getString', 'JSTextCodes_FIELD_NOT_COMPLETE')
    };

    _.extend(content, this.model.attributes);

    return content;
  },
  showAuctionTerms: function showAuctionTerms(e) {
    e.preventDefault();
    var model = new PageApp.Ent.BasicEntity({
      content: this.model.get('auctionTerms')
    });
    myApp.myModalRegion.show(new PageApp.Views.ModalLayout({
      view: new PageApp.Views.TermsAndConditionsModalView({
        model: model
      })
    }));
  },
  validateSpendingLimit: function validateSpendingLimit(e) {
    e.preventDefault();
    var $input = $(e.currentTarget);

    if (e.keyCode !== 13) {
      $input.val(myApp.utils.types.toFormattedNumberLimited($input.val(), myApp.ent.user.attributes.thousandsSeparator));
    }

    return false;
  },
  handleRegister: function handleRegister(e) {
    e.preventDefault();
    var agreedTerms = this.$el.find('#agreedTerms').prop('checked');
    this.model.set('agreedTerms', agreedTerms);
    var valid = agreedTerms;
    this.model.set('hasError2', null);

    if (!agreedTerms) {
      this.model.set('hasError2', 'has-error');
      this.model.set('error2', myApp.reqres.request('i16:getString', 'UserCodes_TERMS_NOT_AGREED'));
    }

    if (this.model.get('spendingLimitRequired')) {
      var spendingLimit = this.$el.find('#spendingLimit').val();
      this.model.set('spendingLimit', spendingLimit);

      try {
        spendingLimit = myApp.utils.types.toNumber(spendingLimit);
        this.model.set('spendingLimit', spendingLimit);
        this.model.set('hasError1', false);
      } catch (err) {
        this.model.set('hasError1', 'has-error');
        this.model.set('error1', myApp.reqres.request('i16:getString', 'InfrastructureCodes_FAILED_TO_CONVERT_STRING_TO_NUMBER'));
        valid = false;
      }
    }

    if (!valid) {
      e.preventDefault();
      this.render();
      return false;
    }

    var bean = {
      '@class': 'com.bidlogix.scaffold.blade.RegisterBladeModel',
      userId: myApp.ent.user.get('id'),
      spendingLimit: this.model.get('spendingLimit'),
      agreedTerms: this.model.get('agreedTerms'),
      auctionId: this.model.get('auctionId'),
      referer: this.model.get('referer')
    };
    myApp.myModalRegion.show(new PageApp.Views.WaitingView());
    myApp.utils.ajax.postBean(bean, myApp.utils.ajax.getApiEndpoint('registerForAuction'), _.bind(function (response) {
      myApp.myModalRegion.empty();
      myApp.vent.trigger('register:success', response);

      if (response.title) {
        document.title = response.title;
      }
    }, this));
  }
});
"use strict";

PageApp.Controllers.ContentRouter = function () {
  function initEvents() {
    myApp.vent.on('content:display', function (model) {
      myApp.mainRegion.show(new PageApp.Views.ContentView({
        model: new PageApp.Ent.BasicEntity(model)
      }));
    }, this);
  }

  return {
    initialize: function initialize() {
      initEvents();
    }
  };
};
"use strict";

PageApp.Views.ContentView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.contentView,
  serializeData: function serializeData() {
    return {
      containerClass: myApp.ent.config.get('containerClass'),
      content: this.model.get('content')
    };
  }
});
"use strict";

PageApp.Controllers.MyBidsRouter = function (config) {
  var ent = {};

  function initEvents() {
    myApp.vent.on('mybids:display', function (model) {
      myApp.ent.user.setPreference('showFilters', false);

      if (model && model.myBidsModel) {
        ent.myBids = new PageApp.Ent.SearchFilters(model.myBidsModel);
      } else if (model) {
        ent.myBids = new PageApp.Ent.SearchFilters(model);
      } else {
        try {
          ent.myBids.set('timedModels', undefined);
        } catch (err) {}
      } // register event handler on all the anchors in this region now it is showing..


      myApp.mainRegion.on('show', function (view) {
        myApp.vent.trigger('application:rendered', {
          region: myApp.mainRegion
        });
      });
      myApp.mainRegion.show(new PageApp.Views.MyBidsLayout({
        model: ent.myBids
      }));
    }, this);
    myApp.vent.on('layoutcontrol:display', function () {
      var page = myApp.ent.config.get('page');

      if (page === 'myBidsLand') {
        myApp.vent.trigger('mybids:display');
      }
    }, this);
  }

  return {
    initialize: function initialize(models) {
      initEvents();
    }
  };
};
"use strict";

PageApp.Views.MyBidsAlertsFilterView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.myBidsAlertsFilter,
  serializeData: function serializeData() {
    var alerts = this.model.get('alerts');
    var showAllItemAlerts = alerts && alerts.length > 0;
    var currentAlertId = this.model.get('currentAlertId');

    if (currentAlertId) {
      for (var index in alerts) {
        alerts[index].active = alerts[index].id === currentAlertId ? 'active' : '';
      }
    }

    var content = {
      contextPath: myApp.ent.config.get('contextPath'),
      showAllItemAlerts: showAllItemAlerts,
      JspPublicCodes_JSP_MY_BIDS_MANAGE_ALERTS: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_MY_BIDS_MANAGE_ALERTS'),
      JspPublicCodes_JSP_MY_BIDS_VIEW_ALL_ALERT_MATCHES: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_MY_BIDS_VIEW_ALL_ALERT_MATCHES')
    };
    content = _.extend(content, this.model.attributes);
    return content;
  }
});
"use strict";

PageApp.Views.MyBidsAuctionFilterView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.summaryFilter,
  serializeData: function serializeData() {
    for (var key in this.model.attributes.auctionSummaries) {
      if (this.model.attributes.currentAuctionId === this.model.attributes.auctionSummaries[key].id) {
        this.model.attributes.auctionSummaries[key].active = true;
      }
    }

    var content = {
      JspPublicCodes_JSP_CURRENTLY_VIEWING: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CURRENTLY_VIEWING'),
      JspPublicCodes_JSP_MY_SALES_REFRESH_VIEW: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_MY_SALES_REFRESH_VIEW'),
      JspPublicCodes_JSP_VIEW_AUCTION: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_VIEW_AUCTION'),
      JspPublicCodes_JSP_MY_BIDS_AUCTION: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_MY_BIDS_AUCTION'),
      contextPath: myApp.ent.config.get('contextPath')
    };

    _.extend(content, this.model.attributes);

    return content;
  },
  onRender: function onRender() {
    var current = this.$el.find('#myBidsAuctionLink' + this.model.get('auctionId'));

    if (current) {
      current.parent().addClass('active');
    }
  }
});
"use strict";

PageApp.Views.MyBidsDateFilterView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.myBidsDateFilter,
  serializeData: function serializeData() {
    var content = {
      JspPublicCodes_JSP_MY_SALES_SHOW_ITEMS_FROM: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_MY_SALES_SHOW_ITEMS_FROM'),
      JspPublicCodes_JSP_MY_SALES_DATE_FILTER_TO: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_MY_SALES_DATE_FILTER_TO'),
      JspPublicCodes_JSP_MY_SALES_DATE_FILTER_APPLY: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_MY_SALES_DATE_FILTER_APPLY')
    };
    return content;
  },
  onRender: function onRender() {
    this.$el.find('.x-datepicker').each(function () {
      var $this = $(this);
      $this.datepicker(myApp.utils.types.datepickerOptions());

      if ('placeholder' in this) {
        // detect for placeholder support and set it if available
        $this.attr('placeholder', myApp.utils.types.datepickerOptions().placeHolderDateFormat);
      }
    });
    this.$el.find('#startDate').val(this.model.get('startDate'));
    this.$el.find('#endDate').val(this.model.get('endDate'));
  }
});
"use strict";

PageApp.Views.MyBidsLayout = Backbone.Marionette.LayoutView.extend({
  getTemplate: function getTemplate() {
    return hbs.templates.myBidsLayout;
  },
  events: {
    'click .x-search-filter': 'handleClickFilter',
    'click .x-alert-filter': 'handleClickAlertFilter',
    'click .x-search-auction': 'handleClickAuction',
    'click .x-search-dates': 'handleClickDates',
    'click .x-remove-auction': 'handleUnclickAuction',
    'click .x-goto-mybids': 'handleGoto',
    'click .x-previous-mybids': 'handlePrevious',
    'click .x-next-mybids': 'handleNext'
  },
  regions: {
    currentFilterRegion: '#currentFilterRegion',
    typesFilterRegion: '#typesFilterRegion',
    summaryRegion: '#summaryRegion',
    layoutControlRegion: '#layoutControlRegion',
    datesFilterRegion: '#datesFilterRegion',
    biddingRegion: '#biddingRegion',
    pagingTopRegion: '#pagingTopRegion',
    pagingBottomRegion: '#pagingBottomRegion',
    currentAlertsFilterRegion: '#currentAlertsFilterRegion',
    alertsFilterRegion: '#alertsFilterRegion'
  },
  serializeData: function serializeData() {
    myApp.ent.user.setPreference('filtersActive', false);
    var myLabel;

    if (this.model.attributes.totalNumberOfMatches === 1) {
      myLabel = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM');
    } else {
      myLabel = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEMS');
    }

    var content = {
      showItemAlerts: myApp.ent.webApp.get('showItemAlerts'),
      totalNumberOfMatches: this.model.attributes.totalNumberOfMatches,
      numbItemsLabel: myLabel,
      JspPublicCodes_JSP_FOUND: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_FOUND'),
      JspPublicCodes_JSP_HEADER_MY_BIDS: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_HEADER_MY_BIDS'),
      JspPublicCodes_JSP_HEADER_MY_ALERTS: myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_HEADER_MY_ALERTS')
    };
    return content;
  },
  onRender: function onRender() {
    var searchType = myApp.ent.status.getMyBidsSearchType(this.model.get('parameters').parameters.searchType);
    myApp.ent.user.setPreference('searchTypeId', searchType.id);
    this.layoutControlRegion.show(new PageApp.Views.ControlLayout({
      model: new PageApp.Ent.LayoutControl({
        parameters: this.model.get('parameters')
      }),
      paging: this.model,
      isShowOpenDisabled: true
    }));
    var currentFilterModel = new PageApp.Ent.BasicEntity();
    var totalNumberOfMatches = searchType.id === 6 ? 0 : this.model.get('pagingModel').totalNumberOfMatches;
    currentFilterModel.set('currentFilterModel', {
      'totalNumberOfMatches': totalNumberOfMatches
    });
    this.currentFilterRegion.show(new PageApp.Views.CurrentFilterView({
      model: currentFilterModel
    }));
    var paging = this.model.get('pagingModel');
    var filters = new PageApp.Ent.BasicEntity();
    filters.set('currentAuctionId', this.model.get('parameters').parameters.auctionId);
    filters.set('page', paging.page);
    this.getRegion('typesFilterRegion').show(new PageApp.Views.MyBidsTypeFilterView({
      model: filters
    }));

    if (this.model.get('showDateFilters')) {
      this.getRegion('datesFilterRegion').show(new PageApp.Views.MyBidsDateFilterView({
        model: new PageApp.Ent.BasicEntity(this.model.get('parameters').parameters)
      }));
    }

    if (this.model.get('auctionSummaries')) {
      var summaries = new PageApp.Ent.BasicEntity();
      summaries.set('auctionSummaries', this.model.get('auctionSummaries'));
      summaries.set('currentAuctionId', this.model.get('parameters').parameters.auctionId);
      summaries.set('searchTypeId', searchType.id);
      this.getRegion('summaryRegion').show(new PageApp.Views.MyBidsAuctionFilterView({
        model: summaries
      }));
    }

    if (this.model.get('showAlertsFilters')) {
      var currentAlertsFilterModel = new PageApp.Ent.BasicEntity();
      var totalNumberOfAlertMatches = searchType.id === 6 ? this.model.get('pagingModel').totalNumberOfMatches : 0;
      currentAlertsFilterModel.set('currentFilterModel', {
        'totalNumberOfMatches': totalNumberOfAlertMatches
      });
      this.currentAlertsFilterRegion.show(new PageApp.Views.CurrentFilterView({
        model: currentAlertsFilterModel
      }));
      var alertsFilter = new PageApp.Ent.BasicEntity(this.model.get('alertsFilter'));
      alertsFilter.set('currentAlertId', this.model.get('parameters').parameters.alertId);
      alertsFilter.set('page', paging.page);
      this.getRegion('alertsFilterRegion').show(new PageApp.Views.MyBidsAlertsFilterView({
        model: alertsFilter
      }));
    }

    if (searchType.pageable && paging.numPages > 1) {
      paging.controller = '-mybids';
      paging.owner = 'mybids';
      paging.paginationPosition = 'top';
      this.getRegion('pagingTopRegion').show(new PageApp.Views.PagingView({
        model: this.model
      }));
      paging.paginationPosition = 'bottom';
      this.getRegion('pagingBottomRegion').show(new PageApp.Views.PagingView({
        model: this.model
      }));
    }

    myApp.vent.trigger('timed:display', {
      region: this.getRegion('biddingRegion'),
      model: this.model.get('timedModels')
    });
  },
  handleGoto: function handleGoto(e) {
    if (e) e.preventDefault();
    this.model.get('parameters').parameters.page = $(e.currentTarget).data('goto');
    this.fetch('/myBids' + this.getCommand());
  },
  handlePrevious: function handlePrevious(e) {
    if (e) e.preventDefault();
    this.model.get('parameters').parameters.page--;
    this.fetch('/myBids' + this.getCommand());
  },
  handleNext: function handleNext(e) {
    if (e) e.preventDefault();
    this.model.get('parameters').parameters.page++;
    this.fetch('/myBids' + this.getCommand());
  },
  handleClickFilter: function handleClickFilter(e) {
    if (e) e.preventDefault();
    var searchTypeId = $(e.currentTarget).data('filter');
    myApp.ent.user.setPreference('searchTypeId', myApp.ent.status.getMyBidsSearchType(searchTypeId).id); // just makes sure this exists..

    myApp.ent.user.setPreference('filterId');
    this.model.get('parameters').parameters.searchType = searchTypeId;
    this.model.get('parameters').parameters.page = 0;
    this.model.get('parameters').parameters.auctionId = undefined;
    this.model.get('parameters').parameters.alertId = undefined; // Show the spinner. This will disappear when the filter region is re-rendered.
    // this.currentFilterRegion.$el.find('.spinner').css('visibility', 'visible');

    this.fetch('/myBids' + this.getCommand());
  },
  handleClickAlertFilter: function handleClickAlertFilter(e) {
    if (e) e.preventDefault();
    var alertId = $(e.currentTarget).data('alert');
    this.model.get('parameters').parameters.searchType = 6;
    this.model.get('parameters').parameters.alertId = alertId;
    this.model.get('parameters').parameters.page = 0;
    this.model.get('parameters').parameters.auctionId = undefined;
    this.fetch('/myBids' + this.getCommand());
  },
  handleClickDates: function handleClickDates(e) {
    if (e) e.preventDefault();
    var startDate = $(e.currentTarget).parent().find('#startDate').val();
    var endDate = $(e.currentTarget).parent().find('#endDate').val();
    this.model.get('parameters').parameters.startDate = startDate;
    this.model.get('parameters').parameters.endDate = endDate;
    this.model.get('parameters').parameters.page = 0;
    this.fetch('/myBids' + this.getCommand());
  },
  handleClickAuction: function handleClickAuction(e) {
    if (e) e.preventDefault();
    var auctionId = $(e.currentTarget).data('auction');
    this.model.get('parameters').parameters.auctionId = auctionId;
    this.model.get('parameters').parameters.page = 0;
    this.fetch('/myBids' + this.getCommand());
  },
  handleUnclickAuction: function handleUnclickAuction(e) {
    if (e) e.preventDefault();
    this.model.get('parameters').parameters.auctionId = null;
    this.model.get('parameters').parameters.page = 0;
    this.fetch('/myBids' + this.getCommand());
  },
  fetch: function fetch(url) {
    url = myApp.ent.config.get('contextPath') + url;
    myApp.controllers.application.doRoute({
      'href': url,
      'manual': true
    });
  },
  getCommand: function getCommand() {
    var command = '';
    var cmd = this.model.get('parameters').parameters;
    var searchTypeId = cmd.searchType;

    if (!searchTypeId) {
      searchTypeId = 0;
    }

    command += '/' + searchTypeId;
    command += '?page=' + cmd.page;

    if (cmd.auctionId) {
      command += '&auctionId=' + cmd.auctionId;
    }

    if (cmd.alertId) {
      command += '&alertId=' + cmd.alertId;
    }

    if (this.model.get('showDateFilters') && cmd.startDate && cmd.startDate.length > 0) {
      command += '&startDate=' + cmd.startDate;
    }

    if (this.model.get('showDateFilters') && cmd.endDate && cmd.endDate.length > 0) {
      command += '&endDate=' + cmd.endDate;
    }

    return command;
  }
});
"use strict";

PageApp.Views.MyBidsTypeFilterView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.myBidsTypeFilter,
  serializeData: function serializeData() {
    // var searchTypes = _.where(myApp.ent.status.get('myBidsSearchTypes'), {
    //   primary: true
    // });

    var searchTypes = myApp.ent.status.get('myBidsSearchTypes').filter(function(bid) {
      return bid.primary
    });

    var searchTypeId = myApp.ent.user.getPreference('searchTypeId');

    for (var key in searchTypes) {
      var searchType = searchTypes[key];
      searchType.label = myApp.reqres.request('i16:getString', 'MyBidsSearchTypeEnum_' + searchType.name);
      searchType.active = searchType.id === searchTypeId ? 'active' : '';
    }

    var query = '?page=';

    if (!this.model.attributes.pageIndex) {
      query += '0';
    } else {
      query += this.model.attributes.pageIndex;
    }

    var content = {
      searchTypes: searchTypes,
      contextPath: myApp.ent.config.get('contextPath'),
      query: query
    };
    return content;
  }
});
"use strict";

PageApp.Controllers.AuctioneerRouter = function (config) {
  function initCommands() {}

  function initEvents() {
    myApp.vent.on('auctioneer:display', function (homePageModel) {
      myApp.mainRegion.show(new PageApp.Views.AuctionsForAuctioneerView({
        model: homePageModel.upcomingModel
      }));
    }, this);
  }

  return {
    initialize: function initialize(models) {
      initEvents();
      initCommands();
    }
  };
};
"use strict";

PageApp.Views.AuctionsForAuctioneerView = Backbone.Marionette.ItemView.extend({
  template: hbs.templates.auctionsForAuctioneer,
  className: function className() {
    return myApp.ent.config.get('containerClass');
  },
  serializeData: function serializeData() {
    var showAuctionLogos = false;

    try {
      showAuctionLogos = myApp.ent.webApp.attributes.showAuctionLogosOnLandingPages;
    } catch (err) {
      showAuctionLogos = false;
    }

    var auctioneer = this.model.liveAuctioneers[0];
    var auctions = this.model.upcomingAuctions;
    var upcomingFeaturedAuctions = this.model.upcomingFeaturedAuctions;
    var aboutLabel = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ABOUT');
    var telephoneLabel = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_SHORT_TELEPHONE');
    var emailLabel = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_EMAIL');
    var websiteLabel = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_WEBSITE');
    var auctioneerLabel = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AUCTIONEER');
    var awaitingImageMessage = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_AWAITING_IMAGE');
    var m1 = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_FEATURED_AUCTIONS');
    var m11 = ''; // myApp.reqres.request('i16:getString','JspPublicCodes_JSP_AUCTIONS');

    var m2 = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_HOMEPAGE_EVENT_AUCTIONS');
    var m3 = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_HOMEPAGE_WEBCAST_AUCTIONS');
    var itemMessage = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEM');
    var itemsMessage = myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_ITEMS');

    for (var key in auctions) {
      auctions[key].message = auctions[key].itemCount > 1 ? itemsMessage : itemMessage;
    }

    for (var key2 in upcomingFeaturedAuctions) {
      upcomingFeaturedAuctions[key2].message = upcomingFeaturedAuctions[key2].itemCount > 1 ? itemsMessage : itemMessage;
    }

    var unfeaturedMessage = '';

    if (this.model.countEvent > 0 || this.model.countWebcast > 0) {
      unfeaturedMessage = m11;

      if (this.model.countEvent > 0) {
        unfeaturedMessage += ' ' + this.model.countEvent + ' ' + m2;
      }

      if (this.model.countWebcast > 0) {
        unfeaturedMessage += ' ' + this.model.countWebcast + ' ' + m3;
      }
    }

    var featuredMessage = '';

    if (this.model.countFeaturedEvent > 0 || this.model.countFeaturedWebcast > 0) {
      featuredMessage = m1;

      if (this.model.countFeaturedEvent > 0) {
        featuredMessage += ' ' + this.model.countFeaturedEvent + ' ' + m2;
      }

      if (this.model.countFeaturedWebcast > 0) {
        featuredMessage += ' ' + this.model.countFeaturedWebcast + ' ' + m3;
      }
    }

    var dims = myApp.ent.layoutHacks.getDimensionsHomeCal();
    dims.operation = myApp.ent.config.get('auctionImageTransformOperation');
    var logoDims = myApp.ent.layoutHacks.getDimensionsHomeCal();
    logoDims.operation = 'pad';
    return {
      logoDims: logoDims,
      dims: dims,
      contextPath: myApp.ent.config.get('contextPath'),
      featuredMessage: featuredMessage,
      unfeaturedMessage: unfeaturedMessage,
      auctioneer: auctioneer,
      upcomingAuctions: this.model.upcomingAuctions,
      upcomingFeaturedAuctions: this.model.upcomingFeaturedAuctions,
      countEvent: this.model.countEvent,
      countWebcast: this.model.countWebcast,
      countFeaturedEvent: this.model.countFeaturedEvent,
      countFeaturedWebcast: this.model.countFeaturedWebcast,
      aboutLabel: aboutLabel,
      telephoneLabel: telephoneLabel,
      emailLabel: emailLabel,
      websiteLabel: websiteLabel,
      auctioneerLabel: auctioneerLabel,
      awaitingImageMessage: awaitingImageMessage,
      showAuctionLogos: showAuctionLogos
    };
  },
  onShow: function onShow() {
    this.addRegistrationLinks(this.model.upcomingFeaturedAuctions);
    this.addRegistrationLinks(this.model.upcomingAuctions);
  },
  addRegistrationLinks: function addRegistrationLinks(auctions) {
    var contextPath = myApp.ent.config.get('contextPath');

    for (var key in auctions) {
      var auction = auctions[key];
      var regState = this.model.registeredFor[auction.auctionId];

      if (auction.catalogue) {
        var link = '<span id="catalogueAuction' + auction.auctionId + '">' + myApp.reqres.request('i16:getString', 'JspPublicCodes_JSP_CATALOGUE_AUCTION') + '</span>';
        this.$el.find('#registration_' + auction.auctionId).html(link);
      } else {
        if (!regState) {
          link = '<a class="register-for-auction" id="registerForAuctionFromAuction' + auction.auctionId + '" href="' + contextPath + '/registerForAuction/' + auction.auctionId + '">' + myApp.reqres.request('i16:getString', 'AuctionRegistrantStatus_NOT_REGISTERED') + '</a>';
          this.$el.find('#registration_' + auction.auctionId).html(link);
        } else {
          link = '<span class="register-for-auction" id="auctionstatus' + auction.auctionId + '">' + myApp.reqres.request('i16:getString', 'AuctionRegistrantStatus_' + regState) + '</span>';
          this.$el.find('#registration_' + auction.auctionId).html(link);
        }
      }
    }
  }
});