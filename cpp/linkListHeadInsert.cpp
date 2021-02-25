#include <stdio.h>
#include <malloc.h>

typedef struct LNode
{
  int data;
  struct LNode *next;
} LNode, *LinkList;


/*
头插法生成链表。用这种方法生成链表，新插入的元素永远是第一个元素，最先插入的元素为最后一个元素。

插入新元素的逻辑是：

首先将头节点指针置空 
新节点指针指向头节点的指针
头节点指针再指向新节点

对头结点而言：

第一次插入：
头节点指针指向第一个元素

第二次插入：
头节点指针指向第一个元素

...

对第一次插入的新节点S而言：

第一次插入：
S为第一个元素，它的指针指向空。

第二次插入：
S变成了第二个元素，它的指针指向空。

...

不难看出，第一个插入的节点就是尾节点。

*/
LinkList List_HeadInsert(LinkList &L) {
  LNode *s;
  int x;
  L = (LinkList)malloc(sizeof(LNode));
  L->next = NULL;
  scanf("%d", &x);
  while (x != 9999) {
    s = (LNode*)malloc(sizeof(LNode));
    s->data = x;
    s->next = L->next;
    L->next = s;
    scanf("%d", &x);
  }
  return L;
}

int main()
{
  LinkList test;

  List_HeadInsert(test);

  return 0;
}