# Docker Lighthouse
Docker image with [Lighthouse](https://developers.google.com/web/tools/lighthouse) and [Google Chrome](https://www.google.com/chrome) installed.

## Why is this needed?
We already can use [Lighthouse](https://developers.google.com/web/tools/lighthouse) as a [CLI (Command Line Interface)](https://developers.google.com/web/tools/lighthouse/#herramienta_linea_de_comandos) but it still needs our browser. We may want a headless browser without extensions or other tabs running in order to get the most accurate results possible.

## What does this docker image contain?

This is a very simple image based on the [Circleci node image](https://hub.docker.com/r/circleci/node/) (since Lighthouse runs on Node.js). This base image give us Node.js and the headless Chrome browser.

After the base image all we do is install Lighthouse and add our own configuration so we can change our performance tests based on our own needs.

We provide you a [Custom Configuration File](./custom-config.js) as an example but you can change it according to your needs. Check the official [Lighthouse configuration docs](https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md) to know what you can do with this file.

## Quickstart

If you just want to try it really quick, you can pull it:

    docker pull teambeek/docker-lighthouse

and then use it like this:

    docker run teambeek/docker-lighthouse lighthouse https://www.google.com/ --output json --config-path=/tmp/custom-config.js

Here you are running performance tests against `https://www.google.com/` and printing the results in `json` format to the standard output. See the [Custom Config File](./custom-config.js) to know what you are getting of this tests.

You can send the results to a file if you want:

    docker run teambeek/docker-lighthouse lighthouse https://www.google.com/ --output json --config-path=/tmp/custom-config.js > results.json

## Usage

Probably a better way to use this image is to build it with your own configuration file, so it can serve your very speacial needs. 

First of all, clone this repo:

    git clone git@github.com:beek/docker-lighthouse.git
    
Then change the [Custom Config File](./custom-config.js) as you need. Remember, [here are the docs](https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md) to know what you can do with this file.

After you are satisfied with your Config File, build the image. While being inside this repository, in the same place where the [Dockerfile](./Dockerfile) lives:

    docker build . --tag teambeek/docker-lighthouse
    
Of course, you can use whatever tag you want.

Then use it as you would use Lighthouse normally.

    docker run teambeek/docker-lighthouse lighthouse https://www.google.com/ --output json --config-path=/tmp/custom-config.js > results.json

See Lighthouse help command to know more of what you can do:

    docker run teambeek/docker-lighthouse lighthouse --help
