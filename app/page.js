import Posts from "@components/posts";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center ">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Posts & Articls</span>
      </h1>
      <p className="desc text-center">
        Welcome to Postepea, where every post becomes a masterpiece and every
        article tells a story  <br /> A platform where your ideas shine, and
        creativity knows no bounds!✨🌟
      </p>
      <h1 className="head_text text-center blue_gradient my-">Latest</h1>
      <Posts />
      
    </section>
  );
};

export default Home;
