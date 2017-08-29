(function (root, client) {
  if (typeof define === 'function' && define.amd) {
    define(['popsicle'], client)
  } else if (typeof exports === 'object') {
    module.exports = client(require('popsicle'))
  } else {
    root.WebhostClient = client(root.popsicle)
  }
})(this, function (popsicle) {
  var TEMPLATE_REGEXP = /\{([^\{\}]+)\}/g

  /**
   * @param  {String} string
   * @param  {Object} interpolate
   * @param  {Object} defaults
   * @return {String}
   */
  function template (string, interpolate, defaults) {
    defaults = defaults || {}
    interpolate = interpolate || {}

    return string.replace(TEMPLATE_REGEXP, function (match, key) {
      if (interpolate[key] != null) {
        return encodeURIComponent(interpolate[key])
      }

      if (defaults[key] != null) {
        return encodeURIComponent(defaults[key])
      }

      return ''
    })
  }

  /**
   * @param  {Object} dest
   * @param  {Object} ...source
   * @return {Object}
   */
  function extend (dest /*, ...source */) {
    for (var i = 1; i < arguments.length; i++) {
      for (var key in arguments[i]) {
        dest[key] = arguments[i][key]
      }
    }

    return dest
  }

  function handleRequest (client, path, method, body, options) {
    options = extend({}, client.options, options)

    var baseUri = template(options.baseUri, options.baseUriParameters)
    var hasBody = method !== 'GET' && method !== 'HEAD'
    var reqOpts = {}

    var reqBody = hasBody && body != null ? body : options.body
    var reqQuery = !hasBody && body != null ? body : options.query

    var reqOpts = {
      url: baseUri.replace(/\/$/, '') + path,
      method: method,
      headers: extend({}, options.headers),
      body: reqBody,
      query: typeof reqQuery === 'object' ? extend({}, reqQuery) : reqQuery
    }

    if (options.user && typeof options.user.sign === 'function') {
      options.user.sign(reqOpts)
    }

    return client.request(reqOpts)
  }

  function Resource0 (uri, client) {
    this._uri = uri
    this._client = client

    this.users = new Resource1(uri + '/users', client)
    this.nps = new Resource24(uri + '/nps', client)
    this.upgrade = new Resource25(uri + '/upgrade', client)
    this.emailforwards = new Resource27(uri + '/emailforwards', client)
    this.apps = new Resource29(uri + '/apps', client)
    this.types = new Resource77(uri + '/types', client)
    this.parkedDomains = new Resource78(uri + '/parked-domains', client)
    this.categories = new Resource84(uri + '/categories', client)
    this.zyro = new Resource85(uri + '/zyro', client)
    this.domains = new Resource86(uri + '/domains', client)
    this.addTranslation = new Resource91(uri + '/add-translation', client)
  }


  function Resource1 (uri, client) {
    this._uri = uri
    this._client = client

    this.emailVerify = new Resource17(uri + '/email-verify', client)
    this.social = new Resource19(uri + '/social', client)
    this.passwordReset = new Resource22(uri + '/password-reset', client)
  }

  Resource1.prototype.userId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource2(uri, this._client)
  }

  function Resource2 (uri, client) {
    this._uri = uri
    this._client = client

    this.passwordReset = new Resource3(uri + '/password-reset', client)
    this.phoneNumber = new Resource4(uri + '/phone-number', client)
    this.email = new Resource5(uri + '/email', client)
    this.resendConfirmation = new Resource6(uri + '/resend-confirmation', client)
    this.steps = new Resource7(uri + '/steps', client)
    this.async = new Resource10(uri + '/async', client)
    this.zyroBuilder = new Resource13(uri + '/zyro-builder', client)
    this.getNotifications = new Resource14(uri + '/get-notifications', client)
    this.updateShowNotification = new Resource15(uri + '/update-show-notification', client)
    this.addNotification = new Resource16(uri + '/add-notification', client)
  }


  Resource2.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource2.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource2.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  Resource2.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource3 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource3.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource3.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource4 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource4.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource4.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource5 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource5.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource5.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource6 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource6.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource6.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource7 (uri, client) {
    this._uri = uri
    this._client = client

    this.survey = new Resource8(uri + '/survey', client)
    this.reviewLink = new Resource9(uri + '/review-link', client)
  }


  Resource7.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource7.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource7.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource8 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource8.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource8.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource9 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource9.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource9.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource9.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource10 (uri, client) {
    this._uri = uri
    this._client = client

    this.messages = new Resource11(uri + '/messages', client)
  }


  function Resource11 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource11.prototype.messageId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource12(uri, this._client)
  }

  Resource11.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource11.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource12 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource12.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource12.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource13 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource13.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource13.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource14 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource14.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource14.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource15 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource15.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource15.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource16 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource16.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource16.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource17 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource17.prototype.token = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource18(uri, this._client)
  }

  Resource17.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  function Resource18 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource18.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource19 (uri, client) {
    this._uri = uri
    this._client = client

    this.unlink = new Resource20(uri + '/unlink', client)
  }


  function Resource20 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource20.prototype.provider = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource21(uri, this._client)
  }

  function Resource21 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource21.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource21.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource22 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource22.prototype.token = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource23(uri, this._client)
  }

  Resource22.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  function Resource23 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource23.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource23.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource24 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource24.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource25 (uri, client) {
    this._uri = uri
    this._client = client

    this.hostinger = new Resource26(uri + '/hostinger', client)
  }


  function Resource26 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource26.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource27 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource27.prototype.id = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource28(uri, this._client)
  }

  Resource27.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource27.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource28 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource28.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource28.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  function Resource29 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource29.prototype.appId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource30(uri, this._client)
  }

  Resource29.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource29.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource29.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource30 (uri, client) {
    this._uri = uri
    this._client = client

    this.reset = new Resource31(uri + '/reset', client)
    this.password = new Resource32(uri + '/password', client)
    this.type = new Resource33(uri + '/type', client)
    this.category = new Resource34(uri + '/category', client)
    this.adult = new Resource35(uri + '/adult', client)
    this.displayerrors = new Resource36(uri + '/displayerrors', client)
    this.sendmail = new Resource37(uri + '/sendmail', client)
    this.changestate = new Resource38(uri + '/changestate', client)
    this.ftp = new Resource39(uri + '/ftp', client)
    this.files = new Resource40(uri + '/files', client)
    this.settings = new Resource42(uri + '/settings', client)
    this.databases = new Resource43(uri + '/databases', client)
    this.cronjobs = new Resource48(uri + '/cronjobs', client)
    this.statistics = new Resource50(uri + '/statistics', client)
    this.backend = new Resource56(uri + '/backend', client)
    this.redirects = new Resource57(uri + '/redirects', client)
    this.security = new Resource59(uri + '/security', client)
    this.domain = new Resource69(uri + '/domain', client)
    this.zyro = new Resource70(uri + '/zyro', client)
    this.logs = new Resource71(uri + '/logs', client)
    this.buildStatus = new Resource72(uri + '/build_status', client)
    this.install = new Resource73(uri + '/install', client)
    this.filemanager = new Resource74(uri + '/filemanager', client)
    this.software = new Resource76(uri + '/software', client)
  }


  Resource30.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource30.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource30.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  function Resource31 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource31.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource31.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource32 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource32.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource32.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource33 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource33.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource33.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource34 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource34.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource34.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource35 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource35.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource35.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource36 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource36.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource36.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource37 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource37.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource37.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource38 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource38.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource38.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource39 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource39.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource39.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource40 (uri, client) {
    this._uri = uri
    this._client = client

    this.permissions = new Resource41(uri + '/permissions', client)
  }


  Resource40.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource40.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource40.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource41 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource41.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource41.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource42 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource42.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource43 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource43.prototype.databaseId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource44(uri, this._client)
  }

  Resource43.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource43.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource43.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource44 (uri, client) {
    this._uri = uri
    this._client = client

    this.changePassword = new Resource45(uri + '/change-password', client)
    this.usage = new Resource46(uri + '/usage', client)
    this.login = new Resource47(uri + '/login', client)
  }


  Resource44.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource44.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  function Resource45 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource45.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource45.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource46 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource46.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource46.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource47 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource47.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource47.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource48 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource48.prototype.cronId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource49(uri, this._client)
  }

  Resource48.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource48.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource48.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource49 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource49.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource49.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  function Resource50 (uri, client) {
    this._uri = uri
    this._client = client

    this.all = new Resource51(uri + '/all', client)
    this.bandwidth = new Resource52(uri + '/bandwidth', client)
    this.responseCodes = new Resource53(uri + '/response-codes', client)
    this.responseTime = new Resource54(uri + '/response-time', client)
    this.diskQuota = new Resource55(uri + '/disk-quota', client)
  }


  function Resource51 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource51.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource51.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource52 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource52.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource52.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource53 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource53.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource53.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource54 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource54.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource54.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource55 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource55.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource55.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource56 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource56.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource56.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource56.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource57 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource57.prototype.redirectId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource58(uri, this._client)
  }

  Resource57.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource57.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource57.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource58 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource58.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource58.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  function Resource59 (uri, client) {
    this._uri = uri
    this._client = client

    this.passwordProtectedDirectories = new Resource60(uri + '/password-protected-directories', client)
    this.hotlinkProtection = new Resource62(uri + '/hotlink-protection', client)
    this.ip = new Resource64(uri + '/ip', client)
  }


  function Resource60 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource60.prototype.dirId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource61(uri, this._client)
  }

  Resource60.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource60.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource60.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource61 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource61.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource61.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  function Resource62 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource62.prototype.hostlinkId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource63(uri, this._client)
  }

  Resource62.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource62.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource62.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource63 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource63.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource63.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  function Resource64 (uri, client) {
    this._uri = uri
    this._client = client

    this.whitelist = new Resource65(uri + '/whitelist', client)
    this.blacklist = new Resource67(uri + '/blacklist', client)
  }


  function Resource65 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource65.prototype.whitelistId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource66(uri, this._client)
  }

  Resource65.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource65.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource65.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource66 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource66.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource66.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  function Resource67 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource67.prototype.blacklistId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource68(uri, this._client)
  }

  Resource67.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource67.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource67.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource68 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource68.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource68.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  function Resource69 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource69.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource69.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource69.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource70 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource70.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource70.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource71 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource71.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource71.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource72 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource72.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource72.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource73 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource73.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource73.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource74 (uri, client) {
    this._uri = uri
    this._client = client

    this.wasaccessed = new Resource75(uri + '/wasaccessed', client)
  }


  function Resource75 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource75.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource75.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource76 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource76.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource77 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource77.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource77.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource78 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource78.prototype.appName = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource79(uri, this._client)
  }
  Resource78.prototype.domainId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource81(uri, this._client)
  }

  Resource78.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource78.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource78.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource79 (uri, client) {
    this._uri = uri
    this._client = client

    this.has3RdParty = new Resource80(uri + '/has-3rd-party', client)
  }


  function Resource80 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource80.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource81 (uri, client) {
    this._uri = uri
    this._client = client

    this.status = new Resource82(uri + '/status', client)
    this.records = new Resource83(uri + '/records', client)
  }


  Resource81.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource81.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  function Resource82 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource82.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource83 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource83.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource84 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource84.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource84.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource85 (uri, client) {
    this._uri = uri
    this._client = client

  }


  function Resource86 (uri, client) {
    this._uri = uri
    this._client = client

    this.search = new Resource87(uri + '/search', client)
    this.check = new Resource88(uri + '/check', client)
    this.buy = new Resource89(uri + '/buy', client)
    this.invoice = new Resource90(uri + '/invoice', client)
  }


  function Resource87 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource87.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource87.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource88 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource88.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource88.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource89 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource89.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource89.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource90 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource90.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource90.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource91 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource91.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }

  function CustomResource (uri, client) {
    this._uri = uri
    this._client = client
  }

  CustomResource.prototype.acl = function (body, options) {
    return handleRequest(this._client, this._uri, 'ACL', body, options)
  }
  CustomResource.prototype.bind = function (body, options) {
    return handleRequest(this._client, this._uri, 'BIND', body, options)
  }
  CustomResource.prototype.checkout = function (body, options) {
    return handleRequest(this._client, this._uri, 'CHECKOUT', body, options)
  }
  CustomResource.prototype.connect = function (body, options) {
    return handleRequest(this._client, this._uri, 'CONNECT', body, options)
  }
  CustomResource.prototype.copy = function (body, options) {
    return handleRequest(this._client, this._uri, 'COPY', body, options)
  }
  CustomResource.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  CustomResource.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  CustomResource.prototype.head = function (body, options) {
    return handleRequest(this._client, this._uri, 'HEAD', body, options)
  }
  CustomResource.prototype.link = function (body, options) {
    return handleRequest(this._client, this._uri, 'LINK', body, options)
  }
  CustomResource.prototype.lock = function (body, options) {
    return handleRequest(this._client, this._uri, 'LOCK', body, options)
  }
  CustomResource.prototype.mSearch = function (body, options) {
    return handleRequest(this._client, this._uri, 'M-SEARCH', body, options)
  }
  CustomResource.prototype.merge = function (body, options) {
    return handleRequest(this._client, this._uri, 'MERGE', body, options)
  }
  CustomResource.prototype.mkactivity = function (body, options) {
    return handleRequest(this._client, this._uri, 'MKACTIVITY', body, options)
  }
  CustomResource.prototype.mkcalendar = function (body, options) {
    return handleRequest(this._client, this._uri, 'MKCALENDAR', body, options)
  }
  CustomResource.prototype.mkcol = function (body, options) {
    return handleRequest(this._client, this._uri, 'MKCOL', body, options)
  }
  CustomResource.prototype.move = function (body, options) {
    return handleRequest(this._client, this._uri, 'MOVE', body, options)
  }
  CustomResource.prototype.notify = function (body, options) {
    return handleRequest(this._client, this._uri, 'NOTIFY', body, options)
  }
  CustomResource.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  CustomResource.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  CustomResource.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  CustomResource.prototype.propfind = function (body, options) {
    return handleRequest(this._client, this._uri, 'PROPFIND', body, options)
  }
  CustomResource.prototype.proppatch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PROPPATCH', body, options)
  }
  CustomResource.prototype.purge = function (body, options) {
    return handleRequest(this._client, this._uri, 'PURGE', body, options)
  }
  CustomResource.prototype.put = function (body, options) {
    return handleRequest(this._client, this._uri, 'PUT', body, options)
  }
  CustomResource.prototype.rebind = function (body, options) {
    return handleRequest(this._client, this._uri, 'REBIND', body, options)
  }
  CustomResource.prototype.report = function (body, options) {
    return handleRequest(this._client, this._uri, 'REPORT', body, options)
  }
  CustomResource.prototype.search = function (body, options) {
    return handleRequest(this._client, this._uri, 'SEARCH', body, options)
  }
  CustomResource.prototype.subscribe = function (body, options) {
    return handleRequest(this._client, this._uri, 'SUBSCRIBE', body, options)
  }
  CustomResource.prototype.trace = function (body, options) {
    return handleRequest(this._client, this._uri, 'TRACE', body, options)
  }
  CustomResource.prototype.unbind = function (body, options) {
    return handleRequest(this._client, this._uri, 'UNBIND', body, options)
  }
  CustomResource.prototype.unlink = function (body, options) {
    return handleRequest(this._client, this._uri, 'UNLINK', body, options)
  }
  CustomResource.prototype.unlock = function (body, options) {
    return handleRequest(this._client, this._uri, 'UNLOCK', body, options)
  }
  CustomResource.prototype.unsubscribe = function (body, options) {
    return handleRequest(this._client, this._uri, 'UNSUBSCRIBE', body, options)
  }

  function Client (options) {
    this.options = extend({
      baseUri: 'https://hostinger-000-rest-mock.herokuapp.com',
      baseUriParameters: {}
    }, options)

    this.resources = new Resource0('', this)
  }

  Client.prototype.resource = function (route, parameters) {
    var path = '/' + template(route, parameters).replace(/^\//, '')

    return new CustomResource(path, this)
  }

  Client.prototype.request = popsicle
  Client.prototype.form = Client.form = popsicle.form
  Client.prototype.version  = undefined


  return Client
})
