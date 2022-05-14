# BkC Pagination

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/block-cat/pagination.svg)](https://packagist.org/packages/block-cat/pagination)

**Extensia nu este publicată pe [Packagist](https://packagist.org/)!**

Aceasta este o extensie [Flarum](https://flarum.org/) care oferă posibilitatea de înlocuire a paginării implicite din Flarum cu paginarea cu pagini.

![](https://i.imgur.com/VVRCsE7.png)

În panoul de administrare poate fi setat locul unde să fie selectată poziția paginării, în partea de sus, jos sau, și sus, și jos, pe pagina principală. De asemenea, poate fi selectat numărul de articole de pe fiecare pagină.

![](https://i.imgur.com/Kut3tzw.png)

## Compatibilitate

Această extensie este compatibilă cu versiunea `1.2.1` de [Flarum](https://flarum.org/).

## Instalare

Pentru instalarea extensiei trebuie executată următoarea comandă Composer:

```sh
composer require block-cat/pagination *@dev
```

## Actualizare

Pentru actualizarea extensiei trebuie executată următoarea comandă Composer:

```sh
composer update block-cat/pagination
php flarum cache:clear
```

## Dezinstalare

Pentru dezinstalarea extensiei trebuie executată următoarea comandă Composer:

```sh
composer remove block-cat/pagination
php flarum cache:clear
```

## Link-uri utile

- [Cod sursă pe GitHub](https://github.com/block-cat/pagination)
- [Changelog](CHANGELOG.md)