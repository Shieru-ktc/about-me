import SNSComponent from "@/components/SNSComponent";
import {
  FaDiscord,
  FaGithub,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const SNSPage = () => {
  return (
    <>
      <h1 className="text-5xl">SNSアカウント</h1>
      <hr className="my-5" />
      <SNSComponent
        icon={<FaTwitter />}
        href="https://twitter.com"
        title="Twitter"
        description="俺はXなんて知らねぇ！！！！"
        account="@Shieru_dev"
        className="my-2 border-[#1C9AF0]"
      />
      <SNSComponent
        icon={<FaYoutube />}
        href="https://www.youtube.com/channel/UCJ-zMz-gHtznvuoaF2ZKR8A"
        title="YouTube"
        description="クソ動画しかあげてないです"
        account="Shieru (@shieru8655)"
        className="my-2 border-[#FF0000]"
      />
      <SNSComponent
        icon={<FaGithub />}
        href="https://github.com/Shieru-ktc"
        title="GitHub"
        description="このサイトのリポジトリがあります"
        account="Shieru-ktc"
        className="my-2 border-[#00A742]"
      />
      <SNSComponent
        icon={<FaDiscord />}
        href="https://discord.com"
        title="Discord"
        description="私が大好きなメッセージングツール、Discord。正直LINEより好き。"
        account="Shieru292"
        className="my-2 border-[#5764F2]"
      />
    </>
  );
};

export default SNSPage;
