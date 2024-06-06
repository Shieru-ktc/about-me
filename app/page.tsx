const Home: React.FC = () => {
  return (
    <>
      <p className="text-md">私が好きなものは…</p>
      <div className="md:flex md:items-end">
        <img src="osu-screenshot.png" className="rounded-xl md:w-1/2" />
        <p className="text-md row-span-2 mx-2">
          <span className="bg-gradient-to-r from-pink-400 to-pink-700 bg-clip-text text-5xl font-semibold text-transparent dark:from-pink-700 dark:to-pink-400">
            osu!
          </span>{" "}
          -{" "}
          <span className="text-muted-foreground">
            Rhythm is just a <span className="italic">*click*</span> away!
          </span>
          <br />
          osu!
          は、無料のコンピューターゲームで、音楽に合わせて円形のマーカーをクリックするリズムゲームです。
        </p>
      </div>
    </>
  );
};

export default Home;
