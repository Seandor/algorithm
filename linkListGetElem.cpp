#include <stdio.h>
#include <malloc.h>

typedef struct LNode
{
  int data;
  struct LNode *next;
} LNode, *LinkList;

LinkList List_TailInsert(LinkList &L);

/*
按照索引查找元素，并返回元素的指针。
*/
LNode* GetElemByIndex(LinkList L, int i) {
  int currentIndex = 1;
  LNode* cursor = L->next;

  if (i == 0) {
    return L;
  }

  if (i < 1) {
    return NULL;
  }

  while (cursor && currentIndex < i) {
    cursor = cursor->next;
    currentIndex++;
  }

  return cursor;
}

/*
查找表中有没有某个值。
*/
LNode* findElemByValue(LinkList L, int value) {
  LNode* cursor = L->next;
  while (cursor != NULL && cursor->data != value) {
    cursor = cursor->next;
  }
  return cursor;
}

void printNode(LNode node) {
  printf("Node data is: %d\n", node.data);
}

void printList(LinkList L) {
  LNode *cursor = L->next;

  while (cursor) {
    printf("%d\n", cursor->data);
    cursor = cursor->next;
  }
}

int main()
{
  LinkList test;
  LNode* targetNode;
  LNode* targetNode2;

  List_TailInsert(test);

  printList(test);

  targetNode = GetElemByIndex(test, 3);

  printNode(*targetNode);

  targetNode2 = findElemByValue(test, 9);

  if (targetNode2 != NULL) {
    printNode(*targetNode2);
  } else {
    printf("TargeNode2 not found!\n");
  }

  return 0;
}


LinkList List_TailInsert(LinkList &L)
{
  int input;
  L = (LinkList)malloc(sizeof(LNode));

  LNode *newNode;
  LNode *tailNode = L;
  scanf("%d", &input);
  while (input != 9999)
  {
    newNode = (LNode *)malloc(sizeof(LNode));
    newNode->data = input;
    tailNode->next = newNode;
    tailNode = newNode;
    scanf("%d", &input);
  }
  tailNode->next = NULL;
  return L;
}