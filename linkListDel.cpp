#include "linkList.h"

/*
Delete a Node at postion i 
*/
void *deleteNode(LinkList L, int i)
{
  int listLength;
  LNode *target;
  LNode *prior;

  listLength = getLength(L);

  if (i > listLength || i < 1)
  {
    return NULL;
  }

  prior = GetElemByIndex(L, i - 1);
  target = prior->next;
  prior->next = target->next;
  free(target);
}

int main()
{
  LinkList test;

  List_TailInsert(test);

  deleteNode(test, 1);

  printList(test);
}