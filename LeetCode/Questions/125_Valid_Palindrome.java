class Solution {
    public boolean isPalindrome(String s) {
        int left = 0;
        int right = s.length() - 1;

        while (left < right) {
            char leftChar = s.charAt(left);
            char rightChar = s.charAt(right);

            boolean hasSkipped = false;
            if (!isAlphanumeric(leftChar)) {
                left++;
                hasSkipped = true;
            }
            if (!isAlphanumeric(rightChar)) {
                right--;
                hasSkipped = true;
            }

            if (hasSkipped) {
                continue;
            }

            leftChar = toLowerCase(leftChar);
            rightChar = toLowerCase(rightChar);

            if (leftChar != rightChar) {
                return false;
            } else {
                left++;
                right--;
            }
        }

        return true;
    }

    private boolean isAlphanumeric(char c) {
        return ('0' <= c && c <= '9') || ('a' <= c && c <= 'z') || ('A' <= c && c <= 'Z');
    }

    private char toLowerCase(char c) {
        if ('A' <= c && c <= 'Z') {
            return (char) ('a' + (c - 'A'));
        }
        return c;
    }
}