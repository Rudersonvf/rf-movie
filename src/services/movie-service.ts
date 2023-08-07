import { MovieDTO } from "../models/movie";

export function findAll(): MovieDTO[] {
  return movies.slice().sort((a, b) => a.title.localeCompare(b.title));
}

export function findByName(name: string): MovieDTO[] {
  return movies.filter((movie) =>
    movie.title.toLowerCase().includes(name.toLowerCase())
  );
}

const movies: MovieDTO[] = [
  {
    id: 1,
    img_url:
      "https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG",
    title: "Matrix",
    release: "1999",
    director: "Lana Wachowski, Lilly Wachowski",
    categories: [
      {
        id: 1,
        name: "Ação",
      },
      {
        id: 2,
        name: "Ficção Científica",
      },
    ],
  },
  {
    id: 2,
    img_url:
      "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/93/20/20120876.jpg",
    title: "O Poderoso Chefão",
    release: "1972",
    director: "Francis Ford Coppola",
    categories: [
      {
        id: 3,
        name: "Drama",
      },
      {
        id: 4,
        name: "Crime",
      },
    ],
  },
  {
    id: 3,
    img_url:
      "https://br.web.img3.acsta.net/c_310_420/pictures/14/10/31/20/39/476171.jpg",
    title: "Interestelar",
    release: "2014",
    director: "Christopher Nolan",
    categories: [
      {
        id: 1,
        name: "Ação",
      },
      {
        id: 2,
        name: "Ficção Científica",
      },
      {
        id: 3,
        name: "Drama",
      },
    ],
  },
  {
    id: 4,
    img_url:
      "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/30/21/19874092.jpg",
    title: "Forrest Gump",
    release: "1994",
    director: "Robert Zemeckis",
    categories: [
      {
        id: 3,
        name: "Drama",
      },
      {
        id: 5,
        name: "Romance",
      },
    ],
  },
  {
    id: 5,
    img_url:
      "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/95/96/20122166.jpg",
    title: "Clube da Luta",
    release: "1999",
    director: "David Fincher",
    categories: [
      {
        id: 1,
        name: "Ação",
      },
      {
        id: 3,
        name: "Drama",
      },
    ],
  },
  {
    id: 6,
    img_url:
      "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/91/32/20224832.jpg",
    title: "O Senhor dos Anéis: A Sociedade do Anel",
    release: "2001",
    director: "Peter Jackson",
    categories: [
      {
        id: 1,
        name: "Ação",
      },
      {
        id: 6,
        name: "Fantasia",
      },
      {
        id: 7,
        name: "Aventura",
      },
    ],
  },
  {
    id: 7,
    img_url:
      "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/89/56/94/20055685.jpg",
    title: "Titanic",
    release: "1997",
    director: "James Cameron",
    categories: [
      {
        id: 3,
        name: "Drama",
      },
      {
        id: 5,
        name: "Romance",
      },
      {
        id: 12,
        name: "História",
      },
    ],
  },
  {
    id: 8,
    img_url:
      "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/32/31/20028688.jpg",
    title: "A Origem",
    release: "2010",
    director: "Christopher Nolan",
    categories: [
      {
        id: 2,
        name: "Ficção Científica",
      },
      {
        id: 3,
        name: "Drama",
      },
      {
        id: 6,
        name: "Fantasia",
      },
    ],
  },
  {
    id: 9,
    img_url:
      "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/05/56/20369174.jpg",
    title: "Jurassic Park",
    release: "1993",
    director: "Steven Spielberg",
    categories: [
      {
        id: 1,
        name: "Ação",
      },
      {
        id: 2,
        name: "Ficção Científica",
      },
      {
        id: 7,
        name: "Aventura",
      },
    ],
  },
  {
    id: 10,
    img_url:
      "https://br.web.img3.acsta.net/c_310_420/pictures/17/12/07/16/09/2291532.jpg",
    title: "Pantera Negra",
    release: "2018",
    director: "Ryan Coogler",
    categories: [
      {
        id: 1,
        name: "Ação",
      },
      {
        id: 9,
        name: "Super-Heróis",
      },
    ],
  },
  {
    id: 11,
    img_url:
      "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/84/28/19962110.jpg",
    title: "O Rei Leão",
    release: "1994",
    director: "Roger Allers, Rob Minkoff",
    categories: [
      {
        id: 10,
        name: "Animação",
      },
      {
        id: 7,
        name: "Aventura",
      },
      {
        id: 11,
        name: "Família",
      },
    ],
  },
  {
    id: 12,
    img_url:
      "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/30/40/20028676.jpg",
    title: "Avatar",
    release: "2009",
    director: "James Cameron",
    categories: [
      {
        id: 1,
        name: "Ação",
      },
      {
        id: 2,
        name: "Ficção Científica",
      },
      {
        id: 6,
        name: "Fantasia",
      },
    ],
  },
  {
    id: 13,
    img_url:
      "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/43/61/20096488.jpg",
    title: "Os Intocáveis",
    release: "1987",
    director: "Brian De Palma",
    categories: [
      {
        id: 3,
        name: "Drama",
      },
      {
        id: 4,
        name: "Crime",
      },
      {
        id: 12,
        name: "Biografia",
      },
    ],
  },
  {
    id: 14,
    img_url:
      "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/86/98/32/19870786.jpg",
    title: "Batman: O Cavaleiro das Trevas",
    release: "2008",
    director: "Christopher Nolan",
    categories: [
      {
        id: 1,
        name: "Ação",
      },
      {
        id: 9,
        name: "Super-Heróis",
      },
      {
        id: 4,
        name: "Crime",
      },
    ],
  },
  {
    id: 15,
    img_url:
      "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/16/32/19872655.jpg",
    title: "Pulp Fiction",
    release: "1994",
    director: "Quentin Tarantino",
    categories: [
      {
        id: 3,
        name: "Drama",
      },
      {
        id: 4,
        name: "Crime",
      },
    ],
  },
  {
    id: 16,
    img_url:
      "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/14/49/19872468.jpg",
    title: "O Labirinto do Fauno",
    release: "2006",
    director: "Guillermo del Toro",
    categories: [
      {
        id: 10,
        name: "Animação",
      },
      {
        id: 6,
        name: "Fantasia",
      },
      {
        id: 11,
        name: "Família",
      },
    ],
  },
  {
    id: 17,
    img_url:
      "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/95/16/34/20384584.jpg",
    title: "E.T. - O Extraterrestre",
    release: "1982",
    director: "Steven Spielberg",
    categories: [
      {
        id: 10,
        name: "Animação",
      },
      {
        id: 7,
        name: "Aventura",
      },
      {
        id: 11,
        name: "Família",
      },
    ],
  },
  {
    id: 18,
    img_url:
      "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/33/37/20028712.jpg",
    title: "Cisne Negro",
    release: "2010",
    director: "Darren Aronofsky",
    categories: [
      {
        id: 3,
        name: "Drama",
      },
      {
        id: 20,
        name: "Suspense",
      },
    ],
  },
  {
    id: 19,
    img_url:
      "https://br.web.img3.acsta.net/c_310_420/pictures/210/527/21052756_20131024195513383.jpg",
    title: "A Viagem de Chihiro",
    release: "2001",
    director: "Hayao Miyazaki",
    categories: [
      {
        id: 10,
        name: "Animação",
      },
      {
        id: 11,
        name: "Família",
      },
    ],
  },
  {
    id: 20,
    img_url:
      "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/76/06/82/19305486.jpg",
    title: "Rocky - Um Lutador",
    release: "1976",
    director: "John G. Avildsen",
    categories: [
      {
        id: 3,
        name: "Drama",
      },
      {
        id: 1,
        name: "Ação",
      },
    ],
  },
];
