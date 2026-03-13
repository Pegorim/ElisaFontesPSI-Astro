export interface Bairro {
  name: string;
  slug: string;
  regiao: string;
}

export const bairros: Bairro[] = [
  // Centro
  { name: "Centro", slug: "centro", regiao: "Centro" },
  { name: "Gragoatá", slug: "gragoata", regiao: "Centro" },
  { name: "Ingá", slug: "inga", regiao: "Centro" },
  { name: "Pé Pequeno", slug: "pe-pequeno", regiao: "Centro" },
  { name: "São Domingos", slug: "sao-domingos", regiao: "Centro" },
  { name: "Vital Brazil", slug: "vital-brazil", regiao: "Centro" },
  { name: "São Lourenço", slug: "sao-lourenco", regiao: "Centro" },
  { name: "Ilha da Conceição", slug: "ilha-da-conceicao", regiao: "Centro" },
  { name: "Porto Velho", slug: "porto-velho", regiao: "Centro" },
  { name: "Santo Antônio", slug: "santo-antonio", regiao: "Centro" },
  // Zona Sul
  { name: "Icaraí", slug: "icarai", regiao: "Zona Sul" },
  { name: "São Francisco", slug: "sao-francisco", regiao: "Zona Sul" },
  { name: "Charitas", slug: "charitas", regiao: "Zona Sul" },
  { name: "Jurujuba", slug: "jurujuba", regiao: "Zona Sul" },
  { name: "Boa Viagem", slug: "boa-viagem", regiao: "Zona Sul" },
  { name: "Santa Rosa", slug: "santa-rosa", regiao: "Zona Sul" },
  { name: "Viradouro", slug: "viradouro", regiao: "Zona Sul" },
  // Zona Norte
  { name: "Fonseca", slug: "fonseca", regiao: "Zona Norte" },
  { name: "Barreto", slug: "barreto", regiao: "Zona Norte" },
  { name: "Engenhoca", slug: "engenhoca", regiao: "Zona Norte" },
  { name: "Caramujo", slug: "caramujo", regiao: "Zona Norte" },
  { name: "Cubango", slug: "cubango", regiao: "Zona Norte" },
  { name: "Tenente Jardim", slug: "tenente-jardim", regiao: "Zona Norte" },
  { name: "Viçoso Jardim", slug: "vicoso-jardim", regiao: "Zona Norte" },
  { name: "Baldeador", slug: "baldeador", regiao: "Zona Norte" },
  { name: "Largo da Batalha", slug: "largo-da-batalha", regiao: "Zona Norte" },
  { name: "Ititioca", slug: "ititioca", regiao: "Zona Norte" },
  { name: "Sapê", slug: "sape", regiao: "Zona Norte" },
  { name: "Jacaré", slug: "jacare", regiao: "Zona Norte" },
  // Região Oceânica
  { name: "Itaipu", slug: "itaipu", regiao: "Região Oceânica" },
  { name: "Camboinhas", slug: "camboinhas", regiao: "Região Oceânica" },
  { name: "Maravista", slug: "maravista", regiao: "Região Oceânica" },
  { name: "Piratininga", slug: "piratininga", regiao: "Região Oceânica" },
  { name: "Cafubá", slug: "cafuba", regiao: "Região Oceânica" },
  { name: "Engenho do Mato", slug: "engenho-do-mato", regiao: "Região Oceânica" },
  { name: "Maceió", slug: "maceio", regiao: "Região Oceânica" },
  { name: "Jardim Imbuí", slug: "jardim-imbui", regiao: "Região Oceânica" },
  { name: "Maria Paula", slug: "maria-paula", regiao: "Região Oceânica" },
  { name: "Santa Bárbara", slug: "santa-barbara", regiao: "Região Oceânica" },
  { name: "Serra Grande", slug: "serra-grande", regiao: "Região Oceânica" },
  { name: "Pendotiba", slug: "pendotiba", regiao: "Região Oceânica" },
  { name: "Várzea das Moças", slug: "varzea-das-mocas", regiao: "Região Oceânica" },
];

export const regioes = [...new Set(bairros.map((b) => b.regiao))];

export function getBairroBySlug(slug: string): Bairro | undefined {
  return bairros.find((b) => b.slug === slug);
}

export function getBairrosByRegiao(regiao: string): Bairro[] {
  return bairros.filter((b) => b.regiao === regiao);
}
