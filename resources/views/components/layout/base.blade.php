<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="/css/bootstrap.css">
  <link rel="stylesheet" href="/css/styles.css">
  <title>{{ $title ?? 'Сёстры Солонко' }}</title>
</head>
<body>

<x-layout.header />

{{ $slot }}

<x-layout.footer />

</body>
</html>