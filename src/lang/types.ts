export type LangType = {
  company: string;
  header: HeaderType;
  footer: FooterType;
  hero: HeroType;
  highlightSection: {
    title: string;
    showAll: string;
  };
  highlightCard: {
    cta: string;
  };
  blogs: {
    title: string;
    intro: string;
  };
};

export type HeaderType = {
  navigation: NavigationType[];
  close: string;
};

export type NavigationType = {
  name: string;
  href?: string;
  items?: {
    title: string;
    href?: string;
    items?: {
      name: string;
      href: string;
    }[];
  }[];
};

export type FooterType = {
  slogan: string;
  footnote: string;
  items: {
    title: string;
    items: {
      name: string;
    }[];
  }[];
  social: {
    name: string;
    href: string;
  }[];
  location: {
    lat: number;
    lng: number;
  };
};

export type HeroType = {
  slogan: string;
  intro: string;
  cta: string;
  donationCta: string;
};
