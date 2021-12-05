///6 write replace;

function ReplaceString(n) {
  return n.replaceAll("n", "").replaceAll("o", "");
}
console.log(
  ReplaceString(
    "Yes, London. You know:fish, chips, cup ‘o tea, badfood, worse weather”, “o” "
  )
);
