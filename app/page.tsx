import Link from "next/link";

const Home: React.FC = () => {
  return (
    <>
      <p className="text-5xl font-bold">Welcome (or back)!</p>
      <p>
        私の自己紹介サイトへようこそ！
        <br />
        それほど多くのコンテンツがあるわけではありませんが、楽しんでいただけると嬉しいです！
      </p>
      <p>
        以下にサイトマップをご用意します。もしくは、
        <span className="hidden md:inline">画面上部のメニュー</span>
        <span className="inline md:hidden">
          右上のメニューボタンから表示されるメニュー
        </span>
        をご活用ください！
      </p>
      <hr />
      <p className="text-3xl font-bold">サイトマップ</p>
      <p>
        私の好きなものなど、一般的なプロフィールについては
        <Link
          href="/profile"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          こちら
        </Link>
        をご覧ください！
      </p>
    </>
  );
};

export default Home;
