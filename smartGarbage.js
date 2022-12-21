function smartGarbage(trash, bins) {
  const type = Object.keys(bins)
  for(let i = 0; i < type.length; i++) {
    if (trash === type[i]) {
      bins[type[i]] = bins[type[i]] + 1
      return bins
    }
  }
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }))