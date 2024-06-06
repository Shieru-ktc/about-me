import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="mt-32 text-2xl font-bold sm:text-5xl md:text-7xl">
        404 Not Found
      </h1>
      <p className="mt-4">
        申し訳ありませんが、リクエストされたページをご用意できませんでした。
        <br />
        お詫びに、かわいい猫ちゃんのGIF画像を差し上げます。
      </p>
      <img
        src="https://cataas.com/cat/gif"
        alt="かわいい猫ちゃんの画像"
        className="mx-auto max-h-80 max-w-80"
      />
      <span className="text-muted-foreground">
        Powered by: <Link href="https://cataas.com">Cat as a Service</Link>
      </span>
    </div>
  );
};

export default NotFound;
