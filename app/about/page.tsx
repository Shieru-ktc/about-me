import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

const About: React.FC = () => {
  return (
    <>
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>好きなゲームは？</AccordionTrigger>
          <AccordionContent className="mx-auto max-w-[50vw]">
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
                <hr />
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
                  className={twMerge(
                    "text-5xl font-semibold",
                    creepster.className,
                  )}
                >
                  Phasmophobia
                </a>
                <br />
                Phasmophobiaは、最大4人でプレイできる幽霊調査型ホラーゲームです。
                <br />
                プレイ人数が4に近づけば近づくほどバカゲーになります。
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
                  <span className={"text-blue-600 dark:text-blue-400"}>
                    Saber
                  </span>
                </a>
                <br />
                Beat Saberは、ビートに合わせてリズムを切るVRゲームです。
                <br />
                意外と運動になるけど、次の日は筋肉痛に見舞われるので注意。
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>好きな食べ物は？</AccordionTrigger>
          <AccordionContent>
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
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>なんの言語が好き？</AccordionTrigger>
          <AccordionContent>
            Pythonがだいすき。でもこのサイトはTypeScriptで書いてる。うーんこの。
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Android派？iPhone派？</AccordionTrigger>
          <AccordionContent>
            <p>
              Androidしか勝たん。iPhone使うとPC、イヤホン、スマートウォッチやらなんやらApple製品で固めないといけないのがつらいんだよね。
              <br />
              いずれApple Houseとか言って家出してきそう。あとApple CarとかApple
              葬式とか。
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>好きなコードについて</AccordionTrigger>
          <AccordionContent>
            <code>0xfor-d*University</code>
            <br />
            <p>
              これはPythonのコードです。なにが出力されるか予想してみてください。
              <br />
              エラー？それとも、何らかの別の結果？
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>好きなPhasmophobiaのゴーストは？</AccordionTrigger>
          <AccordionContent>
            ハントゥちゃんわかりやすくてすき。
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>好きなBeat Saberの譜面は？</AccordionTrigger>
          <AccordionContent>
            Spin Eternallyとか、
            <a
              href="https://beatsaver.com/maps/e4d"
              className="text-blue-600 no-underline hover:underline dark:text-blue-400"
            >
              Ange du blanc pur
            </a>
            とか。
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default About;
