//方案一
// //记录范围，不断收缩
// export default function vspiralOrder(matrix) {
//   if (matrix.length === 1) return matrix[0];
//   if (matrix.length === 0) return [];

//   let res = [];
//   let rl = 0,
//     rh = matrix.length - 1,
//     cl = 0,
//     ch = matrix[0].length - 1;

//   while (1) {
//     for (let i = cl; i <= ch; i++) res.push(matrix[rl][i]);//自左向右
//     if (++rl > rh) break;
//     for (let i = rl; i <= rh; i++) res.push(matrix[i][ch]);//自上而下
//     if (--ch < cl) break;
//     for (let i = ch; i >= cl; i--) res.push(matrix[rh][i]);//自右向左
//     if (--rh < rl) break;
//     for (let i = rh; i >= rl; i--) res.push(matrix[i][cl]);//自下至上
//     if (++cl > ch) break;
//   }

//   return res;
// }

//方案二
//按顺序依次从矩阵中弹出数据，并放入到res中
export default function vspiralOrder(matrix) {
  if (matrix.length === 1) return matrix[0];
  if (matrix.length === 0) return [];

  let res = [];

  //利用字典，使得方向形成闭环，不断循环改变方向。
  const dircs = { top: "right", right: "bottom", bottom: "left", left: "top" };
  let cDirection = "top";

  while (matrix[0] && matrix[0].length) {
    if (cDirection === "top") {
      res.push(...matrix.shift());
    }
    if (cDirection === "right") {
      for (let row = 0; row < matrix.length; row++) res.push(matrix[row].pop());
    }
    if (cDirection === "bottom") {
      res.push(...matrix.pop().reverse());
    }
    if (cDirection === "left") {
      for (let row = matrix.length - 1; row >= 0; row--)
        res.push(matrix[row].shift());
    }
    cDirection = dircs[cDirection];
  }
  return res;
}
