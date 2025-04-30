import { AnimatedCard } from '../AnimatedCard';

export function ProfileSection() {
  return (
    <section className="h-screen flex justify-center items-center">
      <AnimatedCard
        image="/YuugouOhno.png"
        name_ja="大野優剛"
        name_en="YuugouOhno"
        affiliation="Waseda University / AIST"
        twitter="YuugouOhno"
        detail="https://www.notion.so/yuugouohno/1de6858a9ed680058d56dbb1666cc409"
      />
    </section>
  );
} 