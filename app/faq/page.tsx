import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const FAQPage: React.FC = () => {
  return (
    <>
      <Accordion type="multiple">
        <AccordionItem value="item-3">
          <AccordionTrigger>なんの言語が好き？</AccordionTrigger>
          <AccordionContent>
            プログラミング言語で言えば、Pythonがだいすき。でもこのサイトはTypeScriptで書いてる。うーんこの。
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

export default FAQPage;
