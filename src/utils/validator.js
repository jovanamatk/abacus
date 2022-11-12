export default function isValidExpression(formula, currentCharacter) {
    const previousCharacter = formula.substr(-1);
    const badCharacters = ['+', '-'];

    if (badCharacters.indexOf(previousCharacter) > -1 && badCharacters.indexOf(currentCharacter) > -1) {
        return false;
    }

    return formula !== '';
}
