<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="/favicon.ico">
{{--  <script defer src="/js/init.js"></script>--}}
{{--  <script defer src="/js/app.js"></script>--}}

  <link rel="stylesheet" href="/css/tailwind.css">
  <link rel="stylesheet" href="/css/styles.css">

  <script defer src="/js/bundle.js"></script>

  <title>Сёстры Солонко | Шоу-рум</title>
</head>
<body>

<x-layout.header />

{{ $slot }}

<x-layout.footer />

</body>
</html>
