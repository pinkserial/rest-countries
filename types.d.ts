interface CountrySummary {
  name: {
    official: string;
  };
  capital: string[];
  region: string;
  population: number;
  cca3: string;
  flags: {
    svg: string;
    alt: string;
  };
}

interface CountryDetail extends CountrySummary {
  name: {
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
      };
    };
  };
  subregion: string;
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
    };
  }[];
  languages: {
    [key: string]: string;
  }[];
  borders: string[];
}
