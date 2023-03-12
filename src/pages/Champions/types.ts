interface Champion {
  id: number;
  name: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  tags: string;
  title: string;
  blurb: string;
}

export default Champion;
