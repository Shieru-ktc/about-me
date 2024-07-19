import Link from "next/link";

const Home: React.FC = () => {
  return (
    <>
      <p className="text-5xl font-bold">Welcome (or back)!</p>
      <p className="mt-2">
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
        私の基本的なプロフィールについては、
        <Link
          href="/profile"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          こちら
        </Link>
        をご覧ください！
      </p>
      <p>
        私の好きなものについては、
        <Link
          href="/likes"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          こちら
        </Link>
        にあります！
      </p>
      <p>
        各種SNSもやってます。
        <span className="text-gray-400 dark:text-gray-600">
          （まともに更新してませんが…）
        </span>{" "}
        <br />
        <Link
          href="/sns"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          こちら
        </Link>
        にSNSアカウントをまとめてあります！
      </p>
    </>
  );
};

export default Home;
