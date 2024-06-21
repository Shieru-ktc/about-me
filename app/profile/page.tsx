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
      <p>20xx年 米原市立坂田小学校 卒業</p>
      <p>20xx年 米原市立双葉中学校 卒業</p>
      <p>20xx年 角川ドワンゴ学園 S高等学校 卒業</p>
      <p>20xx年 京都デザイン&テクノロジー専門学校 入学</p>
    </>
  );
};

export default ProfilePage;
