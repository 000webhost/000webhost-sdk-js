# webhost-client

Browser and node module for making API requests against [webhost-client](https://hostinger-000-rest-mock.herokuapp.com).

**Please note: This module uses [Popsicle](https://github.com/blakeembrey/popsicle) to make API requests. Promises must be supported or polyfilled on all target environments.**

## Installation

```
npm install webhost-client --save
bower install webhost-client --save
```

## Usage

### Node

```javascript
var WebhostClient = require('webhost-client');

var client = new WebhostClient();
```

### Browsers

```html
<script src="webhost-client/index.js"></script>

<script>
  var client = new WebhostClient();
</script>
```

### Options

You can set options when you initialize a client or at any time with the `options` property. You may also override options for a single request by passing an object as the second argument of any request method. For example:

```javascript
var client = new WebhostClient({ ... });

client.options = { ... };

client.resource('/').get(null, {
  baseUri: 'http://example.com',
  headers: {
    'Content-Type': 'application/json'
  }
});
```

#### Base URI

You can override the base URI by setting the `baseUri` property, or initializing a client with a base URI. For example:

```javascript
new WebhostClient({
  baseUri: 'https://example.com'
});
```

#### Base URI Parameters

If the base URI has parameters inline, you can set them by updating the `baseUriParameters` property. For example:

```javascript
client.options.baseUriParameters.version = 'v3';
```

### Resources

All methods return a HTTP request instance of [Popsicle](https://github.com/blakeembrey/popsicle), which allows the use of promises (and streaming in node).

#### resources.users.user_id(user_id)

* **user_id** _string_

```js
var resource = client.resources.users.user_id(user_id);
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### GET

Get user information

```js
resource.get().then(function (res) { ... });
```

##### DELETE

Delete user

```js
resource.delete().then(function (res) { ... });
```

##### PATCH

Update user

```js
resource.patch().then(function (res) { ... });
```

##### Body

**application/json**

```
{
  "type": "object",
  "$schema": "http://json-schema.org/draft-03/schema",
  "id": "http://jsonschema.net",
  "required": true,
  "properties": {
    "name": {
      "type": "string",
      "required": true,
      "minLength": 2
    },
    "country": {
      "type": "string",
      "required": true,
      "minLength": 3
    }
  }
}

```

#### resources.users.user_id(user_id).password

```js
var resource = client.resources.users.user_id(user_id).password;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### PATCH

Update user password

```js
resource.patch().then(function (res) { ... });
```

##### Body

**application/json**

```
{
  "type": "object",
  "$schema": "http://json-schema.org/draft-03/schema",
  "id": "http://jsonschema.net",
  "required": true,
  "properties": {
    "password_old": {
      "type": "string",
      "required": true,
      "minLength": 6
    },
    "password_new": {
      "type": "string",
      "required": true,
      "minLength": 6
    },
    "password_new_confirm": {
      "type": "string",
      "required": true,
      "minLength": 6
    }
  }
}

```

#### resources.users.user_id(user_id).phone-number

```js
var resource = client.resources.users.user_id(user_id).phone-number;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### PATCH

Update user phone number

```js
resource.patch().then(function (res) { ... });
```

##### Body

**application/json**

```
{
  "type": "object",
  "$schema": "http://json-schema.org/draft-03/schema",
  "id": "http://jsonschema.net",
  "required": true,
  "properties": {
    "phone_number": {
      "type": "string",
      "required": true,
      "minLength": 6,
      "pattern": "^(\\+?[0-9]*$)$"
    }
  }
}

```

#### resources.users.user_id(user_id).email

```js
var resource = client.resources.users.user_id(user_id).email;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### PATCH

Update user email

```js
resource.patch().then(function (res) { ... });
```

##### Body

**application/json**

```
{
  "type": "object",
  "$schema": "http://json-schema.org/draft-03/schema",
  "id": "http://jsonschema.net",
  "required": true,
  "properties": {
    "email": {
      "type": "string",
      "required": true,
      "minLength": 4
    }
  }
}

```

#### resources.users.user_id(user_id).resend-confirmation

```js
var resource = client.resources.users.user_id(user_id).resend-confirmation;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### POST

Resend email confirmation

```js
resource.post().then(function (res) { ... });
```

#### resources.users.user_id(user_id).steps

```js
var resource = client.resources.users.user_id(user_id).steps;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### GET

Get user gamification progress

```js
resource.get().then(function (res) { ... });
```

#### resources.apps

```js
var resource = client.resources.apps;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### GET

Get list of apps

```js
resource.get().then(function (res) { ... });
```

##### Query Parameters

```javascript
resource.get({ ... });
```

* **status** _string_

Specify application status

##### POST

Create new app

```js
resource.post().then(function (res) { ... });
```

##### Query Parameters

```javascript
resource.post(null, { query: { ... } });
```

* **app_name** _string_

Specify name for application

* **domain** _string_

Specify domain for application

* **type** _string, one of (php55, php70), default: php55_

Specify type for application

* **location** _string, one of (US, UK), default: US_

Specify location for application

* **password** _string_

Specify password for application

#### resources.apps.app_id(app_id)

* **app_id** _string_

```js
var resource = client.resources.apps.app_id(app_id);
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### GET

Get the app
with appId

```js
resource.get().then(function (res) { ... });
```

##### DELETE

Delete app

```js
resource.delete().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).reset

```js
var resource = client.resources.apps.app_id(app_id).reset;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### POST

Clean everything client has ever created, basically delete
and recreate

```js
resource.post().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).password

```js
var resource = client.resources.apps.app_id(app_id).password;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### PATCH

Update application password

```js
resource.patch().then(function (res) { ... });
```

##### Body

**application/json**

```
{
  "type": "object",
  "$schema": "http://json-schema.org/draft-03/schema",
  "id": "http://jsonschema.net",
  "required": true,
  "properties": {
    "user_password": {
      "type": "string",
      "required": true,
      "minLength": 6
    },
    "new_app_password": {
      "type": "string",
      "required": true,
      "minLength": 6
    }
  }
}

```

#### resources.apps.app_id(app_id).type

```js
var resource = client.resources.apps.app_id(app_id).type;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### PATCH

Change application's type (PHP version)

```js
resource.patch().then(function (res) { ... });
```

##### Body

**application/json**

```
{
  "type": "object",
  "$schema": "http://json-schema.org/draft-03/schema",
  "id": "http://jsonschema.net",
  "required": true,
  "properties": {
    "type": {
      "type": "string",
      "required": true,
      "minLength": 5
    }
  }
}

```

#### resources.apps.app_id(app_id).category

```js
var resource = client.resources.apps.app_id(app_id).category;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### PATCH

Change application's category

```js
resource.patch().then(function (res) { ... });
```

##### Body

**application/json**

```
{
  "type": "object",
  "$schema": "http://json-schema.org/draft-03/schema",
  "id": "http://jsonschema.net",
  "required": true,
  "properties": {
    "category": {
      "type": "string",
      "required": true,
      "minLength": 3
    }
  }
}

```

#### resources.apps.app_id(app_id).adult

```js
var resource = client.resources.apps.app_id(app_id).adult;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### PATCH

Change application's adult property

```js
resource.patch().then(function (res) { ... });
```

##### Body

**application/json**

```
{
  "type": "object",
  "$schema": "http://json-schema.org/draft-03/schema",
  "id": "http://jsonschema.net",
  "required": true,
  "properties": {
    "adult": {
      "type": "boolean",
      "required": true
    }
  }
}

```

#### resources.apps.app_id(app_id).sendmail

```js
var resource = client.resources.apps.app_id(app_id).sendmail;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### PATCH

Turn on/off sendmail

```js
resource.patch().then(function (res) { ... });
```

##### Body

**application/json**

```
{
  "type": "object",
  "$schema": "http://json-schema.org/draft-03/schema",
  "id": "http://jsonschema.net",
  "required": true,
  "properties": {
    "active": {
      "type": "boolean",
      "required": true
    }
  }
}

```

#### resources.apps.app_id(app_id).files

```js
var resource = client.resources.apps.app_id(app_id).files;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### GET

Get FTP details for application

```js
resource.get().then(function (res) { ... });
```

##### PATCH

Update FTP password

```js
resource.patch().then(function (res) { ... });
```

##### Query Parameters

```javascript
resource.patch(null, { query: { ... } });
```

* **password_old** _string_

Specify old FTP password

* **password_new** _string_

Specify new FTP password

* **password_new_confirm** _string_

Confirm new FTP password

#### resources.apps.app_id(app_id).settings

```js
var resource = client.resources.apps.app_id(app_id).settings;
```

##### GET

Get Application settings

```js
resource.get().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).databases

```js
var resource = client.resources.apps.app_id(app_id).databases;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### GET

Get list of databases

```js
resource.get().then(function (res) { ... });
```

##### POST

Create new databasis

```js
resource.post().then(function (res) { ... });
```

##### Query Parameters

```javascript
resource.post(null, { query: { ... } });
```

* **name** _string_

Specify database name

* **username** _string_

Specify database username

* **password** _string_

Specify database password

* **ip** _string, default: 127.0.0.1_

Specify database user host ip

* **permissions** _string, default: permit all_

Specify database permissions

#### resources.apps.app_id(app_id).databases.database_id(database_id)

* **database_id** _string_

```js
var resource = client.resources.apps.app_id(app_id).databases.database_id(database_id);
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### DELETE

Delete databasis

```js
resource.delete().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).databases.database_id(database_id).change-password

```js
var resource = client.resources.apps.app_id(app_id).databases.database_id(database_id).change-password;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### PATCH

Change database password

```js
resource.patch().then(function (res) { ... });
```

##### Query Parameters

```javascript
resource.patch(null, { query: { ... } });
```

* **password_new** _string_

Specify new database password

* **password_new_confirm** _string_

Confirm new database password

#### resources.apps.app_id(app_id).databases.database_id(database_id).usage

```js
var resource = client.resources.apps.app_id(app_id).databases.database_id(database_id).usage;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### GET

Get database usage over time

```js
resource.get().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).cronjobs

```js
var resource = client.resources.apps.app_id(app_id).cronjobs;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### GET

Get list of cronjobs

```js
resource.get().then(function (res) { ... });
```

##### POST

Create new cronjob

```js
resource.post().then(function (res) { ... });
```

##### Query Parameters

```javascript
resource.post(null, { query: { ... } });
```

* **job** _string_

Cron job

* **minute** _string_

Cron minute value

* **hour** _string_

Cron hour value

* **day** _string_

Cron day value

* **month** _string_

Cron month value

* **weekday** _string_

Cron weekday value

#### resources.apps.app_id(app_id).cronjobs.cron_id(cron_id)

* **cron_id** _string_

```js
var resource = client.resources.apps.app_id(app_id).cronjobs.cron_id(cron_id);
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### DELETE

Delete cronjob

```js
resource.delete().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).statistics.bandwidth

```js
var resource = client.resources.apps.app_id(app_id).statistics.bandwidth;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### GET

Get bandwidth usage for application over time

```js
resource.get().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).statistics.response-codes

```js
var resource = client.resources.apps.app_id(app_id).statistics.response-codes;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### GET

Get bandwidth usage for application over time

```js
resource.get().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).statistics.response-time

```js
var resource = client.resources.apps.app_id(app_id).statistics.response-time;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### GET

Get bandwidth usage for application over time

```js
resource.get().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).backend

```js
var resource = client.resources.apps.app_id(app_id).backend;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### GET

Get current backend info application

```js
resource.get().then(function (res) { ... });
```

##### PATCH

Change backend type for application

```js
resource.patch().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).redirects

```js
var resource = client.resources.apps.app_id(app_id).redirects;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### GET

Get list of redirects

```js
resource.get().then(function (res) { ... });
```

##### POST

Create new redirect

```js
resource.post().then(function (res) { ... });
```

##### Query Parameters

```javascript
resource.post(null, { query: { ... } });
```

* **from** _string_

Specify from url

* **to** _string_

Specify to url

* **type** _integer, default: 301_

Specify redirect type

#### resources.apps.app_id(app_id).redirects.redirect_id(redirect_id)

* **redirect_id** _string_

```js
var resource = client.resources.apps.app_id(app_id).redirects.redirect_id(redirect_id);
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### DELETE

Delete redirect

```js
resource.delete().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).security.password-protected-directories

