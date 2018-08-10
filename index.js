function destructivelyAppendKitten(name) {
  kittens.push(name)
}// Add your functions and code here

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten (name) {
  return [name, ...kittens]
}
