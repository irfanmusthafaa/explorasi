import {create} from 'zustand';

interface ThemeStore {
  theme: boolean;
  setTheme: (key: boolean) => void;
}

const useThemeStore = create<ThemeStore>((set) => ({
  theme: true, 
  setTheme: (key) => set({ theme: key }),
}));

export default useThemeStore;



// import create from 'zustand';

// const useThemeStore = create((set) => ({
//   theme: localStorage.getItem('theme') || 'light', // Cek jika tema disimpan di localStorage
//   toggleTheme: () => {
//     set((state) => {
//       const newTheme = state.theme === 'light' ? 'dark' : 'light';
//       localStorage.setItem('theme', newTheme); // Simpan tema yang dipilih di localStorage
//       return { theme: newTheme };
//     });
//   },
// }));

// export default useThemeStore;
