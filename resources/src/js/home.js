import { Preview } from './components/Preview';

const previewContainer = document.querySelector('#preview');
const preview = new Preview(previewContainer);

const featuredDresses = document.querySelectorAll('#featuredDress');
featuredDresses.forEach((dress) => {
  dress.addEventListener('click', () => {
    const wantedDressId = dress.dataset.id;
    const wantedDress = window.dresses.find(dress => dress.id == wantedDressId);

    console.log(wantedDress.image);
  });
});