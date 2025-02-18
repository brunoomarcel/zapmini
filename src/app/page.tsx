import Button from "@/components/page";

export default function Home() {
  return (
    <>
      <form action="">
        <label>Digite o seu número</label>
        <br />
        <input type="text" className="border-4 border-light-blue-500 border-opacity-50"/>
      </form>
      <Button/>
    </>
  );
}
