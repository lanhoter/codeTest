class MyLinkedList {
    class Node {
        int val;
        Node prev, next;

        public Node(int val) {
            this.val = val;
        }
    }

    int size;
    Node head, tail;

    /** Initialize your data structure here. */
    public MyLinkedList() {
        size = 0;
        head = new Node(0);
        tail = new Node(0);

        head.next = tail;
        tail.prev = head;
    }

    private Node node(int index) {
        if (index < 0 || index > size) {
            return null;
        }

        Node curt = head.next;
        for (int i = 0; i < index; i++)
            curt = curt.next;
        return curt;
    }

    /**
     * Get the value of the index-th node in the linked list. If the index is
     * invalid, return -1.
     */
    public int get(int index) {
        if (index < 0 || index >= size)
            return -1;
        return node(index).val;
    }

    public void addAtHead(int val) {
        Node node = new Node(val);
        Node next = head.next;

        head.next = node;
        next.prev = node;
        node.prev = head;
        node.next = next;
        size++;
    }

    public void addAtTail(int val) {
        Node node = new Node(val);
        Node prev = tail.prev;

        prev.next = node;
        tail.prev = node;
        node.prev = prev;
        node.next = tail;
        size++;
    }

    /**
     * Add a node of value val before the index-th node in the linked list. If index
     * equals to the length of linked list, the node will be appended to the end of
     * linked list. If index is greater than the length, the node will not be
     * inserted.
     */
    public void addAtIndex(int index, int val) {
        if (index < 0 || index > size) {
            return;
        }

        if (index == 0) {
            addAtHead(val);
        } else if (index == size) {
            addAtTail(val);
        } else {
            Node curt = node(index);
            Node prev = curt.prev;
            Node node = new Node(val);

            node.prev = prev;
            node.next = curt;
            prev.next = node;
            curt.prev = node;
            size++;
        }
    }

    /** Delete the index-th node in the linked list, if the index is valid. */
    public void deleteAtIndex(int index) {
        if (index < 0 || index >= size) {
            return;
        }
        Node curt = node(index);
        Node prev = curt.prev;
        Node next = curt.next;
        prev.next = next;
        next.prev = prev;
        size--;
    }
}