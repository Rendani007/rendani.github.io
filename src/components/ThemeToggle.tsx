
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full glassmorphism hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300 animate-pulse-glow"
    >
      <div className="relative w-5 h-5">
        <Sun
          className={`absolute top-0 left-0 w-5 h-5 text-yellow-500 transition-all duration-500 ${
            theme === 'light' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
          }`}
        />
        <Moon
          className={`absolute top-0 left-0 w-5 h-5 text-blue-400 transition-all duration-500 ${
            theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
          }`}
        />
      </div>
    </Button>
  );
};

export default ThemeToggle;
