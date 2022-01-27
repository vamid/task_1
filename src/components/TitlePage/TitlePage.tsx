import "./TitlePage.scss";

export default function TitlePage({ title }: { title: string }) {
  return <h2 className="titlePage">{title}</h2>;
}
