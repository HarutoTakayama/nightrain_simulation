import React from 'react';
import { Shield, Sword, Box, Layers, Zap } from 'lucide-react';

const SectionTitle = ({ icon: Icon, title }: { icon: any, title: string }) => (
  <div className="flex items-center gap-2 mb-4 border-b border-gray-700 pb-2">
    <Icon className="w-5 h-5 text-yellow-500" />
    <h2 className="text-xl font-bold text-gray-200">{title}</h2>
  </div>
);

const Dropdown = ({ label }: { label: string }) => (
  <div className="flex flex-col gap-1 w-full">
    <label className="text-xs text-gray-400 uppercase tracking-wider">{label}</label>
    <select className="bg-gray-800 border border-gray-600 text-white rounded p-2 focus:ring-2 focus:ring-yellow-600 outline-none cursor-pointer">
      <option>-- 選択してください --</option>
      <option>テストデータ1</option>
      <option>テストデータ2</option>
    </select>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-4 md:p-8 font-sans">
      <header className="max-w-6xl mx-auto mb-10">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-600 mb-2">
          NIGHTRAIN SIMULATOR
        </h1>
        <p className="text-gray-400 italic">ナイトレイン：スキル・性能シミュレータ</p>
      </header>

      <main className="max-w-6xl mx-auto space-y-12">
        
        {/* キャラクターステータス */}
        <section>
          <SectionTitle icon={Shield} title="キャラクターステータス" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-900/50 p-6 rounded-lg border border-gray-800">
            <Dropdown label="夜渡りの種類" />
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-400 uppercase tracking-wider">レベル</label>
              <input type="number" defaultValue={1} className="bg-gray-800 border border-gray-600 text-white rounded p-2 outline-none" />
            </div>
          </div>
        </section>

        {/* 武器欄 (2x3 Grid) */}
        <section>
          <SectionTitle icon={Sword} title="武器欄" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-900 p-4 rounded-xl border border-gray-800 hover:border-yellow-900 transition-colors">
                <p className="text-yellow-600 font-bold mb-3 uppercase text-xs tracking-widest">Slot {i}</p>
                <div className="space-y-3">
                  <Dropdown label="武器名" />
                  {[1, 2, 3, 4, 5].map(s => <Dropdown key={s} label={`スキル ${s}`} />)}
                  <div className="pt-2 border-t border-gray-800">
                    <Dropdown label="デメリットスキル" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 遺物・深層遺物 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <SectionTitle icon={Box} title="遺物 (3個)" />
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-gray-900/40 p-4 rounded border border-gray-800 space-y-2">
                   <Dropdown label={`遺物 ${i}`} />
                   <Dropdown label="スキル 1" />
                   <Dropdown label="スキル 2" />
                   <Dropdown label="スキル 3" />
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle icon={Layers} title="深層遺物 (3個)" />
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-red-950/10 p-4 rounded border border-red-900/30 space-y-2">
                   <Dropdown label={`深層遺物 ${i}`} />
                   <div className="grid grid-cols-1 gap-2">
                     {[1, 2, 3].map(s => <Dropdown key={s} label={`スキル ${s}`} />)}
                     {[1, 2, 3].map(s => <Dropdown key={s} label={`デメリット ${s}`} />)}
                   </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* シミュレーションボタン */}
        <div className="flex justify-center pt-8 pb-20">
          <button className="flex items-center gap-2 bg-gradient-to-b from-yellow-600 to-yellow-800 hover:from-yellow-500 hover:to-yellow-700 text-white font-bold py-4 px-12 rounded-full shadow-lg shadow-yellow-900/20 transform hover:scale-105 active:scale-95 transition-all">
            <Zap className="fill-current" />
            SIMULATION START
          </button>
        </div>

      </main>
    </div>
  );
}