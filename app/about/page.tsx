import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const About: React.FC = () => {
  return (
    <>
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>好きなゲームは？</AccordionTrigger>
          <AccordionContent>
            <div className="m-1 md:flex md:items-center">
              <img src="osu-screenshot.png" className="rounded-xl md:w-1/3" />
              <p className="text-md mx-2">
                <a
                  className="bg-gradient-to-r from-pink-400 to-pink-700 bg-clip-text text-5xl font-semibold text-transparent dark:from-pink-700 dark:to-pink-400"
                  href="https://osu.ppy.sh"
                >
                  osu!
                </a>{" "}
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
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>好きな食べ物は？</AccordionTrigger>
          <AccordionContent>
            そうめん超うまい。Amazonに3kgの訳ありそうめんが売ってるんでおすすめしたいんですが、みんなが買い始めると私の分がなくなるので買わないでください。
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
          <AccordionTrigger>
            好きなPhasmophobiaのゴーストは？
          </AccordionTrigger>
          <AccordionContent>
            ハントゥちゃんわかりやすくてすき。
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default About;
