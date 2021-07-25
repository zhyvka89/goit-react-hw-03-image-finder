const KEY = '21789749-6de12aa5ab416fe119ffd7e9c';

function fetchImages(name, page) {
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${name}&page=${page}&per_page=12&key=${KEY}`,
  ).then(response => response.json());
}

const api = {
  fetchImages,
};

export default api;

// export default class ImagesApi {
//   constructor() {
//     this.query = '';
//     this.page = 1;
//   }

//   async fatchImages() {
//     const response = await fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${KEY}`);
//     const parsedResponse = await response.json();
//     const images = await parsedResponse.hits;
//     this.incrementPage();
//     return images;
// }

// fatchImages() {
//   fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${KEY}`)
//     .then(response => {
//       return response.json();
//       // if (response.ok) response.json();
//       // return Promise.reject(new Error('Nothing on your request!'));
//     })

//   //   this.incrementPage();
//   // }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }
// }
