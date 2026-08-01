import fs from 'fs';
import path from 'path';

const replacements = [
  // Opacity variants first so they match before the base variants
  { from: 'bg-gray-900/90', to: 'bg-white/90 dark:bg-gray-900/90' },
  { from: 'bg-gray-900/95', to: 'bg-white/95 dark:bg-gray-900/95' },
  { from: 'bg-gray-950/80', to: 'bg-slate-50/80 dark:bg-gray-950/80' },
  { from: 'bg-gray-950/90', to: 'bg-slate-50/90 dark:bg-gray-950/90' },
  { from: 'bg-gray-800/80', to: 'bg-slate-100/80 dark:bg-gray-800/80' },
  { from: 'bg-gray-800/90', to: 'bg-slate-100/90 dark:bg-gray-800/90' },
  { from: 'bg-gray-800/25', to: 'bg-slate-100/40 dark:bg-gray-800/25' },
  { from: 'bg-gray-800/30', to: 'bg-slate-100/50 dark:bg-gray-800/30' },
  { from: 'bg-gray-800/40', to: 'bg-slate-100/60 dark:bg-gray-800/40' },
  { from: 'bg-gray-800/50', to: 'bg-slate-100/70 dark:bg-gray-800/50' },
  { from: 'bg-gray-800/60', to: 'bg-slate-100/80 dark:bg-gray-800/60' },
  { from: 'border-gray-700/30', to: 'border-slate-200/30 dark:border-gray-700/30' },
  { from: 'border-gray-700/40', to: 'border-slate-200/40 dark:border-gray-700/40' },
  { from: 'border-gray-700/50', to: 'border-slate-200/50 dark:border-gray-700/50' },
  { from: 'border-gray-800/80', to: 'border-slate-200/80 dark:border-gray-800/80' },
  { from: 'border-gray-600/50', to: 'border-slate-300/50 dark:border-gray-600/50' },
  { from: 'border-gray-600/70', to: 'border-slate-300/70 dark:border-gray-600/70' },
  { from: 'shadow-black/40', to: 'shadow-slate-200/50 dark:shadow-black/40' },
  { from: 'text-gray-500/80', to: 'text-slate-500/80 dark:text-gray-500/80' },

  // Base variants
  { from: 'bg-gray-950', to: 'bg-slate-50 dark:bg-gray-950' },
  { from: 'bg-gray-900', to: 'bg-white dark:bg-gray-900' },
  { from: 'bg-gray-800', to: 'bg-slate-100 dark:bg-gray-800' },
  { from: 'bg-gray-850', to: 'bg-slate-50 dark:bg-gray-850' },
  { from: 'text-white', to: 'text-slate-900 dark:text-white' },
  { from: 'text-gray-400', to: 'text-slate-600 dark:text-gray-400' },
  { from: 'text-gray-300', to: 'text-slate-700 dark:text-gray-300' },
  { from: 'text-gray-500', to: 'text-slate-500 dark:text-gray-500' },
  { from: 'border-gray-700', to: 'border-slate-200 dark:border-gray-700' },
  { from: 'border-gray-600', to: 'border-slate-300 dark:border-gray-600' },
  { from: 'border-gray-800', to: 'border-slate-200 dark:border-gray-800' },
];

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(file => {
  if (file.endsWith('.js') || file.endsWith('.jsx')) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    replacements.forEach(({from, to}) => {
      // Exclude dark: from prefix matching, but match hover:, focus:, etc.
      const regex = new RegExp(`(?<!dark:)\\b((?!dark:)[a-z-]+:)?${from}\\b`, 'g');
      content = content.replace(regex, (match, prefix) => {
        prefix = prefix || '';
        const [light, darkStr] = to.split(' dark:');
        return `${prefix}${light} dark:${prefix}${darkStr}`;
      });
    });

    if (content !== original) {
      fs.writeFileSync(file, content);
      console.log('Refactored', file);
    }
  }
});
