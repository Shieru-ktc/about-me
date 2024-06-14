import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SandBoxPage: React.FC = () => {
  return (
    <>
      <div>
        <p>My sandbox...</p>
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger>好きなゲームについて</AccordionTrigger>
            <AccordionContent>
              osu!とマイクラとPhasmophobiaがすきです
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
      </div>
    </>
  );
};

export default SandBoxPage;