```js
var resource = client.resources.apps.app_id(app_id).security.password-protected-directories;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### GET

Get list of password-protected-directories

```js
resource.get().then(function (res) { ... });
```

##### POST

Create new password-protected-directory

```js
resource.post().then(function (res) { ... });
```

##### Query Parameters

```javascript
resource.post(null, { query: { ... } });
```

* **directory** _string, default: /_

Specify directory path

* **username** _string_

Specify auth user

* **password** _string_

Specify auth user password

#### resources.apps.app_id(app_id).security.password-protected-directories.dir_id(dir_id)

* **dir_id** _string_

```js
var resource = client.resources.apps.app_id(app_id).security.password-protected-directories.dir_id(dir_id);
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### DELETE

Delete password-protected-directory

```js
resource.delete().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).security.hotlink-protection

```js
var resource = client.resources.apps.app_id(app_id).security.hotlink-protection;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### GET

Get list of hotlink-protection

```js
resource.get().then(function (res) { ... });
```

##### POST

Create new hotlink-protection

```js
resource.post().then(function (res) { ... });
```

##### Query Parameters

```javascript
resource.post(null, { query: { ... } });
```

* **domain** _string_

Specify domain to protect

* **redirect** _string_

Specify hotlink url

* **redirect_protocol** _string_

