import { Separator } from "./ui/separator";
import Link from "next/link"

const Footer: React.FC = () => {
  return (
    <>
      <div className="mt-[50px] bg-blue-200 p-5 dark:bg-blue-800">
        <div className="w-max-96 text-center">
          <div className="border-spacing-90">
            <div>京都デザイン&テクノロジー専門学校</div>
            <div>スーパーITエンジニア専攻</div>
            <div className="items-center justify-center space-x-4 sm:flex">
              <div>上野 透夜</div>
              <Separator
                orientation="vertical"
                className="hidden h-[20px]  bg-black dark:bg-white sm:block"
              />
              <div>
                <a
                  href="mailto:ktc24a31g0006@edu.kyoto-tech.ac.jp"
                  className="text-blue-600 hover:underline dark:text-blue-200"
                >
                  ktc24a31g0006@edu.kyoto-tech.ac.jp
                </a>
              </div>
            </div>
            <Link href="/contact" className="text-blue-600 dark:text-blue-200 hover:underline">お問い合わせ</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
