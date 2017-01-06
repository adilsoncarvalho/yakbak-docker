yakbak-docker
=============

This container aids you to quickly cache http/https calls to any website or api and store them for further use.

It just a quick way to use the [Flickr's yakbak][0] project.

## How does it work?

It works as a proxy for a given endpoint. Instead of hitting that endpoint you'll hit the url `http://localhost:7000`. The first call will be forwarded to the real endpoint, recording both the request and the response.

All the subsequent ones will be provided by the cached version. That's it.

## Environment options

- `PROXY_PORT` defaults to 7000

## Commands

### Quick'n'dirty run

Starts it to record and proxy further requests to the given url

```sh
docker run --rm -ti yakbak-docker https://google.com
```

### Preserving your tapes

This is handy to allow you to share those tapes with your team. As they're just plain js files you can versionate them on git.

```sh
docker run --rm -ti -v "$(pwd):/tapes" yakbak-docker https://google.com
```

[0]: https://github.com/flickr/yakbak