Specify hotlink url

* **extensions** _string_

Specify hotlink extensions

* **direct_requests** _boolean_

Allow direct requests

#### resources.apps.app_id(app_id).security.hotlink-protection.hostlink_id(hostlink_id)

* **hostlink_id** _string_

```js
var resource = client.resources.apps.app_id(app_id).security.hotlink-protection.hostlink_id(hostlink_id);
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### DELETE

Delete hotlink-protection

```js
resource.delete().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).security.ip.whitelist

```js
var resource = client.resources.apps.app_id(app_id).security.ip.whitelist;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### GET

Get list of whitelist

```js
resource.get().then(function (res) { ... });
```

##### POST

Create new whitelist

```js
resource.post().then(function (res) { ... });
```

##### Query Parameters

```javascript
resource.post(null, { query: { ... } });
```

* **ip** _string_

Specify IP Address

#### resources.apps.app_id(app_id).security.ip.whitelist.whitelist_id(whitelist_id)

* **whitelist_id** _string_

```js
var resource = client.resources.apps.app_id(app_id).security.ip.whitelist.whitelist_id(whitelist_id);
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### DELETE

Delete whitelist

```js
resource.delete().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).security.ip.blacklist

```js
var resource = client.resources.apps.app_id(app_id).security.ip.blacklist;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### GET

