import React from "react";

const About = () => {
  return (
    <div id="about">
      <div className=" col-md-6 offset-md-3 text-center text-white mt-4 ">
        <h1 className=" text-secondary pb-4">Qui somme nous? </h1>
        <p className="fs-4 pb-4">
          Chez MY MOVIES,nous avons pour but de divertir le monde. Quels que
          soient vos préférences et votre pays de résidence, nous vous donnons
          accès aux meilleurs films, séries et documentaires. Nos abonnés
          choisissent ce qu'ils veulent regarder, quand ils le veulent, sans
          publicité, grâce à un simple abonnement. Nous proposons des programmes
          dans plus de 30 langues et 190 pays, car les grandes histoires peuvent
          naître partout et être appréciées dans le monde entier. Nous sommes
          passionnés de divertissement et nous vous proposons sans cesse des
          nouveautés afin de vous aider à trouver votre prochain coup de cœur.
        </p>
        <h2 className=" text-secondary pb-4">
          Nous rejoindre sur les reseaux sociaux
        </h2>
        <p className="fs-5">
          {" "}
          Nous serons trés ravis si vous nous rejoinez sur nos reseaux sociaux
          afin de partager vore exepérience à vos collégues et meme à des gens
          qui vous ne connaissez pas{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
