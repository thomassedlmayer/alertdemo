# alertdemo

This extension is a demonstration of a proposed Lichtblick feature to allow message converter extensions the emission of alerts during message conversion.
When opening an OSI MCAP file containing a `osi3.SensorView` topic, this message converter generates 250 alerts per frame.

## Develop

Extension development uses the `npm` package manager to install development dependencies and run build scripts.

To install extension dependencies, run `npm` from the root of the extension package.

```sh
yarn install
```

To build and install the extension into your local Lichtblick desktop app, run:

```sh
yarn run local-install
```

Open the Lichtblick desktop (or `ctrl-R` to refresh if it is already open). Your extension is installed and available within the app.

## Package

Extensions are packaged into `.foxe` files. These files contain the metadata (package.json) and the build code for the extension.

Before packaging, make sure to set `name`, `publisher`, `version`, and `description` fields in _package.json_. When ready to distribute the extension, run:

```sh
yarn run package
```

This command will package the extension into a `.foxe` file in the local directory.

## Publish

You can publish the extension to the public registry or privately for your organization.

