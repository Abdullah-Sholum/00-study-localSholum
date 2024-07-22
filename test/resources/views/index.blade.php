@extends('layout.master')
{{-- penggunaan @extend untuk memanggil file layout untuk dilakukan extend | @extend('lokasiFile.namaFile') --}}
@section('title', 'index')
{{-- penggunaa @extend untuk memanggil @yield | @section('namaDokumense') --}}
@section('content')
<h1>lah test sdasd</h1>
<button class="bg-sky-500 hover:bg-sky-700 ...">
  Save changes
</button>
@endsection
