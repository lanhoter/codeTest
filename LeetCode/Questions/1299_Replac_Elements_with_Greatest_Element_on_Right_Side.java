class Solution {
    public int[] replaceElements(int[] arr) {
        int length = arr.length;

        int high = arr[length - 1];
        for (int i = length - 2; i >= 0; i--) {
            if (high > arr[i]) {
                arr[i] = high;
                high = arr[i];
            } else {
                int temp = high;
                high = arr[i];
                arr[i] = temp;
            }
        }

        arr[length - 1] = -1;
        return arr;
    }
}