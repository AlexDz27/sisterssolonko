<x-layout.base>

  <main class="main">
    <section class="collection-image-container mb-20">
      <div class="collection-image-container__interaction-container">
        <div class="collection-image-container-interaction-container__container">
          <b>Новая коллекция</b>

          <h2>Spring 2021</h2>

          <a class="growing-underline growing-underline--white growing-underline--1px growing-underline--fix" href="/spring-2021">Смотреть всю коллекцию</a>
        </div>
      </div>
    </section>

    <section class="container mx-auto">
      <h2 class="text-center">Взгляните на новинки коллекции</h2>

      <section class="grid grid-cols-3 gap-4">
        @foreach ($dresses as $dress)
          <img
            id="featuredDress"
            data-id="{{ $dress->id }}"
            class="featured-dress"
            src="/images/dresses/{{ $dress->image }}"
            alt="{{ $dress->name }}"
          >
        @endforeach

        <script>
          window.dresses = @json($dresses, JSON_UNESCAPED_UNICODE);
        </script>
      </section>
    </section>

    <section id="preview" class="preview">
      <button id="previewCloseButton" class="preview__close-button" type="button" aria-label="Закрыть">✕</button>

      asdpkaspd ksapo ksaokasok
    </section>
  </main>

</x-layout.base>
