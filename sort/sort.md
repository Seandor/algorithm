# 排序

原地排序算法指的是空间复杂度是 O(1) 的排序算法。

分析排序算法，除了通用的时间复杂度，空间复杂度，还有一个重要的衡量指标：稳定性。一个排序算法是稳定的，指的是经过排序之后，序列中原来相等的元素之间原有的相对位置保持不变。

## 冒泡排序

冒泡排序的名字非常地形象的说明了该算法的执行过程，两层循环，外层循环 `0 ~ n`, 内层循环 `0 ~ n - i - 1`, 额外使用一个标志位来表示一次循环有没有进行数据交换，如果没有，则说明序列已经有序。冒泡排序的图片描述见 images 目录（[图片来源](https://time.geekbang.org/column/article/41802)）。

冒泡排序只需要常数个临时变量来进行数据交换，所以空间复杂度为 O(1)，是原地排序算法。

复杂度的分析比较复杂，过程略。最好时间复杂度为 O(n)，最差时间复杂度为 O(n^2)， 平均时间复杂度为 O(n^2)。

冒泡排序是稳定的排序算法。

## 插入排序

插入排序的思想是将序列分为两个区间，**已排序区间**和**未排序区间**。初始的已排序区间为序列的第一个元素，剩余的部分为未排序区间。算法的执行过程就是将未排序区间中的元素插入到已排序的区间中，直到未排序的区间为空。插入需要搬运和插入两个操作，相比冒泡难理解一点。

插入排序不需要额外的存储空间，所以是原地排序。

插入排序是稳定的排序算法。

插入排序的时间复杂度和冒泡排序一样。

## 选择排序

选择排序的思路和插入排序类似，都是将序列分为已排序区间和未排序区间，不同的是选择排序每次循环从未排序区间中找出一个最小的元素放到已排序区间的末尾。我认为最直接的思路。

选择排序是原地排序。选择排序的最好，最差，平均时间复杂度都是 O(n^2)。

选择排序是**不稳定**的排序算法。少了稳定性这一优点，选择排序就显得逊色不少。最直接的果然也是最笨的排序算法。

## 希尔排序

希尔排序具有特殊的历史意义，所以也是唯一一个以人名命名的排序算法。它是第一个时间复杂度突破 O(n^2) 的排序算法。写这个算法的技巧是，先写出选择排序，再在选择排序的基础上修改。

## 归并排序

归并排序采用分治的思想，将一个序列分成两个序列，两个分成四个，直到每个序列中只有一个元素，再将这些子序列一次合并，还原成一个有序的大序列。这里应用二叉树的后续遍历代码框架，递归函数主体代码不难写，但是合并函数稍微复杂一下，应用哨兵可以大大简化。

归并排序的时间复杂度计算更复杂，有兴趣再去讨论。最好，最差，平均时间复杂度都是 O(nlogn)。

归并排序的空间复杂度为 O(n)， 是稳定的排序算法。

## 快速排序

快速排序也是应用了分治思想，不过它是**自上而下**，而不是归并排序的**自下而上**的解决问题。具体的思路是从待排序列中随便选取一个元素作为分区点，将序列分为三个部分，小于 pivot 的在它左边，大于 pivot 的在它右边。再对子区间进行同样的操作，直到区间长度缩小为1，这时整个序列都变为有序了。

快速排序的代码框架类似二叉树的前序遍历，核心部分是分区函数，这里可以简单的使用额外的数组空间实现，也可以用一点技巧实现原地排序。

快速排序不是稳定的排序算法。

快速排序的时间复杂度最坏是 O(n^2), 平均时间复杂度是 O(nlogn)。
