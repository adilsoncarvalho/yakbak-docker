yakbak-docker
=============

This container aids you to quickly cache http/https calls to any website and store them for further use.

It just a quick way to use the [Flickr's yakbak][0] project.

## How does it work?

It works as a proxy that knows your desired endpoint to go ask for data. It'll then record both the request and the response, so a next call won't hit the actual endpoint.

You'll then replace the endpoint to calls made to `http://localhost:7000`. That's all.

## Options

- `PROXY_PORT` defaults to 7000

## Commands

### Quick'n'dirty run

Starts it to record and proxy further requests to the given url

```sh
docker run --rm -ti yakbak-dockerhttps://google.com
```

### Preserving your tapes

This is handy to allow you to share those tapes with your team. As they're just plain js files you can versionate them on git.

```sh
docker run --rm -ti -v "$(pwd):/yarbak/tapes" yakbak-dockerhttps://google.com
```

[0]: https://github.com/flickr/yakbak
