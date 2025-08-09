function capitalizeName(name, locale = 'en-US') {
  if (typeof name !== 'string' || !name.trim()) return '';
  
  return name
    .trim()
    .split(/\s+/) // Handles multiple spaces
    .map(word => word.charAt(0).toLocaleUpperCase(locale) + word.slice(1))
    .join(' ');
}

export default capitalizeName;