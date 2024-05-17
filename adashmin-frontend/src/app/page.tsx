import FindInput from "./_components/FindInput";
import ListEmployee from "./_components/ListEmployee";
import NewButton from "./_components/NewButton";
import style from "./page.module.css";

export default function Home({
  searchParams,
}: {
  searchParams?: { query: string | undefined };
}) {
  return (
    <main className={style.main}>
      <section className={style.actions}>
        <NewButton />
        <FindInput query={searchParams?.query} />
      </section>
      <section>
        <ListEmployee query={searchParams?.query} />
      </section>
    </main>
  );
}