Get list of blacklist

```js
resource.get().then(function (res) { ... });
```

##### POST

Create new blacklist

```js
resource.post().then(function (res) { ... });
```

##### Query Parameters

```javascript
resource.post(null, { query: { ... } });
```

* **ip** _string_

Specify IP Address

#### resources.apps.app_id(app_id).security.ip.blacklist.blacklist_id(blacklist_id)

* **blacklist_id** _string_

```js
var resource = client.resources.apps.app_id(app_id).security.ip.blacklist.blacklist_id(blacklist_id);
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### DELETE

Delete blacklist

```js
resource.delete().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).domain

```js
var resource = client.resources.apps.app_id(app_id).domain;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### GET

Get current domain information

```js
resource.get().then(function (res) { ... });
```

##### PATCH

Change application domain property

```js
resource.patch().then(function (res) { ... });
```

##### Body

**application/json**

```
{
  "type": "object",
  "$schema": "http://json-schema.org/draft-03/schema",
  "id": "http://jsonschema.net",
  "required": true,
  "properties": {
    "type": {
      "type": { "enum": [ "default","subdomain","domain" ] },
      "required": true
    },
    "domain": {
      "type": "string",
      "required": true
    }
  }
}

```

#### resources.types

```js
var resource = client.resources.types;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### GET

Get the list of available application types

```js
resource.get().then(function (res) { ... });
```

#### resources.categories

```js
var resource = client.resources.categories;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### GET

Get the list of available application categories

```js
resource.get().then(function (res) { ... });
```



### Custom Resources

You can make requests to a custom path in the API using the `#resource(path)` method.

```javascript
client.resource('/example/path').get();
```

## License

Apache 2.0
