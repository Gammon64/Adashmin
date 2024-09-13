import FindInput from "@/_components/FindInput";
import FuncionarioLista from "@/_components/FuncionarioLista";
import NewButton from "@/_components/NewButton";
import style from "./page.module.css";

export default function Home({
  searchParams,
}: {
  searchParams?: { query: string | undefined };
}) {
  return (
    <main className={style.main}>
      <h1>Gerenciamento de funcionários</h1>
      <section className={style.actions}>
        <NewButton />
        <FindInput />
      </section>
      <section>
        <FuncionarioLista query={searchParams?.query} />
      </section>
    </main>
  );
}
