#include <stdio.h>
#include <malloc.h>

typedef struct LNode
{
  int data;
  struct LNode *next;
} LNode, *LinkList;


/*
尾插法

最好理解的插入方式，一个接一个地往后插入。

*/
LinkList List_TailInsert(LinkList &L) {
  int input;
  L = (LinkList)malloc(sizeof(LNode));

  LNode *newNode;
  LNode *tailNode = L;
  scanf("%d", &input);
  while (input != 9999) {
    newNode = (LNode*)malloc(sizeof(LNode));
    newNode->data = input;
    tailNode->next = newNode;
    tailNode = newNode;
    scanf("%d", &input);
  }
  tailNode->next = NULL;
  return L;
}

int main()
{
  LinkList test;

  List_TailInsert(test);

  return 0;
}