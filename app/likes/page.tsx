import Image from "next/image";
import osuPic from "@/public/osu-screenshot.png";
import phasmoPic from "@/public/phasmophobia.jpg";
import bsPic from "@/public/beatsaber.jpg";
import soumenPic from "@/public/soumen.jpg";
import { Creepster } from "next/font/google";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

const creepster = Creepster({
  weight: "400",
  subsets: ["latin"],
});

const LikesPage: React.FC = () => {
  return (
    <>
      <h1 className="text-5xl">好きなもの</h1>
      <hr className="my-2 mt-5" />
      <h2 className="text-3xl">ゲーム</h2>
      <div className="m-1 md:flex md:items-center">
        <Image
          alt="screenshot of osu! lazer"
          src={osuPic}
          className="rounded-xl md:w-1/3"
          placeholder="blur"
        />
        <p className="text-md mx-2">
          <Link
            className="bg-gradient-to-r from-pink-400 to-pink-700 bg-clip-text text-5xl font-semibold text-transparent dark:from-pink-700 dark:to-pink-400"
            href="https://osu.ppy.sh"
          >
            osu!
          </Link>{" "}
          -
          <span className="text-muted-foreground">
            Rhythm is just a <span className="italic">*click*</span> away!
          </span>
          <br />
          osu!
          は、無料のコンピューターゲームで、音楽に合わせて円形のマーカーをクリックするリズムゲームです。
          <br />
          かれこれ数年やってます。でもいまだに6.5
          starsあたりがfcできない。クソゲー。数年やってるけど。
          <br />
          私のosu!のプロフィールは
          <a
            href="https://osu.ppy.sh/users/32324214"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            こちら
          </a>
        </p>
      </div>
      <div className="m-1 flex-row-reverse md:flex md:items-center">
        <Image
          alt="screenshot of Phasmophobia trailer"
          src={phasmoPic}
          className="rounded-xl md:w-1/3"
          placeholder="blur"
        />
        <p className="text-md mx-2">
          <a
            href="https://www.kineticgames.co.uk/"
            className={twMerge("text-5xl font-semibold", creepster.className)}
          >
            Phasmophobia
          </a>
          <br />
          Phasmophobiaは、最大4人でプレイできる幽霊調査型ホラーゲームです。
          <br />
          プレイ人数が4に近づけば近づくほどバカゲーになります。<span className="text-gray-500">逆に一人でやればそれはもうホラーゲームです</span>
        </p>
      </div>
      <div className="m-1 md:flex md:items-center">
        <Image
          alt="screenshot of BeatSaber trailer"
          src={bsPic}
          className="rounded-xl md:w-1/3"
          placeholder="blur"
        />
        <p className="text-md mx-2">
          <a
            href="https://store.steampowered.com/app/620980/Beat_Saber/"
            className={"text-5xl font-semibold"}
          >
            <span className={"text-red-600 dark:text-red-400"}>Beat</span>{" "}
            <span className={"text-blue-600 dark:text-blue-400"}>Saber</span>
          </a>
          <br />
          Beat Saberは、ビートに合わせてリズムを切るVRゲームです。
          <br />
          意外と運動になるけど、次の日は筋肉痛に見舞われるので注意。
        </p>
      </div>
      <h2 className="mt-5 text-3xl">食べ物</h2>
      <div>
        そうめん超うまい。
        <a
          href="https://www.amazon.co.jp/dp/B01DZGAQ4K/"
          className="text-blue-600 no-underline hover:underline dark:text-blue-400"
        >
          Amazonに3kgの訳ありそうめん
        </a>
        が売ってるんでおすすめしたいんですが、みんなが買い始めると私の分がなくなるので買わないでください。
        <Image
          alt="Photo of Soumen"
          src={soumenPic}
          className="w-1/3 rounded-xl"
          placeholder="blur"
        />
      </div>
    </>
  );
};

export default LikesPage;
