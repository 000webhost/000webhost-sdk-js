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

#### resources.users.user_id(user_id).password-reset

```js
var resource = client.resources.users.user_id(user_id).password-reset;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### POST

Request a new password reset link

```js
resource.post().then(function (res) { ... });
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

#### resources.users.email-verify

```js
var resource = client.resources.users.email-verify;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

#### resources.users.email-verify.token(token)

* **token** _string_

```js
var resource = client.resources.users.email-verify.token(token);
```

##### POST

Verifies user's email with a token

```js
resource.post().then(function (res) { ... });
```

#### resources.users.social.unlink.provider(provider)

* **provider** _string_

```js
var resource = client.resources.users.social.unlink.provider(provider);
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### PATCH

Unlink User from social network

```js
resource.patch().then(function (res) { ... });
```

#### resources.users.password-reset

```js
var resource = client.resources.users.password-reset;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

#### resources.users.password-reset.token(token)

* **token** _string_

```js
var resource = client.resources.users.password-reset.token(token);
```

##### GET

Retrieve password reset token details

```js
resource.get().then(function (res) { ... });
```

##### PATCH

Set a new password using password reset token

```js
resource.patch().then(function (res) { ... });
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

##### Body

**application/json**

```
{
  "type": "object",
  "$schema": "http://json-schema.org/draft-03/schema",
  "id": "http://jsonschema.net",
  "required": true,
  "properties": {
    "app_name": {
      "type": "string",
      "required": true
    },
    "domain": {
      "type": "string",
      "required": true
    },
    "type": {
      "type": "string",
      "required": true
    },
    "location": {
      "type": "string",
      "required": true
    },
    "password": {
      "type": "string",
      "required": true,
      "minLength": 4

    }
  }
}

```

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

#### resources.apps.app_id(app_id).files.permissions

```js
var resource = client.resources.apps.app_id(app_id).files.permissions;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### PATCH

Fix file permissions

```js
resource.patch().then(function (res) { ... });
```

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
    "username": {
      "type": "string",
      "required": true
    },
    "password": {
      "type": "string",
      "required": true
    },
    "ip": {
      "type": "string",
      "required": false,
      "default" : "127.0.0.1"
    },
    "permission": {
      "type": "string",
      "required": false
    }
  }
}

```

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

##### Body

**application/json**

```
{
  "type": "object",
  "$schema": "http://json-schema.org/draft-03/schema",
  "id": "http://jsonschema.net",
  "required": true,
  "properties": {
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

##### Body

**application/json**

```
{
  "type": "object",
  "$schema": "http://json-schema.org/draft-03/schema",
  "id": "http://jsonschema.net",
  "required": true,
  "properties": {
    "job": {
      "type": "string",
      "required": true,
      "minLength": 1,
      "minLength": 4
    },
    "minute": {
      "type": "string",
      "required": true,
      "minLength": 1,
      "minLength": 4
    },
    "minute": {
      "type": "string",
      "required": true,
      "minLength": 1,
      "minLength": 4
    },
    "hour": {
      "type": "string",
      "required": true,
      "minLength": 1,
      "minLength": 2
    },
    "month": {
      "type": "string",
      "required": true,
      "minLength": 1,
      "minLength": 2
    },
    "weekday": {
      "type": "string",
      "required": true,
      "minLength": 1,
      "maxLength": 1
    }
  }
}

```

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

#### resources.apps.app_id(app_id).statistics.all

```js
var resource = client.resources.apps.app_id(app_id).statistics.all;
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

#### resources.apps.app_id(app_id).statistics.disk-quota

```js
var resource = client.resources.apps.app_id(app_id).statistics.disk-quota;
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

##### Body

**application/json**

```
{
  "type": "object",
  "$schema": "http://json-schema.org/draft-03/schema",
  "id": "http://jsonschema.net",
  "required": true,
  "properties": {
    "from": {
      "type": "string",
      "required": true,
      "minLength": 1,
      "maxLength": 150
    },
    "to": {
      "type": "string",
      "required": true,
      "minLength": 1,
      "maxLength": 150
    },
    "type": {
      "type": "integer",
      "required": false,
      "default": 301
    }
  }
}

```

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

##### Body

**application/json**

```
{
  "type": "object",
  "$schema": "http://json-schema.org/draft-03/schema",
  "id": "http://jsonschema.net",
  "required": true,
  "properties": {
    "directory": {
      "type": "string",
      "required": false,
      "minLength": 1,
      "maxLength": 30
    },
    "username": {
      "type": "string",
      "required": true,
      "minLength": 2,
      "maxLength": 30
    },
    "password": {
      "type": "string",
      "required": true,
      "minLength": 1,
      "maxLength": 30
    }
  }
}

```

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

##### Body

**application/json**

```
{
  "type": "object",
  "$schema": "http://json-schema.org/draft-03/schema",
  "id": "http://jsonschema.net",
  "required": true,
  "properties": {
    "domain": {
      "type": "string",
      "required": true
    },
    "redirect": {
      "type": "string",
      "required": true
    },
    "redirect_protocol": {
      "type": "string",
      "required": false
    },
    "extensions": {
      "type": "string",
      "required": true
    },
    "direct_requests": {
      "type": "boolean",
      "required": false,
      "default": false
    }
  }
}

```

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

##### Body

**application/json**

```
{
  "type": "object",
  "$schema": "http://json-schema.org/draft-03/schema",
  "id": "http://jsonschema.net",
  "required": true,
  "properties": {
    "ip": {
      "type": "string",
      "required": true
    }
  }
}

```

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

##### Body

**application/json**

```
{
  "type": "object",
  "$schema": "http://json-schema.org/draft-03/schema",
  "id": "http://jsonschema.net",
  "required": true,
  "properties": {
    "ip": {
      "type": "string",
      "required": true
    }
  }
}

```

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

#### resources.apps.app_id(app_id).zyro

```js
var resource = client.resources.apps.app_id(app_id).zyro;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### GET

Get URL to Zyro application

```js
resource.get().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).logs

```js
var resource = client.resources.apps.app_id(app_id).logs;
```

##### OPTIONS

OAuth2 preflight check

```js
resource.options().then(function (res) { ... });
```

##### GET

Get the activity log for the application

```js
resource.get().then(function (res) { ... });
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
