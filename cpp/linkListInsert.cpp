#include "linkList.h"

/*
Insert a Node at postion i 
*/
LNode* insertNode(LinkList L, LNode* targetNode, int i) {
  int listLength;
  LNode* prior;

  listLength = getLength(L);

  if (i > listLength || i < 1) {
    return NULL;
  }

  prior = GetElemByIndex(L, i - 1);
  targetNode->next = prior->next;
  prior->next = targetNode;

  return targetNode;
}

int main() {
  LinkList test;
  LNode* newNode;

  List_TailInsert(test);

  newNode = (LNode *)malloc(sizeof(LNode));
  newNode->data = 23;

  insertNode(test, newNode, 1);

  printList(test);
}