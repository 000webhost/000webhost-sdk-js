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
    this.apps = new Resource12(uri + '/apps', client)
    this.types = new Resource51(uri + '/types', client)
    this.categories = new Resource52(uri + '/categories', client)
    this.zyro = new Resource53(uri + '/zyro', client)
  }


  function Resource1 (uri, client) {
    this._uri = uri
    this._client = client

    this.emailVerify = new Resource8(uri + '/email-verify', client)
    this.passwordReset = new Resource10(uri + '/password-reset', client)
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

  }


  Resource7.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource7.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource8 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource8.prototype.token = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource9(uri, this._client)
  }

  Resource8.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  function Resource9 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource9.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource10 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource10.prototype.token = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource11(uri, this._client)
  }

  Resource10.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  function Resource11 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource11.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource11.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource12 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource12.prototype.appId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource13(uri, this._client)
  }

  Resource12.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource12.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource12.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource13 (uri, client) {
    this._uri = uri
    this._client = client

    this.reset = new Resource14(uri + '/reset', client)
    this.password = new Resource15(uri + '/password', client)
    this.type = new Resource16(uri + '/type', client)
    this.category = new Resource17(uri + '/category', client)
    this.adult = new Resource18(uri + '/adult', client)
    this.sendmail = new Resource19(uri + '/sendmail', client)
    this.files = new Resource20(uri + '/files', client)
    this.settings = new Resource22(uri + '/settings', client)
    this.databases = new Resource23(uri + '/databases', client)
    this.cronjobs = new Resource27(uri + '/cronjobs', client)
    this.statistics = new Resource29(uri + '/statistics', client)
    this.backend = new Resource35(uri + '/backend', client)
    this.redirects = new Resource36(uri + '/redirects', client)
    this.security = new Resource38(uri + '/security', client)
    this.domain = new Resource48(uri + '/domain', client)
    this.zyro = new Resource49(uri + '/zyro', client)
    this.logs = new Resource50(uri + '/logs', client)
  }


  Resource13.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource13.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource13.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  function Resource14 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource14.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource14.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource15 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource15.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource15.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
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


  Resource17.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource17.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource18 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource18.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource18.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource19 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource19.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource19.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource20 (uri, client) {
    this._uri = uri
    this._client = client

    this.permissions = new Resource21(uri + '/permissions', client)
  }


  Resource20.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource20.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource20.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
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


  Resource22.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource23 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource23.prototype.databaseId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource24(uri, this._client)
  }

  Resource23.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource23.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource23.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource24 (uri, client) {
    this._uri = uri
    this._client = client

    this.changePassword = new Resource25(uri + '/change-password', client)
    this.usage = new Resource26(uri + '/usage', client)
  }


  Resource24.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource24.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  function Resource25 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource25.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource25.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource26 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource26.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource26.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource27 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource27.prototype.cronId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource28(uri, this._client)
  }

  Resource27.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
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

    this.all = new Resource30(uri + '/all', client)
    this.bandwidth = new Resource31(uri + '/bandwidth', client)
    this.responseCodes = new Resource32(uri + '/response-codes', client)
    this.responseTime = new Resource33(uri + '/response-time', client)
    this.diskQuota = new Resource34(uri + '/disk-quota', client)
  }


  function Resource30 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource30.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource30.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource31 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource31.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource31.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource32 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource32.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource32.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource33 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource33.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource33.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource34 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource34.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource34.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource35 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource35.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource35.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource35.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource36 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource36.prototype.redirectId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource37(uri, this._client)
  }

  Resource36.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource36.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource36.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource37 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource37.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource37.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  function Resource38 (uri, client) {
    this._uri = uri
    this._client = client

    this.passwordProtectedDirectories = new Resource39(uri + '/password-protected-directories', client)
    this.hotlinkProtection = new Resource41(uri + '/hotlink-protection', client)
    this.ip = new Resource43(uri + '/ip', client)
  }


  function Resource39 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource39.prototype.dirId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource40(uri, this._client)
  }

  Resource39.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource39.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource39.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource40 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource40.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource40.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  function Resource41 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource41.prototype.hostlinkId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource42(uri, this._client)
  }

  Resource41.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource41.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource41.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource42 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource42.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource42.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  function Resource43 (uri, client) {
    this._uri = uri
    this._client = client

    this.whitelist = new Resource44(uri + '/whitelist', client)
    this.blacklist = new Resource46(uri + '/blacklist', client)
  }


  function Resource44 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource44.prototype.whitelistId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource45(uri, this._client)
  }

  Resource44.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource44.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource44.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource45 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource45.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource45.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  function Resource46 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource46.prototype.blacklistId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource47(uri, this._client)
  }

  Resource46.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource46.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource46.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource47 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource47.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource47.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  function Resource48 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource48.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource48.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource48.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource49 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource49.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource49.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource50 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource50.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource50.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
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



  function CustomResource (uri, client) {
    this._uri = uri
    this._client = client
  }

  CustomResource.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  CustomResource.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  CustomResource.prototype.put = function (body, options) {
    return handleRequest(this._client, this._uri, 'PUT', body, options)
  }
  CustomResource.prototype.head = function (body, options) {
    return handleRequest(this._client, this._uri, 'HEAD', body, options)
  }
  CustomResource.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  CustomResource.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  CustomResource.prototype.trace = function (body, options) {
    return handleRequest(this._client, this._uri, 'TRACE', body, options)
  }
  CustomResource.prototype.copy = function (body, options) {
    return handleRequest(this._client, this._uri, 'COPY', body, options)
  }
  CustomResource.prototype.lock = function (body, options) {
    return handleRequest(this._client, this._uri, 'LOCK', body, options)
  }
  CustomResource.prototype.mkcol = function (body, options) {
    return handleRequest(this._client, this._uri, 'MKCOL', body, options)
  }
  CustomResource.prototype.move = function (body, options) {
    return handleRequest(this._client, this._uri, 'MOVE', body, options)
  }
  CustomResource.prototype.purge = function (body, options) {
    return handleRequest(this._client, this._uri, 'PURGE', body, options)
  }
  CustomResource.prototype.propfind = function (body, options) {
    return handleRequest(this._client, this._uri, 'PROPFIND', body, options)
  }
  CustomResource.prototype.proppatch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PROPPATCH', body, options)
  }
  CustomResource.prototype.unlock = function (body, options) {
    return handleRequest(this._client, this._uri, 'UNLOCK', body, options)
  }
  CustomResource.prototype.report = function (body, options) {
    return handleRequest(this._client, this._uri, 'REPORT', body, options)
  }
  CustomResource.prototype.mkactivity = function (body, options) {
    return handleRequest(this._client, this._uri, 'MKACTIVITY', body, options)
  }
  CustomResource.prototype.checkout = function (body, options) {
    return handleRequest(this._client, this._uri, 'CHECKOUT', body, options)
  }
  CustomResource.prototype.merge = function (body, options) {
    return handleRequest(this._client, this._uri, 'MERGE', body, options)
  }
  CustomResource.prototype.mSearch = function (body, options) {
    return handleRequest(this._client, this._uri, 'M-SEARCH', body, options)
  }
  CustomResource.prototype.notify = function (body, options) {
    return handleRequest(this._client, this._uri, 'NOTIFY', body, options)
  }
  CustomResource.prototype.subscribe = function (body, options) {
    return handleRequest(this._client, this._uri, 'SUBSCRIBE', body, options)
  }
  CustomResource.prototype.unsubscribe = function (body, options) {
    return handleRequest(this._client, this._uri, 'UNSUBSCRIBE', body, options)
  }
  CustomResource.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  CustomResource.prototype.search = function (body, options) {
    return handleRequest(this._client, this._uri, 'SEARCH', body, options)
  }
  CustomResource.prototype.connect = function (body, options) {
    return handleRequest(this._client, this._uri, 'CONNECT', body, options)
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
