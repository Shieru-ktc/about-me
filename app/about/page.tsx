import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const About: React.FC = () => {
  return (
    <>
      <Accordion type="multiple" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>好きなゲームについて</AccordionTrigger>
          <AccordionContent>
            <div className="m-1 md:flex md:items-center">
              <img src="osu-screenshot.png" className="rounded-xl md:w-1/2" />
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
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>好きな食べ物について</AccordionTrigger>
          <AccordionContent>そうめん超うまい</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>好きな言語について</AccordionTrigger>
          <AccordionContent>
            Pythonがだいすき。でもこのサイトはTypeScriptで書いてる。うーんこの。
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>好きなスマホについて</AccordionTrigger>
          <AccordionContent>
            Google Pixelしか勝たん。消しゴムマジックで消してやるのさ！
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>好きなコードについて</AccordionTrigger>
          <AccordionContent>
            <code>0xford*University</code>
            <br />
            <p>
              これはPythonのコードです。なにが出力されるか予想してみてください。
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            好きなPhasmophobiaのゴーストについて
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
