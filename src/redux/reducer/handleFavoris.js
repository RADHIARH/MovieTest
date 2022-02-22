const states = {
  filmInit: [],
  movies: [
    {
      id: 1,
      title: "Bird Box",
      description:
        "Depuis cinq ans ,une présence invisible et mançante pousse la population au suicide .Mais une femme et ses deux enfants font le pari insensé de lui échapper .... ",
      posterURL: "https://static.xemovie.com/images/Film/Movies/BirdBox.jpg",
      rating: "5.5",
      trailerLink: "https://www.youtube.com/embed/o2AsIXSh2xo?autoplay=1",
    },
    {
      id: 2,
      title: "Blood Red Sky",
      description:
        "Lorsque des terroristes detournent un vol transatlantique de nuit,une femme souffrant d'une mystérieuse  maladie doit réveler un secret monstrueux pour proteger son fils ",
      posterURL: "https://m.media-amazon.com/images/I/71FF7tJ88dS._SS500_.jpg",
      rating: "6.2",
      trailerLink: "https://www.youtube.com/embed/U8M_1eyrBtQ?autoplay=1",
    },
    {
      id: 3,
      title: "Love Hard",
      description:
        "Une jeune femme de LosAngeles traverse le pays pendant les fetes pour surprendre l'homme qu'elle a rencontré sur internet,ùais découvre qu'elle s'est fait avoir ",
      posterURL:
        "https://fictionhorizon.com/wp-content/uploads/2021/11/Love-Hard-poster.jpg",
      rating: "7.4",
      trailerLink: "https://www.youtube.com/embed/3boMRfx6cjE?autoplay=1",
    },
    {
      id: 4,
      title: "Army of the Dead",
      description:
        "Aprés une attaque de zombie à Las Végas ,un groupe demarcenaires tente un pari fou:le braquage le plus spectaculaire  de tous les temps ...dans la zone de quarantine",
      posterURL:
        "https://static1.tribute.ca/poster/660x980/army-of-the-dead-netflix-152638.jpg",
      rating: "4",
      trailerLink: "https://www.youtube.com/embed/tI1JGPhYBS8?autoplay=1",
    },
    {
      id: 5,
      title: "Bik N3ich ",
      description:
        "Aprés la révolution de Jasmine et avant la mort de Mouammar Khadafi,la trgédie d'une femme tunisienne leve le voile sur la corruption et le trafic d'organes ",
      posterURL:
        "https://media.elcinema.com/uploads/_315x420_daf42061982d6eff659c2dc1a12a259712c02ef63cf0290b9437283ba736f768.jpg",
      rating: "8",
      trailerLink: "https://www.youtube.com/embed/ufSCpaSsuiI?autoplay=1",
    },
    {
      id: 6,
      title: "Beyrouth o Beyrouth ",
      description:
        "Au lendemain de la geurre israélo-arabe de 1967,quatre jeunes en devenir évoluent Libanais  dans un contexte politique en pleine mutation  ",
      posterURL:
        "https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYvbywD5ENrSZAKcrS3Dbsxxafz26cSjS84RKNmGWxzwero6p_tFAnEiuu49lpRr6Ki_bhcgZTF9fisFBVkBQOi2ljo.jpg?r=d7d",
      rating: "8.6",
      trailerLink: "https://www.youtube.com/embed/SagsqxiVStM?autoplay=1",
    },
    {
      id: 7,
      title: "Noura reve",
      description:
        "Lorsque son mari violent bénefice d'une libération anticipée,une femme  se bat pour sauver la nouvelle vie qu'elle avait imaginée avec son amant et ses trois enfants .  ",
      posterURL:
        "https://i0.wp.com/cinematunisien.com/wp-content/uploads/2019/09/NouraReve_aff1.jpg?zoom=1.25&resize=678%2C381",
      rating: "7.5",
      trailerLink: "https://www.youtube.com/embed/a0Yv0CP4aGQ?autoplay=1",
    },
    {
      id: 8,
      title: "La plateforme",
      description:
        " Une plateforme de nourriture descend d'étage en étage pour ravitailler les detenus d'une prison.  ",
      posterURL: "https://wallpapercave.com/wp/wp7307672.jpg",
      rating: "6",
      trailerLink: "https://www.youtube.com/embed/_Ji2qTZXTMA?autoplay=1",
    },
    {
      id: 9,
      title: "Marriage Story",
      description:
        "Le cinéaste nommé aux Oscars  Noah Baumbach porte un ragrd aussi incisif qu'empathique sur une famille restant unie malgré un mariage en déroute",
      posterURL:
        "https://www.meewella.com/critic/images/film/20191211-marriagestory.jpg",
      rating: "5",
      trailerLink: "https://www.youtube.com/embed/BHi-a1n8t7M?autoplay=1",
    },
    {
      id: 10,
      title: "The Invisible Man",
      description:
        "Aprés avoir  fui une ralation abusive  avec une richissime génie des hautes  technologie ,un femme est harceleéet toumonteé par une entité invisible ",
      posterURL:
        "https://fr.web.img3.acsta.net/r_1920_1080/pictures/20/02/24/09/21/2936902.jpg",
      rating: "9.1",
      trailerLink: "https://www.youtube.com/embed/dSBsNeYqh-k?autoplay=1",
    },
    {
      id: 11,
      title: "Mowgli",
      description:
        "Un jeune orphélin  élevé par des animaux au coeur de la jungle prend en main son destin en affrontant un dangereux ennemi....et sa propre nature huamine  ",
      posterURL: "https://watchwithmannycom.files.wordpress.com/2018/12/aa.jpg",
      rating: "9",
      trailerLink: "https://www.youtube.com/embed/OVBjPpUlQrE?autoplay=1",
    },
    {
      id: 12,
      title: "Mirage",
      description:
        "Projeteé dans le passé  suite à une repture du continuum  de l'espace temps ,Vera sauve la vie d'un jeune garcon ,mais perd alors sa propre fille.La retrouverra -elle ?  ",
      posterURL:
        "https://upload.wikimedia.org/wikipedia/ar/7/73/Mirage_%282018%29_Film_Poster.jpg",
      rating: "8",
      trailerLink: "https://www.youtube.com/embed/3NCOwTBWYdE?autoplay=1",
    },
  ],

  filter: [
    {
      id: 1,
      title: "Bird Box",
      description:
        "Depuis cinq ans ,une présence invisible et mançante pousse la population au suicide .Mais une femme et ses deux enfants font le pari insensé de lui échapper .... ",
      posterURL: "https://static.xemovie.com/images/Film/Movies/BirdBox.jpg",
      rating: "5.5",
      trailerLink: "https://www.youtube.com/embed/o2AsIXSh2xo?autoplay=1",
    },
    {
      id: 2,
      title: "Blood Red Sky",
      description:
        "Lorsque des terroristes detournent un vol transatlantique de nuit,une femme souffrant d'une mystérieuse  maladie doit réveler un secret monstrueux pour proteger son fils ",
      posterURL: "https://m.media-amazon.com/images/I/71FF7tJ88dS._SS500_.jpg",
      rating: "6.2",
      trailerLink: "https://www.youtube.com/embed/U8M_1eyrBtQ?autoplay=1",
    },
    {
      id: 3,
      title: "Love Hard",
      description:
        "Une jeune femme de LosAngeles traverse le pays pendant les fetes pour surprendre l'homme qu'elle a rencontré sur internet,ùais découvre qu'elle s'est fait avoir ",
      posterURL:
        "https://fictionhorizon.com/wp-content/uploads/2021/11/Love-Hard-poster.jpg",
      rating: "7.4",
      trailerLink: "https://www.youtube.com/embed/3boMRfx6cjE?autoplay=1",
    },
    {
      id: 4,
      title: "Army of the Dead",
      description:
        "Aprés une attaque de zombie à Las Végas ,un groupe demarcenaires tente un pari fou:le braquage le plus spectaculaire  de tous les temps ...dans la zone de quarantine",
      posterURL:
        "https://static1.tribute.ca/poster/660x980/army-of-the-dead-netflix-152638.jpg",
      rating: "4",
      trailerLink: "https://www.youtube.com/embed/tI1JGPhYBS8?autoplay=1",
    },
    {
      id: 5,
      title: "Bik N3ich ",
      description:
        "Aprés la révolution de Jasmine et avant la mort de Mouammar Khadafi,la trgédie d'une femme tunisienne leve le voile sur la corruption et le trafic d'organes ",
      posterURL:
        "https://media.elcinema.com/uploads/_315x420_daf42061982d6eff659c2dc1a12a259712c02ef63cf0290b9437283ba736f768.jpg",
      rating: "8",
      trailerLink: "https://www.youtube.com/embed/ufSCpaSsuiI?autoplay=1",
    },
    {
      id: 6,
      title: "Beyrouth o Beyrouth ",
      description:
        "Au lendemain de la geurre israélo-arabe de 1967,quatre jeunes en devenir évoluent Libanais  dans un contexte politique en pleine mutation  ",
      posterURL:
        "https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYvbywD5ENrSZAKcrS3Dbsxxafz26cSjS84RKNmGWxzwero6p_tFAnEiuu49lpRr6Ki_bhcgZTF9fisFBVkBQOi2ljo.jpg?r=d7d",
      rating: "8.6",
      trailerLink: "https://www.youtube.com/embed/SagsqxiVStM?autoplay=1",
    },
    {
      id: 7,
      title: "Noura reve",
      description:
        "Lorsque son mari violent bénefice d'une libération anticipée,une femme  se bat pour sauver la nouvelle vie qu'elle avait imaginée avec son amant et ses trois enfants .  ",
      posterURL:
        "https://i0.wp.com/cinematunisien.com/wp-content/uploads/2019/09/NouraReve_aff1.jpg?zoom=1.25&resize=678%2C381",
      rating: "7.5",
      trailerLink: "https://www.youtube.com/embed/a0Yv0CP4aGQ?autoplay=1",
    },
    {
      id: 8,
      title: "La plateforme",
      description:
        " Une plateforme de nourriture descend d'étage en étage pour ravitailler les detenus d'une prison.  ",
      posterURL: "https://wallpapercave.com/wp/wp7307672.jpg",
      rating: "6",
      trailerLink: "https://www.youtube.com/embed/_Ji2qTZXTMA?autoplay=1",
    },
    {
      id: 9,
      title: "Marriage Story",
      description:
        "Le cinéaste nommé aux Oscars  Noah Baumbach porte un ragrd aussi incisif qu'empathique sur une famille restant unie malgré un mariage en déroute",
      posterURL:
        "https://www.meewella.com/critic/images/film/20191211-marriagestory.jpg",
      rating: "5",
      trailerLink: "https://www.youtube.com/embed/BHi-a1n8t7M?autoplay=1",
    },
    {
      id: 10,
      title: "The Invisible Man",
      description:
        "Aprés avoir  fui une ralation abusive  avec une richissime génie des hautes  technologie ,un femme est harceleéet toumonteé par une entité invisible ",
      posterURL:
        "https://fr.web.img3.acsta.net/r_1920_1080/pictures/20/02/24/09/21/2936902.jpg?autoplay=1",
      rating: "9.1",
      trailerLink: "https://www.youtube.com/embed/dSBsNeYqh-k?autoplay=1",
    },
    {
      id: 11,
      title: "Mowgli",
      description:
        "Un jeune orphélin  élevé par des animaux au coeur de la jungle prend en main son destin en affrontant un dangereux ennemi....et sa propre nature huamine  ",
      posterURL: "https://watchwithmannycom.files.wordpress.com/2018/12/aa.jpg",
      rating: "9",
      trailerLink: "https://www.youtube.com/embed/OVBjPpUlQrE?autoplay=1",
    },
    {
      id: 12,
      title: "Mirage",
      description:
        "Projeteé dans le passé  suite à une repture du continuum  de l'espace temps ,Vera sauve la vie d'un jeune garcon ,mais perd alors sa propre fille.La retrouverra -elle ?  ",
      posterURL:
        "https://upload.wikimedia.org/wikipedia/ar/7/73/Mirage_%282018%29_Film_Poster.jpg",
      rating: "8",
      trailerLink: "https://www.youtube.com/embed/3NCOwTBWYdE?autoplay=1",
    },
  ],
  filmtoshow: [],
};

const handleFavoris = (state = states, action) => {
  const film = action.payload;
  const titre = action.val;
  const min = action.val2;
  const max = action.val3;
  const id = action.id;
  switch (action.type) {
    case "addfilm":
      return {
        ...state,

        filmInit: [...state.filmInit, film],
      };
    case "filtertitle":
      return {
        ...state,
        filter: state.movies.filter((element) =>
          element.title.toLowerCase().includes(titre.toLowerCase())
        ),
      };
    case "filterall":
      return {
        ...state,
        filter: state.movies,
      };

    case "filterrange": {
      return {
        ...state,
        filter: state.movies.filter(
          (element) => (element.rating - min) * (element.rating - max) <= 0
        ),
      };
    }
    case "showdescription": {
      return {
        ...state,
        filmtoshow:state.movies.filter((element) => element.id === id),
      };
    }
    default:
      return state;
  }
};

export default handleFavoris;
