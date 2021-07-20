<x-layout.base title="My title">

  <main class="main container text-center">
    <ul>
      @foreach ($dresses as $dress)
        <li>
          <a href="#">{{ $dress->name }}</a>
          <button id="addToCartButton" data-dress="@json($dress, JSON_UNESCAPED_UNICODE, JSON_HEX_APOS)" type="button">В корзину</button>
        </li>
      @endforeach
    </ul>
  </main>

</x-layout.base>
