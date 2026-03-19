export interface BairroImage {
  src: string;
  alt: string;
  creditLabel: string;
  creditUrl: string;
  license: string;
}

const regionFallbacks: Record<string, BairroImage> = {
  "Centro": {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Ba%C3%ADa_de_Guanabara_e_Centro_de_Niteroi.jpg",
    alt: "Vista do Centro de Niterói e da Baía de Guanabara",
    creditLabel: "Baía de Guanabara e Centro de Niteroi",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Ba%C3%ADa_de_Guanabara_e_Centro_de_Niteroi.jpg",
    license: "CC0",
  },
  "Zona Sul": {
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Icara%C3%AD_-_Niter%C3%B3i_%285701166390%29.jpg",
    alt: "Vista de Icaraí, em Niterói",
    creditLabel: "Icaraí - Niterói",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Icara%C3%AD_-_Niter%C3%B3i_(5701166390).jpg",
    license: "CC BY 2.0",
  },
  "Zona Norte": {
    src: "https://upload.wikimedia.org/wikipedia/commons/1/11/Bairro_Fonseca.jpg",
    alt: "Vista do bairro Fonseca, em Niterói",
    creditLabel: "Bairro Fonseca",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Bairro_Fonseca.jpg",
    license: "CC BY-SA 3.0",
  },
  "Região Oceânica": {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Itaipu_Niter%C3%B3i.jpg",
    alt: "Vista de Itaipu, em Niterói",
    creditLabel: "Itaipu Niterói",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Itaipu_Niter%C3%B3i.jpg",
    license: "CC0",
  },
};

const bairroImages: Record<string, BairroImage> = {
  centro: regionFallbacks["Centro"],
  icarai: {
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Icara%C3%AD_-_Niter%C3%B3i_%285701166390%29.jpg",
    alt: "Orla de Icaraí, em Niterói",
    creditLabel: "Icaraí - Niterói",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Icara%C3%AD_-_Niter%C3%B3i_(5701166390).jpg",
    license: "CC BY 2.0",
  },
  "sao-francisco": {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/55/Cal%C3%A7ad%C3%A3o_de_S%C3%A3o_Francisco.jpg",
    alt: "Calçadão de São Francisco, em Niterói",
    creditLabel: "Calçadão de São Francisco",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Cal%C3%A7ad%C3%A3o_de_S%C3%A3o_Francisco.jpg",
    license: "Public domain",
  },
  charitas: {
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Charitas_Niter%C3%B3i.JPG",
    alt: "Vista de Charitas, em Niterói",
    creditLabel: "Charitas Niterói",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Charitas_Niter%C3%B3i.JPG",
    license: "Public domain",
  },
  jurujuba: {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/00/Enseada_de_Jurujuba_-_Niter%C3%B3i_-_RJ_%287818561134%29.jpg",
    alt: "Enseada de Jurujuba, em Niterói",
    creditLabel: "Enseada de Jurujuba - Niterói - RJ",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Enseada_de_Jurujuba_-_Niter%C3%B3i_-_RJ_(7818561134).jpg",
    license: "CC BY 2.0",
  },
  "boa-viagem": {
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Boa_Viagem_Niter%C3%B3i.JPG",
    alt: "Vista de Boa Viagem, em Niterói",
    creditLabel: "Boa Viagem Niterói",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Boa_Viagem_Niter%C3%B3i.JPG",
    license: "Public domain",
  },
  fonseca: {
    src: "https://upload.wikimedia.org/wikipedia/commons/1/11/Bairro_Fonseca.jpg",
    alt: "Vista do bairro Fonseca, em Niterói",
    creditLabel: "Bairro Fonseca",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Bairro_Fonseca.jpg",
    license: "CC BY-SA 3.0",
  },
  itaipu: {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Itaipu_Niter%C3%B3i.jpg",
    alt: "Vista de Itaipu, em Niterói",
    creditLabel: "Itaipu Niterói",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Itaipu_Niter%C3%B3i.jpg",
    license: "CC0",
  },
  camboinhas: {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Camboinhas_-_Niter%C3%B3i_-_RJ_%287227940906%29.jpg",
    alt: "Praia de Camboinhas, em Niterói",
    creditLabel: "Camboinhas - Niterói - RJ",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Camboinhas_-_Niter%C3%B3i_-_RJ_(7227940906).jpg",
    license: "CC BY 2.0",
  },
  piratininga: {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Praia_de_Piratininga_Niter%C3%B3i_2024.jpg",
    alt: "Praia de Piratininga, em Niterói",
    creditLabel: "Praia de Piratininga Niterói 2024",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Praia_de_Piratininga_Niter%C3%B3i_2024.jpg",
    license: "CC BY-SA 4.0",
  },
};

export function getBairroImage(slug: string, regiao: string): BairroImage {
  return bairroImages[slug] ?? regionFallbacks[regiao] ?? regionFallbacks["Centro"];
}
