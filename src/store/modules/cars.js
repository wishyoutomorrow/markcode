export default {
  state: {
    cars: [
      {
        id: 1,
        model: "Mercedes A-class",
        img_url: "https://asset.mbtools.me/model-img/w176.jpg",
      },
      {
        id: 2,
        model: "Mercedes B-class",
        img_url: "https://asset.mbtools.me/model-img/w246.jpg",
      },
      {
        id: 3,
        model: "Mercedes C-class",
        img_url: "https://asset.mbtools.me/model-img/w176.jpg",
      },
      {
        id: 4,
        model: "Mercedes CLA",
        img_url: "https://asset.mbtools.me/model-img/w117.jpg",
      },
      {
        id: 5,
        model: "Mercedes CLS",
        img_url: "https://asset.mbtools.me/model-img/w218.jpg",
      },
      {
        id: 6,
        model: "Mercedes E-class",
        img_url: "https://asset.mbtools.me/model-img/w212.jpg",
      },
      {
        id: 7,
        model: "Mercedes GLA",
        img_url: "https://asset.mbtools.me/model-img/w156.jpg",
      },
      {
        id: 8,
        model: "Mercedes GLK",
        img_url: "https://asset.mbtools.me/model-img/x204.jpg",
      },
      {
        id: 9,
        model: "Mercedes GLC",
        img_url: "https://asset.mbtools.me/model-img/w253.jpg",
      },
      {
        id: 10,
        model: "Mercedes G-class",
        img_url: "https://asset.mbtools.me/model-img/w463.jpg",
      },
      {
        id: 11,
        model: "Mercedes GL/GLS",
        img_url: "https://asset.mbtools.me/model-img/w166.jpg",
      },
      {
        id: 12,
        model: "Mercedes ML/GLE",
        img_url: "https://asset.mbtools.me/model-img/w166.jpg",
      },
      {
        id: 13,
        model: "Mercedes GLE Coupe",
        img_url: "https://asset.mbtools.me/model-img/c292.jpg",
      },
      {
        id: 14,
        model: "Mercedes S-class",
        img_url: "https://asset.mbtools.me/model-img/c217.jpg",
      },
      {
        id: 15,
        model: "Mercedes SL",
        img_url: "https://asset.mbtools.me/model-img/r231.jpg",
      },
      {
        id: 16,
        model: "Mercedes SLK/SLC",
        img_url: "https://asset.mbtools.me/model-img/r172.jpg",
      },
      {
        id: 17,
        model: "Mercedes AMG GT",
        img_url: "https://asset.mbtools.me/model-img/c190.jpg",
      },
      {
        id: 18,
        model: "Mercedes V-class",
        img_url: "https://asset.mbtools.me/model-img/w447.jpg",
      },
    ],
  },
  getters: {
    allCars(state) {
      return state.cars;
    },
    allCarsModels(state) {
      return state.cars.map((c) => c.model);
    },
    allCarsYears(state) {
      return state.cars.map((c) => c.year);
    },
  },
};
