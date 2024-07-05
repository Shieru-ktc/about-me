import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "なんの言語が好き？",
    answer: "プログラミング言語で言えば、Pythonがだいすき。でもこのサイトはTypeScriptで書いてる。うーんこの。",
  },
  {
    question: "Android派？iPhone派？",
    answer: (
      <>
        Androidしか勝たん。iPhone使うとPC、イヤホン、スマートウォッチやらなんやらApple製品で固めないといけないのがつらいんだよね。
        <br />
        いずれApple Houseとか言って家出してきそう。あとApple CarとかApple
        葬式とか。
      </>
    ),
  },
  {
    question: "好きなコードについて",
    answer: (
      <>
        <code>0xfor-d*University</code>
        <br />
        これはPythonのコードです。なにが出力されるか予想してみてください。
        <br />
        エラー？それとも、何らかの別の結果？
      </>
    ),
  },
  {
    question: "好きなPhasmophobiaのゴーストは？",
    answer: "ハントゥちゃんわかりやすくてすき。",
  },
  {
    question: "好きなBeat Saberの譜面は？",
    answer: (
      <>
        Spin Eternallyとか、
        <a
          href="https://beatsaver.com/maps/e4d"
          className="text-blue-600 no-underline hover:underline dark:text-blue-400"
        >
          Ange du blanc pur
        </a>
        とか。
      </>
    ),
  },
];

type FAQProps = {
  i: number;
  question: React.ReactNode;
  answer: React.ReactNode;
}
const FAQComponent: React.FC<FAQProps> = ({ i, question, answer }) => {
  return (
    <AccordionItem value={`value-${i}`}>
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  )
}
const FAQPage: React.FC = () => {
  return (
    <>
      <Accordion type="multiple">
        {FAQS.map((faq, i) => (
          <FAQComponent key={i} i={i} question={faq.question} answer={faq.answer} />
        ))}
      </Accordion>
    </>
  );
};

export default FAQPage;
