import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.ArrayList;

class Node {
    String name;
    int time;
    int amount;
    String city;
    int index;

    public Node(String n, int t, int a, String l, int i) {
        this.name = n;
        this.time = t;
        this.amount = a;
        this.city = l;
        this.index = i;
    }
}

class Solution {
    public List<String> invalidTransactions(String[] transactions) {
        List<Node> list = new ArrayList<>();
        Map<String, List<Node>> map = new HashMap<>();
        int index = 0;
        for (String transaction : transactions) {
            String[] t = transaction.split(",");
            Node node = new Node(t[0], Integer.valueOf(t[1]), Integer.valueOf(t[2]), t[3], index);
            list.add(node);
            map.putIfAbsent(t[0], new ArrayList<>());
            map.get(t[0]).add(node);
            index++;
        }
        List<String> res = new ArrayList<>();
        for (int i = 0; i < list.size(); ++i) {
            Node cur = list.get(i);
            if (cur.amount > 1000) {
                res.add(transactions[i]);
                continue;
            }
            boolean found = false;
            for (Node node : map.get(cur.name)) {
                if (node.index != i && !node.city.equals(cur.city) && Math.abs(node.time - cur.time) <= 60) {
                    found = true;
                    break;
                }
            }
            if (found) {
                res.add(transactions[i]);
            }
        }
        return res;
    }
}