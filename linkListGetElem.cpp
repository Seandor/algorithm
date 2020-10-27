#include <stdio.h>
#include <malloc.h>
#include "linkList.h"

int main()
{
  LinkList test;
  LNode* targetNode;
  LNode* targetNode2;

  List_TailInsert(test);

  printList(test);

  printf("The list length is: %d\n", getLength(test));

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
