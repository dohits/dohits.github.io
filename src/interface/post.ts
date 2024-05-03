interface post {
  postAbstract : {
    url?: string;
    category?: string;
    slug?: string;
  };
  postDetail : {
    id? : number;
    title?: string;
    date?: string;
    desc?: string;
    thumbnail? : string;
    content? : string;
    category? :string;
  };
}