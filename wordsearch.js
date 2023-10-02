const wordSearch = (letters, word) => {
  if (letters.length === 0 || word === '') {
    return false;
  }

  const horizontalJoin = letters.map(ls => ls.join(''));

  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  for (let i = 0; i < letters[0].length; i++) {
    const verticalJoin = letters.map(ls => ls[i]).join('');
    if (verticalJoin.includes(word)) {
      return true;
    }
  }

  return false;
};

module.exports = wordSearch;
