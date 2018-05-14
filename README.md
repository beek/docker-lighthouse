# Docker Lighthouse
Docker image with [Lighthouse](https://developers.google.com/web/tools/lighthouse) and [Google Chrome](https://www.google.com/chrome) installed.

## Why this is needed?
We already can use [Lighthouse](https://developers.google.com/web/tools/lighthouse) as a [CLI (Command Line Interface)](https://developers.google.com/web/tools/lighthouse/#herramienta_linea_de_comandos) but it still needs our browser. We may want a headless browser without extensions or other tabs running in order to get the most acurate results as posible.

## What does this docker image contains?

This is a very simple image based on the [Circleci node image](https://hub.docker.com/r/circleci/node/) (since Lighthouse runs on Node.js). This base image give us Node.js and the headless Chrome browser.

After the base image all we do is install Lighthouse and add our own configuration so we can change our performance tests based on our own needs.

We provide you a [Custom Configuration File](./custom-config.js) as an example but you can change it according to your needs. Check the official [Lighthouse configuration docs](https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md) to know what you can do with this file.
