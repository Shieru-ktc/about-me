import { ReactNode } from "react";

type DtDdProps = {
  dt: ReactNode;
  dd: ReactNode;
};
const DtDd: React.FC<DtDdProps> = ({ dt, dd }) => {
  return (
    <>
      <dt className="ml-auto mr-10 font-bold">{dt}</dt>
      <dd className="col-span-5">{dd}</dd>
    </>
  );
};

const ProfilePage = () => {
  return (
    <>
      <h1 className="text-xl font-bold">プロフィール</h1>
      <dl className="grid grid-cols-6">
        <DtDd dt="名前" dd="上野透夜" />
        <DtDd dt="所属" dd="京都デザイン&テクノロジー専門学校" />
        <DtDd dt="専攻" dd="スーパーITエンジニア専攻 1年" />
      </dl>
      <hr />
      <h2 className="text-xl font-bold">学歴</h2>
      <p>
        20xx年 米原市立坂田小学校 卒業
        <small className="ml-1 text-gray-500">(クソ教師でした)</small>
      </p>
      <p>
        20xx年 米原市立双葉中学校 卒業
        <small className="ml-1 text-gray-500">
          (プログラミングがやりたすぎて不登校になりました)
        </small>
      </p>
      <p>
        20xx年 角川ドワンゴ学園 S高等学校 卒業
        <small className="ml-1 text-gray-500">
          (情報漏えいして大問題になってるとこです)
        </small>
      </p>
      <p>
        20xx年 京都デザイン&テクノロジー専門学校 入学
        <small className="ml-1 text-gray-600 dark:text-gray-400">
          (結構楽しいです)
        </small>
      </p>
      <hr />
      <h2 className="text-xl font-bold">京都テックでやりたいこと</h2>
      <ul className="ml-5 list-disc">
        <li>いろんな言語を勉強する</li>
        <li>つよくなる</li>
        <li>おともだちをいっぱいつくる</li>
        <li>さいきょうのVimmerになる</li>
      </ul>
      <hr />
      <h2 className="text-xl font-bold">
        やったこと
        <span className="ml-3 text-sm text-gray-500">(やらかしたこと)</span>
      </h2>
      <ul className="ml-5 list-disc">
        <li>バイト先でちょっとしたツールつくったよ</li>
        <li>バイト先のパソコンにUbuntuを突っ込んだよ</li>
        <li>
          ノートPCに入ってるWindowsを消し飛ばしてLinux突っ込んだらそれもぶっ壊れたよ
        </li>
        <li>
          Adobeからログアウトしてないやつのプロフィールを片っ端からログアウトしろ太郎に変えたよ
        </li>
        <li>アカウント管理ミスってAmazonから280万円の請求が来たよ</li>
      </ul>
    </>
  );
};

export default ProfilePage;
