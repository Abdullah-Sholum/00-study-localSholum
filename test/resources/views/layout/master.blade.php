<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    {{-- panggi file stye.css di pulic --}}
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    {{-- panggil file main.js di public --}}
    <script src="{{ asset('js/main.js') }}" defer></script>
    {{-- panggil file css & js di folder resource --}}
    @vite('resource/css/app.css')
    @vite('resource/js/app.js')
    <title>@yield('title', 'dokumen')</title>
    {{-- Penggunaan @yield untuk menentukan title | @yield('title', 'defaultName') --}}
</head>
<body>
    <h1>test</h1>
    @yield('content')
    {{-- pengunaan @yield unutuk extend konten | @yield('namaKonten') --}}
</body>
</html>
