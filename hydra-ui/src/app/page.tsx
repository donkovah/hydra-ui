import TranslationTable from "@/partials/TranslationTable";

async function getTranslations():Promise<Response> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function HomePage () {
  const translations = await getTranslations()
  return (
    <>
      <TranslationTable data ={translations} />
    </>
  );
};
