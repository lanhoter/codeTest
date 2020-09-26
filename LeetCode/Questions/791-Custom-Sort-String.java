class Solution {
    public String customSortString(String S, String T) {
        int[] flag = new int[26];
        StringBuilder res = new StringBuilder();
        for (char c : T.toCharArray()) {
            flag[c - 'a']++;
        }
        for (char c : S.toCharArray()) {
            for (int i = 0; i < flag[c - 'a']; i++) {
                res.append(c);
            }
            flag[c - 'a'] = 0;
        }
        for (char c = 'a'; c <= 'z'; c++) {
            for (int i = 0; i < flag[c - 'a']; i++) {
                res.append(c);
            }
        }
        return res.toString();
    }
}