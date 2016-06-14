# REST 000webhost Client API

Browser and node module for making API requests against [REST 000webhost Client API](https://localhost:3333).

**Please note: This module uses [Popsicle](https://github.com/blakeembrey/popsicle) to make API requests. Promises must be supported or polyfilled on all target environments.**

## Installation

```
npm install rest-000-webhost-client-api --save
bower install rest-000-webhost-client-api --save
```

## Usage

### Node

```javascript
var Rest000WebhostClientApi = require('rest-000-webhost-client-api');

var client = new Rest000WebhostClientApi();
```

### Browsers

```html
<script src="rest-000-webhost-client-api/index.js"></script>

<script>
  var client = new Rest000WebhostClientApi();
</script>
```

### Options

You can set options when you initialize a client or at any time with the `options` property. You may also override options for a single request by passing an object as the second argument of any request method. For example:

```javascript
var client = new Rest000WebhostClientApi({ ... });

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
new Rest000WebhostClientApi({
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

##### GET

Get user information

```js
resource.get().then(function (res) { ... });
```

#### resources.apps

```js
var resource = client.resources.apps;
```

##### GET

Get application list

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

Create new application

```js
resource.post().then(function (res) { ... });
```

##### Query Parameters

```javascript
resource.post(null, { query: { ... } });
```

* **app_name** _string_

Specify name for application

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

##### DELETE

Delete application

```js
resource.delete().then(function (res) { ... });
```

##### GET

Get application information

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

#### resources.apps.app_id(app_id).reset

```js
var resource = client.resources.apps.app_id(app_id).reset;
```

##### POST

Clean everything client has ever created, basically delete
and recreate

```js
resource.post().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).files

```js
var resource = client.resources.apps.app_id(app_id).files;
```

##### GET

Get FTP details for application

```js
resource.get().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).databases

```js
var resource = client.resources.apps.app_id(app_id).databases;
```

##### GET

Get databases list for application

```js
resource.get().then(function (res) { ... });
```

##### POST

Create new database

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

##### DELETE

Delete database

```js
resource.delete().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).databases.database_id(database_id).change-password

```js
var resource = client.resources.apps.app_id(app_id).databases.database_id(database_id).change-password;
```

##### POST

Change database password

```js
resource.post().then(function (res) { ... });
```

##### Query Parameters

```javascript
resource.post(null, { query: { ... } });
```

* **password_new** _string_

Specify new database password

* **password_new_confirm** _string_

Confirm new database password

#### resources.apps.app_id(app_id).databases.database_id(database_id).usage

```js
var resource = client.resources.apps.app_id(app_id).databases.database_id(database_id).usage;
```

##### GET

Get database usage

```js
resource.get().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).cronjobs

```js
var resource = client.resources.apps.app_id(app_id).cronjobs;
```

##### GET

Get crons list for application

```js
resource.get().then(function (res) { ... });
```

##### POST

Create cronjob

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

##### DELETE

Delete cronjob

```js
resource.delete().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).statistics.disk

```js
var resource = client.resources.apps.app_id(app_id).statistics.disk;
```

##### GET

Get disk usage for application

```js
resource.get().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).statistics.bandwidth

```js
var resource = client.resources.apps.app_id(app_id).statistics.bandwidth;
```

##### GET

Get bandwidth usage for application

```js
resource.get().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).statistics.inodes

```js
var resource = client.resources.apps.app_id(app_id).statistics.inodes;
```

##### GET

Get inodes usage for application

```js
resource.get().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).statistics.database

```js
var resource = client.resources.apps.app_id(app_id).statistics.database;
```

##### GET

Get all application databases usage

```js
resource.get().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).statistics.requests

```js
var resource = client.resources.apps.app_id(app_id).statistics.requests;
```

##### GET

Get requests list for application

```js
resource.get().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).backend

```js
var resource = client.resources.apps.app_id(app_id).backend;
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

##### GET

Get redirects list

```js
resource.get().then(function (res) { ... });
```

##### POST

Create redirect

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

##### DELETE

Delete redirect

```js
resource.delete().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).security.password-protected-directories

```js
var resource = client.resources.apps.app_id(app_id).security.password-protected-directories;
```

##### GET

Get password protected directories list

```js
resource.get().then(function (res) { ... });
```

##### POST

Create password protected directory for application

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

##### DELETE

Delete password protected directory for application

```js
resource.delete().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).security.hotlink-protection

```js
var resource = client.resources.apps.app_id(app_id).security.hotlink-protection;
```

##### GET

Get hotlink protection information

```js
resource.get().then(function (res) { ... });
```

##### POST

Enable hotlink protection

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

##### DELETE

Delete hotlink protection

```js
resource.delete().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).security.ip.whitelist

```js
var resource = client.resources.apps.app_id(app_id).security.ip.whitelist;
```

##### GET

Get whitelisted IPs list

```js
resource.get().then(function (res) { ... });
```

##### POST

Whitelist IP

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

##### DELETE

Remove whitelisted IP

```js
resource.delete().then(function (res) { ... });
```

#### resources.apps.app_id(app_id).security.ip.blacklist

```js
var resource = client.resources.apps.app_id(app_id).security.ip.blacklist;
```

##### GET

Get blacklisted IPs list

```js
resource.get().then(function (res) { ... });
```

##### POST

Blacklist IP

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

##### DELETE

Remove blacklisted IP

```js
resource.delete().then(function (res) { ... });
```

#### resources.domains

```js
var resource = client.resources.domains;
```

##### GET

Get domains list

```js
resource.get().then(function (res) { ... });
```

#### resources.domains.domain_id(domain_id).link

```js
var resource = client.resources.domains.domain_id(domain_id).link;
```

##### POST

Link domain

```js
resource.post().then(function (res) { ... });
```

#### resources.domains.domain_id(domain_id).unlink

```js
var resource = client.resources.domains.domain_id(domain_id).unlink;
```

##### POST

Unlink domain

```js
resource.post().then(function (res) { ... });
```



### Custom Resources

You can make requests to a custom path in the API using the `#resource(path)` method.

```javascript
client.resource('/example/path').get();
```

## License

Apache 2.0
