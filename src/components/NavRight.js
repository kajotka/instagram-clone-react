import User from "./User";
import RecommendedUser from "./RecommendedUser";
import Link from "./Link";

const NavRight = () => {
  return (
    <div className="nav-right">
      <User />
      <div className="space-between">
        <h1 className="recommended">Propozycje dla Ciebie</h1>
        <Link href="#" label="Zobacz wszystkich" classes="link-black" />
      </div>
      <div className="recommended-container">
        <RecommendedUser img="img/avatar2.jpg" username="kacislaw" subtitle="Nowy użytkownik Instagramu" />
        <RecommendedUser img="img/avatar3.jpg" username="noyam.e" subtitle="Nowy użytkownik Instagramu" />
        <RecommendedUser img="img/avatar4.jpg" username="kasia_33" subtitle="Nowy użytkownik Instagramu" />
        <RecommendedUser img="img/avatar5.jpg" username="wisiu555" subtitle="Nowy użytkownik Instagramu" />
        <RecommendedUser img="img/avatar6.jpg" username="wesolaania" subtitle="Propozycje dla Ciebie" />
      </div>
      <footer>
        <Link href="#" label="Informacje" classes="link-white"/>
        <Link href="#" label="Pomoc" classes="link-white"/>
        <Link href="#" label="Prasa" classes="link-white"/>
        <Link href="#" label="API" classes="link-white"/>
        <Link href="#" label="Praca" classes="link-white"/>
        <Link href="#" label="Prywatność" classes="link-white"/>
        <Link href="#" label="Regulamin" classes="link-white"/>
        <Link href="#" label="Lokalizacje" classes="link-white"/>
        <Link href="#" label="Język" classes="link-white"/>
        <Link href="#" label="Meta Verified" classes="link-white"/>
        <p className="link-white">© 2023 INSTAGRAM FROM META</p>
      </footer>
    </div>
  );
};

export default NavRight;
