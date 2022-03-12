## 题目

[原题](https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnr003/)

* 实现 strStr() 函数。
* 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。

说明：

* 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
* 对于本题而言，当 needle 是空字符串时我们应当返回 0 。



示例 1：

```
输入：haystack = "hello", needle = "ll"
输出：2
```

示例 2：

```
输入：haystack = "aaaaa", needle = "bba"
输出：-1
```

示例 3：

```
输入：haystack = "", needle = ""
输出：0
```


提示：

* 0 <= haystack.length, needle.length <= 5 * 10<sup>4</sup>
* haystack 和 needle 仅由小写英文字符组成

## 代码实现

实际上就是实现indexOf方法

* 将母字符串依次分割为多个长度等于子字符串的字符串
* 再与子字符串进行比较

```
export default function strStr(haystack, needle) {
  if (needle === "") return 0;
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let k = 0;
    let count = 0;
    for (let j = i; j < needle.length + i; j++) {
      if (haystack[j] === needle[k]) {
        count++;
        k++;
      } else {
        break;
      }
    }
    if (count === needle.length) {
      return i;
    }
  }
  return -1;
}
```

* 若结合原生API，会让代码更加简洁
* 直接截取对应长度的 string 进行比较，减少了第二个 `for` 循环

```
export default function strStr(haystack, needle) {
  if (needle === "") return 0;
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let str = haystack.substr(i, needle.length);
    if (str === needle) return i;
  }
  return -1;
}
```

