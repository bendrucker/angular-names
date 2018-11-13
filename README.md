angular-names [![Build Status](https://travis-ci.org/bendrucker/angular-names.svg?branch=master)](https://travis-ci.org/bendrucker/angular-names) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/angular-names.svg)](https://greenkeeper.io/)
=============

## Setup

```bash
$ npm install --save angular-names
```
```js
angular.module('yourApp', [
  require('angular-names')
]);
```

## Usage
```html
<input ng-model="user.name" name="userName" full-name />
<p ng-show="userName.$error.fullName">Please enter your full name</p>
```
