import { AnimatedCard } from '../AnimatedCard';

export function ProfileSection() {
  return (
    <section className="h-screen flex justify-center items-center">
      <AnimatedCard
        image="/YuugouOhno.png"
        name_ja="大野優剛"
        affiliation="Itsubo Lab / AIST / ReLU Branch"
        twitter="YuugouOhno"
        wantedly="https://www.wantedly.com/id/YuugouOhno"
      />
    </section>
  );
} 