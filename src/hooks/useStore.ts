import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 将来的に調査結果を流し込むための「型」の定義（今は仮）
interface SimulatorState {
  // キャラクター情報
  character: {
    nightType: string;
    level: number;
  };
  // 武器スロット (6個分)
  weapons: Array<{
    name: string;
    skills: string[];
    demerit: string;
  }>;
  // 遺物 (3個分)
  relics: Array<{
    name: string;
    skills: string[];
  }>;
  // 深層遺物 (3個分)
  deepRelics: Array<{
    name: string;
    skills: string[];
    demerits: string[];
  }>;

  // アクション（状態を更新する関数）
  updateCharacter: (data: any) => void;
  updateWeapon: (index: number, data: any) => void;
  // ... 他の更新関数もここに追加していく
}

// LocalStorageへの保存を自動化する設定
export const useStore = create<SimulatorState>()(
  persist(
    (set) => ({
      // --- 初期値 ---
      character: { nightType: '', level: 1 },
      weapons: Array(6).fill({ name: '', skills: Array(5).fill(''), demerit: '' }),
      relics: Array(3).fill({ name: '', skills: Array(3).fill('') }),
      deepRelics: Array(3).fill({ name: '', skills: Array(3).fill(''), demerits: Array(3).fill('') }),

      // --- 更新ロジック ---
      updateCharacter: (data) => 
        set((state) => ({ character: { ...state.character, ...data } })),
      
      updateWeapon: (index, data) => 
        set((state) => {
          const newWeapons = [...state.weapons];
          newWeapons[index] = { ...newWeapons[index], ...data };
          return { weapons: newWeapons };
        }),
    }),
    {
      name: 'nightrain-simulator-storage', // LocalStorageでの保存名
    }
  )
);