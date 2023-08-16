import { instance } from "./axios";

export default function Products() {
  const post = () => {
    instance
      .post("categoriyalar", {
        test: "phones",
        price: 200,
      })
      .then((res) => console.log(res));
  };
  return (
    <div>
      <button onClick={() => post()}>send</button>
    </div>
  );
}
