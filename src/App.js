import "./App.css";

const books = [
  {
    title: "Over the top",
    author: "Alison Hughes",
    img: "https://images-na.ssl-images-amazon.com/images/I/41UGYkJO-ZS._AC_SX184_.jpg",
  },
  {
    title: "Science of sports",
    author: "Jennifer Swanson",
    img: "https://images-na.ssl-images-amazon.com/images/I/51NnO9Pj4pL._AC_SX184_.jpg",
  },
  { title: "", author: "", img: "" },
  { title: "", author: "", img: "" },
  { title: "", author: "", img: "" },
];

const App = () => {
  return (
    <section className="App">
      {/*  <Books key={book.id} book={book} /> another way */}
      {books.map((book) => {
        return <Books key={book.id} {...book} />;
      })}
    </section>
  );
};

const Books = (props) => {
  //const { title, author, img } = props.book;
  const { title, author, img } = props;
  return (
    <article
      onMouseOver={() => {
        console.log(title);
      }}
      className="book"
    >
      <img src={img} alt="" />
      <h1
        onClick={() => {
          console.log(title);
        }}
      >
        {title}
      </h1>
      <h4>{author}</h4>
    </article>
  );
};

export default App;
