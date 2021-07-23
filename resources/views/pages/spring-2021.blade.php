<x-layout.base title="My title">

  <main>
    <ul>
      @foreach ($dresses as $dress)
        <li>
          <a href="#">{{ $dress->name }}</a>
          <button id="addToCartButton" data-dress-id="{{ $dress->id }}" type="button">В корзину</button>
        </li>
      @endforeach
    </ul>
  </main>

  <script>
    window.dresses = @json($dresses, JSON_UNESCAPED_UNICODE);
  </script>

</x-layout.base>
