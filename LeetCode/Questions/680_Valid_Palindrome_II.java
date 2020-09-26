class Solution {
    public boolean validPalindrome(String s) {
        int start = 0;
        int end = s.length() - 1;
        boolean moved = false;
        boolean movedTwice = false;

        while (start < end) {
            if (s.charAt(start) != s.charAt(end)) {
                if (moved) {
                    if (movedTwice)
                        return false;
                    start--;
                    end--;
                    movedTwice = true;
                    continue;
                }
                moved = true;
                start++;
                continue;
            }
            start++;
            end--;
        }
        return true;

    }
}
