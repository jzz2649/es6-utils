const range = (min, max) => {
    if (min === max) return min;
    if (min > max) [min, max] = [max, min];
    return Math.floor(Math.random()*(max-min+1))+min;
}
