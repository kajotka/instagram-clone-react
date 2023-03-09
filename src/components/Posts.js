import IgPost from "./IgPost";

const Posts = () => {
  return (
    <div className="posts">
      <IgPost img="img/post1.jpg" name="kasia_123" ago="4 godz" likes="342" comments="252" description="Jak wam mija weekend?" />
      <IgPost img="img/post2.jpg" name="ania321" ago="2 dni temu" likes="342" comments="25" description="Moje zdjęcie profilowe" />
      <IgPost img="img/post1.jpg" name="kasia_123" ago="4 godz" likes="342" comments="252" description="Jak wam mija weekend?" />
      <IgPost img="img/post2.jpg" name="ania321" ago="2 dni temu" likes="342" comments="25" description="Moje zdjęcie profilowe" />
    </div>
  );
};

export default Posts;
