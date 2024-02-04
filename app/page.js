const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center ">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Posts & Articls</span>
      </h1>
      <p className="desc text-center">
        This webiste is an open-source Tool to discover and share Articls &
        Posts
      </p>
      <h1 className="head_text text-center blue_gradient my-">Latest</h1>
      {/* <div className="prompt_layout">
        <div className="prompt_card ">Text</div>
        <div className="prompt_card ">Text</div>
        <div className="prompt_card ">Text</div>
      </div> */}
    </section>
  );
};

export default Home;
