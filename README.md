# \<blox-restore\>

Generates a file upload for the user to restore an acocunt

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Install blox-restore

```
$ npm install blox-restore
```

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

## Import

```
$ import 'blox-restore';
```

## Basic Use

```html
<blox-restore
    accept=".json"
    error="{{error}}"
    restoreData="{{restoreData}}">
</blox-restore>
```
