import { ReactNode } from "react";
import "./profile.css";

type DtDdProps = {
  dt: ReactNode;
  dd: ReactNode;
};
const DtDd: React.FC<DtDdProps> = ({ dt, dd }) => {
  return (
    <>
      <dt>{dt}</dt>
      <dd className="col-span-5">{dd}</dd>
    </>
  );
};

const ProfilePage = () => {
  return (
    <>
      <h1 className="text-xl">プロフィール</h1>
      <dl className="grid w-[100rem] grid-cols-6">
        <DtDd dt="名前" dd="上野透夜" />
        <DtDd dt="所属" dd="京都デザイン&テクノロジー専門学校" />
        <DtDd dt="専攻" dd="スーパーITエンジニア専攻 1年" />
      </dl>
      <hr />
      <h2 className="text-xl">学歴</h2>
      <p>20xx年 米原市立坂田小学校 卒業<small className="text-gray-500 ml-1">(教師がクソでした)</small></p>
      <p>20xx年 米原市立双葉中学校 卒業<small className="text-gray-500 ml-1">(プログラミングがやりたすぎて不登校になりました)</small></p>
      <p>20xx年 角川ドワンゴ学園 S高等学校 卒業<small className="text-gray-500 ml-1">(最近情報漏洩したとこです)</small></p>
      <p>20xx年 京都デザイン&テクノロジー専門学校 入学<small className="text-gray-600 dark:text-gray-400 ml-1">(結構楽しいです)</small></p>
      <hr />
      <h2 className="text-xl">京都テックでやりたいこと</h2>
      <ul className="ml-5 list-disc">
        <li>いろんな言語を勉強する</li>
        <li>つよくなる</li>
        <li>おともだちをいっぱいつくる</li>
        <li>さいきょうのVimmerになる</li>
      </ul>
      <hr />
      <h2 className="text-xl">やったこと</h2>
      <ul className="ml-5 list-disc">
        <li>バイト先でちょっとしたツールつくったよ</li>
        <li>バイト先のパソコンにUbuntuを突っ込んだよ</li>
        <li>
          ノートPCに入ってるWindowsを消し飛ばしてLinux突っ込んだらそれもぶっ壊れたよ
        </li>
        <li>Adobeからログアウトしてないやつのプロフィールを片っ端からログアウトしろ太郎に変えたよ</li>
      </ul>
    </>
  );
};

export default ProfilePage;
